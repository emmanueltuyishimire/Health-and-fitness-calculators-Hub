
import type { Metadata } from 'next';
import Link from 'next/link';
import { Zap } from 'lucide-react';
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
import { CalorieBurnByActivityForm } from '@/components/calorie-burn-by-activity-calculator-form';

export const metadata: Metadata = {
  title: 'Calorie Burn by Activity Calculator – Estimate Your Expenditure',
  description:
    'Calculate the calories burned during various activities using MET values. Get an accurate estimate based on your body weight and the duration of your workout or activity.',
  openGraph: {
    title: 'Calorie Burn by Activity Calculator – Estimate Your Expenditure',
    description:
      'Calculate the calories burned during various activities using MET values. Get an accurate estimate based on your body weight and the duration of your workout or activity.',
    type: 'website',
  },
};

export default function CalorieBurnByActivityPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Calorie Burn by Activity Calculator',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
    },
    description:
      'A free web-based calculator to estimate calories burned from physical activity using body weight, duration, and MET values.',
  };

  const howToJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Calculate Calories Burned by Activity',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Enter Your Weight',
        text: 'Input your current body weight, as it is a key factor in the calorie burn calculation.',
      },
      {
        '@type': 'HowToStep',
        name: 'Select Activity',
        text: 'Choose a physical activity from the provided list. The list includes a wide range of exercises and daily activities with their corresponding MET values.',
      },
      {
        '@type': 'HowToStep',
        name: 'Enter Duration',
        text: 'Input the total duration of the activity in minutes.',
      },
      {
        '@type': 'HowToStep',
        name: 'Calculate',
        text: 'The calculator will estimate the total calories burned during that activity.',
      },
    ],
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is a MET value?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'MET stands for Metabolic Equivalent of Task. It is a measure of the energy cost of a physical activity for a specific period. 1 MET is equivalent to the energy you expend while sitting at rest. An activity with a MET value of 5 means you are burning 5 times the energy you would at rest.',
        },
      },
      {
        '@type': 'Question',
        name: 'How are calories burned calculated?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The formula used is: Calories Burned = (MET Value × Body Weight in kg × 3.5) / 200 × Duration in minutes. This calculator handles the conversions for you. This value contributes to your overall <a href="/tdee">TDEE</a>.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are these calculations accurate?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'This method provides a standardized and reliable estimate. However, actual calories burned can vary based on individual factors like age, gender, body composition, and intensity. Use it as a strong guideline. For body composition, see our <a href="/body-fat">Body Fat Percentage Calculator</a>.',
        },
      },
      {
        '@type': 'Question',
        name: 'Should I eat back the calories I burn from exercise?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Generally, no. If you are using a <a href="/tdee">TDEE Calculator</a> with an activity multiplier, your exercise is already accounted for. "Eating back" exercise calories is a common mistake that can negate a <a href="/calorie-deficit">calorie deficit</a>.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does this differ from what my fitness tracker says?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Fitness trackers often use heart rate and motion sensors, which can be inconsistent. The MET value method is a standardized physiological formula, which can be more reliable, though less personalized than clinical measurements.',
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
              <BreadcrumbPage>Calorie Burn by Activity</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <Card>
          <CardHeader>
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 text-primary p-3 rounded-lg">
                <Zap className="h-8 w-8" />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold">
                  Calorie Burn by Activity Calculator
                </h1>
                <p className="text-muted-foreground">
                  Estimate the number of calories burned during your favorite activities. This tool uses MET values to provide a scientific estimate of your energy expenditure, helping you better understand your overall <Link href="/tdee" className="text-primary hover:underline">TDEE</Link>.
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <CalorieBurnByActivityForm />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>How to Use the Calorie Burn Calculator</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              This calculator estimates the calories you burn during a specific activity based on its intensity (MET value), your body weight, and the duration.
            </p>
            <ol className="list-decimal list-inside space-y-2">
              <li><strong>Enter Your Weight:</strong> Your body weight is a key factor in how many calories you burn.</li>
              <li><strong>Select Your Activity:</strong> Use the searchable dropdown to find your activity. Each one has a pre-assigned MET value.</li>
              <li><strong>Enter the Duration:</strong> Input how many minutes you performed the activity.</li>
              <li><strong>Calculate Your Burn:</strong> The tool will show you the estimated total calories burned for that session.</li>
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
                  <TableCell>Body Weight</TableCell>
                  <TableCell>155 lbs (70.3 kg)</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Activity</TableCell>
                  <TableCell>Running, 6 mph (MET: 9.8)</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Duration</TableCell>
                  <TableCell>30 minutes</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-bold">Estimated Calories Burned</TableCell>
                  <TableCell className="font-bold">~362 kcal</TableCell>
                </TableRow>
                 <TableRow>
                  <TableCell>Interpretation & Next Step</TableCell>
                  <TableCell>A 30-minute run at this pace burns a significant number of calories. This expenditure is a component of the user's <Link href="/tdee" className="text-primary hover:underline">TDEE</Link>. Knowing this helps in creating an accurate <Link href="/calorie-deficit" className="text-primary hover:underline">calorie deficit</Link> for fat loss.</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Understanding METs and Calorie Expenditure</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <h3 className="font-semibold text-lg text-foreground">What is a MET?</h3>
            <p>MET stands for Metabolic Equivalent of Task. It's a standardized measure used to express the energy cost of physical activities. One MET is defined as the amount of oxygen consumed while sitting at rest, which is approximately 3.5 milliliters of oxygen per kilogram of body weight per minute. In simpler terms:</p>
            <ul className="list-disc list-inside space-y-2">
                <li><strong>1 MET:</strong> The energy you use when you are at complete rest.</li>
                <li><strong>3 METs:</strong> The activity requires three times the energy of resting.</li>
                <li><strong>8 METs:</strong> The activity requires eight times the energy of resting.</li>
            </ul>
            <p>The MET value is a convenient way to compare the intensity of different activities. For example, walking at 3 mph has a MET value of around 3.5, while vigorous running might have a MET value of 12 or more.</p>

            <h3 className="font-semibold text-lg text-foreground">The Calculation Formula</h3>
            <p>This calculator uses a standard scientific formula to estimate calorie burn:</p>
            <p className="font-mono text-center p-4 bg-muted rounded-md">Total Calories Burned = Duration (min) × [(MET × 3.5 × Weight (kg)) / 200]</p>
            <p>This formula accurately converts the oxygen consumption represented by the MET value into the calories burned for a person of a specific weight over a specific time. While it's a powerful estimation, remember that individual factors like age, gender, and <Link href="/body-fat" className="text-primary hover:underline">body composition</Link> can cause slight variations.</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Common Mistakes</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>Overestimating Intensity:</strong> Choosing an activity with a higher MET value than what you actually performed (e.g., selecting "vigorous running" for a light jog).</li>
              <li><strong>"Eating Back" Calories:</strong> Subtracting these burned calories from your diet. Your <Link href="/tdee" className="text-primary hover:underline">TDEE</Link> already accounts for your general activity level. Use this tool for information, not as a license to eat more.</li>
              <li><strong>Ignoring Warm-up/Cool-down:</strong> Only include the time you were performing the activity at the specified intensity, not the rest periods or lower-intensity parts.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Pro Tips & Quick Hacks</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>Focus on NEAT:</strong> Don't forget about Non-Exercise Activity Thermogenesis (NEAT), like walking, fidgeting, or taking the stairs. These small activities add up and contribute significantly to your daily burn.</li>
              <li><strong>Prioritize Resistance Training:</strong> While cardio burns calories during the activity, building muscle through resistance training increases your <Link href="/bmr" className="text-primary hover:underline">BMR</Link>, helping you burn more calories 24/7.</li>
              <li><strong>Use for Comparison:</strong> This tool is excellent for comparing the energy expenditure of different activities to help you choose the most efficient workouts for your goals.</li>
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
                <AccordionTrigger>What is a MET value?</AccordionTrigger>
                <AccordionContent>MET stands for Metabolic Equivalent of Task. It measures the energy cost of an activity. 1 MET is the energy used at rest. An activity with a MET of 5 burns 5 times the energy of resting.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>How are calories burned calculated?</AccordionTrigger>
                <AccordionContent>The formula is: Calories Burned = (MET Value × Body Weight in kg × 3.5) / 200 × Duration in minutes. This value contributes to your overall <Link href="/tdee" className="text-primary hover:underline">TDEE</Link>.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Are these calculations accurate?</AccordionTrigger>
                <AccordionContent>This method provides a standardized and reliable estimate. However, actual calories burned can vary based on individual factors like age, gender, and <Link href="/body-fat" className="text-primary hover:underline">body composition</Link>. Use it as a strong guideline.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Should I "eat back" calories burned from exercise?</AccordionTrigger>
                <AccordionContent>Generally, no. If you use a <Link href="/tdee" className="text-primary hover:underline">TDEE Calculator</Link> with an activity multiplier, your exercise is already factored in. "Eating back" calories can cancel out a <Link href="/calorie-deficit" className="text-primary hover:underline">calorie deficit</Link>.</AccordionContent>
              </AccordionItem>
               <AccordionItem value="item-5">
                <AccordionTrigger>How does this differ from my fitness tracker?</AccordionTrigger>
                <AccordionContent>Fitness trackers use heart rate and motion sensors, which can be inconsistent. The MET value method is a standardized physiological formula, often more reliable, though less personalized than a lab test.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Related Calculators</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/tdee" className="p-4 border rounded-lg hover:bg-muted">
              <h3 className="font-semibold">TDEE Calculator</h3>
              <p className="text-sm text-muted-foreground">Understand your total daily calorie burn, including your activities.</p>
            </Link>
            <Link href="/calorie-deficit" className="p-4 border rounded-lg hover:bg-muted">
              <h3 className="font-semibold">Calorie Deficit Calculator</h3>
              <p className="text-sm text-muted-foreground">Plan your fat loss using the insights from your activity expenditure.</p>
            </Link>
            <Link href="/bmr" className="p-4 border rounded-lg hover:bg-muted">
              <h3 className="font-semibold">BMR Calculator</h3>
              <p className="text-sm text-muted-foreground">Calculate your resting metabolism, the baseline for all energy calculations.</p>
            </Link>
             <Link href="/macronutrient-ratio" className="p-4 border rounded-lg hover:bg-muted">
              <h3 className="font-semibold">Macronutrient Ratio Calculator</h3>
              <p className="text-sm text-muted-foreground">Plan your meals to properly fuel your workouts and recovery.</p>
            </Link>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
