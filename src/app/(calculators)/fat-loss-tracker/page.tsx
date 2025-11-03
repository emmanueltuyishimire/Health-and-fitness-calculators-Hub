
import type { Metadata } from 'next';
import Link from 'next/link';
import { Target } from 'lucide-react';
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
import { FatLossTrackerForm } from '@/components/fat-loss-tracker-form';

export const metadata: Metadata = {
  title: 'Fat Loss Progress Tracker – Monitor Your Body Recomposition',
  description:
    'Track your fat loss progress accurately by monitoring changes in body weight, body fat percentage, lean body mass, and fat mass over time.',
  openGraph: {
    title: 'Fat Loss Progress Tracker – Monitor Your Body Recomposition',
    description:
      'Track your fat loss progress accurately by monitoring changes in body weight, body fat percentage, lean body mass, and fat mass over time.',
    type: 'website',
  },
};

export default function FatLossTrackerPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Fat Loss Progress Tracker',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
    },
    description:
      'A free web-based calculator to track body recomposition by analyzing changes in fat mass and lean body mass.',
  };

  const howToJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Track Your Fat Loss Progress',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Enter Starting & Current Stats',
        text: 'Input your starting and current weight and body fat percentage. You can get an estimate using our Body Fat Percentage Calculator.',
        url: '/body-fat'
      },
      {
        '@type': 'HowToStep',
        name: 'Calculate',
        text: 'The calculator will show you the total change in your weight, fat mass, lean mass, and body fat percentage.',
      },
    ],
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Why is tracking fat loss better than just tracking weight?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'This tracker shows you what your weight change is composed of. You might be losing weight, but is it fat or valuable muscle? This tool answers that question, providing a much clearer picture of your progress than the <a href="/weekly-weight-change-tracker">Weekly Weight Change Tracker</a> alone.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is body recomposition?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Body recomposition is the process of changing your body\'s ratio of fat to muscle—losing fat while gaining or maintaining muscle. This tool is designed to track exactly that. Even if your scale weight doesn\'t change much, your body composition can be improving significantly.',
        },
      },
      {
        '@type': 'Question',
        name: 'My lean body mass went down. Is that bad?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Losing a small amount of lean body mass during a diet is normal. However, if you are losing a lot of lean mass, it may be a sign that your calorie deficit is too large or your protein intake is too low. Re-evaluate your plan using the <a href="/calorie-adjustment-for-weight-loss">Calorie Adjustment for Weight Loss</a> and <a href="/protein-intake">Protein Intake Calculator</a>.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I get an accurate body fat percentage?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'For a consistent at-home estimate, use our <a href="/body-fat">Body Fat Percentage Calculator</a>. It\'s important to use the same measurement method every time you track your progress to ensure the data is comparable.',
        },
      },
      {
        '@type': 'Question',
        name: 'How often should I use this tracker?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Tracking your progress every 4-6 weeks is ideal. Body composition changes take time, so more frequent use may not show meaningful changes and could be demotivating.',
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
              <BreadcrumbPage>Fat Loss Progress Tracker</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <Card>
          <CardHeader>
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 text-primary p-3 rounded-lg">
                <Target className="h-8 w-8" />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold">
                  Fat Loss Progress Tracker
                </h1>
                <p className="text-muted-foreground">
                  Go beyond the scale. This tool helps you understand the quality of your weight change by tracking fat mass vs. lean body mass. First, get an estimate of your body fat with the <Link href="/body-fat" className="text-primary hover:underline">Body Fat Percentage Calculator</Link>.
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <FatLossTrackerForm />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>How to Use the Fat Loss Progress Tracker</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>This calculator provides a detailed analysis of your body recomposition progress over time.</p>
            <ol className="list-decimal list-inside space-y-2">
              <li><strong>Establish a Starting Point:</strong> Enter your initial weight and body fat percentage from the beginning of your fitness journey.</li>
              <li><strong>Enter Your Current Stats:</strong> Input your most recent weight and body fat percentage. Use a consistent method, like our <Link href="/body-fat" className="text-primary hover:underline">Body Fat Calculator</Link>, for best results.</li>
              <li><strong>Calculate Your Progress:</strong> The tool will break down your total weight change into fat mass and lean body mass, showing you what's really happening.</li>
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
                  <TableHead>Metric</TableHead>
                  <TableHead>Starting</TableHead>
                  <TableHead>Current</TableHead>
                  <TableHead>Change</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Weight</TableCell>
                  <TableCell>200 lbs</TableCell>
                  <TableCell>190 lbs</TableCell>
                  <TableCell className="font-semibold">-10 lbs</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Body Fat %</TableCell>
                  <TableCell>25%</TableCell>
                  <TableCell>20%</TableCell>
                  <TableCell className="font-semibold">-5.0%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Fat Mass</TableCell>
                  <TableCell>50 lbs</TableCell>
                  <TableCell>38 lbs</TableCell>
                  <TableCell className="font-semibold text-green-600">-12 lbs</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Lean Body Mass</TableCell>
                  <TableCell>150 lbs</TableCell>
                  <TableCell>152 lbs</TableCell>
                  <TableCell className="font-semibold text-green-600">+2 lbs</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Interpretation</TableCell>
                  <TableCell colSpan={3}>This user achieved excellent body recomposition. Although the scale shows only a 10 lb loss, they actually lost 12 lbs of fat and gained 2 lbs of lean mass. This is a highly successful outcome that a simple scale would not show.</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Understanding Body Recomposition</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <h3 className="font-semibold text-lg text-foreground">Why the Scale Lies</h3>
            <p>The scale only tells you one thing: your total gravitational pull. It cannot distinguish between fat, muscle, water, or the food in your stomach. Relying solely on the scale can be misleading and demotivating. You might be losing fat and gaining muscle simultaneously, but the scale might not budge, leading you to believe your plan isn't working.</p>
            <p>This tracker solves that problem. By incorporating your <Link href="/body-fat" className="text-primary hover:underline">Body Fat Percentage</Link>, it breaks down your weight change into its core components: fat mass and lean body mass. This allows you to see the true impact of your diet and training.</p>
            
            <h3 className="font-semibold text-lg text-foreground">The Goal: Preserve Muscle, Lose Fat</h3>
            <p>During a weight loss phase, the primary goal should always be to lose as much fat as possible while preserving (or even gaining) lean body mass. Lean mass is your metabolic engine; losing it will lower your <Link href="/bmr" className="text-primary hover:underline">BMR</Link> and make long-term weight maintenance harder. To preserve muscle during a diet:</p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Maintain a Moderate Deficit:</strong> A huge calorie deficit can cause muscle loss. Use the <Link href="/calorie-adjustment-for-weight-loss" className="text-primary hover:underline">Calorie Adjustment for Weight Loss</Link> to set a sustainable target.</li>
              <li><strong>Prioritize Protein:</strong> Eating enough protein provides the building blocks to repair and maintain muscle tissue.</li>
              <li><strong>Continue Resistance Training:</strong> Lifting weights signals to your body that your muscle is needed and should be preserved.</li>
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
                <AccordionTrigger>Why is tracking fat loss better than just tracking weight?</AccordionTrigger>
                <AccordionContent>This tracker shows what your weight change is made of. Losing weight could mean losing valuable muscle. This tool clarifies if you're losing fat, which is the real goal. It's more insightful than the <a href="/weekly-weight-change-tracker">Weekly Weight Change Tracker</a> alone.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>What is body recomposition?</AccordionTrigger>
                <AccordionContent>It's changing your body's fat-to-muscle ratio—losing fat while gaining or maintaining muscle. This tool is perfect for tracking this process, as your scale weight might not change much even as your body improves.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>My lean body mass went down. Is that bad?</AccordionTrigger>
                <AccordionContent>Losing a small amount of lean mass in a diet is normal. However, significant loss suggests your calorie deficit is too large or protein is too low. Re-evaluate with the <a href="/calorie-adjustment-for-weight-loss">Calorie Adjustment for Weight Loss</a> and <a href="/protein-intake">Protein Intake Calculator</a>.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>How do I get an accurate body fat percentage?</AccordionTrigger>
                <AccordionContent>For consistency, use our <a href="/body-fat">Body Fat Percentage Calculator</a> each time. Using the same method is crucial for comparable data.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>How often should I use this tracker?</AccordionTrigger>
                <AccordionContent>Every 4-6 weeks is ideal. Body composition changes slowly, so tracking too often may not show meaningful progress and can be discouraging.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

      </div>
    </>
  );
}
