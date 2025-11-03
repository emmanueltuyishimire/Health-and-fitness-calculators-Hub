
import { Percent } from 'lucide-react';
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
import { BodyFatCalculatorForm } from '@/components/body-fat-calculator-form';

export const metadata: Metadata = {
    title: 'Body Fat Percentage Calculator – Estimate Body Composition',
    description: 'Estimate your body fat percentage with our free, accurate calculator using the U.S. Navy method. Understand your body composition for better health, fitness, and weight management.',
    openGraph: {
        title: 'Body Fat Percentage Calculator – Estimate Body Composition',
        description: 'Estimate your body fat percentage with our free, accurate calculator using the U.S. Navy method. Understand your body composition for better health, fitness, and weight management.',
        type: 'website',
    },
};


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
          text: 'Lowering body fat requires a combination of a calorie deficit and exercise, particularly strength training to preserve muscle mass. Use the <a href="/tdee">TDEE Calculator</a> to find your maintenance calories and create a deficit, and consider using the <a href="/bmr">BMR Calculator</a> to understand your baseline metabolic rate.',
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
        name: 'Does my BMR decrease as I lose body fat?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, as you lose weight (both fat and sometimes muscle), your <a href="/bmr">Basal Metabolic Rate (BMR)</a> will decrease because your body requires fewer calories to maintain a smaller size. It is important to recalculate your BMR periodically during your weight loss journey.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which is better, the BMI or Body Fat Percentage?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Body Fat Percentage is a more accurate indicator of health than <a href="/bmi">BMI</a> because it distinguishes between fat and muscle. However, BMI is a simpler, more accessible screening tool. Using both provides a more comprehensive view.',
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
              <BreadcrumbPage>Body Fat Percentage Calculator</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

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
                    Estimate your body fat percentage using the U.S. Navy method to understand your body composition. This metric is crucial for anyone serious about fitness, from weight-loss seekers to athletes. Unlike the <Link href="/bmi" className="text-primary hover:underline">BMI Calculator</Link>, which can be misleading, body fat percentage provides a clearer picture of your health.
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <BodyFatCalculatorForm />
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>How to Use the Body Fat Calculator</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              This calculator uses the U.S. Navy method, which requires gender and a few simple body measurements. Follow these steps for an accurate estimation. Before you begin, ensure you have a flexible measuring tape. For the most consistent results, take measurements at the same time of day, preferably in the morning.
            </p>
            <ol className="list-decimal list-inside space-y-2">
              <li><strong>Select Your Gender:</strong> The formula is different for men and women, so this is a critical first step.</li>
              <li><strong>Choose Units:</strong> Select "Metric" (cm) or "Imperial" (inches) to match your measuring tape.</li>
              <li><strong>Enter Height:</strong> Stand straight without shoes and measure from head to toe.</li>
              <li><strong>Measure Waist:</strong> For men, measure horizontally at the level of the navel. For women, measure at the narrowest point of your torso.</li>
              <li><strong>Measure Neck:</strong> Measure the circumference of your neck just below the larynx (Adam's apple).</li>
              <li><strong>Measure Hip (Females Only):</strong> Measure the widest part of your hips and buttocks.</li>
              <li><strong>Calculate:</strong> Click the button to see your estimated body fat percentage. After getting your result, you can use the <Link href="/ideal-weight" className="text-primary hover:underline">Ideal Weight Calculator</Link> to see how you compare.</li>
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
                  <TableHead>Example 3 (Athlete, Male)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Gender</TableCell>
                  <TableCell>Female</TableCell>
                  <TableCell>Male</TableCell>
                  <TableCell>Male</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Height</TableCell>
                  <TableCell>165 cm</TableCell>
                  <TableCell>72 in (6 ft)</TableCell>
                  <TableCell>180 cm</TableCell>
                </TableRow>
                 <TableRow>
                  <TableCell>Waist</TableCell>
                  <TableCell>70 cm</TableCell>
                  <TableCell>36 in</TableCell>
                  <TableCell>80 cm</TableCell>
                </TableRow>
                 <TableRow>
                  <TableCell>Neck</TableCell>
                  <TableCell>32 cm</TableCell>
                  <TableCell>15 in</TableCell>
                  <TableCell>40 cm</TableCell>
                </TableRow>
                 <TableRow>
                  <TableCell>Hip</TableCell>
                  <TableCell>98 cm</TableCell>
                  <TableCell>N/A</TableCell>
                  <TableCell>N/A</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-bold">Est. Body Fat %</TableCell>
                  <TableCell className="font-bold">25.3%</TableCell>
                  <TableCell className="font-bold">19.5%</TableCell>
                  <TableCell className="font-bold">12.1%</TableCell>
                </TableRow>
                 <TableRow>
                  <TableCell>Category</TableCell>
                  <TableCell>Acceptable/Fitness</TableCell>
                  <TableCell>Acceptable</TableCell>
                  <TableCell>Athlete</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Next Step</TableCell>
                    <TableCell>Calculate <Link href="/tdee" className="text-primary hover:underline">TDEE</Link> to maintain or improve.</TableCell>
                    <TableCell>Use the <Link href="/bmr" className="text-primary hover:underline">BMR Calculator</Link> to understand resting energy use.</TableCell>
                    <TableCell>Compare with the <Link href="/bmi" className="text-primary hover:underline">BMI Calculator</Link> to see why BFP is superior for athletes.</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Understanding Body Fat: A Deeper Dive</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <h3 className="font-semibold text-lg text-foreground">What is Body Fat Percentage?</h3>
            <p>Body fat percentage (BFP) is a measure of body composition that tells you what percentage of your total weight is fat. It's the most accurate way to assess your body composition without clinical equipment. Unlike the <Link href="/bmi" className="text-primary hover:underline">BMI Calculator</Link>, which only considers height and weight, BFP distinguishes between fat mass and <Link href="/lean-body-mass" className="text-primary hover:underline">lean body mass</Link> (muscles, bones, organs, and water).</p>
            <p>This distinction is crucial. An athlete and a sedentary individual could have the same height and weight, and therefore the same BMI, but vastly different body compositions. The athlete's weight is mostly lean muscle, while the other person's is more fat. BFP reveals this difference, making it a superior metric for assessing health and fitness.</p>

            <h3 className="font-semibold text-lg text-foreground">The U.S. Navy Method Explained</h3>
            <p>Our calculator uses the "U.S. Navy Method," developed by the Naval Health Research Center. It relies on circumference measurements because fat tends to be stored in predictable ways around the body. While not as precise as a DEXA scan, it's remarkably accurate for a home-based method, often within 1-3% of clinical results. The formulas are:</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
                <li><strong>For Men:</strong> BFP = 86.010 × log10(waist - neck) - 70.041 × log10(height) + 36.76</li>
                <li><strong>For Women:</strong> BFP = 163.205 × log10(waist + hip - neck) - 97.684 × log10(height) - 78.387</li>
            </ul>
             <p>All measurements are in inches for the formula. Our calculator handles the metric-to-imperial conversion for you.</p>

             <h3 className="font-semibold text-lg text-foreground">Why Body Fat Percentage Matters More Than Weight</h3>
             <p>Your scale weight can be deceptive. It fluctuates daily due to water retention, food intake, and other factors. More importantly, it doesn’t tell you the quality of that weight. Losing 5 lbs could mean you lost fat, water, or precious muscle. Gaining 5 lbs could be fat or hard-earned muscle.</p>
             <p>Tracking your BFP helps you understand the real changes in your body. A decreasing BFP, even if weight is stable, means you're likely gaining muscle and losing fat—a process called body recomposition. This is the ultimate goal for many fitness enthusiasts. Once you know your BFP, you can calculate your <Link href="/bmr" className="text-primary hover:underline">Basal Metabolic Rate (BMR)</Link>, which is the foundation of your metabolism. From there, the <Link href="/tdee" className="text-primary hover:underline">TDEE Calculator</Link> will help you create a precise nutrition plan.</p>
            
            <h3 className="font-semibold text-lg text-foreground">Healthy Body Fat Ranges</h3>
            <p>
              "Healthy" body fat ranges vary by age and gender. Women naturally require more fat than men for hormonal and reproductive health. Here are the generally accepted ranges according to the American Council on Exercise (ACE):
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
             <p className="text-sm mt-4 text-muted-foreground">
              Falling into the "Obese" category increases the risk of various health issues. To understand your ideal weight based on these ranges, visit the <Link href="/ideal-weight" className="text-primary hover:underline">Ideal Weight Calculator</Link>.
            </p>
          </CardContent>
        </Card>

        <Card>
            <CardHeader><CardTitle>Common Mistakes</CardTitle></CardHeader>
            <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li><strong>Inconsistent Measuring:</strong> Measuring at different times of day or different spots on your waist can skew results. Measure first thing in the morning for consistency.</li>
                    <li><strong>Pulling the Tape Too Tight:</strong> The tape should be snug but not compress the skin.</li>
                    <li><strong>Forgetting the Hip Measurement:</strong> This is a required field for females and crucial for accuracy.</li>
                    <li><strong>Using This as a Daily Metric:</strong> Body fat changes slowly. Measure every 2-4 weeks, not daily, to track meaningful progress. Daily fluctuations are mostly water.</li>
                </ul>
            </CardContent>
        </Card>
        
        <Card>
            <CardHeader><CardTitle>Pro Tips & Quick Hacks</CardTitle></CardHeader>
            <CardContent>
                 <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li><strong>Combine with BMI:</strong> While BFP is superior, using it with the <Link href="/bmi" className="text-primary hover:underline">BMI Calculator</Link> gives a more complete story, especially for clinical settings.</li>
                    <li><strong>Track Progress Photos:</strong> Take monthly photos. Sometimes the visual changes are more motivating than the numbers.</li>
                    <li><strong>Don't Aim for "Essential Fat" Levels:</strong> Unless you are a competitive bodybuilder, dipping into essential fat levels is unhealthy and unsustainable. Aim for the "Fitness" or "Acceptable" ranges.</li>
                    <li><strong>Losing Fat is a Marathon:</strong> Sustainable fat loss is about 1% of body fat per month. Use the <Link href="/tdee" className="text-primary hover:underline">TDEE Calculator</Link> to aim for a small, consistent deficit of 300-500 calories.</li>
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
                <AccordionTrigger>What is a healthy body fat percentage?</AccordionTrigger>
                <AccordionContent>A healthy range is typically 14-24% for men and 21-31% for women. To find a healthy weight for your height, use the <Link href="/ideal-weight" className="text-primary hover:underline">Ideal Weight Calculator</Link>.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Why is this better than the BMI calculator?</AccordionTrigger>
                <AccordionContent>Body Fat Percentage separates fat from muscle, providing a truer picture of health. The <Link href="/bmi" className="text-primary hover:underline">BMI Calculator</Link> can misclassify muscular individuals as overweight.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>How do I lower my body fat percentage?</AccordionTrigger>
                <AccordionContent>To lower body fat, you need a sustained calorie deficit and resistance training. Determine your needs with our <Link href="/tdee" className="text-primary hover:underline">TDEE Calculator</Link>.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>How accurate is this calculator?</AccordionTrigger>
                <AccordionContent>The U.S. Navy method is considered accurate to within 1-3% for the general population. It is one of the most reliable methods that doesn't require clinical equipment.</AccordionContent>
              </AccordionItem>
               <AccordionItem value="item-5">
                <AccordionTrigger>How often should I check my body fat?</AccordionTrigger>
                <AccordionContent>Measure every 2 to 4 weeks. Daily changes are mostly water weight and not indicative of real fat loss. Consistency in measurement time and conditions is key.</AccordionContent>
              </AccordionItem>
               <AccordionItem value="item-6">
                <AccordionTrigger>Does my metabolism slow down when I lose fat?</AccordionTrigger>
                <AccordionContent>Yes. As your body gets smaller, it requires less energy to function. You should periodically recalculate your resting energy needs using the <Link href="/bmr" className="text-primary hover:underline">BMR Calculator</Link>.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7">
                <AccordionTrigger>What's the difference between this and a smart scale?</AccordionTrigger>
                <AccordionContent>Smart scales use Bioelectrical Impedance Analysis (BIA), which can be unreliable and heavily influenced by hydration levels. The circumference method used here is often more consistent if measurements are taken correctly.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-8">
                <AccordionTrigger>Can I be skinny and have a high body fat percentage?</AccordionTrigger>
                <AccordionContent>Yes, this is known as "normal weight obesity" or "skinny fat." It means you have low muscle mass and high fat mass, despite having a "normal" <Link href="/bmi" className="text-primary hover:underline">BMI</Link>. This still carries health risks.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-9">
                <AccordionTrigger>Where is the best place to measure my waist?</AccordionTrigger>
                <AccordionContent>For men, measure at the navel. For women, measure at the narrowest part of the torso. For consistent tracking, always measure at the same spot.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-10">
                <AccordionTrigger>Is it possible to lose fat and gain muscle at the same time?</AccordionTrigger>
                <AccordionContent>Yes, this is called body recomposition. It is most common in beginners to strength training or those returning after a break. It requires a high protein intake and a calorie intake close to maintenance, which you can estimate with the <Link href="/tdee" className="text-primary hover:underline">TDEE Calculator</Link>.</AccordionContent>
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
                            <TableCell>Track true body composition changes, not just weight.</TableCell>
                            <TableCell><Link href="/tdee" className="text-primary hover:underline">TDEE Calculator</Link></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Fitness Coaches</TableCell>
                            <TableCell>Set realistic fat loss goals for clients.</TableCell>
                             <TableCell><Link href="/weight-loss-goal" className="text-primary hover:underline">Weight Loss Goal</Link></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Nutritionists</TableCell>
                            <TableCell>Assess if a client's weight is healthy despite a high BMI.</TableCell>
                            <TableCell><Link href="/macronutrient-ratio" className="text-primary hover:underline">Macronutrient Ratio</Link></TableCell>
                        </TableRow>
                         <TableRow>
                            <TableCell>Athletes</TableCell>
                            <TableCell>Monitor body composition to optimize for performance.</TableCell>
                            <TableCell><Link href="/ffmi" className="text-primary hover:underline">FFMI Calculator</Link></TableCell>
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
            <Link href="/bmi" className="p-4 border rounded-lg hover:bg-muted">
              <h3 className="font-semibold">BMI Calculator</h3>
              <p className="text-sm text-muted-foreground">Get a quick overview of your weight status, then compare it to your body fat %.</p>
            </Link>
            <Link href="/ideal-weight" className="p-4 border rounded-lg hover:bg-muted">
              <h3 className="font-semibold">Ideal Weight Calculator</h3>
              <p className="text-sm text-muted-foreground">Determine a healthy weight range for your height based on historical formulas.</p>
            </Link>
            <Link href="/bmr" className="p-4 border rounded-lg hover:bg-muted">
              <h3 className="font-semibold">BMR Calculator</h3>
              <p className="text-sm text-muted-foreground">Find out your baseline calorie burn, the foundation of your metabolism.</p>
            </Link>
            <Link href="/tdee" className="p-4 border rounded-lg hover:bg-muted">
              <h3 className="font-semibold">TDEE Calculator</h3>
              <p className="text-sm text-muted-foreground">Turn your BMR into an actionable daily calorie target for your goals.</p>
            </Link>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
