
import type { Metadata } from 'next';
import Link from 'next/link';
import { GitCommitHorizontal } from 'lucide-react';
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
import { CalorieToWeightConversionForm } from '@/components/calorie-to-weight-conversion-form';

export const metadata: Metadata = {
  title: 'Calorie to Weight Conversion Calculator',
  description: 'Understand the relationship between calories and body weight. Convert a calorie deficit or surplus into its equivalent weight in pounds or kilograms.',
  openGraph: {
    title: 'Calorie to Weight Conversion Calculator',
    description: 'Understand the relationship between calories and body weight. Convert a calorie deficit or surplus into its equivalent weight in pounds or kilograms.',
    type: 'website',
  },
};

export default function CalorieToWeightConversionPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Calorie to Weight Conversion Calculator',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
    },
    description: 'A free web-based calculator to convert calories into their equivalent weight in pounds and kilograms based on the 3500-calorie rule.',
  };

  const howToJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Convert Calories to Weight',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Enter Calories',
        text: 'Input the number of calories you want to convert. This can represent a total deficit or surplus over a period of time.',
      },
      {
        '@type': 'HowToStep',
        name: 'Calculate',
        text: 'The calculator will instantly show you the equivalent weight in both pounds and kilograms, based on the principle that approximately 3,500 calories equal one pound of fat.',
      },
    ],
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is the 3,500 calorie rule?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The 3,500 calorie rule is a long-standing concept that states a pound of body fat contains approximately 3,500 calories. Therefore, to lose one pound, you must create a cumulative deficit of 3,500 calories. This is the foundation of our <a href="/weight-loss-goal">Weight Loss Goal Calculator</a>.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is the 3,500 calorie rule perfectly accurate?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'It is a useful and widely used estimation, but not perfectly accurate. The body is complex, and as you lose weight, your <a href="/tdee">TDEE</a> decreases. The composition of weight lost (fat vs. muscle) also affects the energy balance. It\'s a great guideline, but not a precise law of physics for the human body.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I create a calorie deficit?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You create a calorie deficit by consuming fewer calories than your body burns. First, find your total daily energy expenditure with our <a href="/tdee">TDEE Calculator</a>, then use the <a href="/calorie-deficit">Calorie Deficit Calculator</a> to set a daily target.',
        },
      },
      {
        '@type': 'Question',
        name: 'If I have a 7,000 calorie deficit, will I lose exactly 2 pounds?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You will lose approximately 2 pounds, but it may not be exactly 2.0 lbs on the scale. Daily weight fluctuates due to water, and the composition of weight lost is not 100% fat. This is why tracking weekly averages with the <a href="/weight-change-tracker">Weekly Weight Change Tracker</a> is important.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does this apply to muscle gain?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The principle is similar, but building muscle is more complex than just storing fat. A surplus of calories is needed, but muscle tissue also requires protein and a training stimulus. Use the <a href="/calorie-surplus">Calorie Surplus Calculator</a> to plan a lean bulk.',
        },
      },
      {
        '@type': 'Question',
        name: 'How many calories are in a kilogram of fat?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Since one pound is about 0.453 kg, one kilogram of fat contains roughly 7,700 calories (3500 / 0.453).',
        },
      },
      {
        '@type': 'Question',
        name: 'Why does my weight loss slow down over time?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'As you lose weight, your body becomes smaller and requires fewer calories to maintain itself, meaning your <a href="/bmr">BMR</a> and <a href="/tdee">TDEE</a> decrease. The same calorie intake that caused a deficit before might now be closer to your new maintenance level.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I use this to calculate how many calories are in a food?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No, this tool converts energy (calories) to body weight, not food weight. To understand the calorie content of food, you need to use a nutrition label or a food tracking app.',
        },
      },
       {
        '@type': 'Question',
        name: 'How does this relate to macros?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'This calculator deals with total calories. How those calories are broken down into protein, carbs, and fat is determined by your <a href="/macronutrient-ratio">Macronutrient Ratio</a>, which affects satiety and body composition.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is it better to create a deficit through diet or exercise?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A combination is most effective. It\'s generally easier to create a significant deficit through diet, but exercise helps preserve muscle mass and increases your <a href="/tdee">TDEE</a>. You can estimate your workout burn with the <a href="/calorie-burn-by-activity">Calorie Burn by Activity Calculator</a>.',
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
              <BreadcrumbPage>Calorie to Weight Conversion</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <Card>
          <CardHeader>
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 text-primary p-3 rounded-lg">
                <GitCommitHorizontal className="h-8 w-8" />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold">
                  Calorie to Weight Conversion Calculator
                </h1>
                <p className="text-muted-foreground">
                  Visualize the impact of calories on your weight. This calculator converts a given number of calories into its equivalent body weight based on the widely accepted "3,500 calorie rule." It's a foundational tool for understanding the mechanics of weight management.
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <CalorieToWeightConversionForm />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>How to Use the Calculator</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              This tool provides a simple conversion to help you understand the energy-to-weight relationship.
            </p>
            <ol className="list-decimal list-inside space-y-2">
              <li><strong>Enter Calories:</strong> Input the total number of calories you wish to convert. This can represent a cumulative surplus or deficit over any period.</li>
              <li><strong>View Conversion:</strong> The calculator instantly shows the equivalent weight in both pounds (lbs) and kilograms (kg).</li>
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
                  <TableCell>Calories</TableCell>
                  <TableCell>17,500 kcal</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-bold">Equivalent Weight (lbs)</TableCell>
                  <TableCell className="font-bold">5.0 lbs</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-bold">Equivalent Weight (kg)</TableCell>
                  <TableCell className="font-bold">2.3 kg</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Interpretation & Next Step</TableCell>
                  <TableCell>A cumulative deficit of 17,500 calories would result in approximately 5 lbs of fat loss. To achieve this, one could create a 500-calorie daily deficit for 35 days (17500 / 500). The next step is to use the <Link href="/calorie-deficit" className="text-primary hover:underline">Calorie Deficit Calculator</Link> to plan this daily deficit.</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Understanding the Calorie-to-Weight Relationship</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <h3 className="font-semibold text-lg text-foreground">The 3,500 Calorie Rule Explained</h3>
            <p>The "3,500 calorie per pound" rule is a cornerstone of weight management theory. It was established by Max Wishnofsky in 1958 and states that one pound of body fat stores approximately 3,500 calories of energy. Therefore, to lose one pound of fat, you must create a net energy deficit of 3,500 calories over time. Conversely, to gain one pound, you must consume a net surplus of 3,500 calories.</p>
            <p>This calculator is a direct application of that rule. It simply divides the calorie number you enter by 3,500 to find the equivalent in pounds.</p>

            <h3 className="font-semibold text-lg text-foreground">Limitations and Nuances</h3>
            <p>While the 3,500 calorie rule is a powerful and useful guideline, it's an oversimplification of complex human physiology. Here's why it's not a perfect law:</p>
            <ul className="list-disc list-inside space-y-2">
                <li><strong>Body Composition:</strong> The rule assumes all weight lost is fat. In reality, weight loss is often a mix of fat, muscle, and water. Muscle tissue is less energy-dense than fat.</li>
                <li><strong>Metabolic Adaptation:</strong> As you lose weight, your body's <Link href="/tdee" className="text-primary hover:underline">TDEE</Link> decreases because a smaller body requires less energy. This means a 500-calorie deficit becomes less effective over time.</li>
                <li><strong>Dynamic Model:</strong> Modern models from institutions like the National Institutes of Health (NIH) show that weight loss is not linear. The rate of loss slows down over time as the body adapts.</li>
            </ul>
            <p>Despite these limitations, the 3,500 calorie rule remains an excellent starting point for planning and understanding the scale of the energy deficit or surplus needed to achieve a weight change goal. It provides the foundational math for tools like our <Link href="/weight-loss-goal" className="text-primary hover:underline">Weight Loss Goal Calculator</Link>.</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Common Mistakes</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>Expecting Linear Results:</strong> Thinking a 500-calorie daily deficit will result in exactly 1 lb of loss every single week, forever. The rate will slow down as you get lighter.</li>
              <li><strong>Ignoring Water Weight:</strong> Confusing short-term scale fluctuations from water with actual fat loss or gain. Use the <Link href="/weight-change-tracker" className="text-primary hover:underline">Weekly Weight Change Tracker</Link> to see the true trend.</li>
              <li><strong>Applying it to Muscle Gain Directly:</strong> While a surplus is needed for muscle gain, the process is much less efficient than fat storage and requires protein and training. A 3,500 calorie surplus will not build exactly 1 lb of pure muscle.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Pro Tips & Quick Hacks</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>Use it for Motivation:</strong> If you burn an extra 250 calories from a walk (estimated with the <Link href="/steps-to-calories" className="text-primary hover:underline">Steps to Calories Calculator</Link>), use this tool to see how that small effort contributes to your long-term goal.</li>
              <li><strong>Plan "Cheat Meals" Smarter:</strong> A 1,200 calorie splurge can be converted to see its actual impact (about 1/3 of a pound), which is often less discouraging than it feels.</li>
              <li><strong>Combine with TDEE:</strong> Use this tool to understand the 'why' behind the targets provided by the <Link href="/tdee" className="text-primary hover:underline">TDEE Calculator</Link>.</li>
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
                <AccordionTrigger>What is the 3,500 calorie rule?</AccordionTrigger>
                <AccordionContent>It's a concept stating that one pound of body fat contains approximately 3,500 calories. Therefore, to lose one pound, you must create a cumulative deficit of 3,500 calories. This is the foundation of our <a href="/weight-loss-goal">Weight Loss Goal Calculator</a>.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Is the 3,500 calorie rule perfectly accurate?</AccordionTrigger>
                <AccordionContent>It is a useful estimation, but not perfect. As you lose weight, your <a href="/tdee">TDEE</a> decreases, and the composition of weight lost is not 100% fat. It's a great guideline, but not a precise law.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>How do I create a calorie deficit?</AccordionTrigger>
                <AccordionContent>By consuming fewer calories than your body burns. First, find your total daily energy expenditure with our <a href="/tdee">TDEE Calculator</a>, then use the <a href="/calorie-deficit">Calorie Deficit Calculator</a> to set a daily target.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>If I have a 7,000 calorie deficit, will I lose exactly 2 pounds?</AccordionTrigger>
                <AccordionContent>Approximately, but not exactly. Daily weight fluctuates due to water. This is why tracking weekly averages with the <a href="/weight-change-tracker">Weekly Weight Change Tracker</a> is important.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Does this apply to muscle gain?</AccordionTrigger>
                <AccordionContent>The principle is similar, but building muscle is more complex. A calorie surplus is needed, along with protein and a training stimulus. Use the <a href="/calorie-surplus">Calorie Surplus Calculator</a> to plan a lean bulk.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Related Calculators</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/weight-loss-goal" className="p-4 border rounded-lg hover:bg-muted">
              <h3 className="font-semibold">Weight Loss Goal Calculator</h3>
              <p className="text-sm text-muted-foreground">Apply the calorie-to-weight principle to a specific timeline.</p>
            </Link>
            <Link href="/calorie-deficit" className="p-4 border rounded-lg hover:bg-muted">
              <h3 className="font-semibold">Calorie Deficit Calculator</h3>
              <p className="text-sm text-muted-foreground">Determine the daily deficit needed to achieve your goals.</p>
            </Link>
            <Link href="/tdee" className="p-4 border rounded-lg hover:bg-muted">
              <h3 className="font-semibold">TDEE Calculator</h3>
              <p className="text-sm text-muted-foreground">Find your total daily calorie burn, the baseline for all energy balance.</p>
            </Link>
            <Link href="/calorie-burn-by-activity" className="p-4 border rounded-lg hover:bg-muted">
              <h3 className="font-semibold">Calorie Burn by Activity</h3>
              <p className="text-sm text-muted-foreground">Estimate the calories burned from exercise to contribute to your deficit.</p>
            </Link>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
