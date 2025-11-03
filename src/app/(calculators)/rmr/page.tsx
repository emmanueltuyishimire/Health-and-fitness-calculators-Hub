
import { BedDouble } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { RmrCalculatorForm } from '@/components/rmr-calculator-form';

export const metadata: Metadata = {
    title: 'RMR Calculator – Calculate Your Resting Metabolic Rate',
    description: 'Calculate your Resting Metabolic Rate (RMR) with our free calculator. Understand your body’s resting calorie needs to better inform your diet and fitness strategy.',
    openGraph: {
        title: 'RMR Calculator – Calculate Your Resting Metabolic Rate',
        description: 'Calculate your Resting Metabolic Rate (RMR) with our free calculator. Understand your body’s resting calorie needs to better inform your diet and fitness strategy.',
        type: 'website',
    },
};


export default function RmrPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'RMR Calculator',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
    },
    description:
      'A free web-based calculator to determine Resting Metabolic Rate (RMR) based on age, gender, height, and weight.',
  };

  const howToJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Calculate Your RMR',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Select Gender & Units',
        text: 'Choose your gender and preferred unit system (Metric or Imperial).',
      },
      {
        '@type': 'HowToStep',
        name: 'Enter Your Details',
        text: 'Input your age, height, and weight.',
      },
      {
        '@type': 'HowToStep',
        name: 'Calculate RMR',
        text: 'Click the "Calculate RMR" button to see your result, which is the number of calories your body burns at rest daily.',
      },
       {
        '@type': 'HowToStep',
        name: 'Determine Activity Level',
        text: 'Use your RMR in the TDEE Calculator to find your total daily energy expenditure.',
        url: '/tdee'
      },
    ],
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is the difference between RMR and BMR?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'RMR (Resting Metabolic Rate) is the calories your body needs at rest. <a href="/bmr">BMR (Basal Metabolic Rate)</a> is similar but measured under stricter, clinical conditions. For practical purposes, RMR and BMR are very close and can be used interchangeably in tools like the <a href="/tdee">TDEE Calculator</a>.',
        },
      },
      {
        '@type': 'Question',
        name: 'How can I increase my RMR?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The most effective way to increase your RMR is by building more muscle mass. Since muscle tissue is more metabolically active than fat, increasing it boosts your resting calorie burn. Tracking your muscle gains with a <a href="/ffmi">FFMI Calculator</a> is a great way to monitor progress.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does RMR decrease with age?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, RMR generally decreases as you age, primarily due to a natural decline in muscle mass. This is why staying active and doing strength training is important throughout life. You can see how age impacts your <a href="/ideal-weight">Ideal Weight</a> calculations as well.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why is my RMR different from my friend\'s?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'RMR is influenced by age, gender, weight, height, and body composition. Even two people with the same stats may have different RMRs due to genetics and muscle-to-fat ratio. Comparing your <a href="/body-fat">Body Fat Percentage</a> can often explain the difference.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I use my RMR for weight loss?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Your RMR is the first step. Next, use it in the <a href="/tdee">TDEE Calculator</a> to find your total daily energy expenditure (TDEE). To lose weight, you need to consume fewer calories than your TDEE (a <a href="/calorie-deficit">calorie deficit</a>).',
        },
      },
      {
        '@type': 'Question',
        name: 'Is the Mifflin-St Jeor formula accurate for RMR?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, the Mifflin-St Jeor equation is considered one of the most accurate formulas for estimating both BMR and RMR in the general population. It provides a reliable baseline for planning your diet with the <a href="/daily-calorie-needs">Daily Calorie Needs Calculator</a>.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does RMR account for exercise?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No, RMR is your calorie burn strictly at rest. To account for exercise and other daily activities, you must use your RMR to calculate your <a href="/tdee">TDEE (Total Daily Energy Expenditure)</a>.',
        },
      }
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
              <BreadcrumbPage>RMR Calculator</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <Card>
          <CardHeader>
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 text-primary p-3 rounded-lg">
                <BedDouble className="h-8 w-8" />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold">
                  RMR Calculator
                </h1>
                <p className="text-muted-foreground">
                    Calculate your Resting Metabolic Rate (RMR)—the number of calories your body burns while at rest. Understanding your RMR is the foundational step in managing your weight and is used to calculate your <Link href="/tdee" className="text-primary hover:underline">TDEE</Link>.
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <RmrCalculatorForm />
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>How to Use the RMR Calculator</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              Our RMR Calculator uses the Mifflin-St Jeor equation, widely considered the most accurate method for estimating resting metabolic rate. Follow these simple steps to find your baseline calorie burn.
            </p>
            <ol className="list-decimal list-inside space-y-2">
              <li><strong>Select Your Gender:</strong> The formula adjusts for physiological differences between males and females.</li>
              <li><strong>Choose Your Units:</strong> Select "Metric" (kg, cm) or "Imperial" (lbs, inches).</li>
              <li><strong>Enter Your Age:</strong> Your metabolic rate changes over your lifespan.</li>
              <li><strong>Enter Your Height and Weight:</strong> These are key variables in determining your body mass.</li>
              <li><strong>Calculate RMR:</strong> Click the button to see the number of calories your body would burn in a day at rest.</li>
              <li><strong>Your Next Step:</strong> Your RMR is just the beginning. Take your RMR result and plug it into the <Link href="/tdee" className="text-primary hover:underline">TDEE Calculator</Link> to find your Total Daily Energy Expenditure (TDEE).</li>
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
                  <TableHead>Example 1 (Female)</TableHead>
                  <TableHead>Example 2 (Male)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Gender</TableCell>
                  <TableCell>Female</TableCell>
                  <TableCell>Male</TableCell>
                </TableRow>
                 <TableRow>
                  <TableCell>Age</TableCell>
                  <TableCell>35 years</TableCell>
                  <TableCell>45 years</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Height</TableCell>
                  <TableCell>165 cm</TableCell>
                  <TableCell>180 cm</TableCell>
                </TableRow>
                 <TableRow>
                  <TableCell>Weight</TableCell>
                  <TableCell>60 kg</TableCell>
                  <TableCell>85 kg</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-bold">Calculated RMR</TableCell>
                  <TableCell className="font-bold">1,300 kcal/day</TableCell>
                  <TableCell className="font-bold">1,760 kcal/day</TableCell>
                </TableRow>
                 <TableRow>
                    <TableCell>Interpretation & Next Step</TableCell>
                    <TableCell>Her body burns 1,300 calories at rest. Her next step is to use the <Link href="/tdee" className="text-primary hover:underline">TDEE Calculator</Link> to find her TDEE.</TableCell>
                    <TableCell>His body burns 1,760 calories at rest. He can use this to understand his baseline before accounting for exercise with the <Link href="/tdee" className="text-primary hover:underline">TDEE calculator</Link>.</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Understanding Resting Metabolic Rate</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <h3 className="font-semibold text-lg text-foreground">What is RMR?</h3>
            <p>Your Resting Metabolic Rate (RMR) is the amount of energy your body expends while at rest in a comfortable, neutral environment. This energy is used for vital functions like breathing, circulating blood, and controlling body temperature. It is the largest component of your total daily energy expenditure (TDEE), typically accounting for 60-75% of the calories you burn each day.</p>
            <p>RMR is very similar to <Link href="/bmr" className="text-primary hover:underline">BMR (Basal Metabolic Rate)</Link>, but is measured under less strict conditions. For most practical purposes, the two are interchangeable and provide a foundational understanding of your metabolism.</p>
            <h3 className="font-semibold text-lg text-foreground">Factors Influencing RMR</h3>
            <p>Your RMR is determined by several factors, including:</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
                <li><strong>Body Composition:</strong> Lean muscle mass burns more calories at rest than fat mass. The more muscle you have, the higher your RMR.</li>
                <li><strong>Age:</strong> RMR tends to decrease with age, largely due to a natural loss of muscle mass.</li>
                <li><strong>Gender:</strong> Men typically have a higher RMR than women because they generally have more muscle mass.</li>
                <li><strong>Genetics:</strong> Some people are born with a naturally higher or lower metabolism.</li>
            </ul>
          </CardContent>
        </Card>
        
        <Card>
            <CardHeader><CardTitle>Common Mistakes</CardTitle></CardHeader>
            <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li><strong>Confusing RMR with TDEE:</strong> Using your RMR as your daily calorie target is a major error. RMR doesn't include activity. Always use your RMR to calculate your TDEE in our <Link href="/tdee" className="text-primary hover:underline">TDEE Calculator</Link>.</li>
                    <li><strong>Not Updating Your RMR:</strong> As you lose or gain weight, your RMR will change. You should recalculate it after every 5-10 lbs (or 2-5 kg) of weight change to keep your calorie targets accurate.</li>
                    <li><strong>Using It as a Rigid Rule:</strong> RMR is an estimate. Use it as a starting point, monitor your weight and <Link href="/body-fat" className="text-primary hover:underline">body composition</Link> over 2-4 weeks, and adjust your calorie intake up or down as needed.</li>
                </ul>
            </CardContent>
        </Card>
        
        <Card>
            <CardHeader><CardTitle>Pro Tips & Quick Hacks</CardTitle></CardHeader>
            <CardContent>
                 <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li><strong>Prioritize Protein:</strong> When in a calorie deficit, a higher protein intake helps preserve muscle mass, which in turn helps keep your RMR from dropping as much. Use a <Link href="/protein-intake" className="text-primary hover:underline">Protein Intake Calculator</Link> to find your target.</li>
                    <li><strong>Focus on Building Muscle:</strong> The best long-term strategy to boost your RMR is to increase your lean body mass through consistent resistance training.</li>
                    <li><strong>Stay Hydrated:</strong> Proper hydration is necessary for all metabolic processes. Use the <Link href="/water-intake" className="text-primary hover:underline">Water Intake Calculator</Link> to estimate your needs.</li>
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
                <AccordionTrigger>What is the difference between RMR and BMR?</AccordionTrigger>
                <AccordionContent>RMR (Resting Metabolic Rate) is the calories your body needs at rest. <Link href="/bmr" className="text-primary hover:underline">BMR</Link> is similar but measured under stricter, clinical conditions. For practical purposes, RMR and BMR are very close and can be used interchangeably in tools like the <Link href="/tdee" className="text-primary hover:underline">TDEE Calculator</Link>.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>How can I increase my RMR?</AccordionTrigger>
                <AccordionContent>The most effective way is by building muscle mass. Muscle is more metabolically active than fat, so increasing it boosts your resting calorie burn. Track progress with a <Link href="/ffmi" className="text-primary hover:underline">FFMI Calculator</Link>.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Does RMR decrease with age?</AccordionTrigger>
                <AccordionContent>Yes, RMR generally decreases with age, primarily due to a natural decline in muscle mass. Staying active and doing strength training is important throughout life.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>How do I use my RMR for weight loss?</AccordionTrigger>
                <AccordionContent>Your RMR is the first step. Next, use it in the <Link href="/tdee" className="text-primary hover:underline">TDEE Calculator</Link> to find your total daily energy expenditure (TDEE). To lose weight, you need to consume fewer calories than your TDEE (a <Link href="/calorie-deficit" className="text-primary hover:underline">calorie deficit</Link>).</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Does RMR account for exercise?</AccordionTrigger>
                <AccordionContent>No, RMR is your calorie burn strictly at rest. To account for exercise and other daily activities, you must use your RMR to calculate your <Link href="/tdee" className="text-primary hover:underline">TDEE (Total Daily Energy Expenditure)</Link>.</AccordionContent>
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
                            <TableCell>General Users</TableCell>
                            <TableCell>Establish a baseline for a new diet or fitness plan.</TableCell>
                            <TableCell><Link href="/daily-calorie-needs" className="text-primary hover:underline">Daily Calorie Needs</Link></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Fitness Coaches</TableCell>
                            <TableCell>Create precise, individualized calorie targets for clients.</TableCell>
                             <TableCell><Link href="/macronutrient-ratio" className="text-primary hover:underline">Macronutrient Ratio Calculator</Link></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Health Enthusiasts</TableCell>
                            <TableCell>Understand how changes in muscle mass affect their resting metabolism.</TableCell>
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
              <p className="text-sm text-muted-foreground">The essential next step. Turn your RMR into a daily calorie target.</p>
            </Link>
            <Link href="/bmr" className="p-4 border rounded-lg hover:bg-muted">
              <h3 className="font-semibold">BMR Calculator</h3>
              <p className="text-sm text-muted-foreground">Compare your RMR with your Basal Metabolic Rate.</p>
            </Link>
            <Link href="/ffmi" className="p-4 border rounded-lg hover:bg-muted">
              <h3 className="font-semibold">FFMI Calculator</h3>
              <p className="text-sm text-muted-foreground">See how your muscle mass impacts your RMR.</p>
            </Link>
            <Link href="/body-fat" className="p-4 border rounded-lg hover:bg-muted">
              <h3 className="font-semibold">Body Fat Percentage Calculator</h3>
              <p className="text-sm text-muted-foreground">Understand your body composition to get a full picture of your metabolism.</p>
            </Link>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
