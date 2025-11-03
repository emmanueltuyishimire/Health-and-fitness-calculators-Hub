
import type { Metadata } from 'next';
import Link from 'next/link';
import { Bike } from 'lucide-react';
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


export const metadata: Metadata = {
  title: 'Daily Activity Level Estimator – Find Your TDEE Multiplier',
  description:
    'Learn how to accurately estimate your daily activity level to calculate your TDEE. Understand the difference between sedentary, light, moderate, and very active lifestyles.',
  openGraph: {
    title: 'Daily Activity Level Estimator – Find Your TDEE Multiplier',
    description:
      'Learn how to accurately estimate your daily activity level to calculate your TDEE. Understand the difference between sedentary, light, moderate, and very active lifestyles.',
    type: 'website',
  },
};

export default function DailyActivityLevelEstimatorPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Daily Activity Level Estimator',
    description: 'An informational guide to help users select the correct activity level for TDEE calculations.',
    author: {
      '@type': 'Organization',
      name: 'Body Balance',
    },
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Why is choosing the right activity level so important?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Choosing the right activity level is the most critical step for an accurate TDEE calculation. Overestimating your activity is a very common mistake that leads to setting a calorie target that is too high, which can stall weight loss. Our <a href="/tdee">TDEE Calculator</a> depends on this value.',
        },
      },
      {
        '@type': 'Question',
        name: 'What if I have a desk job but work out hard 5 days a week?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'This is a common scenario. You would likely fall into the "Moderately Active" category. Your job is sedentary, but your frequent, intense exercise significantly raises your daily energy expenditure. The key is to look at your week as a whole.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does Non-Exercise Activity Thermogenesis (NEAT) count?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, absolutely. NEAT (calories burned from activities that are not formal exercise, like walking, fidgeting, or chores) is a huge part of your activity level. Someone with a high step count but no formal exercise might be more active than someone who works out but is sedentary otherwise. Estimate your NEAT burn with the <a href="/steps-to-calories">Steps to Calories Calculator</a>.',
        },
      },
      {
        '@type': 'Question',
        name: 'Should I use a different activity level on rest days?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. The activity multipliers are designed to represent your average week. You should not change your calorie intake on rest days unless you are following a specific calorie cycling protocol. For most people, it is best to eat the same amount of calories each day.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I know if I chose the right level?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The best way is to track your results. Eat at the maintenance calories suggested by the <a href="/tdee">TDEE Calculator</a> for 2-3 weeks. If your weight is stable, you chose correctly. If you are gaining or losing weight, adjust your intake or activity level accordingly. Use the <a href="/weekly-weight-change-tracker">Weekly Weight Change Tracker</a> for accurate monitoring.',
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
              <BreadcrumbPage>Daily Activity Level Estimator</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <Card>
          <CardHeader>
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 text-primary p-3 rounded-lg">
                <Bike className="h-8 w-8" />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold">
                  Daily Activity Level Estimator
                </h1>
                <p className="text-muted-foreground">
                  This guide helps you choose the correct activity multiplier, the most crucial step for an accurate <Link href="/tdee" className="text-primary hover:underline">TDEE calculation</Link>. Overestimating your activity level is the most common mistake in diet planning.
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
                Your Total Daily Energy Expenditure (TDEE) is found by multiplying your <Link href="/bmr" className="text-primary hover:underline">BMR</Link> by an activity factor. Use the descriptions below to find the one that best fits your lifestyle.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Activity Level Descriptions</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Activity Level</TableHead>
                  <TableHead>Multiplier</TableHead>
                  <TableHead>Description & Examples</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-semibold">Sedentary</TableCell>
                  <TableCell>1.2</TableCell>
                  <TableCell>Little to no formal exercise. A typical desk job with minimal walking.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-semibold">Lightly Active</TableCell>
                  <TableCell>1.375</TableCell>
                  <TableCell>Light exercise or sports 1-3 days per week (e.g., brisk walking, light jogging, yoga).</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-semibold">Moderately Active</TableCell>
                  <TableCell>1.55</TableCell>
                  <TableCell>Moderate exercise or sports 3-5 days per week (e.g., gym workouts, running, team sports). This is the most common category for people who exercise regularly.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-semibold">Very Active</TableCell>
                  <TableCell>1.725</TableCell>
                  <TableCell>Hard exercise or sports 6-7 days per week. Also applies to individuals with a physically demanding job.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-semibold">Extra Active</TableCell>
                  <TableCell>1.9</TableCell>
                  <TableCell>Very hard daily exercise or sports and a physical job (e.g., construction worker who also trains, professional athlete).</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Common Scenarios & Which to Choose</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-4 text-muted-foreground">
                <li>
                    <strong>"I have a desk job and go to the gym 4 times a week for an hour."</strong>
                    <br />
                    <span className="font-semibold text-foreground">Choose: Moderately Active.</span> Your job is sedentary, but your regular, moderate exercise brings your average up.
                </li>
                <li>
                    <strong>"I'm a nurse and I'm on my feet all day, but I don't do any formal exercise."</strong>
                    <br />
                    <span className="font-semibold text-foreground">Choose: Lightly Active or Moderately Active.</span> Being on your feet all day is a significant amount of activity. If your step count is consistently high (10k+), "Moderately Active" might be more accurate.
                </li>
                <li>
                    <strong>"I walk my dog for 30 minutes every day and do yoga twice a week."</strong>
                    <br />
                    <span className="font-semibold text-foreground">Choose: Lightly Active.</span> This describes consistent, but low-intensity, activity.
                </li>
                 <li>
                    <strong>"I lift heavy weights 5 days a week but otherwise I'm sedentary."</strong>
                    <br />
                    <span className="font-semibold text-foreground">Choose: Moderately Active.</span> Weight lifting burns calories and builds muscle, which boosts your <Link href="/bmr" className="text-primary hover:underline">BMR</Link>, but it's important not to overestimate the calorie burn from the lifting session itself.
                </li>
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
                    <AccordionTrigger>Why is choosing the right activity level so important?</AccordionTrigger>
                    <AccordionContent>Choosing the right activity level is the most critical step for an accurate TDEE calculation. Overestimating your activity is a very common mistake that leads to setting a calorie target that is too high, which can stall weight loss. Our <a href="/tdee">TDEE Calculator</a> depends on this value.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>What if I have a desk job but work out hard 5 days a week?</AccordionTrigger>
                    <AccordionContent>This is a common scenario. You would likely fall into the "Moderately Active" category. Your job is sedentary, but your frequent, intense exercise significantly raises your daily energy expenditure. The key is to look at your week as a whole.</AccordionContent>
                </AccordionItem>
                 <AccordionItem value="item-3">
                    <AccordionTrigger>Does Non-Exercise Activity Thermogenesis (NEAT) count?</AccordionTrigger>
                    <AccordionContent>Yes, absolutely. NEAT (calories burned from activities that are not formal exercise, like walking, fidgeting, or chores) is a huge part of your activity level. Someone with a high step count but no formal exercise might be more active than someone who works out but is sedentary otherwise. Estimate your NEAT burn with the <a href="/steps-to-calories">Steps to Calories Calculator</a>.</AccordionContent>
                </AccordionItem>
                 <AccordionItem value="item-4">
                    <AccordionTrigger>Should I use a different activity level on rest days?</AccordionTrigger>
                    <AccordionContent>No. The activity multipliers are designed to represent your average week. You should not change your calorie intake on rest days unless you are following a specific calorie cycling protocol. For most people, it is best to eat the same amount of calories each day.</AccordionContent>
                </AccordionItem>
                 <AccordionItem value="item-5">
                    <AccordionTrigger>How do I know if I chose the right level?</AccordionTrigger>
                    <AccordionContent>The best way is to track your results. Eat at the maintenance calories suggested by the <a href="/tdee">TDEE Calculator</a> for 2-3 weeks. If your weight is stable, you chose correctly. If you are gaining or losing weight, adjust your intake or activity level accordingly. Use the <a href="/weekly-weight-change-tracker">Weekly Weight Change Tracker</a> for accurate monitoring.</AccordionContent>
                </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Related Calculators</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/tdee" className="p-4 border rounded-lg hover:bg-muted">
              <h3 className="font-semibold">TDEE Calculator</h3>
              <p className="text-sm text-muted-foreground">The essential next step. Apply your chosen activity level here.</p>
            </Link>
            <Link href="/daily-calorie-needs" className="p-4 border rounded-lg hover:bg-muted">
              <h3 className="font-semibold">Daily Calorie Needs</h3>
              <p className="text-sm text-muted-foreground">A simplified version of the TDEE calculator that also uses this activity level.</p>
            </Link>
            <Link href="/bmr" className="p-4 border rounded-lg hover:bg-muted">
              <h3 className="font-semibold">BMR Calculator</h3>
              <p className="text-sm text-muted-foreground">Calculate the baseline of your metabolism, which is the first step before applying an activity multiplier.</p>
            </Link>
             <Link href="/steps-to-calories" className="p-4 border rounded-lg hover:bg-muted">
              <h3 className="font-semibold">Steps to Calories</h3>
              <p className="text-sm text-muted-foreground">Estimate your calorie burn from daily walking to better understand your NEAT.</p>
            </Link>
          </CardContent>
        </Card>

      </div>
    </>
  );
}
