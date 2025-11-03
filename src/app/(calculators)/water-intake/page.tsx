
import type { Metadata } from 'next';
import Link from 'next/link';
import { GlassWater } from 'lucide-react';
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
import { WaterIntakeCalculatorForm } from '@/components/water-intake-calculator-form';

export const metadata: Metadata = {
  title: 'Water Intake Calculator – Stay Hydrated',
  description:
    'Calculate your recommended daily water intake based on your body weight and activity level. Ensure proper hydration for optimal health, performance, and cognitive function.',
  openGraph: {
    title: 'Water Intake Calculator – Stay Hydrated',
    description:
      'Calculate your recommended daily water intake based on your body weight and activity level. Ensure proper hydration for optimal health, performance, and cognitive function.',
    type: 'website',
  },
};

export default function WaterIntakePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Water Intake Calculator',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
    },
    description:
      'A free web-based calculator to estimate daily water intake needs based on body weight and activity level.',
  };

  const howToJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Calculate Your Water Intake',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Enter Your Weight',
        text: 'Input your current body weight. The calculation is based on your body mass.',
      },
      {
        '@type': 'HowToStep',
        name: 'Select Activity Level',
        text: 'Choose your general activity level, as you need more water if you are more active.',
      },
      {
        '@type': 'HowToStep',
        name: 'Calculate',
        text: 'The calculator provides a recommended daily water intake in both liters and ounces.',
      },
    ],
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Why is hydration so important?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Water is essential for nearly every bodily function, including regulating temperature, lubricating joints, delivering nutrients, and removing waste. Proper hydration improves energy levels, cognitive function, and physical performance.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does coffee or tea count towards my water intake?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, contrary to old beliefs, caffeinated beverages like coffee and tea are not significantly dehydrating and can contribute to your daily fluid needs. However, plain water should still be your primary source of hydration.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I know if I\'m dehydrated?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Common signs of dehydration include thirst, dark yellow urine, fatigue, dizziness, and headache. A simple way to check is the color of your urine; pale yellow indicates good hydration.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do I need more water if I exercise?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely. You lose water through sweat during exercise, so you need to drink more to compensate. A general guideline is to drink an extra 12 ounces (about 350 ml) for every 30 minutes of activity. You can also estimate your calorie burn with our <a href="/calorie-burn-by-activity">Calorie Burn by Activity Calculator</a>.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is it possible to drink too much water?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'While rare, it is possible to drink too much water, a condition called hyponatremia where sodium levels in the blood become dangerously diluted. This is primarily a risk for endurance athletes who drink excessive amounts of plain water without replacing electrolytes. For most people, thirst is a reliable guide.',
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
              <BreadcrumbPage>Water Intake Calculator</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <Card>
          <CardHeader>
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 text-primary p-3 rounded-lg">
                <GlassWater className="h-8 w-8" />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold">
                  Water Intake Calculator
                </h1>
                <p className="text-muted-foreground">
                  Estimate your daily water intake needs based on your body weight and activity level to ensure you stay properly hydrated for optimal health and performance.
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <WaterIntakeCalculatorForm />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>How to Use the Water Intake Calculator</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              This calculator provides a baseline recommendation for your daily water needs and adjusts it for your activity level.
            </p>
            <ol className="list-decimal list-inside space-y-2">
              <li><strong>Enter Your Weight:</strong> Your water needs are directly related to your body mass.</li>
              <li><strong>Select Your Activity Level:</strong> Choose how active you are on a typical day. More activity means more water lost through sweat.</li>
              <li><strong>Calculate:</strong> The tool will show your recommended daily intake in both liters and fluid ounces.</li>
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
                  <TableCell>Moderately Active</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-bold">Recommended Water Intake</TableCell>
                  <TableCell className="font-bold">~124 oz (~3.7 L) per day</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Interpretation & Next Step</TableCell>
                  <TableCell>This person needs about 124 oz of water to support their active lifestyle. The next step is to make a plan to meet this goal, perhaps by using a marked water bottle or setting reminders. To track hydration in more detail, they can use the <Link href="/hydration-tracker" className="text-primary hover:underline" aria-label="Hydration Tracker">Hydration Tracker</Link>.</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Understanding Hydration</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <h3 className="font-semibold text-lg text-foreground">Why Water is Essential</h3>
            <p>Water makes up about 60% of your body weight and is critical for every single system in your body. It's not just for quenching thirst; it's the medium in which all metabolic reactions occur. Proper hydration is vital for:</p>
            <ul className="list-disc list-inside space-y-2">
                <li><strong>Energy & Performance:</strong> Even mild dehydration can significantly impair physical strength, power, and endurance.</li>
                <li><strong>Brain Function:</strong> Your brain is highly sensitive to hydration status. Dehydration can lead to headaches, poor concentration, and reduced cognitive performance.</li>
                <li><strong>Temperature Regulation:</strong> Sweating is your body's primary way of cooling down. Without enough water, this process is less effective.</li>
                <li><strong>Nutrient Transport & Waste Removal:</strong> Water is essential for carrying nutrients to your cells and flushing out waste products and toxins.</li>
            </ul>

            <h3 className="font-semibold text-lg text-foreground">General Intake Guidelines</h3>
            <p>This calculator uses a common formula: a baseline intake based on body weight, plus an adjustment for activity.</p>
            <ul className="list-disc list-inside space-y-1">
                <li><strong>Baseline:</strong> Approx. 2/3 of your body weight in lbs gives a baseline in ounces (e.g., 180 lbs * 2/3 = 120 oz).</li>
                <li><strong>Activity Adjustment:</strong> Extra fluid is added for activity (e.g., 12 oz for every 30 mins of exercise).</li>
            </ul>
             <p>Remember, these are starting points. Your needs can also increase in hot or humid climates. The best way to monitor your hydration is by paying attention to thirst and the color of your urine (it should be pale yellow).</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Common Mistakes</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>Waiting Until You're Thirsty:</strong> Thirst is a sign that dehydration has already begun. Sip water throughout the day to prevent it.</li>
              <li><strong>Ignoring Other Fluids:</strong> Water from food (like fruits and vegetables) and other beverages (like tea, coffee, and milk) also counts towards your total intake.</li>
              <li><strong>Forgetting Electrolytes:</strong> If you're sweating a lot, you're losing electrolytes (like sodium and potassium) as well as water. Consider a sports drink or an electrolyte supplement during long, intense exercise.</li>
              <li><strong>Over-hydrating:</strong> While rare, drinking excessive amounts of water without adequate sodium can be dangerous. Your body can only process so much fluid at once.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
            <CardHeader><CardTitle>Pro Tips & Quick Hacks</CardTitle></CardHeader>
            <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li><strong>Carry a Reusable Water Bottle:</strong> Having water readily available makes it much easier to meet your goal.</li>
                    <li><strong>Set Reminders:</strong> Use your phone or smartwatch to set hourly reminders to drink water.</li>
                    <li><strong>"Front-load" Your Water:</strong> Try to drink a significant portion of your daily water in the morning to start your day hydrated.</li>
                    <li><strong>Add Flavor:</strong> If you find plain water boring, add a slice of lemon, lime, cucumber, or a few mint leaves to make it more appealing.</li>
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
                <AccordionTrigger>Why is hydration so important?</AccordionTrigger>
                <AccordionContent>Water is essential for nearly every bodily function, including regulating temperature, lubricating joints, delivering nutrients, and removing waste. Proper hydration improves energy levels, cognitive function, and physical performance.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Does coffee or tea count towards my water intake?</AccordionTrigger>
                <AccordionContent>Yes, contrary to old beliefs, caffeinated beverages like coffee and tea are not significantly dehydrating and can contribute to your daily fluid needs. However, plain water should still be your primary source of hydration.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>How do I know if I'm dehydrated?</AccordionTrigger>
                <AccordionContent>Common signs of dehydration include thirst, dark yellow urine, fatigue, dizziness, and headache. A simple way to check is the color of your urine; pale yellow indicates good hydration.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Do I need more water if I exercise?</AccordionTrigger>
                <AccordionContent>Absolutely. You lose water through sweat during exercise, so you need to drink more to compensate. A general guideline is to drink an extra 12 ounces (about 350 ml) for every 30 minutes of activity. You can also estimate your calorie burn with our <a href="/calorie-burn-by-activity">Calorie Burn by Activity Calculator</a>.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Is it possible to drink too much water?</AccordionTrigger>
                <AccordionContent>While rare, it is possible to drink too much water, a condition called hyponatremia where sodium levels in the blood become dangerously diluted. This is primarily a risk for endurance athletes who drink excessive amounts of plain water without replacing electrolytes. For most people, thirst is a reliable guide.</AccordionContent>
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
                  <TableCell>Establish a daily hydration goal to improve overall health and energy levels.</TableCell>
                  <TableCell>Hydration Tracker</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Athletes</TableCell>
                  <TableCell>Calculate baseline fluid needs and plan for increased intake around training.</TableCell>
                  <TableCell><Link href="/calorie-burn-by-activity" className="text-primary hover:underline" aria-label="Calorie Burn by Activity Calculator">Calorie Burn by Activity</Link></TableCell>
                </TableRow>
                 <TableRow>
                  <TableCell>Office Workers</TableCell>
                  <TableCell>Combat afternoon fatigue by ensuring adequate hydration throughout the workday.</TableCell>
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
            <Link href="/hydration-tracker" className="p-4 border rounded-lg hover:bg-muted" aria-label="Hydration Tracker">
              <h3 className="font-semibold">Hydration Tracker</h3>
              <p className="text-sm text-muted-foreground">Actively track your fluid intake throughout the day to meet your goal.</p>
            </Link>
            <Link href="/daily-calorie-needs" className="p-4 border rounded-lg hover:bg-muted" aria-label="Daily Calorie Needs Calculator">
              <h3 className="font-semibold">Daily Calorie Needs Calculator</h3>
              <p className="text-sm text-muted-foreground">Your hydration and energy needs are closely linked. Plan both together.</p>
            </Link>
            <Link href="/calorie-burn-by-activity" className="p-4 border rounded-lg hover:bg-muted" aria-label="Calorie Burn by Activity Calculator">
              <h3 className="font-semibold">Calorie Burn by Activity</h3>
              <p className="text-sm text-muted-foreground">Estimate how much more you need to drink based on your workout intensity.</p>
            </Link>
            <Link href="/bmr" className="p-4 border rounded-lg hover:bg-muted" aria-label="BMR Calculator">
              <h3 className="font-semibold">BMR Calculator</h3>
              <p className="text-sm text-muted-foreground">Understand your baseline metabolic rate, which is influenced by hydration.</p>
            </Link>
          </CardContent>
        </Card>

      </div>
    </>
  );
}
