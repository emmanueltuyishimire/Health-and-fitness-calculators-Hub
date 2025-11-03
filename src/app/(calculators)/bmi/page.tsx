
import { BmiCalculatorForm } from '@/components/bmi-calculator-form';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
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
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Scale } from 'lucide-react';

export const metadata: Metadata = {
  title: 'BMI Calculator – Estimate Body Mass Index Instantly',
  description:
    'Calculate your Body Mass Index (BMI) with our free, accurate calculator. Understand your BMI score and what it means for your health and fitness goals.',
  openGraph: {
    title: 'BMI Calculator – Estimate Body Mass Index Instantly',
    description:
      'Calculate your Body Mass Index (BMI) with our free, accurate calculator. Understand your BMI score and what it means for your health and fitness goals.',
    type: 'website',
  },
};

const BmiPage = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'BMI Calculator',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
    },
    description:
      'A free web-based calculator to determine Body Mass Index (BMI) based on height and weight.',
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Is BMI an accurate measure of health?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'BMI is a useful screening tool for potential weight-related health issues, but it has limitations. It doesn’t differentiate between fat and muscle mass, which means very muscular individuals can have a high BMI without being overfat. For a more complete picture, combine it with our <a href="/body-fat">Body Fat Percentage Calculator</a>.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why is BMI different for men and women?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The standard BMI calculation is the same for all adults, regardless of gender. However, healthy body fat percentages differ between men and women, so interpreting BMI alongside a <a href="/body-fat">Body Fat Percentage Calculator</a> is recommended.',
        },
      },
      {
        '@type': 'Question',
        name: 'What does my BMI score mean?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'According to the WHO, a BMI under 18.5 is underweight, 18.5-24.9 is normal, 25-29.9 is overweight, and 30 or above is obese. These are general categories; for personalized goals, check the <a href="/ideal-weight">Ideal Weight Calculator</a>.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I lower my BMI?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'To lower BMI, you typically need to lose weight, which is achieved by consuming fewer calories than you burn. Use our <a href="/calorie-needs">Daily Calorie Needs Calculator</a> and <a href="/bmr">BMR Calculator</a> to create a sustainable calorie deficit plan.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does a high BMI mean I am unhealthy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Not necessarily. A high BMI can be due to high muscle mass. It is a risk indicator, not a diagnosis. Use the <a href="/body-fat">Body Fat Percentage Calculator</a> to get a better assessment of your body composition.',
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
              <BreadcrumbPage>BMI Calculator</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <Card>
          <CardHeader>
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 text-primary p-3 rounded-lg">
                <Scale className="h-8 w-8" />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold">
                  BMI Calculator
                </h1>
                <p className="text-muted-foreground">
                  Calculate your Body Mass Index (BMI) based on your height and
                  weight.
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <BmiCalculatorForm />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Understanding Your BMI</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              Body Mass Index (BMI) is a widely used measure for assessing
              whether your weight is healthy in proportion to your height. It's
              a simple screening tool that can help identify potential weight
              problems for adults. It is not a diagnostic tool but can be a
              helpful starting point for a conversation with a healthcare
              provider.
            </p>
            <p>
              While BMI is a useful indicator for the general population, it
              has limitations. It does not distinguish between fat and muscle
              mass. Therefore, very muscular individuals, like athletes, might
              have a high BMI but low body fat. For a more comprehensive
              analysis, it’s best to use this tool in conjunction with others
              like the{' '}
              <Link href="/body-fat" className="text-primary hover:underline">
                Body Fat Percentage Calculator
              </Link>{' '}
              and the{' '}
              <Link
                href="/waist-to-hip-ratio"
                className="text-primary hover:underline"
              >
                Waist-to-Hip Ratio Calculator
              </Link>
              .
            </p>
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
                  <TableHead>Example 1 (Metric)</TableHead>
                  <TableHead>Example 2 (Imperial)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Height</TableCell>
                  <TableCell>175 cm</TableCell>
                  <TableCell>5 ft 10 in (70")</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Weight</TableCell>
                  <TableCell>75 kg</TableCell>
                  <TableCell>165 lbs</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-bold">Calculated BMI</TableCell>
                  <TableCell className="font-bold">24.5</TableCell>
                  <TableCell className="font-bold">23.7</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Category</TableCell>
                  <TableCell>Normal Weight</TableCell>
                  <TableCell>Normal Weight</TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <p className="text-sm text-muted-foreground mt-4">
              Both individuals fall within the "Normal Weight" range. To
              understand the energy this body requires, check the{' '}
              <Link href="/bmr" className="text-primary hover:underline">
                BMR Calculator
              </Link>
              .
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
                <AccordionTrigger>
                  Is BMI an accurate measure of health?
                </AccordionTrigger>
                <AccordionContent>
                  BMI is a useful screening tool for potential weight-related
                  health issues, but it has limitations. It doesn’t
                  differentiate between fat and muscle mass, which means very
                  muscular individuals can have a high BMI without being
                  overfat. For a more complete picture, combine it with our{' '}
                  <Link
                    href="/body-fat"
                    className="text-primary hover:underline"
                  >
                    Body Fat Percentage Calculator
                  </Link>
                  .
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  Why is BMI different for men and women?
                </AccordionTrigger>
                <AccordionContent>
                  The standard BMI calculation is the same for all adults,
                  regardless of gender. However, healthy body fat percentages
                  differ between men and women, so interpreting BMI alongside a{' '}
                  <Link
                    href="/body-fat"
                    className="text-primary hover:underline"
                  >
                    Body Fat Percentage Calculator
                  </Link>{' '}
                  is recommended.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>What does my BMI score mean?</AccordionTrigger>
                <AccordionContent>
                  According to the WHO, a BMI under 18.5 is underweight,
                  18.5-24.9 is normal, 25-29.9 is overweight, and 30 or above
                  is obese. These are general categories; for personalized
                  goals, check the{' '}
                  <Link
                    href="/ideal-weight"
                    className="text-primary hover:underline"
                  >
                    Ideal Weight Calculator
                  </Link>
                  .
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>How do I lower my BMI?</AccordionTrigger>
                <AccordionContent>
                  To lower BMI, you typically need to lose weight, which is
                  achieved by consuming fewer calories than you burn. Use our{' '}
                  <Link
                    href="/calorie-needs"
                    className="text-primary hover:underline"
                  >
                    Daily Calorie Needs Calculator
                  </Link>{' '}
                  and{' '}
                  <Link href="/bmr" className="text-primary hover:underline">
                    BMR Calculator
                  </Link>{' '}
                  to create a sustainable calorie deficit plan.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>
                  Does a high BMI mean I am unhealthy?
                </AccordionTrigger>
                <AccordionContent>
                  Not necessarily. A high BMI can be due to high muscle mass.
                  It is a risk indicator, not a diagnosis. Use the{' '}
                  <Link
                    href="/body-fat"
                    className="text-primary hover:underline"
                  >
                    Body Fat Percentage Calculator
                  </Link>{' '}
                  to get a better assessment of your body composition.
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
                Estimate your body fat percentage for a better look at your
                body composition.
              </p>
            </Link>
            <Link
              href="/ideal-weight"
              className="p-4 border rounded-lg hover:bg-muted"
            >
              <h3 className="font-semibold">Ideal Weight Calculator</h3>
              <p className="text-sm text-muted-foreground">
                Find your healthy weight range based on your height and gender.
              </p>
            </Link>
            <Link
              href="/bmr"
              className="p-4 border rounded-lg hover:bg-muted"
            >
              <h3 className="font-semibold">BMR Calculator</h3>
              <p className="text-sm text-muted-foreground">
                Calculate the calories your body needs at rest.
              </p>
            </Link>
            <Link
              href="/calorie-needs"
              className="p-4 border rounded-lg hover:bg-muted"
            >
              <h3 className="font-semibold">Daily Calorie Needs Calculator</h3>
              <p className="text-sm text-muted-foreground">
                Determine your daily calorie needs based on your activity
                level.
              </p>
            </Link>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default BmiPage;
