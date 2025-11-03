
'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Sparkles, Terminal } from 'lucide-react';
import Link from 'next/link';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { CalculatorCard } from '@/components/calculator-card';
import { useCalculator } from '@/context/calculator-context';
import { RecommendationsSchema, type RecommendationsFormValues } from '@/lib/definitions';
import { generateRecommendations } from '@/lib/actions';
import { useToast } from '@/hooks/use-toast';
import { Skeleton } from '@/components/ui/skeleton';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function RecommendationsPage() {
  const { state } = useCalculator();
  const { toast } = useToast();
  const [recommendations, setRecommendations] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<RecommendationsFormValues>({
    resolver: zodResolver(RecommendationsSchema),
    defaultValues: {
      preferences: '',
    },
  });
  
  const requiredData = state.bmi && state.bodyFat && state.idealWeight && state.bmr && state.dailyCalorieNeeds;

  async function onSubmit(data: RecommendationsFormValues) {
    if (!requiredData) {
        toast({
            variant: "destructive",
            title: "Missing Information",
            description: "Please use all calculators before generating recommendations.",
        });
        return;
    }
    
    setIsLoading(true);
    setRecommendations(null);

    const input = {
      bmi: state.bmi!,
      bodyFatPercentage: state.bodyFat!,
      idealWeight: state.idealWeight!,
      bmr: state.bmr!,
      dailyCalorieNeeds: state.dailyCalorieNeeds!,
      preferences: data.preferences,
    };
    
    const result = await generateRecommendations(input);

    if (result.error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: result.error,
      });
    } else if(result.recommendations) {
      setRecommendations(result.recommendations);
    }
    
    setIsLoading(false);
  }

  return (
    <CalculatorCard
      icon={<Sparkles className="h-8 w-8" />}
      title="Personalized Recommendations"
      description="Get AI-powered health and weight management tips tailored to your data and goals."
      result={
        isLoading ? (
            <div className="space-y-2">
                <Skeleton className="h-4 w-1/3" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-2/3" />
            </div>
        ) : recommendations && (
          <div className="space-y-2">
            <h3 className="font-semibold text-foreground">Your AI-Generated Recommendations</h3>
            <p className="text-foreground/90 whitespace-pre-wrap">{recommendations}</p>
          </div>
        )
      }
    >
      {!requiredData && (
        <Alert className="mb-6">
          <Terminal className="h-4 w-4" />
          <AlertTitle>Complete Your Profile</AlertTitle>
          <AlertDescription>
            For the best recommendations, please use all other calculators first. Missing:
            <span className="font-mono text-xs">
                {!state.bmi && ' BMI,'}
                {!state.bodyFat && ' Body Fat,'}
                {!state.idealWeight && ' Ideal Weight,'}
                {!state.bmr && ' BMR,'}
                {!state.dailyCalorieNeeds && ' Calorie Needs'}
            </span>.
             Go to <Link href="/bmi" className="font-semibold underline">BMI Calculator</Link> to start.
          </AlertDescription>
        </Alert>
      )}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="preferences"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Goals & Preferences</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="e.g., I want to lose weight by doing low-impact exercises. I am a vegetarian and prefer simple recipes."
                    {...field}
                    rows={4}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full sm:w-auto" disabled={isLoading || !requiredData}>
            {isLoading ? "Generating..." : "Get Recommendations"}
          </Button>
        </form>
      </Form>
    </CalculatorCard>
  );
}
