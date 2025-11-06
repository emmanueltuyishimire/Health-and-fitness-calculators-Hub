
'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
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
import { HydrationTrackerSchema, type HydrationTrackerFormValues } from '@/lib/definitions';
import { Separator } from '@/components/ui/separator';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Terminal } from 'lucide-react';
import Link from 'next/link';
import { Progress } from '@/components/ui/progress';

export function HydrationTrackerForm() {
  const { state, dispatch } = useCalculator();
  const [currentIntake, setCurrentIntake] = useState(0);

  const goalInOz = state.unitSystem === 'metric' 
    ? (state.waterIntake || 2) * 33.814 
    : state.waterIntake || 64;

  const form = useForm<HydrationTrackerFormValues>({
    resolver: zodResolver(HydrationTrackerSchema),
    defaultValues: {
      goal: goalInOz.toFixed(0),
      currentIntake: 0,
    },
  });
  
  const goal = parseFloat(form.watch('goal'));
  const progressPercentage = goal > 0 ? (currentIntake / goal) * 100 : 0;
  
  useEffect(() => {
    const defaultGoal = state.unitSystem === 'metric' 
      ? (state.waterIntake || 2) * 33.814 // Convert liters to oz
      : state.waterIntake || 64; // Default to 64 oz if not set
      
    form.setValue('goal', defaultGoal.toFixed(0));
    dispatch({type: "SET_USER_DATA", payload: { hydrationGoal: defaultGoal.toFixed(0) }})
  }, [state.waterIntake, state.unitSystem, form, dispatch]);

  const addWater = (amount: number) => {
    setCurrentIntake((prev) => Math.max(0, prev + amount));
  };
  
  const resetTracker = () => {
    setCurrentIntake(0);
  }

  return (
    <div>
      {!state.waterIntake && (
        <Alert className="mb-6">
          <Terminal className="h-4 w-4" />
          <AlertTitle>Set Your Goal!</AlertTitle>
          <AlertDescription>
            For a personalized goal, please use the <Link href="/water-intake" className="font-semibold underline">Water Intake Calculator</Link> first. A default has been set for you.
          </AlertDescription>
        </Alert>
      )}
      <Form {...form}>
        <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="goal"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Daily Goal ({state.unitSystem === 'metric' ? 'Liters' : 'Ounces'})</FormLabel>
                  <FormControl>
                    <Input 
                      type="number" 
                      {...field} 
                      value={state.unitSystem === 'metric' ? (goal / 33.814).toFixed(1) : goal.toFixed(0)}
                      onChange={(e) => {
                          const valueInNativeUnit = parseFloat(e.target.value);
                          const valueInOz = state.unitSystem === 'metric' ? valueInNativeUnit * 33.814 : valueInNativeUnit;
                          field.onChange(valueInOz.toFixed(0));
                          dispatch({type: "SET_USER_DATA", payload: { hydrationGoal: valueInOz.toFixed(0) }})
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <Separator />

          <div className="space-y-4">
             <div>
                <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold text-foreground">Current Intake</h3>
                    <span className="font-bold text-primary text-xl">
                        {state.unitSystem === 'metric' ? `${(currentIntake / 33.814).toFixed(1)}L` : `${currentIntake.toFixed(0)} oz`}
                    </span>
                </div>
                <Progress value={progressPercentage} />
                <div className="flex justify-between items-center mt-1 text-xs text-muted-foreground">
                    <span>0%</span>
                    <span>{progressPercentage.toFixed(0)}%</span>
                    <span>100%</span>
                </div>
             </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                <Button variant="outline" type="button" onClick={() => addWater(state.unitSystem === 'metric' ? 8.45 : 8)}>+ {state.unitSystem === 'metric' ? '250ml' : '8 oz'}</Button>
                <Button variant="outline" type="button" onClick={() => addWater(state.unitSystem === 'metric' ? 16.9 : 16)}>+ {state.unitSystem === 'metric' ? '500ml' : '16 oz'}</Button>
                <Button variant="outline" type="button" onClick={() => addWater(state.unitSystem === 'metric' ? 25.36 : 24)}>+ {state.unitSystem === 'metric' ? '750ml' : '24 oz'}</Button>
                <Button variant="outline" type="button" onClick={() => addWater(state.unitSystem === 'metric' ? 33.81 : 32)}>+ {state.unitSystem === 'metric' ? '1L' : '32 oz'}</Button>
            </div>
            
             <div className="flex items-center gap-2">
                 <Button variant="ghost" size="sm" type="button" className="text-muted-foreground" onClick={resetTracker}>Reset</Button>
             </div>

          </div>

        </form>
      </Form>
    </div>
  );
}
