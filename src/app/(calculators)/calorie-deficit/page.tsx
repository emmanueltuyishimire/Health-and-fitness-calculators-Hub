
import type { Metadata } from 'next';
import Link from 'next/link';
import { TrendingDown } from 'lucide-react';
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
import { CalorieDeficitCalculatorForm } from '@/components/calorie-deficit-calculator-form';

export const metadata: Metadata = {
  title: 'Calorie Deficit Calculator – Plan Your Weight Loss',
  description:
    'Calculate your ideal calorie deficit for sustainable weight loss. Understand how to set safe and effective calorie targets based on your TDEE without sacrificing muscle mass or energy.',
  openGraph: {
    title: 'Calorie Deficit Calculator – Plan Your Weight Loss',
    description:
      'Calculate your ideal calorie deficit for sustainable weight loss. Understand how to set safe and effective calorie targets based on your TDEE without sacrificing muscle mass or energy.',
    type: 'website',
  },
};

export default function CalorieDeficitPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Calorie Deficit Calculator',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
    },
    description:
      'A free web-based calculator to determine calorie deficit targets for weight loss based on TDEE.',
  };

  const howToJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Calculate Your Calorie Deficit',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Determine Your TDEE',
        text: 'First, calculate your Total Daily Energy Expenditure using our TDEE Calculator. This is your maintenance calorie level.',
        url: '/tdee'
      },
      {
        '@type': 'HowToStep',
        name: 'Choose Your Deficit',
        text: 'Select a deficit goal. A 10-20% deficit is recommended for sustainable fat loss.',
      },
      {
        '@type': 'HowToStep',
        name: 'Calculate Your Target',
        text: 'The calculator subtracts the deficit from your TDEE to give you a daily calorie target for weight loss.',
      },
    ],
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is a calorie deficit?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A calorie deficit is a state in which you consume fewer calories than your body expends. This is the fundamental requirement for weight loss. Your total expenditure is calculated by our <a href="/tdee">TDEE Calculator</a>.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is a safe calorie deficit for weight loss?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A safe and sustainable deficit is typically 10-20% below your TDEE, which usually equates to about 250-500 calories per day. This allows for fat loss while minimizing muscle loss and fatigue. A larger deficit may not be healthy.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much weight can I lose with a 500-calorie deficit?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A 500-calorie daily deficit creates a 3500-calorie weekly deficit, which is roughly equivalent to 1 pound of fat loss per week. This is a widely recommended rate. The <a href="/tdee">TDEE Calculator</a> provides targets for this goal.',
        },
      },
      {
        '@type': 'Question',
        name: 'Should I eat below my BMR?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'It is generally not recommended to eat below your <a href="/bmr">Basal Metabolic Rate (BMR)</a> for extended periods. Your BMR represents the calories needed for basic survival. A diet below BMR can lead to metabolic slowdown and nutrient deficiencies.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why do I need my TDEE before using this calculator?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Your <a href="/tdee">TDEE</a> is your maintenance calorie level. A deficit must be calculated *from* this number. Without knowing your TDEE, any deficit is just a guess and will likely be ineffective or unsustainable.',
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
              <BreadcrumbPage>Calorie Deficit Calculator</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <Card>
          <CardHeader>
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 text-primary p-3 rounded-lg">
                <TrendingDown className="h-8 w-8" />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold">
                  Calorie Deficit Calculator
                </h1>
                <p className="text-muted-foreground">
                  The most critical step for weight loss is creating a calorie deficit. This tool helps you set a safe and effective daily calorie target. First, ensure you have your maintenance calories from the <Link href="/tdee" className="text-primary hover:underline">TDEE Calculator</Link>.
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <CalorieDeficitCalculatorForm />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>How to Use the Calorie Deficit Calculator</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              This calculator makes it easy to plan your weight loss by turning your TDEE into an actionable daily calorie goal.
            </p>
            <ol className="list-decimal list-inside space-y-2">
              <li><strong>Get Your TDEE:</strong> First, visit our <Link href="/tdee" className="text-primary hover:underline">TDEE Calculator</Link> to find your daily maintenance calories. This value will be auto-filled for you.</li>
              <li><strong>Enter Your TDEE:</strong> If not auto-filled, enter your maintenance calories into the form.</li>
              <li><strong>Choose Your Goal:</strong> Select how aggressively you want to lose weight. A "Mild" or "Standard" deficit is recommended for sustainability.</li>
              <li><strong>Calculate Your Target:</strong> The calculator will show you your precise daily calorie intake to achieve your desired rate of weight loss.</li>
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
                  <TableHead>Example 1 (Mild Deficit)</TableHead>
                  <TableHead>Example 2 (Standard Deficit)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>TDEE (Maintenance Calories)</TableCell>
                  <TableCell>2400 kcal/day</TableCell>
                  <TableCell>2100 kcal/day</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Chosen Deficit</TableCell>
                  <TableCell>Mild (10%)</TableCell>
                  <TableCell>Standard (15%)</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-bold">Daily Calorie Target</TableCell>
                  <TableCell className="font-bold">2160 kcal/day</TableCell>
                  <TableCell className="font-bold">1785 kcal/day</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Expected Weekly Loss</TableCell>
                  <TableCell>~0.5 lb/week</TableCell>
                  <TableCell>~0.9 lb/week</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Interpretation</TableCell>
                  <TableCell>A slow and highly sustainable rate of weight loss, ideal for preserving muscle and energy levels. Best paired with tracking from the <Link href="/ffmi" className="text-primary hover:underline">FFMI Calculator</Link>.</TableCell>
                  <TableCell>A standard, effective rate of weight loss. This person should ensure adequate protein intake to protect their <Link href="/lean-body-mass" className="text-primary hover:underline">Lean Body Mass</Link>.</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Understanding the Calorie Deficit</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <h3 className="font-semibold text-lg text-foreground">The Science of Energy Balance</h3>
            <p>Weight loss follows the first law of thermodynamics: energy cannot be created or destroyed. When you provide your body with less energy (calories) than it uses, it must get the missing energy from its stored reserves—primarily body fat. This is what's known as a calorie deficit.</p>
            <p>Your total daily energy needs are calculated by the <Link href="/tdee" className="text-primary hover:underline">TDEE Calculator</Link>. This calculator takes that TDEE value and helps you create a deficit in a controlled, predictable way. A deficit of 3,500 calories is approximately equal to one pound of body fat.</p>

            <h3 className="font-semibold text-lg text-foreground">Why a Moderate Deficit is Key</h3>
            <p>While it might be tempting to create a huge deficit for faster results, this often backfires. A very aggressive deficit can lead to:</p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Muscle Loss:</strong> Your body may break down metabolically active muscle tissue for energy, which lowers your <Link href="/bmr" className="text-primary hover:underline">BMR</Link>.</li>
              <li><strong>Metabolic Adaptation:</strong> Your metabolism can slow down to conserve energy, making further weight loss harder.</li>
              <li><strong>Nutrient Deficiencies:</strong> It's difficult to get all essential vitamins and minerals on very low calories.</li>
              <li><strong>Fatigue and Poor Performance:</strong> Lack of energy can impact your workouts and daily life.</li>
            </ul>
            <p>A modest deficit of 10-20% below your TDEE is the "sweet spot" for most people. It encourages the body to burn fat while preserving muscle mass, especially when combined with adequate protein intake and resistance training. This approach is more sustainable and leads to better long-term results.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Common Mistakes When Creating a Deficit</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>Being Too Aggressive:</strong> A massive deficit leads to muscle loss, nutrient deficiencies, and burnout. Start with a 10-15% deficit.</li>
              <li><strong>Forgetting Protein:</strong> Not eating enough protein during a deficit can accelerate muscle loss, which lowers your metabolism. Use the Protein Intake Calculator to find your target.</li>
              <li><strong>Not Adjusting TDEE:</strong> As you lose weight, your <Link href="/tdee" className="text-primary hover:underline">TDEE</Link> will decrease. You must recalculate it every 10-15 lbs to keep your deficit accurate.</li>
              <li><strong>Ignoring Food Quality:</strong> 500 calories of junk food is not the same as 500 calories of whole foods. Prioritize nutrient-dense foods for better health and satiety.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Pro Tips & Quick Hacks</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>Use Calorie Cycling:</strong> Eat in a larger deficit on rest days and a smaller deficit (or at maintenance) on training days to fuel performance.</li>
              <li><strong>Schedule Diet Breaks:</strong> After 8-12 weeks in a deficit, consider taking 1-2 weeks to eat at your maintenance TDEE. This can help normalize hormones and provide a psychological break.</li>
              <li><strong>Focus on High-Volume Foods:</strong> Vegetables, fruits, and lean proteins are less calorie-dense, allowing you to eat more food and feel fuller while staying in your deficit.</li>
              <li><strong>Stay Hydrated:</strong> Drinking plenty of water can help with satiety and overall metabolic function. Use the <Link href="/water-intake" className="text-primary hover:underline">Water Intake Calculator</Link> to find your target.</li>
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
                <AccordionTrigger>What is a safe calorie deficit?</AccordionTrigger>
                <AccordionContent>A safe deficit is typically 10-20% below your TDEE, or about 250-500 calories per day. This promotes fat loss while minimizing muscle loss. Use the <Link href="/tdee" className="text-primary hover:underline">TDEE Calculator</Link> to find your starting point.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>How much weight will I lose with a 500-calorie deficit?</AccordionTrigger>
                <AccordionContent>A 500-calorie daily deficit results in a 3,500-calorie weekly deficit, which corresponds to approximately 1 pound of fat loss per week.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Should I ever eat below my BMR?</AccordionTrigger>
                <AccordionContent>It's generally advised not to eat below your <Link href="/bmr" className="text-primary hover:underline">BMR</Link> for long periods. Your BMR is the energy your body needs for essential functions. A prolonged, extreme deficit can harm your metabolism.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Do I need to be in a deficit every day?</AccordionTrigger>
                <AccordionContent>The weekly average deficit is what matters most. Some people find success with "calorie cycling," where they eat at maintenance (TDEE) on workout days and in a larger deficit on rest days. Our <Link href="/tdee" className="text-primary hover:underline">TDEE Calculator</Link> helps you find your maintenance level.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>What happens if I stop losing weight?</AccordionTrigger>
                <AccordionContent>This is called a plateau. It's normal. It may happen because your TDEE has decreased as you've lost weight. It's time to recalculate your <Link href="/tdee" className="text-primary hover:underline">TDEE</Link> and adjust your deficit accordingly.</AccordionContent>
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
                  <TableCell>General Users</TableCell>
                  <TableCell>Create a simple, effective plan for steady weight loss.</TableCell>
                  <TableCell><Link href="/macronutrient-ratio" className="text-primary hover:underline">Macronutrient Ratio Calculator</Link></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Fitness Coaches</TableCell>
                  <TableCell>Set precise calorie targets for clients' fat loss phases.</TableCell>
                  <TableCell>Weekly Weight Change Tracker</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Bodybuilders</TableCell>
                  <TableCell>Plan a "cutting" phase to reduce body fat while preserving muscle.</TableCell>
                  <TableCell><Link href="/ffmi" className="text-primary hover:underline">FFMI Calculator</Link></TableCell>
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
            <Link href="/bmr" className="p-4 border rounded-lg hover:bg-muted">
              <h3 className="font-semibold">BMR Calculator</h3>
              <p className="text-sm text-muted-foreground">Understand your body's baseline calorie needs at rest.</p>
            </Link>
            <Link href="/macronutrient-ratio" className="p-4 border rounded-lg hover:bg-muted">
              <h3 className="font-semibold">Macronutrient Ratio Calculator</h3>
              <p className="text-sm text-muted-foreground">Turn your calorie target into protein, carb, and fat goals.</p>
            </Link>
            <Link href="/body-fat" className="p-4 border rounded-lg hover:bg-muted">
              <h3 className="font-semibold">Body Fat Percentage Calculator</h3>
              <p className="text-sm text-muted-foreground">Track your progress by monitoring changes in body composition.</p>
            </Link>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
