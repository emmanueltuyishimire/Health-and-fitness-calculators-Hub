
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
import { WorkoutCalorieTrackerForm } from '@/components/workout-calorie-tracker-form';

export const metadata: Metadata = {
  title: 'Workout Calorie Tracker – Estimate Your Expenditure',
  description:
    'Calculate the calories burned during your workout using MET values. Get an accurate estimate based on your body weight and the duration of your exercise session.',
  openGraph: {
    title: 'Workout Calorie Tracker – Estimate Your Expenditure',
    description:
      'Calculate the calories burned during your workout using MET values. Get an accurate estimate based on your body weight and the duration of your exercise session.',
    type: 'website',
  },
};

export default function WorkoutCalorieTrackerPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Workout Calorie Tracker',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
    },
    description:
      'A free web-based calculator to estimate calories burned from a workout using body weight, duration, and MET values.',
  };

  const howToJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Track Your Workout Calories',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Enter Your Weight',
        text: 'Input your current body weight, as it is a key factor in the calorie burn calculation.',
      },
      {
        '@type': 'HowToStep',
        name: 'Select Activity',
        text: 'Choose your workout from the provided list of activities and their corresponding MET values.',
      },
      {
        '@type': 'HowToStep',
        name: 'Enter Duration',
        text: 'Input the total duration of the workout in minutes.',
      },
      {
        '@type': 'HowToStep',
        name: 'Calculate',
        text: 'The calculator will estimate the total calories burned during that workout session.',
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
          text: 'MET stands for Metabolic Equivalent of Task. It is a measure of the energy cost of a physical activity. 1 MET is the energy you expend while sitting at rest. An activity with a MET value of 8 means you are burning 8 times the energy you would at rest.',
        },
      },
      {
        '@type': 'Question',
        name: 'Should I eat back the calories I burn from my workout?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Generally, no. If you are using a <a href="/tdee">TDEE Calculator</a> with an activity multiplier, your exercise is already accounted for. "Eating back" exercise calories is a common mistake that can negate a <a href="/calorie-deficit">calorie deficit</a>.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does this differ from my fitness tracker?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Fitness trackers use heart rate and motion sensors, which can be inconsistent. The MET value method is a standardized physiological formula, which can be more reliable, though less personalized than clinical measurements.',
        },
      },
      {
        '@type': 'Question',
        name: 'How can I burn more calories during my workout?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can increase the duration of your workout, increase the intensity (e.g., lift heavier, run faster), or reduce rest times between sets. All these factors will increase the total energy expenditure.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is this the same as the Calorie Burn by Activity calculator?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, this tool is functionally the same as the <a href="/calorie-burn-by-activity">Calorie Burn by Activity Calculator</a> but is named to be more intuitive for users looking to track a specific workout session rather than general daily activities.',
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
              <BreadcrumbPage>Workout Calorie Tracker</BreadcrumbPage>
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
                  Workout Calorie Tracker
                </h1>
                <p className="text-muted-foreground">
                  Estimate the number of calories burned during your workout. This tool uses MET values to provide a scientific estimate of your energy expenditure, helping you better understand your overall <Link href="/tdee" className="text-primary hover:underline" aria-label="TDEE Calculator">TDEE</Link>.
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <WorkoutCalorieTrackerForm />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>How to Use the Workout Calorie Tracker</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              This calculator estimates the calories you burn during a specific workout based on its intensity (MET value), your body weight, and the duration.
            </p>
            <ol className="list-decimal list-inside space-y-2">
              <li><strong>Enter Your Weight:</strong> Your body weight is a key factor in how many calories you burn.</li>
              <li><strong>Select Your Activity:</strong> Use the searchable dropdown to find your workout. Each one has a pre-assigned MET value.</li>
              <li><strong>Enter the Duration:</strong> Input how many minutes you performed the workout.</li>
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
                  <TableCell>Weight lifting, vigorous</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Duration</TableCell>
                  <TableCell>60 minutes</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-bold">Estimated Calories Burned</TableCell>
                  <TableCell className="font-bold">~443 kcal</TableCell>
                </TableRow>
                 <TableRow>
                  <TableCell>Interpretation & Next Step</TableCell>
                  <TableCell>A 60-minute vigorous weight lifting session burns a significant number of calories. This expenditure is a component of the user's <Link href="/tdee" className="text-primary hover:underline" aria-label="TDEE Calculator">TDEE</Link>. Knowing this helps in creating an accurate <Link href="/calorie-deficit" className="text-primary hover:underline" aria-label="Calorie Deficit Calculator">calorie deficit</Link> for fat loss.</TableCell>
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
                <li><strong>1 MET:</strong> The energy you use when you are at complete rest. This is your <Link href="/bmr" className="text-primary hover:underline" aria-label="BMR Calculator">BMR</Link>.</li>
                <li><strong>6 METs:</strong> The activity requires six times the energy of resting.</li>
            </ul>
            <p>The MET value is a convenient way to compare the intensity of different activities. For example, light weight lifting has a MET of 3.0, while vigorous lifting has a MET of 6.0.</p>

            <h3 className="font-semibold text-lg text-foreground">The Calculation Formula</h3>
            <p>This calculator uses a standard scientific formula to estimate calorie burn:</p>
            <p className="font-mono text-center p-4 bg-muted rounded-md">Total Calories Burned = Duration (min) × [(MET × 3.5 × Weight (kg)) / 200]</p>
            <p>This formula accurately converts the oxygen consumption represented by the MET value into the calories burned for a person of a specific weight over a specific time. While it's a powerful estimation, remember that individual factors like age, gender, and <Link href="/body-fat" className="text-primary hover:underline" aria-label="Body Fat Percentage Calculator">body composition</Link> can cause slight variations.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Common Mistakes</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>Overestimating Intensity:</strong> Choosing "vigorous" weight lifting for a session with long rest periods and low effort will overestimate your calorie burn. Be honest with your intensity.</li>
              <li><strong>Including Rest Time:</strong> The duration should only be the time you were actively performing the exercise, not the total time spent in the gym.</li>
              <li><strong>"Eating Back" Workout Calories:</strong> Your exercise is already factored into your <Link href="/tdee" className="text-primary hover:underline" aria-label="TDEE Calculator">TDEE</Link> if you selected an appropriate activity level. Use this tool for information, not as a license to eat more.</li>
              <li><strong>Ignoring the "Afterburn" Effect:</strong> Intense workouts, especially resistance training, can slightly elevate your metabolism for hours afterward (EPOC). This calculator does not account for that, so the total burn may be slightly higher.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Pro Tips & Quick Hacks</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>Prioritize Compound Lifts:</strong> Exercises like squats, deadlifts, and bench presses use multiple muscle groups and burn more calories than isolation exercises.</li>
              <li><strong>Increase Density:</strong> To burn more calories in the same amount of time, reduce your rest periods between sets or use supersets.</li>
              <li><strong>Focus on NEAT:</strong> Remember that calories burned outside of your workout (Non-Exercise Activity Thermogenesis) are also a huge part of your <Link href="/tdee" className="text-primary hover:underline" aria-label="TDEE Calculator">TDEE</Link>. Track your daily steps with the <Link href="/steps-to-calories" className="text-primary hover:underline" aria-label="Steps to Calories Calculator">Steps to Calories Calculator</Link>.</li>
              <li><strong>Fuel Your Workouts:</strong> To perform well and burn more calories, ensure you're adequately fueled. Use the <Link href="/macronutrient-ratio" className="text-primary hover:underline" aria-label="Macronutrient Ratio Calculator">Macronutrient Ratio Calculator</Link> to plan your pre-workout nutrition.</li>
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
                <AccordionTrigger>Should I "eat back" calories burned from exercise?</AccordionTrigger>
                <AccordionContent>Generally, no. If you use a <Link href="/tdee" className="text-primary hover:underline" aria-label="TDEE Calculator">TDEE Calculator</Link> with an activity multiplier, your exercise is already factored in. "Eating back" calories can cancel out a <Link href="/calorie-deficit" className="text-primary hover:underline" aria-label="Calorie Deficit Calculator">calorie deficit</Link>.</AccordionContent>
              </AccordionItem>
               <AccordionItem value="item-3">
                <AccordionTrigger>How does this differ from my fitness tracker?</AccordionTrigger>
                <AccordionContent>Fitness trackers use heart rate and motion sensors, which can be inconsistent. The MET value method is a standardized physiological formula, often more reliable, though less personalized than a lab test.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>How can I burn more calories during my workout?</AccordionTrigger>
                <AccordionContent>You can increase workout duration, increase intensity (e.g., lift heavier, run faster), or reduce rest times. All of these will increase total energy expenditure.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Is this the same as the Calorie Burn by Activity calculator?</AccordionTrigger>
                <AccordionContent>Yes, this tool is functionally the same as the <a href="/calorie-burn-by-activity">Calorie Burn by Activity Calculator</a> but is named to be more intuitive for users looking to track a specific workout session.</AccordionContent>
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
                  <TableCell>Weight Lifters</TableCell>
                  <TableCell>Estimate the energy expenditure of their training sessions to fine-tune their calorie surplus or deficit.</TableCell>
                  <TableCell><Link href="/ffmi" className="text-primary hover:underline" aria-label="FFMI Calculator">FFMI Calculator</Link></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>People on a Diet</TableCell>
                  <TableCell>Quantify how much a workout contributes to their daily energy burn and weight loss goals.</TableCell>
                  <TableCell><Link href="/weight-loss-goal" className="text-primary hover:underline" aria-label="Weight Loss Goal Calculator">Weight Loss Goal</Link></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Fitness Planners</TableCell>
                  <TableCell>Compare different workout types to create an effective calorie-burning training plan.</TableCell>
                  <TableCell><Link href="/weekly-workout-load" className="text-primary hover:underline" aria-label="Weekly Workout Load Calculator">Weekly Workout Load</Link></TableCell>
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
            <Link href="/calorie-burn-by-activity" className="p-4 border rounded-lg hover:bg-muted" aria-label="Calorie Burn by Activity Calculator">
              <h3 className="font-semibold">Calorie Burn by Activity</h3>
              <p className="text-sm text-muted-foreground">The same powerful tool, but with a focus on all daily activities, not just workouts.</p>
            </Link>
            <Link href="/tdee" className="p-4 border rounded-lg hover:bg-muted" aria-label="TDEE Calculator">
              <h3 className="font-semibold">TDEE Calculator</h3>
              <p className="text-sm text-muted-foreground">See how your workouts fit into your total daily energy expenditure.</p>
            </Link>
            <Link href="/one-rep-max" className="p-4 border rounded-lg hover:bg-muted" aria-label="One Rep Max Calculator">
              <h3 className="font-semibold">One Rep Max (1RM) Calculator</h3>
              <p className="text-sm text-muted-foreground">Estimate your strength to better gauge workout intensity.</p>
            </Link>
            <Link href="/protein-intake" className="p-4 border rounded-lg hover:bg-muted" aria-label="Protein Intake Calculator">
              <h3 className="font-semibold">Protein Intake Calculator</h3>
              <p className="text-sm text-muted-foreground">Ensure you're eating enough protein to recover from your workouts.</p>
            </Link>
          </CardContent>
        </Card>

      </div>
    </>
  );
}
