
import { BmiCalculatorForm } from '@/components/bmi-calculator-form';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
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
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Scale } from 'lucide-react';

export const metadata: Metadata = {
  title: 'BMI Calculator – Estimate Body Mass Index Instantly',
  description:
    'Calculate your Body Mass Index (BMI) with our free, accurate calculator. Understand your BMI score and what it means for your health, fitness, and weight management goals.',
  openGraph: {
    title: 'BMI Calculator – Estimate Body Mass Index Instantly',
    description:
      'Calculate your Body Mass Index (BMI) with our free, accurate calculator. Understand your BMI score and what it means for your health, fitness, and weight management goals.',
    type: 'website',
  },
};

export default function BmiPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'BMI Calculator',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
    },
    description:
      'A free web-based calculator to determine Body Mass Index (BMI) based on height and weight.',
  };

  const howToJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Calculate Your BMI',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Select Units',
        text: 'Choose between Metric (cm, kg) or Imperial (in, lbs) units using the toggle.',
      },
      {
        '@type': 'HowToStep',
        name: 'Enter Height',
        text: 'Input your current height in the designated field.',
      },
      {
        '@type': 'HowToStep',
        name: 'Enter Weight',
        text: 'Input your current weight in the designated field.',
      },
      {
        '@type': 'HowToStep',
        name: 'Calculate',
        text: 'Click the "Calculate BMI" button to see your result, including your BMI value and weight category.',
      },
    ],
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is a healthy BMI?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A BMI between 18.5 and 24.9 is considered healthy for most adults. However, this is a general guideline. For a more personalized assessment, use our <a href="/ideal-weight">Ideal Weight Calculator</a> to understand your optimal weight range.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why is BMI not always accurate for athletes?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'BMI cannot distinguish between fat and muscle. Athletes often have high muscle mass, which can result in a high BMI even with low body fat. For a more accurate measure of body composition, use the <a href="/body-fat">Body Fat Percentage Calculator</a>.',
        },
      },
      {
        '@type': 'Question',
        name: 'What does my BMI score mean?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'According to the WHO, a BMI under 18.5 is underweight, 18.5-24.9 is normal, 25-29.9 is overweight, and 30 or above is obese. These categories help assess potential health risks. To understand the calories your body needs, check the <a href="/bmr">BMR Calculator</a>.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I lower my BMI?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'To lower your BMI, you typically need to lose weight by creating a calorie deficit. Use our <a href="/calorie-needs">Daily Calorie Needs Calculator</a> to determine your maintenance calories and then create a sustainable plan for weight loss.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does a high BMI mean I am unhealthy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Not necessarily. A high BMI is a risk indicator, not a diagnosis. Factors like muscle mass and fat distribution matter. Use the <a href="/body-fat">Body Fat Percentage Calculator</a> and <a href="/waist-to-hip-ratio">Waist-to-Hip Ratio calculator</a> to get a more complete picture.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is the BMI calculation different for men and women?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The BMI formula is the same for adult men and women. However, body composition differs. Women naturally have a higher body fat percentage. Our <a href="/body-fat">Body Fat Percentage Calculator</a> considers gender for a more tailored result.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does age affect BMI?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The standard BMI calculation does not factor in age for adults. However, as people age, they tend to lose muscle and gain fat, which can change their health risk even if BMI stays the same. To see how your metabolism changes with age, use the <a href="/bmr">BMR Calculator</a>.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are the limitations of BMI?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'BMI doesn\'t account for body composition (muscle vs. fat), fat distribution, or ethnic differences in body-fat-to-BMI relationships. It\'s a screening tool, not a definitive health assessment. For a better view, use it with our <a href="/body-fat">Body Fat Percentage Calculator</a>.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I be "overweight" but still healthy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, it\'s possible, especially for individuals with high muscle mass. This is why it\'s crucial to look beyond BMI. Check your <a href="/body-fat">Body Fat Percentage</a> and <a href="/waist-to-height-ratio">Waist-to-Height Ratio</a> to better assess your health risks.',
        },
      },
      {
        '@type': 'Question',
        name: 'Where does the BMI formula come from?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The formula was developed by Adolphe Quetelet in the 19th century. While it\'s a long-standing metric, modern tools provide a more complete health picture. Start with BMI, then explore your <a href="/ideal-weight">Ideal Weight</a> and <a href="/calorie-needs">Daily Calorie Needs</a>.',
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
              <BreadcrumbPage>BMI Calculator</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Main Calculator Card */}
        <Card>
          <CardHeader>
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 text-primary p-3 rounded-lg">
                <Scale className="h-8 w-8" />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold">
                  BMI Calculator
                </h1>
                <p className="text-muted-foreground">
                  Calculate your Body Mass Index (BMI) based on your height and
                  weight. It's a quick way to gauge if your weight is healthy, but it's most powerful when used with other tools like the <Link href="/body-fat" className="text-primary hover:underline">Body Fat Calculator</Link>.
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <BmiCalculatorForm />
          </CardContent>
        </Card>

        {/* How to Use Section */}
        <Card>
          <CardHeader>
            <CardTitle>How to Use the BMI Calculator</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              Our BMI calculator is a straightforward tool designed for ease of use. Follow these simple steps to get your BMI score and understand where you stand.
            </p>
            <ol className="list-decimal list-inside space-y-2">
              <li><strong>Select Your Units:</strong> Choose between "Metric" (cm, kg) or "Imperial" (inches, pounds).</li>
              <li><strong>Enter Your Height:</strong> Type your height into the corresponding field.</li>
              <li><strong>Enter Your Weight:</strong> Input your current weight.</li>
              <li><strong>Calculate:</strong> Click the "Calculate BMI" button. Your BMI will be displayed, along with your weight category according to WHO standards.</li>
            </ol>
            <p>
              Once you have your BMI, you can use it as a starting point. For a deeper dive into your metabolic health, we recommend calculating your <Link href="/bmr" className="text-primary hover:underline">Basal Metabolic Rate (BMR)</Link> next.
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
                  <TableHead>Example 1 (Metric)</TableHead>
                  <TableHead>Example 2 (Imperial)</TableHead>
                  <TableHead>Example 3 (Athlete)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Height</TableCell>
                  <TableCell>175 cm</TableCell>
                  <TableCell>5 ft 10 in (70")</TableCell>
                  <TableCell>182 cm</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Weight</TableCell>
                  <TableCell>75 kg</TableCell>
                  <TableCell>165 lbs</TableCell>
                  <TableCell>95 kg</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-bold">Calculated BMI</TableCell>
                  <TableCell className="font-bold">24.5</TableCell>
                  <TableCell className="font-bold">23.7</TableCell>
                  <TableCell className="font-bold">28.7</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Category</TableCell>
                  <TableCell>Normal Weight</TableCell>
                  <TableCell>Normal Weight</TableCell>
                  <TableCell>Overweight</TableCell>
                </TableRow>
                 <TableRow>
                  <TableCell>Interpretation</TableCell>
                  <TableCell>Falls within the healthy range.</TableCell>
                  <TableCell>Falls within the healthy range.</TableCell>
                  <TableCell>High BMI due to muscle. A <Link href="/body-fat" className="text-primary hover:underline">Body Fat Calculator</Link> is recommended.</TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <p className="text-sm text-muted-foreground mt-4">
              The first two examples fall within the "Normal Weight" range. The third example shows why athletes should use BMI with caution. To understand the energy this body requires, check the{' '}
              <Link href="/bmr" className="text-primary hover:underline">
                BMR Calculator
              </Link>
              .
            </p>
          </CardContent>
        </Card>

        {/* Educational Content */}
        <Card>
          <CardHeader>
            <CardTitle>Understanding BMI: More Than Just a Number</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <h3 className="font-semibold text-lg text-foreground">What is Body Mass Index?</h3>
            <p>
              Body Mass Index (BMI) is a measure that uses your height and weight to work out if your weight is healthy. It was created in the 19th century by the Belgian mathematician Adolphe Quetelet and has become a standard health screening tool used by healthcare professionals worldwide. The formula is simple: BMI = weight (kg) / [height (m)]². For imperial units, it's BMI = (weight (lbs) / [height (in)]²) * 703.
            </p>
            <p>
              While BMI is a useful indicator for the general population, it has significant limitations. Its main drawback is that it doesn't distinguish between fat and muscle mass. Since muscle is denser than fat, a very muscular person, like an athlete, could be classified as "overweight" or "obese" despite having very low body fat. This is why it's crucial to see BMI as a starting point, not a final diagnosis. For a more comprehensive analysis, you should combine it with other tools like the <Link href="/body-fat" className="text-primary hover:underline">Body Fat Percentage Calculator</Link> and the <Link href="/ideal-weight" className="text-primary hover:underline">Ideal Weight Calculator</Link>.
            </p>

            <h3 className="font-semibold text-lg text-foreground">The Role of BMI in Health Assessment</h3>
            <p>
              BMI is primarily a risk indicator. A high BMI is associated with an increased risk of several chronic conditions, including type 2 diabetes, heart disease, and high blood pressure. The World Health Organization (WHO) uses the following categories for adults:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Below 18.5:</strong> Underweight</li>
              <li><strong>18.5 – 24.9:</strong> Normal weight</li>
              <li><strong>25.0 – 29.9:</strong> Overweight</li>
              <li><strong>30.0 and Above:</strong> Obese</li>
            </ul>
            <p>
              It’s important to remember these are population-level categories. An individual's health depends on many factors, including genetics, lifestyle, and diet. If your BMI falls into the overweight or obese category, it’s a signal to investigate further. A good next step is to measure your waist circumference, which can be assessed with the <Link href="/waist-to-hip-ratio" className="text-primary hover:underline">Waist-to-Hip Ratio Calculator</Link>. Central obesity (excess fat around the abdomen) is a stronger predictor of health risk than BMI alone.
            </p>

            <h3 className="font-semibold text-lg text-foreground">Beyond BMI: A Holistic Approach to Body Composition</h3>
            <p>
              To truly understand your health, you need to look at your body composition—the proportion of fat, muscle, bone, and water in your body. While BMI provides a two-dimensional view (height and weight), a holistic approach is three-dimensional.
            </p>
            <p>
             Start by calculating your <Link href="/bmr" className="text-primary hover:underline">Basal Metabolic Rate (BMR)</Link>, which is the number of calories your body burns at rest. This is the foundation of your energy expenditure. From there, you can use the <Link href="/tdee" className="text-primary hover:underline">TDEE Calculator</Link> to estimate your Total Daily Energy Expenditure (TDEE) based on your activity level. Understanding your TDEE is the key to managing your weight. To lose weight, you need a <Link href="/calorie-deficit" className="text-primary hover:underline">calorie deficit</Link>; to gain muscle, you need a <Link href="/calorie-surplus" className="text-primary hover:underline">calorie surplus</Link>.
            </p>
             <p>By combining insights from the BMI, Body Fat, BMR, and Calorie Needs calculators, you create a powerful, personalized health dashboard that empowers you to make informed decisions about your diet and exercise.
            </p>
          </CardContent>
        </Card>
        
        {/* Common Mistakes */}
        <Card>
          <CardHeader>
            <CardTitle>Common Mistakes When Using a BMI Calculator</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>Ignoring Body Composition:</strong> Relying solely on BMI without considering muscle mass. An athlete may be "overweight" but very healthy. Use the <Link href="/body-fat" className="text-primary hover:underline">Body Fat Percentage Calculator</Link> for a better picture.</li>
              <li><strong>Unit Conversion Errors:</strong> Mixing up pounds with kilograms or inches with centimeters. Our calculator toggles units automatically to prevent this.</li>
              <li><strong>Taking it as a Diagnosis:</strong> BMI is a screening tool, not a medical diagnosis. Consult a healthcare professional for personalized advice.</li>
              <li><strong>Not Re-calculating:</strong> Your BMI changes as your weight changes. Re-calculate it periodically to track your progress towards your <Link href="/ideal-weight" className="text-primary hover:underline">Ideal Weight</Link>.</li>
            </ul>
          </CardContent>
        </Card>

        {/* Pro Tips */}
        <Card>
          <CardHeader>
            <CardTitle>Pro Tips & Quick Hacks</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>Combine with Waist Measurement:</strong> A high BMI and a large waist circumference significantly increase health risk. Use our <Link href="/waist-to-hip-ratio" className="text-primary hover:underline">Waist-to-Hip Ratio</Link> tool to check.</li>
              <li><strong>Context is Key:</strong> Use your BMI result to guide your next step. If it's high, focus on creating a sustainable calorie deficit with the help of our <Link href="/calorie-needs" className="text-primary hover:underline">Daily Calorie Needs Calculator</Link>.</li>
              <li><strong>Track Over Time:</strong> Don't obsess over daily fluctuations. Measure your BMI monthly to see long-term trends.</li>
              <li><strong>Look Beyond the Scale:</strong> Pay attention to how you feel, your energy levels, and how your clothes fit. These are often better indicators of progress than BMI alone.</li>
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
                <AccordionTrigger>What is a healthy BMI?</AccordionTrigger>
                <AccordionContent>A BMI between 18.5 and 24.9 is considered healthy for most adults. However, this is a general guideline. For a more personalized assessment, use our <Link href="/ideal-weight" className="text-primary hover:underline">Ideal Weight Calculator</Link> to understand your optimal weight range.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Why is BMI not always accurate for athletes?</AccordionTrigger>
                <AccordionContent>BMI cannot distinguish between fat and muscle. Athletes often have high muscle mass, which can result in a high BMI even with low body fat. For a more accurate measure of body composition, use the <Link href="/body-fat" className="text-primary hover:underline">Body Fat Percentage Calculator</Link>.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>What does my BMI score mean?</AccordionTrigger>
                <AccordionContent>According to the WHO, a BMI under 18.5 is underweight, 18.5-24.9 is normal, 25-29.9 is overweight, and 30 or above is obese. These categories help assess potential health risks. To understand the calories your body needs, check the <Link href="/bmr" className="text-primary hover:underline">BMR Calculator</Link>.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>How do I lower my BMI?</AccordionTrigger>
                <AccordionContent>To lower your BMI, you typically need to lose weight by creating a calorie deficit. Use our <Link href="/calorie-needs" className="text-primary hover:underline">Daily Calorie Needs Calculator</Link> to determine your maintenance calories and then create a sustainable plan for weight loss.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Does a high BMI mean I am unhealthy?</AccordionTrigger>
                <AccordionContent>Not necessarily. A high BMI is a risk indicator, not a diagnosis. Factors like muscle mass and fat distribution matter. Use the <Link href="/body-fat" className="text-primary hover:underline">Body Fat Percentage Calculator</Link> and <Link href="/waist-to-hip-ratio" className="text-primary hover:underline">Waist-to-Hip Ratio calculator</Link> to get a more complete picture.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                 <AccordionTrigger>Is the BMI calculation different for men and women?</AccordionTrigger>
                 <AccordionContent>The BMI formula is the same for adult men and women. However, body composition differs. Women naturally have a higher body fat percentage. Our <Link href="/body-fat" className="text-primary hover:underline">Body Fat Percentage Calculator</Link> considers gender for a more tailored result.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7">
                 <AccordionTrigger>How does age affect BMI?</AccordionTrigger>
                 <AccordionContent>The standard BMI calculation does not factor in age for adults. However, as people age, they tend to lose muscle and gain fat, which can change their health risk even if BMI stays the same. To see how your metabolism changes with age, use the <Link href="/bmr" className="text-primary hover:underline">BMR Calculator</Link>.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-8">
                 <AccordionTrigger>What are the limitations of BMI?</AccordionTrigger>
                 <AccordionContent>BMI doesn't account for body composition (muscle vs. fat), fat distribution, or ethnic differences in body-fat-to-BMI relationships. It's a screening tool, not a definitive health assessment. For a better view, use it with our <Link href="/body-fat" className="text-primary hover:underline">Body Fat Percentage Calculator</Link>.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-9">
                 <AccordionTrigger>Can I be "overweight" but still healthy?</AccordionTrigger>
                 <AccordionContent>Yes, it's possible, especially for individuals with high muscle mass. This is why it's crucial to look beyond BMI. Check your <Link href="/body-fat" className="text-primary hover:underline">Body Fat Percentage</Link> and <Link href="/waist-to-height-ratio" className="text-primary hover:underline">Waist-to-Height Ratio</Link> to better assess your health risks.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-10">
                 <AccordionTrigger>Where does the BMI formula come from?</AccordionTrigger>
                 <AccordionContent>The formula was developed by Adolphe Quetelet in the 19th century. While it's a long-standing metric, modern tools provide a more complete health picture. Start with BMI, then explore your <Link href="/ideal-weight" className="text-primary hover:underline">Ideal Weight</Link> and <Link href="/calorie-needs" className="text-primary hover:underline">Daily Calorie Needs</Link>.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        {/* Real-Life Applications */}
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
                  <TableCell>Get a quick snapshot of weight status and health risk.</TableCell>
                  <TableCell><Link href="/ideal-weight" className="text-primary hover:underline">Ideal Weight Calculator</Link></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Fitness Coaches</TableCell>
                  <TableCell>Benchmark a new client's starting point before creating a fitness plan.</TableCell>
                  <TableCell><Link href="/body-fat" className="text-primary hover:underline">Body Fat % Calculator</Link></TableCell>
                </TableRow>
                 <TableRow>
                  <TableCell>Nutritionists</TableCell>
                  <TableCell>Assess overall weight category to inform dietary recommendations.</TableCell>
                  <TableCell><Link href="/calorie-needs" className="text-primary hover:underline">Daily Calorie Needs</Link></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Medical Professionals</TableCell>
                  <TableCell>Screen for potential weight-related health issues like obesity.</TableCell>
                  <TableCell><Link href="/waist-to-hip-ratio" className="text-primary hover:underline">Waist-to-Hip Ratio</Link></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Related Calculators */}
        <Card>
          <CardHeader>
            <CardTitle>Continue Your Analysis</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/body-fat"
              className="p-4 border rounded-lg hover:bg-muted"
            >
              <h3 className="font-semibold">Body Fat Percentage Calculator</h3>
              <p className="text-sm text-muted-foreground">
                Go beyond BMI and estimate your body composition (fat vs. lean mass).
              </p>
            </Link>
            <Link
              href="/ideal-weight"
              className="p-4 border rounded-lg hover:bg-muted"
            >
              <h3 className="font-semibold">Ideal Weight Calculator</h3>
              <p className="text-sm text-muted-foreground">
                Find your healthy weight range based on your height and gender.
              </p>
            </Link>
            <Link
              href="/bmr"
              className="p-4 border rounded-lg hover:bg-muted"
            >
              <h3 className="font-semibold">BMR Calculator</h3>
              <p className="text-sm text-muted-foreground">
                Calculate the calories your body needs just to function at rest.
              </p>
            </Link>
            <Link
              href="/tdee"
              className="p-4 border rounded-lg hover:bg-muted"
            >
              <h3 className="font-semibold">TDEE Calculator</h3>
              <p className="text-sm text-muted-foreground">
                Determine your total daily calorie needs to maintain, lose, or gain weight.
              </p>
            </Link>
          </CardContent>
        </Card>
      </div>
    </>
  );
};
