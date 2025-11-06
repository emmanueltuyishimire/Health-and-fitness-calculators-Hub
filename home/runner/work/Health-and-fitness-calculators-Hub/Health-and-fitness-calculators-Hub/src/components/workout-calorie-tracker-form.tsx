
'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Check, ChevronsUpDown } from 'lucide-react';
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
  WorkoutCalorieTrackerSchema,
  type WorkoutCalorieTrackerFormValues,
} from '@/lib/definitions';
import { Separator } from '@/components/ui/separator';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { cn } from '@/lib/utils';
import { activities } from '@/lib/activities';

export function WorkoutCalorieTrackerForm() {
  const { state, dispatch } = useCalculator();
  const [result, setResult] = useState<number | null>(null);
  const [open, setOpen] = useState(false);

  const form = useForm<WorkoutCalorieTrackerFormValues>({
    resolver: zodResolver(WorkoutCalorieTrackerSchema),
    defaultValues: {
      weight: state.weight,
      activity: '',
      duration: '60',
      unitSystem: state.unitSystem,
    },
    values: {
      weight: state.weight,
      activity: '',
      duration: '60',
      unitSystem: state.unitSystem,
    },
  });
  
  useEffect(() => {
    form.setValue('unitSystem', state.unitSystem);
    if(state.weight) {
        form.setValue('weight', state.weight);
    }
  }, [state.unitSystem, state.weight, form]);

  function onSubmit(data: WorkoutCalorieTrackerFormValues) {
    const weight = parseFloat(data.weight);
    const duration = parseFloat(data.duration);
    const activityData = activities.find(
      (activity) => activity.activity.toLowerCase() === data.activity.toLowerCase()
    );

    if (!activityData) {
      form.setError('activity', { message: 'Please select a valid activity.' });
      return;
    }

    const metValue = activityData.met;
    const weightKg =
      data.unitSystem === 'imperial' ? weight * 0.453592 : weight;

    // Formula: Calories/min = (MET * 3.5 * weight in kg) / 200
    const caloriesBurned = ((metValue * 3.5 * weightKg) / 200) * duration;

    setResult(caloriesBurned);

    dispatch({
      type: 'SET_USER_DATA',
      payload: { weight: data.weight, activity: data.activity, duration: data.duration },
    });
  }

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
                  <FormLabel>
                    Weight ({state.unitSystem === 'metric' ? 'kg' : 'lbs'})
                  </FormLabel>
                  <FormControl>
                    <Input type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="duration"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Duration (minutes)</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
            <FormField
              control={form.control}
              name="activity"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Workout</FormLabel>
                  <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          role="combobox"
                          className={cn(
                            'w-full justify-between',
                            !field.value && 'text-muted-foreground'
                          )}
                        >
                          {field.value
                            ? activities.find(
                                (activity) => activity.activity.toLowerCase() === field.value
                              )?.activity
                            : 'Select workout'}
                          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-[--radix-popover-trigger-width] max-h-[--radix-popover-content-available-height] p-0">
                      <Command>
                        <CommandInput placeholder="Search workout..." />
                        <CommandEmpty>No workout found.</CommandEmpty>
                        <CommandGroup>
                           <CommandList>
                            {activities.map((activity) => (
                              <CommandItem
                                value={activity.activity}
                                key={activity.activity}
                                onSelect={() => {
                                  form.setValue('activity', activity.activity.toLowerCase());
                                  setOpen(false);
                                }}
                              >
                                <Check
                                  className={cn(
                                    'mr-2 h-4 w-4',
                                    field.value === activity.activity.toLowerCase()
                                      ? 'opacity-100'
                                      : 'opacity-0'
                                  )}
                                />
                                {activity.activity}
                              </CommandItem>
                            ))}
                          </CommandList>
                        </CommandGroup>
                      </Command>
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
          <Button type="submit" className="w-full sm:w-auto">
            Track Calories
          </Button>
        </form>
      </Form>

      {result && (
        <>
          <Separator className="my-6" />
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-semibold text-foreground">
              Estimated Calories Burned
            </h3>
            <p className="text-3xl font-bold text-primary">
              {result.toFixed(0)} kcal
            </p>
            <p className="text-xs text-muted-foreground pt-2">
              This is an estimate based on the MET value of the selected
              activity and your body weight. Actual results may vary.
            </p>
          </div>
        </>
      )}
    </div>
  );
}
