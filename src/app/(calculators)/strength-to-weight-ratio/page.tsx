
import type { Metadata } from 'next';
import Link from 'next/link';
import { Medal } from 'lucide-react';
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
import { StrengthToWeightRatioCalculatorForm } from '@/components/strength-to-weight-ratio-calculator-form';

export const metadata: Metadata = {
  title: 'Strength-to-Weight Ratio Calculator',
  description:
    'Calculate your strength-to-weight ratio to benchmark your relative strength. Understand how you stack up and track your functional strength gains over time.',
  openGraph: {
    title: 'Strength-to-Weight Ratio Calculator',
    description:
      'Calculate your strength-to-weight ratio to benchmark your relative strength. Understand how you stack up and track your functional strength gains over time.',
    type: 'website',
  },
};

export default function StrengthToWeightRatioPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Strength-to-Weight Ratio Calculator',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
    },
    description:
      'A free web-based calculator to determine strength-to-weight ratio from body weight and weight lifted.',
  };
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
              <BreadcrumbPage>Strength-to-Weight Ratio</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <Card>
          <CardHeader>
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 text-primary p-3 rounded-lg">
                <Medal className="h-8 w-8" />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold">
                  Strength-to-Weight Ratio Calculator
                </h1>
                <p className="text-muted-foreground">
                  Measure your pound-for-pound strength. This ratio shows how strong you are relative to your body weight, a key indicator of functional fitness. For best results, use your <Link href="/one-rep-max" className="text-primary hover:underline">1RM</Link> for the weight lifted.
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <StrengthToWeightRatioCalculatorForm />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>How to Use the Strength-to-Weight Ratio Calculator</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              This calculator provides your strength ratio for a specific lift, helping you benchmark your performance.
            </p>
            <ol className="list-decimal list-inside space-y-2">
              <li><strong>Enter Your Body Weight:</strong> Input your current body weight.</li>
              <li><strong>Enter Weight Lifted:</strong> Input the amount of weight you lifted for a specific exercise. For the most meaningful result, this should be your one-rep max, which you can estimate with our <Link href="/one-rep-max" className="text-primary hover:underline">1RM Calculator</Link>.</li>
              <li><strong>Calculate Your Ratio:</strong> The tool will divide the weight lifted by your body weight to give you your ratio.</li>
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
                  <TableHead>Example (Bench Press)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Body Weight</TableCell>
                  <TableCell>180 lbs</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Weight Lifted (1RM)</TableCell>
                  <TableCell>225 lbs</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-bold">Strength-to-Weight Ratio</TableCell>
                  <TableCell className="font-bold">1.25</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Interpretation</TableCell>
                  <TableCell>This person can bench press 1.25 times their body weight. This is a good score for a non-elite lifter. To improve this, they could focus on a strength program and track their muscularity with the <Link href="/ffmi" className="text-primary hover:underline">FFMI Calculator</Link>.</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Understanding Strength-to-Weight Ratio</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <h3 className="font-semibold text-lg text-foreground">Why Relative Strength Matters</h3>
            <p>Absolute strength is the maximum force you can exert (your 1RM). While impressive, it doesn't tell the whole story. A 300 lb person lifting 350 lbs is less impressive, pound-for-pound, than a 150 lb person lifting 300 lbs.</p>
            <p>The Strength-to-Weight Ratio (SWR) measures your relative strength. It's calculated simply as:</p>
            <p className="font-mono text-center p-4 bg-muted rounded-md">SWR = Weight Lifted / Body Weight</p>
            <p>This ratio is crucial in sports where you have to move your own body, such as gymnastics, climbing, and sprinting. A high SWR indicates great functional strength and efficiency. For weightlifters, it's a way to benchmark progress even if body weight fluctuates.</p>
            
            <h3 className="font-semibold text-lg text-foreground">Benchmarking Your Performance</h3>
            <p>Here are some general SWR standards for major lifts for a male lifter. Female standards are typically about 20-25% lower.</p>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Lift</TableHead>
                  <TableHead>Novice</TableHead>
                  <TableHead>Intermediate</TableHead>
                  <TableHead>Advanced</TableHead>
                  <TableHead>Elite</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Squat</TableCell>
                  <TableCell>1.0 - 1.25x</TableCell>
                  <TableCell>1.5 - 1.75x</TableCell>
                  <TableCell>2.0 - 2.25x</TableCell>
                  <TableCell>2.5x +</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Bench Press</TableCell>
                  <TableCell>0.75 - 0.9x</TableCell>
                  <TableCell>1.0 - 1.25x</TableCell>
                  <TableCell>1.5 - 1.75x</TableCell>
                  <TableCell>2.0x +</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Deadlift</TableCell>
                  <TableCell>1.25 - 1.5x</TableCell>
                  <TableCell>1.75 - 2.0x</TableCell>
                  <TableCell>2.25 - 2.5x</TableCell>
                  <TableCell>2.75x +</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
