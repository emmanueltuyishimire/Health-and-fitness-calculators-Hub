
import type { Metadata } from 'next';
import Link from 'next/link';
import { Flag } from 'lucide-react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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
import { WeightLossGoalCalculatorForm } from '@/components/weight-loss-goal-calculator-form';

export const metadata: Metadata = {
  title: 'Weight Loss Goal Calculator – Plan Your Journey',
  description:
    'Set a clear path to your target weight. Calculate your daily calorie needs and estimate the timeline for your weight loss journey based on your goals.',
  openGraph: {
    title: 'Weight Loss Goal Calculator – Plan Your Journey',
    description:
      'Set a clear path to your target weight. Calculate your daily calorie needs and estimate the timeline for your weight loss journey based on your goals.',
    type: 'website',
  },
};

export default function WeightLossGoalPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Weight Loss Goal Calculator',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
    },
    description:
      'A free web-based calculator to plan a weight loss timeline and determine daily calorie targets.',
  };

  const howToJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Plan Your Weight Loss Goal',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Determine TDEE',
        text: 'First, use the TDEE Calculator to find your maintenance calories.',
        url: '/tdee'
      },
      {
        '@type': 'HowToStep',
        name: 'Enter Your Weights',
        text: 'Input your current weight and your goal weight.',
      },
      {
        '@type': 'HowToStep',
        name: 'Set Your Pace',
        text: 'Choose a weekly weight loss goal. A rate of 1-2 lbs per week is generally safe and sustainable.',
      },
      {
        '@type': 'HowToStep',
        name: 'Calculate',
        text: 'The calculator will provide your estimated daily calorie target and the number of weeks to reach your goal.',
      },
    ],
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is a realistic weight loss goal?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A safe and sustainable rate of weight loss is 1 to 2 pounds (about 0.5 to 1 kg) per week. Losing weight faster than this often involves losing water and muscle mass, not just fat. For a more tailored calorie target, start with our <a href="/calorie-deficit">Calorie Deficit Calculator</a>.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why do I need my TDEE for this calculator?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Your <a href="/tdee">TDEE</a> (Total Daily Energy Expenditure) is your maintenance calorie level. To lose weight, you must eat less than this amount. This calculator uses your TDEE to calculate the precise deficit needed to achieve your desired weekly weight loss.',
        },
      },
      {
        '@type': 'Question',
        name: 'Will I lose weight exactly as predicted?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The timeline is an estimate. Weight loss is not always linear. As you lose weight, your TDEE will decrease, so you may need to recalculate your <a href="/tdee">TDEE</a> and adjust your calorie intake periodically to continue making progress.',
        },
      },
      {
        '@type': 'Question',
        name: 'What should I do when I reach my goal weight?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Once you reach your goal, you should transition to eating at your new maintenance calorie level. You can find this with the <a href="/calorie-maintenance">Calorie Maintenance Calculator</a>. Slowly increasing your calories back to maintenance can help prevent rebound weight gain.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is it better to focus on weight loss or fat loss?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'While this tool focuses on total weight, the ultimate goal should be fat loss while preserving muscle. To do this, combine your calorie deficit with adequate protein and resistance training. Track your progress with the <a href="/body-fat">Body Fat Percentage Calculator</a>.',
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
              <BreadcrumbPage>Weight Loss Goal Calculator</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <Card>
          <CardHeader>
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 text-primary p-3 rounded-lg">
                <Flag className="h-8 w-8" />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold">
                  Weight Loss Goal Calculator
                </h1>
                <p className="text-muted-foreground">
                  Turn your weight loss goal into an actionable plan. This calculator helps you determine your daily calorie target and estimates how long it will take to reach your desired weight. Start by getting your maintenance calories from the <Link href="/tdee" className="text-primary hover:underline">TDEE Calculator</Link>.
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <WeightLossGoalCalculatorForm />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>How to Use the Weight Loss Goal Calculator</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              This calculator creates a clear roadmap for your weight loss journey by connecting your goals to a daily calorie target and an estimated timeline.
            </p>
            <ol className="list-decimal list-inside space-y-2">
              <li><strong>Find Your TDEE:</strong> The essential first step. Visit our <Link href="/tdee" className="text-primary hover:underline">TDEE Calculator</Link> to determine your daily maintenance calories.</li>
              <li><strong>Enter Your TDEE:</strong> Input your TDEE value into the form.</li>
              <li><strong>Enter Current & Goal Weight:</strong> Provide your starting weight and the weight you want to achieve.</li>
              <li><strong>Choose Your Pace:</strong> Select your desired weekly weight loss rate. 1-2 lbs per week is a common and sustainable goal.</li>
              <li><strong>Calculate Your Plan:</strong> The tool will output your estimated daily calorie target and the number of weeks it will take to reach your goal at that pace.</li>
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
                  <TableHead>Example</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>TDEE</TableCell>
                  <TableCell>2500 kcal/day</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Current Weight</TableCell>
                  <TableCell>200 lbs</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Goal Weight</TableCell>
                  <TableCell>180 lbs</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Desired Weekly Loss</TableCell>
                  <TableCell>1 lb/week</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-bold">Daily Calorie Target</TableCell>
                  <TableCell className="font-bold">~2000 kcal/day</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-bold">Estimated Time to Goal</TableCell>
                  <TableCell className="font-bold">20 weeks</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Interpretation & Next Step</TableCell>
                  <TableCell>To lose 20 lbs at a rate of 1 lb/week, this person needs a 500-calorie deficit. Their target is 2000 kcal/day, and it should take about 20 weeks. Their next step is to use the <Link href="/macronutrient-ratio" className="text-primary hover:underline">Macronutrient Ratio Calculator</Link> to break down their calorie goal.</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Understanding Your Weight Loss Plan</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <h3 className="font-semibold text-lg text-foreground">The Math of Weight Loss</h3>
            <p>Weight loss is governed by energy balance. A single pound of body fat contains approximately 3,500 calories. To lose one pound per week, you need to create a total weekly deficit of 3,500 calories, which breaks down to a 500-calorie deficit per day (3500 / 7 = 500).</p>
            <p>This calculator automates that math for you. It takes your desired weekly weight loss, converts it into a daily calorie deficit, and subtracts that from your <Link href="/tdee" className="text-primary hover:underline">TDEE</Link> to give you a precise daily calorie target. It then calculates the total pounds you need to lose and divides it by your weekly goal to estimate the timeline.</p>
            
            <h3 className="font-semibold text-lg text-foreground">The Importance of Realistic Timelines</h3>
            <p>While it's tempting to choose the fastest weight loss option, setting a realistic and sustainable pace is crucial for long-term success. Rapid weight loss often comes from crash dieting, which can lead to muscle loss, nutrient deficiencies, and a "rebound" effect where you regain the weight quickly.</p>
            <p>A slower pace of 1-2 pounds per week allows your body to primarily burn fat while preserving precious, metabolically active muscle tissue. This approach is easier to stick to, less stressful on your body, and helps you build sustainable habits. Remember that as your weight drops, your TDEE will also decrease, so you may need to adjust your plan periodically to continue making progress. Use the <Link href="/body-fat" className="text-primary hover:underline">Body Fat Percentage Calculator</Link> to ensure you are losing fat, not muscle.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Frequently Asked Questions</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>What is a realistic weight loss goal?</AccordionTrigger>
                <AccordionContent>A safe and sustainable rate of weight loss is 1 to 2 pounds (about 0.5 to 1 kg) per week. Faster loss often includes water and muscle. For a tailored target, start with our <a href="/calorie-deficit">Calorie Deficit Calculator</a>.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Why do I need my TDEE for this calculator?</AccordionTrigger>
                <AccordionContent>Your <a href="/tdee">TDEE</a> is your maintenance calorie level. To lose weight, you must eat less than this. This calculator uses your TDEE to find the precise deficit needed for your goal.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Will I lose weight exactly as predicted?</AccordionTrigger>
                <AccordionContent>The timeline is an estimate. Weight loss isn't always linear. As you lose weight, your TDEE will decrease, so you may need to recalculate your <a href="/tdee">TDEE</a> and adjust your intake to continue making progress.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>What should I do when I reach my goal weight?</AccordionTrigger>
                <AccordionContent>Transition to eating at your new maintenance calorie level, which you can find with the <a href="/calorie-maintenance">Calorie Maintenance Calculator</a>. Slowly increasing calories helps prevent rebound weight gain.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Is it better to focus on weight loss or fat loss?</AccordionTrigger>
                <AccordionContent>The ultimate goal should be fat loss. Combine your calorie deficit with adequate protein and resistance training. Track your progress with the <a href="/body-fat">Body Fat Percentage Calculator</a>.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

      </div>
    </>
  );
}
