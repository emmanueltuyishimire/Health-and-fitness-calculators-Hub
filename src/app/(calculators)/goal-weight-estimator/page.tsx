
import type { Metadata } from 'next';
import Link from 'next/link';
import { CalendarClock } from 'lucide-react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GoalWeightEstimatorForm } from '@/components/goal-weight-estimator-form';
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


export const metadata: Metadata = {
  title: 'Goal Weight Estimator by Date – Plan Your Timeline',
  description:
    'Set a target date to reach your goal weight and calculate the required weekly weight change and daily calorie target. Create a time-bound plan for your weight loss or gain journey.',
  openGraph: {
    title: 'Goal Weight Estimator by Date – Plan Your Timeline',
    description:
      'Set a target date to reach your goal weight and calculate the required weekly weight change and daily calorie target.',
    type: 'website',
  },
};

export default function GoalWeightEstimatorPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Goal Weight Estimator by Date',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
    },
    description: 'A free calculator to determine the required daily calorie intake and weekly weight change to reach a goal weight by a specific date.',
  };
  
  const howToJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Use the Goal Weight Estimator',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Determine Your TDEE',
        text: 'First, use our TDEE Calculator to find your daily maintenance calories.',
        url: '/tdee'
      },
      {
        '@type': 'HowToStep',
        name: 'Enter Weights and Date',
        text: 'Input your current weight, your goal weight, and your desired target date.',
      },
      {
        '@type': 'HowToStep',
        name: 'Calculate Your Plan',
        text: 'The calculator will determine the required weekly weight change and the daily calorie target needed to meet your deadline.',
      },
    ],
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What if the calculator says my goal is too aggressive?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'This is crucial feedback. An aggressive timeline is often unsustainable and can lead to muscle loss. You should extend your target date to allow for a safer rate of weight change (ideally 0.5-2 lbs or 0.25-1 kg per week).',
        },
      },
      {
        '@type': 'Question',
        name: 'Why do I need my TDEE for this?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Your <a href="/tdee">TDEE</a> is your baseline. The calculator subtracts from (or adds to) this number to determine your new calorie target. Without it, there is no way to create an accurate plan.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is the daily calorie target a strict rule?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'It\'s a target to aim for on average. Your weekly calorie average is what truly matters, so don\'t worry about small daily fluctuations. You can track your weekly average weight change with our <a href="/weight-change-tracker">Weekly Weight Change Tracker</a>.',
        },
      },
      {
        '@type': 'Question',
        name: 'What happens if my weight loss stalls before the date?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'As you lose weight, your TDEE will decrease. You must periodically recalculate your <a href="/tdee">TDEE</a> and adjust your calorie target downwards to continue making progress and stay on schedule.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I use this for muscle gain?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. If your goal weight is higher than your current weight, the calculator provides the necessary calorie surplus. However, be realistic: muscle gain is slow (0.25-0.5 lbs per week). If the required rate is too high, most of the gain will be fat. Use the <a href="/ffmi">FFMI Calculator</a> to track muscle gains.',
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
              <BreadcrumbPage>Goal Weight Estimator</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <Card>
          <CardHeader>
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 text-primary p-3 rounded-lg">
                <CalendarClock className="h-8 w-8" />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold">
                  Goal Weight Estimator by Date
                </h1>
                <p className="text-muted-foreground">
                  Set a deadline for your weight goal and find out what it takes to get there. This calculator determines the required daily calorie intake and weekly weight change to reach your target on time. Start with your maintenance calories from the <Link href="/tdee" className="text-primary hover:underline">TDEE Calculator</Link>.
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <GoalWeightEstimatorForm />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>How to Use the Goal Weight Estimator</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>This calculator creates a time-bound plan based on your weight goal and a target date.</p>
            <ol className="list-decimal list-inside space-y-2">
              <li><strong>Determine Your TDEE:</strong> First, use our <Link href="/tdee" className="text-primary hover:underline">TDEE Calculator</Link> to find your daily maintenance calories.</li>
              <li><strong>Enter Your Weights:</strong> Input your current weight and your desired goal weight.</li>
              <li><strong>Set Your Target Date:</strong> Choose the date by which you want to achieve your goal.</li>
              <li><strong>Calculate Your Plan:</strong> The calculator will show the required weekly weight change and the daily calorie target needed to meet your deadline.</li>
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
                  <TableCell>Target Date</TableCell>
                  <TableCell>10 weeks from now</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-bold">Required Weekly Change</TableCell>
                  <TableCell className="font-bold">-2.0 lbs/week</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-bold">Required Daily Calories</TableCell>
                  <TableCell className="font-bold">~1500 kcal/day</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Interpretation & Next Step</TableCell>
                  <TableCell>To lose 20 lbs in 10 weeks, a 2 lb/week loss is needed, requiring a 1000-calorie daily deficit. This is aggressive but achievable. The next step is to use the <Link href="/macronutrient-ratio" className="text-primary hover:underline">Macronutrient Ratio Calculator</Link> to ensure protein is high enough to preserve muscle.</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Understanding Your Time-Bound Plan</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <h3 className="font-semibold text-lg text-foreground">Working Backwards from Your Goal</h3>
            <p>This calculator works by taking your total desired weight change and dividing it by the number of weeks until your target date. This gives you a required "rate of change" (e.g., lose 1.5 lbs per week).</p>
            <p>From there, it converts this rate into a daily calorie deficit or surplus. Since one pound of fat is roughly 3,500 calories, losing one pound per week requires a 500-calorie daily deficit. The calculator does this math for you, providing a clear daily target to stay on track.</p>
            
            <h3 className="font-semibold text-lg text-foreground">Is Your Timeline Realistic?</h3>
            <p>A key feature of this calculator is its ability to sanity-check your goals. If your target date requires an extreme rate of weight loss (e.g., more than 2 lbs per week) or gain, the calculator will flag this as potentially unsafe or unrealistic. Sustainable weight change for most people is between 0.5 to 2 pounds per week.</p>
            <p>If your timeline is too aggressive, it's a sign to either extend your target date or adjust your goal weight. This helps you create a plan that is not only effective but also healthy and sustainable. For a deeper dive into safe rates, check out the <Link href="/weight-loss-goal" className="text-primary hover:underline">Weight Loss Goal</Link> and <Link href="/weight-gain-goal" className="text-primary hover:underline">Weight Gain Goal</Link> calculators.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Common Mistakes</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>Setting an Unrealistic Date:</strong> Choosing a date that's too soon is the most common mistake. This leads to an aggressive, unsustainable plan that causes muscle loss and burnout.</li>
              <li><strong>Forgetting to Recalculate TDEE:</strong> As your weight changes, so does your <Link href="/tdee" className="text-primary hover:underline">TDEE</Link>. You need to recalculate it periodically to keep your calorie target accurate.</li>
              <li><strong>Ignoring the "Is Aggressive" Warning:</strong> The warning is there for a reason. A plan requiring more than a 2 lb/week change is very difficult and not recommended for most people.</li>
              <li><strong>Focusing Only on Calories:</strong> For muscle gain, adequate protein is just as important as the surplus. For fat loss, protein helps preserve muscle.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Pro Tips & Quick Hacks</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>Work Backwards from an Event:</strong> This calculator is perfect for planning for a vacation, wedding, or competition. Start with the date and see what's realistically achievable.</li>
              <li><strong>Break Your Goal into Phases:</strong> If you have a lot of weight to lose, break it into smaller goals with different timelines (e.g., lose the first 20 lbs in 15 weeks).</li>
              <li><strong>Plan for a Diet Break:</strong> If your timeline is long (e.g., 20+ weeks), consider planning a 1-2 week "diet break" where you eat at your maintenance calories (from the <Link href="/calorie-maintenance" className="text-primary hover:underline">Calorie Maintenance Calculator</Link>). This can help with long-term adherence.</li>
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
                <AccordionTrigger>What if the calculator says my goal is too aggressive?</AccordionTrigger>
                <AccordionContent>This is important feedback. It means your timeline is likely unhealthy and unsustainable. You should extend your target date to allow for a more gradual rate of weight change (ideally 1-2 lbs per week).</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Why do I need my TDEE for this?</AccordionTrigger>
                <AccordionContent>Your <a href="/tdee" className="text-primary hover:underline">TDEE</a> is your baseline. The calculator needs to know your maintenance calories to determine how large of a deficit or surplus is needed to achieve the required rate of weight change.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Is the daily calorie target a strict rule?</AccordionTrigger>
                <AccordionContent>It's a target to aim for on average. Daily fluctuations are normal, but your weekly average intake should be close to the target to stay on track with your timeline.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>What happens if my weight loss stalls?</AccordionTrigger>
                <AccordionContent>As you lose weight, your TDEE will decrease. You may need to periodically recalculate your <a href="/tdee" className="text-primary hover:underline">TDEE</a> and adjust your calorie target downwards to continue making progress toward your date.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Can I use this for muscle gain?</AccordionTrigger>
                <AccordionContent>Yes. If your goal weight is higher than your current weight, the calculator will provide the necessary calorie surplus. However, remember that realistic muscle gain is slow (0.25-0.5 lbs per week). If the required rate is too high, most of the gain will be fat.</AccordionContent>
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
                  <TableCell>Event Planners</TableCell>
                  <TableCell>Create a realistic weight loss timeline for a wedding, reunion, or vacation.</TableCell>
                  <TableCell><Link href="/macronutrient-ratio" className="text-primary hover:underline">Macronutrient Ratio</Link></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Athletes (Weight Class)</TableCell>
                  <TableCell>Plan a "cut" to make weight for a competition by a specific date.</TableCell>
                  <TableCell><Link href="/ffmi" className="text-primary hover:underline">FFMI Calculator</Link></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>New Year's Resolvers</TableCell>
                  <TableCell>Turn a vague resolution into a concrete, time-bound plan.</TableCell>
                  <TableCell><Link href="/weekly-weight-change-tracker" className="text-primary hover:underline">Weekly Weight Tracker</Link></TableCell>
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
            <Link href="/weight-loss-goal" className="p-4 border rounded-lg hover:bg-muted">
              <h3 className="font-semibold">Weight Loss Goal Calculator</h3>
              <p className="text-sm text-muted-foreground">Set a goal based on rate of loss instead of a fixed date.</p>
            </Link>
            <Link href="/tdee" className="p-4 border rounded-lg hover:bg-muted">
              <h3 className="font-semibold">TDEE Calculator</h3>
              <p className="text-sm text-muted-foreground">The essential first step. Get the maintenance calories needed for this tool.</p>
            </Link>
            <Link href="/calorie-deficit" className="p-4 border rounded-lg hover:bg-muted">
              <h3 className="font-semibold">Calorie Deficit Calculator</h3>
              <p className="text-sm text-muted-foreground">Explore different deficit strategies if your timeline is flexible.</p>
            </Link>
             <Link href="/weekly-weight-change-tracker" className="p-4 border rounded-lg hover:bg-muted">
              <h3 className="font-semibold">Weekly Weight Change Tracker</h3>
              <p className="text-sm text-muted-foreground">Track if you are on pace with the required weekly change.</p>
            </Link>
          </CardContent>
        </Card>

      </div>
    </>
  );
}

    