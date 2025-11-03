
import type { Metadata } from 'next';
import Link from 'next/link';
import { GitCommitHorizontal } from 'lucide-react';
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
import { WaistToHipRatioCalculatorForm } from '@/components/waist-to-hip-ratio-calculator-form';

export const metadata: Metadata = {
  title: 'Waist-to-Hip Ratio (WHR) Calculator – Assess Body Shape & Health Risk',
  description:
    'Calculate your Waist-to-Hip Ratio (WHR) to understand your body shape and assess health risks associated with fat distribution. Learn why WHR is a key indicator of metabolic health.',
  openGraph: {
    title: 'Waist-to-Hip Ratio (WHR) Calculator – Assess Body Shape & Health Risk',
    description:
      'Calculate your Waist-to-Hip Ratio (WHR) to understand your body shape and assess health risks associated with fat distribution. Learn why WHR is a key indicator of metabolic health.',
    type: 'website',
  },
};

export default function WaistToHipRatioPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Waist-to-Hip Ratio (WHR) Calculator',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
    },
    description:
      'A free web-based calculator to determine Waist-to-Hip Ratio (WHR) for assessing body fat distribution and associated health risks.',
  };

  const howToJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Calculate Your Waist-to-Hip Ratio',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Select Gender and Units',
        text: 'Choose your gender and preferred unit system (Metric or Imperial).',
      },
      {
        '@type': 'HowToStep',
        name: 'Enter Waist and Hip Circumference',
        text: 'Input your waist and hip measurements, ensuring they are in the same unit system.',
      },
      {
        '@type': 'HowToStep',
        name: 'Calculate WHR',
        text: 'Click the "Calculate WHR" button to see your ratio and corresponding health risk category.',
      },
    ],
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is a healthy Waist-to-Hip Ratio?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'According to the WHO, a healthy WHR is at or below 0.90 for men and 0.85 for women. Ratios above these values indicate a higher risk of metabolic complications. For another view on central obesity, see the <a href="/waist-to-height-ratio">Waist-to-Height Ratio Calculator</a>.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why does fat distribution matter for health?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Fat stored around the abdomen (an "apple" shape) is more metabolically active and linked to higher health risks than fat stored on the hips and thighs (a "pear" shape). While WHR indicates shape, the <a href="/body-fat">Body Fat Percentage Calculator</a> estimates total fat.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I measure my waist and hips accurately?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'For your waist, measure at the narrowest point between your ribs and hips. For your hips, measure at the widest part of your buttocks. Use a flexible tape and keep it level. These measurements are also used in our <a href="/body-fat">Body Fat Percentage Calculator</a>.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is WHR or BMI better for assessing health risk?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'WHR is often considered superior to the <a href="/bmi">BMI Calculator</a> for predicting cardiovascular disease risk because it accounts for fat distribution, which BMI completely ignores.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I improve my Waist-to-Hip Ratio?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Improving your WHR involves reducing abdominal fat through a calorie deficit and exercise. You cannot "spot reduce" fat, but overall fat loss will shrink your waist. Determine your calorie needs with the <a href="/daily-calorie-needs">Daily Calorie Needs Calculator</a>.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does WHR differ from Waist-to-Height Ratio (WHtR)?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'WHR assesses body shape and fat distribution. The <a href="/waist-to-height-ratio">Waist-to-Height Ratio Calculator</a> compares waist size to height to gauge central obesity and is considered a more direct risk marker by some researchers.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is it possible to be a healthy weight but have a high WHR?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. This is a state known as "normal weight obesity," where someone has an acceptable <a href="/ideal-weight">Ideal Weight</a> but carries a disproportionate amount of fat around their abdomen, posing a health risk.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does my WHR affect my metabolism?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A high WHR is linked to insulin resistance, which impairs your body\'s ability to handle glucose and can negatively affect metabolism. A higher <a href="/lean-body-mass">Lean Body Mass</a>, on the other hand, boosts your metabolism, which you can see in the <a href="/bmr">BMR Calculator</a>.',
        },
      },
      {
        '@type': 'Question',
        name: 'How often should I measure my WHR?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Measuring once a month provides a good indication of your progress. Fat distribution changes slowly, so daily or weekly measurements are unnecessary. Track your progress alongside your <a href="/ffmi">FFMI</a> to ensure you are maintaining muscle.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why are the WHR thresholds different for men and women?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Men and women naturally store fat differently due to hormonal variations. Women tend to store more fat in the hips and thighs, leading to a naturally lower WHR. These hormonal differences also influence the <a href="/bmr">Basal Metabolic Rate</a>.',
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
              <BreadcrumbPage>Waist-to-Hip Ratio Calculator</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <Card>
          <CardHeader>
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 text-primary p-3 rounded-lg">
                <GitCommitHorizontal className="h-8 w-8" />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold">
                  Waist-to-Hip Ratio (WHR) Calculator
                </h1>
                <p className="text-muted-foreground">
                  Your Waist-to-Hip Ratio (WHR) is a quick and effective measurement used to assess where you store body fat. This ratio helps identify your body shape and provides insight into your risk for certain health conditions. It's often used alongside the <Link href="/bmi" className="text-primary hover:underline">BMI Calculator</Link> and <Link href="/waist-to-height-ratio" className="text-primary hover:underline">Waist-to-Height Ratio</Link> for a more complete health assessment.
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <WaistToHipRatioCalculatorForm />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>How to Use the WHR Calculator</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              This calculator requires two simple measurements. For accurate results, use a flexible measuring tape and ensure it is kept level around your body.
            </p>
            <ol className="list-decimal list-inside space-y-2">
              <li><strong>Select Your Gender:</strong> Gender influences how WHR is interpreted.</li>
              <li><strong>Choose Units:</strong> Use "Metric" (cm) or "Imperial" (inches) for both measurements.</li>
              <li><strong>Enter Waist Circumference:</strong> Measure your waist at its narrowest point, typically just above your belly button.</li>
              <li><strong>Enter Hip Circumference:</strong> Measure your hips at the widest part of your buttocks.</li>
              <li><strong>Calculate:</strong> The calculator will provide your WHR and classify your health risk based on WHO standards. This data is a good complement to your <Link href="/body-fat" className="text-primary hover:underline">Body Fat Percentage</Link>.</li>
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
                  <TableCell>Waist</TableCell>
                  <TableCell>75 cm</TableCell>
                  <TableCell>95 cm</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Hip</TableCell>
                  <TableCell>100 cm</TableCell>
                  <TableCell>100 cm</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-bold">Calculated WHR</TableCell>
                  <TableCell className="font-bold">0.75</TableCell>
                  <TableCell className="font-bold">0.95</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Risk Category</TableCell>
                  <TableCell>Low Risk</TableCell>
                  <TableCell>High Risk</TableCell>
                </TableRow>
                 <TableRow>
                  <TableCell>Interpretation & Next Step</TableCell>
                  <TableCell>This individual has a "pear-shaped" fat distribution, which is associated with lower health risk. The next step could be to calculate <Link href="/ideal-weight" className="text-primary hover:underline">Ideal Weight</Link>.</TableCell>
                  <TableCell>This individual has an "apple-shaped" fat distribution, indicating a higher risk. To improve this, a focus on overall fat loss is needed, guided by the <Link href="/daily-calorie-needs" className="text-primary hover:underline">Daily Calorie Needs</Link> calculator.</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Understanding Waist-to-Hip Ratio: Body Shape & Health</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <h3 className="font-semibold text-lg text-foreground">What is Waist-to-Hip Ratio?</h3>
            <p>
              The Waist-to-Hip Ratio (WHR) is an anthropometric measurement that compares the circumference of your waist to that of your hips. It's a simple, yet powerful, indicator of body fat distribution. Where you store fat is a significant determinant of your health risk. WHR helps to quickly identify whether you have an "android" (apple-shaped) or "gynoid" (pear-shaped) body type.
            </p>
            <p>
              An apple shape, characterized by more fat storage around the abdomen (a higher WHR), is associated with a greater risk of various chronic diseases, including heart disease, type 2 diabetes, and hypertension. This is because abdominal fat, particularly visceral fat that surrounds the organs, is more metabolically active and inflammatory. In contrast, a pear shape, with more fat stored on the hips and thighs (a lower WHR), is considered to carry a lower health risk. While the <Link href="/bmi" className="text-primary hover:underline">BMI calculator</Link> gives a general sense of weight status, WHR provides critical information about body shape and fat placement.
            </p>

            <h3 className="font-semibold text-lg text-foreground">Health Risk Categories (WHO)</h3>
            <p>The World Health Organization (WHO) defines abdominal obesity based on the following WHR thresholds:</p>
            <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Gender</TableHead>
                    <TableHead>Low Risk</TableHead>
                    <TableHead>Moderate Risk</TableHead>
                    <TableHead>High Risk</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Male</TableCell>
                    <TableCell>0.95 or below</TableCell>
                    <TableCell>0.96 - 1.0</TableCell>
                    <TableCell>1.0+</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Female</TableCell>
                    <TableCell>0.80 or below</TableCell>
                    <TableCell>0.81 - 0.85</TableCell>
                    <TableCell>0.86+</TableCell>
                  </TableRow>
                </TableBody>
            </Table>
            <p className="mt-4">It's important to note that these are guidelines. A high WHR is a signal to investigate further with a healthcare professional and other health metrics. For a more direct measure of central obesity risk, the <Link href="/waist-to-height-ratio" className="text-primary hover:underline">Waist-to-Height Ratio Calculator</Link> is another excellent tool.</p>

            <h3 className="font-semibold text-lg text-foreground">How to Improve Your WHR</h3>
            <p>
              Improving your WHR means reducing your waist circumference relative to your hips, which is primarily achieved by losing overall body fat. You cannot "spot reduce" fat from your stomach, but a comprehensive fat loss plan will naturally reduce abdominal fat.
            </p>
             <ol className="list-decimal list-inside space-y-2">
                <li><strong>Calorie Deficit:</strong> This is the cornerstone of fat loss. Use the <Link href="/daily-calorie-needs" className="text-primary hover:underline">Daily Calorie Needs Calculator</Link> to determine your maintenance calories, and then consume slightly less than that amount.</li>
                <li><strong>Resistance Training:</strong> Building muscle increases your metabolic rate. As you build muscle, your <Link href="/lean-body-mass" className="text-primary hover:underline">Lean Body Mass</Link> increases, which boosts the calories you burn at rest (your <Link href="/bmr" className="text-primary hover:underline">BMR</Link>).</li>
                <li><strong>Cardiovascular Exercise:</strong> Regular cardio helps burn calories and improves heart health.</li>
                <li><strong>Balanced Diet:</strong> Focus on whole foods, adequate protein, and fiber to support fat loss and satiety.</li>
            </ol>
            <p>By tracking your WHR over time, you can get a good sense of whether your fitness plan is effectively changing your body composition for the better. This is often more motivating than just watching the scale.</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Common Mistakes</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>Incorrect Measurement Locations:</strong> Measuring the waist at the hips or hips at the waist is a common error. Always measure waist at the narrowest point and hips at the widest.</li>
              <li><strong>Pulling the Tape Too Tight:</strong> The tape should be snug against the skin but not indenting it.</li>
              <li><strong>Inconsistent Measurements:</strong> Measure at the same time of day (e.g., in the morning) under the same conditions for reliable tracking.</li>
              <li><strong>Focusing on WHR Alone:</strong> While useful, WHR is one part of the puzzle. Combine it with the <Link href="/body-fat" className="text-primary hover:underline">Body Fat Percentage Calculator</Link> for a complete picture.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Pro Tips & Quick Hacks</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>Track Monthly:</strong> Your body shape changes slowly. Monthly WHR measurements are enough to see a trend without obsessing over daily fluctuations.</li>
              <li><strong>Use WHR to Guide Your Goals:</strong> If your WHR is high, your primary goal should be fat loss, even if your <Link href="/bmi" className="text-primary hover:underline">BMI</Link> is in the normal range.</li>
              <li><strong>Combine with WHtR:</strong> Use WHR to understand your body shape and the <Link href="/waist-to-height-ratio" className="text-primary hover:underline">Waist-to-Height Ratio</Link> to assess your central fat risk. Together, they provide powerful insights.</li>
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
                <AccordionTrigger>What is a healthy Waist-to-Hip Ratio?</AccordionTrigger>
                <AccordionContent>A healthy WHR is at or below 0.90 for men and 0.85 for women. Higher ratios indicate increased risk. For another view on central fat, see the <Link href="/waist-to-height-ratio" className="text-primary hover:underline">Waist-to-Height Ratio Calculator</Link>.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Why does fat distribution matter for health?</AccordionTrigger>
                <AccordionContent>Fat around the abdomen ("apple" shape) is linked to higher health risks than fat on the hips and thighs ("pear" shape). While WHR indicates shape, the <Link href="/body-fat" className="text-primary hover:underline">Body Fat Percentage Calculator</Link> estimates total fat.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Is WHR or BMI better for assessing health risk?</AccordionTrigger>
                <AccordionContent>WHR is often considered superior to the <Link href="/bmi" className="text-primary hover:underline">BMI Calculator</Link> for predicting cardiovascular risk because it accounts for fat distribution, which BMI ignores.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Can I improve my Waist-to-Hip Ratio?</AccordionTrigger>
                <AccordionContent>Yes. Improving WHR involves reducing abdominal fat through a calorie deficit and exercise. You cannot "spot reduce" fat, but overall fat loss will shrink your waist. Find your calorie needs with the <Link href="/daily-calorie-needs" className="text-primary hover:underline">Daily Calorie Needs Calculator</Link>.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>How does WHR differ from Waist-to-Height Ratio (WHtR)?</AccordionTrigger>
                <AccordionContent>WHR assesses body shape. The <Link href="/waist-to-height-ratio" className="text-primary hover:underline">Waist-to-Height Ratio Calculator</Link> compares waist size to height to gauge central obesity and is considered a more direct risk marker by some.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger>Is it possible to be a healthy weight but have a high WHR?</AccordionTrigger>
                <AccordionContent>Yes. This is "normal weight obesity," where someone has an acceptable <Link href="/ideal-weight" className="text-primary hover:underline">Ideal Weight</Link> but carries excess fat around their abdomen, posing a health risk.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7">
                <AccordionTrigger>How does my WHR affect my metabolism?</AccordionTrigger>
                <AccordionContent>A high WHR is linked to insulin resistance, which can impair metabolism. Improving your <Link href="/lean-body-mass" className="text-primary hover:underline">Lean Body Mass</Link> can boost your metabolism, which you can see in the <Link href="/bmr" className="text-primary hover:underline">BMR Calculator</Link>.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-8">
                <AccordionTrigger>How often should I measure my WHR?</AccordionTrigger>
                <AccordionContent>Once a month is sufficient. Fat distribution changes slowly. Track it alongside your <Link href="/ffmi" className="text-primary hover:underline">FFMI</Link> to ensure you are maintaining muscle.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-9">
                <AccordionTrigger>Why are the WHR thresholds different for men and women?</AccordionTrigger>
                <AccordionContent>Men and women naturally store fat differently due to hormones. Women tend to store fat in the hips and thighs, leading to a lower WHR. These differences also influence the <Link href="/bmr" className="text-primary hover:underline">Basal Metabolic Rate</Link>.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-10">
                <AccordionTrigger>How do I measure my waist and hips accurately?</AccordionTrigger>
                <AccordionContent>For your waist, measure at the narrowest point. For your hips, measure at the widest part of your buttocks. Use a flexible tape and keep it level. These measurements are also used in our <Link href="/body-fat" className="text-primary hover:underline">Body Fat Percentage Calculator</Link>.</AccordionContent>
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
                  <TableCell>Medical Professionals</TableCell>
                  <TableCell>Screen patients for metabolic syndrome risk.</TableCell>
                  <TableCell><Link href="/waist-to-height-ratio" className="text-primary hover:underline">Waist-to-Height Ratio</Link></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>General Users</TableCell>
                  <TableCell>Understand body shape and associated health implications.</TableCell>
                  <TableCell><Link href="/daily-calorie-needs" className="text-primary hover:underline">Daily Calorie Needs</Link></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Fitness Coaches</TableCell>
                  <TableCell>Track changes in fat distribution as a client's body recompositions.</TableCell>
                  <TableCell><Link href="/body-fat" className="text-primary hover:underline">Body Fat % Calculator</Link></TableCell>
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
            <Link href="/waist-to-height-ratio" className="p-4 border rounded-lg hover:bg-muted">
              <h3 className="font-semibold">Waist-to-Height Ratio</h3>
              <p className="text-sm text-muted-foreground">
                Assess central obesity risk by comparing waist size to height.
              </p>
            </Link>
            <Link href="/body-fat" className="p-4 border rounded-lg hover:bg-muted">
              <h3 className="font-semibold">Body Fat Percentage Calculator</h3>
              <p className="text-sm text-muted-foreground">
                Estimate your total body fat for a complete composition picture.
              </p>
            </Link>
            <Link href="/bmi" className="p-4 border rounded-lg hover:bg-muted">
              <h3 className="font-semibold">BMI Calculator</h3>
              <p className="text-sm text-muted-foreground">
                Get a general weight status assessment to compare with your WHR.
              </p>
            </Link>
            <Link href="/daily-calorie-needs" className="p-4 border rounded-lg hover:bg-muted">
              <h3 className="font-semibold">Daily Calorie Needs Calculator</h3>
              <p className="text-sm text-muted-foreground">
                Create a diet plan to help improve your WHR.
              </p>
            </Link>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
