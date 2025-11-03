
import type { Metadata } from 'next';
import Link from 'next/link';
import { ClipboardList } from 'lucide-react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MetValueCalculatorForm } from '@/components/met-value-calculator-form';
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
  title: 'Activity MET Value Calculator – Look Up Exercise Intensity',
  description:
    'Find the Metabolic Equivalent of Task (MET) value for hundreds of physical activities. Understand the energy cost of exercise to better plan your workouts and estimate calorie burn.',
  openGraph: {
    title: 'Activity MET Value Calculator – Look Up Exercise Intensity',
    description:
      'Find the Metabolic Equivalent of Task (MET) value for hundreds of physical activities. Understand the energy cost of exercise to better plan your workouts and estimate calorie burn.',
    type: 'website',
  },
};

export default function MetValuePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Activity MET Value Calculator',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
    },
    description:
      'A free web-based reference tool to look up the Metabolic Equivalent of Task (MET) value for various physical activities.',
  };

  const howToJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Find an Activity\'s MET Value',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Search for an Activity',
        text: 'Use the search box to type in an activity you are interested in, such as "running" or "yoga".',
      },
      {
        '@type': 'HowToStep',
        name: 'Select from the List',
        text: 'Choose the specific activity from the filtered list.',
      },
      {
        '@type': 'HowToStep',
        name: 'View the MET Value',
        text: 'The calculator will display the corresponding MET value for the selected activity, which you can then use in our Calorie Burn by Activity Calculator.',
        url: '/calorie-burn-by-activity'
      },
    ],
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is a MET?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'MET stands for Metabolic Equivalent of Task. It\'s a unit that estimates the amount of energy used by the body during physical activity. 1 MET is the energy expenditure of sitting at rest. An activity with a MET of 5 requires five times the energy of sitting still.',
        },
      },
      {
        '@type': 'Question',
        name: 'How are MET values used?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'MET values are used in a formula along with your body weight and the duration of an activity to estimate the calories burned. You can use the MET value from this tool in our <a href="/calorie-burn-by-activity">Calorie Burn by Activity Calculator</a>.',
        },
      },
      {
        '@type': 'Question',
        name: 'Where do these MET values come from?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The MET values used in this calculator are derived from the Compendium of Physical Activities, a standardized system developed by researchers to classify activities by their energy intensity. It\'s a widely accepted scientific standard.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why do some activities have multiple MET values?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The energy cost of an activity often depends on its intensity. For example, "running" can range from a slow jog (low MET) to a fast sprint (high MET). This calculator lists different intensities to provide a more accurate value.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does MET relate to my BMR or TDEE?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '1 MET is roughly equivalent to your <a href="/bmr">Basal Metabolic Rate (BMR)</a>. The MET values of your daily activities are a component of your <a href="/tdee">Total Daily Energy Expenditure (TDEE)</a>, which is your total calorie burn for the day.',
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
              <BreadcrumbPage>Activity MET Value Calculator</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <Card>
          <CardHeader>
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 text-primary p-3 rounded-lg">
                <ClipboardList className="h-8 w-8" />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold">
                  Activity MET Value Calculator
                </h1>
                <p className="text-muted-foreground">
                  Look up the Metabolic Equivalent of Task (MET) value for a specific activity. This value represents the energy cost of an activity and is the foundation for estimating calorie burn in our <Link href="/calorie-burn-by-activity" className="text-primary hover:underline">Calorie Burn by Activity Calculator</Link>.
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <MetValueCalculatorForm />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>How to Use the MET Value Calculator</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              This tool serves as a quick reference to find the standardized energy cost of various physical activities.
            </p>
            <ol className="list-decimal list-inside space-y-2">
              <li><strong>Search for an Activity:</strong> Use the search box to find a specific activity like "cycling" or "weight lifting."</li>
              <li><strong>Select the Activity:</strong> Click on the desired activity from the list.</li>
              <li><strong>View the MET Value:</strong> The tool will display the MET value for that activity.</li>
              <li><strong>Use the Value:</strong> You can now take this MET value to the <Link href="/calorie-burn-by-activity" className="text-primary hover:underline">Calorie Burn by Activity Calculator</Link> to estimate your energy expenditure.</li>
            </ol>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Understanding METs</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <h3 className="font-semibold text-lg text-foreground">What is a Metabolic Equivalent of Task (MET)?</h3>
            <p>A MET is a ratio of your working metabolic rate relative to your resting metabolic rate. One MET is defined as the energy you use when you're resting or sitting still. An activity with a MET value of 4 means you're exerting four times the energy than you would if you were sitting still.</p>
            <p>This provides a simple, standardized way to measure the intensity of a physical activity. Your resting state is your baseline, or 1 MET, which is roughly equivalent to your <Link href="/bmr" className="text-primary hover:underline">BMR</Link>.</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Common Mistakes</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>Misjudging Intensity:</strong> Selecting "vigorous" when your effort was moderate. Be honest about your intensity to get a useful number for the <Link href="/calorie-burn-by-activity" className="text-primary hover:underline">Calorie Burn Calculator</Link>.</li>
              <li><strong>Applying it to All Body Types:</strong> MET values are standardized and don't account for individual differences in fitness level or body composition. A very fit person will burn fewer calories than a less fit person doing the same activity.</li>
              <li><strong>Confusing METs with Calories:</strong> A MET value is a multiplier, not a direct measure of calories burned.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Pro Tips & Quick Hacks</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>Compare Activities:</strong> Use this tool to compare the relative intensity of different workouts to help you plan your week.</li>
              <li><strong>Understand NEAT:</strong> Look up MET values for non-exercise activities like "walking for pleasure" (3.5 METs) to understand how much daily movement contributes to your <Link href="/tdee" className="text-primary hover:underline">TDEE</Link>.</li>
              <li><strong>Contextualize Your Workouts:</strong> Knowing the MET value helps you understand why a 30-minute HIIT class (e.g., 8-12 METs) feels much harder and burns more calories than a 30-minute walk (3-4 METs).</li>
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
                <AccordionTrigger>What is a MET?</AccordionTrigger>
                <AccordionContent>
                  MET stands for Metabolic Equivalent of Task. It's a unit that estimates the energy used by the body during physical activity. 1 MET is the energy expenditure of sitting at rest. An activity with a MET of 5 requires five times the energy of sitting still.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>How are MET values used?</AccordionTrigger>
                <AccordionContent>
                  MET values are used in a formula along with your body weight and activity duration to estimate calories burned. You can use the MET value from this tool in our <Link href="/calorie-burn-by-activity" className="text-primary hover:underline">Calorie Burn by Activity Calculator</Link>.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Where do these MET values come from?</AccordionTrigger>
                <AccordionContent>
                  The values are derived from the Compendium of Physical Activities, a standardized system developed by researchers to classify activities by energy intensity.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>How does MET relate to my BMR or TDEE?</AccordionTrigger>
                <AccordionContent>
                  1 MET is roughly equivalent to your <Link href="/bmr" className="text-primary hover:underline">Basal Metabolic Rate (BMR)</Link>. The MET values of your daily activities are a component of your <Link href="/tdee" className="text-primary hover:underline">Total Daily Energy Expenditure (TDEE)</Link>.
                </AccordionContent>
              </AccordionItem>
               <AccordionItem value="item-5">
                <AccordionTrigger>Why do some activities have multiple MET values?</AccordionTrigger>
                <AccordionContent>
                  The energy cost of an activity often depends on its intensity. For example, "running" can range from a slow jog (low MET) to a fast sprint (high MET). This calculator lists different intensities to provide a more accurate value.
                </AccordionContent>
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
                  <TableCell>Fitness Enthusiasts</TableCell>
                  <TableCell>Compare the intensity of different workouts to plan a varied training week.</TableCell>
                  <TableCell><Link href="/calorie-burn-by-activity" className="text-primary hover:underline">Calorie Burn Calculator</Link></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Health Professionals</TableCell>
                  <TableCell>Prescribe exercise of a certain intensity level to patients.</TableCell>
                  <TableCell>N/A</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Curious Individuals</TableCell>
                  <TableCell>Understand how much more energy daily activities like cleaning or gardening burn compared to sitting.</TableCell>
                  <TableCell><Link href="/tdee" className="text-primary hover:underline">TDEE Calculator</Link></TableCell>
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
            <Link href="/calorie-burn-by-activity" className="p-4 border rounded-lg hover:bg-muted">
              <h3 className="font-semibold">Calorie Burn by Activity</h3>
              <p className="text-sm text-muted-foreground">The essential next step. Use the MET value you found here to estimate your calorie burn.</p>
            </Link>
            <Link href="/tdee" className="p-4 border rounded-lg hover:bg-muted">
              <h3 className="font-semibold">TDEE Calculator</h3>
              <p className="text-sm text-muted-foreground">Understand your total daily calorie burn, which includes all your activities.</p>
            </Link>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
