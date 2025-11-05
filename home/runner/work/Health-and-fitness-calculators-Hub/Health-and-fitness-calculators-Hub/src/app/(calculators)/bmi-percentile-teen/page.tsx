
import type { Metadata } from 'next';
import Link from 'next/link';
import { PersonStanding } from 'lucide-react';
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
import { BmiPercentileTeenCalculatorForm } from '@/components/bmi-percentile-teen-calculator-form';

export const metadata: Metadata = {
  title: 'BMI Percentile Calculator for Teens & Children',
  description:
    'Calculate your child\'s or teen\'s BMI percentile using the CDC growth charts. Understand what the percentile means for their growth and development.',
  openGraph: {
    title: 'BMI Percentile Calculator for Teens & Children',
    description:
      'Calculate your child\'s or teen\'s BMI percentile using the CDC growth charts. Understand what the percentile means for their growth and development.',
    type: 'website',
  },
};

export default function BmiPercentileTeenPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'BMI Percentile Calculator for Teens & Children',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
    },
    description:
      'A free web-based calculator to determine BMI-for-age percentile for children and teens aged 2-20 based on CDC growth charts.',
  };

  const howToJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Calculate BMI Percentile for a Child or Teen',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Enter Age and Gender',
        text: 'Input the child\'s exact age in years and months, and select their gender.',
      },
      {
        '@type': 'HowToStep',
        name: 'Enter Height and Weight',
        text: 'Input their height and weight. Ensure you are using the correct units.',
      },
      {
        '@type': 'HowToStep',
        name: 'Calculate',
        text: 'The calculator will compute their BMI and then find the corresponding percentile from the CDC growth charts for their age and gender.',
      },
    ],
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Why is BMI percentile used for children instead of just BMI?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Unlike adults, children and teens are still growing. Their body composition changes significantly with age and differs between boys and girls. A BMI percentile compares a child\'s BMI to others of the same age and gender, providing a more accurate assessment of their growth. The standard <a href="/bmi" aria-label="BMI Calculator">BMI Calculator</a> is only for adults.',
        },
      },
      {
        '@type': 'Question',
        name: 'What does the BMI percentile mean?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The percentile indicates the relative position of a child\'s BMI among children of the same sex and age. For example, a child at the 75th percentile has a higher BMI than 75 out of 100 of their peers. It is not a percentage of body fat.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is a healthy BMI percentile?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A healthy weight is typically defined as being between the 5th and 85th percentiles. Below the 5th is underweight, from the 85th to the 95th is overweight, and at or above the 95th is considered obese.',
        },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div className="w-full max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 space-y-8">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/all">Calculators</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>BMI Percentile for Age (Teens)</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <Card>
          <CardHeader>
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 text-primary p-3 rounded-lg">
                <PersonStanding className="h-8 w-8" />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold">
                  BMI Percentile Calculator for Children & Teens
                </h1>
                <p className="text-muted-foreground">
                  Assess your child's or teen's (age 2-20) weight status using the BMI-for-age percentile. This calculator uses CDC growth charts to provide a more accurate picture of a growing body's health than the standard <Link href="/bmi" className="text-primary hover:underline">adult BMI calculator</Link>.
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <BmiPercentileTeenCalculatorForm />
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Understanding the BMI Percentile Chart</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Percentile Range</TableHead>
                  <TableHead>Weight Status Category</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Less than the 5th percentile</TableCell>
                  <TableCell>Underweight</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>5th percentile to less than the 85th percentile</TableCell>
                  <TableCell>Healthy weight</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>85th percentile to less than the 95th percentile</TableCell>
                  <TableCell>Overweight</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Equal to or greater than the 95th percentile</TableCell>
                  <TableCell>Obese</TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <p className="text-sm text-muted-foreground mt-4">
              These categories are based on recommendations from the Centers for Disease Control and Prevention (CDC).
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
                <AccordionTrigger>Why is BMI percentile used for children instead of just BMI?</AccordionTrigger>
                <AccordionContent>Unlike adults, children and teens are still growing. Their body composition changes significantly with age and differs between boys and girls. A BMI percentile compares a child's BMI to others of the same age and gender, providing a more accurate assessment of their growth. The standard <Link href="/bmi" className='text-primary hover:underline'>BMI Calculator</Link> is only for adults.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>What does the BMI percentile mean?</AccordionTrigger>
                <AccordionContent>The percentile indicates the relative position of a child's BMI among children of the same sex and age. For example, a child at the 75th percentile has a higher BMI than 75 out of 100 of their peers. It is not a percentage of body fat.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>What is a healthy BMI percentile?</AccordionTrigger>
                <AccordionContent>A healthy weight is typically defined as being between the 5th and 85th percentiles. Below the 5th is underweight, from the 85th to the 95th is overweight, and at or above the 95th is considered obese.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
