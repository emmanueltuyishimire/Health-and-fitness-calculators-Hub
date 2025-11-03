
import type { Metadata } from 'next';
import Link from 'next/link';
import { PieChart } from 'lucide-react';
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
import { MacronutrientRatioCalculatorForm } from '@/components/macronutrient-ratio-calculator-form';

export const metadata: Metadata = {
  title: 'Macronutrient Ratio Calculator – Plan Your Meals',
  description:
    'Calculate the ideal ratio of protein, carbs, and fat for your calorie goal. Tailor your diet for weight loss, muscle gain, or maintenance with our macronutrient calculator.',
  openGraph: {
    title: 'Macronutrient Ratio Calculator – Plan Your Meals',
    description:
      'Calculate the ideal ratio of protein, carbs, and fat for your calorie goal. Tailor your diet for weight loss, muscle gain, or maintenance with our macronutrient calculator.',
    type: 'website',
  },
};

export default function MacronutrientRatioPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Macronutrient Ratio Calculator',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
    },
    description:
      'A free web-based calculator to determine macronutrient (protein, carb, fat) splits from a daily calorie target.',
  };

  const howToJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Calculate Your Macronutrients',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Determine Calorie Needs',
        text: 'First, use the Daily Calorie Needs Calculator to find your daily calorie target.',
        url: '/daily-calorie-needs'
      },
      {
        '@type': 'HowToStep',
        name: 'Enter Calorie Target',
        text: 'Input your daily calorie goal into the calculator.',
      },
      {
        '@type': 'HowToStep',
        name: 'Choose a Diet Plan',
        text: 'Select a pre-defined diet ratio (like Balanced, Low Carb, or High Protein) or choose "Custom" to set your own percentages.',
      },
      {
        '@type': 'HowToStep',
        name: 'Calculate Macros',
        text: 'The calculator will show you the exact grams of protein, carbohydrates, and fat to consume daily.',
      },
    ],
  };
  
    const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What are macronutrients?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Macronutrients ("macros") are the three main nutrients your body needs in large amounts: protein, carbohydrates, and fat. Protein has 4 calories per gram, carbs have 4, and fat has 9.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why do I need my daily calorie target first?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Macronutrient goals are derived from your total calorie goal. First, you need to know your total energy budget, which you can find with our <a href="/daily-calorie-needs">Daily Calorie Needs Calculator</a>. Then, you can decide how to "spend" those calories on protein, carbs, and fat.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which macronutrient ratio is best for weight loss?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'For weight loss, a higher protein ratio is often beneficial as it helps preserve muscle and increases satiety. The "High Protein" or "Low Carb" settings are popular choices. However, the most important factor for weight loss is maintaining a <a href="/calorie-deficit">calorie deficit</a>.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which macronutrient ratio is best for muscle gain?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'For muscle gain, a "High Protein" ratio is essential to provide the building blocks for new muscle tissue. You also need adequate carbohydrates to fuel workouts. This must be combined with a <a href="/calorie-surplus">calorie surplus</a>.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is a low-carb diet effective?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Low-carb diets can be very effective for weight loss for some individuals, as they can help control appetite and insulin levels. However, they are not superior to other diets for fat loss as long as calories and protein are matched. Your personal preference is key.',
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
              <BreadcrumbPage>Macronutrient Ratio Calculator</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <Card>
          <CardHeader>
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 text-primary p-3 rounded-lg">
                <PieChart className="h-8 w-8" />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold">
                  Macronutrient Ratio Calculator
                </h1>
                <p className="text-muted-foreground">
                  Turn your calorie goal into a tangible meal plan. This calculator breaks down your daily calories into grams of protein, carbs, and fat based on your chosen diet. First, determine your total energy needs with the <Link href="/daily-calorie-needs" className="text-primary hover:underline">Daily Calorie Needs Calculator</Link>.
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <MacronutrientRatioCalculatorForm />
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>How to Use the Macronutrient Calculator</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              This tool translates your abstract calorie goal into concrete food targets. It’s the bridge between knowing how much to eat and knowing *what* to eat.
            </p>
            <ol className="list-decimal list-inside space-y-2">
              <li><strong>Get Your Calorie Target:</strong> The most important step. Use our <Link href="/daily-calorie-needs" className="text-primary hover:underline">Daily Calorie Needs Calculator</Link> to find your maintenance, weight loss, or weight gain calorie goal.</li>
              <li><strong>Enter Your Calorie Goal:</strong> Input this number into the form.</li>
              <li><strong>Choose Your Diet Plan:</strong> Select from common diet ratios like "Balanced," "Low Carb," or "High Protein." If you have specific targets, choose "Custom" and set your own percentages.</li>
              <li><strong>Calculate Your Macros:</strong> The calculator will instantly show you how many grams of protein, carbohydrates, and fat you should aim for each day.</li>
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
                  <TableHead>Example 1 (Weight Loss)</TableHead>
                  <TableHead>Example 2 (Muscle Gain)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Daily Calorie Target</TableCell>
                  <TableCell>1800 kcal</TableCell>
                  <TableCell>3000 kcal</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Chosen Diet</TableCell>
                  <TableCell>High Protein (40/30/30)</TableCell>
                  <TableCell>Balanced (30/40/30)</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-bold">Protein</TableCell>
                  <TableCell className="font-bold">180g</TableCell>
                  <TableCell className="font-bold">225g</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-bold">Carbohydrates</TableCell>
                  <TableCell className="font-bold">135g</TableCell>
                  <TableCell className="font-bold">300g</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-bold">Fat</TableCell>
                  <TableCell className="font-bold">60g</TableCell>
                  <TableCell className="font-bold">100g</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Interpretation & Next Step</TableCell>
                  <TableCell>This user has a high protein target to preserve muscle in a <Link href="/calorie-deficit" className="text-primary hover:underline">deficit</Link>. Their next step is to plan meals that fit these targets.</TableCell>
                  <TableCell>This user has high carbs to fuel workouts and high protein to build muscle in a <Link href="/calorie-surplus" className="text-primary hover:underline">surplus</Link>. They could track their muscle gain with the <Link href="/ffmi" className="text-primary hover:underline">FFMI Calculator</Link>.</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Understanding Macronutrients</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <h3 className="font-semibold text-lg text-foreground">The Building Blocks of Your Diet</h3>
            <p>Macronutrients are the nutrients your body uses for energy and to build and repair tissue. They are protein, carbohydrates, and fat. Each plays a unique role:</p>
            <ul className="list-disc list-inside space-y-2">
                <li><strong>Protein (4 calories per gram):</strong> Essential for building and repairing tissues, including muscle. It is also the most satiating macronutrient, making it crucial for weight loss.</li>
                <li><strong>Carbohydrates (4 calories per gram):</strong> The body's primary and preferred source of energy, especially for high-intensity exercise.</li>
                <li><strong>Fat (9 calories per gram):</strong> Crucial for hormone production, vitamin absorption, and overall health. It is the most energy-dense macronutrient.</li>
            </ul>
            <p>While your total calorie intake determines whether you gain or lose weight, the ratio of these macronutrients can significantly impact your body composition, energy levels, and satiety.</p>

            <h3 className="font-semibold text-lg text-foreground">Choosing the Right Ratio for Your Goal</h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Diet Plan</TableHead>
                  <TableHead>Protein/Carb/Fat %</TableHead>
                  <TableHead>Best For</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Balanced</TableCell>
                  <TableCell>30/40/30</TableCell>
                  <TableCell>General health, maintenance, and sustainable lifestyle.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>High Protein</TableCell>
                  <TableCell>40/30/30</TableCell>
                  <TableCell>Weight loss (preserving muscle) and muscle gain.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Low Carb</TableCell>
                  <TableCell>40/20/40</TableCell>
                  <TableCell>Weight loss, especially for those who feel better with fewer carbs.</TableCell>
                </TableRow>
                 <TableRow>
                  <TableCell>Ketogenic</TableCell>
                  <TableCell>30/5/65</TableCell>
                  <TableCell>Very low-carb diet for inducing ketosis. Best done under guidance.</TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <p className="text-sm mt-4">Remember, the "best" diet is the one you can stick to consistently that supports your goals and makes you feel good.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Common Mistakes</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>Ignoring Calories:</strong> Hitting your macro targets is great, but if your total calories are wrong, you won't achieve your weight goal. Calories are always king.</li>
              <li><strong>Being Too Rigid:</strong> Don't stress if you're not perfect every day. Aim for a weekly average that's close to your targets.</li>
              <li><strong>Not Eating Enough Protein:</strong> This is the most common mistake. Most people, especially those who are active, benefit from a higher protein intake than standard guidelines suggest.</li>
              <li><strong>Fearing Fats or Carbs:</strong> Both fats and carbs are essential for a healthy body. Extreme restriction is unnecessary for most people and can be counterproductive.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Pro Tips & Quick Hacks</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>Build Meals Around Protein:</strong> Start planning each meal by choosing a lean protein source. This makes it easier to hit your protein goal.</li>
              <li><strong>Use a Food Tracking App:</strong> Apps like MyFitnessPal or Cronometer make it easy to track your daily intake against your macro targets.</li>
              <li><strong>Prep in Bulk:</strong> Cook large batches of protein sources (like chicken breast) and carb sources (like rice or quinoa) to make meal assembly quick and easy.</li>
              <li><strong>Don't Forget Fiber:</strong> Fiber is a type of carbohydrate that's crucial for digestive health and satiety. Prioritize vegetables, fruits, and whole grains.</li>
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
                <AccordionTrigger>What are macronutrients?</AccordionTrigger>
                <AccordionContent>Macronutrients ("macros") are the three main nutrients your body needs in large amounts: protein, carbohydrates, and fat. Protein has 4 calories per gram, carbs have 4, and fat has 9.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Why do I need my daily calorie target first?</AccordionTrigger>
                <AccordionContent>Macronutrient goals are derived from your total calorie goal. First, you need to know your total energy budget, which you can find with our <Link href="/daily-calorie-needs" className="text-primary hover:underline">Daily Calorie Needs Calculator</Link>. Then, you can decide how to "spend" those calories on protein, carbs, and fat.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Which macronutrient ratio is best for weight loss?</AccordionTrigger>
                <AccordionContent>For weight loss, a higher protein ratio is often beneficial as it helps preserve muscle and increases satiety. The "High Protein" or "Low Carb" settings are popular choices. However, the most important factor for weight loss is maintaining a <Link href="/calorie-deficit" className="text-primary hover:underline">calorie deficit</Link>.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Which macronutrient ratio is best for muscle gain?</AccordionTrigger>
                <AccordionContent>For muscle gain, a "High Protein" ratio is essential to provide the building blocks for new muscle tissue. You also need adequate carbohydrates to fuel workouts. This must be combined with a <Link href="/calorie-surplus" className="text-primary hover:underline">calorie surplus</Link>.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Is a low-carb diet effective?</AccordionTrigger>
                <AccordionContent>Low-carb diets can be very effective for weight loss for some individuals, as they can help control appetite and insulin levels. However, they are not superior to other diets for fat loss as long as calories and protein are matched. Your personal preference is key.</AccordionContent>
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
                  <TableCell>Create a structured meal plan that aligns with their calorie goals.</TableCell>
                  <TableCell>Meal Calorie Split Calculator</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Bodybuilders</TableCell>
                  <TableCell>Precisely control macro intake for "bulking" or "cutting" phases.</TableCell>
                  <TableCell><Link href="/ffmi" className="text-primary hover:underline">FFMI Calculator</Link></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Endurance Athletes</TableCell>
                  <TableCell>Ensure adequate carbohydrate intake to fuel long training sessions.</TableCell>
                  <TableCell>Carb Intake Calculator</TableCell>
                </TableRow>
                 <TableRow>
                  <TableCell>Nutritionists</TableCell>
                  <TableCell>Provide clients with specific, easy-to-follow daily food targets.</TableCell>
                  <TableCell><Link href="/protein-intake" className="text-primary hover:underline">Protein Intake Calculator</Link></TableCell>
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
              <p className="text-sm text-muted-foreground">The essential first step. Get the calorie target you need for this calculator.</p>
            </Link>
            <Link href="/protein-intake" className="p-4 border rounded-lg hover:bg-muted">
              <h3 className="font-semibold">Protein Intake Calculator</h3>
              <p className="text-sm text-muted-foreground">Do a deeper dive into your specific protein needs based on your body weight and goals.</p>
            </Link>
             <Link href="/calorie-deficit" className="p-4 border rounded-lg hover:bg-muted">
              <h3 className="font-semibold">Calorie Deficit Calculator</h3>
              <p className="text-sm text-muted-foreground">Establish your calorie target for weight loss.</p>
            </Link>
            <Link href="/calorie-surplus" className="p-4 border rounded-lg hover:bg-muted">
              <h3 className="font-semibold">Calorie Surplus Calculator</h3>
              <p className="text-sm text-muted-foreground">Establish your calorie target for muscle gain.</p>
            </Link>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
