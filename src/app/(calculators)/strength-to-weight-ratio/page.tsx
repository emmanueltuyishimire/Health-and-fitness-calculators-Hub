
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

  const howToJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Calculate Your Strength-to-Weight Ratio',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Enter Body Weight',
        text: 'Input your current body weight.',
      },
      {
        '@type': 'HowToStep',
        name: 'Enter Weight Lifted',
        text: 'Input the weight you lifted for a specific exercise. For best results, use your one-rep max, which can be estimated with our 1RM Calculator.',
        url: '/one-rep-max'
      },
      {
        '@type': 'HowToStep',
        name: 'Calculate Ratio',
        text: 'Click the "Calculate Ratio" button to see your result, which is the weight lifted divided by your body weight.',
      },
    ],
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is a good strength-to-weight ratio?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A "good" ratio depends on the exercise. For squats, an intermediate male lifter might aim for 1.5x body weight, while for bench press, 1.25x is a strong goal. This calculator provides a general benchmark table to help you see where you stand.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why is this ratio important for athletes?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'In sports where you move your own body (like gymnastics, climbing, or running), having high strength relative to your weight is a huge advantage. It indicates greater efficiency and power. It provides a better performance metric than just knowing your <a href="/one-rep-max">1RM</a> in isolation.',
        },
      },
      {
        '@type': 'Question',
        name: 'How can I improve my strength-to-weight ratio?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You have two main options: increase your strength (get stronger at the same weight) or decrease your body weight while maintaining strength (lose fat). A combination of both is often most effective. Use the <a href="/ffmi">FFMI Calculator</a> to track muscle gains and the <a href="/calorie-deficit">Calorie Deficit Calculator</a> to plan fat loss.',
        },
      },
      {
        '@type': 'Question',
        name: 'Should I use my 1RM for the "weight lifted"?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, for the most accurate and standardized comparison, you should use your estimated one-rep max (1RM). You can calculate it easily and safely using our <a href="/one-rep-max">1RM Calculator</a>.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does a higher ratio always mean better performance?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Not always. In sports like powerlifting, absolute strength (the total weight lifted) is what matters. However, for most general fitness and athletic purposes, a higher strength-to-weight ratio is an excellent indicator of functional, real-world strength.',
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
            <p>Absolute strength is the maximum force you can exert (your <Link href="/one-rep-max" className="text-primary hover:underline">1RM</Link>). While impressive, it doesn't tell the whole story. A 300 lb person lifting 350 lbs is less impressive, pound-for-pound, than a 150 lb person lifting 300 lbs.</p>
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

        <Card>
          <CardHeader>
            <CardTitle>Common Mistakes</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>Comparing Different Lifts:</strong> Your bench press ratio will naturally be lower than your deadlift ratio. Only compare your ratio for the same exercise over time.</li>
              <li><strong>Not Using Your 1RM:</strong> Using a 5-rep weight will give you a much lower ratio than your actual max. For accurate benchmarking, always use your estimated <Link href="/one-rep-max" className="text-primary hover:underline">1RM</Link>.</li>
              <li><strong>Ignoring Form:</strong> A lift performed with poor technique doesn't count. Only use weights that you can lift with good form.</li>
              <li><strong>Forgetting About Body Composition:</strong> A higher ratio is great, but it's most impressive when achieved at a healthy body fat percentage. Track your body composition with the <Link href="/body-fat" className="text-primary hover:underline">Body Fat Calculator</Link>.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Pro Tips & Quick Hacks</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>Two Paths to Improvement:</strong> To boost your ratio, you can either increase strength or decrease body weight (by losing fat). A body recomposition phase is ideal for this.</li>
              <li><strong>Track Over Time:</strong> Calculate your SWR for your main lifts every 4-8 weeks. A rising ratio is a clear sign that your training program is effective.</li>
              <li><strong>Use it as a Motivator:</strong> Aiming to squat 2x your body weight can be a more tangible and motivating goal than an abstract weight number.</li>
              <li><strong>Fuel Your Strength:</strong> To get stronger, you need to eat enough. Make sure you're getting adequate calories and protein by using the <Link href="/daily-calorie-needs" className="text-primary hover:underline">Daily Calorie Needs</Link> and <Link href="/protein-intake" className="text-primary hover:underline">Protein Intake</Link> calculators.</li>
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
                <AccordionTrigger>What is a good strength-to-weight ratio?</AccordionTrigger>
                <AccordionContent>A "good" ratio depends on the exercise. For squats, an intermediate male lifter might aim for 1.5x body weight, while for bench press, 1.25x is a strong goal. This calculator provides a general benchmark table to help you see where you stand.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Why is this ratio important for athletes?</AccordionTrigger>
                <AccordionContent>In sports where you move your own body (like gymnastics, climbing, or running), having high strength relative to your weight is a huge advantage. It indicates greater efficiency and power. It provides a better performance metric than just knowing your <Link href="/one-rep-max" className="text-primary hover:underline">1RM</Link> in isolation.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>How can I improve my strength-to-weight ratio?</AccordionTrigger>
                <AccordionContent>You have two main options: increase your strength (get stronger at the same weight) or decrease your body weight while maintaining strength (lose fat). A combination of both is often most effective. Use the <Link href="/ffmi" className="text-primary hover:underline">FFMI Calculator</Link> to track muscle gains and the <Link href="/calorie-deficit" className="text-primary hover:underline">Calorie Deficit Calculator</Link> to plan fat loss.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Should I use my 1RM for the "weight lifted"?</AccordionTrigger>
                <AccordionContent>Yes, for the most accurate and standardized comparison, you should use your estimated one-rep max (1RM). You can calculate it easily and safely using our <Link href="/one-rep-max" className="text-primary hover:underline">1RM Calculator</Link>.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Does a higher ratio always mean better performance?</AccordionTrigger>
                <AccordionContent>Not always. In sports like powerlifting, absolute strength (the total weight lifted) is what matters. However, for most general fitness and athletic purposes, a higher strength-to-weight ratio is an excellent indicator of functional, real-world strength.</AccordionContent>
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
                  <TableCell>Bodyweight Athletes</TableCell>
                  <TableCell>Track progress in functional strength for gymnastics, calisthenics, or climbing.</TableCell>
                  <TableCell><Link href="/ffmi" className="text-primary hover:underline">FFMI Calculator</Link></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Weightlifters</TableCell>
                  <TableCell>Benchmark strength against others in the same weight class.</TableCell>
                  <TableCell><Link href="/one-rep-max" className="text-primary hover:underline">1RM Calculator</Link></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>General Fitness Enthusiasts</TableCell>
                  <TableCell>Set meaningful strength goals, like "bench press 1.5x my body weight".</TableCell>
                  <TableCell><Link href="/calorie-surplus" className="text-primary hover:underline">Calorie Surplus</Link></TableCell>
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
            <Link href="/one-rep-max" className="p-4 border rounded-lg hover:bg-muted">
              <h3 className="font-semibold">One Rep Max (1RM) Calculator</h3>
              <p className="text-sm text-muted-foreground">The essential first step. Get the estimated 1RM needed for this calculation.</p>
            </Link>
            <Link href="/ffmi" className="p-4 border rounded-lg hover:bg-muted">
              <h3 className="font-semibold">FFMI Calculator</h3>
              <p className="text-sm text-muted-foreground">Track if your strength gains are translating to more muscle mass.</p>
            </Link>
            <Link href="/body-fat" className="p-4 border rounded-lg hover:bg-muted">
              <h3 className="font-semibold">Body Fat Percentage Calculator</h3>
              <p className="text-sm text-muted-foreground">Monitor your body fat to improve your ratio by getting leaner.</p>
            </Link>
            <Link href="/daily-calorie-needs" className="p-4 border rounded-lg hover:bg-muted">
              <h3 className="font-semibold">Daily Calorie Needs Calculator</h3>
              <p className="text-sm text-muted-foreground">Ensure you're eating the right amount to fuel your strength goals.</p>
            </Link>
          </CardContent>
        </Card>

      </div>
    </>
  );
}
