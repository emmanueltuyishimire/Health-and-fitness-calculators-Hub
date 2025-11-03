
import { Flame } from 'lucide-react';
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
import { BmrCalculatorForm } from '@/components/bmr-calculator-form';

export const metadata: Metadata = {
    title: 'BMR Calculator – Calculate Your Basal Metabolic Rate',
    description: 'Calculate your Basal Metabolic Rate (BMR) with our free, accurate calculator. Understand your body’s baseline calorie needs to inform your diet and fitness strategy.',
    openGraph: {
        title: 'BMR Calculator – Calculate Your Basal Metabolic Rate',
        description: 'Calculate your Basal Metabolic Rate (BMR) with our free, accurate calculator. Understand your body’s baseline calorie needs to inform your diet and fitness strategy.',
        type: 'website',
    },
};


export default function BmrPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'BMR Calculator',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
    },
    description:
      'A free web-based calculator to determine Basal Metabolic Rate (BMR) based on age, gender, height, and weight.',
  };

  const howToJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Calculate Your BMR',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Select Gender & Units',
        text: 'Choose your gender and preferred unit system (Metric or Imperial).',
      },
      {
        '@type': 'HowToStep',
        name: 'Enter Your Details',
        text: 'Input your age, height, and weight.',
      },
      {
        '@type': 'HowToStep',
        name: 'Calculate BMR',
        text: 'Click the "Calculate BMR" button to see your result, which is the number of calories your body burns at rest daily.',
      },
       {
        '@type': 'HowToStep',
        name: 'Determine Activity Level',
        text: 'Use your BMR in the Daily Calorie Needs Calculator to find your total daily energy expenditure (TDEE).',
      },
    ],
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is the difference between BMR and RMR?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'BMR (Basal Metabolic Rate) is the minimum calories your body needs for basic functions at complete rest. RMR (Resting Metabolic Rate) is similar but measured under less strict conditions and is usually slightly higher. Our calculator estimates BMR, which you can use in the <a href="/daily-calorie-needs">Daily Calorie Needs Calculator</a> to find your TDEE.',
        },
      },
      {
        '@type': 'Question',
        name: 'How can I increase my BMR?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The most effective way to increase your BMR is by building more muscle mass. Since muscle tissue is more metabolically active than fat, increasing it boosts your resting calorie burn. Tracking your muscle gains with a <a href="/body-fat">Body Fat Percentage Calculator</a> is a great way to monitor progress.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does BMR decrease with age?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, BMR generally decreases as you age, primarily due to a natural decline in muscle mass. This is why staying active and doing strength training is important throughout life. You can see how age impacts your <a href="/ideal-weight">Ideal Weight</a> calculations as well.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why is my BMR different from my friend\'s?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'BMR is influenced by age, gender, weight, height, and body composition. Even two people with the same stats may have different BMRs due to genetics and muscle-to-fat ratio. Comparing your <a href="/body-fat">Body Fat Percentage</a> can often explain the difference.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I use my BMR for weight loss?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Your BMR is the first step. Next, use it in the <a href="/daily-calorie-needs">Daily Calorie Needs Calculator</a> to find your total daily energy expenditure (TDEE). To lose weight, you need to consume fewer calories than your TDEE (a calorie deficit).',
        },
      },
      {
        '@type': 'Question',
        name: 'Is the Mifflin-St Jeor formula accurate?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The Mifflin-St Jeor equation is considered one of the most accurate formulas for estimating BMR in the general population, more so than the older Harris-Benedict equation. While it\'s an estimate, it provides a solid baseline for your <a href="/daily-calorie-needs">calorie planning</a>.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can eating too little lower my BMR?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, severe and prolonged calorie restriction can cause your body to adapt by lowering your metabolic rate to conserve energy. This is why gradual weight loss, guided by a reasonable deficit from your <a href="/daily-calorie-needs">TDEE</a>, is more sustainable.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does BMR account for exercise?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No, BMR is your calorie burn at complete rest. To account for all your daily activities, including exercise, you must multiply your BMR by an activity factor. Our <a href="/daily-calorie-needs">Daily Calorie Needs Calculator</a> does this for you automatically.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is BMR the same as TDEE?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. BMR is the energy for basic functions. TDEE (Total Daily Energy Expenditure) is BMR plus the calories burned from all other activities (walking, working, exercise). TDEE is what you should base your diet on. The <a href="/daily-calorie-needs">Daily Calorie Needs Calculator</a> estimates your TDEE.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does body fat percentage affect BMR?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Lean muscle mass burns more calories at rest than fat mass. Therefore, a person with a lower <a href="/body-fat">body fat percentage</a> and more muscle will have a higher BMR than someone of the same weight with higher body fat.',
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
              <BreadcrumbPage>BMR Calculator</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <Card>
          <CardHeader>
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 text-primary p-3 rounded-lg">
                <Flame className="h-8 w-8" />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold">
                  BMR Calculator
                </h1>
                <p className="text-muted-foreground">
                    Calculate your Basal Metabolic Rate (BMR)—the number of calories your body needs to perform its most basic, life-sustaining functions. Understanding your BMR is the foundational step in managing your weight, as it allows you to accurately determine your total daily calorie needs. Use this result as the starting point for our <Link href="/daily-calorie-needs" className="text-primary hover:underline">Daily Calorie Needs Calculator</Link> to build a precise and effective nutrition plan.
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <BmrCalculatorForm />
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>How to Use the BMR Calculator</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              Our BMR Calculator uses the Mifflin-St Jeor equation, widely considered the most accurate method for estimating basal metabolic rate. Follow these simple steps to find your baseline calorie burn.
            </p>
            <ol className="list-decimal list-inside space-y-2">
              <li><strong>Select Your Gender:</strong> The formula adjusts for physiological differences between males and females.</li>
              <li><strong>Choose Your Units:</strong> Select "Metric" (kg, cm) or "Imperial" (lbs, inches).</li>
              <li><strong>Enter Your Age:</strong> Your metabolic rate changes over your lifespan.</li>
              <li><strong>Enter Your Height and Weight:</strong> These are key variables in determining your body mass.</li>
              <li><strong>Calculate BMR:</strong> Click the button to see the number of calories your body would burn in a day if you were at complete rest.</li>
              <li><strong>Your Next Step:</strong> Your BMR is just the beginning. To plan your diet, you must account for your activity level. Take your BMR result and plug it into the <Link href="/daily-calorie-needs" className="text-primary hover:underline">Daily Calorie Needs Calculator</Link> to find your Total Daily Energy Expenditure (TDEE).</li>
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
                  <TableCell>Age</TableCell>
                  <TableCell>35 years</TableCell>
                  <TableCell>45 years</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Height</TableCell>
                  <TableCell>165 cm</TableCell>
                  <TableCell>180 cm</TableCell>
                </TableRow>
                 <TableRow>
                  <TableCell>Weight</TableCell>
                  <TableCell>60 kg</TableCell>
                  <TableCell>85 kg</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-bold">Calculated BMR</TableCell>
                  <TableCell className="font-bold">1,300 kcal/day</TableCell>
                  <TableCell className="font-bold">1,760 kcal/day</TableCell>
                </TableRow>
                 <TableRow>
                    <TableCell>Interpretation & Next Step</TableCell>
                    <TableCell>Her body burns 1,300 calories at rest. Her next step is to use the <Link href="/daily-calorie-needs" className="text-primary hover:underline">Daily Calorie Needs Calculator</Link> to find her TDEE.</TableCell>
                    <TableCell>His body burns 1,760 calories at rest. He can use this to understand his baseline before accounting for exercise with the <Link href="/tdee" className="text-primary hover:underline">TDEE calculator</Link>.</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Understanding BMR: Your Body's Silent Engine</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <h3 className="font-semibold text-lg text-foreground">What is Basal Metabolic Rate?</h3>
            <p>Your Basal Metabolic Rate (BMR) is the amount of energy your body expends while at rest in a neutrally temperate environment, and in a post-absorptive state (meaning your digestive system is inactive, which requires about 12 hours of fasting). In simpler terms, it's the number of calories you would burn if you stayed in bed all day, awake but completely still. This energy is used for vital functions like breathing, circulating blood, controlling body temperature, cell growth, brain and nerve function, and contraction of muscles. Your BMR is the single largest component of your total daily energy expenditure (TDEE), typically accounting for 60-75% of the calories you burn each day.</p>
            <p>It's crucial not to confuse BMR with Resting Metabolic Rate (RMR). RMR is measured under less restrictive conditions and is about 10% higher than BMR. For all practical purposes in fitness and nutrition planning, the two are often used interchangeably, and our calculator provides an excellent estimate to serve as the foundation for your dietary planning. Knowing your BMR is more useful than just knowing your <Link href="/bmi" className="text-primary hover:underline">BMI</Link>, as it directly relates to the energy your specific body uses.</p>

            <h3 className="font-semibold text-lg text-foreground">Factors That Influence Your BMR</h3>
            <p>Your BMR is not a fixed number; it's influenced by several factors:</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
                <li><strong>Body Composition:</strong> This is the most significant factor. Lean body mass (muscle) is more metabolically active than fat mass. The more muscle you have, the higher your BMR. This is why tracking your <Link href="/body-fat" className="text-primary hover:underline">body fat percentage</Link> is so valuable.</li>
                <li><strong>Age:</strong> BMR tends to decrease with age. After age 20, it typically drops by about 1-2% per decade, largely due to a loss of muscle mass.</li>
                <li><strong>Gender:</strong> Men generally have a higher BMR than women because they tend to have more muscle mass, heavier bones, and a lower body fat percentage.</li>
                <li><strong>Weight and Height:</strong> Larger bodies require more energy to maintain, so taller or heavier individuals will have a higher BMR.</li>
                <li><strong>Genetics:</strong> Some people are born with faster metabolisms than others.</li>
                <li><strong>Hormones:</strong> Hormonal imbalances, such as those related to the thyroid gland (thyroxine), can significantly impact BMR.</li>
            </ul>

             <h3 className="font-semibold text-lg text-foreground">From BMR to TDEE: The Key to Weight Management</h3>
             <p>Your BMR is a powerful piece of data, but it's only part of the equation. To effectively manage your weight, you need to know your Total Daily Energy Expenditure (TDEE), which is the total number of calories you burn in a 24-hour period. TDEE is calculated by multiplying your BMR by an activity factor. This is exactly what our <Link href="/daily-calorie-needs" className="text-primary hover:underline">Daily Calorie Needs Calculator</Link> does.</p>
             <p>TDEE = BMR × Activity Multiplier</p>
            <p>Once you know your TDEE (your "maintenance calories"), the path to your goal becomes clear:</p>
            <ul className="list-disc list-inside space-y-1">
                <li>To <strong>lose weight</strong>, you must consume fewer calories than your TDEE (a calorie deficit).</li>
                <li>To <strong>gain weight</strong>, you must consume more calories than your TDEE (a calorie surplus).</li>
                <li>To <strong>maintain weight</strong>, you must consume a similar number of calories to your TDEE.</li>
            </ul>
             <p>By starting with an accurate BMR calculation, you can create a precise and sustainable energy balance equation tailored to your body and goals, whether that's reaching your <Link href="/ideal-weight" className="text-primary hover:underline">ideal weight</Link> or improving athletic performance.</p>
          </CardContent>
        </Card>

        <Card>
            <CardHeader><CardTitle>Common Mistakes When Calculating BMR</CardTitle></CardHeader>
            <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li><strong>Confusing BMR with TDEE:</strong> Using your BMR as your daily calorie target is a major error. BMR doesn't include activity. Always use your BMR to calculate your TDEE in our <Link href="/daily-calorie-needs" className="text-primary hover:underline">Daily Calorie Needs Calculator</Link>.</li>
                    <li><strong>Overestimating Activity Level:</strong> Many people choose a higher activity multiplier than is accurate, leading to an inflated TDEE and slower-than-expected weight loss. Be honest with your activity level for a better estimate.</li>
                    <li><strong>Not Updating Your BMR:</strong> As you lose or gain weight, your BMR will change. You should recalculate it after every 5-10 lbs (or 2-5 kg) of weight change to keep your calorie targets accurate.</li>
                    <li><strong>Using It as a Rigid Rule:</strong> BMR is an estimate. Use it as a starting point, monitor your weight and <Link href="/body-fat" className="text-primary hover:underline">body composition</Link> over 2-4 weeks, and adjust your calorie intake up or down as needed.</li>
                </ul>
            </CardContent>
        </Card>
        
        <Card>
            <CardHeader><CardTitle>Pro Tips & Quick Hacks</CardTitle></CardHeader>
            <CardContent>
                 <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li><strong>Prioritize Protein to Protect BMR:</strong> When in a calorie deficit, a higher protein intake helps preserve muscle mass, which in turn helps keep your BMR from dropping as much. Use a Protein Intake Calculator to find your target.</li>
                    <li><strong>Use BMR to Set Your "Non-Negotiable" Floor:</strong> As a general rule, avoid dieting on calorie levels at or below your BMR for extended periods, as this can negatively impact metabolism and lead to nutrient deficiencies.</li>
                    <li><strong>Reverse Dieting with BMR:</strong> After a long diet, you can use your BMR and TDEE from the <Link href="/daily-calorie-needs" className="text-primary hover:underline">Calorie Needs Calculator</Link> to slowly increase calories back to a new, higher maintenance level, which helps restore metabolic rate.</li>
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
                <AccordionTrigger>What is the difference between BMR and RMR?</AccordionTrigger>
                <AccordionContent>BMR is measured in a strict, fasted state, while RMR (Resting Metabolic Rate) is less strict. They are very close, and for diet planning, the estimate from our BMR calculator is the perfect starting point for the <Link href="/daily-calorie-needs" className="text-primary hover:underline">Daily Calorie Needs Calculator</Link>.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>How can I increase my BMR?</AccordionTrigger>
                <AccordionContent>Build muscle! More lean mass requires more energy at rest, boosting your BMR. You can track your progress by monitoring your <Link href="/body-fat" className="text-primary hover:underline">body fat percentage</Link> over time.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Does BMR decrease with age?</AccordionTrigger>
                <AccordionContent>Yes, BMR naturally declines with age, mostly due to muscle loss. This is why regular strength training becomes increasingly important as you get older to maintain a healthy metabolism and <Link href="/ideal-weight" className="text-primary hover:underline">ideal weight</Link>.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Why is my BMR so different from my friend's?</AccordionTrigger>
                <AccordionContent>BMR is highly individual and depends on age, gender, height, weight, and especially body composition. Someone with more muscle will have a higher BMR. Comparing your <Link href="/body-fat" className="text-primary hover:underline">body fat percentage</Link> would likely reveal why they differ.</AccordionContent>
              </AccordionItem>
               <AccordionItem value="item-5">
                <AccordionTrigger>How do I use my BMR for weight loss?</AccordionTrigger>
                <AccordionContent>BMR is your first step. Your second step is to use it in our <Link href="/daily-calorie-needs" className="text-primary hover:underline">Daily Calorie Needs Calculator</Link> to find your TDEE. To lose weight, eat fewer calories than your TDEE.</AccordionContent>
              </AccordionItem>
               <AccordionItem value="item-6">
                <AccordionTrigger>Is this calculator accurate?</AccordionTrigger>
                <AccordionContent>It uses the Mifflin-St Jeor equation, which is considered highly accurate for the general population. It provides a reliable baseline for your metabolism to plan your diet with the <Link href="/tdee" className="text-primary hover:underline">TDEE calculator</Link>.</AccordionContent>
              </AccordionItem>
               <AccordionItem value="item-7">
                <AccordionTrigger>Can eating too few calories lower my BMR?</AccordionTrigger>
                <AccordionContent>Yes. Drastically cutting calories for a long time can cause "metabolic adaptation," where your body slows your BMR to conserve energy. This is why a moderate deficit below your calculated <Link href="/daily-calorie-needs" className="text-primary hover:underline">TDEE</Link> is recommended.</AccordionContent>
              </AccordionItem>
               <AccordionItem value="item-8">
                <AccordionTrigger>Does exercise change my BMR?</AccordionTrigger>
                <AccordionContent>Directly, no. BMR is your resting burn. However, consistent exercise, especially strength training, builds muscle, which permanently increases your BMR over time. The calories you burn *during* exercise are accounted for in your <Link href="/daily-calorie-needs" className="text-primary hover:underline">TDEE (Total Daily Energy Expenditure)</Link>.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-9">
                <AccordionTrigger>Why is knowing BMR better than using a generic 2000-calorie diet?</AccordionTrigger>
                <AccordionContent>A 2000-calorie diet is a generic guideline that doesn't fit everyone. Your personal BMR and <Link href="/daily-calorie-needs" className="text-primary hover:underline">TDEE</Link> could be much higher or lower. Personalizing your intake is the key to effective weight management.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-10">
                <AccordionTrigger>Should I eat my BMR in calories?</AccordionTrigger>
                <AccordionContent>No, you should eat according to your TDEE, not your BMR. Your BMR is your "coma" calories. Your TDEE, found with the <Link href="/daily-calorie-needs" className="text-primary hover:underline">Daily Calorie Needs Calculator</Link>, is what you actually burn in a day. Eating only your BMR is likely too low for most active people.</AccordionContent>
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
                            <TableCell>Establish a baseline for a new diet or fitness plan.</TableCell>
                            <TableCell><Link href="/daily-calorie-needs" className="text-primary hover:underline">Daily Calorie Needs</Link></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Fitness Coaches</TableCell>
                            <TableCell>Create precise, individualized calorie targets for clients.</TableCell>
                             <TableCell>Macronutrient Ratio Calculator</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Nutritionists</TableCell>
                            <TableCell>Formulate meal plans based on a client's specific metabolic rate.</TableCell>
                            <TableCell>Meal Calorie Split Calculator</TableCell>
                        </TableRow>
                         <TableRow>
                            <TableCell>Health Enthusiasts</TableCell>
                            <TableCell>Understand how changes in muscle mass affect metabolism.</TableCell>
                            <TableCell><Link href="/body-fat" className="text-primary hover:underline">Body Fat % Calculator</Link></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Continue Your Health Analysis</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/daily-calorie-needs" className="p-4 border rounded-lg hover:bg-muted">
              <h3 className="font-semibold">Daily Calorie Needs Calculator</h3>
              <p className="text-sm text-muted-foreground">The essential next step. Turn your BMR into a daily calorie target.</p>
            </Link>
            <Link href="/body-fat" className="p-4 border rounded-lg hover:bg-muted">
              <h3 className="font-semibold">Body Fat Percentage Calculator</h3>
              <p className="text-sm text-muted-foreground">Understand your body composition to see why your BMR is what it is.</p>
            </Link>
            <Link href="/bmi" className="p-4 border rounded-lg hover:bg-muted">
              <h3 className="font-semibold">BMI Calculator</h3>
              <p className="text-sm text-muted-foreground">Compare your BMR with your general weight category for a fuller picture.</p>
            </Link>
            <Link href="/ideal-weight" className="p-4 border rounded-lg hover:bg-muted">
              <h3 className="font-semibold">Ideal Weight Calculator</h3>
              <p className="text-sm text-muted-foreground">See how your current weight compares to historical healthy weight formulas.</p>
            </Link>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
