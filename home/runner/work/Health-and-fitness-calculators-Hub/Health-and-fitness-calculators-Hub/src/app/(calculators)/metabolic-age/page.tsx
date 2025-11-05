
import type { Metadata } from 'next';
import Link from 'next/link';
import { BrainCircuit } from 'lucide-react';
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
import { MetabolicAgeCalculatorForm } from '@/components/metabolic-age-calculator-form';

export const metadata: Metadata = {
  title: 'Metabolic Age Calculator – How Old Is Your Metabolism?',
  description: 'Calculate your metabolic age based on your Basal Metabolic Rate (BMR) and see how it compares to your chronological age. Understand the factors that influence your metabolism.',
  openGraph: {
    title: 'Metabolic Age Calculator – How Old Is Your Metabolism?',
    description: 'Calculate your metabolic age based on your Basal Metabolic Rate (BMR) and see how it compares to your chronological age. Understand the factors that influence your metabolism.',
    type: 'website',
  },
};

export default function MetabolicAgePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Metabolic Age Calculator',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
    },
    description: 'A free web-based calculator to estimate metabolic age from BMR, height, weight, age, and gender.',
  };

  const howToJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Calculate Your Metabolic Age',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Enter Your Details',
        text: 'Input your gender, age, height, and weight. The calculator uses these to first determine your Basal Metabolic Rate (BMR).',
      },
      {
        '@type': 'HowToStep',
        name: 'Calculate',
        text: 'The calculator computes your BMR and then determines the average age of a person with a similar metabolism, giving you your metabolic age.',
      },
      {
        '@type': 'HowToStep',
        name: 'Interpret Your Result',
        text: 'Compare your metabolic age to your actual age. A lower metabolic age is generally considered a sign of good health.',
      },
    ],
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What does metabolic age mean?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Metabolic age is a comparison of your Basal Metabolic Rate (BMR) to the average BMR of people in your chronological age group. A metabolic age lower than your actual age suggests your metabolism is faster than average for your age group, which is often a positive sign. You can calculate your BMR separately with our <a href="/bmr">BMR Calculator</a>.',
        },
      },
      {
        '@type': 'Question',
        name: 'How can I lower my metabolic age?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Lowering your metabolic age involves increasing your BMR. The most effective way to do this is by building more muscle mass through resistance training. A higher <a href="/lean-body-mass">Lean Body Mass</a> burns more calories at rest, leading to a "younger" metabolism.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is metabolic age a scientifically validated metric?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Metabolic age is more of a wellness concept than a clinical diagnostic tool. While it\'s based on your BMR, a real medical metric, the "age" part is an interpretation. It\'s a useful way to conceptualize your metabolic health, but metrics like <a href="/body-fat">Body Fat Percentage</a> are more concrete health indicators.',
        },
      },
      {
        '@type': 'Question',
        name: 'My metabolic age is higher than my real age. Should I be worried?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'It\'s not a cause for alarm, but it can be a useful wake-up call. It suggests your metabolism is slower than average for your age, which could be due to low muscle mass or a higher body fat percentage. Improving your body composition through diet and exercise will lower it. Our <a href="/ffmi">FFMI Calculator</a> can help you track muscularity.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why does this calculator ask for my age if it\'s calculating a new one?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Your chronological age is needed to calculate your BMR accurately using the Mifflin-St Jeor formula. The calculator then uses this BMR to find the average age of a person with that same BMR, which becomes your metabolic age.',
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
              <BreadcrumbPage>Metabolic Age Calculator</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <Card>
          <CardHeader>
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 text-primary p-3 rounded-lg">
                <BrainCircuit className="h-8 w-8" />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold">
                  Metabolic Age Calculator
                </h1>
                <p className="text-muted-foreground">
                  Discover your metabolic age and see how it compares to your actual age. This calculator uses your <Link href="/bmr" className="text-primary hover:underline">Basal Metabolic Rate (BMR)</Link> to provide a wellness metric that reflects your body's metabolic health and efficiency.
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <MetabolicAgeCalculatorForm />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>How to Use the Metabolic Age Calculator</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>This calculator first determines your BMR using your personal stats and then estimates your metabolic age based on that result.</p>
            <ol className="list-decimal list-inside space-y-2">
              <li><strong>Enter Your Details:</strong> Input your gender, chronological age, height, and weight.</li>
              <li><strong>Calculate:</strong> The tool computes your BMR and then compares it to the average BMR for different age groups to find your metabolic "match."</li>
              <li><strong>Interpret Your Result:</strong> The result shows your metabolic age. If it's lower than your actual age, that's a great sign! If it's higher, it suggests your metabolism is slower than the average for your age group.</li>
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
                <TableRow><TableCell>Gender</TableCell><TableCell>Female</TableCell></TableRow>
                <TableRow><TableCell>Chronological Age</TableCell><TableCell>45 years</TableCell></TableRow>
                <TableRow><TableCell>Height</TableCell><TableCell>165 cm</TableCell></TableRow>
                <TableRow><TableCell>Weight</TableCell><TableCell>65 kg</TableCell></TableRow>
                <TableRow><TableCell className="font-bold">Calculated BMR</TableCell><TableCell className="font-bold">~1340 kcal/day</TableCell></TableRow>
                <TableRow><TableCell className="font-bold">Estimated Metabolic Age</TableCell><TableCell className="font-bold">40 years</TableCell></TableRow>
                <TableRow>
                  <TableCell>Interpretation & Next Step</TableCell>
                  <TableCell>This 45-year-old woman has a metabolic age of 40, indicating her metabolism is more efficient than average for her age, likely due to good muscle mass. To maintain this, she should continue to focus on protein intake and resistance training, tracking her muscularity with the <Link href="/ffmi" className="text-primary hover:underline">FFMI Calculator</Link>.</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Understanding Metabolic Age</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <h3 className="font-semibold text-lg text-foreground">What is Metabolic Age and Why Does it Matter?</h3>
            <p>Metabolic age is not a clinical diagnosis but rather a wellness metric designed to make the abstract concept of metabolic rate more tangible. It answers the question: "Is my metabolism working as efficiently as it should be for someone my age?"</p>
            <p>The calculation is based on your Basal Metabolic Rate (BMR), the number of calories your body burns at complete rest. A higher BMR indicates a more "active" metabolism. Since BMR naturally declines with age (primarily due to muscle loss), your metabolic age is calculated by finding the average chronological age of people who have the same BMR as you.</p>
            
            <h3 className="font-semibold text-lg text-foreground">The Key Factors Influencing Metabolic Age</h3>
            <p>Your metabolic age is primarily determined by your BMR, which is influenced by:</p>
            <ul className="list-disc list-inside space-y-2">
                <li><strong>Lean Body Mass:</strong> This is the most important factor. Muscle tissue is highly metabolically active. The more muscle you have, the more calories you burn at rest, and the "younger" your metabolic age will be. This is why tracking your <Link href="/lean-body-mass" className="text-primary hover:underline">Lean Body Mass</Link> is so crucial.</li>
                <li><strong>Body Fat Percentage:</strong> Fat tissue is less metabolically active than muscle. A higher <Link href="/body-fat" className="text-primary hover:underline">Body Fat Percentage</Link> often correlates with a higher metabolic age.</li>
                <li><strong>Age and Gender:</strong> Men tend to have a higher BMR than women due to more muscle mass. BMR naturally declines for both genders with age.</li>
            </ul>
             <p>Improving your metabolic age is a powerful way to enhance your overall health, making it easier to manage your weight. A "younger" metabolism means a higher <Link href="/tdee" className="text-primary hover:underline">TDEE</Link>, which gives you more flexibility with your diet.</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Frequently Asked Questions (FAQ)</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1"><AccordionTrigger>What does metabolic age mean?</AccordionTrigger><AccordionContent>Metabolic age is a comparison of your Basal Metabolic Rate (BMR) to the average BMR of people in your chronological age group. A metabolic age lower than your actual age suggests your metabolism is faster than average for your age group, which is often a positive sign. You can calculate your BMR separately with our <Link href="/bmr">BMR Calculator</Link>.</AccordionContent></AccordionItem>
              <AccordionItem value="item-2"><AccordionTrigger>How can I lower my metabolic age?</AccordionTrigger><AccordionContent>Lowering your metabolic age involves increasing your BMR. The most effective way to do this is by building more muscle mass through resistance training. A higher <Link href="/lean-body-mass">Lean Body Mass</Link> burns more calories at rest, leading to a "younger" metabolism.</AccordionContent></AccordionItem>
              <AccordionItem value="item-3"><AccordionTrigger>Is metabolic age a scientifically validated metric?</AccordionTrigger><AccordionContent>Metabolic age is more of a wellness concept than a clinical diagnostic tool. While it's based on your BMR, a real medical metric, the "age" part is an interpretation. It's a useful way to conceptualize your metabolic health, but metrics like <Link href="/body-fat">Body Fat Percentage</Link> are more concrete health indicators.</AccordionContent></AccordionItem>
              <AccordionItem value="item-4"><AccordionTrigger>My metabolic age is higher than my real age. Should I be worried?</AccordionTrigger><AccordionContent>It's not a cause for alarm, but it can be a useful wake-up call. It suggests your metabolism is slower than average for your age, which could be due to low muscle mass or a higher body fat percentage. Improving your body composition through diet and exercise will lower it. Our <Link href="/ffmi">FFMI Calculator</Link> can help you track muscularity.</AccordionContent></AccordionItem>
              <AccordionItem value="item-5"><AccordionTrigger>Why does this calculator ask for my age if it's calculating a new one?</AccordionTrigger><AccordionContent>Your chronological age is needed to calculate your BMR accurately using the Mifflin-St Jeor formula. The calculator then uses this BMR to find the average age of a person with that same BMR, which becomes your metabolic age.</AccordionContent></AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Related Calculators</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/bmr" className="p-4 border rounded-lg hover:bg-muted">
              <h3 className="font-semibold">BMR Calculator</h3>
              <p className="text-sm text-muted-foreground">The foundational calculation for metabolic age. See your baseline calorie burn.</p>
            </Link>
            <Link href="/lean-body-mass" className="p-4 border rounded-lg hover:bg-muted">
              <h3 className="font-semibold">Lean Body Mass Calculator</h3>
              <p className="text-sm text-muted-foreground">Estimate your muscle mass, the primary driver of a "young" metabolism.</p>
            </Link>
             <Link href="/ffmi" className="p-4 border rounded-lg hover:bg-muted">
              <h3 className="font-semibold">FFMI Calculator</h3>
              <p className="text-sm text-muted-foreground">Track your muscularity relative to your height, a key factor in metabolic age.</p>
            </Link>
            <Link href="/tdee" className="p-4 border rounded-lg hover:bg-muted">
              <h3 className="font-semibold">TDEE Calculator</h3>
              <p className="text-sm text-muted-foreground">Understand your total daily calorie burn, which is directly influenced by your BMR.</p>
            </Link>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
