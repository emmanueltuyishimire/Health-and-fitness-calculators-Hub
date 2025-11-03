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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
      </div>
    </>
  );
}
