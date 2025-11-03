
import type { Metadata } from 'next';
import Link from 'next/link';
import { ListChecks } from 'lucide-react';
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
import { HydrationTrackerForm } from '@/components/hydration-tracker-form';

export const metadata: Metadata = {
  title: 'Hydration Tracker – Monitor Your Daily Water Intake',
  description:
    'Actively track your daily water consumption to ensure you meet your hydration goals. Monitor your progress and stay on top of your health and performance.',
  openGraph: {
    title: 'Hydration Tracker – Monitor Your Daily Water Intake',
    description:
      'Actively track your daily water consumption to ensure you meet your hydration goals. Monitor your progress and stay on top of your health and performance.',
    type: 'website',
  },
};

export default function HydrationTrackerPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Hydration Tracker',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
    },
    description:
      'A free web-based tool to track daily water intake against a hydration goal.',
  };

  const howToJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Track Your Daily Hydration',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Set Your Goal',
        text: 'First, determine your daily water intake goal. You can use our Water Intake Calculator for a personalized recommendation or set your own.',
        url: '/water-intake'
      },
      {
        '@type': 'HowToStep',
        name: 'Log Your Intake',
        text: 'As you drink water throughout the day, use the buttons to add the amount to your tracker.',
      },
      {
        '@type': 'HowToStep',
        name: 'Monitor Your Progress',
        text: 'The progress bar will show you how close you are to reaching your daily goal. Adjust your intake as needed.',
      },
    ],
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Why is it important to track water intake?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Tracking helps build awareness and ensures you meet your daily hydration needs. It turns a passive activity into a conscious habit, which is key for maintaining optimal energy, cognitive function, and physical performance.',
        },
      },
      {
        '@type': 'Question',
        name: 'What should my daily water intake goal be?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Your goal depends on your weight, activity level, and climate. Our <a href="/water-intake">Water Intake Calculator</a> provides a personalized starting point. A common general goal is 8 glasses (64 oz or about 2 liters) per day.',
        },
      },
      {
        '@type': 'Question',
        name: 'Should I only track plain water?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'While this tool is designed for water, all fluids contribute to your hydration. You can choose to log other beverages like tea, coffee, or even water-rich foods if you wish, but water should be your primary focus.',
        },
      },
      {
        '@type': 'Question',
        name: 'What\'s the best way to use this tracker?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Keep this page open in a tab on your phone or computer. After you finish a glass or bottle of water, quickly add it to the tracker. This helps build a consistent habit.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does this tracker save my progress?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'This is a simple, client-side tracker. Your progress will be saved as long as you keep the browser tab open, but it will reset if you close it or refresh the page. It is designed for daily use.',
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
              <BreadcrumbPage>Hydration Tracker</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <Card>
          <CardHeader>
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 text-primary p-3 rounded-lg">
                <ListChecks className="h-8 w-8" />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold">
                  Hydration Tracker
                </h1>
                <p className="text-muted-foreground">
                  Actively monitor your daily water intake to ensure you meet your hydration goals. First, set your daily target with the <Link href="/water-intake" className="text-primary hover:underline">Water Intake Calculator</Link>, then use this tool to track your progress.
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <HydrationTrackerForm />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>How to Use the Hydration Tracker</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>This interactive tool helps you visualize and achieve your daily water intake goal.</p>
            <ol className="list-decimal list-inside space-y-2">
              <li><strong>Set Your Goal:</strong> If you haven't already, use our <Link href="/water-intake" className="text-primary hover:underline">Water Intake Calculator</Link>. The result will be auto-filled here. You can also enter a custom goal.</li>
              <li><strong>Log Your Intake:</strong> Each time you drink a glass or bottle of water, click the corresponding button to add it to your daily total.</li>
              <li><strong>Track Your Progress:</strong> The progress bar shows how close you are to your goal. Aim to fill it by the end of the day.</li>
              <li><strong>Reset Daily:</strong> This tracker is designed for daily use. Refresh the page each morning to start a new day.</li>
            </ol>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>The Power of Tracking</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <h3 className="font-semibold text-lg text-foreground">From Unconscious to Conscious Habit</h3>
            <p>Drinking water is often an unconscious activity. By actively tracking it, you turn it into a conscious habit. This simple act of monitoring can dramatically increase your intake and help you build a routine that sticks. It provides visual feedback, which can be highly motivating and helps you understand your own patterns.</p>
             <p>Just as tracking calories with the <Link href="/daily-calorie-needs" className="text-primary hover:underline">Daily Calorie Needs</Link> calculator is key for weight management, tracking water is key for hydration management. What gets measured gets managed.</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Frequently Asked Questions (FAQ)</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
               <AccordionItem value="item-1">
                <AccordionTrigger>Why is it important to track water intake?</AccordionTrigger>
                <AccordionContent>Tracking helps build awareness and ensures you meet your daily hydration needs. It turns a passive activity into a conscious habit, which is key for maintaining optimal energy, cognitive function, and physical performance.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>What should my daily water intake goal be?</AccordionTrigger>
                <AccordionContent>Your goal depends on your weight, activity level, and climate. Our <a href="/water-intake">Water Intake Calculator</a> provides a personalized starting point. A common general goal is 8 glasses (64 oz or about 2 liters) per day.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Should I only track plain water?</AccordionTrigger>
                <AccordionContent>While this tool is designed for water, all fluids contribute to your hydration. You can choose to log other beverages like tea, coffee, or even water-rich foods if you wish, but water should be your primary focus.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>What's the best way to use this tracker?</AccordionTrigger>
                <AccordionContent>Keep this page open in a tab on your phone or computer. After you finish a glass or bottle of water, quickly add it to the tracker. This helps build a consistent habit.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Does this tracker save my progress?</AccordionTrigger>
                <AccordionContent>This is a simple, client-side tracker. Your progress will be saved as long as you keep the browser tab open, but it will reset if you close it or refresh the page. It is designed for daily use.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Related Calculators</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/water-intake" className="p-4 border rounded-lg hover:bg-muted">
              <h3 className="font-semibold">Water Intake Calculator</h3>
              <p className="text-sm text-muted-foreground">The essential first step. Set your daily hydration goal here.</p>
            </Link>
            <Link href="/daily-calorie-needs" className="p-4 border rounded-lg hover:bg-muted">
              <h3 className="font-semibold">Daily Calorie Needs Calculator</h3>
              <p className="text-sm text-muted-foreground">Hydration is a key component of overall energy and metabolism management.</p>
            </Link>
          </CardContent>
        </Card>

      </div>
    </>
  );
}
