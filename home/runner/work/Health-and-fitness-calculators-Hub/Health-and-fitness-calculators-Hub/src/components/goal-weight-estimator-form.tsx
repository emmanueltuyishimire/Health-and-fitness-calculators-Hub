
'use client';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Terminal, Calendar as CalendarIcon, AlertTriangle } from 'lucide-react';
import Link from 'next/link';
import { format } from 'date-fns';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useCalculator } from '@/context/calculator-context';
import { GoalWeightEstimatorSchema, type GoalWeightEstimatorFormValues } from '@/lib/definitions';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Separator } from '@/components/ui/separator';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { Calendar } from '@/components/ui/calendar';

interface Result {
  dailyCalorieTarget: number;
  weeklyChange: number;
  isAggressive: boolean;
}

export function GoalWeightEstimatorForm() {
  const { state, dispatch } = useCalculator();
  const [result, setResult] = useState<Result | null>(null);

  const form = useForm<GoalWeightEstimatorFormValues>({
    resolver: zodResolver(GoalWeightEstimatorSchema),
    defaultValues: {
      tdee: state.calorieNeeds?.toFixed(0) || '',
      currentWeight: state.weight || '',
      goalWeight: '',
      targetDate: new Date(),
      unitSystem: state.unitSystem,
    },
  });

  useEffect(() => {
    form.setValue('unitSystem', state.unitSystem);
  }, [state.unitSystem, form]);

  useEffect(() => {
    if (state.calorieNeeds) {
      form.setValue('tdee', state.calorieNeeds.toFixed(0));
    }
    if (state.weight) {
      form.setValue('currentWeight', state.weight);
    }
  }, [state.calorieNeeds, state.weight, form]);

  function onSubmit(data: GoalWeightEstimatorFormValues) {
    const tdee = parseFloat(data.tdee);
    const currentWeight = parseFloat(data.currentWeight);
    const goalWeight = parseFloat(data.goalWeight);
    const targetDate = data.targetDate;

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (targetDate <= today) {
        form.setError('targetDate', { message: 'Target date must be in the future.' });
        return;
    }

    const weightToChange = goalWeight - currentWeight;
    const daysToGoal = (targetDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24);
    const weeksToGoal = daysToGoal / 7;

    if (weeksToGoal < 1) {
        form.setError('targetDate', { message: 'Duration must be at least one week.' });
        return;
    }

    const weeklyChange = weightToChange / weeksToGoal;
    
    const unitMultiplier = state.unitSystem === 'metric' ? 7700 : 3500; // calories per kg/lb
    const dailyCalorieDelta = (weeklyChange * unitMultiplier) / 7;
    const dailyCalorieTarget = tdee + dailyCalorieDelta;

    const maxWeeklyChange = state.unitSystem === 'metric' ? 1 : 2; // 1kg or 2lbs
    const isAggressive = Math.abs(weeklyChange) > maxWeeklyChange;

    setResult({
      dailyCalorieTarget,
      weeklyChange,
      isAggressive
    });
    
    dispatch({ type: 'SET_USER_DATA', payload: { ...data } });
  }
  
  return (
    <div>
      {!state.calorieNeeds && (
        <Alert className="mb-6">
          <Terminal className="h-4 w-4" />
          <AlertTitle>TDEE Not Found</AlertTitle>
          <AlertDescription>
            Please <Link href="/tdee" className="font-semibold underline">calculate your TDEE</Link> first to create a plan.
          </AlertDescription>
        </Alert>
      )}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <FormField
              control={form.control}
              name="tdee"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your TDEE (calories/day)</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} disabled />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
             <FormField
              control={form.control}
              name="targetDate"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Target Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date < new Date() || date < new Date("1900-01-01")
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="currentWeight"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Current Weight ({state.unitSystem === 'metric' ? 'kg' : 'lbs'})</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="goalWeight"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Goal Weight ({state.unitSystem === 'metric' ? 'kg' : 'lbs'})</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" className="w-full sm:w-auto" disabled={!state.calorieNeeds}>Calculate Plan</Button>
        </form>
      </Form>
      {result && (
        <>
            <Separator className="my-6" />
            <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground text-center md:text-left">Your Goal Plan</h3>
                {result.isAggressive && (
                    <Alert variant="destructive">
                        <AlertTriangle className="h-4 w-4" />
                        <AlertTitle>Aggressive Goal</AlertTitle>
                        <AlertDescription>
                          This timeline requires a rate of weight change that may be unsafe or unsustainable. Consider extending your target date.
                        </AlertDescription>
                    </Alert>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
                    <div className="p-4 bg-muted rounded-lg">
                        <p className="text-sm text-muted-foreground">Required Daily Calories</p>
                        <p className="text-2xl font-bold text-primary">{result.dailyCalorieTarget.toFixed(0)}</p>
                        <p className="text-xs text-muted-foreground">kcal/day</p>
                    </div>
                     <div className="p-4 bg-muted rounded-lg">
                        <p className="text-sm text-muted-foreground">Required Weekly Change</p>
                        <p className={`text-2xl font-bold ${result.weeklyChange >= 0 ? 'text-blue-500' : 'text-green-500'}`}>{result.weeklyChange.toFixed(2)}</p>
                        <p className="text-xs text-muted-foreground">{state.unitSystem === 'metric' ? 'kg/week' : 'lbs/week'}</p>
                    </div>
                </div>
            </div>
        </>
      )}
    </div>
  );
}
