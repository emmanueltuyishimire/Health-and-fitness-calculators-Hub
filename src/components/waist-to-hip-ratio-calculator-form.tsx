
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
import {
  WaistToHipRatioSchema,
  type WaistToHipRatioFormValues,
} from '@/lib/definitions';
import { Separator } from './ui/separator';
import { cn } from '@/lib/utils';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';

export function WaistToHipRatioCalculatorForm() {
  const { state, dispatch } = useCalculator();
  const [whrResult, setWhrResult] = useState<{
    value: number;
    category: string;
  } | null>(null);

  const form = useForm<WaistToHipRatioFormValues>({
    resolver: zodResolver(WaistToHipRatioSchema),
    defaultValues: {
      gender: state.gender,
      waist: state.waist,
      hip: state.hip,
      unitSystem: state.unitSystem,
    },
    values: {
      gender: state.gender,
      waist: state.waist,
      hip: state.hip,
      unitSystem: state.unitSystem,
    },
  });

  function onSubmit(data: WaistToHipRatioFormValues) {
    const waist = parseFloat(data.waist);
    const hip = parseFloat(data.hip);

    const whr = waist / hip;

    setWhrResult({
      value: whr,
      category: getWhrCategory(whr, data.gender),
    });
    dispatch({
      type: 'SET_USER_DATA',
      payload: { waist: data.waist, hip: data.hip, gender: data.gender },
    });
    dispatch({ type: 'SET_RESULTS', payload: { waistToHipRatio: whr } });
  }

  function getWhrCategory(whr: number, gender: 'male' | 'female'): string {
    if (gender === 'male') {
      if (whr <= 0.95) return 'Low Risk';
      if (whr <= 1.0) return 'Moderate Risk';
      return 'High Risk';
    } else {
      // female
      if (whr <= 0.8) return 'Low Risk';
      if (whr <= 0.85) return 'Moderate Risk';
      return 'High Risk';
    }
  }

  const categoryColorClass = (category: string) => {
    switch (category) {
      case 'Low Risk':
        return 'text-green-500';
      case 'Moderate Risk':
        return 'text-yellow-500';
      case 'High Risk':
        return 'text-red-500';
      default:
        return 'text-foreground';
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    form.setValue(name as keyof WaistToHipRatioFormValues, value);
    dispatch({ type: 'SET_USER_DATA', payload: { [name]: value } });
  };
  
  const handleSelectChange =
    (name: keyof WaistToHipRatioFormValues) => (value: string) => {
      form.setValue(name, value as 'male' | 'female');
      dispatch({ type: 'SET_USER_DATA', payload: { [name]: value } });
    };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
             <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Gender</FormLabel>
                  <Select
                    onValueChange={handleSelectChange('gender')}
                    value={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your gender" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="male">Male</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="waist"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Waist ({state.unitSystem === 'metric' ? 'cm' : 'in'})
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="e.g., 70"
                      {...field}
                      onChange={handleInputChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="hip"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Hip ({state.unitSystem === 'metric' ? 'cm' : 'in'})
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="e.g., 95"
                      {...field}
                      onChange={handleInputChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" className="w-full sm:w-auto">
            Calculate WHR
          </Button>
        </form>
      </Form>

      {whrResult && (
        <>
          <Separator className="my-6" />
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-semibold text-foreground">Your WHR Result</h3>
            <p className="text-4xl font-bold text-primary">
              {whrResult.value.toFixed(2)}
            </p>
            <p
              className={cn(
                'font-semibold text-lg',
                categoryColorClass(whrResult.category)
              )}
            >
              Category: {whrResult.category}
            </p>
            <p className="text-xs text-muted-foreground pt-2">
              This ratio helps assess body fat distribution. Higher values may indicate a greater risk for certain health conditions.
            </p>
          </div>
        </>
      )}
    </div>
  );
}
