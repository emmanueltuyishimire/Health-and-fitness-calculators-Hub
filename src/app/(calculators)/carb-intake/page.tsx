
import type { Metadata } from 'next';
import Link from 'next/link';
import { BrainCircuit } from 'lucide-react';
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
import { CarbIntakeCalculatorForm } from '@/components/carb-intake-calculator-form';

export const metadata: Metadata = {
  title: 'Carbohydrate Intake Calculator – Fuel Your Performance',
  description:
    'Calculate your optimal daily carbohydrate intake based on your body weight, activity level, and fitness goals. Fuel your workouts and daily life effectively.',
  openGraph: {
    title: 'Carbohydrate Intake Calculator – Fuel Your Performance',
    description:
      'Calculate your optimal daily carbohydrate intake based on your body weight, activity level, and fitness goals. Fuel your workouts and daily life effectively.',
    type: 'website',
  },
};

export default function CarbIntakePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Carbohydrate Intake Calculator',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
    },
    description:
      'A free web-based calculator to determine daily carbohydrate intake needs based on body weight, activity level, and goals.',
  };

  const howToJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Calculate Your Carb Intake',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Enter Your Weight',
        text: 'Input your current body weight in kg or lbs.',
      },
      {
        '@type': 'HowToStep',
        name: 'Select Activity Level',
        text: 'Choose the activity level that best describes your training volume.',
      },
      {
        '@type': 'HowToStep',
        name: 'Calculate',
        text: 'The calculator provides a recommended daily carbohydrate intake range in grams to fuel your activity.',
      },
    ],
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Why are carbohydrates important?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Carbohydrates are the body\'s preferred source of energy. They are broken down into glucose, which fuels your muscles, brain, and other organs. Adequate carb intake is essential for performance, recovery, and cognitive function.',
        },
      },
      {
        '@type': 'Question',
        name: 'How many carbs do I need per day?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Carbohydrate needs vary greatly based on activity level. A sedentary person needs far fewer carbs than an endurance athlete. This calculator provides a range based on established sports nutrition guidelines, from about 3 g/kg for light activity to 8-12 g/kg for extreme activity.',
        },
      },
      {
        '@type': 'Question',
        name: 'Should I eat carbs to lose weight?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, for most people. While low-carb diets can be effective, carbs are not inherently fattening. Weight loss is determined by a <a href="/calorie-adjustment-for-weight-loss">calorie deficit</a>, not the absence of carbs. Carbs can fuel workouts, helping you burn more calories and preserve muscle.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are "good" vs. "bad" carbs?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '"Good" carbs (complex carbs) like oats, brown rice, and vegetables provide sustained energy and fiber. "Bad" carbs (simple sugars) like candy and soda provide a quick energy spike but few nutrients. Prioritize complex carbs for most of your intake.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does this fit with my total calories?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'This calculator gives a specific carb target. You should combine this with your protein goal from the <a href="/protein-intake">Protein Intake Calculator</a> and fill the remaining calories with healthy fats to meet your total daily goal from the <a href="/daily-calorie-needs">Daily Calorie Needs Calculator</a>.',
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
              <BreadcrumbPage>Carb Intake Calculator</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <Card>
          <CardHeader>
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 text-primary p-3 rounded-lg">
                <BrainCircuit className="h-8 w-8" />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold">
                  Carbohydrate Intake Calculator
                </h1>
                <p className="text-muted-foreground">
                  Determine your daily carbohydrate needs to fuel your brain, body, and performance. This calculator provides a target based on your body weight and activity level, a crucial step after establishing your total calorie needs with the <Link href="/daily-calorie-needs" className="text-primary hover:underline">Daily Calorie Needs Calculator</Link>.
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <CarbIntakeCalculatorForm />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>How to Use the Carb Intake Calculator</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              This calculator estimates your daily carbohydrate needs based on sports nutrition guidelines. It focuses on your body weight and training volume.
            </p>
            <ol className="list-decimal list-inside space-y-2">
              <li><strong>Enter Your Body Weight:</strong> Provide your current weight in either kilograms (kg) or pounds (lbs).</li>
              <li><strong>Select Your Activity Level:</strong> Choose the option that best reflects your daily and weekly training volume.</li>
              <li><strong>Calculate:</strong> The tool will display a recommended range of daily carbohydrate intake in grams. This range helps you plan your meals to support your energy needs, which can be further broken down with the <Link href="/macronutrient-ratio" className="text-primary hover:underline">Macronutrient Ratio Calculator</Link>.</li>
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
                  <TableHead>Example (Moderately Active)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Weight</TableCell>
                  <TableCell>150 lbs</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Activity Level</TableCell>
                  <TableCell>Moderate Activity (~1h/day)</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-bold">Recommended Carbs</TableCell>
                  <TableCell className="font-bold">345 - 480 g/day</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Interpretation & Next Step</TableCell>
                  <TableCell>This individual needs a significant amount of carbs to fuel their training. Their next step is to use the <Link href="/macronutrient-ratio" className="text-primary hover:underline">Macronutrient Ratio Calculator</Link> to see how this fits with their total calorie and protein goals.</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Understanding Carbohydrate Needs</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <h3 className="font-semibold text-lg text-foreground">Carbs: Your Body's Primary Fuel Source</h3>
            <p>Carbohydrates are the most important source of energy for your body. Your digestive system changes carbohydrates into glucose (blood sugar). Your body uses this sugar for energy for your cells, tissues and organs. It stores any extra sugar in your liver and muscles (as glycogen) for when it is needed.</p>
            <p>For active individuals, adequate carbohydrate intake is crucial for:</p>
            <ul className="list-disc list-inside space-y-2">
                <li><strong>Performance:</strong> Carbs are the main fuel for moderate-to-high intensity exercise. Depleted muscle glycogen leads to fatigue and a drop in performance.</li>
                <li><strong>Recovery:</strong> Replenishing glycogen stores after a workout is essential for muscle recovery and preparing for your next session.</li>
                <li><strong>Brain Function:</strong> Your brain relies almost exclusively on glucose for energy. Low carb availability can lead to mental fog and reduced concentration.</li>
                <li><strong>Muscle Sparing:</strong> When carbohydrate availability is too low, your body can break down protein (muscle tissue) to create glucose. Eating enough carbs prevents this.</li>
            </ul>

            <h3 className="font-semibold text-lg text-foreground">Carb Needs for Different Activity Levels</h3>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Activity Level</TableHead>
                        <TableHead>Carb Range (per kg)</TableHead>
                        <TableHead>Carb Range (per lb)</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell>Light Activity</TableCell>
                        <TableCell>3 - 5 g/kg</TableCell>
                        <TableCell>1.4 - 2.3 g/lb</TableCell>
                    </TableRow>
                     <TableRow>
                        <TableCell>Moderate Activity (~1h/day)</TableCell>
                        <TableCell>5 - 7 g/kg</TableCell>
                        <TableCell>2.3 - 3.2 g/lb</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>High Activity (1-3h/day)</TableCell>
                        <TableCell>6 - 10 g/kg</TableCell>
                        <TableCell>2.7 - 4.5 g/lb</TableCell>
                    </TableRow>
                     <TableRow>
                        <TableCell>Very High Activity (4-5h+/day)</TableCell>
                        <TableCell>8 - 12 g/kg</TableCell>
                        <TableCell>3.6 - 5.5 g/lb</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            <p className="text-sm mt-4">Note that these are general guidelines from sports nutrition research. Your individual needs may vary. Use this as a starting point and adjust based on your performance, recovery, and body composition changes, which you can monitor with the <Link href="/fat-loss-tracker" className="text-primary hover:underline">Fat Loss Tracker</Link>.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Common Mistakes</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>Fearing Carbs:</strong> Many people unnecessarily fear carbs when trying to lose weight. The real culprit is excess calories, not a specific macronutrient.</li>
              <li><strong>Poor Carb Quality:</strong> Relying on sugary, refined carbs can lead to energy crashes. Prioritize complex carbohydrates like whole grains, vegetables, and legumes.</li>
              <li><strong>Ignoring Nutrient Timing:</strong> Consuming carbohydrates around your workout window (before, during, or after) can significantly improve performance and recovery.</li>
              <li><strong>Not Matching Intake to Activity:</strong> Eating the same high-carb diet on a rest day as you do on a heavy training day might be unnecessary. Consider having higher carb days on more active days.</li>
            </ul>
          </CardContent>
        </Card>
        
        <Card>
            <CardHeader><CardTitle>Pro Tips & Quick Hacks</CardTitle></CardHeader>
            <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li><strong>Time Your Carbs Around Workouts:</strong> Consume a carb-rich meal 1-3 hours before your workout for energy, and another within 2 hours after to replenish glycogen stores.</li>
                    <li><strong>Choose High-Fiber Carbs:</strong> Fiber slows digestion, providing a more sustained energy release and promoting gut health. Oats, beans, and whole-wheat bread are great choices.</li>
                    <li><strong>Use Simple Carbs Strategically:</strong> Quick-digesting carbs like a banana or a sports drink can be beneficial immediately before or during a long, intense workout for fast energy.</li>
                    <li><strong>Listen to Your Body:</strong> The right carb intake is individual. If you feel sluggish and your performance is suffering, you may need more carbs. If you're gaining unwanted fat, you might need to slightly reduce them within your calorie budget from the <Link href="/calorie-adjustment-for-weight-loss" className="text-primary hover:underline">Calorie Adjustment for Weight Loss</Link>.</li>
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
                <AccordionTrigger>Why are carbohydrates important?</AccordionTrigger>
                <AccordionContent>Carbohydrates are the body's preferred source of energy. They are broken down into glucose, which fuels your muscles, brain, and other organs. Adequate carb intake is essential for performance, recovery, and cognitive function.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>How many carbs do I need per day?</AccordionTrigger>
                <AccordionContent>Carbohydrate needs vary greatly based on activity level. A sedentary person needs far fewer carbs than an endurance athlete. This calculator provides a range based on established sports nutrition guidelines, from about 3 g/kg for light activity to 8-12 g/kg for extreme activity.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Should I eat carbs to lose weight?</AccordionTrigger>
                <AccordionContent>Yes, for most people. While low-carb diets can be effective, carbs are not inherently fattening. Weight loss is determined by a <Link href="/calorie-adjustment-for-weight-loss" className="text-primary hover:underline">calorie deficit</Link>, not the absence of carbs. Carbs can fuel workouts, helping you burn more calories and preserve muscle.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>What are "good" vs. "bad" carbs?</AccordionTrigger>
                <AccordionContent>"Good" carbs (complex carbs) like oats, brown rice, and vegetables provide sustained energy and fiber. "Bad" carbs (simple sugars) like candy and soda provide a quick energy spike but few nutrients. Prioritize complex carbs for most of your intake.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>How does this fit with my total calories?</AccordionTrigger>
                <AccordionContent>This calculator gives a specific carb target. You should combine this with your protein goal from the <Link href="/protein-intake" className="text-primary hover:underline">Protein Intake Calculator</Link> and fill the remaining calories with healthy fats to meet your total daily goal from the <Link href="/daily-calorie-needs" className="text-primary hover:underline">Daily Calorie Needs Calculator</Link>.</AccordionContent>
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
                  <TableCell>Endurance Athletes</TableCell>
                  <TableCell>Ensure adequate glycogen stores for long runs, rides, or swims.</TableCell>
                  <TableCell><Link href="/calorie-adjustment-for-weight-gain" className="text-primary hover:underline" aria-label="Calorie Adjustment for Weight Gain">Calorie Adjustment (Gain)</Link></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Bodybuilders</TableCell>
                  <TableCell>Fuel intense lifting sessions and replenish glycogen to maximize muscle growth.</TableCell>
                  <TableCell><Link href="/ffmi" className="text-primary hover:underline" aria-label="FFMI Calculator">FFMI Calculator</Link></TableCell>
                </TableRow>
                 <TableRow>
                  <TableCell>General Fitness Enthusiast</TableCell>
                  <TableCell>Optimize energy levels for workouts and daily life.</TableCell>
                  <TableCell><Link href="/macronutrient-ratio" className="text-primary hover:underline" aria-label="Macronutrient Ratio Calculator">Macronutrient Ratio</Link></TableCell>
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
            <Link href="/macronutrient-ratio" className="p-4 border rounded-lg hover:bg-muted" aria-label="Macronutrient Ratio Calculator">
              <h3 className="font-semibold">Macronutrient Ratio Calculator</h3>
              <p className="text-sm text-muted-foreground">Integrate your carb goal into a full macronutrient plan.</p>
            </Link>
            <Link href="/daily-calorie-needs" className="p-4 border rounded-lg hover:bg-muted" aria-label="Daily Calorie Needs Calculator">
              <h3 className="font-semibold">Daily Calorie Needs Calculator</h3>
              <p className="text-sm text-muted-foreground">Ensure your carb and protein intake fits within your total calorie budget.</p>
            </Link>
            <Link href="/protein-intake" className="p-4 border rounded-lg hover:bg-muted" aria-label="Protein Intake Calculator">
              <h3 className="font-semibold">Protein Intake Calculator</h3>
              <p className="text-sm text-muted-foreground">Calculate your protein needs to complement your carb intake.</p>
            </Link>
            <Link href="/calorie-adjustment-for-weight-loss" className="p-4 border rounded-lg hover:bg-muted" aria-label="Calorie Adjustment for Weight Loss">
              <h3 className="font-semibold">Calorie Adjustment (Loss)</h3>
              <p className="text-sm text-muted-foreground">If fat loss is the goal, set your total calorie target here.</p>
            </Link>
          </CardContent>
        </Card>

      </div>
    </>
  );
}
