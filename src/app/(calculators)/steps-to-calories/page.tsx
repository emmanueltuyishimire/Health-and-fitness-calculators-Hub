
import type { Metadata } from 'next';
import Link from 'next/link';
import { Footprints } from 'lucide-react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { StepsToCaloriesCalculatorForm } from '@/components/steps-to-calories-calculator-form';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export const metadata: Metadata = {
  title: 'Steps to Calories Calculator – Estimate Your Burn',
  description:
    'Calculate the calories burned from walking based on your step count and body weight. Understand the energy expenditure of your daily activity.',
  openGraph: {
    title: 'Steps to Calories Calculator – Estimate Your Burn',
    description:
      'Calculate the calories burned from walking based on your step count and body weight. Understand the energy expenditure of your daily activity.',
    type: 'website',
  },
};

export default function StepsToCaloriesPage() {
  return (
    <div className="w-full max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 space-y-8">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/all">Calculators</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Steps to Calories Calculator</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Card>
        <CardHeader>
          <div className="flex items-start gap-4">
            <div className="bg-primary/10 text-primary p-3 rounded-lg">
              <Footprints className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">
                Steps to Calories Calculator
              </h1>
              <p className="text-muted-foreground">
                Estimate the calories you've burned from your daily steps. This calculator helps you understand the impact of your walking activity on your total energy expenditure.
              </p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <StepsToCaloriesCalculatorForm />
        </CardContent>
      </Card>
      
      <Card>
          <CardHeader>
            <CardTitle>Understanding Calories Burned from Steps</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <h3 className="font-semibold text-lg text-foreground">How It's Calculated</h3>
            <p>
              This calculator estimates your calorie burn using a standard formula that incorporates your body weight, the number of steps, and the Metabolic Equivalent of Task (MET) for walking.
            </p>
            <p>The formula is essentially:
                <br />
                <code className="font-mono p-1 bg-muted rounded-md">Calories Burned = (METs * 3.5 * weight in kg) / 200 * duration in minutes</code>
            </p>
            <p>
              We estimate the duration by assuming an average walking speed of 100 steps per minute. We use a MET value of 3.5 for general walking for pleasure. While individual results can vary based on walking speed, terrain, and fitness level, this provides a reliable estimate for most people. These burned calories are a component of your <Link href="/tdee" className="text-primary hover:underline">TDEE</Link>.
            </p>

            <h3 className="font-semibold text-lg text-foreground">The Power of NEAT</h3>
            <p>
              The calories you burn from daily steps are a major part of your Non-Exercise Activity Thermogenesis (NEAT). NEAT includes all the physical activity you do that isn't formal exercise, like walking to your car, doing chores, or fidgeting. For many people, NEAT is a larger component of their daily calorie burn than their workouts. Increasing your daily step count is one of the most effective ways to boost your NEAT and, therefore, your total daily calorie expenditure.
            </p>
          </CardContent>
        </Card>

      <Card>
        <CardHeader>
          <CardTitle>Frequently Asked Questions (FAQ)</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>How accurate is this calculator?</AccordionTrigger>
              <AccordionContent>
                This provides a solid estimate based on standardized values. However, real-world calorie burn can be influenced by your individual walking speed, fitness level, and even the surface you're walking on. Use it as a guideline to understand the impact of your activity.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Should I "eat back" the calories I burn from walking?</AccordionTrigger>
              <AccordionContent>
                Generally, no. If you've used our <Link href="/tdee" className="text-primary hover:underline">TDEE Calculator</Link> and selected an appropriate activity level, the energy you burn from walking is already accounted for in your total daily calorie needs.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Why does body weight affect calories burned?</AccordionTrigger>
              <AccordionContent>
                It takes more energy to move a heavier object. Therefore, a heavier person will burn more calories than a lighter person when walking the same number of steps.
              </AccordionContent>
            </AccordionItem>
             <AccordionItem value="item-4">
              <AccordionTrigger>How many steps should I aim for per day?</AccordionTrigger>
              <AccordionContent>
                The common goal of 10,000 steps per day is a great target for general health. However, any increase from your current baseline is beneficial. Even adding an extra 2,000 steps can make a meaningful difference over time.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
      
    </div>
  );
}
