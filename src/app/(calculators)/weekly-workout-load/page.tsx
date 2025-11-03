
import type { Metadata } from 'next';
import Link from 'next/link';
import { Webhook } from 'lucide-react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { WeeklyWorkoutLoadCalculatorForm } from '@/components/weekly-workout-load-calculator-form';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export const metadata: Metadata = {
  title: 'Weekly Workout Load Calculator – Monitor Your Training Volume',
  description:
    'Calculate your weekly workout load to manage training intensity, prevent overtraining, and ensure consistent progress. Use the RPE scale to quantify your effort.',
  openGraph: {
    title: 'Weekly Workout Load Calculator – Monitor Your Training Volume',
    description:
      'Calculate your weekly workout load to manage training intensity, prevent overtraining, and ensure consistent progress. Use the RPE scale to quantify your effort.',
    type: 'website',
  },
};

export default function WeeklyWorkoutLoadPage() {
    const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Weekly Workout Load Calculator',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
    },
    description:
      'A free web-based calculator to quantify weekly training load using session duration and Rate of Perceived Exertion (RPE).',
  };

  const howToJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Calculate Your Weekly Workout Load',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Enter Weekly Sessions',
        text: 'Input the total number of workout sessions you complete in a typical week.',
      },
      {
        '@type': 'HowToStep',
        name: 'Enter Session Duration',
        text: 'Input the average duration of each workout session in minutes.',
      },
      {
        '@type': 'HowToStep',
        name: 'Enter Average Intensity (RPE)',
        text: 'Rate the average intensity of your sessions on a scale of 1-10 using the Rate of Perceived Exertion (RPE) scale.',
      },
      {
        '@type': 'HowToStep',
        name: 'Calculate Load',
        text: 'The calculator will multiply your session duration by your RPE to get a session load, then multiply that by your weekly sessions to get your total weekly load.',
      },
    ],
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is workout load?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Workout load (or training load) is a way to quantify the total stress placed on your body from exercise. This calculator uses a common method where load is the product of volume (duration) and intensity (RPE). Monitoring it helps in managing recovery and preventing overtraining.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is RPE (Rate of Perceived Exertion)?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'RPE is a subjective scale from 1 to 10 that measures how hard a workout feels to you. A 1 is extremely easy (like walking slowly), while a 10 is maximal effort (like an all-out sprint). It\'s a simple yet powerful way to gauge intensity.',
        },
      },
      {
        '@type': 'Question',
        name: 'How can I use this information to improve my training?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The principle of progressive overload states that you must gradually increase your training stress to keep making progress. You can use this calculator to ensure your weekly load is slowly increasing over time, either by adding more duration, more sessions, or increasing the average intensity (RPE).',
        },
      },
      {
        '@type': 'Question',
        name: 'What is a "good" weekly workout load?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'There is no universal "good" number. It depends entirely on your fitness level, goals, and recovery capacity. The key is to find a load that is challenging enough to cause adaptation but not so high that you can\'t recover from it. Track your load week to week to find your personal sweet spot.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does this replace tracking calories burned?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'This is a different metric. Our <a href="/calorie-burn-by-activity">Calorie Burn by Activity Calculator</a> estimates the energy cost of a workout, which is useful for nutrition planning. Workout load, on the other hand, measures the overall physiological stress, which is better for planning your training progression and recovery.',
        },
      },
    ],
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
       <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
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
              <BreadcrumbPage>Weekly Workout Load Calculator</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <Card>
          <CardHeader>
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 text-primary p-3 rounded-lg">
                <Webhook className="h-8 w-8" />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold">
                  Weekly Workout Load Calculator
                </h1>
                <p className="text-muted-foreground">
                  Quantify your weekly training volume to optimize progress and prevent overtraining. This tool helps you measure your total workout load based on duration, frequency, and intensity (RPE).
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <WeeklyWorkoutLoadCalculatorForm />
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Understanding Workout Load & RPE</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <h3 className="font-semibold text-lg text-foreground">What is Training Load?</h3>
            <p>Training load is a simple metric used to quantify the overall stress of a workout or a training week. The most common method, used here, is Session RPE (sRPE). The formula is:</p>
            <p className="font-mono text-center p-4 bg-muted rounded-md">Weekly Load = (Session Duration in minutes × RPE) × Number of Sessions</p>
            <p>By tracking this number, you can apply the principle of <strong className="text-foreground">progressive overload</strong>. To continue making progress in your fitness, you must gradually increase your training load over time. This calculator helps you see if your load is trending up, staying the same, or decreasing.</p>
            
            <h3 className="font-semibold text-lg text-foreground">The RPE Scale (Rate of Perceived Exertion)</h3>
            <p>RPE is a subjective measure of how hard a workout feels on a scale of 1 to 10. It's a surprisingly accurate way to gauge intensity.</p>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>RPE</TableHead>
                        <TableHead>Description</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow><TableCell>1-2</TableCell><TableCell>Very light activity. Hardly any effort.</TableCell></TableRow>
                    <TableRow><TableCell>3-4</TableCell><TableCell>Light activity. Feels like you can maintain for hours.</TableCell></TableRow>
                    <TableRow><TableCell>5-6</TableCell><TableCell>Moderate activity. Breathing heavily, can hold a short conversation.</TableCell></TableRow>
                    <TableRow><TableCell>7-8</TableCell><TableCell>Vigorous activity. Borderline uncomfortable, can speak a sentence.</TableCell></TableRow>
                    <TableRow><TableCell>9</TableCell><TableCell>Very hard activity. Can barely breathe, can only speak a few words.</TableCell></TableRow>
                    <TableRow><TableCell>10</TableCell><TableCell>Maximal effort. Feels almost impossible to continue.</TableCell></TableRow>
                </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
            <CardHeader><CardTitle>Frequently Asked Questions (FAQ)</CardTitle></CardHeader>
            <CardContent>
                 <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>What is workout load?</AccordionTrigger>
                        <AccordionContent>Workout load (or training load) is a way to quantify the total stress placed on your body from exercise. This calculator uses a common method where load is the product of volume (duration) and intensity (RPE). Monitoring it helps in managing recovery and preventing overtraining.</AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>What is RPE (Rate of Perceived Exertion)?</AccordionTrigger>
                        <AccordionContent>RPE is a subjective scale from 1 to 10 that measures how hard a workout feels to you. A 1 is extremely easy (like walking slowly), while a 10 is maximal effort (like an all-out sprint). It's a simple yet powerful way to gauge intensity.</AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>How can I use this information to improve my training?</AccordionTrigger>
                        <AccordionContent>The principle of progressive overload states that you must gradually increase your training stress to keep making progress. You can use this calculator to ensure your weekly load is slowly increasing over time, either by adding more duration, more sessions, or increasing the average intensity (RPE).</AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger>What is a "good" weekly workout load?</AccordionTrigger>
                        <AccordionContent>There is no universal "good" number. It depends entirely on your fitness level, goals, and recovery capacity. The key is to find a load that is challenging enough to cause adaptation but not so high that you can't recover from it. Track your load week to week to find your personal sweet spot.</AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                        <AccordionTrigger>Does this replace tracking calories burned?</AccordionTrigger>
                        <AccordionContent>This is a different metric. Our <a href="/calorie-burn-by-activity">Calorie Burn by Activity Calculator</a> estimates the energy cost of a workout, which is useful for nutrition planning. Workout load, on the other hand, measures the overall physiological stress, which is better for planning your training progression and recovery.</AccordionContent>
                    </AccordionItem>
                 </Accordion>
            </CardContent>
        </Card>

      </div>
    </>
  );
}
