
import type { Metadata } from 'next';
import Link from 'next/link';
import { Activity } from 'lucide-react';
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
        name: 'Measure Resting Heart Rate',
        text: 'Measure your resting heart rate (RHR) in beats per minute, ideally in the morning after waking up.',
      },
      {
        '@type': 'HowToStep',
        name: 'Enter Your Details',
        text: 'Input your gender, age, and RHR into the calculator.',
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
          text: 'The best way to improve your VO2 max is through consistent cardiovascular exercise. High-Intensity Interval Training (HIIT) and sustained endurance activities like running, cycling, and swimming are particularly effective. This will also help lower your calorie burn for a given activity, which you can see in the <a href="/calorie-burn-by-activity">Calorie Burn by Activity Calculator</a>.',
        },
      },
      {
        '@type': 'Question',
        name: 'How accurate is this calculator?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'This calculator provides a reasonable estimation based on population averages derived from resting heart rate. However, true VO2 max testing requires specialized equipment in a lab setting. This tool is most useful for tracking your progress over time as your resting heart rate improves.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why does resting heart rate relate to VO2 max?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A lower resting heart rate is often a sign of a stronger, more efficient heart. A heart that can pump more blood with each beat (higher stroke volume) doesn\'t need to beat as often at rest. This efficiency is closely linked to higher aerobic capacity (VO2 max).',
        },
      },
      {
        '@type': 'Question',
        name: 'How does age affect VO2 max?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'VO2 max naturally declines with age, typically by about 10% per decade after the age of 30. However, regular endurance training can significantly slow this decline.',
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
                <Activity className="h-8 w-8" />
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
            <CardTitle>How to Use the VO2 Max Estimator</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>This calculator provides a simple way to estimate your VO2 max without a lab test. For the most accurate resting heart rate:</p>
            <ol className="list-decimal list-inside space-y-2">
                <li><strong>Measure in the Morning:</strong> The best time to measure your resting heart rate is right after you wake up, before getting out of bed.</li>
                <li><strong>Be Relaxed:</strong> Lie down for a few minutes before measuring. Don't measure after consuming caffeine or exercising.</li>
                <li><strong>Count for 30-60 Seconds:</strong> Place two fingers on your wrist or neck, count the beats for a full minute, or for 30 seconds and multiply by two.</li>
                <li><strong>Enter Your Data:</strong> Input your gender, age, and this resting heart rate into the form to get your estimate.</li>
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
                  <TableHead>Example Data</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow><TableCell>Gender</TableCell><TableCell>Male</TableCell></TableRow>
                <TableRow><TableCell>Age</TableCell><TableCell>40</TableCell></TableRow>
                <TableRow><TableCell>Resting Heart Rate</TableCell><TableCell>60 bpm</TableCell></TableRow>
                <TableRow><TableCell className="font-bold">Estimated VO2 Max</TableCell><TableCell className="font-bold">45.9 ml/kg/min</TableCell></TableRow>
                <TableRow>
                  <TableCell>Interpretation & Next Step</TableCell>
                  <TableCell>A VO2 max of 45.9 places this 40-year-old male in the "Good" category. To improve further, he could incorporate more high-intensity training into his routine. This increased fitness would also be reflected in the <Link href="/calorie-burn-by-activity" className="text-primary hover:underline">Calorie Burn by Activity</Link> calculator.</TableCell>
                </TableRow>
              </TableBody>
            </Table>
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
            <CardHeader><CardTitle>Common Mistakes</CardTitle></CardHeader>
            <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li><strong>Inaccurate Resting Heart Rate:</strong> Measuring your heart rate after coffee, exercise, or a stressful event will inflate the number and lead to an inaccurate VO2 max estimate.</li>
                    <li><strong>Treating the Estimate as Exact:</strong> This is a non-exercise-based prediction. A true VO2 max test involves maximal effort on a treadmill or bike. Use this as a convenient way to track trends.</li>
                    <li><strong>Not Re-calculating:</strong> As your fitness improves, your resting heart rate will likely decrease. You should recalculate your VO2 max every 1-2 months to reflect your new fitness level.</li>
                </ul>
            </CardContent>
        </Card>
        
        <Card>
            <CardHeader><CardTitle>Pro Tips & Quick Hacks</CardTitle></CardHeader>
            <CardContent>
                 <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li><strong>Focus on Lowering RHR:</strong> The most actionable way to improve your estimated VO2 max is to lower your resting heart rate through consistent cardio.</li>
                    <li><strong>Incorporate HIIT:</strong> High-Intensity Interval Training (e.g., 30 seconds sprint, 1 minute rest, repeat) is one of the most effective ways to boost VO2 max.</li>
                    <li><strong>Don't Neglect Low-Intensity Cardio:</strong> Long, slow-distance training also builds your aerobic base and improves heart efficiency. A good program includes both high and low-intensity work.</li>
                    <li><strong>Fuel Your Workouts:</strong> Ensure you have enough energy for endurance training by calculating your needs with the <Link href="/tdee" className="text-primary hover:underline">TDEE Calculator</Link>.</li>
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
              <AccordionItem value="item-4">
                <AccordionTrigger>Why does resting heart rate relate to VO2 max?</AccordionTrigger>
                <AccordionContent>A lower resting heart rate is often a sign of a stronger, more efficient heart. A heart that can pump more blood with each beat (higher stroke volume) doesn't need to beat as often at rest. This efficiency is closely linked to higher aerobic capacity (VO2 max).</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Does age affect VO2 max?</AccordionTrigger>
                <AccordionContent>VO2 max naturally declines with age, typically by about 10% per decade after the age of 30. However, regular endurance training can significantly slow this decline.</AccordionContent>
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
                            <TableCell>Runners/Cyclists</TableCell>
                            <TableCell>Track aerobic fitness improvements over a training cycle.</TableCell>
                            <TableCell><Link href="/calorie-burn-by-activity" className="text-primary hover:underline">Calorie Burn by Activity</Link></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>General Health</TableCell>
                            <TableCell>Monitor cardiovascular health and see the impact of starting a new exercise routine.</TableCell>
                             <TableCell><Link href="/tdee" className="text-primary hover:underline">TDEE Calculator</Link></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Fitness Coaches</TableCell>
                            <TableCell>Get a baseline metric for a new client's cardiovascular fitness.</TableCell>
                            <TableCell>N/A</TableCell>
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
              <p className="text-sm text-muted-foreground">Estimate calories burned during your cardio workouts.</p>
            </Link>
            <Link href="/tdee" className="p-4 border rounded-lg hover:bg-muted">
              <h3 className="font-semibold">TDEE Calculator</h3>
              <p className="text-sm text-muted-foreground">Ensure you're eating enough to fuel your endurance training.</p>
            </Link>
            <Link href="/bmr" className="p-4 border rounded-lg hover:bg-muted">
                <h3 className="font-semibold">BMR Calculator</h3>
                <p className="text-sm text-muted-foreground">A lower resting heart rate from improved fitness can impact your BMR.</p>
            </Link>
            <Link href="/body-fat" className="p-4 border rounded-lg hover:bg-muted">
                <h3 className="font-semibold">Body Fat Calculator</h3>
                <p className="text-sm text-muted-foreground">Lowering excess body fat can improve VO2 max.</p>
            </Link>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
