
'use client';

import { useState } from 'react';
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
import { Button } from '@/components/ui/button';
import { MetValueSchema, type MetValueFormValues } from '@/lib/definitions';
import { Separator } from './ui/separator';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from './ui/command';
import { cn } from '@/lib/utils';
import { activities } from '@/lib/activities';

export function MetValueCalculatorForm() {
  const [result, setResult] = useState<number | null>(null);
  const [open, setOpen] = useState(false);

  const form = useForm<MetValueFormValues>({
    resolver: zodResolver(MetValueSchema),
    defaultValues: {
      activity: '',
    },
  });

  function onSubmit(data: MetValueFormValues) {
    const activityData = activities.find(
      (activity) => activity.activity.toLowerCase() === data.activity.toLowerCase()
    );

    if (!activityData) {
      form.setError('activity', { message: 'Please select a valid activity.' });
      setResult(null);
      return;
    }

    setResult(activityData.met);
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="activity"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Activity</FormLabel>
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
                          : 'Select activity'}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-[--radix-popover-trigger-width] max-h-[--radix-popover-content-available-height] p-0">
                    <Command>
                      <CommandInput placeholder="Search activity..." />
                      <CommandEmpty>No activity found.</CommandEmpty>
                      <CommandGroup>
                        <CommandList>
                          {activities.map((activity) => (
                            <CommandItem
                              value={activity.activity}
                              key={activity.activity}
                              onSelect={() => {
                                form.setValue('activity', activity.activity.toLowerCase());
                                form.handleSubmit(onSubmit)(); // Auto-submit on select
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
        </form>
      </Form>

      {result && (
        <>
          <Separator className="my-6" />
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-semibold text-foreground">
              Metabolic Equivalent of Task (MET)
            </h3>
            <p className="text-3xl font-bold text-primary">
              {result}
            </p>
            <p className="text-xs text-muted-foreground pt-2">
              This means the selected activity burns {result} times as much energy as sitting at rest.
            </p>
          </div>
        </>
      )}
    </div>
  );
}
