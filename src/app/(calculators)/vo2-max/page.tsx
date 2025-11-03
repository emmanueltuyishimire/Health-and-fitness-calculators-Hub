
import type { Metadata } from 'next';
import Link from 'next/link';
import { Lung } from 'lucide-react';
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
import { Vo2MaxCalculatorForm } from '@/components/vo2-max-calculator-form';

export const metadata: Metadata = {
  title: 'VO2 Max Estimator – Assess Your Cardiovascular Fitness',
  description:
    'Estimate your VO2 max using your resting heart rate and age. Understand your cardiovascular fitness level and how it compares to others.',
  openGraph: {
    title: 'VO2 Max Estimator – Assess Your Cardiovascular Fitness',
    description:
      'Estimate your VO2 max using your resting heart rate and age. Understand your cardiovascular fitness level and how it compares to others.',
    type: 'website',
  },
};

export default function Vo2MaxPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'VO2 Max Estimator',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
    },
    description:
      'A free web-based calculator to estimate VO2 max from age and resting heart rate.',
  };

  const howToJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Estimate Your VO2 Max',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Enter Your Details',
        text: 'Input your age, gender, and resting heart rate (beats per minute).',
      },
      {
        '@type': 'HowToStep',
        name: 'Calculate',
        text: 'The calculator uses a formula based on maximal and resting heart rates to estimate your VO2 max.',
      },
    ],
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is VO2 Max?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'VO2 max is the maximum rate of oxygen your body can utilize during intense exercise. It is a key indicator of cardiovascular fitness and aerobic endurance. A higher VO2 max means your body is more efficient at using oxygen.',
        },
      },
      {
        '@type': 'Question',
        name: 'How can I improve my VO2 max?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The best way to improve your VO2 max is through consistent cardiovascular exercise. High-Intensity Interval Training (HIIT) and sustained endurance activities like running, cycling, and swimming are particularly effective.',
        },
      },
      {
        '@type': 'Question',
        name: 'How accurate is this calculator?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'This calculator provides an estimation based on population averages. True VO2 max testing requires specialized equipment in a lab setting. However, this tool is useful for tracking your progress over time.',
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
              <BreadcrumbPage>VO2 Max Estimator</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <Card>
          <CardHeader>
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 text-primary p-3 rounded-lg">
                <Lung className="h-8 w-8" />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold">
                  VO2 Max Estimator
                </h1>
                <p className="text-muted-foreground">
                  Estimate your cardiovascular fitness by calculating your VO2 max based on your age and resting heart rate.
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Vo2MaxCalculatorForm />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Understanding Your VO2 Max</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>VO2 max, or maximal oxygen uptake, is the single best measure of cardiovascular fitness. It represents the maximum amount of oxygen your body can consume and utilize during intense exercise. The higher your VO2 max, the more efficiently your body can deliver oxygen to your muscles, which is a key factor in endurance performance.</p>
            <h3 className="font-semibold text-lg text-foreground">VO2 Max Norms for Men (ml/kg/min)</h3>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Age</TableHead>
                        <TableHead>Excellent</TableHead>
                        <TableHead>Good</TableHead>
                        <TableHead>Average</TableHead>
                        <TableHead>Fair</TableHead>
                        <TableHead>Poor</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow><TableCell>18-25</TableCell><TableCell>> 60</TableCell><TableCell>52-60</TableCell><TableCell>47-51</TableCell><TableCell>42-46</TableCell><TableCell>{"< 42"}</TableCell></TableRow>
                    <TableRow><TableCell>26-35</TableCell><TableCell>> 56</TableCell><TableCell>49-56</TableCell><TableCell>43-48</TableCell><TableCell>39-42</TableCell><TableCell>{"< 39"}</TableCell></TableRow>
                    <TableRow><TableCell>36-45</TableCell><TableCell>> 51</TableCell><TableCell>45-51</TableCell><TableCell>40-44</TableCell><TableCell>35-39</TableCell><TableCell>{"< 35"}</TableCell></TableRow>
                    <TableRow><TableCell>46-55</TableCell><TableCell>> 45</TableCell><TableCell>41-45</TableCell><TableCell>36-40</TableCell><TableCell>32-35</TableCell><TableCell>{"< 32"}</TableCell></TableRow>
                    <TableRow><TableCell>56-65</TableCell><TableCell>> 41</TableCell><TableCell>38-41</TableCell><TableCell>33-37</TableCell><TableCell>30-32</TableCell><TableCell>{"< 30"}</TableCell></TableRow>
                    <TableRow><TableCell>65+</TableCell><TableCell>> 37</TableCell><TableCell>34-37</TableCell><TableCell>29-33</TableCell><TableCell>26-28</TableCell><TableCell>{"< 26"}</TableCell></TableRow>
                </TableBody>
            </Table>
             <h3 className="font-semibold text-lg text-foreground mt-4">VO2 Max Norms for Women (ml/kg/min)</h3>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Age</TableHead>
                        <TableHead>Excellent</TableHead>
                        <TableHead>Good</TableHead>
                        <TableHead>Average</TableHead>
                        <TableHead>Fair</TableHead>
                        <TableHead>Poor</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow><TableCell>18-25</TableCell><TableCell>> 56</TableCell><TableCell>47-56</TableCell><TableCell>42-46</TableCell><TableCell>38-41</TableCell><TableCell>{"< 38"}</TableCell></TableRow>
                    <TableRow><TableCell>26-35</TableCell><TableCell>> 52</TableCell><TableCell>45-52</TableCell><TableCell>39-44</TableCell><TableCell>35-38</TableCell><TableCell>{"< 35"}</TableCell></TableRow>
                    <TableRow><TableCell>36-45</TableCell><TableCell>> 45</TableCell><TableCell>39-45</TableCell><TableCell>35-38</TableCell><TableCell>31-34</TableCell><TableCell>{"< 31"}</TableCell></TableRow>
                    <TableRow><TableCell>46-55</TableCell><TableCell>> 40</TableCell><TableCell>35-40</TableCell><TableCell>32-34</TableCell><TableCell>28-31</TableCell><TableCell>{"< 28"}</TableCell></TableRow>
                    <TableRow><TableCell>56-65</TableCell><TableCell>> 37</TableCell><TableCell>32-37</TableCell><TableCell>28-31</TableCell><TableCell>25-27</TableCell><TableCell>{"< 25"}</TableCell></TableRow>
                    <TableRow><TableCell>65+</TableCell><TableCell>> 32</TableCell><TableCell>28-32</TableCell><TableCell>25-27</TableCell><TableCell>22-24</TableCell><TableCell>{"< 22"}</TableCell></TableRow>
                </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Frequently Asked Questions (FAQ)</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>What is VO2 Max?</AccordionTrigger>
                <AccordionContent>VO2 max is the maximum rate of oxygen your body can utilize during intense exercise. It is a key indicator of cardiovascular fitness and aerobic endurance. A higher VO2 max means your body is more efficient at using oxygen.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>How can I improve my VO2 max?</AccordionTrigger>
                <AccordionContent>The best way to improve your VO2 max is through consistent cardiovascular exercise. High-Intensity Interval Training (HIIT) and sustained endurance activities like running, cycling, and swimming are particularly effective. Improving your VO2 max will also lower the calories you burn for a given activity, which you can see in the <Link href="/calorie-burn-by-activity" className="text-primary hover:underline">Calorie Burn by Activity Calculator</Link>.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>How accurate is this calculator?</AccordionTrigger>
                <AccordionContent>This calculator provides an estimation based on population averages using a formula that relates resting and maximal heart rates. True VO2 max testing requires specialized equipment in a laboratory setting. However, this tool is very useful for tracking your progress over time as your resting heart rate improves.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Related Calculators</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/calorie-burn-by-activity" className="p-4 border rounded-lg hover:bg-muted">
              <h3 className="font-semibold">Calorie Burn by Activity</h3>
              <p className="text-sm text-muted-foreground">Estimate calories burned during your workouts.</p>
            </Link>
            <Link href="/tdee" className="p-4 border rounded-lg hover:bg-muted">
              <h3 className="font-semibold">TDEE Calculator</h3>
              <p className="text-sm text-muted-foreground">Ensure you're eating enough to fuel your endurance training.</p>
            </Link>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
