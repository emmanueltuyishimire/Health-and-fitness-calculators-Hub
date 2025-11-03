
import type { Metadata } from 'next';
import Link from 'next/link';
import { AreaChart } from 'lucide-react';
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
import { WeightChangeTrackerForm } from '@/components/weight-change-tracker-form';

export const metadata: Metadata = {
  title: 'Weekly Weight Change Tracker – See Your True Progress',
  description:
    'Track your weight loss or gain more accurately by calculating your weekly average change. Smooth out daily fluctuations to see your true trend and stay motivated.',
  openGraph: {
    title: 'Weekly Weight Change Tracker – See Your True Progress',
    description:
      'Track your weight loss or gain more accurately by calculating your weekly average change. Smooth out daily fluctuations to see your true trend and stay motivated.',
    type: 'website',
  },
};

export default function WeeklyWeightChangeTrackerPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Weekly Weight Change Tracker',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
    },
    description:
      'A free web-based calculator to determine the average weekly weight change from daily weigh-ins.',
  };

  const howToJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Track Your Weekly Weight Change',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Weigh In Daily',
        text: 'For one week, weigh yourself every morning under the same conditions (e.g., after waking up, before eating).',
      },
      {
        '@type': 'HowToStep',
        name: 'Enter Daily Weights',
        text: 'Input the weight for each of the 7 days into the calculator.',
      },
      {
        '@type': 'HowToStep',
        name: 'Calculate',
        text: 'The calculator will compute the average weight for the week and compare it to the previous week\'s average (if provided) to show your true rate of change.',
      },
    ],
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Why is tracking weekly average weight better than daily weight?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Daily weight can fluctuate by several pounds due to water retention, food intake, and other factors. The weekly average smooths out these fluctuations, revealing the true underlying trend of your weight change. It provides a more accurate and less frustrating way to track progress.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the best way to weigh myself consistently?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Weigh yourself first thing in the morning, after using the restroom, and before eating or drinking anything. Use the same scale placed on a hard, flat surface. This consistency is key for accurate tracking.',
        },
      },
      {
        '@type': 'Question',
        name: 'My weight went up today, but my weekly average is down. What does this mean?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'This is perfectly normal and exactly why this tool is useful. The daily increase is likely due to water retention or a large meal the day before. The fact that your weekly average is down means you are successfully losing weight over time. Trust the average, not the daily number. Your <a href="/calorie-deficit">calorie deficit</a> is working.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does this calculator help with my TDEE?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'By tracking your weekly weight change and your average daily calorie intake, you can reverse-engineer your true TDEE. If you lost 1 lb on average while eating 2000 calories/day, your actual maintenance TDEE is closer to 2500 calories/day. This allows you to adjust your targets from the <a href="/tdee">TDEE Calculator</a> with real-world data.',
        },
      },
      {
        '@type': 'Question',
        name: 'Should I stop weighing myself daily?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Not necessarily. Weighing daily provides the data needed for this calculator. The key is to shift your mindset: collect the daily data, but only pay attention to the weekly average. This helps you become emotionally detached from the meaningless daily fluctuations.',
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
              <BreadcrumbPage>Weekly Weight Change Tracker</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <Card>
          <CardHeader>
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 text-primary p-3 rounded-lg">
                <AreaChart className="h-8 w-8" />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold">
                  Weekly Weight Change Tracker
                </h1>
                <p className="text-muted-foreground">
                  Stop letting daily scale fluctuations demotivate you. This tool calculates your average weekly weight to reveal your true progress. Use it to accurately track your weight loss or gain and adjust your plan with confidence.
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <WeightChangeTrackerForm />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>How to Use the Weekly Weight Change Tracker</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              This calculator helps you see the forest for the trees by smoothing out daily weight volatility.
            </p>
            <ol className="list-decimal list-inside space-y-2">
              <li><strong>Be Consistent:</strong> For one full week, weigh yourself each morning under the same conditions (e.g., after waking, before eating/drinking, on the same scale).</li>
              <li><strong>Enter Daily Weights:</strong> Input your weight for each of the 7 days into the form.</li>
              <li><strong>Enter Previous Week's Average (Optional):</strong> If you have last week's average weight, enter it to see your rate of change.</li>
              <li><strong>Calculate:</strong> The tool will show your average weight for the week and your true weekly change, giving you reliable feedback on your progress towards your <Link href="/weight-loss-goal" className="text-primary hover:underline">Weight Loss Goal</Link>.</li>
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
                  <TableCell>Daily Weights (lbs)</TableCell>
                  <TableCell>180.5, 181.2, 180.1, 179.8, 181.5, 179.5, 179.0</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Previous Week's Average</TableCell>
                  <TableCell>181.0 lbs</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-bold">This Week's Average</TableCell>
                  <TableCell className="font-bold">180.2 lbs</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-bold">Total Weekly Change</TableCell>
                  <TableCell className="font-bold">-0.8 lbs</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Interpretation & Next Step</TableCell>
                  <TableCell>Despite daily weigh-ins going up to 181.5, the user's weekly average shows a clear loss of 0.8 lbs. The plan is working. The next step is to continue the current diet plan, calculated with the <Link href="/calorie-deficit" className="text-primary hover:underline">Calorie Deficit Calculator</Link>, and track again next week.</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Understanding Weight Fluctuations</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <h3 className="font-semibold text-lg text-foreground">Why Does Daily Weight Fluctuate So Much?</h3>
            <p>The number on the scale can change dramatically from one day to the next, which can be incredibly frustrating. It's crucial to understand that these changes rarely reflect actual fat loss or gain. The main culprits are:</p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Water Retention:</strong> A high-sodium or high-carbohydrate meal can cause your body to hold onto extra water, temporarily increasing your weight.</li>
              <li><strong>Digestive Contents:</strong> The physical weight of the food and liquid currently in your digestive system affects the scale.</li>
              <li><strong>Hormonal Changes:</strong> For women, the menstrual cycle can cause significant water retention and weight fluctuations.</li>
              <li><strong>Exercise:</strong> An intense workout can cause inflammation and water retention in the muscles for a day or two.</li>
            </ul>
            <p>By taking a weekly average, you smooth out this "noise" and get a clear signal of your true progress. It turns a chaotic set of numbers into a meaningful trend line, which is essential for making informed decisions about your <Link href="/tdee" className="text-primary hover:underline">TDEE</Link> and calorie intake.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Common Mistakes</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>Inconsistent Weigh-Ins:</strong> Weighing yourself at different times of day, with or without clothes, or on different scales will lead to inaccurate data.</li>
              <li><strong>Reacting to Daily Highs and Lows:</strong> Getting discouraged by a random daily increase or overly excited by a drop can lead to poor decisions, like over-restricting calories.</li>
              <li><strong>Forgetting to Track Intake:</strong> To get the most out of this tool, track your average weekly weight alongside your average daily calorie intake. This helps you find your true maintenance level.</li>
              <li><strong>Only Tracking for One Week:</strong> The real power comes from tracking your average week after week to see the long-term trend.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Pro Tips & Quick Hacks</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>Use a Charting App:</strong> Apps like Happy Scale or Libra automatically calculate moving averages, making this process even easier.</li>
              <li><strong>"Weigh and Forget":</strong> Adopt the mindset of collecting data daily but only analyzing it weekly. Step on the scale, log the number, and move on with your day.</li>
              <li><strong>Combine with Other Measurements:</strong> Track your weekly weight average alongside body measurements (waist, hips) and progress photos for a complete picture of your body recomposition.</li>
              <li><strong>Adjust Your TDEE:</strong> If you're consistently losing 1 lb/week on 2000 calories, you've learned your true maintenance TDEE is about 2500 calories. Use this real-world data to refine the estimates from the <Link href="/tdee" className="text-primary hover:underline">TDEE Calculator</Link>.</li>
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
                <AccordionTrigger>Why is tracking weekly average weight better than daily weight?</AccordionTrigger>
                <AccordionContent>Daily weight can fluctuate by several pounds due to water retention, food intake, and other factors. The weekly average smooths out these fluctuations, revealing the true underlying trend of your weight change. It provides a more accurate and less frustrating way to track progress.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>What is the best way to weigh myself consistently?</AccordionTrigger>
                <AccordionContent>Weigh yourself first thing in the morning, after using the restroom, and before eating or drinking anything. Use the same scale placed on a hard, flat surface. This consistency is key for accurate tracking.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>My weight went up today, but my weekly average is down. What does this mean?</AccordionTrigger>
                <AccordionContent>This is perfectly normal and exactly why this tool is useful. The daily increase is likely due to water retention or a large meal the day before. The fact that your weekly average is down means you are successfully losing weight over time. Trust the average, not the daily number. Your <a href="/calorie-deficit">calorie deficit</a> is working.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>How does this calculator help with my TDEE?</AccordionTrigger>
                <AccordionContent>By tracking your weekly weight change and your average daily calorie intake, you can reverse-engineer your true TDEE. If you lost 1 lb on average while eating 2000 calories/day, your actual maintenance TDEE is closer to 2500 calories/day. This allows you to adjust your targets from the <a href="/tdee">TDEE Calculator</a> with real-world data.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Should I stop weighing myself daily?</AccordionTrigger>
                <AccordionContent>Not necessarily. Weighing daily provides the data needed for this calculator. The key is to shift your mindset: collect the daily data, but only pay attention to the weekly average. This helps you become emotionally detached from the meaningless daily fluctuations.</AccordionContent>
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
                  <TableCell>Anyone on a Diet</TableCell>
                  <TableCell>Stay motivated and accurately assess if a diet plan is working.</TableCell>
                  <TableCell><Link href="/calorie-deficit" className="text-primary hover:underline">Calorie Deficit Calculator</Link></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Fitness Coaches</TableCell>
                  <TableCell>Objectively track client progress and make data-driven adjustments to their plans.</TableCell>
                  <TableCell>Fat Loss Progress Tracker</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Data-Driven Individuals</TableCell>
                  <TableCell>Use the data to reverse-engineer and fine-tune their true TDEE.</TableCell>
                  <TableCell><Link href="/tdee" className="text-primary hover:underline">TDEE Calculator</Link></TableCell>
                </TableRow>
                 <TableRow>
                  <TableCell>People in a "Bulk"</TableCell>
                  <TableCell>Ensure they are gaining weight at a slow, controlled pace to maximize muscle gain.</TableCell>
                  <TableCell><Link href="/calorie-surplus" className="text-primary hover:underline">Calorie Surplus Calculator</Link></TableCell>
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
            <Link href="/weight-loss-goal" className="p-4 border rounded-lg hover:bg-muted">
              <h3 className="font-semibold">Weight Loss Goal Calculator</h3>
              <p className="text-sm text-muted-foreground">Set a clear timeline and calorie target for your weight loss journey.</p>
            </Link>
            <Link href="/tdee" className="p-4 border rounded-lg hover:bg-muted">
              <h3 className="font-semibold">TDEE Calculator</h3>
              <p className="text-sm text-muted-foreground">Use your weight change data to refine your estimated maintenance calories.</p>
            </Link>
            <Link href="/body-fat" className="p-4 border rounded-lg hover:bg-muted">
              <h3 className="font-semibold">Body Fat Percentage Calculator</h3>
              <p className="text-sm text-muted-foreground">Combine with weight tracking to monitor body composition changes.</p>
            </Link>
            <Link href="/calorie-maintenance" className="p-4 border rounded-lg hover:bg-muted">
              <h3 className="font-semibold">Calorie Maintenance Calculator</h3>
              <p className="text-sm text-muted-foreground">Find the calorie level to maintain your weight once you reach your goal.</p>
            </Link>
          </CardContent>
        </Card>

      </div>
    </>
  );
}
