
import type { Metadata } from 'next';
import Link from 'next/link';
import { Soup } from 'lucide-react';
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
import { MealCalorieSplitCalculatorForm } from '@/components/meal-calorie-split-calculator-form';

export const metadata: Metadata = {
  title: 'Meal Calorie Split Calculator – Plan Your Nutrition',
  description:
    'Divide your daily calorie target into multiple meals. Plan your breakfast, lunch, dinner, and snacks to stay consistent with your nutrition goals.',
  openGraph: {
    title: 'Meal Calorie Split Calculator – Plan Your Nutrition',
    description:
      'Divide your daily calorie target into multiple meals. Plan your breakfast, lunch, dinner, and snacks to stay consistent with your nutrition goals.',
    type: 'website',
  },
};

export default function MealCalorieSplitPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Meal Calorie Split Calculator',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
    },
    description:
      'A free web-based calculator to divide a total daily calorie goal into several meals.',
  };
  
  const howToJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Split Your Daily Calories into Meals',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Determine Calorie Goal',
        text: 'First, use the Daily Calorie Needs Calculator to find your total daily calorie target.',
        url: '/daily-calorie-needs'
      },
      {
        '@type': 'HowToStep',
        name: 'Enter Calorie Goal',
        text: 'Input your total daily calorie target into the calculator.',
      },
      {
        '@type': 'HowToStep',
        name: 'Choose Number of Meals',
        text: 'Select how many meals you want to eat per day (e.g., 3 meals and 2 snacks would be 5).',
      },
      {
        '@type': 'HowToStep',
        name: 'Calculate',
        text: 'The calculator will show you the calorie target for each meal, assuming an even split.',
      },
    ],
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Do all my meals have to be the same size?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No, this calculator provides an even split as a simple starting point. You can customize your meal sizes based on your preferences. For example, you might want a larger lunch and a smaller dinner. The most important thing is hitting your total daily calorie goal from the <a href="/daily-calorie-needs">Daily Calorie Needs Calculator</a>.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why do I need my daily calorie goal first?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'This calculator\'s purpose is to divide a total number. Without knowing your total daily calorie budget from the <a href="/daily-calorie-needs">Daily Calorie Needs Calculator</a>, there is nothing to split.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does meal timing matter?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'For most people, total daily calorie and macronutrient intake are more important than precise meal timing. However, some people find that eating at regular intervals helps with energy levels and appetite control. Consuming protein and carbs around your workout can also improve performance and recovery.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I track calories for each meal?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Using a food scale and a tracking app is the most accurate method. After determining your macro goals with the <a href="/macronutrient-ratio">Macronutrient Ratio Calculator</a>, you can plan meals that fit both your per-meal calorie target and your daily macro goals.',
        },
      },
      {
        '@type': 'Question',
        name: 'What if I eat more meals one day and fewer the next?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Consistency is helpful, but don\'t worry about small daily variations. Your weekly average intake is what matters most for long-term progress. Use the <a href="/weekly-weight-change-tracker">Weekly Weight Change Tracker</a> to monitor your trend over time.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is it better to eat 3 large meals or 6 small meals?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'There is no "better" way; it depends on your personal preference, schedule, and hunger cues. As long as your total daily calories from the <a href="/daily-calorie-needs">Daily Calorie Needs Calculator</a> are the same, both approaches can be equally effective for weight management.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I split my macros for each meal?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A simple approach is to divide your total daily protein, carbs, and fat from the <a href="/macronutrient-ratio">Macronutrient Ratio Calculator</a> by the number of meals. Aim to include a protein source in each meal to promote satiety and muscle maintenance.',
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
              <BreadcrumbPage>Meal Calorie Split Calculator</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <Card>
          <CardHeader>
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 text-primary p-3 rounded-lg">
                <Soup className="h-8 w-8" />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold">
                  Meal Calorie Split Calculator
                </h1>
                <p className="text-muted-foreground">
                  Divide your daily calorie goal into balanced meals to make meal planning simple. Start with your target from the <Link href="/daily-calorie-needs" className="text-primary hover:underline">Daily Calorie Needs Calculator</Link> to structure your nutrition throughout the day.
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <MealCalorieSplitCalculatorForm />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>How to Use the Meal Calorie Split Calculator</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              This tool provides a simple way to structure your daily eating plan.
            </p>
            <ol className="list-decimal list-inside space-y-2">
              <li><strong>Get Your Daily Calorie Goal:</strong> The most important step. Use our <Link href="/daily-calorie-needs" className="text-primary hover:underline">Daily Calorie Needs Calculator</Link> to determine your calorie target for weight loss, maintenance, or gain.</li>
              <li><strong>Enter Your Calorie Goal:</strong> Input your total daily calories.</li>
              <li><strong>Select Number of Meals:</strong> Choose how many times you plan to eat in a day (including snacks).</li>
              <li><strong>Calculate Your Split:</strong> The calculator will divide your total calories evenly, giving you a per-meal target to aim for.</li>
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
                  <TableCell>Total Daily Calories</TableCell>
                  <TableCell>2100 kcal</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Number of Meals</TableCell>
                  <TableCell>4</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-bold">Calories Per Meal</TableCell>
                  <TableCell className="font-bold">525 kcal</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Interpretation & Next Step</TableCell>
                  <TableCell>To hit a 2100 calorie target over 4 meals, each meal should be around 525 calories. The next step is to use the <Link href="/macronutrient-ratio" className="text-primary hover:underline">Macronutrient Ratio Calculator</Link> to further break down what should be in those meals.</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Understanding Meal Frequency</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <h3 className="font-semibold text-lg text-foreground">Does Meal Frequency Matter?</h3>
            <p>
              The debate over whether it's better to eat many small meals or a few large ones is ongoing. For most people, research suggests that as long as total daily calories and macronutrients are controlled, meal frequency has little to no impact on fat loss or muscle gain.
            </p>
            <p>
              However, meal frequency is a powerful tool for managing hunger, energy levels, and adherence to your diet.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>More frequent meals (4-6 per day):</strong> This can help control hunger, prevent overeating at main meals, and provide a steady supply of nutrients, which can be beneficial for athletes.</li>
              <li><strong>Less frequent meals (2-3 per day):</strong> This approach, often used in intermittent fasting, allows for larger, more satisfying meals, which some people find easier to stick with.</li>
            </ul>
            <p>Ultimately, the best meal frequency is the one that fits your lifestyle, schedule, and preferences. This calculator helps you plan for whichever approach you choose. The key is to be consistent and hit your total daily targets from the <Link href="/daily-calorie-needs" className="text-primary hover:underline">Daily Calorie Needs Calculator</Link>.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Common Mistakes</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>Ignoring Total Calories:</strong> Focusing on meal size without ensuring your total daily intake aligns with your goal from the <Link href="/daily-calorie-needs" className="text-primary hover:underline">Daily Calorie Needs Calculator</Link>.</li>
              <li><strong>Being Too Rigid:</strong> It's okay if your meals aren't perfectly even. Some people prefer a larger breakfast and a smaller dinner, or vice-versa. Flexibility is key.</li>
              <li><strong>Not Planning Ahead:</strong> Without a plan, it's easy to misjudge portion sizes and end up over or under your target for the day.</li>
              <li><strong>Forgetting About Snacks:</strong> If you include snacks, remember to count them as "meals" in the calculator to get an accurate split.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Pro Tips & Quick Hacks</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>Plan a "Protein-Plus" Structure:</strong> Use this calculator for your overall calorie split, then use the <Link href="/protein-intake" className="text-primary hover:underline">Protein Intake Calculator</Link> to ensure each meal contains an adequate serving of protein (e.g., 20-40g).</li>
              <li><strong>Customize Your Split:</strong> Use the "even split" as a baseline. If you're hungrier in the evenings, allocate more calories to your dinner. The daily total is what matters.</li>
              <li><strong>Use for Meal Prep:</strong> Once you have your per-meal calorie target, you can batch-prepare meals that fit this goal, making your week much easier.</li>
              <li><strong>Liquid Calories Count:</strong> Don't forget to account for calories from drinks, sauces, and oils when planning your meals.</li>
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
                <AccordionTrigger>Do all my meals have to be the same size?</AccordionTrigger>
                <AccordionContent>No, this calculator provides an even split as a simple starting point. You can customize your meal sizes based on your preferences. For example, you might want a larger lunch and a smaller dinner. The most important thing is hitting your total daily calorie goal from the <a href="/daily-calorie-needs">Daily Calorie Needs Calculator</a>.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Why do I need my daily calorie goal first?</AccordionTrigger>
                <AccordionContent>This calculator's purpose is to divide a total number. Without knowing your total daily calorie budget from the <a href="/daily-calorie-needs">Daily Calorie Needs Calculator</a>, there is nothing to split.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Does meal timing matter?</AccordionTrigger>
                <AccordionContent>For most people, total daily calorie and macronutrient intake are more important than precise meal timing. However, some people find that eating at regular intervals helps with energy levels and appetite control. Consuming protein and carbs around your workout can also improve performance and recovery.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>How do I track calories for each meal?</AccordionTrigger>
                <AccordionContent>Using a food scale and a tracking app is the most accurate method. After determining your macro goals with the <a href="/macronutrient-ratio">Macronutrient Ratio Calculator</a>, you can plan meals that fit both your per-meal calorie target and your daily macro goals.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>What if I eat more meals one day and fewer the next?</AccordionTrigger>
                <AccordionContent>Consistency is helpful, but don't worry about small daily variations. Your weekly average intake is what matters most for long-term progress. Use the <a href="/weekly-weight-change-tracker">Weekly Weight Change Tracker</a> to monitor your trend over time.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger>Is it better to eat 3 large meals or 6 small meals?</AccordionTrigger>
                <AccordionContent>There is no "better" way; it depends on your personal preference, schedule, and hunger cues. As long as your total daily calories from the <a href="/daily-calorie-needs">Daily Calorie Needs Calculator</a> are the same, both approaches can be equally effective for weight management.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7">
                <AccordionTrigger>How do I split my macros for each meal?</AccordionTrigger>
                <AccordionContent>A simple approach is to divide your total daily protein, carbs, and fat from the <a href="/macronutrient-ratio">Macronutrient Ratio Calculator</a> by the number of meals. Aim to include a protein source in each meal to promote satiety and muscle maintenance.</AccordionContent>
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
                  <TableCell>Meal Preppers</TableCell>
                  <TableCell>Create perfectly portioned meals for the week to ensure consistency.</TableCell>
                  <TableCell><Link href="/macronutrient-ratio" className="text-primary hover:underline">Macronutrient Ratio</Link></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>People with Busy Schedules</TableCell>
                  <TableCell>Plan quick, calorie-appropriate meals and snacks to fit their day.</TableCell>
                  <TableCell><Link href="/daily-calorie-needs" className="text-primary hover:underline">Daily Calorie Needs</Link></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Athletes</TableCell>
                  <TableCell>Structure meals and snacks around training sessions to optimize fueling and recovery.</TableCell>
                  <TableCell><Link href="/carb-intake" className="text-primary hover:underline">Carb Intake Calculator</Link></TableCell>
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
            <Link href="/daily-calorie-needs" className="p-4 border rounded-lg hover:bg-muted">
              <h3 className="font-semibold">Daily Calorie Needs Calculator</h3>
              <p className="text-sm text-muted-foreground">The essential first step. Get the total calorie target you need for this tool.</p>
            </Link>
            <Link href="/macronutrient-ratio" className="p-4 border rounded-lg hover:bg-muted">
              <h3 className="font-semibold">Macronutrient Ratio Calculator</h3>
              <p className="text-sm text-muted-foreground">Break down your meal calories into protein, carb, and fat goals.</p>
            </Link>
            <Link href="/protein-intake" className="p-4 border rounded-lg hover:bg-muted">
              <h3 className="font-semibold">Protein Intake Calculator</h3>
              <p className="text-sm text-muted-foreground">Ensure each meal contains enough protein to support your goals.</p>
            </Link>
             <Link href="/calorie-deficit" className="p-4 border rounded-lg hover:bg-muted">
              <h3 className="font-semibold">Calorie Deficit Calculator</h3>
              <p className="text-sm text-muted-foreground">If you're in a fat loss phase, get your total daily calorie goal here.</p>
            </Link>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
