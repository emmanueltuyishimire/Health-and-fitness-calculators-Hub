
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
            <CardTitle>How to Use the Workout Load Calculator</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              This calculator uses the Session RPE (sRPE) method to quantify your training stress. It's a simple way to monitor your volume and ensure you're making progress.
            </p>
            <ol className="list-decimal list-inside space-y-2">
              <li><strong>Enter Your Weekly Sessions:</strong> How many times do you work out in a typical week?</li>
              <li><strong>Enter Average Duration:</strong> What is the average length of your workout sessions in minutes?</li>
              <li><strong>Enter Average RPE:</strong> Using the scale below, what is the average intensity of your sessions? Be honest.</li>
              <li><strong>Calculate Your Load:</strong> The tool will provide a single number representing your weekly training load.</li>
            </ol>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Worked Example</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Variable</TableHead>
                  <TableHead>Example Data</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Sessions / Week</TableCell>
                  <TableCell>4</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Avg. Duration (min)</TableCell>
                  <TableCell>75</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Avg. RPE (1-10)</TableCell>
                  <TableCell>8</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-bold">Total Weekly Load</TableCell>
                  <TableCell className="font-bold">2400</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Interpretation & Next Step</TableCell>
                  <TableCell>This person has a weekly load of 2400 arbitrary units (AU). To progress, next week they could aim for a slightly higher load (e.g., 2500) by adding a few minutes to their sessions or increasing the intensity slightly. To fuel this, they can check their <Link href="/tdee" className="text-primary hover:underline">TDEE</Link>.</TableCell>
                </TableRow>
              </TableBody>
            </Table>
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
          <CardHeader>
            <CardTitle>Common Mistakes</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>Ego Lifting RPE:</strong> Being dishonest about how hard a workout felt. If you could have done many more reps, the RPE was not a 9.</li>
              <li><strong>Increasing Load Too Quickly:</strong> A good rule of thumb is to increase your total weekly load by no more than 10% per week to avoid injury and overtraining.</li>
              <li><strong>Only Increasing One Variable:</strong> You can increase load by adding duration, frequency, or intensity. Varying these can keep training interesting.</li>
              <li><strong>Ignoring Recovery:</strong> A higher training load requires more sleep and better nutrition. Ensure your recovery matches your workload. Check your nutrition with the <Link href="/macronutrient-ratio" className="text-primary hover:underline">Macronutrient Ratio Calculator</Link>.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Pro Tips & Quick Hacks</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>Plan a "Deload" Week:</strong> After 3-4 weeks of increasing load, plan a "deload" week where you reduce your load by 40-50% to allow for full recovery.</li>
              <li><strong>Track Load in a Spreadsheet:</strong> Keep a simple spreadsheet to track your weekly load over time. This makes it easy to visualize your progression.</li>
              <li><strong>Listen to Your Body:</strong> If you're feeling beaten down, it's okay to have a lower-load week. Consistency over time is more important than a single perfect week.</li>
              <li><strong>Compare Different Training Styles:</strong> Use this tool to see how a week of long, slow cardio compares in load to a week of short, intense HIIT sessions.</li>
            </ul>
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

        <Card>
          <CardHeader>
            <CardTitle>Real-Life Applications</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Audience</TableHead>
                  <TableHead>Use Case</TableHead>
                  <TableHead>Next Step (Tool)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Athletes</TableCell>
                  <TableCell>Systematically plan training cycles, including overload and deload weeks, to peak for competition.</TableCell>
                  <TableCell><Link href="/strength-to-weight-ratio" className="text-primary hover:underline">Strength-to-Weight Ratio</Link></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Fitness Coaches</TableCell>
                  <TableCell>Objectively monitor a client's training volume to ensure they are progressing safely.</TableCell>
                  <TableCell>N/A</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>General Fitness Enthusiasts</TableCell>
                  <TableCell>Break through plateaus by ensuring their training load is progressively increasing over time.</TableCell>
                  <TableCell><Link href="/one-rep-max" className="text-primary hover:underline">1RM Calculator</Link></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Related Calculators</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/one-rep-max" className="p-4 border rounded-lg hover:bg-muted">
              <h3 className="font-semibold">One Rep Max (1RM) Calculator</h3>
              <p className="text-sm text-muted-foreground">Estimate your 1RM to better gauge intensity for your RPE ratings.</p>
            </Link>
            <Link href="/calorie-burn-by-activity" className="p-4 border rounded-lg hover:bg-muted">
              <h3 className="font-semibold">Calorie Burn by Activity</h3>
              <p className="text-sm text-muted-foreground">Understand the energy cost of your workouts, which complements training load.</p>
            </Link>
            <Link href="/protein-intake" className="p-4 border rounded-lg hover:bg-muted">
              <h3 className="font-semibold">Protein Intake Calculator</h3>
              <p className="text-sm text-muted-foreground">Ensure your protein intake is high enough to recover from your training load.</p>
            </Link>
            <Link href="/tdee" className="p-4 border rounded-lg hover:bg-muted">
              <h3 className="font-semibold">TDEE Calculator</h3>
              <p className="text-sm text-muted-foreground">Make sure your total calorie intake supports your weekly workout volume.</p>
            </Link>
          </CardContent>
        </Card>

      </div>
    </>
  );
}
