
'use client';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Terminal } from 'lucide-react';
import Link from 'next/link';

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
import { WeightGainGoalSchema, type WeightGainGoalFormValues } from '@/lib/definitions';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Separator } from '@/components/ui/separator';

const weeklyGainRates = {
  '0.25': { label: '0.25 lbs/week', surplus: 125 },
  '0.5': { label: '0.5 lbs/week', surplus: 250 },
  '1': { label: '1 lb/week', surplus: 500 },
};

const weeklyGainRatesMetric = {
  '0.125': { label: '0.125 kg/week', surplus: 138 },
  '0.25': { label: '0.25 kg/week', surplus: 275 },
  '0.5': { label: '0.5 kg/week', surplus: 550 },
};


export function WeightGainGoalCalculatorForm() {
  const { state, dispatch } = useCalculator();
  const [goalResult, setGoalResult] = useState<Record<string, number | string> | null>(null);

  const gainRates = state.unitSystem === 'metric' ? weeklyGainRatesMetric : weeklyGainRates;

  const form = useForm<WeightGainGoalFormValues>({
    resolver: zodResolver(WeightGainGoalSchema),
    defaultValues: {
      tdee: state.calorieNeeds?.toFixed(0) || '',
      currentWeight: state.weight,
      goalWeight: '',
      weeklyGain: state.unitSystem === 'metric' ? '0.25' : '0.5',
      unitSystem: state.unitSystem,
    },
     values: {
      tdee: state.calorieNeeds?.toFixed(0) || '',
      currentWeight: state.weight,
      weeklyGain: state.unitSystem === 'metric' ? '0.25' : '0.5',
      unitSystem: state.unitSystem,
      goalWeight: '',
    },
  });
  
  useEffect(() => {
    form.setValue('unitSystem', state.unitSystem);
    form.setValue('weeklyGain', state.unitSystem === 'metric' ? '0.25' : '0.5');
  }, [state.unitSystem, form]);

  useEffect(() => {
    if (state.calorieNeeds) {
      form.setValue('tdee', state.calorieNeeds.toFixed(0));
    }
  }, [state.calorieNeeds, form]);
  
  useEffect(() => {
    if (state.weight) {
      form.setValue('currentWeight', state.weight);
    }
  }, [state.weight, form]);

  function onSubmit(data: WeightGainGoalFormValues) {
    const tdee = parseFloat(data.tdee);
    const currentWeight = parseFloat(data.currentWeight);
    const goalWeight = parseFloat(data.goalWeight);
    const weeklyGain = parseFloat(data.weeklyGain);

    const weightToGain = goalWeight - currentWeight;
    if (weightToGain <= 0) {
      form.setError('goalWeight', { message: 'Goal weight must be greater than current weight.' });
      return;
    }
    
    const surplus = gainRates[data.weeklyGain as keyof typeof gainRates].surplus;
    const dailyCalorieTarget = tdee + surplus;
    const weeksToGoal = weightToGain / weeklyGain;

    setGoalResult({
      dailyCalorieTarget,
      weeksToGoal,
      totalWeightToGain: weightToGain,
    });
    
    dispatch({ type: 'SET_USER_DATA', payload: { weight: data.currentWeight, goalWeight: data.goalWeight, weeklyGain: data.weeklyGain } });
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    form.setValue(name as keyof WeightGainGoalFormValues, value);
    dispatch({ type: 'SET_USER_DATA', payload: { [name]: value } });
  };
  
  const handleSelectChange = (name: keyof WeightGainGoalFormValues) => (value: string) => {
    form.setValue(name, value);
    dispatch({ type: 'SET_USER_DATA', payload: { [name]: value } });
  };

  return (
    <div>
      {!state.calorieNeeds && (
        <Alert className="mb-6">
          <Terminal className="h-4 w-4" />
          <AlertTitle>TDEE Not Found</AlertTitle>
          <AlertDescription>
            Please <Link href="/tdee" className="font-semibold underline">calculate your TDEE</Link> first to create a weight gain plan.
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
              name="currentWeight"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Current Weight ({state.unitSystem === 'metric' ? 'kg' : 'lbs'})</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} onChange={handleInputChange}/>
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
                    <Input type="number" {...field} onChange={handleInputChange}/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="weeklyGain"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Desired Weekly Gain</FormLabel>
                  <Select onValueChange={handleSelectChange('weeklyGain')} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {Object.entries(gainRates).map(([key, { label }]) => (
                        <SelectItem key={key} value={key}>{label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" className="w-full sm:w-auto" disabled={!state.calorieNeeds}>Calculate Goal</Button>
        </form>
      </Form>
      {goalResult && (
        <>
            <Separator className="my-6" />
            <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground text-center md:text-left">Your Weight Gain Plan</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
                    <div className="p-4 bg-muted rounded-lg">
                        <p className="text-sm text-muted-foreground">Daily Calorie Target</p>
                        <p className="text-2xl font-bold text-primary">{Number(goalResult.dailyCalorieTarget).toFixed(0)}</p>
                        <p className="text-xs text-muted-foreground">kcal/day</p>
                    </div>
                     <div className="p-4 bg-muted rounded-lg">
                        <p className="text-sm text-muted-foreground">Est. Time to Goal</p>
                        <p className="text-2xl font-bold text-primary">{Number(goalResult.weeksToGoal).toFixed(1)}</p>
                        <p className="text-xs text-muted-foreground">weeks</p>
                    </div>
                </div>
                <p className="text-xs text-muted-foreground pt-2 text-center md:text-left">
                    To gain a total of <strong>{Number(goalResult.totalWeightToGain).toFixed(1)} {state.unitSystem === 'metric' ? 'kg' : 'lbs'}</strong>, you should aim to eat approximately <strong>{Number(goalResult.dailyCalorieTarget).toFixed(0)} calories</strong> per day. It will take an estimated <strong>{Number(goalResult.weeksToGoal).toFixed(1)} weeks</strong> to reach your goal.
                </p>
            </div>
        </>
      )}
    </div>
  );
}
