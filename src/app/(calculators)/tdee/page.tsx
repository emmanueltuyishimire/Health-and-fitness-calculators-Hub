
import type { Metadata } from 'next';
import Link from 'next/link';
import { Bike } from 'lucide-react';
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
import { TdeeCalculatorForm } from '@/components/tdee-calculator-form';

export const metadata: Metadata = {
  title: 'TDEE Calculator – Your Total Daily Energy Expenditure',
  description:
    'Calculate your TDEE (Total Daily Energy Expenditure) to discover your daily maintenance calories. Use this crucial metric to set accurate goals for weight loss, gain, or maintenance.',
  openGraph: {
    title: 'TDEE Calculator – Your Total Daily Energy Expenditure',
    description:
      'Calculate your TDEE (Total Daily Energy Expenditure) to discover your daily maintenance calories. Use this crucial metric to set accurate goals for weight loss, gain, or maintenance.',
    type: 'website',
  },
};

export default function TdeePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'TDEE Calculator',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
    },
    description:
      'A free web-based calculator to estimate Total Daily Energy Expenditure (TDEE) from BMR and activity level.',
  };

  const howToJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Calculate Your TDEE',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Calculate Your BMR',
        text: 'First, use the BMR Calculator to find your Basal Metabolic Rate, which is the calories your body burns at rest.',
        url: '/bmr'
      },
      {
        '@type': 'HowToStep',
        name: 'Select Activity Level',
        text: 'Choose the activity level that best describes your typical week, from sedentary to extra active.',
      },
      {
        '@type': 'HowToStep',
        name: 'Calculate TDEE',
        text: 'The calculator multiplies your BMR by your activity level factor to estimate your daily maintenance calories.',
      },
       {
        '@type': 'HowToStep',
        name: 'Set Your Goals',
        text: 'Use your TDEE as a baseline to create a calorie deficit for weight loss or a surplus for weight gain.',
      },
    ],
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is TDEE?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'TDEE (Total Daily Energy Expenditure) is an estimation of how many calories you burn per day when exercise and other activities are taken into account. It is the key to setting your calorie intake for weight management. TDEE is calculated from your <a href="/bmr">BMR (Basal Metabolic Rate)</a>.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I use my TDEE for weight loss?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'To lose weight, you need to consume fewer calories than your TDEE. This is called a calorie deficit. A common deficit is 500 calories per day to lose about 1 pound per week. You can plan this with the <a href="/calorie-deficit">Calorie Deficit Calculator</a>.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I use my TDEE for muscle gain?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'To gain muscle, you need to consume more calories than your TDEE (a <a href="/calorie-surplus">calorie surplus</a>) and engage in resistance training. A surplus of 250-500 calories is a good starting point to promote muscle growth while minimizing fat gain. You can track muscle growth with the <a href="/ffmi">FFMI Calculator</a>.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which activity level should I choose?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Be honest with your choice. Most people who work desk jobs and go to the gym 3-4 times a week fall into the "Moderately Active" category. If you are unsure, it\'s often better to choose a slightly lower level and adjust based on your results.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why is my BMR required for this calculation?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Your <a href="/bmr">BMR</a> is the foundation of your metabolism—the calories you burn at rest. TDEE is calculated by multiplying your BMR by an activity factor, so BMR must be determined first.',
        },
      },
       {
        '@type': 'Question',
        name: 'Does TDEE account for the thermic effect of food (TEF)?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The standard TDEE formulas (like the one used here) indirectly account for TEF as part of the overall activity multipliers. While TEF technically adds to your calorie burn (about 10% of intake), trying to calculate it separately is overly complex for most people and is already baked into the estimates.',
        },
      },
      {
        '@type': 'Question',
        name: 'Should I recalculate my TDEE as I lose weight?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, absolutely. As your body weight changes, both your <a href="/bmr">BMR</a> and TDEE will change. It\'s a good idea to recalculate your TDEE after every 10-15 pounds of weight loss to ensure your calorie targets remain accurate.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I eat back the calories I burn during exercise?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No, you should not. The activity multipliers used to calculate TDEE already account for the average calorie burn from exercise. "Eating back" calories from a workout is a common mistake that leads to double-counting and can stall weight loss progress.',
        },
      },
      {
        '@type': 'Question',
        name: 'What if my weight isn\'t changing on my calculated TDEE?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'TDEE is an estimate. If you eat at your calculated maintenance calories for 2-3 weeks and your weight is stable, your estimate is accurate. If you are gaining or losing weight, adjust your calorie intake by 100-200 calories and monitor again. Real-world results always trump calculator estimates. Use our <a href="/weight-change-tracker">Weekly Weight Change Tracker</a> to get precise data.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does TDEE compare to the Daily Calorie Needs calculator?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'TDEE is the scientific term for your total daily calorie expenditure, often referred to as your "maintenance calories" or "daily calorie needs". This calculator provides a more detailed breakdown for different goals like fat loss and muscle gain.',
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
              <BreadcrumbPage>TDEE Calculator</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <Card>
          <CardHeader>
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 text-primary p-3 rounded-lg">
                <Bike className="h-8 w-8" />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold">
                  TDEE Calculator
                </h1>
                <p className="text-muted-foreground">
                  Your TDEE (Total Daily Energy Expenditure) is the total number of calories you burn in a day. It's the most crucial starting point for any weight management goal. First, calculate your <Link href="/bmr" className="text-primary hover:underline">BMR</Link>, then use this tool to find your maintenance calories and set precise targets for your goals.
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <TdeeCalculatorForm />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>How to Use the TDEE Calculator</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              This calculator determines your daily calorie needs by multiplying your Basal Metabolic Rate (BMR) by an activity factor. It's the essential second step after finding your BMR.
            </p>
            <ol className="list-decimal list-inside space-y-2">
              <li><strong>Calculate Your BMR:</strong> If you haven't already, go to our <Link href="/bmr" className="text-primary hover:underline">BMR Calculator</Link>. The result will be automatically imported here.</li>
              <li><strong>Select Your Activity Level:</strong> Choose the option that most accurately reflects your typical week. Be honest—overestimating is a common mistake.</li>
              <li><strong>Calculate TDEE:</strong> The tool will display your estimated TDEE, which is your maintenance calories.</li>
              <li><strong>Set Your Goals:</strong> The results section also shows calorie targets for various rates of weight loss and gain, giving you a clear path forward. From here, you can even explore your <Link href="/macronutrient-ratio" className="text-primary hover:underline">macronutrient needs</Link>.</li>
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
                  <TableHead>Example 1 (Office Worker)</TableHead>
                  <TableHead>Example 2 (Construction Worker)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>BMR</TableCell>
                  <TableCell>1650 kcal/day</TableCell>
                  <TableCell>1900 kcal/day</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Activity Level</TableCell>
                  <TableCell>Lightly Active (1.375)</TableCell>
                  <TableCell>Very Active (1.725)</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-bold">Calculated TDEE (Maintenance)</TableCell>
                  <TableCell className="font-bold">2269 kcal/day</TableCell>
                  <TableCell className="font-bold">3278 kcal/day</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Weight Loss Goal (-1 lb/week)</TableCell>
                  <TableCell>~1769 kcal/day</TableCell>
                  <TableCell>~2778 kcal/day</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Interpretation</TableCell>
                  <TableCell>To lose weight, this person should aim for about 1770 calories per day. This shows that even with a lower BMR, activity matters.</TableCell>
                  <TableCell>This person's physically demanding job gives them a very high TDEE. They need to eat significantly more to maintain their weight. For muscle gain, they could aim for ~3500 kcal.</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Understanding TDEE: The Key to Energy Balance</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <h3 className="font-semibold text-lg text-foreground">What Is Total Daily Energy Expenditure?</h3>
            <p>Your TDEE is the grand total of all the energy you expend in a 24-hour period. It's composed of three main components:</p>
            <ol className="list-decimal list-inside space-y-2">
                <li><strong>Basal Metabolic Rate (BMR):</strong> The energy used for basic life-sustaining functions at rest. This is the largest component, and you can calculate it with our <Link href="/bmr" className="text-primary hover:underline">BMR Calculator</Link>.</li>
                <li><strong>Thermic Effect of Food (TEF):</strong> The energy used to digest, absorb, and metabolize the food you eat. It accounts for about 10% of your daily energy expenditure.</li>
                <li><strong>Activity Energy Expenditure (AEE):</strong> The energy used during physical activity. This is the most variable component and includes everything from walking to the store to intense exercise.</li>
            </ol>
            <p>The formula used by TDEE calculators (TDEE = BMR x Activity Multiplier) simplifies this by bundling TEF and AEE into the "Activity Multiplier." This provides a practical estimate of your "maintenance calories"—the number of calories you need to eat to maintain your current weight.</p>

            <h3 className="font-semibold text-lg text-foreground">The Law of Energy Balance</h3>
            <p>Your TDEE is the cornerstone of the law of energy balance, which governs weight change:</p>
            <ul className="list-disc list-inside space-y-1">
                <li><strong>Calorie Deficit:</strong> If you consistently consume fewer calories than your TDEE, you will lose weight. This can be planned with the <Link href="/calorie-deficit" className="text-primary hover:underline">Calorie Deficit Calculator</Link>.</li>
                <li><strong>Calorie Surplus:</strong> If you consistently consume more calories than your TDEE, you will gain weight. This can be planned with the <Link href="/calorie-surplus" className="text-primary hover:underline">Calorie Surplus Calculator</Link>.</li>
                <li><strong>Energy Balance:</strong> If you consistently consume the same number of calories as your TDEE, your weight will remain stable. This is your goal with the <Link href="/calorie-maintenance" className="text-primary hover:underline">Calorie Maintenance Calculator</Link>.</li>
            </ul>
            <p>By getting an accurate TDEE estimate, you transform weight management from a guessing game into a predictable science. You can then create a precise plan to reach your goal, whether it's shedding fat, building muscle by targeting a specific <Link href="/ideal-weight" className="text-primary hover:underline">ideal weight</Link>, or simply maintaining a healthy body composition, which you can track with the <Link href="/body-fat" className="text-primary hover:underline">Body Fat Calculator</Link>.</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Common Mistakes When Using TDEE</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>Overestimating Activity Level:</strong> This is the most common error. People often overestimate how active they are, leading to a TDEE that is too high and stalled weight loss. When in doubt, choose the lower activity level.</li>
              <li><strong>Forgetting to Recalculate:</strong> Your TDEE is not static. As you lose weight, your TDEE will decrease. You must recalculate it every 10-15 lbs to keep your targets accurate.</li>
              <li><strong>"Eating Back" Exercise Calories:</strong> Fitness trackers often overestimate calories burned. Your activity multiplier already accounts for exercise. Do not add extra calories back in after a workout.</li>
              <li><strong>Treating it as Gospel:</strong> TDEE is a powerful estimate, but it's still an estimate. Use it as a starting point, track your weight for 2-3 weeks with the <Link href="/weight-change-tracker" className="text-primary hover:underline">Weekly Weight Change Tracker</Link>, and if your progress doesn't match your goal, adjust your calorie intake by 100-200 per day.</li>
            </ul>
          </CardContent>
        </Card>
        
        <Card>
            <CardHeader><CardTitle>Pro Tips &amp; Quick Hacks</CardTitle></CardHeader>
            <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li><strong>Prioritize Protein to Protect BMR:</strong> When in a calorie deficit, a higher protein intake helps preserve muscle mass, which in turn helps keep your BMR from dropping as much. Use a Protein Intake Calculator to find your target.</li>
                    <li><strong>Use BMR to Set Your "Non-Negotiable" Floor:</strong> As a general rule, avoid dieting on calorie levels at or below your BMR for extended periods, as this can negatively impact metabolism and lead to nutrient deficiencies.</li>
                    <li><strong>Reverse Dieting with BMR:</strong> After a long diet, you can use your TDEE to slowly increase calories back to a new, higher maintenance level, which helps restore metabolic rate.</li>
                    <li><strong>Cycle Your Calories:</strong> Instead of eating the same deficit every day, try eating closer to your TDEE on training days and a larger deficit on rest days. This can help with workout performance and adherence.</li>
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
                <AccordionTrigger>What is TDEE?</AccordionTrigger>
                <AccordionContent>TDEE (Total Daily Energy Expenditure) is an estimate of your total daily calorie burn, including all activities. It is calculated from your <Link href="/bmr" className="text-primary hover:underline">BMR</Link> and is the key to managing your weight.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>How do I use my TDEE for weight loss?</AccordionTrigger>
                <AccordionContent>To lose weight, create a calorie deficit by eating fewer calories than your TDEE. A 500-calorie deficit per day typically leads to about 1 pound of weight loss per week. You can plan this with the <Link href="/calorie-deficit" className="text-primary hover:underline">Calorie Deficit Calculator</Link>.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>How do I use my TDEE for muscle gain?</AccordionTrigger>
                <AccordionContent>To gain muscle, create a small calorie surplus by eating 250-500 calories more than your TDEE, combined with resistance training. You can track your muscle gains with the <Link href="/ffmi" className="text-primary hover:underline">FFMI Calculator</Link>.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Which activity level should I choose?</AccordionTrigger>
                <AccordionContent>Be honest. Most office workers who exercise 3-5 days a week are "Moderately Active." If you are unsure, it is better to underestimate than overestimate.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Should I recalculate my TDEE as I lose weight?</AccordionTrigger>
                <AccordionContent>Yes. As your weight changes, your metabolism changes. Recalculate your <Link href="/bmr" className="text-primary hover:underline">BMR</Link> and TDEE after every 10-15 lbs of weight change to keep your calorie targets accurate.</AccordionContent>
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
                            <TableCell>Determine daily maintenance calories to prevent unintentional weight gain or loss.</TableCell>
                            <TableCell><Link href="/calorie-deficit" className="text-primary hover:underline">Calorie Deficit Calculator</Link></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Fitness Coaches</TableCell>
                            <TableCell>Create precise calorie targets for client fat loss or muscle gain phases.</TableCell>
                             <TableCell><Link href="/macronutrient-ratio" className="text-primary hover:underline">Macronutrient Ratio</Link></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Nutritionists</TableCell>
                            <TableCell>Design meal plans that are perfectly aligned with a client's energy needs.</TableCell>
                            <TableCell>Meal Calorie Split Calculator</TableCell>
                        </TableRow>
                         <TableRow>
                            <TableCell>Athletes</TableCell>
                            <TableCell>Fuel performance and recovery by ensuring adequate energy intake.</TableCell>
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
            <Link
              href="/bmr"
              className="p-4 border rounded-lg hover:bg-muted"
            >
              <h3 className="font-semibold">BMR Calculator</h3>
              <p className="text-sm text-muted-foreground">
                The first step. Calculate your baseline metabolism before finding your TDEE.
              </p>
            </Link>
            <Link
              href="/calorie-deficit"
              className="p-4 border rounded-lg hover:bg-muted"
            >
              <h3 className="font-semibold">Calorie Deficit Calculator</h3>
              <p className="text-sm text-muted-foreground">
                Plan your weight loss journey with precise deficit targets.
              </p>
            </Link>
            <Link
              href="/macronutrient-ratio"
              className="p-4 border rounded-lg hover:bg-muted"
            >
              <h3 className="font-semibold">Macronutrient Ratio Calculator</h3>
              <p className="text-sm text-muted-foreground">
                Turn your calorie goal into protein, carb, and fat targets.
              </p>
            </Link>
             <Link
              href="/ideal-weight"
              className="p-4 border rounded-lg hover:bg-muted"
            >
              <h3 className="font-semibold">Ideal Weight Calculator</h3>
              <p className="text-sm text-muted-foreground">
                Set a long-term goal for your weight management journey.
              </p>
            </Link>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
