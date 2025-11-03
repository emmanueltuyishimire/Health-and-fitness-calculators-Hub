
import type { Metadata } from 'next';
import Link from 'next/link';
import { TrendingUp } from 'lucide-react';
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
import { CalorieSurplusCalculatorForm } from '@/components/calorie-surplus-calculator-form';

export const metadata: Metadata = {
  title: 'Calorie Surplus Calculator – Plan Your Muscle Gain',
  description:
    'Calculate your ideal calorie surplus for lean muscle gain. Understand how to set safe and effective calorie targets based on your TDEE to build mass while minimizing fat gain.',
  openGraph: {
    title: 'Calorie Surplus Calculator – Plan Your Muscle Gain',
    description:
      'Calculate your ideal calorie surplus for lean muscle gain. Understand how to set safe and effective calorie targets based on your TDEE to build mass while minimizing fat gain.',
    type: 'website',
  },
};

export default function CalorieSurplusPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Calorie Surplus Calculator',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
    },
    description:
      'A free web-based calculator to determine calorie surplus targets for weight gain, based on TDEE.',
  };

  const howToJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Calculate Your Calorie Surplus',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Determine Your TDEE',
        text: 'First, calculate your Total Daily Energy Expenditure using our TDEE Calculator. This is your maintenance calorie level.',
        url: '/tdee'
      },
      {
        '@type': 'HowToStep',
        name: 'Choose Your Surplus',
        text: 'Select a surplus goal. A 10-20% surplus is recommended for lean muscle gain.',
      },
      {
        '@type': 'HowToStep',
        name: 'Calculate Your Target',
        text: 'The calculator adds the surplus to your TDEE to give you a daily calorie target for weight gain.',
      },
    ],
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is a calorie surplus?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A calorie surplus is when you consume more calories than your body expends. This is necessary for gaining weight, ideally muscle mass. Your total expenditure is your <a href="/tdee">TDEE</a>.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is a safe calorie surplus for lean muscle gain?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A safe and effective surplus is typically 10-20% above your TDEE, which is about 250-500 calories per day. This promotes muscle growth while minimizing fat gain. Track your progress with the <a href="/ffmi">FFMI Calculator</a>.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much weight can I gain with a 500-calorie surplus?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A 500-calorie daily surplus creates a 3500-calorie weekly surplus, which leads to a gain of about 1 pound per week. Not all of this will be muscle, but a significant portion can be with proper training.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why is a small surplus better for "clean bulking"?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A small, controlled surplus (lean bulking) helps maximize the ratio of muscle to fat gained. A huge surplus will lead to rapid weight gain, but a much larger portion of it will be fat, which you can monitor with the <a href="/body-fat">Body Fat Percentage Calculator</a>.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why do I need my TDEE before using this calculator?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Your <a href="/tdee">TDEE</a> is your maintenance calorie level. A surplus must be calculated *from* this number. Without knowing your TDEE, you cannot accurately plan a muscle-building phase.',
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
              <BreadcrumbPage>Calorie Surplus Calculator</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <Card>
          <CardHeader>
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 text-primary p-3 rounded-lg">
                <TrendingUp className="h-8 w-8" />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold">
                  Calorie Surplus Calculator
                </h1>
                <p className="text-muted-foreground">
                  To build muscle, you need a calorie surplus. This tool helps you set a controlled daily calorie target for lean gains. First, ensure you have your maintenance calories from the <Link href="/tdee" className="text-primary hover:underline">TDEE Calculator</Link>.
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <CalorieSurplusCalculatorForm />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>How to Use the Calorie Surplus Calculator</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              This calculator makes it easy to plan your muscle-building phase by turning your TDEE into an actionable daily calorie goal.
            </p>
            <ol className="list-decimal list-inside space-y-2">
              <li><strong>Get Your TDEE:</strong> First, visit our <Link href="/tdee" className="text-primary hover:underline">TDEE Calculator</Link> to find your daily maintenance calories. This value is the foundation.</li>
              <li><strong>Enter Your TDEE:</strong> If not auto-filled, enter your maintenance calories into the form.</li>
              <li><strong>Choose Your Goal:</strong> Select how aggressively you want to gain weight. A "Mild" or "Standard" surplus is best for lean gains.</li>
              <li><strong>Calculate Your Target:</strong> The calculator will show you your precise daily calorie intake to achieve your desired rate of weight gain.</li>
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
                  <TableHead>Example 1 (Lean Bulk)</TableHead>
                  <TableHead>Example 2 (Standard Bulk)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>TDEE (Maintenance Calories)</TableCell>
                  <TableCell>2500 kcal/day</TableCell>
                  <TableCell>3000 kcal/day</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Chosen Surplus</TableCell>
                  <TableCell>Mild (10%)</TableCell>
                  <TableCell>Standard (15%)</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-bold">Daily Calorie Target</TableCell>
                  <TableCell className="font-bold">2750 kcal/day</TableCell>
                  <TableCell className="font-bold">3450 kcal/day</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Expected Weekly Gain</TableCell>
                  <TableCell>~0.5 lb/week</TableCell>
                  <TableCell>~0.9 lb/week</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Interpretation</TableCell>
                  <TableCell>A slow, controlled "lean bulk" to maximize muscle gain while minimizing fat. Progress should be tracked with the <Link href="/ffmi" className="text-primary hover:underline">FFMI Calculator</Link>.</TableCell>
                  <TableCell>A standard bulking phase for steady muscle and strength gains. This person should ensure they are lifting heavy and eating enough protein, calculated with the Protein Intake Calculator.</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Understanding the Calorie Surplus</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <h3 className="font-semibold text-lg text-foreground">Energy Balance for Muscle Growth</h3>
            <p>Just as weight loss requires a calorie deficit, weight gain requires a calorie surplus. This means consuming more energy (calories) than your body burns. This extra energy provides the fuel needed for muscle protein synthesis, the process of repairing and building new muscle tissue after resistance training.</p>
            <p>Your baseline energy need is your <Link href="/tdee" className="text-primary hover:underline">TDEE</Link>. This calculator helps you add a controlled surplus to that number. A surplus of 3,500 calories roughly equates to one pound of gained body weight.</p>

            <h3 className="font-semibold text-lg text-foreground">"Clean" vs. "Dirty" Bulking</h3>
            <p>The size of your surplus matters greatly. A "dirty bulk" involves eating a very large surplus, leading to rapid weight gain, but much of this weight will be body fat. A "clean bulk" or "lean bulk" uses a small, controlled surplus (10-20%) to promote muscle growth while minimizing fat gain. This is a much more efficient and healthier approach.</p>
            <p>A small surplus allows your body to direct the extra energy primarily towards muscle repair and growth, rather than storing it as fat. This leads to higher quality weight gain and means you'll have less fat to lose later. To ensure you're gaining quality mass, it's essential to track changes in your <Link href="/body-fat" className="text-primary hover:underline">Body Fat Percentage</Link> and <Link href="/lean-body-mass" className="text-primary hover:underline">Lean Body Mass</Link>.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Common Mistakes When Creating a Surplus</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>Being Too Aggressive:</strong> A huge surplus will lead to excessive fat gain, not more muscle. Stick to a 10-20% surplus for lean gains.</li>
              <li><strong>Not Eating Enough Protein:</strong> A surplus without enough protein means you're just gaining fat. Use a Protein Intake Calculator to find your target.</li>
              <li><strong>Not Training Hard Enough:</strong> A calorie surplus without a stimulus (resistance training) will result in fat storage. You must give your body a reason to build muscle.</li>
              <li><strong>"Dirty Bulking":</strong> Relying on junk food for calories leads to poor health, nutrient deficiencies, and excessive fat gain. Focus on calorie-dense whole foods.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Pro Tips & Quick Hacks</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>Focus on Calorie-Dense Foods:</strong> Nuts, seeds, healthy oils, avocados, and whole grains make it easier to reach your calorie target without feeling overly full.</li>
              <li><strong>Track Your Progress:</strong> Weigh yourself weekly and take measurements. If you're gaining much more than 1 lb per week, you may be gaining too much fat. Adjust your surplus from the <Link href="/tdee" className="text-primary hover:underline">TDEE Calculator</Link> down slightly.</li>
              <li><strong>Time Your Nutrients:</strong> Consuming a mix of protein and carbs around your workout can help with recovery and muscle growth.</li>
              <li><strong>Be Patient:</strong> Building muscle is a slow process. A realistic rate of muscle gain for most natural lifters is 0.25-0.5 lbs per week. Trust the process.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Frequently Asked Questions</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>What is a safe calorie surplus for lean muscle gain?</AccordionTrigger>
                <AccordionContent>A 10-20% surplus above your <Link href="/tdee" className="text-primary hover:underline">TDEE</Link> (about 250-500 calories) is ideal for maximizing muscle gain while minimizing fat gain.
</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>How much weight should I aim to gain per week?</AccordionTrigger>
                <AccordionContent>A goal of 0.5-1 pound per week is realistic and sustainable for most people. Gaining faster than this will likely result in significant fat accumulation.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Do I need to be in a surplus every single day?</AccordionTrigger>
                <AccordionContent>While consistency is key, your weekly average matters most. However, for muscle building, it's generally best to maintain a consistent daily surplus to provide a constant supply of nutrients for growth.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>What happens if I stop gaining weight?</AccordionTrigger>
                <AccordionContent>Your metabolism adapts. As you gain weight, your <Link href="/tdee" className="text-primary hover:underline">TDEE</Link> increases. You'll need to periodically recalculate your TDEE and adjust your surplus to continue gaining.</AccordionContent>
              </AccordionItem>
               <AccordionItem value="item-5">
                <AccordionTrigger>Can I build muscle without a calorie surplus?</AccordionTrigger>
                <AccordionContent>Beginners or those returning from a long break can sometimes build muscle while eating at maintenance (body recomposition), but for experienced lifters, a surplus is necessary for significant muscle growth. Track your muscularity with the <Link href="/ffmi" className="text-primary hover:underline">FFMI Calculator</Link> to see your progress.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        <Card>
            <CardHeader><CardTitle>Real-Life Applications</CardTitle></CardHeader>
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
                            <TableCell>Bodybuilders / Athletes</TableCell>
                            <TableCell>Plan a "bulking" phase to build muscle mass effectively.</TableCell>
                            <TableCell><Link href="/ffmi" className="text-primary hover:underline">FFMI Calculator</Link></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Underweight Individuals</TableCell>
                            <TableCell>Create a structured plan for healthy weight gain.</TableCell>
                             <TableCell><Link href="/ideal-weight" className="text-primary hover:underline">Ideal Weight Calculator</Link></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Fitness Enthusiasts</TableCell>
                            <TableCell>Fuel strength gains and improve workout performance.</TableCell>
                            <TableCell><Link href="/macronutrient-ratio" className="text-primary hover:underline">Macronutrient Ratio Calculator</Link></TableCell>
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
            <Link href="/tdee" className="p-4 border rounded-lg hover:bg-muted">
              <h3 className="font-semibold">TDEE Calculator</h3>
              <p className="text-sm text-muted-foreground">The essential first step. Find your maintenance calories here.</p>
            </Link>
            <Link href="/ffmi" className="p-4 border rounded-lg hover:bg-muted">
              <h3 className="font-semibold">FFMI Calculator</h3>
              <p className="text-sm text-muted-foreground">Track your muscle gain progress and assess your muscularity.</p>
            </Link>
            <Link href="/macronutrient-ratio" className="p-4 border rounded-lg hover:bg-muted">
              <h3 className="font-semibold">Macronutrient Ratio Calculator</h3>
              <p className="text-sm text-muted-foreground">Turn your calorie target into protein, carb, and fat goals.</p>
            </Link>
            <Link href="/protein-intake" className="p-4 border rounded-lg hover:bg-muted">
              <h3 className="font-semibold">Protein Intake Calculator</h3>
              <p className="text-sm text-muted-foreground">Ensure you're eating enough protein to support muscle growth.</p>
            </Link>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

    