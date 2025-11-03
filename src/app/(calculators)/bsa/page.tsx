import type { Metadata } from 'next';
import Link from 'next/link';
import { Square } from 'lucide-react';
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
import { BsaCalculatorForm } from '@/components/bsa-calculator-form';

export const metadata: Metadata = {
  title: 'Body Surface Area (BSA) Calculator',
  description:
    'Calculate your Body Surface Area (BSA), a critical metric used in medicine for drug dosage and physiological assessment. Understand its importance beyond standard body composition metrics.',
  openGraph: {
    title: 'Body Surface Area (BSA) Calculator',
    description:
      'Calculate your Body Surface Area (BSA), a critical metric used in medicine for drug dosage and physiological assessment. Understand its importance beyond standard body composition metrics.',
    type: 'website',
  },
};

export default function BsaPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Body Surface Area (BSA) Calculator',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
    },
    description:
      'A free web-based calculator to determine Body Surface Area (BSA) using the Du Bois formula.',
  };

  const howToJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Calculate Your Body Surface Area',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Select Units',
        text: 'Choose between Metric (cm, kg) or Imperial (in, lbs) units.',
      },
      {
        '@type': 'HowToStep',
        name: 'Enter Height and Weight',
        text: 'Input your current height and weight.',
      },
      {
        '@type': 'HowToStep',
        name: 'Calculate BSA',
        text: 'Click the "Calculate BSA" button to see your result in square meters (m²).',
      },
    ],
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is Body Surface Area (BSA) and why is it important?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Body Surface Area (BSA) is the total surface area of the human body. It\'s a critical parameter in medicine, especially for calculating chemotherapy drug dosages and assessing kidney function, as it often correlates better with metabolic rate than body weight alone. You can compare this to your metabolic rate using our <a href="/bmr">BMR Calculator</a>.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does BSA differ from BMI?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'BSA measures the total surface area of your body, while the <a href="/bmi">BMI Calculator</a> provides a ratio of your weight to the square of your height. BSA is used for clinical and physiological assessments, whereas BMI is a general screening tool for weight categories.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which formula does this calculator use?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'This calculator uses the Du Bois formula, one of the most widely recognized and validated methods for estimating BSA. It is considered a standard in many clinical settings.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I use BSA for fitness purposes?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'While BSA is primarily a medical metric, it can provide context about your body size. For fitness-focused goals like muscle gain or fat loss, metrics from the <a href="/ffmi">FFMI Calculator</a> or <a href="/body-fat">Body Fat Percentage Calculator</a> are more practical.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does a higher BSA mean I need more calories?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Generally, yes. A larger body surface area often corresponds to a higher metabolic rate, meaning you burn more calories at rest. This is reflected in the formulas used by our <a href="/bmr">BMR Calculator</a>, which also considers height and weight.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is a "normal" BSA value?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'An average adult male has a BSA of about 1.9 m², and an average adult female about 1.6 m². However, there isn\'t a "normal" range in the same way as BMI or body fat. It is a direct measure of size. Your <a href="/ideal-weight">Ideal Weight Calculator</a> result can give you context on average weight for your height.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does body shape affect BSA?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'BSA formulas are estimations that assume a relatively standard body shape. Extreme variations in body composition (e.g., very high muscle mass or obesity) can affect accuracy slightly, but it remains a robust clinical tool.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is BSA useful for tracking weight loss progress?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'As you lose weight, your BSA will decrease. However, for tracking body composition changes, the <a href="/lean-body-mass">Lean Body Mass Calculator</a> and <a href="/body-fat">Body Fat Percentage Calculator</a> are far more effective tools.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why is BSA used for drug dosages?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'BSA is used because it provides a better estimate of metabolic mass than body weight alone, which can be skewed by fat. This allows for more precise dosing of sensitive medications, especially in oncology. This relates to how your body uses energy, a concept explored in our <a href="/calorie-needs">Daily Calorie Needs Calculator</a>.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does age or gender affect the BSA formula?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The Du Bois formula itself does not include age or gender as direct inputs. It calculates BSA based purely on height and weight, making it a universal anthropometric measurement.',
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
              <BreadcrumbPage>BSA Calculator</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <Card>
          <CardHeader>
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 text-primary p-3 rounded-lg">
                <Square className="h-8 w-8" />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold">
                  Body Surface Area (BSA) Calculator
                </h1>
                <p className="text-muted-foreground">
                  Estimate your Body Surface Area (BSA), a key anthropometric measurement used primarily in medicine for calculating drug dosages and assessing physiological functions. While less common in fitness, it provides another layer of understanding your body size beyond metrics like <Link href="/bmi" className="text-primary hover:underline">BMI</Link>.
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <BsaCalculatorForm />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>How to Use the BSA Calculator</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              This calculator uses the Du Bois formula, a widely accepted method for estimating BSA. Follow these simple steps:
            </p>
            <ol className="list-decimal list-inside space-y-2">
              <li><strong>Select Your Units:</strong> Choose between "Metric" (cm, kg) or "Imperial" (in, lbs).</li>
              <li><strong>Enter Your Height and Weight:</strong> Input your current height and weight into the designated fields.</li>
              <li><strong>Calculate BSA:</strong> Click the button to get your estimated Body Surface Area in square meters (m²). This value can provide context for your energy needs, which you can explore with the <Link href="/bmr" className="text-primary hover:underline">BMR Calculator</Link>.</li>
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
                  <TableHead>Example 1 (Metric)</TableHead>
                  <TableHead>Example 2 (Imperial)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Height</TableCell>
                  <TableCell>175 cm</TableCell>
                  <TableCell>5 ft 10 in (70")</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Weight</TableCell>
                  <TableCell>75 kg</TableCell>
                  <TableCell>165 lbs</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-bold">Calculated BSA</TableCell>
                  <TableCell className="font-bold">1.94 m²</TableCell>
                  <TableCell className="font-bold">1.93 m²</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Interpretation & Next Step</TableCell>
                  <TableCell>This person has a BSA of 1.94 m², typical for an average adult male. This larger surface area is a factor in their total energy expenditure, which can be estimated with the <Link href="/calorie-needs" className="text-primary hover:underline">Daily Calorie Needs Calculator</Link>.</TableCell>
                  <TableCell>The result of 1.93 m² is very similar. While BSA is a clinical measure, for fitness, a more useful next step is to calculate <Link href="/body-fat" className="text-primary hover:underline">Body Fat Percentage</Link> to understand body composition.</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Understanding Body Surface Area (BSA)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <h3 className="font-semibold text-lg text-foreground">What is BSA?</h3>
            <p>
              Body Surface Area (BSA) is the measured or calculated surface area of a human body. For many physiological and clinical purposes, BSA is a better indicator of metabolic mass than body weight because it is less affected by abnormal adipose mass. While metrics like <Link href="/bmi" className="text-primary hover:underline">BMI</Link> are used for population-level health screening, BSA provides a more nuanced measure used in specific clinical contexts.
            </p>

            <h3 className="font-semibold text-lg text-foreground">The Du Bois Formula</h3>
            <p>Our calculator uses the Du Bois and Du Bois formula from 1916, which remains one of the most widely used methods for estimating BSA:</p>
            <p className="font-mono text-center p-4 bg-muted rounded-md">BSA (m²) = 0.007184 × Height (cm)⁰.⁷²⁵ × Weight (kg)⁰.⁴²⁵</p>
            <p>This formula highlights that BSA is a function of both height and weight, but not in a linear fashion. It has been proven to be a reliable estimate across a wide range of body sizes.</p>

            <h3 className="font-semibold text-lg text-foreground">Clinical and Physiological Significance</h3>
            <p>
              BSA's primary application is in medicine. For example, chemotherapy drug doses are often prescribed per square meter (mg/m²) of BSA. This is because BSA is a better proxy for cardiac output, glomerular filtration rate, and other key physiological parameters than body weight alone. A person with a higher <Link href="/lean-body-mass" className="text-primary hover:underline">Lean Body Mass</Link> will generally have a higher metabolic rate, and BSA helps to account for this.
            </p>
            <p>
              In physiology, BSA is related to thermoregulation, as the body's surface is where heat is exchanged with the environment. A larger surface area can mean greater heat loss in cold environments and greater heat gain in hot environments. This is one reason why your <Link href="/bmr" className="text-primary hover:underline">Basal Metabolic Rate</Link> is influenced by your overall body size.
            </p>
            <p>While not a primary tool for fitness, understanding your BSA can add to a holistic view of your body. For instance, a change in BSA over time directly reflects a change in your physical size, though it doesn't specify whether that change is muscle or fat. For that level of detail, the <Link href="/ffmi" className="text-primary hover:underline">FFMI Calculator</Link> is a superior tool.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Common Mistakes When Using a BSA Calculator</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>Unit Errors:</strong> Mixing up metric and imperial units is a common mistake. Ensure your height and weight are entered in the correct system.</li>
              <li><strong>Using it for Fitness Goals:</strong> BSA is not a goal-oriented metric for fitness. Don't try to increase or decrease your BSA. Instead, focus on metrics like <Link href="/body-fat" className="text-primary hover:underline">Body Fat Percentage</Link>.</li>
              <li><strong>Over-interpreting the Result:</strong> Unlike BMI, there's no "overweight" or "underweight" category for BSA. It's simply a measure of size. Context is better provided by the <Link href="/ideal-weight" className="text-primary hover:underline">Ideal Weight Calculator</Link>.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Pro Tips & Quick Hacks</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>Clinical Context is Key:</strong> The primary value of BSA is for healthcare providers. If a doctor mentions your BSA, it's likely in the context of a specific medical calculation.</li>
              <li><strong>Pair with BMR:</strong> Use your BSA result to conceptually understand why your <Link href="/bmr" className="text-primary hover:underline">Basal Metabolic Rate</Link> is what it is. A larger body (higher BSA) requires more energy.</li>
              <li><strong>For Athletes:</strong> While <Link href="/ffmi" className="text-primary hover:underline">FFMI</Link> is a better tool for muscularity, BSA can be interesting for endurance athletes, as it relates to heat dissipation during long events.</li>
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
                <AccordionTrigger>What is Body Surface Area (BSA) and why is it important?</AccordionTrigger>
                <AccordionContent>Body Surface Area (BSA) is the total surface area of the human body. It's a critical parameter in medicine, especially for calculating chemotherapy drug dosages and assessing kidney function, as it often correlates better with metabolic rate than body weight alone. You can compare this to your metabolic rate using our <Link href="/bmr" className="text-primary hover:underline">BMR Calculator</Link>.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>How does BSA differ from BMI?</AccordionTrigger>
                <AccordionContent>BSA measures the total surface area of your body, while the <Link href="/bmi" className="text-primary hover:underline">BMI Calculator</Link> provides a ratio of your weight to the square of your height. BSA is used for clinical and physiological assessments, whereas BMI is a general screening tool for weight categories.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Which formula does this calculator use?</AccordionTrigger>
                <AccordionContent>This calculator uses the Du Bois formula, one of the most widely recognized and validated methods for estimating BSA. It is considered a standard in many clinical settings.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Can I use BSA for fitness purposes?</AccordionTrigger>
                <AccordionContent>While BSA is primarily a medical metric, it can provide context about your body size. For fitness-focused goals like muscle gain or fat loss, metrics from the <Link href="/ffmi" className="text-primary hover:underline">FFMI Calculator</Link> or <a href="/body-fat" className="text-primary hover:underline">Body Fat Percentage Calculator</a> are more practical.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Does a higher BSA mean I need more calories?</AccordionTrigger>
                <AccordionContent>Generally, yes. A larger body surface area often corresponds to a higher metabolic rate, meaning you burn more calories at rest. This is reflected in the formulas used by our <Link href="/bmr" className="text-primary hover:underline">BMR Calculator</Link>, which also considers height and weight.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger>What is a "normal" BSA value?</AccordionTrigger>
                <AccordionContent>An average adult male has a BSA of about 1.9 m², and an average adult female about 1.6 m². However, there isn't a "normal" range in the same way as BMI or body fat. It is a direct measure of size. Your <Link href="/ideal-weight" className="text-primary hover:underline">Ideal Weight Calculator</Link> result can give you context on average weight for your height.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7">
                <AccordionTrigger>How does body shape affect BSA?</AccordionTrigger>
                <AccordionContent>BSA formulas are estimations that assume a relatively standard body shape. Extreme variations in body composition (e.g., very high muscle mass or obesity) can affect accuracy slightly, but it remains a robust clinical tool.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-8">
                <AccordionTrigger>Is BSA useful for tracking weight loss progress?</AccordionTrigger>
                <AccordionContent>As you lose weight, your BSA will decrease. However, for tracking body composition changes, the <Link href="/lean-body-mass" className="text-primary hover:underline">Lean Body Mass Calculator</Link> and <a href="/body-fat" className="text-primary hover:underline">Body Fat Percentage Calculator</a> are far more effective tools.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-9">
                <AccordionTrigger>Why is BSA used for drug dosages?</AccordionTrigger>
                <AccordionContent>BSA is used because it provides a better estimate of metabolic mass than body weight alone, which can be skewed by fat. This allows for more precise dosing of sensitive medications, especially in oncology. This relates to how your body uses energy, a concept explored in our <Link href="/calorie-needs" className="text-primary hover:underline">Daily Calorie Needs Calculator</Link>.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-10">
                <AccordionTrigger>Does age or gender affect the BSA formula?</AccordionTrigger>
                <AccordionContent>The Du Bois formula itself does not include age or gender as direct inputs. It calculates BSA based purely on height and weight, making it a universal anthropometric measurement.</AccordionContent>
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
                  <TableCell>Medical Professionals</TableCell>
                  <TableCell>Calculate drug dosages, particularly in chemotherapy.</TableCell>
                  <TableCell>N/A (Clinical Use)</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Physiologists</TableCell>
                  <TableCell>Assess metabolic rate and thermoregulation in research.</TableCell>
                  <TableCell><Link href="/bmr" className="text-primary hover:underline">BMR Calculator</Link></TableCell>
                </TableRow>
                 <TableRow>
                  <TableCell>Health Enthusiasts</TableCell>
                  <TableCell>Gain a deeper understanding of overall body size.</TableCell>
                  <TableCell><Link href="/bmi" className="text-primary hover:underline">BMI Calculator</Link></TableCell>
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
              href="/bmi"
              className="p-4 border rounded-lg hover:bg-muted"
            >
              <h3 className="font-semibold">BMI Calculator</h3>
              <p className="text-sm text-muted-foreground">
                Compare your body size with a population-level health metric.
              </p>
            </Link>
            <Link
              href="/bmr"
              className="p-4 border rounded-lg hover:bg-muted"
            >
              <h3 className="font-semibold">BMR Calculator</h3>
              <p className="text-sm text-muted-foreground">
                Understand how your body size (BSA) influences your resting metabolism.
              </p>
            </Link>
            <Link
              href="/lean-body-mass"
              className="p-4 border rounded-lg hover:bg-muted"
            >
              <h3 className="font-semibold">Lean Body Mass Calculator</h3>
              <p className="text-sm text-muted-foreground">
                Differentiate your body size from your actual muscle and organ mass.
              </p>
            </Link>
             <Link
              href="/ideal-weight"
              className="p-4 border rounded-lg hover:bg-muted"
            >
              <h3 className="font-semibold">Ideal Weight Calculator</h3>
              <p className="text-sm text-muted-foreground">
                Get a healthy weight range based on your height.
              </p>
            </Link>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
