
import { Percent } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { BodyFatCalculatorForm } from '@/components/body-fat-calculator-form';

export const metadata: Metadata = {
    title: 'Body Fat Percentage Calculator – Estimate Body Composition',
    description: 'Estimate your body fat percentage with our free, accurate calculator using the U.S. Navy method. Understand your body composition for better health, fitness, and weight management.',
    openGraph: {
        title: 'Body Fat Percentage Calculator – Estimate Body Composition',
        description: 'Estimate your body fat percentage with our free, accurate calculator using the U.S. Navy method. Understand your body composition for better health, fitness, and weight management.',
        type: 'website',
    },
};


export default function BodyFatPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Body Fat Percentage Calculator',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
    },
    description:
      'Estimate body fat percentage using the U.S. Navy method. Understand your body composition for better health and fitness planning.',
  };

  const howToJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Calculate Your Body Fat Percentage',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Select Gender',
        text: 'Choose your gender, as the calculation formula differs for males and females.',
      },
      {
        '@type': 'HowToStep',
        name: 'Select Units',
        text: 'Choose between Metric (cm) or Imperial (inches) units for your measurements.',
      },
      {
        '@type': 'HowToStep',
        name: 'Enter Measurements',
        text: 'Input your height, waist, and neck circumference. If you are female, you must also enter your hip circumference.',
      },
      {
        '@type': 'HowToStep',
        name: 'Calculate',
        text: 'Click the "Calculate Body Fat" button to see your estimated body fat percentage.',
      },
    ],
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is a healthy body fat percentage?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A healthy body fat percentage varies by age and gender. For men, 10-20% is generally considered fit, while for women, 20-30% is a healthy range. Exceeding these ranges may increase health risks. To see how your weight compares, check our <a href="/ideal-weight">Ideal Weight Calculator</a>.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why is body fat percentage a better metric than BMI?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Body fat percentage distinguishes between fat mass and lean mass, whereas <a href="/bmi">BMI</a> does not. An athlete might have a high BMI due to muscle but a low body fat percentage, making them metabolically healthy.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I accurately measure my waist, neck, and hip?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Use a flexible measuring tape. For the waist, measure at the narrowest point, typically just above the navel. For the neck, measure just below the larynx (Adam\'s apple). For hips (females only), measure at the widest part of your buttocks. Consistency is key for tracking changes.',
        },
      },
      {
        '@type': 'Question',
        name: 'How can I lower my body fat percentage?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Lowering body fat requires a combination of a calorie deficit and exercise, particularly strength training to preserve muscle mass. Use the <a href="/calorie-needs">Daily Calorie Needs Calculator</a> to find your maintenance calories and create a deficit, and consider using the <a href="/bmr">BMR Calculator</a> to understand your baseline metabolic rate.',
        },
      },
      {
        '@type': 'Question',
        name: 'How accurate is the U.S. Navy method?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The U.S. Navy method is a reliable estimation for most people, often within 1-3% of clinical methods like DEXA scans. However, it is still an estimation. For precise measurements, consult a professional.',
        },
      },
      {
        '@type': 'Question',
        name: 'Should I measure my body fat every day?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No, daily fluctuations in water weight can skew results. It is best to measure your body fat percentage every 2-4 weeks, under consistent conditions (e.g., in the morning before eating).',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I have a high body fat percentage and still be a healthy weight?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'This is sometimes referred to as "normal weight obesity." While your weight might fall within a normal range on the <a href="/bmi">BMI chart</a>, a high body fat percentage can still pose health risks. It underscores the importance of body composition over just body weight.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the difference between essential fat and storage fat?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Essential fat is necessary for normal bodily functions (around 3-5% for men, 10-13% for women). Storage fat is accumulated energy. Our calculator measures total body fat. Extremely low levels can be dangerous.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does my <a href="/bmr">BMR</a> decrease as I lose body fat?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, as you lose weight (both fat and sometimes muscle), your Basal Metabolic Rate (BMR) will decrease because your body requires fewer calories to maintain a smaller size. It is important to recalculate your <a href="/bmr">BMR</a> periodically during your weight loss journey.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which is better, the BMI or Body Fat Percentage?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Body Fat Percentage is a more accurate indicator of health than <a href="/bmi">BMI</a> because it distinguishes between fat and muscle. However, BMI is a simpler, more accessible screening tool. Using both provides a more comprehensive view.',
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
              <BreadcrumbPage>Body Fat Percentage Calculator</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <Card>
          <CardHeader>
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 text-primary p-3 rounded-lg">
                <Percent className="h-8 w-8" />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold">
                  Body Fat Percentage Calculator
                </h1>
                <p className="text-muted-foreground">
                  Estimate your body fat percentage using the U.S. Navy method to understand your body composition.
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <BodyFatCalculatorForm />
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>How to Use the Body Fat Calculator</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              This calculator uses the U.S. Navy method, which requires gender and a few simple body measurements. Follow these steps for an accurate estimation.
            </p>
            <ol className="list-decimal list-inside space-y-2">
              <li><strong>Select Your Gender:</strong> The formula is different for men and women.</li>
              <li><strong>Choose Units:</strong> Select "Metric" (cm) or "Imperial" (inches).</li>
              <li><strong>Enter Height:</strong> Stand straight and measure from head to toe.</li>
              <li><strong>Measure Waist:</strong> For men, measure at the navel. For women, measure at the narrowest point.</li>
              <li><strong>Measure Neck:</strong> Measure the circumference of your neck below the Adam's apple.</li>
              <li><strong>Measure Hip (Females Only):</strong> Measure the widest part of your hips.</li>
              <li><strong>Calculate:</strong> Click the button to see your estimated body fat percentage. After getting your result, you can use the <Link href="/ideal-weight" className="text-primary hover:underline">Ideal Weight Calculator</Link> to see how you compare.</li>
            </ol>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Understanding Your Body Fat Percentage</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              Body fat percentage is a more telling indicator of health than body weight or even <Link href="/bmi" className="text-primary hover:underline">BMI</Link> alone. It reveals the proportion of your body that is fat versus lean mass (muscle, bone, water). Knowing this number helps you tailor your fitness and nutrition plans more effectively.
            </p>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Description</TableHead>
                  <TableHead>Women</TableHead>
                  <TableHead>Men</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Essential Fat</TableCell>
                  <TableCell>10-13%</TableCell>
                  <TableCell>2-5%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Athletes</TableCell>
                  <TableCell>14-20%</TableCell>
                  <TableCell>6-13%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Fitness</TableCell>
                  <TableCell>21-24%</TableCell>
                  <TableCell>14-17%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Acceptable</TableCell>
                  <TableCell>25-31%</TableCell>
                  <TableCell>18-24%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Obese</TableCell>
                  <TableCell>32%+</TableCell>
                  <TableCell>25%+</TableCell>
                </TableRow>
              </TableBody>
            </Table>
             <p className="text-sm mt-4">
              These ranges are guidelines from the American Council on Exercise. To understand the energy your body requires, check the <Link href="/bmr" className="text-primary hover:underline">BMR Calculator</Link>.
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
                <AccordionTrigger>What is a healthy body fat percentage?</AccordionTrigger>
                <AccordionContent>A healthy body fat percentage varies by age and gender. For men, 10-20% is generally considered fit, while for women, 20-30% is a healthy range. To see how your weight compares, check our <Link href="/ideal-weight" className="text-primary hover:underline">Ideal Weight Calculator</Link>.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Why is body fat percentage a better metric than BMI?</AccordionTrigger>
                <AccordionContent>Body fat percentage distinguishes between fat mass and lean mass, whereas <Link href="/bmi" className="text-primary hover:underline">BMI</Link> does not. An athlete might have a high BMI due to muscle but a low body fat percentage, making them metabolically healthy.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>How do I accurately measure my waist, neck, and hip?</AccordionTrigger>
                <AccordionContent>Use a flexible measuring tape. For the waist, measure at the narrowest point, typically just above the navel. For the neck, measure just below the larynx (Adam's apple). For hips (females only), measure at the widest part of your buttocks. Consistency is key for tracking changes.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>How can I lower my body fat percentage?</AccordionTrigger>
                <AccordionContent>Lowering body fat requires a combination of a calorie deficit and exercise. Use the <Link href="/calorie-needs" className="text-primary hover:underline">Daily Calorie Needs Calculator</Link> to find your maintenance calories and create a deficit, and consider using the <Link href="/bmr" className="text-primary hover:underline">BMR Calculator</Link> to understand your baseline metabolic rate.</AccordionContent>
              </AccordionItem>
               <AccordionItem value="item-5">
                <AccordionTrigger>How accurate is the U.S. Navy method?</AccordionTrigger>
                <AccordionContent>The U.S. Navy method is a reliable estimation for most people, often within 1-3% of clinical methods like DEXA scans. However, it is still an estimation. For precise measurements, consult a professional.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Related Calculators</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/bmi" className="p-4 border rounded-lg hover:bg-muted">
              <h3 className="font-semibold">BMI Calculator</h3>
              <p className="text-sm text-muted-foreground">Calculate your Body Mass Index to get a general overview of your weight status.</p>
            </Link>
            <Link href="/ideal-weight" className="p-4 border rounded-lg hover:bg-muted">
              <h3 className="font-semibold">Ideal Weight Calculator</h3>
              <p className="text-sm text-muted-foreground">Determine your ideal weight range based on your height and gender.</p>
            </Link>
            <Link href="/bmr" className="p-4 border rounded-lg hover:bg-muted">
              <h3 className="font-semibold">BMR Calculator</h3>
              <p className="text-sm text-muted-foreground">Find out how many calories your body burns at rest.</p>
            </Link>
            <Link href="/calorie-needs" className="p-4 border rounded-lg hover:bg-muted">
              <h3 className="font-semibold">Daily Calorie Needs Calculator</h3>
              <p className="text-sm text-muted-foreground">Estimate your daily calorie needs for maintaining, losing, or gaining weight.</p>
            </Link>
          </CardContent>
        </Card>

      </div>
    </>
  );
}

    