
import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldAlert } from 'lucide-react';
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
import { DiabetesRiskCalculatorForm } from '@/components/diabetes-risk-calculator-form';

export const metadata: Metadata = {
  title: 'Diabetes Risk Calculator (BMI-Based)',
  description:
    'Assess your risk for type 2 diabetes based on your Body Mass Index (BMI). Understand how your weight status impacts metabolic health and learn about actionable steps for risk reduction.',
  openGraph: {
    title: 'Diabetes Risk Calculator (BMI-Based)',
    description:
      'Assess your risk for type 2 diabetes based on your Body Mass Index (BMI). Understand how your weight status impacts metabolic health and learn about actionable steps for risk reduction.',
    type: 'website',
  },
};

export default function DiabetesRiskPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Diabetes Risk Calculator (BMI-Based)',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
    },
    description:
      'A free web-based tool to assess type 2 diabetes risk based on Body Mass Index (BMI).',
  };

  const howToJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Assess Your Diabetes Risk via BMI',
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
        text: 'The calculator will classify your diabetes risk level based on your BMI category.',
      },
    ],
  };
  
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'Why is BMI linked to type 2 diabetes risk?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'A high BMI, particularly when associated with high levels of abdominal fat, is a primary risk factor for developing insulin resistance, which is the precursor to type 2 diabetes. You can assess your abdominal fat with the <a href="/waist-to-height-ratio">Waist-to-Height Ratio Calculator</a>.',
            }
        },
        {
            '@type': 'Question',
            name: 'Is this calculator a diagnosis?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'No. This is a screening tool, not a medical diagnosis. It provides an estimation of risk based on one factor (BMI). Always consult a healthcare professional for blood tests (like HbA1c) and a comprehensive assessment.',
            }
        },
        {
            '@type': 'Question',
            name: 'Can I have a high BMI and not be at risk?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'It\'s less likely, but possible, especially for athletes with high muscle mass. BMI doesn\'t distinguish muscle from fat. However, even muscular individuals can have insulin resistance. It is always best to combine BMI with other metrics like the <a href="/body-fat">Body Fat Percentage Calculator</a>.',
            }
        },
        {
            '@type': 'Question',
            name: 'How can I lower my diabetes risk?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Lowering risk primarily involves lifestyle changes: achieving a healthy weight through a <a href="/calorie-deficit">calorie deficit</a>, engaging in regular physical activity, and eating a balanced diet rich in fiber and low in processed foods. Our <a href="/tdee">TDEE Calculator</a> can help you find your calorie target.',
            }
        },
        {
            '@type': 'Question',
            name: 'What other metrics are important for diabetes risk?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Beyond BMI, your <a href="/waist-to-hip-ratio">Waist-to-Hip Ratio</a> is crucial, as it measures abdominal fat. Blood glucose levels, blood pressure, and cholesterol are also vital clinical markers.',
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
              <BreadcrumbPage>Diabetes Risk Calculator</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <Card>
          <CardHeader>
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 text-primary p-3 rounded-lg">
                <ShieldAlert className="h-8 w-8" />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold">
                  Diabetes Risk Calculator (BMI-Based)
                </h1>
                <p className="text-muted-foreground">
                  Quickly assess your potential risk for type 2 diabetes based on your Body Mass Index (BMI). Understand how your weight status correlates with metabolic health and learn about actionable steps you can take. For the most accurate starting point, use our <Link href="/bmi" className="text-primary hover:underline">BMI Calculator</Link> first.
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <DiabetesRiskCalculatorForm />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>How to Use the Risk Calculator</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>This tool provides a risk classification based on the widely-used BMI metric, which is a strong indicator of metabolic health.</p>
            <ol className="list-decimal list-inside space-y-2">
              <li><strong>Calculate Your BMI:</strong> If you don't know your BMI, calculate it first with our <Link href="/bmi" className="text-primary hover:underline">BMI Calculator</Link>.</li>
              <li><strong>Enter Your BMI:</strong> Input your BMI score into the form.</li>
              <li><strong>View Your Risk Category:</strong> The tool will display your estimated risk level for type 2 diabetes based on standard classifications.</li>
            </ol>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Understanding BMI and Diabetes Risk</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <h3 className="font-semibold text-lg text-foreground">The Link Between Weight and Insulin Resistance</h3>
            <p>Body Mass Index (BMI) is a primary screening tool for assessing how weight impacts health. A high BMI is one of the strongest predictors for the development of type 2 diabetes. This is because excess body fat, particularly visceral fat around the abdomen, can lead to a condition called <strong className="text-foreground">insulin resistance</strong>.</p>
            <p>Insulin is a hormone that helps your cells use glucose (sugar) from food for energy. In insulin resistance, cells don't respond properly to insulin, causing blood sugar levels to rise. This forces the pancreas to work harder to produce more insulin, and over time, it can become exhausted, leading to prediabetes and eventually type 2 diabetes.</p>
            <p>While BMI is a valuable starting point, other metrics are also crucial. The <Link href="/waist-to-height-ratio" className="text-primary hover:underline">Waist-to-Height Ratio Calculator</Link> is an excellent tool for specifically assessing abdominal fat, which is more metabolically harmful than fat stored elsewhere.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Frequently Asked Questions (FAQ)</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Why is BMI linked to type 2 diabetes risk?</AccordionTrigger>
                <AccordionContent>A high BMI, particularly when associated with high levels of abdominal fat, is a primary risk factor for developing insulin resistance, which is the precursor to type 2 diabetes. You can assess your abdominal fat with the <Link href="/waist-to-height-ratio" className='text-primary hover:underline'>Waist-to-Height Ratio Calculator</Link>.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Is this calculator a diagnosis?</AccordionTrigger>
                <AccordionContent>No. This is a screening tool, not a medical diagnosis. It provides an estimation of risk based on one factor (BMI). Always consult a healthcare professional for blood tests (like HbA1c) and a comprehensive assessment.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Can I have a high BMI and not be at risk?</AccordionTrigger>
                <AccordionContent>It's less likely, but possible, especially for athletes with high muscle mass. BMI doesn't distinguish muscle from fat. However, even muscular individuals can have insulin resistance. It is always best to combine BMI with other metrics like the <Link href="/body-fat" className='text-primary hover:underline'>Body Fat Percentage Calculator</Link>.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>How can I lower my diabetes risk?</AccordionTrigger>
                <AccordionContent>Lowering risk primarily involves lifestyle changes: achieving a healthy weight through a <Link href="/calorie-deficit" className='text-primary hover:underline'>calorie deficit</Link>, engaging in regular physical activity, and eating a balanced diet rich in fiber and low in processed foods. Our <Link href="/tdee" className='text-primary hover:underline'>TDEE Calculator</Link> can help you find your calorie target.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>What other metrics are important for diabetes risk?</AccordionTrigger>
                <AccordionContent>Beyond BMI, your <Link href="/waist-to-hip-ratio" className='text-primary hover:underline'>Waist-to-Hip Ratio</Link> is crucial, as it measures abdominal fat. Blood glucose levels, blood pressure, and cholesterol are also vital clinical markers.</AccordionContent>
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
            <Link href="/obesity-risk" className="p-4 border rounded-lg hover:bg-muted"><h3 className="font-semibold">Obesity Risk Calculator</h3><p className="text-sm text-muted-foreground">See how your BMI classifies you in terms of general obesity risk.</p></Link>
            <Link href="/tdee" className="p-4 border rounded-lg hover:bg-muted"><h3 className="font-semibold">TDEE Calculator</h3><p className="text-sm text-muted-foreground">Determine the daily calorie intake needed to start reducing your risk.</p></Link>
            <Link href="/waist-to-height-ratio" className="p-4 border rounded-lg hover:bg-muted"><h3 className="font-semibold">Waist-to-Height Ratio</h3><p className="text-sm text-muted-foreground">Use a superior metric to assess central obesity, a key diabetes risk factor.</p></Link>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
