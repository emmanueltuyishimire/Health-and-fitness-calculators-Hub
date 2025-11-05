
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
import { ObesityRiskCalculatorForm } from '@/components/obesity-risk-calculator-form';

export const metadata: Metadata = {
  title: 'Obesity Risk Calculator – Assess Your BMI-Based Health Risk',
  description:
    'Assess your obesity-related health risk using our calculator. Understand your BMI classification and what it means for your long-term health and well-being.',
  openGraph: {
    title: 'Obesity Risk Calculator – Assess Your BMI-Based Health Risk',
    description:
      'Assess your obesity-related health risk using our calculator. Understand your BMI classification and what it means for your long-term health and well-being.',
    type: 'website',
  },
};

export default function ObesityRiskPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Obesity Risk Calculator',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
    },
    description:
      'A free web-based tool to assess obesity-related health risk based on Body Mass Index (BMI).',
  };

  const howToJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Assess Your Obesity Risk',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Enter Your Measurements',
        text: 'Input your current height and weight using the metric or imperial system.',
      },
      {
        '@type': 'HowToStep',
        name: 'Calculate BMI',
        text: 'The calculator will first determine your Body Mass Index (BMI).',
      },
      {
        '@type': 'HowToStep',
        name: 'View Your Risk Category',
        text: 'Based on your BMI, the tool will classify your obesity risk level according to World Health Organization (WHO) standards.',
      },
    ],
  };
  
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'Why does this calculator use BMI?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'This calculator uses BMI as it is the most widely accepted screening tool for assessing weight status and obesity risk at a population level. While it has limitations, it provides a quick and easy starting point. For a more nuanced view, you should also check your <a href="/body-fat" aria-label="Body Fat Percentage Calculator">Body Fat Percentage</a>.',
            }
        },
        {
            '@type': 'Question',
            name: 'What does "obese" mean in a clinical sense?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Clinically, obesity is defined as having excess body fat to the extent that it may have a negative effect on health. The <a href="/bmi" aria-label="BMI Calculator">BMI Calculator</a> classifies a BMI of 30 or greater as obese, which is associated with a higher risk for many chronic diseases.',
            }
        },
        {
            '@type': 'Question',
            name: 'Can I be "overweight" but still healthy?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes, particularly if you have a lot of muscle mass. This is why it\'s crucial to look beyond a single metric. If your BMI is high, your next step should be to use the <a href="/ffmi" aria-label="FFMI Calculator">FFMI Calculator</a> to assess your muscularity or the <a href="/waist-to-height-ratio" aria-label="Waist-to-Height Ratio Calculator">Waist-to-Height Ratio</a> to check for abdominal fat.',
            }
        },
        {
            '@type': 'Question',
            name: 'How do I lower my obesity risk?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Lowering your risk involves losing excess body fat. This is achieved by creating a sustainable <a href="/calorie-deficit" aria-label="Calorie Deficit Calculator">calorie deficit</a> through a combination of diet and exercise. Our <a href="/tdee" aria-label="TDEE Calculator">TDEE Calculator</a> can help you find the right calorie target.',
            }
        },
        {
            '@type': 'Question',
            name: 'Is it better to lose weight quickly or slowly?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Slow and steady weight loss of 1-2 lbs per week is almost always better. It helps preserve muscle mass and is more sustainable long-term. You can plan your timeline with our <a href="/weight-loss-goal" aria-label="Weight Loss Goal Calculator">Weight Loss Goal Calculator</a>.',
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
              <BreadcrumbPage>Obesity Risk Calculator</BreadcrumbPage>
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
                  Obesity Risk Calculator
                </h1>
                <p className="text-muted-foreground">
                  This calculator uses your Body Mass Index (BMI) to provide a quick assessment of your weight status and potential obesity-related health risks. For a complete picture, use it alongside the <Link href="/waist-to-height-ratio" className="text-primary hover:underline">Waist-to-Height Ratio</Link> and <Link href="/body-fat" className="text-primary hover:underline">Body Fat Percentage</Link> calculators.
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <ObesityRiskCalculatorForm />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>How to Use the Obesity Risk Calculator</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>This tool provides a straightforward risk classification based on the widely-used BMI metric.</p>
            <ol className="list-decimal list-inside space-y-2">
              <li><strong>Enter Your Height and Weight:</strong> Input your current height and weight into the form. The data from our <Link href="/bmi" className="text-primary hover:underline">BMI Calculator</Link> will be used if available.</li>
              <li><strong>Calculate Your BMI:</strong> The calculator first computes your BMI score behind the scenes.</li>
              <li><strong>View Your Risk Category:</strong> Based on the BMI result, your obesity risk level will be displayed according to World Health Organization (WHO) standards.</li>
            </ol>
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
                  <TableHead>Example 1 (Overweight)</TableHead>
                  <TableHead>Example 2 (Obese Class II)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow><TableCell>Height</TableCell><TableCell>175 cm</TableCell><TableCell>160 cm</TableCell></TableRow>
                <TableRow><TableCell>Weight</TableCell><TableCell>88 kg</TableCell><TableCell>95 kg</TableCell></TableRow>
                <TableRow><TableCell className="font-bold">Calculated BMI</TableCell><TableCell className="font-bold">28.7</TableCell><TableCell className="font-bold">37.1</TableCell></TableRow>
                <TableRow><TableCell className="font-bold">Risk Category</TableCell><TableCell className="font-bold">Overweight (Pre-obese)</TableCell><TableCell className="font-bold">Obese Class II (High Risk)</TableCell></TableRow>
                <TableRow>
                  <TableCell>Interpretation &amp; Next Step</TableCell>
                  <TableCell>This person is in the "Overweight" category, which indicates an increased risk. A good next step is to use the <Link href="/calorie-deficit" className="text-primary hover:underline">Calorie Deficit Calculator</Link> to plan a sustainable fat loss strategy.</TableCell>
                  <TableCell>A BMI over 35 signifies a high risk for related health conditions. This individual should consult a healthcare professional and use the <Link href="/weight-loss-goal" className="text-primary hover:underline">Weight Loss Goal Calculator</Link> to create a safe, long-term plan.</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Understanding Obesity Risk and BMI</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <h3 className="font-semibold text-lg text-foreground">What is Obesity?</h3>
            <p>Obesity is a medical condition characterized by an excess accumulation of body fat that presents a risk to health. It is a major risk factor for numerous chronic diseases, including type 2 diabetes, cardiovascular disease, hypertension, and certain cancers. The World Health Organization (WHO) has classified it as a global epidemic.</p>
            <p>The most common tool for screening for obesity is the Body Mass Index (BMI), which is a simple ratio of weight to height. While it's not a perfect measure—as it can't distinguish between fat and muscle—it is a valuable and easy-to-use starting point for assessing potential health risks related to body weight.</p>
            
            <h3 className="font-semibold text-lg text-foreground">BMI-Based Obesity Classification (WHO)</h3>
            <Table>
              <TableHeader>
                <TableRow><TableHead>Classification</TableHead><TableHead>BMI (kg/m²)</TableHead><TableHead>Health Risk</TableHead></TableRow>
              </TableHeader>
              <TableBody>
                <TableRow><TableCell>Underweight</TableCell><TableCell>&lt; 18.5</TableCell><TableCell>Low (but risk of other issues)</TableCell></TableRow>
                <TableRow><TableCell>Normal range</TableCell><TableCell>18.5 – 24.9</TableCell><TableCell>Least risk</TableCell></TableRow>
                <TableRow><TableCell>Overweight</TableCell><TableCell>25.0 – 29.9</TableCell><TableCell>Increased</TableCell></TableRow>
                <TableRow><TableCell>Obese Class I</TableCell><TableCell>30.0 – 34.9</TableCell><TableCell>Moderate</TableCell></TableRow>
                <TableRow><TableCell>Obese Class II</TableCell><TableCell>35.0 – 39.9</TableCell><TableCell>High</TableCell></TableRow>
                <TableRow><TableCell>Obese Class III</TableCell><TableCell>≥ 40.0</TableCell><TableCell>Very High</TableCell></TableRow>
              </TableBody>
            </Table>

            <h3 className="font-semibold text-lg text-foreground mt-4">Beyond BMI: Why Body Composition Matters</h3>
            <p>A high BMI is a red flag, but it's not a diagnosis. The real health risks of obesity come from excess body fat, not weight itself. An athlete may have a high BMI due to muscle mass, which you can assess with the <Link href="/ffmi" className="text-primary hover:underline">FFMI Calculator</Link>. This is why it's critical to use BMI as a starting point, then investigate further with more advanced tools.</p>
            <p>The <Link href="/waist-to-height-ratio" className="text-primary hover:underline">Waist-to-Height Ratio</Link> and <Link href="/waist-to-hip-ratio" className="text-primary hover:underline">Waist-to-Hip Ratio</Link> calculators are excellent next steps, as they assess central adiposity (belly fat), which is a much stronger predictor of metabolic disease than BMI alone.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Common Mistakes</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>Relying on BMI Alone:</strong> The biggest mistake is treating BMI as a final diagnosis. An athlete with high muscle mass can be classified as "overweight" but be metabolically healthy. Always combine BMI with a <Link href="/body-fat" className="text-primary hover:underline">Body Fat Percentage</Link> assessment.</li>
              <li><strong>Ignoring Small Changes:</strong> A small increase in BMI over a year might seem insignificant, but it can signal a trend towards an unhealthy weight. Tracking changes over time is crucial.</li>
              <li><strong>Unrealistic Goals:</strong> Seeing a high BMI and immediately aiming for a crash diet is counterproductive. Use the <Link href="/weight-loss-goal" className="text-primary hover:underline">Weight Loss Goal Calculator</Link> to set a sustainable, long-term plan.</li>
              <li><strong>Forgetting About NEAT:</strong> Your Non-Exercise Activity Thermogenesis (daily movement outside of formal exercise) plays a huge role in your <Link href="/tdee" className="text-primary hover:underline">TDEE</Link>. Increasing daily steps can significantly help in managing weight.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Pro Tips &amp; Quick Hacks</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>Focus on Trends, Not Single Numbers:</strong> Track your BMI monthly to see the long-term trend rather than getting discouraged by short-term fluctuations.</li>
              <li><strong>Prioritize Protein and Strength Training:</strong> To improve body composition, focus on eating adequate protein and engaging in resistance training. This helps build muscle, which boosts your metabolism.</li>
              <li><strong>Increase Daily Steps:</strong> Aim for 7,000-10,000 steps per day. It’s a simple, low-impact way to increase your calorie expenditure.</li>
              <li><strong>Eat Whole Foods:</strong> A diet rich in whole, unprocessed foods (vegetables, fruits, lean proteins) is more satiating and nutrient-dense, making it easier to manage calorie intake.</li>
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
                <AccordionTrigger>Why does this calculator use BMI?</AccordionTrigger>
                <AccordionContent>This calculator uses BMI as it is the most widely accepted screening tool for assessing weight status and obesity risk at a population level. While it has limitations, it provides a quick and easy starting point. For a more nuanced view, you should also check your <Link href="/body-fat" className='text-primary hover:underline'>Body Fat Percentage</Link>.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>What does "obese" mean in a clinical sense?</AccordionTrigger>
                <AccordionContent>Clinically, obesity is defined as having excess body fat to the extent that it may have a negative effect on health. The <Link href="/bmi" className='text-primary hover:underline'>BMI Calculator</Link> classifies a BMI of 30 or greater as obese, which is associated with a higher risk for many chronic diseases.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Can I be "overweight" but still healthy?</AccordionTrigger>
                <AccordionContent>Yes, particularly if you have a lot of muscle mass. This is why it's crucial to look beyond a single metric. If your BMI is high, your next step should be to use the <Link href="/ffmi" className='text-primary hover:underline'>FFMI Calculator</Link> to assess your muscularity or the <Link href="/waist-to-height-ratio" className='text-primary hover:underline'>Waist-to-Height Ratio</Link> to check for abdominal fat.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>How do I lower my obesity risk?</AccordionTrigger>
                <AccordionContent>Lowering your risk involves losing excess body fat. This is achieved by creating a sustainable <Link href="/calorie-deficit" className='text-primary hover:underline'>calorie deficit</Link> through a combination of diet and exercise. Our <Link href="/tdee" className='text-primary hover:underline'>TDEE Calculator</Link> can help you find the right calorie target.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Is it better to lose weight quickly or slowly?</AccordionTrigger>
                <AccordionContent>Slow and steady weight loss of 1-2 lbs per week is almost always better. It helps preserve muscle mass and is more sustainable long-term. You can plan your timeline with our <Link href="/weight-loss-goal" className='text-primary hover:underline'>Weight Loss Goal Calculator</Link>.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Real-Life Applications</CardTitle>
          </CardHeader>
          <CardContent>
             <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Audience</TableHead>
                  <TableHead>Use Case</TableHead>
                  <TableHead>Next Step (Tool)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                 <TableRow>
                  <TableCell>Medical Professionals</TableCell>
                  <TableCell>Quickly screen patients for weight-related health risks during check-ups.</TableCell>
                  <TableCell><Link href="/waist-to-height-ratio" className="text-primary hover:underline">Waist-to-Height Ratio</Link></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>General Users</TableCell>
                  <TableCell>Get a simple, initial assessment of their weight status to decide if lifestyle changes are needed.</TableCell>
                  <TableCell><Link href="/tdee" className="text-primary hover:underline">TDEE Calculator</Link></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Fitness Coaches</TableCell>
                  <TableCell>Use BMI as a starting data point for new clients, before diving into more detailed body composition metrics.</TableCell>
                  <TableCell><Link href="/body-fat" className="text-primary hover:underline">Body Fat % Calculator</Link></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Related Calculators</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/bmi" className="p-4 border rounded-lg hover:bg-muted"><h3 className="font-semibold">BMI Calculator</h3><p className="text-sm text-muted-foreground">The foundational tool for this risk assessment.</p></Link>
            <Link href="/body-fat" className="p-4 border rounded-lg hover:bg-muted"><h3 className="font-semibold">Body Fat Percentage</h3><p className="text-sm text-muted-foreground">Understand your body composition, which is more important than weight alone.</p></Link>
            <Link href="/tdee" className="p-4 border rounded-lg hover:bg-muted"><h3 className="font-semibold">TDEE Calculator</h3><p className="text-sm text-muted-foreground">Determine the daily calorie intake needed to start reducing your risk.</p></Link>
            <Link href="/waist-to-height-ratio" className="p-4 border rounded-lg hover:bg-muted"><h3 className="font-semibold">Waist-to-Height Ratio</h3><p className="text-sm text-muted-foreground">Use a superior metric to assess central obesity risk.</p></Link>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
