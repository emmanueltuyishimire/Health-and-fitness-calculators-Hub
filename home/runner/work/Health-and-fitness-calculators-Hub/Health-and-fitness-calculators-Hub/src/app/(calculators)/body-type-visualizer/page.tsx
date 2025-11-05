
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
import { BodyTypeVisualizerForm } from '@/components/body-type-visualizer-form';

export const metadata: Metadata = {
  title: 'Body Type Visualizer – See Your Shape',
  description: 'Visually determine your body shape (e.g., apple, pear, hourglass) based on your bust, waist, and hip measurements and understand the health and fitness implications.',
  openGraph: {
    title: 'Body Type Visualizer – See Your Shape',
    description: 'Visually determine your body shape (e.g., apple, pear, hourglass) based on your bust, waist, and hip measurements and understand the health and fitness implications.',
    type: 'website',
  },
};

export default function BodyTypeVisualizerPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Body Type Visualizer',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
    },
    description: 'A free web-based tool to visualize body shape from bust, waist, and hip measurements.',
  };

  const howToJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Visualize Your Body Type',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Enter Measurements',
        text: 'Input your bust, waist, and hip measurements using a flexible measuring tape.',
      },
      {
        '@type': 'HowToStep',
        name: 'Visualize Your Shape',
        text: 'The tool will generate a simple visual representation of your body shape along with a classification (e.g., Pear, Hourglass).',
      },
    ],
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Is this calculator scientifically accurate?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'This visualizer uses common proportional definitions to classify body shapes. While the classifications are standard, the visualization is a simplified, stylized representation. For a more detailed health risk assessment, use the <a href="/waist-to-hip-ratio">Waist-to-Hip Ratio Calculator</a>.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I change my body shape?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'While your bone structure is genetic, you can significantly alter your body shape through targeted exercise and nutrition. For example, a "Pear" shape can build upper body muscle to create a more balanced silhouette. Use the <a href="/ffmi">FFMI Calculator</a> to track muscle gains.',
        },
      },
      {
        '@type': 'Question',
        name: 'What does my body shape say about my health?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Body shape can indicate where you tend to store fat. An "Apple" shape (more abdominal fat) is associated with higher health risks than a "Pear" shape. The <a href="/waist-to-height-ratio">Waist-to-Height Ratio Calculator</a> is an excellent tool for assessing this risk.',
        },
      },
      {
        '@type': 'Question',
        name: 'How is this different from the Body Shape Calculator?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'This tool provides a visual representation in addition to the classification, which can make it easier to understand your proportions. The underlying logic is similar to the <a href="/body-shape">Body Shape Calculator</a>.',
        },
      },
      {
        '@type': 'Question',
        name: 'How can I use this for fitness?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Knowing your body shape can help you tailor your workout plan. For example, a "Rectangle" shape might focus on exercises that build both the glutes and shoulders to create more curves. Planning your diet with the <a href="/daily-calorie-needs">Daily Calorie Needs Calculator</a> is also crucial.',
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
            <BreadcrumbItem><BreadcrumbLink href="/">Home</BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem><BreadcrumbLink href="/all">Calculators</BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem><BreadcrumbPage>Body Type Visualizer</BreadcrumbPage></BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <Card>
          <CardHeader>
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 text-primary p-3 rounded-lg"><PersonStanding className="h-8 w-8" /></div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold">Body Type Visualizer</h1>
                <p className="text-muted-foreground">
                  See your body shape instantly. This tool uses your bust, waist, and hip measurements to generate a simple visual representation of your body type, helping you better understand your proportions.
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <BodyTypeVisualizerForm />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>How to Use the Visualizer</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>This interactive tool gives you immediate visual feedback on your body's proportions.</p>
            <ol className="list-decimal list-inside space-y-2">
              <li><strong>Measure Yourself:</strong> Use a flexible tape to measure your bust (fullest part), waist (narrowest part), and hips (widest part).</li>
              <li><strong>Enter Your Measurements:</strong> Input the three measurements into the form.</li>
              <li><strong>See Your Shape:</strong> The visualizer will instantly update to reflect your proportions and provide a body shape classification. This offers a different perspective than purely numerical tools like the <Link href="/body-fat" className="text-primary hover:underline">Body Fat Percentage Calculator</Link>.</li>
            </ol>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Understanding Body Shapes and Health</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>Body shape is largely determined by your bone structure and where your body tends to store fat. While every body is unique, most can be categorized into a few common types. Understanding your shape is useful not just for fashion, but for health awareness.</p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Apple (Inverted Triangle):</strong> Wider on top, with more fat stored around the abdomen. This shape is associated with a higher risk for metabolic conditions. The <Link href="/waist-to-height-ratio" className="text-primary hover:underline">Waist-to-Height Ratio</Link> is a key metric for this type.</li>
              <li><strong>Pear (Triangle):</strong> Wider on the bottom, with more fat stored on the hips and thighs. This is generally considered a lower health risk than an apple shape.</li>
              <li><strong>Hourglass:</strong> Bust and hips are of similar width with a distinctly narrower waist. This indicates a more balanced fat distribution.</li>
              <li><strong>Rectangle (Straight):</strong> Bust, waist, and hips are of similar width. This shape often indicates less visceral fat, but overall <Link href="/bmi" className="text-primary hover:underline">BMI</Link> is still important.</li>
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
                <AccordionTrigger>Is this calculator scientifically accurate?</AccordionTrigger>
                <AccordionContent>This visualizer uses common proportional definitions to classify body shapes. While the classifications are standard, the visualization is a simplified, stylized representation. For a more detailed health risk assessment, use the <a href="/waist-to-hip-ratio" className="text-primary hover:underline">Waist-to-Hip Ratio Calculator</a>.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Can I change my body shape?</AccordionTrigger>
                <AccordionContent>While your bone structure is genetic, you can significantly alter your body shape through targeted exercise and nutrition. For example, a "Pear" shape can build upper body muscle to create a more balanced silhouette. Use the <a href="/ffmi" className="text-primary hover:underline">FFMI Calculator</a> to track muscle gains.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>What does my body shape say about my health?</AccordionTrigger>
                <AccordionContent>Body shape can indicate where you tend to store fat. An "Apple" shape (more abdominal fat) is associated with higher health risks than a "Pear" shape. The <a href="/waist-to-height-ratio" className="text-primary hover:underline">Waist-to-Height Ratio Calculator</a> is an excellent tool for assessing this risk.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>How is this different from the Body Shape Calculator?</AccordionTrigger>
                <AccordionContent>This tool provides a visual representation in addition to the classification, which can make it easier to understand your proportions. The underlying logic is similar to the <a href="/body-shape">Body Shape Calculator</a>.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>How can I use this for fitness?</AccordionTrigger>
                <AccordionContent>Knowing your body shape can help you tailor your workout plan. For example, a "Rectangle" shape might focus on exercises that build both the glutes and shoulders to create more curves. Planning your diet with the <a href="/daily-calorie-needs">Daily Calorie Needs Calculator</a> is also crucial.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Related Calculators</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/body-shape" className="p-4 border rounded-lg hover:bg-muted">
              <h3 className="font-semibold">Body Shape Calculator</h3>
              <p className="text-sm text-muted-foreground">Get a numerical classification of your body shape.</p>
            </Link>
            <Link href="/waist-to-hip-ratio" className="p-4 border rounded-lg hover:bg-muted">
              <h3 className="font-semibold">Waist-to-Hip Ratio</h3>
              <p className="text-sm text-muted-foreground">Assess your health risk based on your fat distribution.</p>
            </Link>
             <Link href="/body-fat" className="p-4 border rounded-lg hover:bg-muted">
              <h3 className="font-semibold">Body Fat Calculator</h3>
              <p className="text-sm text-muted-foreground">Understand your overall body composition beyond just shape.</p>
            </Link>
            <Link href="/ffmi" className="p-4 border rounded-lg hover:bg-muted">
              <h3 className="font-semibold">FFMI Calculator</h3>
              <p className="text-sm text-muted-foreground">Track your muscularity, which can change your body's proportions.</p>
            </Link>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
