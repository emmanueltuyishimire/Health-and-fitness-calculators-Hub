
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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';


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
       {
        '@type': 'Question',
        name: 'How does tracking water intake help with weight loss?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Staying hydrated can boost your metabolism, as estimated by the <a href="/bmr">BMR Calculator</a>, and help you feel full, reducing the likelihood of overeating. Replacing sugary drinks with water is a simple way to cut calories from your diet, helping you achieve a <a href="/calorie-deficit">calorie deficit</a>.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does my hydration goal change if I\'m more active?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. The more you sweat, the more water you need to replace. Our <a href="/water-intake">Water Intake Calculator</a> accounts for activity level, but you should also listen to your body and drink more during and after exercise.',
        },
      }
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
            <CardTitle>Common Mistakes</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>Forgetting to Log:</strong> The biggest challenge with any tracker is consistency. Try to log your water immediately after drinking it.</li>
              <li><strong>One Size Fits All:</strong> Using a generic goal like "8 glasses a day" might not be right for you. Use the <Link href="/water-intake" className="text-primary hover:underline">Water Intake Calculator</Link> for a personalized target.</li>
              <li><strong>Ignoring Thirst:</strong> While tracking is great, don't forget to listen to your body. If you're thirsty, drink, even if you've already met your goal.</li>
              <li><strong>Only Tracking at the End of the Day:</strong> Trying to remember everything you drank at the end of the day is inaccurate. Log as you go for best results.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Pro Tips & Quick Hacks</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>Keep it Visible:</strong> Keep this tracker open in a pinned tab in your browser so it's always one click away.</li>
              <li><strong>Link it to a Habit:</strong> Drink and log a glass of water every time you check your email, or before every meal.</li>
              <li><strong>Use a Marked Bottle:</strong> Use a water bottle with time or volume markings. Each time you finish a section, log that amount in the tracker.</li>
              <li><strong>Challenge a Friend:</strong> Share your hydration goal with a friend and hold each other accountable.</li>
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
              <AccordionItem value="item-6">
                <AccordionTrigger>How does tracking water intake help with weight loss?</AccordionTrigger>
                <AccordionContent>Staying hydrated can boost your metabolism, as estimated by the <a href="/bmr">BMR Calculator</a>, and help you feel full, reducing the likelihood of overeating. Replacing sugary drinks with water is a simple way to cut calories from your diet, helping you achieve a <a href="/calorie-deficit">calorie deficit</a>.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7">
                <AccordionTrigger>Does my hydration goal change if I'm more active?</AccordionTrigger>
                <AccordionContent>Yes. The more you sweat, the more water you need to replace. Our <a href="/water-intake">Water Intake Calculator</a> accounts for activity level, but you should also listen to your body and drink more during and after exercise.</AccordionContent>
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
                  <TableCell>Office Workers</TableCell>
                  <TableCell>Use the tracker to combat afternoon fatigue by ensuring consistent hydration.</TableCell>
                  <TableCell>N/A</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Athletes</TableCell>
                  <TableCell>Monitor fluid intake to ensure peak performance and prevent dehydration during training.</TableCell>
                  <TableCell><Link href="/calorie-burn-by-activity" className="text-primary hover:underline">Calorie Burn by Activity</Link></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Anyone on a Diet</TableCell>
                  <TableCell>Use the tracker to ensure they are drinking enough water to manage hunger and support metabolism.</TableCell>
                  <TableCell><Link href="/calorie-deficit" className="text-primary hover:underline">Calorie Deficit</Link></TableCell>
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
