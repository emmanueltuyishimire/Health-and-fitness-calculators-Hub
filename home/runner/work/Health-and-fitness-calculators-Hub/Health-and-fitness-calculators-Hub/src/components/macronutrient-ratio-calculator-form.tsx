
'use client';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Terminal } from 'lucide-react';
import Link from 'next/link';
import { PieChart as RechartsPieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

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
import { MacronutrientRatioSchema, type MacronutrientRatioFormValues } from '@/lib/definitions';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Separator } from '@/components/ui/separator';
import { Slider } from '@/components/ui/slider';

const dietPlans = {
  balanced: { label: 'Balanced', protein: 30, carbs: 40, fat: 30 },
  high_protein: { label: 'High Protein', protein: 40, carbs: 30, fat: 30 },
  low_carb: { label: 'Low Carb', protein: 40, carbs: 20, fat: 40 },
  keto: { label: 'Ketogenic', protein: 30, carbs: 5, fat: 65 },
  custom: { label: 'Custom', protein: 30, carbs: 40, fat: 30 },
};

const COLORS = {
  protein: 'hsl(var(--chart-1))',
  carbs: 'hsl(var(--chart-2))',
  fat: 'hsl(var(--chart-5))',
};

interface Result {
  proteinGrams: number;
  carbsGrams: number;
  fatGrams: number;
  chartData: { name: string; value: number; fill: string }[];
}

export function MacronutrientRatioCalculatorForm() {
  const { state, dispatch } = useCalculator();
  const [result, setResult] = useState<Result | null>(null);

  const form = useForm<MacronutrientRatioFormValues>({
    resolver: zodResolver(MacronutrientRatioSchema),
    defaultValues: {
      calories: state.calorieNeeds?.toFixed(0) || '2000',
      dietPlan: 'balanced',
      protein: 30,
      carbs: 40,
      fat: 30,
    },
  });

  const dietPlan = form.watch('dietPlan');
  const customProtein = form.watch('protein');
  const customCarbs = form.watch('carbs');

  useEffect(() => {
    if (state.calorieNeeds) {
      form.setValue('calories', state.calorieNeeds.toFixed(0));
    }
  }, [state.calorieNeeds, form]);
  
  useEffect(() => {
    if (dietPlan !== 'custom') {
      const { protein, carbs, fat } = dietPlans[dietPlan];
      form.setValue('protein', protein);
      form.setValue('carbs', carbs);
      form.setValue('fat', fat);
    }
  }, [dietPlan, form]);

  useEffect(() => {
    if (dietPlan === 'custom') {
        const remaining = 100 - customProtein - customCarbs;
        if (remaining >= 0) {
            form.setValue('fat', remaining);
        } else {
            const adjustedCarbs = 100 - customProtein;
            form.setValue('carbs', adjustedCarbs);
            form.setValue('fat', 0);
        }
    }
  }, [customProtein, customCarbs, dietPlan, form]);


  function onSubmit(data: MacronutrientRatioFormValues) {
    const calories = parseFloat(data.calories);
    const proteinPct = data.protein;
    const carbsPct = data.carbs;
    const fatPct = data.fat;

    const proteinGrams = (calories * (proteinPct / 100)) / 4;
    const carbsGrams = (calories * (carbsPct / 100)) / 4;
    const fatGrams = (calories * (fatPct / 100)) / 9;

    setResult({
      proteinGrams,
      carbsGrams,
      fatGrams,
      chartData: [
        { name: 'Protein', value: proteinPct, fill: COLORS.protein },
        { name: 'Carbs', value: carbsPct, fill: COLORS.carbs },
        { name: 'Fat', value: fatPct, fill: COLORS.fat },
      ],
    });
    
    dispatch({ type: 'SET_USER_DATA', payload: { ...data } });
  }

  const handleSelectChange = (name: keyof MacronutrientRatioFormValues) => (value: string) => {
    form.setValue(name, value);
    dispatch({ type: 'SET_USER_DATA', payload: { [name]: value } });
  };

  return (
    <div>
      {!state.calorieNeeds && (
        <Alert className="mb-6">
          <Terminal className="h-4 w-4" />
          <AlertTitle>Calorie Goal Not Found</AlertTitle>
          <AlertDescription>
            For best results, please <Link href="/daily-calorie-needs" className="font-semibold underline">calculate your Daily Calorie Needs</Link> first. A default value has been set.
          </AlertDescription>
        </Alert>
      )}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <FormField
              control={form.control}
              name="calories"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Daily Calorie Target</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="dietPlan"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Diet Plan</FormLabel>
                  <Select onValueChange={handleSelectChange('dietPlan')} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {Object.entries(dietPlans).map(([key, { label }]) => (
                        <SelectItem key={key} value={key}>{label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {dietPlan === 'custom' && (
            <div className="space-y-4 rounded-md border p-4">
              <h4 className="font-medium">Custom Ratio</h4>
              <FormField
                control={form.control}
                name="protein"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Protein: {field.value}%</FormLabel>
                    <FormControl>
                      <Slider
                        min={0}
                        max={100}
                        step={1}
                        value={[field.value]}
                        onValueChange={(value) => field.onChange(value[0])}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="carbs"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Carbohydrates: {field.value}%</FormLabel>
                    <FormControl>
                      <Slider
                        min={0}
                        max={100 - customProtein}
                        step={1}
                        value={[field.value]}
                        onValueChange={(value) => field.onChange(value[0])}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
               <FormField
                control={form.control}
                name="fat"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Fat: {field.value}%</FormLabel>
                    <FormControl>
                      <Slider
                        disabled
                        value={[field.value]}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
          )}

          <Button type="submit" className="w-full sm:w-auto">Calculate Macros</Button>
        </form>
      </Form>
      {result && (
        <>
          <Separator className="my-6" />
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground text-center md:text-left">Your Daily Macronutrient Targets</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsPieChart>
                    <Tooltip
                        contentStyle={{
                            background: "hsl(var(--background))",
                            border: "1px solid hsl(var(--border))",
                            borderRadius: "var(--radius)",
                        }}
                        labelStyle={{ color: "hsl(var(--foreground))" }}
                    />
                    <Pie data={result.chartData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
                      {result.chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                      ))}
                    </Pie>
                  </RechartsPieChart>
                </ResponsiveContainer>
              </div>
              <div className="space-y-2 text-center md:text-left">
                 <div className="flex items-center justify-between p-2 bg-muted rounded-md">
                    <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full" style={{ backgroundColor: COLORS.protein }} />
                        <span>Protein</span>
                    </div>
                    <span className="font-bold">{result.proteinGrams.toFixed(0)}g</span>
                </div>
                 <div className="flex items-center justify-between p-2 bg-muted rounded-md">
                    <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full" style={{ backgroundColor: COLORS.carbs }} />
                        <span>Carbohydrates</span>
                    </div>
                    <span className="font-bold">{result.carbsGrams.toFixed(0)}g</span>
                </div>
                 <div className="flex items-center justify-between p-2 bg-muted rounded-md">
                    <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full" style={{ backgroundColor: COLORS.fat }} />
                        <span>Fat</span>
                    </div>
                    <span className="font-bold">{result.fatGrams.toFixed(0)}g</span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
