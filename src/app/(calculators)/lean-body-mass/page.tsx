
import type { Metadata } from 'next';
import Link from 'next/link';
import { Weight } from 'lucide-react';
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
import { LeanBodyMassCalculatorForm } from '@/components/lean-body-mass-calculator-form';

export const metadata: Metadata = {
  title: 'Lean Body Mass Calculator – Estimate Your Muscle Mass',
  description:
    'Calculate your Lean Body Mass (LBM) to understand your body composition better. LBM is a key indicator of metabolic health and fitness progress.',
  openGraph: {
    title: 'Lean Body Mass Calculator – Estimate Your Muscle Mass',
    description:
      'Calculate your Lean Body Mass (LBM) to understand your body composition better. LBM is a key indicator of metabolic health and fitness progress.',
    type: 'website',
  },
};

export default function LeanBodyMassPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Lean Body Mass Calculator',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
    },
    description:
      'A free web-based calculator to determine Lean Body Mass (LBM) based on height, weight, and gender.',
  };

  const howToJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Calculate Your Lean Body Mass',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Select Gender & Units',
        text: 'Choose your gender and preferred unit system (Metric or Imperial).',
      },
      {
        '@type': 'HowToStep',
        name: 'Enter Your Details',
        text: 'Input your current height and weight.',
      },
      {
        '@type': 'HowToStep',
        name: 'Calculate LBM',
        text: 'Click the "Calculate Lean Body Mass" button to see your result. The calculator uses the Boer formula, one of the most common estimations.',
      },
    ],
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is Lean Body Mass (LBM)?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Lean Body Mass is the total weight of your body minus all the weight due to your fat mass. It includes the weight of your organs, skin, bones, and muscles. It is a better indicator of health than total body weight, which you can compare using our <a href="/ideal-weight">Ideal Weight Calculator</a>.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why is LBM important?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'LBM is the most metabolically active tissue in your body. A higher LBM means a higher resting metabolism. Tracking LBM helps you ensure you are losing fat, not muscle, during weight loss. It is a more precise metric than <a href="/bmi">BMI</a> for assessing fitness progress.',
        },
      },
      {
        '@type': 'Question',
        name: 'How can I increase my Lean Body Mass?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The best way to increase LBM is through resistance training (lifting weights) combined with adequate protein intake. This stimulates muscle protein synthesis, leading to muscle growth. You can estimate your protein needs with our Protein Intake Calculator.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is this calculator accurate?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'This calculator uses the Boer formula, which is a widely accepted estimation. However, it is still an estimate. For the most accurate measurement, you would need a clinical assessment like a DEXA scan. For another useful estimate, use our <a href="/body-fat">Body Fat Percentage Calculator</a>.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does LBM relate to my BMR?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Your Lean Body Mass is the primary driver of your Basal Metabolic Rate (BMR). The more LBM you have, the more calories your body burns at rest. You can calculate your <a href="/bmr">BMR</a> to see this in action.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I lose weight without losing LBM?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, this is the goal of a well-structured fat loss plan. It involves a moderate calorie deficit, sufficient protein, and resistance training. Use our <a href="/tdee">TDEE Calculator</a> to set an appropriate target.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is a good LBM to have?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'There is no single "good" LBM, as it depends on your height, gender, and genetics. Instead of focusing on a specific number, aim to maintain or increase your LBM over time. A related metric to track is the Fat-Free Mass Index (FFMI), which you can find on our <a href="/ffmi">FFMI Calculator</a> page.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do women have less LBM than men?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'On average, yes. Men naturally have a higher percentage of muscle mass due to hormonal differences, primarily testosterone. This is why ideal weight ranges, which you can check with our <a href="/ideal-weight">Ideal Weight Calculator</a>, are different for men and women.',
        },
      },
      {
        '@type': 'Question',
        name: 'How often should I calculate my LBM?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Since LBM changes slowly, calculating it once every 4-6 weeks is sufficient to track progress. Daily weight fluctuations are mostly water and will not give an accurate picture of your LBM changes. For a more complete picture, pair this with our <a href="/body-fat">Body Fat Percentage Calculator</a>.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I have a high LBM but still be overweight?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, this is common in athletes and bodybuilders. Their <a href="/bmi">BMI</a> might classify them as "overweight," but their high LBM and low body fat percentage mean they are very healthy. This is a key limitation of BMI.',
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
              <BreadcrumbPage>Lean Body Mass Calculator</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <Card>
          <CardHeader>
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 text-primary p-3 rounded-lg">
                <Weight className="h-8 w-8" />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold">
                  Lean Body Mass Calculator
                </h1>
                <p className="text-muted-foreground">
                  Estimate your Lean Body Mass (LBM)—the total weight of your
                  body minus fat. LBM is a crucial metric for tracking fitness
                  progress, as it represents your muscle, bone, and organ
                  mass. Unlike <Link href="/bmi" className="text-primary hover:underline">BMI</Link>, focusing on LBM helps ensure you're losing fat, not
                  muscle.
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <LeanBodyMassCalculatorForm />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>How to Use the LBM Calculator</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              This calculator uses the Boer formula, a common and reliable
              method for estimating LBM. Follow these steps:
            </p>
            <ol className="list-decimal list-inside space-y-2">
              <li>
                <strong>Select Gender:</strong> The formula adjusts for average
                physiological differences between men and women.
              </li>
              <li>
                <strong>Choose Units:</strong> Select "Metric" (kg, cm) or
                "Imperial" (lbs, inches).
              </li>
              <li>
                <strong>Enter Height and Weight:</strong> Input your current
                height and weight for the calculation.
              </li>
              <li>
                <strong>Calculate:</strong> Click the button to see your
                estimated LBM. This number is the foundation of your
                metabolism, which you can explore further with the{' '}
                <Link href="/bmr" className="text-primary hover:underline">
                  BMR Calculator
                </Link>
                .
              </li>
            </ol>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Worked Examples</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Variable</TableHead>
                  <TableHead>Example 1 (Female)</TableHead>
                  <TableHead>Example 2 (Male)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Gender</TableCell>
                  <TableCell>Female</TableCell>
                  <TableCell>Male</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Height</TableCell>
                  <TableCell>165 cm</TableCell>
                  <TableCell>180 cm</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Weight</TableCell>
                  <TableCell>60 kg</TableCell>
                  <TableCell>85 kg</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-bold">Estimated LBM</TableCell>
                  <TableCell className="font-bold">47.3 kg</TableCell>
                  <TableCell className="font-bold">69.9 kg</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Interpretation & Next Step</TableCell>
                  <TableCell>
                    Her body consists of 47.3 kg of non-fat mass. She can
                    compare this to her total weight to estimate her body fat
                    using the{' '}
                    <Link href="/body-fat" className="text-primary hover:underline">
                      Body Fat Calculator
                    </Link>
                    .
                  </TableCell>
                  <TableCell>
                    His 69.9 kg of LBM is the primary driver of his metabolism.
                    He can use this insight to set goals with the{' '}
                    <Link href="/tdee" className="text-primary hover:underline">
                      TDEE Calculator
                    </Link>
                    .
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Understanding Lean Body Mass</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <h3 className="font-semibold text-lg text-foreground">
              What is Lean Body Mass?
            </h3>
            <p>
              Lean Body Mass (LBM) represents the total weight of your body
              minus all the weight due to fat mass. It's a sum of your organs,
              bones, muscles, skin, and body water. In essence, it's your
              "fat-free mass." While often used interchangeably with muscle
              mass, LBM is a more comprehensive term.
            </p>
            <p>
              Understanding your LBM is far more insightful than just tracking
              your total body weight on a scale. Your scale weight can
              fluctuate due to water retention, but changes in LBM are more
              indicative of real physiological changes. For anyone serious
              about fitness, preserving or increasing LBM is a primary goal. It
              is a much better metric for health than{' '}
              <Link href="/bmi" className="text-primary hover:underline">BMI</Link>, which can be misleading for active individuals.
            </p>

            <h3 className="font-semibold text-lg text-foreground">
              The Boer Formula
            </h3>
            <p>This calculator uses the Boer formula, a revised equation that is one of the most commonly used for estimating LBM:</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
                <li><strong>For Men:</strong> LBM = (0.407 × Weight in kg) + (0.267 × Height in cm) - 19.2</li>
                <li><strong>For Women:</strong> LBM = (0.252 × Weight in kg) + (0.473 × Height in cm) - 48.3</li>
            </ul>

            <h3 className="font-semibold text-lg text-foreground">
              Why LBM is the Key to Metabolism
            </h3>
            <p>
              Your LBM is the engine of your metabolism. Muscle tissue is
              significantly more metabolically active than fat tissue, meaning
              it burns more calories at rest. The more LBM you have, the higher
              your{' '}
              <Link href="/bmr" className="text-primary hover:underline">
                Basal Metabolic Rate (BMR)
              </Link>
              . This is why two people of the same weight can have vastly
              different calorie needs—the one with more muscle mass will have a
              higher metabolism.
            </p>
            <p>
              When you embark on a weight loss journey, the goal should always
              be to lose fat while preserving LBM. A crash diet that causes
              rapid weight loss often results in significant muscle loss, which
              in turn lowers your BMR. This makes it harder to continue losing
              weight and easier to regain it once the diet ends. By monitoring
              your LBM, you can ensure your fitness plan is working as
              intended.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Common Mistakes</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>
                <strong>Confusing LBM with Muscle Mass:</strong> LBM includes
                bones, organs, and water, not just muscle. It's your total
                fat-free mass.
              </li>
              <li>
                <strong>Obsessing Over Daily Changes:</strong> Like body
                weight, LBM estimations can fluctuate. Measure every few weeks,
                not daily.
              </li>
              <li>
                <strong>Ignoring Body Fat:</strong> LBM is one half of the
                picture. You must also consider your fat mass, which you can
                estimate with the{' '}
                <Link href="/body-fat" className="text-primary hover:underline">
                  Body Fat Percentage Calculator
                </Link>
                .
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Pro Tips & Quick Hacks</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>
                <strong>Track LBM During a Diet:</strong> If your LBM is
                decreasing, you may be losing muscle. Consider increasing your
                protein intake or adjusting your calorie deficit with the{' '}
                <Link href="/tdee" className="text-primary hover:underline">
                  TDEE Calculator
                </Link>
                .
              </li>
              <li>
                <strong>Use LBM to Set Protein Goals:</strong> Many nutritionists
                recommend setting protein intake based on LBM rather than total
                weight. A common guideline is 1.6-2.2 grams of protein per kg
                of LBM.
              </li>
              <li>
                <strong>Combine with FFMI:</strong> For advanced athletes, the
                Fat-Free Mass Index (FFMI) is a great next step. It normalizes
                your LBM to your height. Use our <Link href="/ffmi" className="text-primary hover:underline">FFMI Calculator</Link>.
              </li>
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
                <AccordionTrigger>What is Lean Body Mass (LBM)?</AccordionTrigger>
                <AccordionContent>
                  Lean Body Mass is the total weight of your body minus all the
                  weight due to your fat mass. It includes the weight of your
                  organs, skin, bones, and muscles. It is a better indicator of
                  health than total body weight, which you can compare using
                  our{' '}
                  <Link href="/ideal-weight" className="text-primary hover:underline">
                    Ideal Weight Calculator
                  </Link>
                  .
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Why is LBM important?</AccordionTrigger>
                <AccordionContent>
                  LBM is the most metabolically active tissue in your body. A
                  higher LBM means a higher resting metabolism. Tracking LBM
                  helps you ensure you are losing fat, not muscle, during
                  weight loss. It is a more precise metric than{' '}
                  <Link href="/bmi" className="text-primary hover:underline">BMI</Link> for
                  assessing fitness progress.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  How can I increase my Lean Body Mass?
                </AccordionTrigger>
                <AccordionContent>
                  The best way to increase LBM is through resistance training
                  (lifting weights) combined with adequate protein intake. This
                  stimulates muscle protein synthesis, leading to muscle
                  growth. You can estimate your protein needs with our Protein
                  Intake Calculator.
                </AccordionContent>
              </AccordionItem>
               <AccordionItem value="item-4">
                <AccordionTrigger>Is this calculator accurate?</AccordionTrigger>
                <AccordionContent>
                  This calculator uses the Boer formula, which is a widely accepted estimation. However, it is still an estimate. For the most accurate measurement, you would need a clinical assessment like a DEXA scan. For another useful estimate, use our <Link href="/body-fat" className="text-primary hover:underline">Body Fat Percentage Calculator</Link>.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>How does LBM relate to my BMR?</AccordionTrigger>
                <AccordionContent>
                  Your Lean Body Mass is the primary driver of your Basal Metabolic Rate (BMR). The more LBM you have, the more calories your body burns at rest. You can calculate your <Link href="/bmr" className="text-primary hover:underline">BMR</Link> to see this in action.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger>Can I lose weight without losing LBM?</AccordionTrigger>
                <AccordionContent>
                  Yes, this is the goal of a well-structured fat loss plan. It involves a moderate calorie deficit, sufficient protein, and resistance training. Use our <Link href="/tdee" className="text-primary hover:underline">TDEE Calculator</Link> to set an appropriate target.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7">
                <AccordionTrigger>What is a good LBM to have?</AccordionTrigger>
                <AccordionContent>
                  There is no single "good" LBM, as it depends on your height, gender, and genetics. Instead of focusing on a specific number, aim to maintain or increase your LBM over time. A related metric to track is the Fat-Free Mass Index (FFMI), which you can find on our <Link href="/ffmi" className="text-primary hover:underline">FFMI Calculator</Link> page.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-8">
                <AccordionTrigger>Do women have less LBM than men?</AccordionTrigger>
                <AccordionContent>
                  On average, yes. Men naturally have a higher percentage of muscle mass due to hormonal differences, primarily testosterone. This is why ideal weight ranges, which you can check with our <Link href="/ideal-weight" className="text-primary hover:underline">Ideal Weight Calculator</Link>, are different for men and women.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-9">
                <AccordionTrigger>How often should I calculate my LBM?</AccordionTrigger>
                <AccordionContent>
                  Since LBM changes slowly, calculating it once every 4-6 weeks is sufficient to track progress. Daily weight fluctuations are mostly water and will not give an accurate picture of your LBM changes. For a more complete picture, pair this with our <Link href="/body-fat" className="text-primary hover:underline">Body Fat Percentage Calculator</Link>.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-10">
                <AccordionTrigger>Can I have a high LBM but still be overweight?</AccordionTrigger>
                <AccordionContent>
                  Yes, this is common in athletes and bodybuilders. Their <Link href="/bmi" className="text-primary hover:underline">BMI</Link> might classify them as "overweight," but their high LBM and low body fat percentage mean they are very healthy. This is a key limitation of BMI.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Related Calculators</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/body-fat"
              className="p-4 border rounded-lg hover:bg-muted"
            >
              <h3 className="font-semibold">Body Fat Percentage Calculator</h3>
              <p className="text-sm text-muted-foreground">
                Estimate your body fat to see the other side of your body
                composition.
              </p>
            </Link>
            <Link href="/bmr" className="p-4 border rounded-lg hover:bg-muted">
              <h3 className="font-semibold">BMR Calculator</h3>
              <p className="text-sm text-muted-foreground">
                See how your LBM contributes to your resting metabolism.
              </p>
            </Link>
            <Link href="/bmi" className="p-4 border rounded-lg hover:bg-muted">
              <h3 className="font-semibold">BMI Calculator</h3>
              <p className="text-sm text-muted-foreground">
                Compare your LBM results to the more general BMI metric.
              </p>
            </Link>
            <Link
              href="/tdee"
              className="p-4 border rounded-lg hover:bg-muted"
            >
              <h3 className="font-semibold">TDEE Calculator</h3>
              <p className="text-sm text-muted-foreground">
                Determine your daily calorie targets based on your metabolism
                and activity level.
              </p>
            </Link>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
