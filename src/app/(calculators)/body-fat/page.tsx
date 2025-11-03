
'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Percent, Terminal } from 'lucide-react';
import Link from 'next/link';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useCalculator } from '@/context/calculator-context';
import { BodyFatSchema, type BodyFatFormValues } from '@/lib/definitions';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
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

function BodyFatCalculatorForm() {
  const { state, dispatch } = useCalculator();
  const [bodyFatResult, setBodyFatResult] = useState<number | null>(null);

  const form = useForm<BodyFatFormValues>({
    resolver: zodResolver(BodyFatSchema),
    defaultValues: {
      gender: state.gender,
      height: state.height,
      waist: state.waist,
      neck: state.neck,
      hip: state.hip,
      unitSystem: state.unitSystem,
    },
    values: {
      gender: state.gender,
      height: state.height,
      waist: state.waist,
      neck: state.neck,
      hip: state.hip,
      unitSystem: state.unitSystem,
    },
  });

  const gender = form.watch('gender');

  function onSubmit(data: BodyFatFormValues) {
    const height = parseFloat(data.height);
    const waist = parseFloat(data.waist);
    const neck = parseFloat(data.neck);
    const hip = data.hip ? parseFloat(data.hip) : 0;

    let bodyFat: number;

    const toInches = (cm: number) => cm / 2.54;
    const heightIn = data.unitSystem === 'metric' ? toInches(height) : height;
    const waistIn = data.unitSystem === 'metric' ? toInches(waist) : waist;
    const neckIn = data.unitSystem === 'metric' ? toInches(neck) : neck;
    const hipIn = data.unitSystem === 'metric' ? toInches(hip) : hip;

    if (data.gender === 'male') {
      bodyFat =
        86.01 * Math.log10(waistIn - neckIn) -
        70.041 * Math.log10(heightIn) +
        36.76;
    } else {
      bodyFat =
        163.205 * Math.log10(waistIn + hipIn - neckIn) -
        97.684 * Math.log10(heightIn) -
        78.387;
    }

    const result = Math.max(0, bodyFat);
    setBodyFatResult(result);
    dispatch({
      type: 'SET_USER_DATA',
      payload: {
        gender: data.gender,
        height: data.height,
        waist: data.waist,
        neck: data.neck,
        hip: data.hip,
      },
    });
    dispatch({ type: 'SET_RESULTS', payload: { bodyFat: result } });
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    form.setValue(name as keyof BodyFatFormValues, value);
    dispatch({ type: 'SET_USER_DATA', payload: { [name]: value } });
  };

  const handleSelectChange =
    (name: keyof BodyFatFormValues) => (value: string) => {
      form.setValue(name, value);
      dispatch({ type: 'SET_USER_DATA', payload: { [name]: value } });
    };

  return (
    <div className='p-6 pt-0'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Gender</FormLabel>
                <Select
                  onValueChange={handleSelectChange('gender')}
                  value={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your gender" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="male">Male</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="height"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Height ({state.unitSystem === 'metric' ? 'cm' : 'in'})
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="e.g., 175"
                      {...field}
                      onChange={handleInputChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="waist"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Waist ({state.unitSystem === 'metric' ? 'cm' : 'in'})
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="e.g., 80"
                      {...field}
                      onChange={handleInputChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="neck"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Neck ({state.unitSystem === 'metric' ? 'cm' : 'in'})
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="e.g., 38"
                      {...field}
                      onChange={handleInputChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className={cn(gender === 'female' ? 'block' : 'hidden')}>
              <FormField
                control={form.control}
                name="hip"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Hip ({state.unitSystem === 'metric' ? 'cm' : 'in'})
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="e.g., 95"
                        {...field}
                        onChange={handleInputChange}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <Button type="submit" className="w-full sm:w-auto">
            Calculate Body Fat
          </Button>
        </form>
      </Form>
      {bodyFatResult !== null && (
        <>
          <Separator className="my-6" />
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-semibold text-foreground">
              Your Estimated Body Fat
            </h3>
            <p className="text-3xl font-bold text-primary">
              {bodyFatResult.toFixed(1)}%
            </p>
            <p className="text-xs text-muted-foreground pt-2">
              This estimation, based on the U.S. Navy method, is a valuable
              starting point. For a complete health assessment, consult a
              healthcare professional.
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export default function BodyFatPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Body Fat Percentage Calculator',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
    },
    description:
      'Estimate body fat percentage using the U.S. Navy method. Understand your body composition for better health and fitness planning.',
  };

  const howToJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Calculate Your Body Fat Percentage',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Select Gender',
        text: 'Choose your gender, as the calculation formula differs for males and females.',
      },
      {
        '@type': 'HowToStep',
        name: 'Select Units',
        text: 'Choose between Metric (cm) or Imperial (inches) units for your measurements.',
      },
      {
        '@type': 'HowToStep',
        name: 'Enter Measurements',
        text: 'Input your height, waist, and neck circumference. If you are female, you must also enter your hip circumference.',
      },
      {
        '@type': 'HowToStep',
        name: 'Calculate',
        text: 'Click the "Calculate Body Fat" button to see your estimated body fat percentage.',
      },
    ],
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is a healthy body fat percentage?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A healthy body fat percentage varies by age and gender. For men, 10-20% is generally considered fit, while for women, 20-30% is a healthy range. Exceeding these ranges may increase health risks. To see how your weight compares, check our <a href="/ideal-weight">Ideal Weight Calculator</a>.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why is body fat percentage a better metric than BMI?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Body fat percentage distinguishes between fat mass and lean mass, whereas <a href="/bmi">BMI</a> does not. An athlete might have a high BMI due to muscle but a low body fat percentage, making them metabolically healthy.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I accurately measure my waist, neck, and hip?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Use a flexible measuring tape. For the waist, measure at the narrowest point, typically just above the navel. For the neck, measure just below the larynx (Adam\'s apple). For hips (females only), measure at the widest part of your buttocks. Consistency is key for tracking changes.',
        },
      },
      {
        '@type': 'Question',
        name: 'How can I lower my body fat percentage?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Lowering body fat requires a combination of a calorie deficit and exercise, particularly strength training to preserve muscle mass. Use the <a href="/calorie-needs">Daily Calorie Needs Calculator</a> to find your maintenance calories and create a deficit, and consider using the <a href="/bmr">BMR Calculator</a> to understand your baseline metabolic rate.',
        },
      },
      {
        '@type': 'Question',
        name: 'How accurate is the U.S. Navy method?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The U.S. Navy method is a reliable estimation for most people, often within 1-3% of clinical methods like DEXA scans. However, it is still an estimation. For precise measurements, consult a professional.',
        },
      },
      {
        '@type': 'Question',
        name: 'Should I measure my body fat every day?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No, daily fluctuations in water weight can skew results. It is best to measure your body fat percentage every 2-4 weeks, under consistent conditions (e.g., in the morning before eating).',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I have a high body fat percentage and still be a healthy weight?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'This is sometimes referred to as "normal weight obesity." While your weight might fall within a normal range on the <a href="/bmi">BMI chart</a>, a high body fat percentage can still pose health risks. It underscores the importance of body composition over just body weight.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the difference between essential fat and storage fat?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Essential fat is necessary for normal bodily functions (around 3-5% for men, 10-13% for women). Storage fat is accumulated energy. Our calculator measures total body fat. Extremely low levels can be dangerous.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does my <a href="/bmr">BMR</a> decrease as I lose body fat?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, typically. As you lose weight (both fat and some muscle), your body requires fewer calories at rest, causing your BMR to drop. This is why you may need to recalculate your <a href="/calorie-needs">Daily Calorie Needs</a> periodically during a weight loss journey.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is there an ideal body fat percentage for athletic performance?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, it varies by sport. Endurance athletes often have very low body fat (e.g., 6-13% for men, 14-20% for women), while strength athletes might have higher percentages. Reaching a specific body fat percentage can be a goal set using a tool like our <a href="/all">Goal Weight Estimator</a>.',
        },
      },
    ],
  };

  return (
    <>
      <head>
        <title>Body Fat Percentage Calculator – Estimate Body Composition</title>
        <meta
          name="description"
          content="Estimate your body fat percentage with our free, accurate calculator using the U.S. Navy method. Understand your body composition for better health, fitness, and weight management."
        />
        <meta
          property="og:title"
          content="Body Fat Percentage Calculator – Estimate Body Composition"
        />
        <meta
          property="og:description"
          content="Estimate your body fat percentage with our free, accurate calculator using the U.S. Navy method. Understand your body composition for better health, fitness, and weight management."
        />
        <meta property="og:type" content="website" />
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
      </head>
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
              <BreadcrumbPage>Body Fat Percentage Calculator</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Main Calculator Card */}
        <Card>
          <CardHeader>
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 text-primary p-3 rounded-lg">
                <Percent className="h-8 w-8" />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold">
                  Body Fat Percentage Calculator
                </h1>
                <p className="text-muted-foreground">
                  Estimate your body fat percentage using the U.S. Navy method.
                </p>
              </div>
            </div>
          </CardHeader>
          <BodyFatCalculatorForm />
        </Card>

        {/* How to Use Section */}
        <Card>
          <CardHeader>
            <CardTitle>How to Use the Body Fat Calculator</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              This calculator uses the U.S. Navy formula, which relies on body
              measurements to estimate body composition. Follow these steps for
              the most accurate estimation:
            </p>
            <ol className="list-decimal list-inside space-y-2">
              <li>
                <strong>Select Your Gender:</strong> The formulas for men and
                women are different.
              </li>
              <li>
                <strong>Choose Your Units:</strong> Select "Metric" (cm) or
                "Imperial" (inches).
              </li>
              <li>
                <strong>Take Accurate Measurements:</strong> Use a flexible
                measuring tape.
                <ul className="list-disc list-inside ml-4 mt-2">
                  <li>
                    <strong>Height:</strong> Stand straight without shoes.
                  </li>
                  <li>
                    <strong>Waist:</strong> Measure at the narrowest point of
                    your abdomen, usually just above your belly button.
                  </li>
                  <li>
                    <strong>Neck:</strong> Measure just below your Adam's apple.
                  </li>
                  <li>
                    <strong>Hips (Females Only):</strong> Measure at the widest
                    part of your hips and buttocks.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Calculate:</strong> Click the "Calculate Body Fat"
                button to get your result. The calculator will provide your
                estimated body fat percentage, a key indicator of your body
                composition.
              </li>
            </ol>
            <p>
              Once you know your body fat percentage, you can calculate your{' '}
              <Link
                href="/bmr"
                className="text-primary hover:underline"
              >
                Basal Metabolic Rate (BMR)
              </Link>{' '}
              to better understand your energy needs.
            </p>
          </CardContent>
        </Card>

        {/* Worked Examples */}
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
                  <TableCell>165 cm (65 in)</TableCell>
                  <TableCell>180 cm (71 in)</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Waist</TableCell>
                  <TableCell>70 cm (27.5 in)</TableCell>
                  <TableCell>85 cm (33.5 in)</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Neck</TableCell>
                  <TableCell>33 cm (13 in)</TableCell>
                  <TableCell>38 cm (15 in)</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Hip</TableCell>
                  <TableCell>95 cm (37.4 in)</TableCell>
                  <TableCell>N/A</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-bold">
                    Estimated Body Fat %
                  </TableCell>
                  <TableCell className="font-bold">25.4%</TableCell>
                  <TableCell className="font-bold">18.2%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Next Step</TableCell>
                  <TableCell>
                    Determine her{' '}
                    <Link
                      href="/ideal-weight"
                      className="text-primary hover:underline"
                    >
                      Ideal Weight
                    </Link>
                    .
                  </TableCell>
                  <TableCell>
                    Calculate his{' '}
                    <Link
                      href="/calorie-needs"
                      className="text-primary hover:underline"
                    >
                      Daily Calorie Needs
                    </Link>
                    .
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Educational Content */}
        <Card>
          <CardHeader>
            <CardTitle>
              Understanding Body Composition: Beyond the Scale
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <h3 className="font-semibold text-lg text-foreground">
              What is Body Fat Percentage?
            </h3>
            <p>
              Body Fat Percentage (BFP) is the total mass of fat divided by
              total body mass, multiplied by 100. Your body contains two main
              types of fat: essential fat and storage fat. Essential fat is
              vital for normal physiological function, found in organs, bone
              marrow, and nerve cells. Storage fat is the energy reserve under
              your skin (subcutaneous) and around your organs (visceral). While some
              storage fat is healthy, excessive amounts, particularly visceral fat,
              are linked to health risks.
            </p>
            <p>
              Unlike the{' '}
              <Link href="/bmi" className="text-primary hover:underline">
                BMI Calculator
              </Link>
              , which only considers height and weight, the BFP calculator
              provides insight into your body composition—the ratio of fat mass
              to lean mass (muscles, bones, organs, and water). This makes it a
              superior metric for athletes, bodybuilders, and anyone serious
              about their health, as it distinguishes between weight from muscle
              and weight from fat.
            </p>

            <h3 className="font-semibold text-lg text-foreground">
              Why Body Composition Matters More Than Weight
            </h3>
            <p>
              Two individuals can have the same height and weight—and therefore
              the same BMI—but vastly different body compositions and health
              profiles. One might have a high percentage of muscle and low fat,
              while the other could have low muscle and high fat. The latter is
              at a higher risk for metabolic diseases, even if their weight seems
              "normal."
            </p>
            <p>
              Knowing your body fat percentage helps you set more intelligent
              fitness goals. Instead of just "losing weight," you can aim to
              "reduce body fat while preserving lean muscle." This is a much
              healthier and more sustainable approach. To do this effectively,
              you need to understand your energy balance. Start by finding your{' '}
              <Link href="/bmr" className="text-primary hover:underline">
                Basal Metabolic Rate (BMR)
              </Link>
              , the calories your body burns at rest. Then, use the{' '}
              <Link
                href="/calorie-needs"
                className="text-primary hover:underline"
              >
                Daily Calorie Needs Calculator
              </Link>{' '}
              to determine your total daily energy expenditure (TDEE). With this
              information, you can create a targeted calorie plan for fat loss or
              muscle gain.
            </p>

            <h3 className="font-semibold text-lg text-foreground">
              Healthy Body Fat Ranges
            </h3>
            <p>
              Healthy body fat percentages vary based on gender and age. Women
              naturally have a higher percentage of essential fat than men.
              Here are the general classifications according to the American
              Council on Exercise (ACE):
            </p>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Description</TableHead>
                  <TableHead>Women</TableHead>
                  <TableHead>Men</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Essential Fat</TableCell>
                  <TableCell>10-13%</TableCell>
                  <TableCell>2-5%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Athletes</TableCell>
                  <TableCell>14-20%</TableCell>
                  <TableCell>6-13%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Fitness</TableCell>
                  <TableCell>21-24%</TableCell>
                  <TableCell>14-17%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Acceptable</TableCell>
                  <TableCell>25-31%</TableCell>
                  <TableCell>18-24%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Obese</TableCell>
                  <TableCell>32%+</TableCell>
                  <TableCell>25%+</TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <p>
              Falling into the "obese" category increases the risk of various
              health issues. However, having a body fat percentage that is too
              low can also be dangerous, leading to hormonal imbalances and other
              complications. Aim for the "Fitness" or "Acceptable" range for
              general health. You can compare your current weight to a
              recommended range using the{' '}
              <Link
                href="/ideal-weight"
                className="text-primary hover:underline"
              >
                Ideal Weight Calculator
              </Link>
              .
            </p>
          </CardContent>
        </Card>

        {/* Pro Tips */}
        <Card>
          <CardHeader>
            <CardTitle>Pro Tips & Quick Hacks</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>
                <strong>Measure Consistently:</strong> For reliable tracking,
                measure yourself at the same time of day and under the same
                conditions, preferably in the morning before eating or drinking.
              </li>
              <li>
                <strong>Don't Chase Daily Changes:</strong> Body fat percentage
                doesn't change overnight. Track your progress every 2-4 weeks to
                see meaningful trends.
              </li>
              <li>
                <strong>Combine with Other Metrics:</strong> Use this calculator alongside the{' '}
                <Link href="/bmi" className="text-primary hover:underline">
                  BMI Calculator
                </Link>{' '}
                and Waist-to-Hip Ratio calculator for a 360-degree view of your
                health.
              </li>
              <li>
                <strong>Focus on Fat Loss, Not Just Weight Loss:</strong> To
                preserve muscle while losing fat, consume adequate protein and
                incorporate strength training. Our{' '}
                <Link
                  href="/calorie-needs"
                  className="text-primary hover:underline"
                >
                  Daily Calorie Needs
                </Link>{' '}
                tool can help you set a moderate deficit.
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* FAQ Section */}
        <Card>
          <CardHeader>
            <CardTitle>Frequently Asked Questions (FAQ)</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  What is a healthy body fat percentage?
                </AccordionTrigger>
                <AccordionContent>
                  A healthy body fat percentage varies by age and gender. For
                  men, 10-20% is generally considered fit, while for women,
                  20-30% is a healthy range. To see how your weight compares,
                  check our{' '}
                  <Link
                    href="/ideal-weight"
                    className="text-primary hover:underline"
                  >
                    Ideal Weight Calculator
                  </Link>
                  .
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  Why is body fat percentage a better metric than BMI?
                </AccordionTrigger>
                <AccordionContent>
                  Body fat percentage distinguishes between fat mass and lean
                  mass, whereas{' '}
                  <Link href="/bmi" className="text-primary hover:underline">
                    BMI
                  </Link>{' '}
                  does not. An athlete might have a high BMI due to muscle but a
                  low body fat percentage, making them metabolically healthy.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  How can I lower my body fat percentage?
                </AccordionTrigger>
                <AccordionContent>
                  Lowering body fat requires a combination of a calorie deficit
                  and exercise. Use the{' '}
                  <Link
                    href="/calorie-needs"
                    className="text-primary hover:underline"
                  >
                    Daily Calorie Needs Calculator
                  </Link>{' '}
                  to find your maintenance calories and create a deficit, and
                  consider using the{' '}
                  <Link href="/bmr" className="text-primary hover:underline">
                    BMR Calculator
                  </Link>{' '}
                  to understand your baseline.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>
                  How accurate is the U.S. Navy method?
                </AccordionTrigger>
                <AccordionContent>
                  The U.S. Navy method is a reliable estimation, often within
                  1-3% of clinical methods. However, it is still an estimation.
                  For precise measurements, consult a professional.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>
                  Does my BMR decrease as I lose body fat?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, typically. As you lose weight, your body requires fewer
                  calories at rest. This is why you should periodically
                  recalculate your{' '}
                  <Link href="/bmr" className="text-primary hover:underline">
                    BMR
                  </Link>{' '}
                  and{' '}
                  <Link
                    href="/calorie-needs"
                    className="text-primary hover:underline"
                  >
                    Daily Calorie Needs
                  </Link>
                  .
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        {/* Related Calculators */}
        <Card>
          <CardHeader>
            <CardTitle>Continue Your Analysis</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/bmi"
              className="p-4 border rounded-lg hover:bg-muted"
            >
              <h3 className="font-semibold">BMI Calculator</h3>
              <p className="text-sm text-muted-foreground">
                Get a quick overview of your weight status in relation to your
                height.
              </p>
            </Link>
            <Link
              href="/ideal-weight"
              className="p-4 border rounded-lg hover:bg-muted"
            >
              <h3 className="font-semibold">Ideal Weight Calculator</h3>
              <p className="text-sm text-muted-foreground">
                Find your healthy weight range based on various formulas.
              </p>
            </Link>
            <Link
              href="/bmr"
              className="p-4 border rounded-lg hover:bg-muted"
            >
              <h3 className="font-semibold">BMR Calculator</h3>
              <p className="text-sm text-muted-foreground">
                Learn the baseline number of calories your body needs to
                function.
              </p>
            </Link>
            <Link
              href="/calorie-needs"
              className="p-4 border rounded-lg hover:bg-muted"
            >
              <h3 className="font-semibold">Daily Calorie Needs Calculator</h3>
              <p className="text-sm text-muted-foreground">
                Estimate your total daily calorie needs to maintain, lose, or
                gain weight.
              </p>
            </Link>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

    