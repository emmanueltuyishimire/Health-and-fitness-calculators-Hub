
import type { Metadata } from 'next';
import Link from 'next/link';
import { Dumbbell } from 'lucide-react';
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
import { OneRepMaxCalculatorForm } from '@/components/one-rep-max-calculator-form';

export const metadata: Metadata = {
  title: 'One Rep Max (1RM) Calculator – Estimate Your Max Strength',
  description:
    'Calculate your one-rep max (1RM) for any exercise using the Epley formula. Determine your true strength and set effective training loads for your workouts.',
  openGraph: {
    title: 'One Rep Max (1RM) Calculator – Estimate Your Max Strength',
    description:
      'Calculate your one-rep max (1RM) for any exercise using the Epley formula. Determine your true strength and set effective training loads for your workouts.',
    type: 'website',
  },
};

export default function OneRepMaxPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'One Rep Max (1RM) Calculator',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
    },
    description:
      'A free web-based calculator to estimate one-repetition maximum (1RM) for strength training from weight and repetitions.',
  };

  const howToJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Calculate Your One Rep Max (1RM)',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Enter Weight Lifted',
        text: 'Input the weight you lifted for a specific number of repetitions.',
      },
      {
        '@type': 'HowToStep',
        name: 'Enter Repetitions',
        text: 'Input the number of repetitions you successfully completed with that weight.',
      },
      {
        '@type': 'HowToStep',
        name: 'Calculate',
        text: 'The calculator will estimate your one-rep max, which is the maximum weight you could lift for a single repetition.',
      },
    ],
  };

    const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is a One-Rep Max (1RM)?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Your one-rep max (1RM) is the maximum amount of weight you can lift for a single repetition of a given exercise. It is the gold standard for measuring your maximal strength for a specific movement.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why is calculating my 1RM useful?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Knowing your 1RM allows you to program your workouts using percentages of that maximum. This method, known as percentage-based training, is a proven way to structure your workouts for specific goals like strength, hypertrophy (muscle size), or endurance. For tracking muscularity, check out the <a href="/ffmi">FFMI Calculator</a>.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is it safe to test my true 1RM?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Testing a true 1RM can be very demanding and carries a higher risk of injury, especially for beginners. Using a calculator like this one provides a safe and accurate estimate based on a sub-maximal set (e.g., lifting a weight for 5 reps).',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I use my 1RM in my training?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Once you know your 1RM, you can use percentages of it to guide your workouts. For example: 85-95% of 1RM for strength (1-5 reps), 70-85% for hypertrophy (6-12 reps), and 50-70% for muscular endurance (15+ reps). Use your <a href="/daily-calorie-needs">Daily Calorie Needs</a> to ensure you have enough energy for these workouts.',
        },
      },
      {
        '@type': 'Question',
        name: 'How often should I re-test or re-calculate my 1RM?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You should re-calculate your 1RM every 4-8 weeks to ensure your training program is based on your current strength levels. As you get stronger, your 1RM will increase, and your training weights should increase accordingly.',
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
              <BreadcrumbPage>One Rep Max (1RM) Calculator</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <Card>
          <CardHeader>
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 text-primary p-3 rounded-lg">
                <Dumbbell className="h-8 w-8" />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold">
                  One Rep Max (1RM) Calculator
                </h1>
                <p className="text-muted-foreground">
                  Estimate your one-rep max for any exercise to measure your strength and program your workouts effectively.
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <OneRepMaxCalculatorForm />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>How to Use the 1RM Calculator</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              This calculator uses the Epley formula, a popular and reliable method for estimating your 1RM without needing to perform a dangerous maximal lift.
            </p>
            <ol className="list-decimal list-inside space-y-2">
              <li><strong>Perform a Warm-Up:</strong> Properly warm up for the exercise you want to test.</li>
              <li><strong>Choose a Challenging Weight:</strong> Select a weight you can lift for 2-10 repetitions with good form before failure.</li>
              <li><strong>Enter Your Data:</strong> Input the weight you lifted and the number of reps you completed into the calculator.</li>
              <li><strong>Calculate Your 1RM:</strong> The calculator will show your estimated 1RM and a table of percentages to guide your training.</li>
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
                  <TableCell>Weight Lifted</TableCell>
                  <TableCell>225 lbs</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Repetitions</TableCell>
                  <TableCell>5</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-bold">Estimated 1RM</TableCell>
                  <TableCell className="font-bold">~263 lbs</TableCell>
                </TableRow>
                 <TableRow>
                  <TableCell>Interpretation & Next Step</TableCell>
                  <TableCell>This user's estimated max squat is 263 lbs. For hypertrophy training (8-12 reps), they should work with weights around 70-80% of this, which is approximately 184-210 lbs. They can use the <Link href="/protein-intake" className="text-primary hover:underline">Protein Intake Calculator</Link> to ensure they are consuming enough protein for muscle growth.</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Understanding Your 1RM</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <h3 className="font-semibold text-lg text-foreground">What is Percentage-Based Training?</h3>
            <p>Percentage-based training is a structured method of organizing your workouts based on specific percentages of your 1RM. Different percentage ranges correspond to different training adaptations:</p>
            <ul className="list-disc list-inside space-y-2">
                <li><strong>Strength (85-100% 1RM):</strong> Lifting very heavy weights for low reps (1-5) primarily builds maximal strength.</li>
                <li><strong>Hypertrophy (70-85% 1RM):</strong> Lifting moderate-to-heavy weights for moderate reps (6-12) is most effective for increasing muscle size.</li>
                <li><strong>Endurance (50-70% 1RM):</strong> Lifting lighter weights for high reps (15+) improves the muscle's ability to sustain effort over time.</li>
            </ul>
             <p>By knowing your 1RM, you can precisely target your desired goal. To support this training, ensure you're getting enough calories with the <Link href="/daily-calorie-needs" className="text-primary hover:underline">Daily Calorie Needs Calculator</Link>.</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Common Mistakes</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>Using Bad Form:</strong> The reps entered must be performed with proper technique. "Cheating" reps will inflate your 1RM estimate.</li>
              <li><strong>Testing Too Often:</strong> You don't need to calculate your 1RM every week. Re-assess every 4-8 weeks to track progress.</li>
              <li><strong>Not Warming Up Properly:</strong> Always warm up thoroughly before attempting a heavy set to reduce injury risk.</li>
              <li><strong>Using a Rep Range That's Too High:</strong> The formula is most accurate for reps between 2 and 10. A set of 20 reps will give a less reliable estimate.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Pro Tips & Quick Hacks</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>Use for All Major Lifts:</strong> Calculate your 1RM for key exercises like squat, bench press, and deadlift to structure your entire program.</li>
              <li><strong>Train Based on a "Training Max":</strong> Some lifters use 90% of their true 1RM as a "training max" to base their percentages on. This conservative approach helps manage fatigue and ensures consistent progress.</li>
              <li><strong>Listen to Your Body:</strong> On days you feel fatigued, it's okay to reduce the weight. An estimated 1RM is a guide, not an absolute rule.</li>
              <li><strong>Fuel for Success:</strong> Building strength requires a calorie surplus and adequate protein. Use the <Link href="/calorie-surplus" className="text-primary hover:underline">Calorie Surplus</Link> and <Link href="/protein-intake" className="text-primary hover:underline">Protein Intake</Link> calculators to plan your nutrition.</li>
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
                <AccordionTrigger>What is a One-Rep Max (1RM)?</AccordionTrigger>
                <AccordionContent>Your one-rep max (1RM) is the maximum amount of weight you can lift for a single repetition of a given exercise. It is the gold standard for measuring your maximal strength for a specific movement.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Why is calculating my 1RM useful?</AccordionTrigger>
                <AccordionContent>Knowing your 1RM allows you to program your workouts using percentages of that maximum. This method, known as percentage-based training, is a proven way to structure your workouts for specific goals like strength, hypertrophy (muscle size), or endurance. For tracking muscularity, check out the <Link href="/ffmi" className="text-primary hover:underline">FFMI Calculator</Link>.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Is it safe to test my true 1RM?</AccordionTrigger>
                <AccordionContent>Testing a true 1RM can be very demanding and carries a higher risk of injury, especially for beginners. Using a calculator like this one provides a safe and accurate estimate based on a sub-maximal set (e.g., lifting a weight for 5 reps).</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>How do I use my 1RM in my training?</AccordionTrigger>
                <AccordionContent>Once you know your 1RM, you can use percentages of it to guide your workouts. For example: 85-95% of 1RM for strength (1-5 reps), 70-85% for hypertrophy (6-12 reps), and 50-70% for muscular endurance (15+ reps). Use your <Link href="/daily-calorie-needs" className="text-primary hover:underline">Daily Calorie Needs</Link> to ensure you have enough energy for these workouts.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>How often should I re-test or re-calculate my 1RM?</AccordionTrigger>
                <AccordionContent>You should re-calculate your 1RM every 4-8 weeks to ensure your training program is based on your current strength levels. As you get stronger, your 1RM will increase, and your training weights should increase accordingly.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
