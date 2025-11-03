
import type { Metadata } from 'next';
import Link from 'next/link';
import { Egg } from 'lucide-react';
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
import { ProteinIntakeCalculatorForm } from '@/components/protein-intake-calculator-form';

export const metadata: Metadata = {
  title: 'Protein Intake Calculator – Optimize Your Nutrition',
  description:
    'Calculate your optimal daily protein intake based on your body weight, activity level, and fitness goals. Ensure you are fueling muscle growth and recovery effectively.',
  openGraph: {
    title: 'Protein Intake Calculator – Optimize Your Nutrition',
    description:
      'Calculate your optimal daily protein intake based on your body weight, activity level, and fitness goals. Ensure you are fueling muscle growth and recovery effectively.',
    type: 'website',
  },
};

export default function ProteinIntakePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Protein Intake Calculator',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
    },
    description:
      'A free web-based calculator to determine daily protein intake needs based on body weight, activity level, and goals.',
  };
  
  const howToJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Calculate Your Protein Intake',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Enter Your Weight',
        text: 'Input your current body weight. The calculator works with both kg and lbs.',
      },
      {
        '@type': 'HowToStep',
        name: 'Select Activity Level',
        text: 'Choose the activity level that best describes your lifestyle, from sedentary to very active.',
      },
      {
        '@type': 'HowToStep',
        name: 'Select Your Goal',
        text: 'Choose your primary fitness goal, such as fat loss, muscle maintenance, or muscle gain.',
      },
      {
        '@type': 'HowToStep',
        name: 'Calculate',
        text: 'The calculator will provide a recommended daily protein intake range in grams.',
      },
    ],
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Why is protein important?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Protein is a crucial macronutrient essential for building and repairing tissues, including muscle. It also plays a vital role in hormone production and immune function. A higher protein intake can increase satiety, helping with weight management.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much protein do I need for muscle gain?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'For muscle gain, a common recommendation is 1.6 to 2.2 grams of protein per kilogram of body weight (or 0.7 to 1.0 grams per pound). This calculator helps you pinpoint a target within that range. This should be combined with a <a href="/calorie-surplus">calorie surplus</a>.',
        },
      },
       {
        '@type': 'Question',
        name: 'How much protein do I need for fat loss?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'During fat loss, a higher protein intake is crucial to preserve muscle mass. Recommendations are often similar to or even slightly higher than for muscle gain (1.6-2.4 g/kg). Use this calculator alongside the <a href="/calorie-deficit">Calorie Deficit Calculator</a>.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you eat too much protein?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'For healthy individuals, high protein intake (up to 2.5-3.0 g/kg) is generally safe. However, exceeding your needs is not necessarily better, as the excess will be converted to energy. People with pre-existing kidney conditions should consult a doctor.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is it better to calculate protein based on total weight or lean body mass?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Calculating based on <a href="/lean-body-mass">Lean Body Mass</a> is more accurate, especially for individuals with higher body fat percentages. However, calculating based on total body weight is simpler and provides a good estimate for most people.',
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
              <BreadcrumbPage>Protein Intake Calculator</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <Card>
          <CardHeader>
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 text-primary p-3 rounded-lg">
                <Egg className="h-8 w-8" />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold">
                  Protein Intake Calculator
                </h1>
                <p className="text-muted-foreground">
                    Determine your daily protein needs to support your fitness goals, whether you're looking to build muscle, lose fat, or maintain your physique. This is a crucial step after you've determined your calorie goals with the <Link href="/daily-calorie-needs" className="text-primary hover:underline">Daily Calorie Needs Calculator</Link>.
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <ProteinIntakeCalculatorForm />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>How to Use the Protein Intake Calculator</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              This calculator provides a personalized protein intake range based on your body weight, activity level, and primary fitness goal.
            </p>
            <ol className="list-decimal list-inside space-y-2">
              <li><strong>Enter Your Body Weight:</strong> Provide your current weight in either kilograms (kg) or pounds (lbs).</li>
              <li><strong>Select Your Activity Level:</strong> Choose the option that best reflects your weekly exercise habits.</li>
              <li><strong>Select Your Primary Goal:</strong> Are you aiming for fat loss, maintenance, or muscle gain? Your protein needs will vary accordingly.</li>
              <li><strong>Calculate:</strong> The tool will display your recommended daily protein intake as a range in grams.</li>
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
                  <TableHead>Example (Muscle Gain)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Weight</TableCell>
                  <TableCell>180 lbs</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Activity Level</TableCell>
                  <TableCell>Active (3-5 days/week)</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Goal</TableCell>
                  <TableCell>Muscle Gain</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-bold">Recommended Protein</TableCell>
                  <TableCell className="font-bold">144 - 180 g/day</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Interpretation & Next Step</TableCell>
                  <TableCell>This individual should aim for 144-180g of protein daily to support muscle growth. The next step is to incorporate this into their total calorie goal from the <Link href="/calorie-surplus" className="text-primary hover:underline">Calorie Surplus Calculator</Link> using the <Link href="/macronutrient-ratio" className="text-primary hover:underline">Macronutrient Ratio Calculator</Link>.</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Understanding Protein Needs</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <h3 className="font-semibold text-lg text-foreground">Why Protein is King</h3>
            <p>Protein is arguably the most important macronutrient for anyone with a fitness goal. It's the building block of muscle tissue, essential for repairing the damage caused by exercise and building new, stronger muscle. Beyond muscle, it's vital for enzymes, hormones, and immune function.</p>
            <p>From a body composition standpoint, protein has two main benefits:</p>
            <ul className="list-disc list-inside space-y-2">
                <li><strong>High Satiety:</strong> Protein is the most filling macronutrient, which can help you manage hunger and control your calorie intake when in a <Link href="/calorie-deficit" className="text-primary hover:underline">calorie deficit</Link>.</li>
                <li><strong>High Thermic Effect of Food (TEF):</strong> Your body burns more calories digesting protein compared to fats and carbs, slightly increasing your <Link href="/tdee" className="text-primary hover:underline">TDEE</Link>.</li>
            </ul>

            <h3 className="font-semibold text-lg text-foreground">Protein Needs for Different Goals</h3>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Goal</TableHead>
                        <TableHead>Protein Range (per kg)</TableHead>
                        <TableHead>Protein Range (per lb)</TableHead>
                        <TableHead>Rationale</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell>Fat Loss</TableCell>
                        <TableCell>1.6 - 2.4 g/kg</TableCell>
                        <TableCell>0.7 - 1.1 g/lb</TableCell>
                        <TableCell>High protein intake is crucial to preserve <Link href="/lean-body-mass" className="text-primary hover:underline">lean body mass</Link> during a calorie deficit and promote satiety.</TableCell>
                    </TableRow>
                     <TableRow>
                        <TableCell>Maintenance</TableCell>
                        <TableCell>1.2 - 1.8 g/kg</TableCell>
                        <TableCell>0.5 - 0.8 g/lb</TableCell>
                        <TableCell>Sufficient protein to maintain existing muscle mass for active individuals.</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Muscle Gain</TableCell>
                        <TableCell>1.6 - 2.2 g/kg</TableCell>
                        <TableCell>0.7 - 1.0 g/lb</TableCell>
                        <TableCell>Provides the necessary building blocks for muscle protein synthesis, fueled by a <Link href="/calorie-surplus" className="text-primary hover:underline">calorie surplus</Link>.</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Common Mistakes</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>Under-eating Protein:</strong> Most sedentary people and even many active individuals do not consume enough protein to optimize their health and body composition.</li>
              <li><strong>Forgetting Protein Timing:</strong> While total daily intake is most important, spreading your protein intake across 3-5 meals throughout the day can be beneficial for muscle protein synthesis.</li>
              <li><strong>Relying Only on Shakes:</strong> Protein supplements are convenient, but whole food sources like meat, fish, eggs, and dairy provide a broader range of nutrients.</li>
              <li><strong>Ignoring Calories:</strong> Hitting your protein goal is important, but it must be done within the context of your total calorie goal from the <Link href="/daily-calorie-needs" className="text-primary hover:underline">Daily Calorie Needs Calculator</Link>.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Pro Tips & Quick Hacks</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>Anchor Each Meal with Protein:</strong> Aim for 20-40g of protein per meal to easily hit your daily target.</li>
              <li><strong>Use Lean Sources:</strong> Chicken breast, turkey, fish, greek yogurt, and egg whites are excellent lean protein sources.</li>
              <li><strong>Meal Prep is Your Friend:</strong> Cook large batches of protein at the beginning of the week to make meal assembly quick and easy.</li>
              <li><strong>Track Your Intake:</strong> Use a food tracking app for a week or two to get a realistic sense of how much protein you're actually eating.</li>
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
                <AccordionTrigger>Why is protein important?</AccordionTrigger>
                <AccordionContent>Protein is a crucial macronutrient essential for building and repairing tissues, including muscle. It also plays a vital role in hormone production and immune function. A higher protein intake can increase satiety, helping with weight management.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>How much protein do I need for muscle gain?</AccordionTrigger>
                <AccordionContent>For muscle gain, a common recommendation is 1.6 to 2.2 grams of protein per kilogram of body weight (or 0.7 to 1.0 grams per pound). This calculator helps you pinpoint a target within that range. This should be combined with a <Link href="/calorie-surplus" className="text-primary hover:underline">calorie surplus</Link>.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>How much protein do I need for fat loss?</AccordionTrigger>
                <AccordionContent>During fat loss, a higher protein intake is crucial to preserve muscle mass. Recommendations are often similar to or even slightly higher than for muscle gain (1.6-2.4 g/kg). Use this calculator alongside the <Link href="/calorie-deficit" className="text-primary hover:underline">Calorie Deficit Calculator</Link>.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Can you eat too much protein?</AccordionTrigger>
                <AccordionContent>For healthy individuals, high protein intake (up to 2.5-3.0 g/kg) is generally safe. However, exceeding your needs is not necessarily better, as the excess will be converted to energy. People with pre-existing kidney conditions should consult a doctor.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Is it better to calculate protein based on total weight or lean body mass?</AccordionTrigger>
                <AccordionContent>Calculating based on <Link href="/lean-body-mass" className="text-primary hover:underline">Lean Body Mass</Link> is more accurate, especially for individuals with higher body fat percentages. However, calculating based on total body weight is simpler and provides a good estimate for most people.</AccordionContent>
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
                            <TableCell>Ensure adequate protein for overall health and satiety.</TableCell>
                            <TableCell><Link href="/macronutrient-ratio" className="text-primary hover:underline">Macronutrient Ratio</Link></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Athletes & Bodybuilders</TableCell>
                            <TableCell>Optimize intake for muscle repair, recovery, and growth.</TableCell>
                             <TableCell><Link href="/ffmi" className="text-primary hover:underline">FFMI Calculator</Link></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>People on a Diet</TableCell>
                            <TableCell>Preserve muscle mass and manage hunger during a calorie deficit.</TableCell>
                            <TableCell><Link href="/calorie-deficit" className="text-primary hover:underline">Calorie Deficit</Link></TableCell>
                        </TableRow>
                         <TableRow>
                            <TableCell>Nutritionists</TableCell>
                            <TableCell>Provide clients with specific protein targets to support their goals.</TableCell>
                            <TableCell><Link href="/daily-calorie-needs" className="text-primary hover:underline">Daily Calorie Needs</Link></TableCell>
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
            <Link href="/macronutrient-ratio" className="p-4 border rounded-lg hover:bg-muted">
              <h3 className="font-semibold">Macronutrient Ratio Calculator</h3>
              <p className="text-sm text-muted-foreground">Integrate your protein goal into a full macronutrient plan.</p>
            </Link>
            <Link href="/daily-calorie-needs" className="p-4 border rounded-lg hover:bg-muted">
              <h3 className="font-semibold">Daily Calorie Needs Calculator</h3>
              <p className="text-sm text-muted-foreground">Ensure your protein intake fits within your total calorie budget.</p>
            </Link>
            <Link href="/ffmi" className="p-4 border rounded-lg hover:bg-muted">
              <h3 className="font-semibold">FFMI Calculator</h3>
              <p className="text-sm text-muted-foreground">Track how your protein intake and training are affecting your muscularity.</p>
            </Link>
            <Link href="/lean-body-mass" className="p-4 border rounded-lg hover:bg-muted">
              <h3 className="font-semibold">Lean Body Mass Calculator</h3>
              <p className="text-sm text-muted-foreground">Calculate your protein needs based on lean mass for a more precise target.</p>
            </Link>
          </CardContent>
        </Card>

      </div>
    </>
  );
}
