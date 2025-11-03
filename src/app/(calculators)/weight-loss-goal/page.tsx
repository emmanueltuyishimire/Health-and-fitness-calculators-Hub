
import type { Metadata } from 'next';
import Link from 'next/link';
import { Flag } from 'lucide-react';
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
import { WeightLossGoalCalculatorForm } from '@/components/weight-loss-goal-calculator-form';

export const metadata: Metadata = {
  title: 'Weight Loss Goal Calculator – Plan Your Journey',
  description:
    'Set a clear path to your target weight. Calculate your daily calorie needs and estimate the timeline for your weight loss journey based on your goals.',
  openGraph: {
    title: 'Weight Loss Goal Calculator – Plan Your Journey',
    description:
      'Set a clear path to your target weight. Calculate your daily calorie needs and estimate the timeline for your weight loss journey based on your goals.',
    type: 'website',
  },
};

export default function WeightLossGoalPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Weight Loss Goal Calculator',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
    },
    description:
      'A free web-based calculator to plan a weight loss timeline and determine daily calorie targets.',
  };

  const howToJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Plan Your Weight Loss Goal',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Determine TDEE',
        text: 'First, use the TDEE Calculator to find your maintenance calories.',
        url: '/tdee'
      },
      {
        '@type': 'HowToStep',
        name: 'Enter Your Weights',
        text: 'Input your current weight and your goal weight.',
      },
      {
        '@type': 'HowToStep',
        name: 'Set Your Pace',
        text: 'Choose a weekly weight loss goal. A rate of 1-2 lbs per week is generally safe and sustainable.',
      },
      {
        '@type': 'HowToStep',
        name: 'Calculate',
        text: 'The calculator will provide your estimated daily calorie target and the number of weeks to reach your goal.',
      },
    ],
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is a realistic weight loss goal?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A safe and sustainable rate of weight loss is 1 to 2 pounds (about 0.5 to 1 kg) per week. Losing weight faster than this often involves losing water and muscle mass, not just fat. For a more tailored calorie target, start with our <a href="/calorie-deficit">Calorie Deficit Calculator</a>.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why do I need my TDEE for this calculator?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Your <a href="/tdee">TDEE</a> (Total Daily Energy Expenditure) is your maintenance calorie level. To lose weight, you must eat less than this amount. This calculator uses your TDEE to calculate the precise deficit needed to achieve your desired weekly weight loss.',
        },
      },
      {
        '@type': 'Question',
        name: 'Will I lose weight exactly as predicted?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The timeline is an estimate. Weight loss is not always linear. As you lose weight, your TDEE will decrease, so you may need to recalculate your <a href="/tdee">TDEE</a> and adjust your calorie intake periodically to continue making progress.',
        },
      },
      {
        '@type': 'Question',
        name: 'What should I do when I reach my goal weight?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Once you reach your goal, you should transition to eating at your new maintenance calorie level. You can find this with the <a href="/calorie-maintenance">Calorie Maintenance Calculator</a>. Slowly increasing your calories back to maintenance can help prevent rebound weight gain.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is it better to focus on weight loss or fat loss?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'While this tool focuses on total weight, the ultimate goal should be fat loss while preserving muscle. To do this, combine your calorie deficit with adequate protein and resistance training. Track your progress with the <a href="/body-fat">Body Fat Percentage Calculator</a>.',
        },
      },
      {
        '@type': 'Question',
        name: 'My weight loss has stalled. What should I do?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Weight loss plateaus are normal. It usually means your body has adapted and your TDEE has decreased. The first step is to recalculate your <a href="/tdee">TDEE</a> with your new, lower weight. You may need to slightly decrease your calorie intake or increase your activity level to start losing weight again.',
        },
      },
      {
        '@type': 'Question',
        name: 'Should I ever eat below my BMR?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'It is generally not recommended to eat below your <a href="/bmr">Basal Metabolic Rate (BMR)</a> for an extended period. Doing so can lead to muscle loss and a significant drop in metabolism. Your calorie target from this calculator should ideally stay above your BMR.',
        },
      },
      {
        '@type': 'Question',
        name: 'How important is exercise for my goal?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Exercise is crucial. While diet creates the calorie deficit, resistance training helps preserve muscle mass, ensuring that the weight you lose is primarily fat. Cardio helps increase your total daily energy expenditure (TDEE).',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I set a goal date instead of a weekly loss rate?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'This calculator works by setting a pace (e.g., 1 lb/week). To set a goal by a specific date, use our <a href="/goal-weight-estimator">Goal Weight Estimator by Date</a> calculator. You can work backward to find the required rate of loss.',
        },
      },
      {
        '@type': 'Question',
        name: 'What\'s the difference between this and the Calorie Deficit Calculator?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The <a href="/calorie-deficit">Calorie Deficit Calculator</a> helps you find a calorie target based on a percentage deficit (e.g., 15% below TDEE). This Weight Loss Goal Calculator is more goal-oriented, as it calculates the deficit needed to achieve a specific rate of weight loss (e.g., 1 lb/week) and provides a timeline.',
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
              <BreadcrumbPage>Weight Loss Goal Calculator</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <Card>
          <CardHeader>
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 text-primary p-3 rounded-lg">
                <Flag className="h-8 w-8" />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold">
                  Weight Loss Goal Calculator
                </h1>
                <p className="text-muted-foreground">
                  Turn your weight loss goal into an actionable plan. This calculator helps you determine your daily calorie target and estimates how long it will take to reach your desired weight. Start by getting your maintenance calories from the <Link href="/tdee" className="text-primary hover:underline">TDEE Calculator</Link>.
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <WeightLossGoalCalculatorForm />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>How to Use the Weight Loss Goal Calculator</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              This calculator creates a clear roadmap for your weight loss journey by connecting your goals to a daily calorie target and an estimated timeline.
            </p>
            <ol className="list-decimal list-inside space-y-2">
              <li><strong>Find Your TDEE:</strong> The essential first step. Visit our <Link href="/tdee" className="text-primary hover:underline">TDEE Calculator</Link> to determine your daily maintenance calories.</li>
              <li><strong>Enter Your TDEE:</strong> Input your TDEE value into the form.</li>
              <li><strong>Enter Current & Goal Weight:</strong> Provide your starting weight and the weight you want to achieve.</li>
              <li><strong>Choose Your Pace:</strong> Select your desired weekly weight loss rate. 1-2 lbs per week is a common and sustainable goal.</li>
              <li><strong>Calculate Your Plan:</strong> The tool will output your estimated daily calorie target and the number of weeks it will take to reach your goal at that pace.</li>
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
                  <TableCell>TDEE</TableCell>
                  <TableCell>2500 kcal/day</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Current Weight</TableCell>
                  <TableCell>200 lbs</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Goal Weight</TableCell>
                  <TableCell>180 lbs</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Desired Weekly Loss</TableCell>
                  <TableCell>1 lb/week</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-bold">Daily Calorie Target</TableCell>
                  <TableCell className="font-bold">~2000 kcal/day</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-bold">Estimated Time to Goal</TableCell>
                  <TableCell className="font-bold">20 weeks</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Interpretation & Next Step</TableCell>
                  <TableCell>To lose 20 lbs at a rate of 1 lb/week, this person needs a 500-calorie deficit. Their target is 2000 kcal/day, and it should take about 20 weeks. Their next step is to use the <Link href="/macronutrient-ratio" className="text-primary hover:underline">Macronutrient Ratio Calculator</Link> to break down their calorie goal.</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Understanding Your Weight Loss Plan</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <h3 className="font-semibold text-lg text-foreground">The Math of Weight Loss</h3>
            <p>Weight loss is governed by energy balance. A single pound of body fat contains approximately 3,500 calories. To lose one pound per week, you need to create a total weekly deficit of 3,500 calories, which breaks down to a 500-calorie deficit per day (3500 / 7 = 500).</p>
            <p>This calculator automates that math for you. It takes your desired weekly weight loss, converts it into a daily calorie deficit, and subtracts that from your <Link href="/tdee" className="text-primary hover:underline">TDEE</Link> to give you a precise daily calorie target. It then calculates the total pounds you need to lose and divides it by your weekly goal to estimate the timeline.</p>
            
            <h3 className="font-semibold text-lg text-foreground">The Importance of Realistic Timelines</h3>
            <p>While it's tempting to choose the fastest weight loss option, setting a realistic and sustainable pace is crucial for long-term success. Rapid weight loss often comes from crash dieting, which can lead to muscle loss, nutrient deficiencies, and a "rebound" effect where you regain the weight quickly.</p>
            <p>A slower pace of 1-2 pounds per week allows your body to primarily burn fat while preserving precious, metabolically active muscle tissue. This approach is easier to stick to, less stressful on your body, and helps you build sustainable habits. Remember that as your weight drops, your TDEE will also decrease, so you may need to adjust your plan periodically to continue making progress. Use the <Link href="/body-fat" className="text-primary hover:underline">Body Fat Percentage Calculator</Link> to ensure you are losing fat, not muscle.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Common Mistakes</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>Being Too Aggressive:</strong> Setting a weekly loss goal of more than 1-2% of your body weight can lead to muscle loss and is hard to sustain.</li>
              <li><strong>Not Adjusting for a New TDEE:</strong> As you lose weight, your body needs fewer calories. You must recalculate your <Link href="/tdee" className="text-primary hover:underline">TDEE</Link> every 10-15 lbs and adjust your calorie target.</li>
              <li><strong>Ignoring Protein Intake:</strong> During weight loss, adequate protein is vital to preserve muscle mass. A low-protein diet will result in more muscle loss.</li>
              <li><strong>Forgetting About "Diet Breaks":</strong> Staying in a deficit for too long can lead to burnout. Planning a one-week break at your maintenance calories every 8-12 weeks can improve adherence.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Pro Tips & Quick Hacks</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>Use a Food Scale:</strong> Accurately tracking your calorie intake is much easier and more effective with a food scale.</li>
              <li><strong>Plan Your Meals:</strong> Use a tool like the Meal Calorie Split Calculator to plan your meals around your daily calorie target, making it easier to stay on track.</li>
              <li><strong>Focus on High-Satiety Foods:</strong> Prioritize protein and fiber from whole foods (vegetables, lean meats, legumes) to feel fuller on fewer calories.</li>
              <li><strong>Don't Drink Your Calories:</strong> Sugary drinks, juices, and specialty coffees can add hundreds of calories without providing much satiety. Stick to water, black coffee, or tea.</li>
            </ul>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Frequently Asked Questions</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>What is a realistic weight loss goal?</AccordionTrigger>
                <AccordionContent>A safe and sustainable rate of weight loss is 1 to 2 pounds (about 0.5 to 1 kg) per week. Faster loss often includes water and muscle. For a tailored target, start with our <a href="/calorie-deficit">Calorie Deficit Calculator</a>.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Why do I need my TDEE for this calculator?</AccordionTrigger>
                <AccordionContent>Your <a href="/tdee">TDEE</a> is your maintenance calorie level. To lose weight, you must eat less than this. This calculator uses your TDEE to find the precise deficit needed for your goal.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Will I lose weight exactly as predicted?</AccordionTrigger>
                <AccordionContent>The timeline is an estimate. Weight loss isn't always linear. As you lose weight, your TDEE will decrease, so you may need to recalculate your <a href="/tdee">TDEE</a> and adjust your intake to continue making progress.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>What should I do when I reach my goal weight?</AccordionTrigger>
                <AccordionContent>Transition to eating at your new maintenance calorie level, which you can find with the <a href="/calorie-maintenance">Calorie Maintenance Calculator</a>. Slowly increasing calories helps prevent rebound weight gain.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Is it better to focus on weight loss or fat loss?</AccordionTrigger>
                <AccordionContent>The ultimate goal should be fat loss. Combine your calorie deficit with adequate protein and resistance training. Track your progress with the <a href="/body-fat">Body Fat Percentage Calculator</a>.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger>Can I set a goal date instead of a weekly loss rate?</AccordionTrigger>
                <AccordionContent>This calculator works by setting a pace (e.g., 1 lb/week). To set a goal by a specific date, use our <a href="/goal-weight-estimator">Goal Weight Estimator by Date</a> calculator. You can work backward to find the required rate of loss.</AccordionContent>
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
                  <TableCell>General Users</TableCell>
                  <TableCell>Create a clear, motivating timeline and daily target for a weight loss journey.</TableCell>
                  <TableCell><Link href="/macronutrient-ratio" className="text-primary hover:underline">Macronutrient Ratio</Link></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Fitness Coaches</TableCell>
                  <TableCell>Map out a phased fat loss plan for a client, complete with calorie targets and duration.</TableCell>
                  <TableCell>Weekly Weight Change Tracker</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Event Preparation</TableCell>
                  <TableCell>Plan a timeline to reach a specific weight for an event like a wedding or competition.</TableCell>
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
            <Link href="/tdee" className="p-4 border rounded-lg hover:bg-muted">
              <h3 className="font-semibold">TDEE Calculator</h3>
              <p className="text-sm text-muted-foreground">The essential first step. Find the maintenance calories this calculator needs.</p>
            </Link>
            <Link href="/calorie-deficit" className="p-4 border rounded-lg hover:bg-muted">
              <h3 className="font-semibold">Calorie Deficit Calculator</h3>
              <p className="text-sm text-muted-foreground">Explore different deficit strategies (e.g., percentage-based) for your goal.</p>
            </Link>
            <Link href="/body-fat" className="p-4 border rounded-lg hover:bg-muted">
              <h3 className="font-semibold">Body Fat Percentage Calculator</h3>
              <p className="text-sm text-muted-foreground">Track your progress to ensure the weight you're losing is primarily fat.</p>
            </Link>
            <Link href="/ideal-weight" className="p-4 border rounded-lg hover:bg-muted">
              <h3 className="font-semibold">Ideal Weight Calculator</h3>
              <p className="text-sm text-muted-foreground">Get a general idea of a healthy weight range to help set your goal.</p>
            </Link>
          </CardContent>
        </Card>

      </div>
    </>
  );
}
