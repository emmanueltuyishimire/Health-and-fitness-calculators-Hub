
import type { Metadata } from 'next';
import Link from 'next/link';
import { Database } from 'lucide-react';
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
import { BodyDensityCalculatorForm } from '@/components/body-density-calculator-form';

export const metadata: Metadata = {
  title: 'Body Density Calculator',
  description:
    'Calculate your body density from your body fat percentage. Understand how this core metric is used to determine body composition and why it is fundamental to hydrodensitometry (underwater weighing).',
  openGraph: {
    title: 'Body Density Calculator',
    description:
      'Calculate your body density from your body fat percentage. Understand how this core metric is used to determine body composition.',
    type: 'website',
  },
};

export default function BodyDensityPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Body Density Calculator',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
    },
    description:
      'A free web-based calculator to estimate body density from body fat percentage using the Siri equation.',
  };

  const howToJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Calculate Your Body Density',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Get Body Fat %',
        text: 'First, determine your body fat percentage. You can use our Body Fat Calculator for a good estimate.',
      },
      {
        '@type': 'HowToStep',
        name: 'Enter Body Fat %',
        text: 'Input your body fat percentage into the calculator.',
      },
      {
        '@type': 'HowToStep',
        name: 'Calculate',
        text: 'Click the "Calculate Body Density" button to see your result in g/cm³.',
      },
    ],
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is body density?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Body density is your total body mass divided by your total body volume. It is a key metric in assessing body composition, as fat mass and fat-free mass (muscle, bone, etc.) have different densities. A lower body density generally indicates a higher percentage of body fat. For a more direct measure of muscularity, see the <a href="/ffmi" aria-label="FFMI Calculator">FFMI Calculator</a>.',
        },
      },
      {
        '@type': 'Question',
        name: 'How is body density used to calculate body fat?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The most common formulas, like the Siri equation, work by converting body density into body fat percentage. This calculator does the reverse: it estimates your body density based on a known body fat percentage from our <a href="/body-fat" aria-label="Body Fat Calculator">Body Fat Calculator</a>. This is useful for understanding the underlying principles of body composition assessment.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why do I need my body fat percentage first?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Directly measuring body density is complex, requiring methods like underwater weighing. This calculator uses the relationship defined by the Siri equation to estimate body density from a more accessible metric, your body fat percentage, which you can get from our <a href="/body-fat" aria-label="Body Fat Calculator">Body Fat Calculator</a>.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is a typical body density value?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The density of fat is about 0.9 g/cm³, while the density of fat-free mass is about 1.1 g/cm³. Your overall body density will fall between these two values. A person with lower body fat will have a body density closer to 1.1 g/cm³. To see how this relates to total mass, check the <a href="/ideal-weight" aria-label="Ideal Weight Calculator">Ideal Weight Calculator</a>.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does this relate to underwater weighing?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Underwater weighing (hydrodensitometry) is a lab method to determine body density directly by applying Archimedes\' principle. Once body density is found, it is plugged into the Siri or Brozek equation to find body fat percentage. This calculator helps you understand the density value that corresponds to your estimated body fat.',
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
              <BreadcrumbPage>Body Density Calculator</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <Card>
          <CardHeader>
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 text-primary p-3 rounded-lg">
                <Database className="h-8 w-8" />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold">
                  Body Density Calculator
                </h1>
                <p className="text-muted-foreground">
                  Estimate your body density based on your body fat percentage.
                  This calculator helps illustrate the inverse relationship between body fat and body density, a core principle in body composition analysis. First, use the{' '}
                  <Link href="/body-fat" className="text-primary hover:underline" aria-label="Body Fat Percentage Calculator">
                    Body Fat Calculator
                  </Link>.
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <BodyDensityCalculatorForm />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>How to Use the Body Density Calculator</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              This tool estimates your body density using a value derived from another key metric: your body fat percentage.
            </p>
            <ol className="list-decimal list-inside space-y-2">
              <li><strong>Find Your Body Fat Percentage:</strong> Before you begin, you need your body fat percentage. Use our{' '}
                  <Link href="/body-fat" className="text-primary hover:underline" aria-label="Body Fat Percentage Calculator">
                    Body Fat Percentage Calculator
                  </Link>{' '}
                  for a reliable estimate.</li>
              <li><strong>Enter Your Body Fat Percentage:</strong> Input the value into the field provided.</li>
              <li><strong>Calculate:</strong> Click the "Calculate Body Density" button to see your result.</li>
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
                  <TableHead>Example 1 (Athlete)</TableHead>
                  <TableHead>Example 2 (Average Person)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Body Fat %</TableCell>
                  <TableCell>12%</TableCell>
                  <TableCell>25%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-bold">Calculated Body Density</TableCell>
                  <TableCell className="font-bold">1.071 g/cm³</TableCell>
                  <TableCell className="font-bold">1.037 g/cm³</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Interpretation & Next Step</TableCell>
                  <TableCell>The higher density reflects a leaner body composition. This individual can track their muscularity with the <Link href="/ffmi" className="text-primary hover:underline" aria-label="FFMI Calculator">FFMI Calculator</Link>.</TableCell>
                  <TableCell>The lower density indicates a higher proportion of fat mass. The next step would be to focus on a fat loss plan, using the <Link href="/daily-calorie-needs" className="text-primary hover:underline" aria-label="Daily Calorie Needs Calculator">Daily Calorie Needs</Link> calculator.</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Understanding Body Density</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <h3 className="font-semibold text-lg text-foreground">
              What Is Body Density?
            </h3>
            <p>
              Body density is the relationship between a person's body mass and body volume (Density = Mass / Volume). It is a fundamental concept in body composition assessment because the primary components of the body—fat mass and fat-free mass—have different, known densities.
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <strong>Fat Mass Density:</strong> Approximately 0.9 g/cm³
              </li>
              <li>
                <strong>Fat-Free Mass Density:</strong> Approximately 1.1 g/cm³ (this includes muscle, bone, organs, and water)
              </li>
            </ul>
            <p>
              Because fat is less dense than muscle and bone, a person with a higher body fat percentage will have a lower overall body density, and vice-versa. This principle is the basis for gold-standard measurement techniques like hydrostatic (underwater) weighing.
            </p>

            <h3 className="font-semibold text-lg text-foreground">
              The Siri Equation
            </h3>
            <p>
              This calculator works by reverse-engineering a common formula used to convert body density into body fat percentage, the Siri equation:
            </p>
            <p className="font-mono text-center p-4 bg-muted rounded-md">
              Body Fat % = (495 / Body Density) - 450
            </p>
            <p>
              By providing your estimated body fat percentage from our{' '}
              <Link href="/body-fat" className="text-primary hover:underline" aria-label="Body Fat Percentage Calculator">
                Body Fat Calculator
              </Link>
              , this tool solves for the "Body Density" variable, helping you understand the direct relationship between these two key body composition metrics. While not a metric to track for fitness goals, it provides a fascinating look "under the hood" of how body composition is calculated.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Common Mistakes</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>Inaccurate Body Fat Input:</strong> The accuracy of this calculator is entirely dependent on the accuracy of the body fat percentage you provide. Use our <Link href="/body-fat" className="text-primary hover:underline" aria-label="Body Fat Percentage Calculator">Body Fat Calculator</Link> for a good estimate.</li>
              <li><strong>Treating It as a Goal:</strong> Body density is an abstract clinical measure, not a fitness goal. Focus on actionable metrics like improving your <Link href="/body-fat" className="text-primary hover:underline" aria-label="Body Fat Percentage Calculator">Body Fat Percentage</Link> or <Link href="/ffmi" className="text-primary hover:underline" aria-label="FFMI Calculator">FFMI</Link>.</li>
              <li><strong>Ignoring the Context:</strong> Body density is part of a two-compartment model (fat and fat-free mass). It doesn't differentiate between muscle and bone within the fat-free mass component.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Pro Tips & Quick Hacks</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>Educational Tool:</strong> Use this calculator to understand why your body fat percentage is what it is. As you lose fat and gain muscle, your body literally becomes denser.</li>
              <li><strong>Connect to BMR:</strong> Denser bodies (more muscle) are more metabolically active. A higher body density usually correlates with a higher <Link href="/bmr" className="text-primary hover:underline" aria-label="BMR Calculator">Basal Metabolic Rate</Link>.</li>
              <li><strong>Understand Lab Methods:</strong> If you ever get a lab assessment like a DEXA scan or underwater weighing, this calculator helps you understand the underlying density data they use to generate your results.</li>
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
                <AccordionTrigger>What is body density?</AccordionTrigger>
                <AccordionContent>
                  Body density is your total body mass divided by your total body volume. It is a key metric in assessing body composition, as fat mass and fat-free mass (muscle, bone, etc.) have different densities. A lower body density generally indicates a higher percentage of body fat. For a more direct measure of muscularity, see the{' '}
                  <Link href="/ffmi" className="text-primary hover:underline" aria-label="FFMI Calculator">
                    FFMI Calculator
                  </Link>.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  How is body density used to calculate body fat?
                </AccordionTrigger>
                <AccordionContent>
                  The most common formulas, like the Siri equation, work by converting body density into body fat percentage. This calculator does the reverse: it estimates your body density based on a known body fat percentage from our{' '}
                  <Link href="/body-fat" className="text-primary hover:underline" aria-label="Body Fat Percentage Calculator">
                    Body Fat Calculator
                  </Link>. This is useful for understanding the underlying principles of body composition assessment.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  Why do I need my body fat percentage first?
                </AccordionTrigger>
                <AccordionContent>
                  Directly measuring body density is complex, requiring methods like underwater weighing. This calculator uses the relationship defined by the Siri equation to estimate body density from a more accessible metric, your body fat percentage, which you can get from our{' '}
                  <Link href="/body-fat" className="text-primary hover:underline" aria-label="Body Fat Percentage Calculator">
                    Body Fat Calculator
                  </Link>.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>What is a typical body density value?</AccordionTrigger>
                <AccordionContent>
                  The density of fat is about 0.9 g/cm³, while the density of fat-free mass is about 1.1 g/cm³. Your overall body density will fall between these two values. A person with lower body fat will have a body density closer to 1.1 g/cm³. To see how this relates to total mass, check the{' '}
                  <Link href="/ideal-weight" className="text-primary hover:underline" aria-label="Ideal Weight Calculator">
                    Ideal Weight Calculator
                  </Link>.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>How does this relate to underwater weighing?</AccordionTrigger>
                <AccordionContent>
                  Underwater weighing (hydrodensitometry) is a lab method to determine body density directly by applying Archimedes' principle. Once body density is found, it is plugged into the Siri or Brozek equation to find body fat percentage. This calculator helps you understand the density value that corresponds to your estimated body fat.
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
                  <TableCell>Students & Health Enthusiasts</TableCell>
                  <TableCell>Understand the scientific principles behind body fat calculations.</TableCell>
                  <TableCell><Link href="/body-fat" className="text-primary hover:underline" aria-label="Body Fat Percentage Calculator">Body Fat % Calculator</Link></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Fitness Professionals</TableCell>
                  <TableCell>Explain to clients how body composition affects overall density.</TableCell>
                  <TableCell><Link href="/lean-body-mass" className="text-primary hover:underline" aria-label="Lean Body Mass Calculator">Lean Body Mass Calculator</Link></TableCell>
                </TableRow>
                 <TableRow>
                  <TableCell>Researchers</TableCell>
                  <TableCell>Convert body fat percentages from studies back to density for re-analysis.</TableCell>
                  <TableCell>N/A (Academic Use)</TableCell>
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
            <Link
              href="/body-fat"
              className="p-4 border rounded-lg hover:bg-muted"
              aria-label="Body Fat Percentage Calculator"
            >
              <h3 className="font-semibold">Body Fat Percentage Calculator</h3>
              <p className="text-sm text-muted-foreground">
                The first step. Get the body fat estimate needed for this calculator.
              </p>
            </Link>
            <Link href="/ffmi" className="p-4 border rounded-lg hover:bg-muted" aria-label="FFMI Calculator">
              <h3 className="font-semibold">FFMI Calculator</h3>
              <p className="text-sm text-muted-foreground">
                Analyze your muscularity, which is a component of your fat-free mass.
              </p>
            </Link>
            <Link
              href="/lean-body-mass"
              className="p-4 border rounded-lg hover:bg-muted"
              aria-label="Lean Body Mass Calculator"
            >
              <h3 className="font-semibold">Lean Body Mass Calculator</h3>
              <p className="text-sm text-muted-foreground">
                Estimate the total weight of your body minus fat.
              </p>
            </Link>
             <Link
              href="/bmi"
              className="p-4 border rounded-lg hover:bg-muted"
              aria-label="BMI Calculator"
            >
              <h3 className="font-semibold">BMI Calculator</h3>
              <p className="text-sm text-muted-foreground">
                Compare your body density insights with the more general BMI metric.
              </p>
            </Link>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
