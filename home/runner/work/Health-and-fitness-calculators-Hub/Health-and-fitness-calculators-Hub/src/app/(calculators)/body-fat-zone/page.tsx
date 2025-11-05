
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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { BodyFatZoneClassifierForm } from '@/components/body-fat-zone-classifier-form';

export const metadata: Metadata = {
  title: 'Body Fat Health Zone Classifier – Understand Your Category',
  description:
    'Classify your body fat percentage into health zones (e.g., Athlete, Fitness, Obese) based on age and gender. Understand what your body fat number means for your health.',
  openGraph: {
    title: 'Body Fat Health Zone Classifier – Understand Your Category',
    description:
      'Classify your body fat percentage into health zones (e.g., Athlete, Fitness, Obese) based on age and gender. Understand what your body fat number means for your health.',
    type: 'website',
  },
};

export default function BodyFatZonePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Body Fat Health Zone Classifier',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
    },
    description:
      'A free web-based tool to classify body fat percentage into health zones based on age and gender.',
  };

  const howToJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Classify Your Body Fat Percentage',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Get Your Body Fat %',
        text: 'First, determine your body fat percentage. You can use our Body Fat Percentage Calculator for a good estimate.',
        url: '/body-fat'
      },
      {
        '@type': 'HowToStep',
        name: 'Enter Your Details',
        text: 'Input your gender, age, and body fat percentage into the form.',
      },
      {
        '@type': 'HowToStep',
        name: 'View Your Zone',
        text: 'The calculator will classify your body fat percentage into a specific health zone, from "Essential Fat" to "Obese," based on ACE standards.',
      },
    ],
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What do the different body fat zones mean?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The zones (Essential, Athlete, Fitness, Acceptable, Obese) are categories based on guidelines from organizations like the American Council on Exercise (ACE) to help you understand your health status. Being in the "Obese" category signifies a higher health risk, while the "Fitness" category is a common goal for active individuals.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why do I need my body fat percentage for this?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'This calculator provides context to your body fat percentage. First you need the number itself, which you can get from our <a href="/body-fat">Body Fat Percentage Calculator</a>. This tool then tells you what that number means.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is it bad to have "Essential Fat" levels?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Being at or below essential fat levels is unhealthy and unsustainable for most people. Essential fat is necessary for vital bodily functions, including hormone regulation. Unless you are a competitive bodybuilder preparing for a show, you should not aim for this zone.',
        },
      },
      {
        '@type': 'Question',
        name: 'How is this different from the Obesity Risk Calculator?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The <a href="/obesity-risk">Obesity Risk Calculator</a> uses BMI, which is a measure of weight relative to height. This calculator uses body fat percentage, which is a more accurate measure of body composition. You can have a "Normal" BMI but still be in the "Obese" body fat zone.',
        },
      },
      {
        '@type': 'Question',
        name: 'How can I move from the "Obese" or "Acceptable" zone to the "Fitness" zone?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'To lower your body fat percentage, you need to create a sustainable <a href="/calorie-deficit">calorie deficit</a> and engage in regular exercise, particularly resistance training to build or maintain muscle. Use our <a href="/tdee">TDEE Calculator</a> to find your starting calorie target.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does my "zone" change as I age?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, the healthy body fat ranges shift slightly higher with age. A body fat percentage that is in the "Fitness" zone for a 25-year-old might be in the "Athlete" zone for a 55-year-old. This calculator accounts for these age-related changes.',
        },
      },
      {
        '@type': 'Question',
        name: 'My body fat is in the "Athlete" zone but my FFMI is average. What does this mean?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'This could mean you are lean but don\'t carry a large amount of muscle mass for your frame. The <a href="/ffmi">FFMI Calculator</a> is a specific measure of muscularity. You can be very lean (low body fat) without having a high FFMI.',
        },
      },
      {
        '@type': 'Question',
        name: 'How often should I check my body fat zone?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You should re-evaluate your body fat percentage and zone every 4-8 weeks. Body composition changes slowly, and tracking more frequently can be misleading. Use the <a href="/fat-loss-tracker">Fat Loss Tracker</a> to see your progress over time.',
        },
      },
       {
        '@type': 'Question',
        name: 'Can I have a "healthy" body fat percentage but an unhealthy lifestyle?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Body fat percentage is just one metric. A person in the "Fitness" zone who smokes, sleeps poorly, and eats a nutrient-poor diet is not holistically healthy. Use this tool as part of a complete wellness approach.',
        },
      },
       {
        '@type': 'Question',
        name: 'What is a good next step after finding my zone?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'If you want to change your body fat zone, the best next step is to calculate your <a href="/daily-calorie-needs">Daily Calorie Needs</a> to create a nutrition plan. From there, you can use the <a href="/macronutrient-ratio">Macronutrient Ratio Calculator</a> to fine-tune your diet.',
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
              <BreadcrumbPage>Body Fat Health Zone Classifier</BreadcrumbPage>
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
                  Body Fat Health Zone Classifier
                </h1>
                <p className="text-muted-foreground">
                  Understand what your body fat percentage means for your health. This tool classifies your body fat level into distinct health zones, providing context to your results from the <Link href="/body-fat" className="text-primary hover:underline">Body Fat Percentage Calculator</Link>.
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <BodyFatZoneClassifierForm />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>How to Use the Classifier</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>This tool gives you a clear health classification for your body fat percentage based on your age and gender.</p>
            <ol className="list-decimal list-inside space-y-2">
              <li><strong>Calculate Your Body Fat:</strong> First, you need your body fat percentage. Use our <Link href="/body-fat" className="text-primary hover:underline">Body Fat Percentage Calculator</Link> for an accurate estimate.</li>
              <li><strong>Enter Your Details:</strong> Input your gender, age, and body fat percentage into the form.</li>
              <li><strong>View Your Zone:</strong> The calculator will instantly display your health zone, from "Athlete" to "Obese", based on widely accepted standards.</li>
            </ol>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Understanding the Body Fat Zones</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>Body fat percentage is a much better health indicator than <Link href="/bmi" className="text-primary hover:underline">BMI</Link> because it distinguishes fat from muscle. The categories used in this calculator are based on guidelines from the American Council on Exercise (ACE) and help you understand where you stand.</p>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Classification</TableHead>
                        <TableHead>Women (% Fat)</TableHead>
                        <TableHead>Men (% Fat)</TableHead>
                        <TableHead>Description</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell>Essential Fat</TableCell>
                        <TableCell>10-13%</TableCell>
                        <TableCell>2-5%</TableCell>
                        <TableCell>The minimum fat required for basic physiological health. It is unhealthy to be at or below this level.</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Athletes</TableCell>
                        <TableCell>14-20%</TableCell>
                        <TableCell>6-13%</TableCell>
                        <TableCell>Typical range for elite athletes. Low body fat enhances performance in many sports.</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Fitness</TableCell>
                        <TableCell>21-24%</TableCell>
                        <TableCell>14-17%</TableCell>
                        <TableCell>A lean and healthy range for most active individuals, associated with good health and fitness.</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Acceptable</TableCell>
                        <TableCell>25-31%</TableCell>
                        <TableCell>18-24%</TableCell>
                        <TableCell>Considered an acceptable range for the general population, but could be improved.</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Obese</TableCell>
                        <TableCell>32%+</TableCell>
                        <TableCell>25%+</TableCell>
                        <TableCell>Associated with an increased risk for a range of health problems. A good first step is the <Link href="/obesity-risk" className="text-primary hover:underline">Obesity Risk Calculator</Link>.</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Frequently Asked Questions (FAQ)</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>What do the different body fat zones mean?</AccordionTrigger>
                <AccordionContent>The zones (Essential, Athlete, Fitness, Acceptable, Obese) are categories based on guidelines from organizations like the American Council on Exercise (ACE) to help you understand your health status. Being in the "Obese" category signifies a higher health risk, while the "Fitness" category is a common goal for active individuals.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Why do I need my body fat percentage for this?</AccordionTrigger>
                <AccordionContent>This calculator provides context to your body fat percentage. First you need the number itself, which you can get from our <a href="/body-fat">Body Fat Percentage Calculator</a>. This tool then tells you what that number means.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Is it bad to have "Essential Fat" levels?</AccordionTrigger>
                <AccordionContent>Being at or below essential fat levels is unhealthy and unsustainable for most people. Essential fat is necessary for vital bodily functions, including hormone regulation. Unless you are a competitive bodybuilder preparing for a show, you should not aim for this zone.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>How is this different from the Obesity Risk Calculator?</AccordionTrigger>
                <AccordionContent>The <a href="/obesity-risk">Obesity Risk Calculator</a> uses BMI, which is a measure of weight relative to height. This calculator uses body fat percentage, which is a more accurate measure of body composition. You can have a "Normal" BMI but still be in the "Obese" body fat zone.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>How can I move from the "Obese" or "Acceptable" zone to the "Fitness" zone?</AccordionTrigger>
                <AccordionContent>To lower your body fat percentage, you need to create a sustainable <a href="/calorie-deficit">calorie deficit</a> and engage in regular exercise, particularly resistance training to build or maintain muscle. Use our <a href="/tdee">TDEE Calculator</a> to find your starting calorie target.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Related Calculators</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/body-fat" className="p-4 border rounded-lg hover:bg-muted"><h3 className="font-semibold">Body Fat Percentage Calculator</h3><p className="text-sm text-muted-foreground">The essential first step. Get the body fat percentage needed for this tool.</p></Link>
            <Link href="/obesity-risk" className="p-4 border rounded-lg hover:bg-muted"><h3 className="font-semibold">Obesity Risk Calculator</h3><p className="text-sm text-muted-foreground">Assess your risk based on BMI, and compare it to your body fat zone.</p></Link>
            <Link href="/ffmi" className="p-4 border rounded-lg hover:bg-muted"><h3 className="font-semibold">FFMI Calculator</h3><p className="text-sm text-muted-foreground">Analyze your muscularity, which is independent of your body fat level.</p></Link>
            <Link href="/daily-calorie-needs" className="p-4 border rounded-lg hover:bg-muted"><h3 className="font-semibold">Daily Calorie Needs (TDEE)</h3><p className="text-sm text-muted-foreground">Calculate the calories you need to change your body fat percentage.</p></Link>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
