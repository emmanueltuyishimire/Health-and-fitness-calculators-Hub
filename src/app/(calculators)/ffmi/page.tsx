
import type { Metadata } from 'next';
import Link from 'next/link';
import { PersonStanding } from 'lucide-react';
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
import { FfmiCalculatorForm } from '@/components/ffmi-calculator-form';

export const metadata: Metadata = {
  title: 'FFMI Calculator – Assess Your Muscularity & Genetic Potential',
  description:
    'Calculate your Fat-Free Mass Index (FFMI) to gauge your level of muscularity, track muscle growth, and understand your genetic potential for building muscle.',
  openGraph: {
    title: 'FFMI Calculator – Assess Your Muscularity & Genetic Potential',
    description:
      'Calculate your Fat-Free Mass Index (FFMI) to gauge your level of muscularity, track muscle growth, and understand your genetic potential for building muscle.',
    type: 'website',
  },
};

export default function FfmiPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'FFMI Calculator',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
    },
    description:
      'A free web-based calculator to determine Fat-Free Mass Index (FFMI), a measure of muscularity.',
  };

  const howToJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Calculate Your FFMI',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Select Gender & Units',
        text: 'Choose your gender and preferred unit system (Metric or Imperial).',
      },
      {
        '@type': 'HowToStep',
        name: 'Enter Your Details',
        text: 'Input your height, weight, and body fat percentage. You can get your body fat percentage from our Body Fat Calculator.',
      },
      {
        '@type': 'HowToStep',
        name: 'Calculate FFMI',
        text: 'Click the "Calculate FFMI" button to see your score, your normalized FFMI for a 1.8m tall person, and your muscularity level.',
      },
    ],
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'What is FFMI and why is it better than BMI for athletes?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'FFMI (Fat-Free Mass Index) measures your muscle mass relative to your height, ignoring fat. This makes it far superior to the <a href="/bmi" aria-label="BMI Calculator">BMI Calculator</a> for athletes and bodybuilders, as it accurately reflects muscular development instead of just total weight.'
            }
        },
        {
            '@type': 'Question',
            name: 'What is a good FFMI score?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'For men, an FFMI of 21-23 is considered muscular, and over 25 is exceptional, often suggesting steroid use. For women, 17-19 is muscular. It provides a more meaningful goal than simply aiming for a number on the scale from an <a href="/ideal-weight" aria-label="Ideal Weight Calculator">Ideal Weight Calculator</a>.'
            }
        },
        {
            '@type': 'Question',
            name: 'How do I get an accurate body fat percentage for this calculation?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'For an easy at-home estimate, use our <a href="/body-fat" aria-label="Body Fat Percentage Calculator">Body Fat Percentage Calculator</a>, which uses the U.S. Navy method. For higher accuracy, consider methods like DEXA scans or hydrostatic weighing.'
            }
        },
        {
            '@type': 'Question',
            name: 'Can I increase my FFMI? How?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. Increasing FFMI means gaining muscle. This requires consistent resistance training and a calorie surplus with adequate protein. Use our <a href="/daily-calorie-needs" aria-label="Daily Calorie Needs Calculator">Daily Calorie Needs Calculator</a> to determine the right surplus for you.'
            }
        },
        {
            '@type': 'Question',
            name: 'What does "normalized FFMI" mean?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Taller individuals naturally have a higher FFMI. The normalized FFMI adjusts your score to what it would be if you were 1.8 meters (5\'11") tall, allowing for a more standardized comparison across different heights. It gives a better context than just knowing your <a href="/lean-body-mass" aria-label="Lean Body Mass Calculator">Lean Body Mass</a> alone.'
            }
        },
        {
            '@type': 'Question',
            name: 'Is an FFMI of 25+ naturally possible?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Research suggests that a normalized FFMI of around 25 is near the upper limit for natural athletes. Scores significantly above this are highly indicative of anabolic steroid use. This makes FFMI a useful tool for gauging one\'s genetic potential.'
            }
        },
        {
            '@type': 'Question',
            name: 'Does FFMI change as I lose fat?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'If you lose only fat and maintain your muscle mass, your FFMI will remain the same because your <a href="/lean-body-mass" aria-label="Lean Body Mass Calculator">Lean Body Mass</a> hasn\'t changed. This is the primary goal of a successful cutting phase.'
            }
        },
        {
            '@type': 'Question',
            name: 'How does FFMI relate to my BMR?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'A higher FFMI means more muscle mass, which is the primary driver of your resting metabolism. Therefore, increasing your FFMI will also increase your <a href="/bmr" aria-label="BMR Calculator">Basal Metabolic Rate (BMR)</a>, allowing you to eat more calories.'
            }
        },
        {
            '@type': 'Question',
            name: 'Why do you need my body fat percentage?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'FFMI is calculated from your fat-free mass. We determine this by first calculating your fat mass from your total weight and body fat percentage, then subtracting it. You can estimate your body fat with our <a href="/body-fat" aria-label="Body Fat Percentage Calculator">Body Fat Calculator</a>.'
            }
        },
        {
            '@type': 'Question',
            name: 'Is FFMI useful for women?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Absolutely. While the rating scales are different, FFMI is an excellent tool for women to track muscle-building progress, far more so than the scale or <a href="/bmi" aria-label="BMI Calculator">BMI</a>. It helps quantify gains in lean tissue.'
            }
        }
    ]
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
              <BreadcrumbPage>FFMI Calculator</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <Card>
          <CardHeader>
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 text-primary p-3 rounded-lg">
                <PersonStanding className="h-8 w-8" />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold">
                  Fat-Free Mass Index (FFMI) Calculator
                </h1>
                <p className="text-muted-foreground">
                  FFMI is a powerful metric for athletes and fitness enthusiasts that measures muscularity relative to height, offering a much clearer picture of your physique than the standard <Link href="/bmi" className="text-primary hover:underline" aria-label="BMI Calculator">BMI Calculator</Link>. Use it to track muscle growth, set realistic goals, and even estimate your natural genetic potential.
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <FfmiCalculatorForm />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>How to Use the FFMI Calculator</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              To calculate your FFMI, you need three key metrics: your height, your weight, and your body fat percentage.
            </p>
            <ol className="list-decimal list-inside space-y-2">
              <li><strong>Select Your Gender:</strong> The FFMI scale differs for men and women.</li>
              <li><strong>Choose Your Units:</strong> Select "Metric" (kg, cm) or "Imperial" (lbs, in).</li>
              <li><strong>Enter Height and Weight:</strong> Provide your current stats.</li>
              <li><strong>Enter Body Fat Percentage:</strong> This is crucial for the calculation. If you don't know it, use our <Link href="/body-fat" className="text-primary hover:underline" aria-label="Body Fat Percentage Calculator">Body Fat Percentage Calculator</Link> first.</li>
              <li><strong>Calculate:</strong> The tool will compute your Lean Body Mass, your FFMI, and your normalized FFMI.</li>
            </ol>
          </CardContent>
        </Card>
        
        <Card>
            <CardHeader><CardTitle>Worked Examples</CardTitle></CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Variable</TableHead>
                            <TableHead>Example 1 (Male)</TableHead>
                            <TableHead>Example 2 (Female)</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                         <TableRow>
                            <TableCell>Height</TableCell>
                            <TableCell>182 cm (6'0")</TableCell>
                            <TableCell>165 cm (5'5")</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Weight</TableCell>
                            <TableCell>84 kg (185 lbs)</TableCell>
                            <TableCell>60 kg (132 lbs)</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Body Fat %</TableCell>
                            <TableCell>15%</TableCell>
                            <TableCell>22%</TableCell>
                        </TableRow>
                         <TableRow>
                            <TableCell className="font-bold">Lean Body Mass</TableCell>
                            <TableCell className="font-bold">71.4 kg</TableCell>
                            <TableCell className="font-bold">46.8 kg</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-bold">FFMI</TableCell>
                            <TableCell className="font-bold">21.6</TableCell>
                            <TableCell className="font-bold">17.2</TableCell>
                        </TableRow>
                         <TableRow>
                            <TableCell className="font-bold">Normalized FFMI</TableCell>
                            <TableCell className="font-bold">21.8</TableCell>
                            <TableCell className="font-bold">16.3</TableCell>
                        </TableRow>
                         <TableRow>
                            <TableCell>Interpretation & Next Step</TableCell>
                            <TableCell>This individual is considered to have average to good muscularity. The next step is to use the <Link href="/daily-calorie-needs" className="text-primary hover:underline" aria-label="Daily Calorie Needs Calculator">Daily Calorie Needs</Link> calculator to aim for a surplus to increase LBM.</TableCell>
                            <TableCell>This individual has an average level of muscularity for a female. To increase FFMI, she could focus on a resistance training program and adequate protein intake.</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Understanding FFMI: The Ultimate Metric for Muscularity</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <h3 className="font-semibold text-lg text-foreground">What is Fat-Free Mass Index (FFMI)?</h3>
            <p>Fat-Free Mass Index (FFMI) is an index that tracks the amount of your muscle mass in proportion to your height. Unlike the widely known <Link href="/bmi" className="text-primary hover:underline" aria-label="BMI Calculator">BMI</Link>, which can't differentiate between fat and muscle, FFMI isolates your fat-free mass, giving a true indication of your muscularity. This makes it an indispensable tool for bodybuilders, athletes, and anyone serious about tracking their physique progress.</p>
            <p>FFMI is calculated by taking your <Link href="/lean-body-mass" className="text-primary hover:underline" aria-label="Lean Body Mass Calculator">Lean Body Mass (LBM)</Link> in kilograms and dividing it by your height in meters squared. The result is a number that can be compared against established norms to determine your level of muscularity.</p>

            <h3 className="font-semibold text-lg text-foreground">Normalized FFMI and Genetic Limits</h3>
            <p>One of the most fascinating applications of FFMI is in estimating natural muscular potential. Taller individuals will naturally have a higher FFMI simply because they have larger frames. To correct for this, the "normalized FFMI" is calculated, which adjusts your score as if you were 1.8 meters (about 5'11") tall.</p>
            <p>Studies on elite natural bodybuilders have shown that a normalized FFMI of around 25 seems to be the general upper limit for males without the use of anabolic steroids. For females, the natural limit is considerably lower. This makes FFMI a powerful, albeit not foolproof, tool for gauging whether an athlete's physique is likely attainable naturally.</p>
            
            <h3 className="font-semibold text-lg text-foreground">How to Interpret Your FFMI Score</h3>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>FFMI Score (Men)</TableHead>
                        <TableHead>FFMI Score (Women)</TableHead>
                        <TableHead>Interpretation</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell>16 - 17</TableCell>
                        <TableCell>13 - 14</TableCell>
                        <TableCell>Below Average</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>18 - 19</TableCell>
                        <TableCell>15 - 16</TableCell>
                        <TableCell>Average</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>20 - 21</TableCell>
                        <TableCell>17 - 18</TableCell>
                        <TableCell>Above Average</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>22 - 23</TableCell>
                        <TableCell>19 - 20</TableCell>
                        <TableCell>Excellent / Muscular</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>24 - 25</TableCell>
                        <TableCell>21 - 22</TableCell>
                        <TableCell>Superior / Very Muscular</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>26+</TableCell>
                        <TableCell>23+</TableCell>
                        <TableCell>Suggests Steroid Use</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            <p className="text-sm mt-4">These scores are a general guide. To build muscle and increase your FFMI, you need to consume more calories than you burn. Find your target with the <Link href="/daily-calorie-needs" className="text-primary hover:underline" aria-label="Daily Calorie Needs Calculator">Daily Calorie Needs Calculator</Link>.</p>
          </CardContent>
        </Card>
        
        <Card>
            <CardHeader><CardTitle>Common Mistakes</CardTitle></CardHeader>
            <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li><strong>Inaccurate Body Fat %:</strong> FFMI is highly sensitive to your body fat input. A small error in body fat can significantly change your FFMI. Use our <Link href="/body-fat" className="text-primary hover:underline" aria-label="Body Fat Percentage Calculator">Body Fat Calculator</Link> for a reliable estimate.</li>
                    <li><strong>Comparing Raw FFMI:</strong> Don't compare your raw FFMI with someone of a different height. Always use the normalized FFMI for a fair comparison.</li>
                    <li><strong>Ignoring Progress:</strong> Don't just calculate FFMI once. Track it over months to see if your training is effectively building muscle.</li>
                </ul>
            </CardContent>
        </Card>

        <Card>
            <CardHeader><CardTitle>Pro Tips & Quick Hacks</CardTitle></CardHeader>
            <CardContent>
                 <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li><strong>Track FFMI During a Cut:</strong> If your FFMI drops during a diet, you are losing muscle. This could mean your calorie deficit is too aggressive or your protein is too low. Adjust using the <Link href="/daily-calorie-needs" className="text-primary hover:underline" aria-label="Daily Calorie Needs Calculator">Daily Calorie Needs Calculator</Link>.</li>
                    <li><strong>Combine with Strength Metrics:</strong> A rising FFMI should correlate with increased strength. If you're getting more muscular (higher FFMI) but not stronger, you might be overemphasizing hypertrophy work at the expense of strength.</li>
                    <li><strong>Use FFMI to Set Realistic Goals:</strong> Knowing the natural limits (around 25 for men) can help you set achievable goals and avoid the disappointment of chasing an unnatural physique.</li>
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
                    <AccordionTrigger>What is FFMI and why is it better than BMI for athletes?</AccordionTrigger>
                    <AccordionContent>FFMI (Fat-Free Mass Index) measures your muscle mass relative to your height, ignoring fat. This makes it far superior to the <Link href="/bmi" className="text-primary hover:underline" aria-label="BMI Calculator">BMI Calculator</Link> for athletes and bodybuilders, as it accurately reflects muscular development instead of just total weight.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>What is a good FFMI score?</AccordionTrigger>
                    <AccordionContent>For men, an FFMI of 21-23 is considered muscular, and over 25 is exceptional, often suggesting steroid use. For women, 17-19 is muscular. It provides a more meaningful goal than simply aiming for a number on the scale from an <Link href="/ideal-weight" className="text-primary hover:underline" aria-label="Ideal Weight Calculator">Ideal Weight Calculator</Link>.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>How do I get an accurate body fat percentage for this calculation?</AccordionTrigger>
                    <AccordionContent>For an easy at-home estimate, use our <Link href="/body-fat" className="text-primary hover:underline" aria-label="Body Fat Percentage Calculator">Body Fat Percentage Calculator</Link>, which uses the U.S. Navy method. For higher accuracy, consider methods like DEXA scans or hydrostatic weighing.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <AccordionTrigger>Can I increase my FFMI? How?</AccordionTrigger>
                    <AccordionContent>Yes. Increasing FFMI means gaining muscle. This requires consistent resistance training and a calorie surplus with adequate protein. Use our <Link href="/daily-calorie-needs" className="text-primary hover:underline" aria-label="Daily Calorie Needs Calculator">Daily Calorie Needs Calculator</Link> to determine the right surplus for you.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                    <AccordionTrigger>What does "normalized FFMI" mean?</AccordionTrigger>
                    <AccordionContent>Taller individuals naturally have a higher FFMI. The normalized FFMI adjusts your score to what it would be if you were 1.8 meters (5'11") tall, allowing for a more standardized comparison across different heights. It gives a better context than just knowing your <Link href="/lean-body-mass" className="text-primary hover:underline" aria-label="Lean Body Mass Calculator">Lean Body Mass</Link> alone.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                    <AccordionTrigger>Is an FFMI of 25+ naturally possible?</AccordionTrigger>
                    <AccordionContent>Research suggests that a normalized FFMI of around 25 is near the upper limit for natural athletes. Scores significantly above this are highly indicative of anabolic steroid use. This makes FFMI a useful tool for gauging one's genetic potential.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-7">
                    <AccordionTrigger>Does FFMI change as I lose fat?</AccordionTrigger>
                    <AccordionContent>If you lose only fat and maintain your muscle mass, your FFMI will remain the same because your <Link href="/lean-body-mass" className="text-primary hover:underline" aria-label="Lean Body Mass Calculator">Lean Body Mass</Link> hasn't changed. This is the primary goal of a successful cutting phase.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-8">
                    <AccordionTrigger>How does FFMI relate to my BMR?</AccordionTrigger>
                    <AccordionContent>A higher FFMI means more muscle mass, which is the primary driver of your resting metabolism. Therefore, increasing your FFMI will also increase your <Link href="/bmr" className="text-primary hover:underline" aria-label="BMR Calculator">Basal Metabolic Rate (BMR)</Link>, allowing you to eat more calories.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-9">
                    <AccordionTrigger>Why do you need my body fat percentage?</AccordionTrigger>
                    <AccordionContent>FFMI is calculated from your fat-free mass. We determine this by first calculating your fat mass from your total weight and body fat percentage, then subtracting it. You can estimate your body fat with our <Link href="/body-fat" className="text-primary hover:underline" aria-label="Body Fat Percentage Calculator">Body Fat Calculator</Link>.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-10">
                    <AccordionTrigger>Is FFMI useful for women?</AccordionTrigger>
                    <AccordionContent>Absolutely. While the rating scales are different, FFMI is an excellent tool for women to track muscle-building progress, far more so than the scale or <Link href="/bmi" className="text-primary hover:underline" aria-label="BMI Calculator">BMI</Link>. It helps quantify gains in lean tissue.</AccordionContent>
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
                            <TableCell>Bodybuilders</TableCell>
                            <TableCell>Track muscular gains during a bulk or cut.</TableCell>
                            <TableCell><Link href="/strength-to-weight-ratio" className="text-primary hover:underline" aria-label="Strength-to-Weight Ratio Calculator">Strength-to-Weight Ratio</Link></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Fitness Coaches</TableCell>
                            <TableCell>Objectively measure a client's muscular progress.</TableCell>
                             <TableCell><Link href="/daily-calorie-needs" className="text-primary hover:underline" aria-label="Daily Calorie Needs Calculator">Daily Calorie Needs</Link></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>General Users</TableCell>
                            <TableCell>Gauge muscularity beyond what the mirror shows.</TableCell>
                            <TableCell><Link href="/lean-body-mass" className="text-primary hover:underline" aria-label="Lean Body Mass Calculator">Lean Body Mass</Link></TableCell>
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
              href="/lean-body-mass"
              className="p-4 border rounded-lg hover:bg-muted"
              aria-label="Lean Body Mass Calculator"
            >
              <h3 className="font-semibold">Lean Body Mass Calculator</h3>
              <p className="text-sm text-muted-foreground">
                Calculate the total weight of your body minus fat.
              </p>
            </Link>
            <Link href="/body-fat" className="p-4 border rounded-lg hover:bg-muted" aria-label="Body Fat Percentage Calculator">
              <h3 className="font-semibold">Body Fat Percentage Calculator</h3>
              <p className="text-sm text-muted-foreground">
                Get the required body fat percentage for this calculation.
              </p>
            </Link>
            <Link href="/bmi" className="p-4 border rounded-lg hover:bg-muted" aria-label="BMI Calculator">
              <h3 className="font-semibold">BMI Calculator</h3>
              <p className="text-sm text-muted-foreground">
                Compare your FFMI to the more traditional BMI metric.
              </p>
            </Link>
            <Link
              href="/daily-calorie-needs"
              className="p-4 border rounded-lg hover:bg-muted"
              aria-label="Daily Calorie Needs Calculator"
            >
              <h3 className="font-semibold">Daily Calorie Needs Calculator</h3>
              <p className="text-sm text-muted-foreground">
                Determine your calorie target for building muscle.
              </p>
            </Link>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
