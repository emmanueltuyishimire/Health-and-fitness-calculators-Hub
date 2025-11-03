
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
          text: 'Body density is your total body mass divided by your total body volume. It is a key metric in assessing body composition, as fat mass and fat-free mass (muscle, bone, etc.) have different densities. A lower body density generally indicates a higher percentage of body fat. For a more direct measure of muscularity, see the <a href="/ffmi">FFMI Calculator</a>.',
        },
      },
      {
        '@type': 'Question',
        name: 'How is body density used to calculate body fat?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The most common formulas, like the Siri equation, work by converting body density into body fat percentage. This calculator does the reverse: it estimates your body density based on a known body fat percentage from our <a href="/body-fat">Body Fat Calculator</a>. This is useful for understanding the underlying principles of body composition assessment.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why do I need my body fat percentage first?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Directly measuring body density is complex, requiring methods like underwater weighing. This calculator uses the relationship defined by the Siri equation to estimate body density from a more accessible metric, your body fat percentage, which you can get from our <a href="/body-fat">Body Fat Calculator</a>.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is a typical body density value?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The density of fat is about 0.9 g/cm³, while the density of fat-free mass is about 1.1 g/cm³. Your overall body density will fall between these two values. A person with lower body fat will have a body density closer to 1.1 g/cm³. To see how this relates to total mass, check the <a href="/ideal-weight">Ideal Weight Calculator</a>.',
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
                  <Link href="/body-fat" className="text-primary hover:underline">
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
                <strong>Fat-Free Mass Density:</strong> Approximately 1.1 g/cm³
              </li>
            </ul>
            <p>
              Because fat is less dense than muscle and bone, a person with a higher body fat percentage will have a lower overall body density, and vice-versa. This principle is the basis for gold-standard measurement techniques like underwater weighing.
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
              <Link href="/body-fat" className="text-primary hover:underline">
                Body Fat Calculator
              </Link>
              , this tool solves for the "Body Density" variable, helping you understand the direct relationship between these two key body composition metrics.
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
                <AccordionTrigger>What is body density?</AccordionTrigger>
                <AccordionContent>
                  Body density is your total body mass divided by your total body volume. It is a key metric in assessing body composition, as fat mass and fat-free mass (muscle, bone, etc.) have different densities. A lower body density generally indicates a higher percentage of body fat. For a more direct measure of muscularity, see the{' '}
                  <Link href="/ffmi" className="text-primary hover:underline">
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
                  <Link href="/body-fat" className="text-primary hover:underline">
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
                  <Link href="/body-fat" className="text-primary hover:underline">
                    Body Fat Calculator
                  </Link>.
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
                The first step. Get the body fat estimate needed for this calculator.
              </p>
            </Link>
            <Link href="/ffmi" className="p-4 border rounded-lg hover:bg-muted">
              <h3 className="font-semibold">FFMI Calculator</h3>
              <p className="text-sm text-muted-foreground">
                Analyze your muscularity, which is a component of your fat-free mass.
              </p>
            </Link>
            <Link
              href="/lean-body-mass"
              className="p-4 border rounded-lg hover:bg-muted"
            >
              <h3 className="font-semibold">Lean Body Mass Calculator</h3>
              <p className="text-sm text-muted-foreground">
                Estimate the total weight of your body minus fat.
              </p>
            </Link>
             <Link
              href="/bmi"
              className="p-4 border rounded-lg hover:bg-muted"
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
