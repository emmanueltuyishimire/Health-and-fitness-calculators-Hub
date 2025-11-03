
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
import { WeightGainGoalCalculatorForm } from '@/components/weight-gain-goal-calculator-form';

export const metadata: Metadata = {
  title: 'Weight Gain Goal Calculator – Plan Your Muscle Building',
  description:
    'Set a clear path to your target weight. Calculate your daily calorie surplus and estimate the timeline for your weight gain journey based on your goals.',
  openGraph: {
    title: 'Weight Gain Goal Calculator – Plan Your Muscle Building',
    description:
      'Set a clear path to your target weight. Calculate your daily calorie surplus and estimate the timeline for your weight gain journey based on your goals.',
    type: 'website',
  },
};

export default function WeightGainGoalPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Weight Gain Goal Calculator',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
    },
    description:
      'A free web-based calculator to plan a weight gain timeline and determine daily calorie targets for muscle building.',
  };

  const howToJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Plan Your Weight Gain Goal',
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
        text: 'Choose a weekly weight gain goal. A rate of 0.5-1 lb per week is generally safe for lean muscle gain.',
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
        name: 'What is a realistic weight gain goal?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A safe and sustainable rate for lean muscle gain is 0.5 to 1 pound (about 0.25 to 0.5 kg) per week. Gaining weight faster than this often results in accumulating excess body fat. For a more tailored calorie target, start with our <a href="/calorie-surplus">Calorie Surplus Calculator</a>.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why do I need my TDEE for this calculator?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Your <a href="/tdee">TDEE</a> (Total Daily Energy Expenditure) is your maintenance calorie level. To gain weight, you must eat more than this amount. This calculator uses your TDEE to calculate the precise surplus needed to achieve your desired weekly weight gain.',
        },
      },
      {
        '@type': 'Question',
        name: 'Will I gain weight exactly as predicted?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The timeline is an estimate. Weight gain is not always linear. As you gain weight, your TDEE will increase, so you may need to recalculate your <a href="/tdee">TDEE</a> and adjust your calorie intake periodically to continue making progress.',
        },
      },
      {
        '@type': 'Question',
        name: 'What should I do when I reach my goal weight?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Once you reach your goal, you should transition to eating at your new, higher maintenance calorie level. You can find this with the <a href="/calorie-maintenance">Calorie Maintenance Calculator</a>. This will help you maintain your new weight and muscle mass.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I ensure the weight I gain is muscle, not fat?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Gaining quality muscle mass requires two key things: a consistent resistance training program to stimulate muscle growth, and adequate protein intake. Use our Protein Intake Calculator to find your target. Also, track your progress with the <a href="/ffmi">FFMI Calculator</a>.',
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
              <BreadcrumbPage>Weight Gain Goal Calculator</BreadcrumbPage>
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
                  Weight Gain Goal Calculator
                </h1>
                <p className="text-muted-foreground">
                  Turn your weight gain goal into an actionable plan. This calculator helps you determine your daily calorie target and estimates how long it will take to reach your desired weight. Start by getting your maintenance calories from the <Link href="/tdee" className="text-primary hover:underline">TDEE Calculator</Link>.
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <WeightGainGoalCalculatorForm />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>How to Use the Weight Gain Goal Calculator</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              This calculator creates a clear roadmap for your weight gain journey by connecting your goals to a daily calorie target and an estimated timeline.
            </p>
            <ol className="list-decimal list-inside space-y-2">
              <li><strong>Find Your TDEE:</strong> The essential first step. Visit our <Link href="/tdee" className="text-primary hover:underline">TDEE Calculator</Link> to determine your daily maintenance calories.</li>
              <li><strong>Enter Your TDEE:</strong> Input your TDEE value into the form.</li>
              <li><strong>Enter Current & Goal Weight:</strong> Provide your starting weight and the weight you want to achieve.</li>
              <li><strong>Choose Your Pace:</strong> Select your desired weekly weight gain rate. 0.5-1 lb per week is a common and sustainable goal for lean mass gain.</li>
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
                  <TableCell>150 lbs</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Goal Weight</TableCell>
                  <TableCell>160 lbs</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Desired Weekly Gain</TableCell>
                  <TableCell>0.5 lb/week</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-bold">Daily Calorie Target</TableCell>
                  <TableCell className="font-bold">~2750 kcal/day</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-bold">Estimated Time to Goal</TableCell>
                  <TableCell className="font-bold">20 weeks</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Interpretation & Next Step</TableCell>
                  <TableCell>To gain 10 lbs at a rate of 0.5 lb/week, this person needs a 250-calorie surplus. Their target is 2750 kcal/day, and it should take about 20 weeks. Their next step is to use the <Link href="/ffmi" className="text-primary hover:underline">FFMI Calculator</Link> to track muscle gains.</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Understanding Your Weight Gain Plan</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <h3 className="font-semibold text-lg text-foreground">The Math of Weight Gain</h3>
            <p>Weight gain requires a calorie surplus—consuming more energy than you burn. A surplus of approximately 3,500 calories is needed to gain one pound of body weight. To gain one pound per week, you need a daily surplus of 500 calories (3500 / 7 = 500).</p>
            <p>This calculator automates that math. It takes your desired weekly weight gain, converts it into a daily calorie surplus, and adds that to your <Link href="/tdee" className="text-primary hover:underline">TDEE</Link> to give you a precise daily calorie target. The timeline is then estimated by dividing the total weight you want to gain by your weekly goal.</p>
            
            <h3 className="font-semibold text-lg text-foreground">The Importance of a "Lean Bulk"</h3>
            <p>While it's tempting to eat everything in sight to gain weight quickly (a "dirty bulk"), this usually results in excessive fat gain. A more effective strategy is a "lean bulk," which involves a small, controlled calorie surplus (e.g., 250-500 calories per day).</p>
            <p>A modest surplus provides enough extra energy for muscle protein synthesis without overwhelming your body's ability to build muscle, which would cause the excess to be stored as fat. This approach, combined with resistance training and adequate protein, helps ensure that most of the weight you gain is lean muscle tissue. Use the <Link href="/ffmi" className="text-primary hover:underline">FFMI Calculator</Link> to track the quality of your weight gain.</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Frequently Asked Questions</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>What is a realistic weight gain goal?</AccordionTrigger>
                <AccordionContent>A safe and sustainable rate for lean muscle gain is 0.5 to 1 pound (about 0.25 to 0.5 kg) per week. Gaining faster often means accumulating excess body fat. For a tailored target, start with our <a href="/calorie-surplus">Calorie Surplus Calculator</a>.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Why do I need my TDEE for this calculator?</AccordionTrigger>
                <AccordionContent>Your <a href="/tdee">TDEE</a> is your maintenance calorie level. To gain weight, you must eat more than this. This calculator uses your TDEE to find the precise surplus needed for your goal.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Will I gain weight exactly as predicted?</AccordionTrigger>
                <AccordionContent>The timeline is an estimate. As you gain weight, your TDEE will increase, so you may need to recalculate your <a href="/tdee">TDEE</a> and adjust your calorie intake to continue making progress.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>What should I do when I reach my goal weight?</AccordionTrigger>
                <AccordionContent>Transition to eating at your new maintenance calorie level, found with the <a href="/calorie-maintenance">Calorie Maintenance Calculator</a>. This will help you maintain your new weight and muscle mass.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>How do I ensure the weight I gain is muscle, not fat?</AccordionTrigger>
                <AccordionContent>This requires consistent resistance training to stimulate muscle growth and adequate protein intake. Use our Protein Intake Calculator to find your target. Also, track your progress with the <a href="/ffmi">FFMI Calculator</a>.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

      </div>
    </>
  );
}
