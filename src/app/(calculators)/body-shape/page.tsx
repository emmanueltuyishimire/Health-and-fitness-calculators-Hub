
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
import { BodyShapeCalculatorForm } from '@/components/body-shape-calculator-form';

export const metadata: Metadata = {
  title: 'Body Shape Calculator – Discover Your Body Type',
  description: 'Determine your body shape (e.g., apple, pear, hourglass, rectangle) based on your bust, waist, and hip measurements. Understand the characteristics of your body type.',
  openGraph: {
    title: 'Body Shape Calculator – Discover Your Body Type',
    description: 'Determine your body shape (e.g., apple, pear, hourglass, rectangle) based on your bust, waist, and hip measurements. Understand the characteristics of your body type.',
    type: 'website',
  },
};

export default function BodyShapePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Body Shape Calculator',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
    },
    description: 'A free web-based calculator to determine body shape type from bust, waist, and hip measurements.',
  };

  const howToJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Calculate Your Body Shape',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Select Units',
        text: 'Choose between Metric (cm) or Imperial (inches) for your measurements.',
      },
      {
        '@type': 'HowToStep',
        name: 'Enter Measurements',
        text: 'Input your bust, waist, and hip circumferences using a flexible measuring tape.',
      },
      {
        '@type': 'HowToStep',
        name: 'Calculate Body Shape',
        text: 'Click the "Calculate Body Shape" button to see your estimated body type and its description.',
      },
    ],
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What are the main body shapes?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The most common body shapes are Rectangle (straight), Triangle (pear), Inverted Triangle (apple), and Hourglass. Our calculator helps you determine which category you fit into based on your measurements.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does body shape have health implications?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, body shape can be linked to health risks. An "apple" shape (Inverted Triangle), with more weight carried around the abdomen, is often associated with higher risks for metabolic diseases. Our <a href="/waist-to-hip-ratio">Waist-to-Hip Ratio Calculator</a> provides more specific risk assessment.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I measure my bust, waist, and hips accurately?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Bust: Measure around the fullest part of your chest. Waist: Measure at the narrowest point of your torso. Hips: Measure around the widest part of your buttocks. Use a flexible tape and keep it level.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I change my body shape?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Your basic bone structure is genetic, but you can alter your body composition through diet and exercise. For example, building muscle in certain areas can create a more hourglass-like figure. Our <a href="/ffmi">FFMI Calculator</a> helps track muscle gains.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is body shape the same as body size?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. Body shape refers to the proportional structure of your body, while body size refers to your overall mass (weight and height). You can be any shape at any size. The <a href="/bmi">BMI Calculator</a> is a tool for assessing size.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why does the calculator use bust instead of shoulder measurements?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Bust measurements are generally easier and more consistent for people to take at home. For the purpose of this calculator, bust and shoulder measurements are often used interchangeably to determine the width of the upper body.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is one body shape "better" than another?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. All body shapes are normal and natural. This calculator is a tool for understanding your proportions, which can be useful for fashion, fitness, and health awareness, not for judgment. A healthy <a href="/body-fat">Body Fat Percentage</a> is more important than a specific shape.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does this relate to the Waist-to-Hip Ratio (WHR)?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'WHR is a key component in determining body shape. Our <a href="/waist-to-hip-ratio">WHR Calculator</a> focuses specifically on the ratio as a health risk indicator, while this calculator uses WHR along with bust measurements to classify your overall shape.',
        },
      },
      {
        '@type': 'Question',
        name: 'What if I am between two body shapes?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Many people have characteristics of more than one body shape. These categories are general guidelines, not strict definitions. Use the result as a starting point for understanding your unique physique.',
        },
      },
      {
        '@type': 'Question',
        name: 'How can I use my body shape information for fitness?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Knowing your body shape can help you tailor your workout plan. For example, a "pear" shape might want to focus on building upper body muscle to create a more balanced silhouette. A proper nutrition plan, guided by our <a href="/calorie-needs">Daily Calorie Needs Calculator</a>, is also essential.',
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
              <BreadcrumbPage>Body Shape Calculator</BreadcrumbPage>
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
                  Body Shape Calculator
                </h1>
                <p className="text-muted-foreground">
                  Determine your body shape by entering your bust, waist, and hip measurements. Understanding your body's proportions can be useful for fashion, fitness, and general self-awareness. This tool is a great companion to the <Link href="/waist-to-hip-ratio" className="text-primary hover:underline">Waist-to-Hip Ratio Calculator</Link>.
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <BodyShapeCalculatorForm />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>How to Use the Body Shape Calculator</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              This calculator uses the relationships between your bust, waist, and hip measurements to classify your shape. For best results, use a flexible measuring tape.
            </p>
            <ol className="list-decimal list-inside space-y-2">
              <li><strong>Select Units:</strong> Choose between "Metric" (cm) or "Imperial" (inches).</li>
              <li><strong>Measure Your Bust:</strong> Measure around the fullest part of your bust, keeping the tape parallel to the floor.</li>
              <li><strong>Measure Your Waist:</strong> Measure the narrowest part of your torso, usually just above the navel.</li>
              <li><strong>Measure Your Hips:</strong> Measure the widest part of your hips and buttocks.</li>
              <li><strong>Calculate:</strong> Click the button to discover your body shape. This provides a different perspective from metrics like <Link href="/bmi" className="text-primary hover:underline">BMI</Link>, which only considers overall size.</li>
            </ol>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Understanding the Body Shapes</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              While every body is unique, most can be categorized into one of four general shapes based on the ratio of their measurements.
            </p>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Body Shape</TableHead>
                  <TableHead>Characteristics</TableHead>
                  <TableHead>Health Note</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-semibold">Rectangle</TableCell>
                  <TableCell>Shoulders, bust, and hips are of a similar width, with a less defined waist.</TableCell>
                   <TableCell>Generally associated with lower health risk, but a high <Link href="/waist-to-height-ratio" className="text-primary hover:underline">Waist-to-Height Ratio</Link> is still a concern.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-semibold">Triangle (Pear)</TableCell>
                  <TableCell>Hips are wider than the bust and shoulders. A defined waist is common.</TableCell>
                  <TableCell>Fat stored on hips and thighs is generally considered less of a health risk than abdominal fat.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-semibold">Inverted Triangle</TableCell>
                  <TableCell>Bust and/or shoulders are wider than the hips. Often described as "top-heavy."</TableCell>
                  <TableCell>This shape can indicate more abdominal fat, similar to an "apple" shape, which is a key risk factor assessed by the <Link href="/waist-to-hip-ratio" className="text-primary hover:underline">Waist-to-Hip Ratio</Link>.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-semibold">Hourglass</TableCell>
                  <TableCell>Bust and hips are of a similar width, with a significantly narrower, well-defined waist.</TableCell>
                  <TableCell>Considered to have a balanced fat distribution, which is generally healthy. Maintaining a healthy <Link href="/body-fat" className="text-primary hover:underline">Body Fat Percentage</Link> is key.</TableCell>
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
                <AccordionTrigger>What are the main body shapes?</AccordionTrigger>
                <AccordionContent>The most common body shapes are Rectangle (straight), Triangle (pear), Inverted Triangle (apple), and Hourglass. Our calculator helps you determine which category you fit into based on your measurements.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Does body shape have health implications?</AccordionTrigger>
                <AccordionContent>Yes, body shape can be linked to health risks. An "apple" shape (Inverted Triangle), with more weight carried around the abdomen, is often associated with higher risks for metabolic diseases. Our <a href="/waist-to-hip-ratio">Waist-to-Hip Ratio Calculator</a> provides more specific risk assessment.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>How do I measure my bust, waist, and hips accurately?</AccordionTrigger>
                <AccordionContent>Bust: Measure around the fullest part of your chest. Waist: Measure at the narrowest point of your torso. Hips: Measure around the widest part of your buttocks. Use a flexible tape and keep it level.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Can I change my body shape?</AccordionTrigger>
                <AccordionContent>Your basic bone structure is genetic, but you can alter your body composition through diet and exercise. For example, building muscle in certain areas can create a more hourglass-like figure. Our <a href="/ffmi">FFMI Calculator</a> helps track muscle gains.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Is body shape the same as body size?</AccordionTrigger>
                <AccordionContent>No. Body shape refers to the proportional structure of your body, while body size refers to your overall mass (weight and height). You can be any shape at any size. The <a href="/bmi">BMI Calculator</a> is a tool for assessing size.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Related Calculators</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/waist-to-hip-ratio" className="p-4 border rounded-lg hover:bg-muted">
              <h3 className="font-semibold">Waist-to-Hip Ratio</h3>
              <p className="text-sm text-muted-foreground">Focus specifically on the health risks associated with your fat distribution.</p>
            </Link>
            <Link href="/body-fat" className="p-4 border rounded-lg hover:bg-muted">
              <h3 className="font-semibold">Body Fat Percentage</h3>
              <p className="text-sm text-muted-foreground">Understand your overall body composition, beyond just proportions.</p>
            </Link>
            <Link href="/bmi" className="p-4 border rounded-lg hover:bg-muted">
              <h3 className="font-semibold">BMI Calculator</h3>
              <p className="text-sm text-muted-foreground">Assess your overall body size in relation to your height.</p>
            </Link>
            <Link href="/ideal-weight" className="p-4 border rounded-lg hover:bg-muted">
              <h3 className="font-semibold">Ideal Weight Calculator</h3>
              <p className="text-sm text-muted-foreground">Get a general guideline for a healthy weight range for your height.</p>
            </Link>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
