import type { Metadata } from 'next';
import Link from 'next/link';
import { Ruler } from 'lucide-react';
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
import { WaistToHeightRatioCalculatorForm } from '@/components/waist-to-height-ratio-calculator-form';

export const metadata: Metadata = {
  title: 'Waist-to-Height Ratio (WHtR) Calculator – Assess Your Health Risk',
  description:
    'Calculate your Waist-to-Height Ratio (WHtR) to assess central obesity and potential health risks. Learn why WHtR is a powerful alternative to BMI.',
  openGraph: {
    title: 'Waist-to-Height Ratio (WHtR) Calculator – Assess Your Health Risk',
    description:
      'Calculate your Waist-to-Height Ratio (WHtR) to assess central obesity and potential health risks. Learn why WHtR is a powerful alternative to BMI.',
    type: 'website',
  },
};

export default function WaistToHeightRatioPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Waist-to-Height Ratio (WHtR) Calculator',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
    },
    description:
      'A free web-based calculator to determine Waist-to-Height Ratio (WHtR) for health risk assessment.',
  };

  const howToJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Calculate Your Waist-to-Height Ratio',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Select Units',
        text: 'Choose between Metric (cm) or Imperial (in, lbs) units.',
      },
      {
        '@type': 'HowToStep',
        name: 'Enter Height and Waist Circumference',
        text: 'Input your current height and waist measurement, ensuring they are in the same unit system.',
      },
      {
        '@type': 'HowToStep',
        name: 'Calculate WHtR',
        text: 'Click the "Calculate WHtR" button to see your ratio and corresponding health category.',
      },
    ],
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is a good Waist-to-Height Ratio?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A good WHtR is generally considered to be below 0.5. A value of 0.5 or higher suggests increased risk of obesity-related cardiovascular diseases. The simple message is "keep your waist circumference to less than half your height." Compare this with other metrics using the <a href="/bmi">BMI Calculator</a>.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why is WHtR considered better than BMI?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'WHtR is often considered a better predictor of health risk because it specifically accounts for central (abdominal) fat, which is more metabolically dangerous than fat stored elsewhere. The <a href="/bmi">BMI Calculator</a> cannot distinguish between fat and muscle, nor where fat is stored.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I measure my waist circumference accurately?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Measure at the midpoint between your lowest rib and the top of your hip bone (iliac crest), roughly in line with your navel. Breathe out normally and don\'t pull the tape too tight. For more measurement-based tools, check the <a href="/body-fat">Body Fat Percentage Calculator</a>.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does age or gender affect WHtR thresholds?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'One of the main advantages of WHtR is that the core threshold of 0.5 is largely independent of age and gender, making it a simple and universal screening tool. While body composition changes, which you can track with the <a href="/lean-body-mass">Lean Body Mass Calculator</a>, the risk associated with central fat remains consistent.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I have a normal BMI but a high WHtR?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, this is a condition known as "normal weight obesity." You might have an acceptable weight for your height according to the <a href="/bmi">BMI Calculator</a>, but still carry an unhealthy amount of fat around your abdomen. This highlights the importance of using multiple metrics.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I lower my Waist-to-Height Ratio?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'To lower your WHtR, you need to reduce your waist circumference by losing abdominal fat. This is achieved through a combination of a calorie deficit and exercise. Use the <a href="/calorie-needs">Daily Calorie Needs Calculator</a> to determine a sustainable deficit.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is WHtR the same as Waist-to-Hip Ratio?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. WHtR compares your waist to your height, assessing overall health risk. The <a href="/waist-to-hip-ratio">Waist-to-Hip Ratio Calculator</a> compares waist to hip circumference, which is more indicative of body shape and fat distribution patterns (e.g., "apple" vs. "pear").',
        },
      },
      {
        '@type': 'Question',
        name: 'How does WHtR relate to my BMR?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A high WHtR indicates excess body fat, which is less metabolically active than muscle. Improving your WHtR by gaining muscle and losing fat can lead to a higher <a href="/bmr">Basal Metabolic Rate (BMR)</a> over time.',
        },
      },
      {
        '@type': 'Question',
        name: 'How often should I measure my WHtR?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Measuring once a month is sufficient to track meaningful progress. Daily fluctuations are normal and shouldn\'t cause concern. For a more detailed look at your body composition, use the <a href="/ffmi">FFMI Calculator</a> periodically.',
        },
      },
      {
        '@type': 'Question',
        name: 'What if my WHtR is very low?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A WHtR below 0.4 may indicate being underweight, which can also carry health risks. It might be useful to compare this with results from the <a href="/ideal-weight">Ideal Weight Calculator</a> to ensure you are within a healthy range.',
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
              <BreadcrumbPage>Waist-to-Height Ratio Calculator</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <Card>
          <CardHeader>
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 text-primary p-3 rounded-lg">
                <Ruler className="h-8 w-8" />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold">
                  Waist-to-Height Ratio (WHtR) Calculator
                </h1>
                <p className="text-muted-foreground">
                  The Waist-to-Height Ratio (WHtR) is a simple but powerful tool for assessing health risk. It measures your waist circumference relative to your height to screen for central obesity. Unlike the <Link href="/bmi" className="text-primary hover:underline">BMI Calculator</Link>, WHtR is a better predictor of cardiometabolic risk across different populations.
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <WaistToHeightRatioCalculatorForm />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>How to Use the WHtR Calculator</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              To find your Waist-to-Height Ratio, you only need two simple measurements. Ensure you use the same unit (either inches or centimeters) for both.
            </p>
            <ol className="list-decimal list-inside space-y-2">
              <li><strong>Select Your Units:</strong> Choose between "Metric" (cm) or "Imperial" (inches).</li>
              <li><strong>Enter Your Height:</strong> Input your current height.</li>
              <li><strong>Enter Your Waist Circumference:</strong> Measure your waist at the narrowest point, usually just above the navel. Do not pull the tape tight.</li>
              <li><strong>Calculate:</strong> Click the button to get your ratio and what it means for your health. This ratio provides context to the data from the <Link href="/body-fat" className="text-primary hover:underline">Body Fat Percentage Calculator</Link>.</li>
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
                  <TableHead>Example 1 (Metric)</TableHead>
                  <TableHead>Example 2 (Imperial)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Height</TableCell>
                  <TableCell>178 cm</TableCell>
                  <TableCell>68 in</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Waist</TableCell>
                  <TableCell>85 cm</TableCell>
                  <TableCell>36 in</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-bold">Calculated WHtR</TableCell>
                  <TableCell className="font-bold">0.48</TableCell>
                  <TableCell className="font-bold">0.53</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Category</TableCell>
                  <TableCell>Healthy</TableCell>
                  <TableCell>Increased Risk</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Interpretation & Next Step</TableCell>
                  <TableCell>This person has a healthy waist size for their height. To maintain this, they can calculate their maintenance calories with the <Link href="/calorie-needs" className="text-primary hover:underline">Daily Calorie Needs Calculator</Link>.</TableCell>
                  <TableCell>This person carries excess abdominal fat, increasing health risk. The next step would be to aim for fat loss by creating a sustainable calorie deficit, which can be planned using the <Link href="/calorie-needs" className="text-primary hover:underline">Calorie Needs</Link> tool.</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Understanding Waist-to-Height Ratio</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <h3 className="font-semibold text-lg text-foreground">Why WHtR is a Key Health Indicator</h3>
            <p>
              For decades, the <Link href="/bmi" className="text-primary hover:underline">Body Mass Index (BMI)</Link> has been the standard for assessing healthy weight. However, its major flaw is its inability to account for body composition. The Waist-to-Height Ratio (WHtR) has emerged as a superior, yet equally simple, alternative for predicting cardiometabolic risk. Its power lies in its focus on central (visceral) adiposity—the fat stored around your abdominal organs.
            </p>
            <p>
              Visceral fat is more hormonally active and inflammatory than subcutaneous fat (the fat under your skin). High levels of visceral fat are strongly linked to insulin resistance, type 2 diabetes, heart disease, and other metabolic complications. Because WHtR directly measures abdominal circumference relative to height, it provides a more accurate proxy for this dangerous central fat than BMI. The core message of WHtR is simple and actionable: <strong>"Keep your waist circumference to less than half your height."</strong>
            </p>

            <h3 className="font-semibold text-lg text-foreground">Interpreting Your WHtR Results</h3>
            <p>The beauty of WHtR lies in its simplicity. Unlike BMI, the primary thresholds are generally applicable to adults of all genders, ages, and ethnicities.</p>
             <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Waist-to-Height Ratio</TableHead>
                  <TableHead>Health Implication</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Less than 0.4</TableCell>
                  <TableCell>May be underweight</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>0.4 to 0.49</TableCell>
                  <TableCell>Healthy range</TableCell>
                </TableRow>
                 <TableRow>
                  <TableCell>0.5 to 0.59</TableCell>
                  <TableCell>Increased risk</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>0.6 or more</TableCell>
                  <TableCell>High risk</TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <p className="mt-4">
              If your WHtR is 0.5 or above, it's a strong signal to prioritize lifestyle changes aimed at reducing abdominal fat. This doesn't just mean doing sit-ups; it means focusing on overall fat loss through a proper diet, which starts with understanding your energy balance via the <Link href="/calorie-needs" className="text-primary hover:underline">Daily Calorie Needs Calculator</Link>, and a consistent exercise routine.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Common Mistakes</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>Incorrect Measurement Spot:</strong> Measuring too high or too low on the abdomen can skew results. Find the midway point between your bottom rib and hip bone.</li>
              <li><strong>Sucking In Your Stomach:</strong> Be sure to measure after a normal exhale without holding your stomach in.</li>
              <li><strong>Using Different Units:</strong> Always measure your waist and height in the same unit (either all cm or all inches). Our calculator requires this consistency.</li>
              <li><strong>Relying on It Alone:</strong> While powerful, WHtR is still just one metric. Use it with the <Link href="/body-fat" className="text-primary hover:underline">Body Fat Percentage Calculator</Link> for a complete picture.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Pro Tips & Quick Hacks</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>The String Test:</strong> A simple, visual way to check your WHtR. Cut a piece of string that is the same length as your height. Fold it in half. If the halved string doesn't fit comfortably around your waist, your WHtR is likely over 0.5.</li>
              <li><strong>Track Trends, Not Numbers:</strong> Don't panic over a single measurement. Track your WHtR monthly to see the trend. A downward trend is a sign of great progress.</li>
              <li><strong>Combine with <Link href="/waist-to-hip-ratio" className="text-primary hover:underline">Waist-to-Hip Ratio</Link>:</strong> Use WHtR to assess overall central obesity risk and the Waist-to-Hip Ratio to understand your body shape and fat distribution pattern.</li>
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
                <AccordionTrigger>What is a good Waist-to-Height Ratio?</AccordionTrigger>
                <AccordionContent>A good WHtR is generally considered to be below 0.5. A value of 0.5 or higher suggests increased risk of obesity-related cardiovascular diseases. The simple message is "keep your waist circumference to less than half your height." Compare this with other metrics using the <Link href="/bmi" className="text-primary hover:underline">BMI Calculator</Link>.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Why is WHtR considered better than BMI?</AccordionTrigger>
                <AccordionContent>WHtR is often considered a better predictor of health risk because it specifically accounts for central (abdominal) fat, which is more metabolically dangerous than fat stored elsewhere. The <Link href="/bmi" className="text-primary hover:underline">BMI Calculator</Link> cannot distinguish between fat and muscle, nor where fat is stored.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>How do I measure my waist circumference accurately?</AccordionTrigger>
                <AccordionContent>Measure at the midpoint between your lowest rib and the top of your hip bone (iliac crest), roughly in line with your navel. Breathe out normally and don't pull the tape too tight. For more measurement-based tools, check the <Link href="/body-fat" className="text-primary hover:underline">Body Fat Percentage Calculator</Link>.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Does age or gender affect WHtR thresholds?</AccordionTrigger>
                <AccordionContent>One of the main advantages of WHtR is that the core threshold of 0.5 is largely independent of age and gender, making it a simple and universal screening tool. While body composition changes, which you can track with the <Link href="/lean-body-mass" className="text-primary hover:underline">Lean Body Mass Calculator</Link>, the risk associated with central fat remains consistent.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Can I have a normal BMI but a high WHtR?</AccordionTrigger>
                <AccordionContent>Yes, this is a condition known as "normal weight obesity." You might have an acceptable weight for your height according to the <Link href="/bmi" className="text-primary hover:underline">BMI Calculator</Link>, but still carry an unhealthy amount of fat around your abdomen. This highlights the importance of using multiple metrics.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger>How do I lower my Waist-to-Height Ratio?</AccordionTrigger>
                <AccordionContent>To lower your WHtR, you need to reduce your waist circumference by losing abdominal fat. This is achieved through a combination of a calorie deficit and exercise. Use the <Link href="/calorie-needs" className="text-primary hover:underline">Daily Calorie Needs Calculator</Link> to determine a sustainable deficit.</AccordionContent>
              </AccordionItem>
               <AccordionItem value="item-7">
                <AccordionTrigger>Is WHtR the same as Waist-to-Hip Ratio?</AccordionTrigger>
                <AccordionContent>No. WHtR compares your waist to your height, assessing overall health risk. The <Link href="/waist-to-hip-ratio" className="text-primary hover:underline">Waist-to-Hip Ratio Calculator</Link> compares waist to hip circumference, which is more indicative of body shape and fat distribution patterns (e.g., "apple" vs. "pear").</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-8">
                <AccordionTrigger>How does WHtR relate to my BMR?</AccordionTrigger>
                <AccordionContent>A high WHtR indicates excess body fat, which is less metabolically active than muscle. Improving your WHtR by gaining muscle and losing fat can lead to a higher <Link href="/bmr" className="text-primary hover:underline">Basal Metabolic Rate (BMR)</Link> over time.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-9">
                <AccordionTrigger>How often should I measure my WHtR?</AccordionTrigger>
                <AccordionContent>Measuring once a month is sufficient to track meaningful progress. Daily fluctuations are normal and shouldn't cause concern. For a more detailed look at your body composition, use the <Link href="/ffmi" className="text-primary hover:underline">FFMI Calculator</Link> periodically.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-10">
                <AccordionTrigger>What if my WHtR is very low?</AccordionTrigger>
                <AccordionContent>A WHtR below 0.4 may indicate being underweight, which can also carry health risks. It might be useful to compare this with results from the <Link href="/ideal-weight" className="text-primary hover:underline">Ideal Weight Calculator</Link> to ensure you are within a healthy range.</AccordionContent>
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
                  <TableCell>Quickly screen patients for cardiometabolic risk.</TableCell>
                  <TableCell><Link href="/bmi" className="text-primary hover:underline">BMI Calculator</Link></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>General Users</TableCell>
                  <TableCell>Get a simple, clear indicator of abdominal fat and health risk.</TableCell>
                  <TableCell><Link href="/calorie-needs" className="text-primary hover:underline">Daily Calorie Needs</Link></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Fitness Coaches</TableCell>
                  <TableCell>Track client progress in reducing central obesity, which is a key health marker.</TableCell>
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
            <Link
              href="/bmi"
              className="p-4 border rounded-lg hover:bg-muted"
            >
              <h3 className="font-semibold">BMI Calculator</h3>
              <p className="text-sm text-muted-foreground">
                Compare your WHtR result with the traditional BMI metric.
              </p>
            </Link>
            <Link
              href="/body-fat"
              className="p-4 border rounded-lg hover:bg-muted"
            >
              <h3 className="font-semibold">Body Fat Percentage Calculator</h3>
              <p className="text-sm text-muted-foreground">
                Get a more detailed breakdown of your body composition.
              </p>
            </Link>
            <Link
              href="/waist-to-hip-ratio"
              className="p-4 border rounded-lg hover:bg-muted"
            >
              <h3 className="font-semibold">Waist-to-Hip Ratio Calculator</h3>
              <p className="text-sm text-muted-foreground">
                Assess body shape and fat distribution.
              </p>
            </Link>
             <Link
              href="/calorie-needs"
              className="p-4 border rounded-lg hover:bg-muted"
            >
              <h3 className="font-semibold">Daily Calorie Needs Calculator</h3>
              <p className="text-sm text-muted-foreground">
                Create a plan to reduce waist circumference by managing your calorie intake.
              </p>
            </Link>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
