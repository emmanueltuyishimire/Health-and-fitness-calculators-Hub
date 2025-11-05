
import type { Metadata } from 'next';
import Link from 'next/link';
import { HeartPulse } from 'lucide-react';
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
import { HeartDiseaseRiskCalculatorForm } from '@/components/heart-disease-risk-calculator-form';

export const metadata: Metadata = {
  title: 'Heart Disease Risk Calculator (BMI-Based)',
  description:
    'Assess your risk for heart disease based on your Body Mass Index (BMI). Understand how your weight status impacts cardiovascular health and learn about actionable steps for risk reduction.',
  openGraph: {
    title: 'Heart Disease Risk Calculator (BMI-Based)',
    description:
      'Assess your risk for heart disease based on your Body Mass Index (BMI). Understand how your weight status impacts cardiovascular health and learn about actionable steps for risk reduction.',
    type: 'website',
  },
};

export default function HeartDiseaseRiskPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Heart Disease Risk Calculator (BMI-Based)',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
    },
    description:
      'A free web-based tool to assess heart disease risk based on Body Mass Index (BMI).',
  };

  const howToJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Assess Your Heart Disease Risk via BMI',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Calculate Your BMI',
        text: 'First, determine your Body Mass Index using your height and weight. Our BMI Calculator can do this for you.',
        url: '/bmi'
      },
      {
        '@type': 'HowToStep',
        name: 'Enter Your BMI',
        text: 'Input your BMI value into this calculator.',
      },
      {
        '@type': 'HowToStep',
        name: 'View Your Risk Category',
        text: 'The calculator will classify your heart disease risk level based on your BMI category.',
      },
    ],
  };
  
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'Why is BMI linked to heart disease risk?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'A high BMI is often an indicator of excess body fat, which is a major risk factor for heart disease. It can lead to high blood pressure, high cholesterol, and insulin resistance. Use the <a href="/obesity-risk">Obesity Risk Calculator</a> for a direct assessment of this.',
            }
        },
        {
            '@type': 'Question',
            name: 'Is this calculator a diagnosis?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'No. This is a screening tool, not a medical diagnosis. It provides an estimation of risk based on one factor (BMI). Always consult a healthcare professional for a comprehensive assessment.',
            }
        },
        {
            '@type': 'Question',
            name: 'Can I be "overweight" but still have a low risk?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes, especially for athletes. BMI doesn\'t distinguish between muscle and fat. If you have a high BMI but low body fat, your risk is likely much lower. Use the <a href="/ffmi">FFMI Calculator</a> to assess muscularity.',
            }
        },
        {
            '@type': 'Question',
            name: 'How can I lower my heart disease risk?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Lowering risk involves lifestyle changes: achieving a healthy weight through a <a href="/calorie-deficit">calorie deficit</a>, regular cardiovascular exercise, a balanced diet, and not smoking. Our <a href="/tdee">TDEE Calculator</a> can help you find the right calorie target.',
            }
        },
        {
            '@type': 'Question',
            name: 'What other metrics are important for heart health?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Beyond BMI, your <a href="/waist-to-height-ratio">Waist-to-Height Ratio</a> and <a href="/waist-to-hip-ratio">Waist-to-Hip Ratio</a> are crucial, as they measure abdominal fat, a key risk factor. Blood pressure and cholesterol levels are also vital.',
            }
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
              <BreadcrumbPage>Heart Disease Risk Calculator</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <Card>
          <CardHeader>
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 text-primary p-3 rounded-lg">
                <HeartPulse className="h-8 w-8" />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold">
                  Heart Disease Risk Calculator (BMI-Based)
                </h1>
                <p className="text-muted-foreground">
                  Quickly assess your potential risk for cardiovascular disease based on your Body Mass Index (BMI). Understand how weight status correlates with heart health and what steps you can take. For the most accurate starting point, use our <Link href="/bmi" className="text-primary hover:underline">BMI Calculator</Link> first.
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <HeartDiseaseRiskCalculatorForm />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>How to Use the Risk Calculator</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>This tool provides a risk classification based on the widely-used BMI metric.</p>
            <ol className="list-decimal list-inside space-y-2">
              <li><strong>Calculate Your BMI:</strong> If you don't know your BMI, calculate it first with our <Link href="/bmi" className="text-primary hover:underline">BMI Calculator</Link>.</li>
              <li><strong>Enter Your BMI:</strong> Input your BMI score into the form.</li>
              <li><strong>View Your Risk Category:</strong> The tool will display your estimated risk level based on standard classifications.</li>
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
                <TableRow><TableCell>BMI</TableCell><TableCell>32.5</TableCell></TableRow>
                <TableRow><TableCell className="font-bold">Risk Category</TableCell><TableCell className="font-bold">Increased Risk (Obese Class I)</TableCell></TableRow>
                <TableRow>
                  <TableCell>Interpretation & Next Step</TableCell>
                  <TableCell>A BMI of 32.5 falls into the "Obese Class I" category, which is associated with an increased risk of heart disease. A good next step is to use the <Link href="/calorie-deficit" className="text-primary hover:underline">Calorie Deficit Calculator</Link> to plan a sustainable fat loss strategy.</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Understanding BMI and Heart Health</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <h3 className="font-semibold text-lg text-foreground">The Link Between Weight and Heart Disease</h3>
            <p>Body Mass Index (BMI) is a simple measure of weight relative to height. While it has limitations, it is a widely used screening tool for identifying potential weight problems. A high BMI is often associated with higher levels of body fat, which can negatively impact heart health by contributing to:</p>
            <ul className="list-disc list-inside space-y-2">
                <li><strong>High Blood Pressure (Hypertension):</strong> Excess weight requires the heart to work harder to pump blood throughout the body.</li>
                <li><strong>High Cholesterol:</strong> Obesity is linked to higher levels of "bad" LDL cholesterol and lower levels of "good" HDL cholesterol.</li>
                <li><strong>Insulin Resistance and Type 2 Diabetes:</strong> Excess fat, particularly around the abdomen, can lead to insulin resistance, a precursor to diabetes, which is a major risk factor for heart disease.</li>
            </ul>
            <p>This calculator uses standard BMI classifications to provide a general idea of risk. For a more complete picture, it's vital to use this tool alongside others like the <Link href="/waist-to-height-ratio" className="text-primary hover:underline">Waist-to-Height Ratio Calculator</Link>, as abdominal fat is a particularly strong predictor of risk.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Frequently Asked Questions (FAQ)</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Why is BMI linked to heart disease risk?</AccordionTrigger>
                <AccordionContent>A high BMI often indicates excess body fat, a major risk factor for heart disease. It can lead to high blood pressure, high cholesterol, and insulin resistance. The <a href="/obesity-risk">Obesity Risk Calculator</a> offers a direct assessment.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Is this calculator a diagnosis?</AccordionTrigger>
                <AccordionContent>No. This is a screening tool, not a medical diagnosis. Always consult a healthcare professional for a comprehensive assessment.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Can I be "overweight" but still have a low risk?</AccordionTrigger>
                <AccordionContent>Yes, especially for athletes with high muscle mass. If you have a high BMI but low body fat, your risk is likely much lower. Use the <a href="/ffmi">FFMI Calculator</a> to assess muscularity.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>How can I lower my heart disease risk?</AccordionTrigger>
                <AccordionContent>Lifestyle changes are key: achieve a healthy weight through a <a href="/calorie-deficit">calorie deficit</a>, get regular cardiovascular exercise, and eat a balanced diet. Our <a href="/tdee">TDEE Calculator</a> can help you find the right calorie target.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>What other metrics are important for heart health?</AccordionTrigger>
                <AccordionContent>Your <a href="/waist-to-height-ratio">Waist-to-Height Ratio</a> and <a href="/waist-to-hip-ratio">Waist-to-Hip Ratio</a> are crucial, as they measure abdominal fat, a key risk factor. Blood pressure and cholesterol levels are also vital.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Related Calculators</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/bmi" className="p-4 border rounded-lg hover:bg-muted"><h3 className="font-semibold">BMI Calculator</h3><p className="text-sm text-muted-foreground">The foundational tool for this risk assessment.</p></Link>
            <Link href="/obesity-risk" className="p-4 border rounded-lg hover:bg-muted"><h3 className="font-semibold">Obesity Risk Calculator</h3><p className="text-sm text-muted-foreground">Get a direct assessment of your obesity classification based on BMI.</p></Link>
            <Link href="/tdee" className="p-4 border rounded-lg hover:bg-muted"><h3 className="font-semibold">TDEE Calculator</h3><p className="text-sm text-muted-foreground">Determine the daily calorie intake needed to start reducing your risk.</p></Link>
            <Link href="/waist-to-height-ratio" className="p-4 border rounded-lg hover:bg-muted"><h3 className="font-semibold">Waist-to-Height Ratio</h3><p className="text-sm text-muted-foreground">Use a superior metric to assess central obesity risk.</p></Link>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
