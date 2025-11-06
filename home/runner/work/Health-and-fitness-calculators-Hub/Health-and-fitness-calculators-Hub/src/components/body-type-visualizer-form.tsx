
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
import { useCalculator } from '@/context/calculator-context';
import { BodyShapeSchema, type BodyShapeFormValues } from '@/lib/definitions';

function getBodyShape(bust: number, waist: number, hip: number): string {
    if (!bust || !waist || !hip) return '';
    const isHourglass = (bust - hip) / bust < 0.05 && (hip - bust) / hip < 0.05 && (bust - waist) / bust >= 0.25 && (hip - waist) / hip >= 0.25;
    const isPear = (hip - bust) / hip > 0.05;
    const isInvertedTriangle = (bust - hip) / bust > 0.05;

    if (isHourglass) return 'Hourglass';
    if (isPear) return 'Pear (Triangle)';
    if (isInvertedTriangle) return 'Apple (Inverted Triangle)';
    return 'Rectangle';
}

const BodyVisual = ({ bust, waist, hip }: { bust: number; waist: number; hip: number }) => {
  const max = Math.max(bust, waist, hip, 1);
  const bustWidth = (bust / max) * 100;
  const waistWidth = (waist / max) * 100;
  const hipWidth = (hip / max) * 100;

  const bustY = 20;
  const waistY = 50;
  const hipY = 70;

  const points = [
    `${(100 - bustWidth) / 2},${bustY}`,
    `${(100 + bustWidth) / 2},${bustY}`,
    `${(100 + waistWidth) / 2},${waistY}`,
    `${(100 + hipWidth) / 2},${hipY}`,
    `${(100 - hipWidth) / 2},${hipY}`,
    `${(100 - waistWidth) / 2},${waistY}`,
  ].join(' ');

  return (
    <svg viewBox="0 0 100 100" className="w-full h-48 max-w-xs mx-auto" aria-hidden="true">
      <polygon points={points} className="fill-primary/20 stroke-primary" strokeWidth="1" />
    </svg>
  );
};


export function BodyTypeVisualizerForm() {
  const { state, dispatch } = useCalculator();
  
  const form = useForm<BodyShapeFormValues>({
    resolver: zodResolver(BodyShapeSchema),
    defaultValues: {
      bust: state.bust || '36',
      waist: state.waist || '30',
      hip: state.hip || '40',
      unitSystem: state.unitSystem,
    },
  });

  const [shape, setShape] = useState('');
  const [measurements, setMeasurements] = useState({
    bust: parseFloat(form.getValues('bust')),
    waist: parseFloat(form.getValues('waist')),
    hip: parseFloat(form.getValues('hip')),
  });

  useEffect(() => {
    const subscription = form.watch((value) => {
      const bust = parseFloat(value.bust || '0');
      const waist = parseFloat(value.waist || '0');
      const hip = parseFloat(value.hip || '0');
      setMeasurements({ bust, waist, hip });
      setShape(getBodyShape(bust, waist, hip));
      dispatch({ type: 'SET_USER_DATA', payload: { bust: value.bust, waist: value.waist, hip: value.hip } });
    });
    // Set initial shape
    const { bust, waist, hip } = form.getValues();
    setShape(getBodyShape(parseFloat(bust), parseFloat(waist), parseFloat(hip)));
    return () => subscription.unsubscribe();
  }, [form, dispatch]);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <Form {...form}>
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-4">
                <FormField
                  control={form.control}
                  name="bust"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Bust ({state.unitSystem === 'metric' ? 'cm' : 'in'})</FormLabel>
                      <FormControl>
                        <Input type="number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="waist"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Waist ({state.unitSystem === 'metric' ? 'cm' : 'in'})</FormLabel>
                      <FormControl>
                        <Input type="number" {...field} />
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
                      <FormLabel>Hip ({state.unitSystem === 'metric' ? 'cm' : 'in'})</FormLabel>
                      <FormControl>
                        <Input type="number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </form>
          </Form>
        </div>
        
        <div className="space-y-2 text-center md:text-left">
          <h3 className="font-semibold text-foreground">Your Body Shape</h3>
          <div className="p-4 bg-muted rounded-lg flex flex-col items-center justify-center min-h-[240px]">
            <BodyVisual bust={measurements.bust} waist={measurements.waist} hip={measurements.hip} />
            {shape && (
              <p className="text-xl font-bold text-primary mt-4" aria-live="polite">
                {shape}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
