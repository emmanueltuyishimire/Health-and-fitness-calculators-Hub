
import type { Metadata } from 'next';
import Link from 'next/link';
import { Droplets } from 'lucide-react';
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
import { FatIntakeCalculatorForm } from '@/components/fat-intake-calculator-form';

export const metadata: Metadata = {
  title: 'Fat Intake Calculator – Balance Your Diet',
  description:
    'Calculate your optimal daily fat intake based on your total calorie goal. Understand the importance of dietary fats for hormone production, health, and energy.',
  openGraph: {
    title: 'Fat Intake Calculator – Balance Your Diet',
    description:
      'Calculate your optimal daily fat intake based on your total calorie goal. Understand the importance of dietary fats for hormone production, health, and energy.',
    type: 'website',
  },
};

export default function FatIntakePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Fat Intake Calculator',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
    },
    description:
      'A free web-based calculator to determine daily fat intake needs based on total calorie consumption and dietary goals.',
  };

  const howToJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Calculate Your Fat Intake',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Determine Your Calorie Goal',
        text: 'First, establish your daily calorie target for weight loss, maintenance, or gain using our Daily Calorie Needs Calculator.',
        url: '/daily-calorie-needs'
      },
      {
        '@type': 'HowToStep',
        name: 'Enter Calorie Goal',
        text: 'Input your total daily calorie target into the calculator.',
      },
      {
        '@type': 'HowToStep',
        name: 'Choose Fat Percentage',
        text: 'Select a percentage of your calories to come from fat. 20-35% is a standard recommendation for overall health.',
      },
      {
        '@type': 'HowToStep',
        name: 'Calculate',
        text: 'The calculator will provide your recommended daily fat intake in grams.',
      },
    ],
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Why is dietary fat important?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Dietary fat is essential for many bodily functions, including hormone production (like testosterone and estrogen), absorption of fat-soluble vitamins (A, D, E, and K), and providing a concentrated source of energy. It is a vital part of a healthy diet.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is a healthy percentage of calories from fat?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'For most adults, the dietary reference intake for fat is 20% to 35% of total calories. Active individuals may have different needs. This calculator helps you determine a specific gram amount based on your <a href="/daily-calorie-needs">daily calorie needs</a>.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are low-fat diets good for weight loss?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'While low-fat diets can work for weight loss, fat itself is not inherently "fattening." The most important factor for weight loss is being in a <a href="/calorie-adjustment-for-weight-loss">calorie deficit</a>. Extremely low-fat diets can be detrimental to hormone health and satiety.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are "good" vs. "bad" fats?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '"Good" fats are unsaturated fats (monounsaturated and polyunsaturated) found in foods like avocados, nuts, seeds, and olive oil. "Bad" fats are trans fats, often found in processed foods. Saturated fats (from animal products and some oils) should be consumed in moderation.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does this fit with my protein and carb intake?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'This calculator is best used as part of a complete macronutrient plan. First, set your protein goal with the <a href="/protein-intake">Protein Intake Calculator</a>. Then, use this tool for fat. The remaining calories in your budget from the <a href="/daily-calorie-needs">Daily Calorie Needs Calculator</a> can be allocated to carbohydrates.',
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
              <BreadcrumbPage>Fat Intake Calculator</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <Card>
          <CardHeader>
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 text-primary p-3 rounded-lg">
                <Droplets className="h-8 w-8" />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold">
                  Fat Intake Calculator
                </h1>
                <p className="text-muted-foreground">
                  Determine your daily fat intake to support hormone health, satiety, and overall well-being. This calculator helps you allocate a healthy percentage of your total calories, determined with the <Link href="/daily-calorie-needs" className="text-primary hover:underline">Daily Calorie Needs Calculator</Link>, to dietary fats.
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <FatIntakeCalculatorForm />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>How to Use the Fat Intake Calculator</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              This calculator estimates your daily fat needs based on your total calorie goal.
            </p>
            <ol className="list-decimal list-inside space-y-2">
              <li><strong>Determine Your Calorie Goal:</strong> First, visit our <Link href="/daily-calorie-needs" className="text-primary hover:underline">Daily Calorie Needs Calculator</Link> to establish your daily calorie target for your goal (loss, maintenance, or gain).</li>
              <li><strong>Enter Your Calorie Goal:</strong> Input your total daily calories into the form.</li>
              <li><strong>Choose a Fat Percentage:</strong> Select a percentage of your total calories that should come from fat. 20-35% is a standard, healthy range.</li>
              <li><strong>Calculate:</strong> The tool will display your recommended daily fat intake in grams, which you can use in our <Link href="/macronutrient-ratio" className="text-primary hover:underline">Macronutrient Ratio Calculator</Link>.</li>
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
                  <TableHead>Example (Balanced Diet)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Total Daily Calories</TableCell>
                  <TableCell>2200 kcal</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Desired Fat Percentage</TableCell>
                  <TableCell>30%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-bold">Recommended Fat Intake</TableCell>
                  <TableCell className="font-bold">73 g/day</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Interpretation & Next Step</TableCell>
                  <TableCell>To achieve a balanced diet with 30% of calories from fat, this person should aim for about 73g of fat per day. The next step is to combine this with a protein goal from the <Link href="/protein-intake" className="text-primary hover:underline">Protein Intake Calculator</Link> to complete their macronutrient plan.</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Understanding Dietary Fat</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <h3 className="font-semibold text-lg text-foreground">Fat: An Essential Macronutrient</h3>
            <p>Dietary fat often gets a bad reputation, but it is a vital nutrient that plays many critical roles in the body. It is the most energy-dense macronutrient, providing 9 calories per gram. Beyond energy, fats are essential for:</p>
            <ul className="list-disc list-inside space-y-2">
                <li><strong>Hormone Production:</strong> Cholesterol, a type of fat, is the precursor to steroid hormones like estrogen and testosterone. Very low-fat diets can negatively impact hormone levels.</li>
                <li><strong>Vitamin Absorption:</strong> Fat-soluble vitamins (A, D, E, and K) require fat to be absorbed and utilized by the body.</li>
                <li><strong>Cell Structure:</strong> Fats are a fundamental component of every cell membrane in your body.</li>
                <li><strong>Satiety:</strong> Fat slows down digestion, which can help you feel fuller for longer between meals, a useful tool when in a <Link href="/calorie-adjustment-for-weight-loss" className="text-primary hover:underline">calorie deficit</Link>.</li>
            </ul>

            <h3 className="font-semibold text-lg text-foreground">Types of Fats</h3>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Type of Fat</TableHead>
                        <TableHead>Description & Sources</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell>Monounsaturated Fat</TableCell>
                        <TableCell>Considered a "healthy" fat. Found in olive oil, avocados, almonds, and cashews.</TableCell>
                    </TableRow>
                     <TableRow>
                        <TableCell>Polyunsaturated Fat</TableCell>
                        <TableCell>Another "healthy" fat, which includes Omega-3 and Omega-6 fatty acids. Found in fatty fish (salmon, mackerel), walnuts, flaxseeds, and sunflower oil.</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Saturated Fat</TableCell>
                        <TableCell>Should be consumed in moderation. Found in animal products like red meat, butter, and cheese, as well as coconut oil.</TableCell>
                    </TableRow>
                     <TableRow>
                        <TableCell>Trans Fat</TableCell>
                        <TableCell>Artificially created fats that should be avoided. Often found in processed baked goods, fried foods, and margarine.</TableCell>
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
              <li><strong>Going Too Low-Fat:</strong> Severely restricting fat intake (below 20% of total calories) can impair hormone function and vitamin absorption.</li>
              <li><strong>Ignoring Fat Quality:</strong> The type of fat matters. Prioritize unsaturated fats from whole-food sources over saturated and trans fats.</li>
              <li><strong>Forgetting About Calorie Density:</strong> Since fat is high in calories (9 kcal/gram), portion sizes of high-fat foods like nuts and oils should be managed, especially during a <Link href="/calorie-adjustment-for-weight-loss" className="text-primary hover:underline">fat loss phase</Link>.</li>
              <li><strong>Choosing Processed Low-Fat Foods:</strong> Many "low-fat" or "fat-free" products are highly processed and loaded with sugar and artificial ingredients to compensate for the lack of flavor.</li>
            </ul>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Pro Tips & Quick Hacks</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li><strong>Prioritize Whole-Food Fats:</strong> Get the majority of your fats from sources like avocados, nuts, seeds, and fatty fish to ensure you're also getting fiber and micronutrients.</li>
                <li><strong>Use Oils Sparingly:</strong> Be mindful of cooking oils, dressings, and sauces, as their calories can add up quickly. A tablespoon of olive oil contains about 120 calories.</li>
                <li><strong>Balance Omega-3 and Omega-6:</strong> Most modern diets are too high in omega-6 fats. Increase your intake of omega-3s from sources like salmon, sardines, and flaxseeds for a better balance.</li>
                <li><strong>Fat for Satiety:</strong> Add a source of healthy fat to your meals, like a handful of almonds or a slice of avocado, to help you stay full and prevent overeating later.</li>
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
                <AccordionTrigger>Why is dietary fat important?</AccordionTrigger>
                <AccordionContent>Dietary fat is essential for hormone production, absorption of fat-soluble vitamins (A, D, E, K), and providing energy. It is a vital part of a healthy diet.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>What is a healthy percentage of calories from fat?</AccordionTrigger>
                <AccordionContent>For most adults, the dietary reference intake for fat is 20% to 35% of total calories. This calculator helps determine a specific gram amount based on your <a href="/daily-calorie-needs">daily calorie needs</a>.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Are low-fat diets good for weight loss?</AccordionTrigger>
                <AccordionContent>While low-fat diets can work, fat itself is not "fattening." The most important factor for weight loss is a <a href="/calorie-adjustment-for-weight-loss">calorie deficit</a>. Extremely low-fat diets can be detrimental to hormone health.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>What are "good" vs. "bad" fats?</AccordionTrigger>
                <AccordionContent>"Good" fats are unsaturated fats (from avocados, nuts, seeds, olive oil). "Bad" fats are trans fats (from processed foods). Saturated fats (from animal products) should be consumed in moderation.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>How does this fit with my protein and carb intake?</AccordionTrigger>
                <AccordionContent>This calculator is best used as part of a complete macronutrient plan. First, set your protein goal with the <a href="/protein-intake">Protein Intake Calculator</a>. Then, use this tool for fat. The remaining calories in your budget from the <a href="/daily-calorie-needs">Daily Calorie Needs Calculator</a> can be allocated to carbohydrates.</AccordionContent>
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
                  <TableCell>Ensure a balanced diet that supports overall health and hormone function.</TableCell>
                  <TableCell><Link href="/macronutrient-ratio" className="text-primary hover:underline">Macronutrient Ratio</Link></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Keto Dieters</TableCell>
                  <TableCell>Calculate the high fat intake required to stay in ketosis.</TableCell>
                   <TableCell><Link href="/macronutrient-ratio" className="text-primary hover:underline">Macronutrient Ratio</Link></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>People on a Diet</TableCell>
                  <TableCell>Incorporate enough fat for satiety and health, even in a calorie deficit.</TableCell>
                  <TableCell><Link href="/calorie-adjustment-for-weight-loss" className="text-primary hover:underline">Calorie Adjustment (Loss)</Link></TableCell>
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
              <p className="text-sm text-muted-foreground">Integrate your fat goal into a full macronutrient plan with protein and carbs.</p>
            </Link>
            <Link href="/daily-calorie-needs" className="p-4 border rounded-lg hover:bg-muted">
              <h3 className="font-semibold">Daily Calorie Needs Calculator</h3>
              <p className="text-sm text-muted-foreground">The essential first step. Get the total calorie target you need for this calculator.</p>
            </Link>
            <Link href="/protein-intake" className="p-4 border rounded-lg hover:bg-muted">
              <h3 className="font-semibold">Protein Intake Calculator</h3>
              <p className="text-sm text-muted-foreground">Calculate your protein needs, the other key part of your macronutrient split.</p>
            </Link>
            <Link href="/carb-intake" className="p-4 border rounded-lg hover:bg-muted">
              <h3 className="font-semibold">Carb Intake Calculator</h3>
              <p className="text-sm text-muted-foreground">Determine your carbohydrate needs to fuel your performance.</p>
            </Link>
          </CardContent>
        </Card>

      </div>
    </>
  );
}
