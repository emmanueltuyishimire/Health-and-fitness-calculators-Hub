
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
import { WalkingRunningCaloriesCalculatorForm } from '@/components/walking-running-calories-calculator-form';

export const metadata: Metadata = {
  title: 'Walking/Running Calorie Calculator – Estimate Your Burn',
  description:
    'Calculate the calories burned from walking or running based on your body weight, duration, and speed. Understand the energy expenditure of your cardio workouts.',
  openGraph: {
    title: 'Walking/Running Calorie Calculator – Estimate Your Burn',
    description:
      'Calculate the calories burned from walking or running based on your body weight, duration, and speed. Understand the energy expenditure of your cardio workouts.',
    type: 'website',
  },
};

export default function WalkingRunningCaloriesPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Walking/Running Calorie Calculator',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
    },
    description:
      'A free calculator to estimate calories burned from walking or running based on weight, duration, and speed.',
  };

  const howToJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Calculate Calories from Walking/Running',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Enter Your Weight & Duration',
        text: 'Input your current body weight and the duration of your workout in minutes.',
      },
      {
        '@type': 'HowToStep',
        name: 'Select Your Speed',
        text: 'Choose your walking or running speed from the list.',
      },
      {
        '@type': 'HowToStep',
        name: 'Calculate',
        text: 'The calculator will estimate the total calories burned for your session.',
      },
    ],
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Is this calculator more accurate than a step counter?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'This calculator can be more accurate as it accounts for intensity (speed) as well as duration and weight. Our <a href="/steps-to-calories">Steps to Calories Calculator</a> provides a good general estimate, but this tool is better for specific workouts.',
        },
      },
      {
        '@type': 'Question',
        name: 'Should I "eat back" the calories I burn?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Generally, no. Your activity level in the <a href="/tdee">TDEE Calculator</a> already accounts for exercise. Use this tool to understand the impact of your workouts, not as a license to eat more, especially if your goal is fat loss.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does running vs. walking affect calorie burn?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Running burns significantly more calories per minute than walking because it has a much higher MET value (intensity). For example, running at 6 mph burns about twice as many calories as walking at 3.5 mph.',
        },
      },
      {
        '@type': 'Question',
        name: 'How can I burn more calories on my walks or runs?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can increase the duration, increase your speed, or add an incline. All of these will increase the total energy expenditure of your workout.',
        },
      },
       {
        '@type': 'Question',
        name: 'How does this compare to the Calorie Burn by Activity calculator?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'This is a simplified version of the <a href="/calorie-burn-by-activity">Calorie Burn by Activity Calculator</a>, focused specifically on common walking and running speeds for quick and easy estimation.',
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
              <BreadcrumbPage>Walking/Running Calorie Calculator</BreadcrumbPage>
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
                  Walking/Running Calorie Calculator
                </h1>
                <p className="text-muted-foreground">
                  Estimate the calories burned during your walk or run based on the duration, your speed, and your body weight.
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <WalkingRunningCaloriesCalculatorForm />
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>How to Use the Calculator</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              This tool provides a straightforward way to estimate the calorie burn from your cardio session.
            </p>
            <ol className="list-decimal list-inside space-y-2">
              <li><strong>Enter Your Weight and Duration:</strong> Input your current body weight and the total minutes of your workout.</li>
              <li><strong>Select Your Speed:</strong> Choose the walking or running pace that best matches your workout from the dropdown list.</li>
              <li><strong>Calculate Your Burn:</strong> The tool will estimate your total calorie expenditure for the session.</li>
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
                  <TableCell>Body Weight</TableCell>
                  <TableCell>180 lbs</TableCell>
                </TableRow>
                 <TableRow>
                  <TableCell>Duration</TableCell>
                  <TableCell>45 minutes</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Activity</TableCell>
                  <TableCell>Running, 6 mph (10 min/mile)</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-bold">Estimated Calories Burned</TableCell>
                  <TableCell className="font-bold">~665 kcal</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Interpretation & Next Step</TableCell>
                  <TableCell>A 45-minute run at this pace burns a substantial number of calories. This expenditure is a key component of the user's <Link href="/tdee" className="text-primary hover:underline">TDEE</Link> and helps create a <Link href="/calorie-deficit" className="text-primary hover:underline">calorie deficit</Link> for fat loss.</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Understanding Calorie Burn from Cardio</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <h3 className="font-semibold text-lg text-foreground">What is MET and How Does It Work?</h3>
            <p>
              This calculator uses a standard scientific formula based on the Metabolic Equivalent of Task (MET). A MET is a measure of an activity's intensity. 1 MET is the energy you burn while sitting at rest. Running at 6 mph has a MET value of 9.8, meaning it burns 9.8 times as much energy as resting.
            </p>
            <p>The formula is: Calories Burned = Duration (min) × [(MET × 3.5 × Weight in kg) / 200]. This calculator does all the conversions for you to provide a reliable estimate of your workout's energy cost.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Common Mistakes</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>Inaccurate Speed Selection:</strong> Choosing a faster running speed than you actually maintained will overestimate your calorie burn.</li>
              <li><strong>"Eating Back" Exercise Calories:</strong> A common dieting mistake. Your <Link href="/tdee" className="text-primary hover:underline">TDEE</Link> already accounts for your activity level. Use this tool for information, not to justify eating more.</li>
              <li><strong>Ignoring Inclines:</strong> This calculator assumes you are on a flat surface. Walking or running uphill significantly increases calorie burn.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Pro Tips & Quick Hacks</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>Incorporate Intervals:</strong> Alternating between high-speed running and slower walking (HIIT) can boost your calorie burn and improve cardiovascular fitness more than steady-state cardio.</li>
              <li><strong>Fuel Your Runs:</strong> Ensure you have enough energy for your workouts by eating a carbohydrate-rich meal 1-2 hours beforehand. Use the <Link href="/carb-intake" className="text-primary hover:underline">Carb Intake Calculator</Link> to find your needs.</li>
              <li><strong>Track Your Fitness:</strong> As your cardiovascular fitness improves, your resting heart rate may decrease. You can track this progress with our <Link href="/vo2-max" className="text-primary hover:underline">VO2 Max Estimator</Link>.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Frequently Asked Questions (FAQ)</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Is this calculator more accurate than a step counter?</AccordionTrigger>
                <AccordionContent>
                  It can be, because it accounts for intensity (speed). Our <a href="/steps-to-calories">Steps to Calories Calculator</a> is great for general daily activity, but this tool is better for specific workouts.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Should I "eat back" the calories I burn?</AccordionTrigger>
                <AccordionContent>
                  Generally, no. Your activity level in the <Link href="/tdee" className="text-primary hover:underline">TDEE Calculator</Link> already accounts for exercise. Use this tool for information, not as a license to eat more.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>How does running vs. walking affect calorie burn?</AccordionTrigger>
                <AccordionContent>
                  Running burns significantly more calories per minute due to its higher MET value (intensity). For example, running at 6 mph burns about twice as many calories as walking at 3.5 mph.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                 <AccordionTrigger>How can I burn more calories?</AccordionTrigger>
                <AccordionContent>
                  Increase the duration, increase your speed, or add an incline. All of these will increase the total energy expenditure.
                </AccordionContent>
              </AccordionItem>
               <AccordionItem value="item-5">
                <AccordionTrigger>How is this different from the general calorie burn calculator?</AccordionTrigger>
                <AccordionContent>
                  This is a simplified version of the <a href="/calorie-burn-by-activity">Calorie Burn by Activity Calculator</a>, focused on the most common cardio activities for quick and easy estimation.
                </AccordionContent>
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
                  <TableCell>Runners</TableCell>
                  <TableCell>Estimate the energy cost of their training runs to better plan their nutrition and fueling strategy.</TableCell>
                  <TableCell><Link href="/carb-intake" className="text-primary hover:underline">Carb Intake Calculator</Link></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>People on a Diet</TableCell>
                  <TableCell>Quantify the calorie burn from their daily walk to help them achieve their <Link href="/calorie-deficit" className="text-primary hover:underline">calorie deficit</Link>.</TableCell>
                  <TableCell><Link href="/tdee" className="text-primary hover:underline">TDEE Calculator</Link></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Fitness Planners</TableCell>
                  <TableCell>Compare the calorie burn of different running speeds or durations to design an effective cardio plan.</TableCell>
                  <TableCell><Link href="/vo2-max" className="text-primary hover:underline">VO2 Max Estimator</Link></TableCell>
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
            <Link href="/calorie-burn-by-activity" className="p-4 border rounded-lg hover:bg-muted">
              <h3 className="font-semibold">Calorie Burn by Activity</h3>
              <p className="text-sm text-muted-foreground">For a much wider range of activities beyond walking and running.</p>
            </Link>
            <Link href="/tdee" className="p-4 border rounded-lg hover:bg-muted">
              <h3 className="font-semibold">TDEE Calculator</h3>
              <p className="text-sm text-muted-foreground">See how your workouts contribute to your total daily calorie needs.</p>
            </Link>
            <Link href="/vo2-max" className="p-4 border rounded-lg hover:bg-muted">
              <h3 className="font-semibold">VO2 Max Estimator</h3>
              <p className="text-sm text-muted-foreground">Track your cardiovascular fitness improvements from your running/walking routine.</p>
            </Link>
            <Link href="/steps-to-calories" className="p-4 border rounded-lg hover:bg-muted">
              <h3 className="font-semibold">Steps to Calories</h3>
              <p className="text-sm text-muted-foreground">Estimate the burn from your general daily activity, not just specific workouts.</p>
            </Link>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
