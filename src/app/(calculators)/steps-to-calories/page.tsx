
import type { Metadata } from 'next';
import Link from 'next/link';
import { Footprints } from 'lucide-react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { StepsToCaloriesCalculatorForm } from '@/components/steps-to-calories-calculator-form';
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

export const metadata: Metadata = {
  title: 'Steps to Calories Calculator – Estimate Your Burn',
  description:
    'Calculate the calories burned from walking based on your step count and body weight. Understand the energy expenditure of your daily activity.',
  openGraph: {
    title: 'Steps to Calories Calculator – Estimate Your Burn',
    description:
      'Calculate the calories burned from walking based on your step count and body weight. Understand the energy expenditure of your daily activity.',
    type: 'website',
  },
};

export default function StepsToCaloriesPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Steps to Calories Calculator',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
    },
    description:
      'A free calculator to estimate calories burned from walking based on step count and body weight.',
  };

  const howToJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Calculate Calories from Steps',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Enter Your Weight',
        text: 'Input your current body weight, as it is a key factor in the calculation.',
      },
      {
        '@type': 'HowToStep',
        name: 'Enter Your Step Count',
        text: 'Input the total number of steps you took.',
      },
      {
        '@type': 'HowToStep',
        name: 'Calculate',
        text: 'The calculator will estimate the total calories burned from those steps.',
      },
    ],
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How accurate is this calculator?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'This provides a solid estimate based on standardized values. However, real-world calorie burn can be influenced by your individual walking speed, fitness level, and even the surface you\'re walking on. Use it as a guideline to understand the impact of your activity.',
        },
      },
      {
        '@type': 'Question',
        name: 'Should I "eat back" the calories I burn from walking?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Generally, no. If you\'ve used our <a href="/tdee">TDEE Calculator</a> and selected an appropriate activity level (e.g., "Lightly Active" or higher), the energy you burn from walking is already factored into your total daily calorie needs.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why does body weight affect calories burned?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'It takes more energy to move a heavier object. Therefore, a heavier person will burn more calories than a lighter person when walking the same number of steps. This is a fundamental principle of energy expenditure.',
        },
      },
      {
        '@type': 'Question',
        name: 'How many steps should I aim for per day?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The common goal of 10,000 steps per day is a great target for general health. However, any increase from your current baseline is beneficial. Even adding an extra 2,000 steps can make a meaningful difference to your <a href="/tdee">TDEE</a> over time.',
        },
      },
       {
        '@type': 'Question',
        name: 'Does walking faster burn more calories?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, walking at a faster pace increases the intensity, which raises the MET value and burns more calories over the same distance. For a more detailed breakdown, you can use our <a href="/calorie-burn-by-activity">Calorie Burn by Activity Calculator</a> with different walking speeds.',
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
              <BreadcrumbPage>Steps to Calories Calculator</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <Card>
          <CardHeader>
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 text-primary p-3 rounded-lg">
                <Footprints className="h-8 w-8" />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold">
                  Steps to Calories Calculator
                </h1>
                <p className="text-muted-foreground">
                  Estimate the calories you've burned from your daily steps. This calculator helps you understand the impact of your walking activity on your total energy expenditure.
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <StepsToCaloriesCalculatorForm />
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>How to Use the Steps to Calories Calculator</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              This calculator translates your daily step count into an estimated calorie burn.
            </p>
            <ol className="list-decimal list-inside space-y-2">
              <li><strong>Enter Your Weight:</strong> Input your current body weight, as this is a primary factor in calorie expenditure.</li>
              <li><strong>Enter Your Steps:</strong> Provide the total number of steps you have taken.</li>
              <li><strong>Calculate Your Burn:</strong> The tool will estimate the calories burned based on these inputs and standardized MET values for walking.</li>
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
                  <TableHead>Example Data</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Body Weight</TableCell>
                  <TableCell>150 lbs</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Number of Steps</TableCell>
                  <TableCell>10,000</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-bold">Estimated Calories Burned</TableCell>
                  <TableCell className="font-bold">~358 kcal</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Interpretation & Next Step</TableCell>
                  <TableCell>Walking 10,000 steps burns a significant number of calories. This expenditure contributes to the user's total <Link href="/tdee" className="text-primary hover:underline">TDEE</Link>. To lose weight, this burn can help create a larger <Link href="/calorie-deficit" className="text-primary hover:underline">calorie deficit</Link>.</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Understanding Calories Burned from Steps</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <h3 className="font-semibold text-lg text-foreground">How It's Calculated</h3>
            <p>
              This calculator estimates your calorie burn using a standard formula that incorporates your body weight, the number of steps, and the Metabolic Equivalent of Task (MET) for walking.
            </p>
            <p className="font-mono text-center p-4 bg-muted rounded-md">
                Calories Burned = (METs × 3.5 × weight in kg) / 200 × duration in minutes
            </p>
            <p>
              We estimate the duration by assuming an average walking speed of 100 steps per minute and use a MET value of 3.5 for general walking. While individual results can vary based on walking speed, terrain, and fitness level, this provides a reliable estimate for most people. These burned calories are a component of your <Link href="/tdee" className="text-primary hover:underline">TDEE</Link>.
            </p>

            <h3 className="font-semibold text-lg text-foreground">The Power of NEAT</h3>
            <p>
              The calories you burn from daily steps are a major part of your Non-Exercise Activity Thermogenesis (NEAT). NEAT includes all the physical activity you do that isn't formal exercise, like walking to your car, doing chores, or fidgeting. For many people, NEAT is a larger component of their daily calorie burn than their workouts. Increasing your daily step count is one of the most effective ways to boost your NEAT and, therefore, your total daily calorie expenditure.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Common Mistakes</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>Double-Counting Calories:</strong> If your activity level in the <Link href="/tdee" className="text-primary hover:underline">TDEE Calculator</Link> already accounts for a high step count, don't add these calories on top. Use this tool for informational purposes.</li>
              <li><strong>Trusting Device Estimates Blindly:</strong> Fitness trackers often overestimate calorie burn. This calculator uses a standardized formula, which can serve as a useful cross-reference.</li>
              <li><strong>Thinking All Steps are Equal:</strong> Steps taken while running or hiking will burn more calories than steps taken while walking slowly. Use the <Link href="/calorie-burn-by-activity" className="text-primary hover:underline">Calorie Burn by Activity Calculator</Link> for more specific activities.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Pro Tips & Quick Hacks</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>"Walk and Talk":</strong> Take phone calls while walking around your home or office to easily increase your step count.</li>
              <li><strong>Park Farther Away:</strong> Intentionally parking at the back of the lot is a simple way to add a few hundred extra steps to your day.</li>
              <li><strong>Take the Stairs:</strong> Consistently choosing stairs over the elevator is a great way to boost NEAT and calorie burn.</li>
              <li><strong>Use a Pedometer:</strong> A simple pedometer or fitness tracker can be a powerful motivator to increase your daily activity.</li>
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
                <AccordionTrigger>How accurate is this calculator?</AccordionTrigger>
                <AccordionContent>
                  This provides a solid estimate based on standardized values. However, real-world calorie burn can be influenced by your individual walking speed, fitness level, and even the surface you're walking on. Use it as a guideline to understand the impact of your activity.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Should I "eat back" the calories I burn from walking?</AccordionTrigger>
                <AccordionContent>
                  Generally, no. If you've used our <Link href="/tdee" className="text-primary hover:underline">TDEE Calculator</Link> and selected an appropriate activity level, the energy you burn from walking is already accounted for in your total daily calorie needs.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Why does body weight affect calories burned?</AccordionTrigger>
                <AccordionContent>
                  It takes more energy to move a heavier object. Therefore, a heavier person will burn more calories than a lighter person when walking the same number of steps.
                </AccordionContent>
              </AccordionItem>
               <AccordionItem value="item-4">
                <AccordionTrigger>How many steps should I aim for per day?</AccordionTrigger>
                <AccordionContent>
                  The common goal of 10,000 steps per day is a great target for general health. However, any increase from your current baseline is beneficial. Even adding an extra 2,000 steps can make a meaningful difference to your <Link href="/tdee" className="text-primary hover:underline">TDEE</Link> over time.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Does walking faster burn more calories?</AccordionTrigger>
                <AccordionContent>
                  Yes, walking at a faster pace increases the intensity, which raises the MET value and burns more calories over the same distance. For a more detailed breakdown, you can use our <Link href="/calorie-burn-by-activity" className="text-primary hover:underline">Calorie Burn by Activity Calculator</Link> with different walking speeds.
                </AccordionContent>
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
                  <TableCell>Office Workers</TableCell>
                  <TableCell>Quantify the benefit of taking short walks during breaks to increase daily energy expenditure.</TableCell>
                  <TableCell><Link href="/tdee" className="text-primary hover:underline">TDEE Calculator</Link></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>People on a Diet</TableCell>
                  <TableCell>Understand how increasing daily steps can help create a larger calorie deficit without reducing food intake.</TableCell>
                  <TableCell><Link href="/calorie-deficit" className="text-primary hover:underline">Calorie Deficit</Link></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>General Health</TableCell>
                  <TableCell>Set and track a daily step goal as a simple, actionable way to improve overall health.</TableCell>
                  <TableCell>N/A</TableCell>
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
            <Link href="/calorie-burn-by-activity" className="p-4 border rounded-lg hover:bg-muted">
              <h3 className="font-semibold">Calorie Burn by Activity</h3>
              <p className="text-sm text-muted-foreground">For more specific activities beyond general walking, estimate your calorie burn here.</p>
            </Link>
            <Link href="/tdee" className="p-4 border rounded-lg hover:bg-muted">
              <h3 className="font-semibold">TDEE Calculator</h3>
              <p className="text-sm text-muted-foreground">See how your daily steps contribute to your total daily energy expenditure.</p>
            </Link>
            <Link href="/met-value" className="p-4 border rounded-lg hover:bg-muted">
              <h3 className="font-semibold">Activity MET Value Calculator</h3>
              <p className="text-sm text-muted-foreground">Look up the intensity (MET value) of various exercises and activities.</p>
            </Link>
            <Link href="/weight-loss-goal" className="p-4 border rounded-lg hover:bg-muted">
              <h3 className="font-semibold">Weight Loss Goal Calculator</h3>
              <p className="text-sm text-muted-foreground">Plan your weight loss journey and see how adding steps can help you reach your goal faster.</p>
            </Link>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
