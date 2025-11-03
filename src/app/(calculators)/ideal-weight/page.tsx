
import { Target } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { IdealWeightCalculatorForm } from '@/components/ideal-weight-calculator-form';

export const metadata: Metadata = {
    title: 'Ideal Weight Calculator – Find Your Healthy Weight Range',
    description: 'Calculate your ideal body weight (IBW) based on your height, gender, and frame size with our free calculator. Understand the formulas and what your ideal weight means for your health.',
    openGraph: {
        title: 'Ideal Weight Calculator – Find Your Healthy Weight Range',
        description: 'Calculate your ideal body weight (IBW) based on your height, gender, and frame size with our free calculator. Understand the formulas and what your ideal weight means for your health.',
        type: 'website',
    },
};


export default function IdealWeightPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Ideal Weight Calculator',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
    },
    description:
      'A free web-based calculator to determine your ideal body weight (IBW) using various popular formulas.',
  };

  const howToJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Calculate Your Ideal Weight',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Select Gender',
        text: 'Choose your gender, as the formulas differ for males and females.',
      },
      {
        '@type': 'HowToStep',
        name: 'Select Units',
        text: 'Choose between Metric (cm) or Imperial (inches) units for your height.',
      },
      {
        '@type': 'HowToStep',
        name: 'Enter Height',
        text: 'Input your height accurately.',
      },
      {
        '@type': 'HowToStep',
        name: 'Calculate',
        text: 'Click the "Calculate Ideal Weight" button to see your estimated healthy weight range based on multiple formulas.',
      },
    ],
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is the most accurate ideal weight formula?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No single formula is universally "most accurate" as they are all based on population averages. The Robinson and Miller formulas are often preferred in clinical settings. The best approach is to consider the average of all formulas as a healthy range. Then, use our <a href="/body-fat" aria-label="Body Fat Percentage Calculator">Body Fat Percentage Calculator</a> to get a clearer picture of your composition.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does ideal weight account for muscle mass?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No, these formulas do not account for body composition (muscle vs. fat). An athlete with high muscle mass might weigh more than their calculated "ideal weight" but be perfectly healthy. This is why combining this result with a <a href="/body-fat" aria-label="Body Fat Percentage Calculator">Body Fat Percentage</a> or <a href="/ffmi" aria-label="FFMI Calculator">FFMI</a> calculation is crucial.',
        },
      },
      {
        '@type': 'Question',
        name: 'Should I use ideal weight to set my weight loss goal?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ideal weight can be a useful starting point, but it\'s not a rigid target. Use it to set a realistic goal range, then focus on sustainable habits. Our <a href="/tdee" aria-label="TDEE Calculator">TDEE Calculator</a> can help you create a plan to reach that goal.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why is there a range for ideal weight?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The range accounts for individual differences in body frame, genetics, and muscle mass. A single number is too restrictive. Viewing it as a range promotes a healthier perspective on weight. Once you know your range, you can calculate your <a href="/bmr" aria-label="BMR Calculator">BMR</a> to understand your metabolic baseline.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do these formulas work for children and teenagers?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No, these formulas are designed for adults. For children and teens, growth charts and <a href="/bmi" aria-label="BMI Percentile for Age (Teens)">BMI percentiles</a> are used by pediatricians to assess healthy development.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does body frame size affect ideal weight?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Body frame size (small, medium, large) can influence your ideal weight. Someone with a larger frame will naturally have a higher ideal weight. While our calculator doesn\'t explicitly ask for frame size, the range provided by the different formulas implicitly accounts for some of this variability. Tools like the <a href="/waist-to-height-ratio" aria-label="Waist-to-Height Ratio Calculator">Waist-to-Height Ratio</a> can add more context.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is it unhealthy to be outside my ideal weight range?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Not necessarily. Being slightly outside the range isn\'t automatically unhealthy, especially if you have a healthy <a href="/body-fat" aria-label="Body Fat Percentage Calculator">body fat percentage</a> and lead an active lifestyle. These are guidelines, not strict rules. It\'s a good prompt to check other metrics like your <a href="/bmi" aria-label="BMI Calculator">BMI</a>.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I determine my body frame size?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can estimate it by measuring your wrist circumference or elbow breadth. However, this is often subjective. A more practical approach is to focus on metrics you can change, like your <a href="/body-fat" aria-label="Body Fat Percentage Calculator">body fat percentage</a> and overall fitness.',
        },
      },
      {
        '@type': 'Question',
        name: 'What if my current weight is far from my ideal weight?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Don\'t be discouraged. Use this as a long-term reference. Start by calculating your <a href="/tdee" aria-label="TDEE Calculator">TDEE Calculator</a> to create a small, manageable calorie deficit or surplus.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why do men and women have different ideal weight formulas?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Men and women have different body compositions on average. Men tend to have more muscle mass and bone density, which is reflected in the formulas. These differences also affect metabolic rate, which you can explore with the <a href="/bmr" aria-label="BMR Calculator">BMR Calculator</a>.',
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
              <BreadcrumbPage>Ideal Weight Calculator</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <Card>
          <CardHeader>
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 text-primary p-3 rounded-lg">
                <Target className="h-8 w-8" />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold">
                  Ideal Weight Calculator
                </h1>
                <p className="text-muted-foreground">
                    Discover your healthy weight range with our Ideal Body Weight (IBW) Calculator. This tool provides an estimate based on your height and gender using several popular formulas. While it's a great starting point, remember to consider it alongside other metrics like the <Link href="/bmi" className="text-primary hover:underline" aria-label="BMI Calculator">BMI Calculator</Link> and <Link href="/body-fat" className="text-primary hover:underline" aria-label="Body Fat Percentage Calculator">Body Fat Percentage Calculator</Link> for a complete health picture.
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <IdealWeightCalculatorForm />
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>How to Use the Ideal Weight Calculator</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              Using this calculator is simple. It asks for basic information to provide a range for your ideal body weight.
            </p>
            <ol className="list-decimal list-inside space-y-2">
              <li><strong>Select Your Gender:</strong> The formulas used are different for males and females due to typical differences in body composition.</li>
              <li><strong>Choose Your Units:</strong> Pick "Metric" (cm) or "Imperial" (inches) for your height.</li>
              <li><strong>Enter Your Height:</strong> Input your height accurately. Stand straight without shoes for the best measurement.</li>
              <li><strong>Calculate:</strong> Click the button to see your ideal weight range. The result is not a single number but a healthy range to account for individual differences. Once you have this, see how many calories you need with our <Link href="/tdee" className="text-primary hover:underline" aria-label="TDEE Calculator">TDEE Calculator</Link>.</li>
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
                  <TableHead>Example 1 (Female)</TableHead>
                  <TableHead>Example 2 (Male)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Gender</TableCell>
                  <TableCell>Female</TableCell>
                  <TableCell>Male</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Height</TableCell>
                  <TableCell>168 cm (5' 6")</TableCell>
                  <TableCell>183 cm (6' 0")</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-bold">Ideal Weight (Hamwi)</TableCell>
                  <TableCell className="font-bold">60.5 kg (133.4 lbs)</TableCell>
                  <TableCell className="font-bold">78.0 kg (172.0 lbs)</TableCell>
                </TableRow>
                 <TableRow>
                    <TableCell>Next Step</TableCell>
                    <TableCell>Compare this to her <Link href="/bmi" className="text-primary hover:underline" aria-label="BMI Calculator">BMI</Link> to ensure it's in the normal range.</TableCell>
                    <TableCell>Calculate his <Link href="/bmr" className="text-primary hover:underline" aria-label="BMR Calculator">BMR</Link> to understand his baseline metabolism at this weight.</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Understanding Ideal Weight: Formulas and Limitations</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <h3 className="font-semibold text-lg text-foreground">What is Ideal Body Weight (IBW)?</h3>
            <p>Ideal Body Weight (IBW) is a historical concept that attempts to define a healthy weight range for a given height. Several formulas have been developed over the years by scientists and doctors to provide a quick reference for medical assessments and dosage calculations. It's important to understand that these are estimations, not definitive targets. They serve as a useful guide but should not be viewed as a strict rule you must achieve.</p>
            <p>The primary limitation of all IBW formulas is that they do not account for body composition. They can't tell the difference between a pound of muscle and a pound of fat. A bodybuilder, for example, might be classified as "overweight" by these formulas despite having a very low and healthy <Link href="/body-fat" className="text-primary hover:underline" aria-label="Body Fat Percentage Calculator">body fat percentage</Link>. Conversely, a sedentary person could be within their "ideal weight" range but have low muscle mass and high body fat, a condition sometimes called "normal weight obesity."</p>

            <h3 className="font-semibold text-lg text-foreground">The Formulas Used</h3>
            <p>This calculator uses the popular Hamwi Formula from 1964, which is simple and widely used:</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
                <li><strong>For Men:</strong> 48.0 kg + 2.7 kg for each inch over 5 feet.</li>
                <li><strong>For Women:</strong> 45.5 kg + 2.2 kg for each inch over 5 feet.</li>
            </ul>
             <p>Our calculator provides a range (±10%) to account for variations in body frame size.</p>

             <h3 className="font-semibold text-lg text-foreground">How to Use Ideal Weight in a Healthy Way</h3>
             <p>Instead of fixating on a single number, use the ideal weight range as one of several data points in your health journey. Here’s a more holistic approach:</p>
            <ol className="list-decimal list-inside space-y-2">
                <li><strong>Start with a Baseline:</strong> Use this calculator to get a general idea of a healthy weight range for your height.</li>
                <li><strong>Assess Your Body Composition:</strong> Use the <Link href="/body-fat" className="text-primary hover:underline" aria-label="Body Fat Percentage Calculator">Body Fat Percentage Calculator</Link>. This is a far more important metric for health than total weight.</li>
                <li><strong>Check Your BMI:</strong> The <Link href="/bmi" className="text-primary hover:underline" aria-label="BMI Calculator">BMI Calculator</Link> provides another quick screening tool. If your BMI is high but your body fat is low, you are likely in good health. If both are high, it's a signal to take action.</li>
                <li><strong>Understand Your Metabolism:</strong> Calculate your <Link href="/bmr" className="text-primary hover:underline" aria-label="BMR Calculator">BMR (Basal Metabolic Rate)</Link> to find out how many calories your body burns at rest.</li>
                <li><strong>Set Your Calorie Goals:</strong> Use your BMR and activity level in the <Link href="/tdee" className="text-primary hover:underline" aria-label="TDEE Calculator">TDEE Calculator</Link> to determine how many calories you should eat to maintain, lose, or gain weight.</li>
            </ol>
             <p>By combining these tools, you move from a simple weight number to a comprehensive understanding of your body's health and energy needs.
            </p>
          </CardContent>
        </Card>

        <Card>
            <CardHeader><CardTitle>Common Mistakes</CardTitle></CardHeader>
            <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li><strong>Treating it as a Strict Target:</strong> Your ideal weight is a range, not a single number. Don't get discouraged if you're not at the exact midpoint.</li>
                    <li><strong>Ignoring Body Composition:</strong> As mentioned, muscle is denser than fat. If you lift weights, you may be healthy even if you are above your "ideal" weight. Always check your <Link href="/body-fat" className="text-primary hover:underline" aria-label="Body Fat Percentage Calculator">body fat percentage</Link>.</li>
                    <li><strong>Not Considering Frame Size:</strong> These formulas are based on a medium frame. If you have a naturally small or large bone structure, your healthy weight will be at the lower or upper end of the range, respectively.</li>
                    <li><strong>Applying it to Children:</strong> These formulas are for fully grown adults. Use a <Link href="/bmi" className="text-primary hover:underline" aria-label="BMI Calculator">BMI percentile calculator</Link> for children and teens.</li>
                </ul>
            </CardContent>
        </Card>
        
        <Card>
            <CardHeader><CardTitle>Pro Tips & Quick Hacks</CardTitle></CardHeader>
            <CardContent>
                 <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li><strong>Use the 10% Rule:</strong> The range provided is roughly ±10% of the formula's result. This is a good way to account for frame size and muscle mass variations.</li>
                    <li><strong>Focus on Fat Loss, Not Just Weight Loss:</strong> When you're near your ideal weight, your goal should shift from losing "weight" to losing "fat." This requires adequate protein and strength training. Calculate your needs with our Protein Intake and <Link href="/tdee" className="text-primary hover:underline" aria-label="TDEE Calculator">TDEE</Link> calculators.</li>
                    <li><strong>Pair with Waist Measurements:</strong> A healthy weight with a high waist circumference can still be a health risk. Use the <Link href="/waist-to-height-ratio" className="text-primary hover:underline" aria-label="Waist-to-Height Ratio Calculator">Waist-to-Height Ratio</Link> calculator for more insight.</li>
                    <li><strong>Recalculate Periodically:</strong> Your ideal weight range won't change unless your height does, but it's good to re-evaluate your goals and progress with other tools like the <Link href="/bmr" className="text-primary hover:underline" aria-label="BMR Calculator">BMR Calculator</Link> as your weight changes.</li>
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
                <AccordionTrigger>What is the most accurate ideal weight formula?</AccordionTrigger>
                <AccordionContent>No single formula is universally "most accurate." The best approach is to consider the average as a healthy range. Then, use our <Link href="/body-fat" className="text-primary hover:underline" aria-label="Body Fat Percentage Calculator">Body Fat Percentage Calculator</Link> for a clearer picture.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Does ideal weight account for muscle mass?</AccordionTrigger>
                <AccordionContent>No, it does not. An athlete might weigh more than their "ideal weight" but be perfectly healthy. This is why combining it with a <Link href="/body-fat" className="text-primary hover:underline" aria-label="Body Fat Percentage Calculator">Body Fat Percentage</Link> or <Link href="/ffmi" className="text-primary hover:underline" aria-label="FFMI Calculator">FFMI</Link> calculation is crucial.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Should I use ideal weight to set my weight loss goal?</AccordionTrigger>
                <AccordionContent>It can be a useful starting point, but it's not a rigid target. Use it to set a realistic goal range, then use our <Link href="/tdee" className="text-primary hover:underline" aria-label="TDEE Calculator">TDEE Calculator</Link> to create a plan.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Why is there a range for ideal weight?</AccordionTrigger>
                <AccordionContent>The range accounts for differences in body frame, genetics, and muscle mass. A single number is too restrictive. Once you know your range, you can calculate your <Link href="/bmr" className="text-primary hover:underline" aria-label="BMR Calculator">BMR</Link> to understand your metabolic baseline.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Do these formulas work for children and teenagers?</AccordionTrigger>
                <AccordionContent>No, these formulas are for adults. For children, <Link href="/bmi" className="text-primary hover:underline" aria-label="BMI Calculator">BMI percentiles</Link> are used by pediatricians.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                 <AccordionTrigger>How does body frame size affect ideal weight?</AccordionTrigger>
                 <AccordionContent>A larger frame means a higher ideal weight. While our calculator provides a range, tools like the <Link href="/waist-to-height-ratio" className="text-primary hover:underline" aria-label="Waist-to-Height Ratio Calculator">Waist-to-Height Ratio</Link> can add more context to your body shape and health risk.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7">
                <AccordionTrigger>Is it unhealthy to be outside my ideal weight range?</AccordionTrigger>
                <AccordionContent>Not necessarily, especially if you have a healthy <Link href="/body-fat" className="text-primary hover:underline" aria-label="Body Fat Percentage Calculator">body fat percentage</Link>. It's a good prompt to check other metrics like your <Link href="/bmi" className="text-primary hover:underline" aria-label="BMI Calculator">BMI</Link>.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-8">
                <AccordionTrigger>How do I determine my body frame size?</AccordionTrigger>
                <AccordionContent>You can estimate it with wrist measurements, but it's often subjective. A better approach is to focus on metrics you can change, like your <Link href="/body-fat" className="text-primary hover:underline" aria-label="Body Fat Percentage Calculator">body fat percentage</Link>.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-9">
                <AccordionTrigger>What if my current weight is far from my ideal weight?</AccordionTrigger>
                <AccordionContent>Use this as a long-term reference. Start by calculating your <Link href="/tdee" className="text-primary hover:underline" aria-label="TDEE Calculator">TDEE</Link> to create a small, manageable calorie deficit.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-10">
                <AccordionTrigger>Why do men and women have different ideal weight formulas?</AccordionTrigger>
                <AccordionContent>Men and women have different average body compositions (muscle vs. fat), which the formulas reflect. These differences also affect metabolic rate, which you can explore with the <Link href="/bmr" className="text-primary hover:underline" aria-label="BMR Calculator">BMR Calculator</Link>.</AccordionContent>
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
                            <TableCell>Set a healthy, long-term weight goal.</TableCell>
                            <TableCell><Link href="/tdee" className="text-primary hover:underline" aria-label="TDEE Calculator">TDEE Calculator</Link></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Fitness Coaches</TableCell>
                            <TableCell>Provide clients with a realistic target weight range.</TableCell>
                             <TableCell><Link href="/weight-loss-goal" className="text-primary hover:underline" aria-label="Weight Loss Goal Calculator">Weight Loss Goal</Link></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Nutritionists</TableCell>
                            <TableCell>Establish a baseline for creating a nutrition plan.</TableCell>
                            <TableCell><Link href="/macronutrient-ratio" className="text-primary hover:underline" aria-label="Macronutrient Ratio Calculator">Macronutrient Ratio</Link></TableCell>
                        </TableRow>
                         <TableRow>
                            <TableCell>Medical Professionals</TableCell>
                            <TableCell>Quickly assess if a patient's weight is within a healthy range for their height.</TableCell>
                            <TableCell><Link href="/bmi" className="text-primary hover:underline" aria-label="BMI Calculator">BMI Calculator</Link></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Continue Your Analysis</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/bmi" className="p-4 border rounded-lg hover:bg-muted" aria-label="BMI Calculator">
              <h3 className="font-semibold">BMI Calculator</h3>
              <p className="text-sm text-muted-foreground">See how your ideal weight range aligns with BMI categories.</p>
            </Link>
            <Link href="/body-fat" className="p-4 border rounded-lg hover:bg-muted" aria-label="Body Fat Percentage Calculator">
              <h3 className="font-semibold">Body Fat Percentage Calculator</h3>
              <p className="text-sm text-muted-foreground">Go beyond weight and understand your body composition.</p>
            </Link>
            <Link href="/bmr" className="p-4 border rounded-lg hover:bg-muted" aria-label="BMR Calculator">
              <h3 className="font-semibold">BMR Calculator</h3>
              <p className="text-sm text-muted-foreground">Find out your baseline calorie burn to plan your diet.</p>
            </Link>
            <Link href="/tdee" className="p-4 border rounded-lg hover:bg-muted" aria-label="TDEE Calculator">
              <h3 className="font-semibold">TDEE Calculator</h3>
              <p className="text-sm text-muted-foreground">Turn your BMR into an actionable daily calorie target.</p>
            </Link>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
