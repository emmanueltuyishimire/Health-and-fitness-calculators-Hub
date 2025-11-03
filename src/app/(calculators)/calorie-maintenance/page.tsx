
import type { Metadata } from 'next';
import Link from 'next/link';
import { Anchor } from 'lucide-react';
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
import { CalorieMaintenanceCalculatorForm } from '@/components/calorie-maintenance-calculator-form';

export const metadata: Metadata = {
  title: 'Calorie Maintenance Calculator – Find Your Equilibrium',
  description:
    'Calculate your daily maintenance calories, the amount of energy your body needs to maintain its current weight. This is the baseline for all nutrition planning.',
  openGraph: {
    title: 'Calorie Maintenance Calculator – Find Your Equilibrium',
    description:
      'Calculate your daily maintenance calories, the amount of energy your body needs to maintain its current weight. This is the baseline for all nutrition planning.',
    type: 'website',
  },
};

export default function CalorieMaintenancePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Calorie Maintenance Calculator',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
    },
    description:
      'A free web-based calculator to determine daily maintenance calories from TDEE.',
  };

  const howToJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Calculate Your Maintenance Calories',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Determine Your TDEE',
        text: 'First, calculate your Total Daily Energy Expenditure using our TDEE Calculator. This value is your maintenance calorie number.',
        url: '/tdee'
      },
      {
        '@type': 'HowToStep',
        name: 'Enter TDEE',
        text: 'Enter your TDEE value into the calculator.',
      },
      {
        '@type': 'HowToStep',
        name: 'View Result',
        text: 'The calculator will display your maintenance calories, confirming the amount needed to maintain your current weight.',
      },
    ],
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What are maintenance calories?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Maintenance calories are the total number of calories you need to consume in a day to keep your body weight stable. This value is also known as your <a href="/tdee">Total Daily Energy Expenditure (TDEE)</a>.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why is it important to know my maintenance calories?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Knowing your maintenance calories is the essential first step for any weight management goal. To lose weight, you eat below this number (<a href="/calorie-deficit">calorie deficit</a>). To gain weight, you eat above it (<a href="/calorie-surplus">calorie surplus</a>).',
        },
      },
      {
        '@type': 'Question',
        name: 'How is this different from the TDEE calculator?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Functionally, it is not different. This calculator focuses specifically on the concept of maintenance, while the <a href="/tdee">TDEE Calculator</a> provides a broader overview of targets for weight loss and gain. Both use the same core value.',
        },
      },
      {
        '@type': 'Question',
        name: 'What happens if I eat at maintenance?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'If you consistently eat at your maintenance calorie level, your weight should remain stable over time. This is an ideal target for periods when you are not actively trying to lose or gain weight.',
        },
      },
      {
        '@type': 'Question',
        name: 'Should I recalculate my maintenance calories?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. As your weight, age, or activity level changes, so will your TDEE. It is wise to recalculate your <a href="/tdee">TDEE</a> every few months or after a significant change in weight (10-15 lbs) to ensure your targets are still accurate.',
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
              <BreadcrumbPage>Calorie Maintenance Calculator</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <Card>
          <CardHeader>
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 text-primary p-3 rounded-lg">
                <Anchor className="h-8 w-8" />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold">
                  Calorie Maintenance Calculator
                </h1>
                <p className="text-muted-foreground">
                  Determine the daily calorie intake required to maintain your current weight. This value, your Total Daily Energy Expenditure (TDEE), is the foundation of any nutritional plan. First, find your TDEE with the <Link href="/tdee" className="text-primary hover:underline">TDEE Calculator</Link>.
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <CalorieMaintenanceCalculatorForm />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>How to Use the Calorie Maintenance Calculator</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              This calculator helps you find your body's "equilibrium" point for calories.
            </p>
            <ol className="list-decimal list-inside space-y-2">
              <li><strong>Find Your TDEE:</strong> First, visit our <Link href="/tdee" className="text-primary hover:underline">TDEE Calculator</Link> to get your maintenance calorie number.</li>
              <li><strong>Enter Your TDEE:</strong> Input your TDEE (maintenance calories) into the form.</li>
              <li><strong>View Your Goal:</strong> The calculator will confirm your maintenance calorie target, the amount you should eat to keep your weight stable.</li>
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
                  <TableHead>Example</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>TDEE (Maintenance Calories)</TableCell>
                  <TableCell>2250 kcal/day</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-bold">Daily Calorie Target for Maintenance</TableCell>
                  <TableCell className="font-bold">2250 kcal/day</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Interpretation</TableCell>
                  <TableCell>To maintain their current weight, this individual should consume approximately 2250 calories per day. This is the baseline from which a <Link href="/calorie-deficit" className="text-primary hover:underline">deficit</Link> or <Link href="/calorie-surplus" className="text-primary hover:underline">surplus</Link> can be calculated.</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Understanding Maintenance Calories</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <h3 className="font-semibold text-lg text-foreground">The Concept of Energy Balance</h3>
            <p>Maintenance calories represent the state of "energy balance." This is where the calories you consume (energy in) are equal to the calories your body expends (energy out). Your total energy expenditure is your TDEE, which accounts for your resting metabolism (<a href="/bmr" className="text-primary hover:underline">BMR</a>), daily activities, and the energy used to digest food.</p>
            
            <h3 className="font-semibold text-lg text-foreground">Why and When to Eat at Maintenance</h3>
            <p>While many people focus on weight loss or gain, eating at maintenance is a crucial skill and a phase everyone should be comfortable with. It's useful for:</p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Taking a "Diet Break":</strong> After a prolonged <a href="/calorie-deficit" className="text-primary hover:underline">calorie deficit</a>, spending a few weeks at maintenance can help normalize hormones and provide a psychological reset.</li>
              <li><strong>Sustaining Results:</strong> After reaching a weight goal, slowly increasing calories back to your new maintenance level helps sustain your results long-term.</li>
              <li><strong>Performance Goals:</strong> If your primary goal is athletic performance rather than weight change, eating at maintenance provides enough energy to fuel workouts and recover effectively.</li>
            </ul>
            <p>Mastering maintenance is key to long-term health and breaking the cycle of yo-yo dieting. It teaches you how to fuel your body appropriately for its needs.</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Common Mistakes</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>Confusing Maintenance with BMR:</strong> Eating only your BMR is significant undereating for anyone who is not bed-ridden. Your maintenance calories are your TDEE, not your <Link href="/bmr" className="text-primary hover:underline">BMR</Link>.</li>
              <li><strong>Not Recalculating:</strong> Your maintenance calories will decrease as you lose weight and increase as you gain muscle. Recalculate your <Link href="/tdee" className="text-primary hover:underline">TDEE</Link> after every 10-15 lbs of weight change.</li>
              <li><strong>Treating the Number as Exact:</strong> TDEE is an estimate. Use it as a starting point, monitor your weight for 2-3 weeks, and adjust your intake if your weight is not stable.</li>
              <li><strong>Ignoring Body Composition:</strong> You can stay at the same weight but change your body composition (lose fat, gain muscle). Use the <Link href="/body-fat" className="text-primary hover:underline">Body Fat Percentage</Link> calculator to track this.</li>
            </ul>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Pro Tips & Quick Hacks</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>Use for "Reverse Dieting":</strong> After a diet, don't jump back to old habits. Slowly increase your intake towards your new maintenance level over several weeks to help your metabolism adapt.</li>
              <li><strong>Fuel for Performance:</strong> On days with heavy workouts, eating at or slightly above your maintenance TDEE can improve performance and recovery.</li>
              <li><strong>Find Your True Maintenance:</strong> The most accurate way to find your maintenance is to track your weight and calorie intake for 2-3 weeks. If your weight is stable, your average daily intake is your true maintenance level.</li>
              <li><strong>Practice Makes Perfect:</strong> Spend time eating at maintenance. It teaches you what a "normal" amount of food feels like for your body, a skill crucial for long-term weight management.</li>
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
                <AccordionTrigger>What are maintenance calories?</AccordionTrigger>
                <AccordionContent>Maintenance calories are the total number of calories you need to consume in a day to keep your body weight stable. This value is also known as your <a href="/tdee" className="text-primary hover:underline">Total Daily Energy Expenditure (TDEE)</a>.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Why is it important to know my maintenance calories?</AccordionTrigger>
                <AccordionContent>Knowing your maintenance calories is the essential first step for any weight management goal. To lose weight, you eat below this number (<a href="/calorie-deficit" className="text-primary hover:underline">calorie deficit</a>). To gain weight, you eat above it (<a href="/calorie-surplus" className="text-primary hover:underline">calorie surplus</a>).</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>How is this different from the TDEE calculator?</AccordionTrigger>
                <AccordionContent>Functionally, it is not different. This calculator focuses specifically on the concept of maintenance, while the <a href="/tdee" className="text-primary hover:underline">TDEE Calculator</a> provides a broader overview of targets for weight loss and gain. Both use the same core value.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>What happens if I eat at maintenance?</AccordionTrigger>
                <AccordionContent>If you consistently eat at your maintenance calorie level, your weight should remain stable over time. This is an ideal target for periods when you are not actively trying to lose or gain weight.</AccordionContent>
              </AccordionItem>
               <AccordionItem value="item-5">
                <AccordionTrigger>Should I recalculate my maintenance calories?</AccordionTrigger>
                <AccordionContent>Yes. As your weight, age, or activity level changes, so will your TDEE. It is wise to recalculate your <a href="/tdee" className="text-primary hover:underline">TDEE</a> every few months or after a significant change in weight (10-15 lbs) to ensure your targets are still accurate.</AccordionContent>
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
                  <TableCell>Find a baseline calorie intake to avoid unintentional weight changes.</TableCell>
                  <TableCell><Link href="/macronutrient-ratio" className="text-primary hover:underline">Macronutrient Ratio</Link></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Athletes</TableCell>
                  <TableCell>Ensure adequate energy intake for peak performance without gaining excess weight.</TableCell>
                  <TableCell><Link href="/ffmi" className="text-primary hover:underline">FFMI Calculator</Link></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>People Post-Diet</TableCell>
                  <TableCell>Establish a new, stable calorie target to maintain weight loss results.</TableCell>
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
            <Link href="/tdee" className="p-4 border rounded-lg hover:bg-muted">
              <h3 className="font-semibold">TDEE Calculator</h3>
              <p className="text-sm text-muted-foreground">The essential first step. Find your maintenance calories here.</p>
            </Link>
            <Link href="/calorie-deficit" className="p-4 border rounded-lg hover:bg-muted">
              <h3 className="font-semibold">Calorie Deficit Calculator</h3>
              <p className="text-sm text-muted-foreground">Plan your weight loss by subtracting from your maintenance calories.</p>
            </Link>
            <Link href="/calorie-surplus" className="p-4 border rounded-lg hover:bg-muted">
              <h3 className="font-semibold">Calorie Surplus Calculator</h3>
              <p className="text-sm text-muted-foreground">Plan your weight gain by adding to your maintenance calories.</p>
            </Link>
            <Link href="/bmr" className="p-4 border rounded-lg hover:bg-muted">
              <h3 className="font-semibold">BMR Calculator</h3>
              <p className="text-sm text-muted-foreground">Understand the baseline of your metabolism that contributes to your maintenance level.</p>
            </Link>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
