
'use client';

import { useState } from 'react';
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
import { OneRepMaxSchema, type OneRepMaxFormValues } from '@/lib/definitions';
import { Separator } from './ui/separator';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';

interface Result {
  oneRepMax: number;
  percentages: { percent: number; weight: number; reps: string }[];
}

export function OneRepMaxCalculatorForm() {
  const { state, dispatch } = useCalculator();
  const [result, setResult] = useState<Result | null>(null);

  const form = useForm<OneRepMaxFormValues>({
    resolver: zodResolver(OneRepMaxSchema),
    defaultValues: {
      weight: '',
      reps: '',
      unitSystem: state.unitSystem,
    },
    values: {
      weight: state.weight,
      reps: '',
      unitSystem: state.unitSystem,
    }
  });
  
  const unit = state.unitSystem === 'metric' ? 'kg' : 'lbs';

  function onSubmit(data: OneRepMaxFormValues) {
    const weight = parseFloat(data.weight);
    const reps = parseInt(data.reps, 10);

    // Epley formula
    const oneRepMax = weight * (1 + reps / 30);

    const percentages = [
      { percent: 95, reps: '2-3' },
      { percent: 90, reps: '3-4' },
      { percent: 85, reps: '5-6' },
      { percent: 80, reps: '7-8' },
      { percent: 75, reps: '9-10' },
      { percent: 70, reps: '11-12' },
      { percent: 65, reps: '13-15' },
      { percent: 60, reps: '15+' },
    ].map(p => ({
        ...p,
        weight: oneRepMax * (p.percent / 100),
    }));

    setResult({ oneRepMax, percentages });
    dispatch({
      type: 'SET_USER_DATA',
      payload: { ...data },
    });
    dispatch({ type: 'SET_RESULTS', payload: { oneRepMax } });
  }
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    form.setValue(name as keyof OneRepMaxFormValues, value);
    dispatch({ type: 'SET_USER_DATA', payload: { [name]: value } });
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="weight"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Weight Lifted ({unit})</FormLabel>
                  <FormControl>
                    <Input type="number" step="0.1" {...field} onChange={handleInputChange}/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="reps"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Repetitions</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} onChange={handleInputChange}/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" className="w-full sm:w-auto">
            Calculate 1RM
          </Button>
        </form>
      </Form>

      {result && (
        <>
          <Separator className="my-6" />
          <div className="space-y-4">
            <div className="text-center md:text-left">
              <h3 className="font-semibold text-foreground">Your Estimated One-Rep Max (1RM)</h3>
              <p className="text-4xl font-bold text-primary">
                {result.oneRepMax.toFixed(1)} {unit}
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Training Percentages</h4>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Percentage</TableHead>
                    <TableHead>Weight ({unit})</TableHead>
                    <TableHead>Rep Range</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {result.percentages.map(({ percent, weight, reps }) => (
                    <TableRow key={percent}>
                      <TableCell>{percent}%</TableCell>
                      <TableCell>{weight.toFixed(1)}</TableCell>
                      <TableCell>{reps}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
