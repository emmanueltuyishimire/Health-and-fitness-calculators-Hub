
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Calculator, CheckCircle, HeartPulse, Scale, SlidersHorizontal } from 'lucide-react';
import { calculatorGroups } from '@/lib/calculator-groups';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Health and Fitness Calculators Hub – Free, Accurate, and Easy',
  description: 'A comprehensive suite of free, easy-to-use health and fitness calculators designed to help you understand your body, own your health, and achieve your wellness goals.',
  openGraph: {
    title: 'Health and Fitness Calculators Hub – Free, Accurate, and Easy',
    description: 'A comprehensive suite of free, easy-to-use health and fitness calculators designed to help you understand your body, own your health, and achieve your wellness goals.',
    type: 'website',
  }
};

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: 'https://health.calculation.site/',
    name: 'Health and Fitness Calculators Hub',
    description: 'A comprehensive suite of free, easy-to-use health and fitness calculators designed to help you understand your body, own your health, and achieve your wellness goals.',
    publisher: {
      '@type': 'Organization',
      name: 'Calculation.site',
      logo: {
        '@type': 'ImageObject',
        url: 'https://health.calculation.site/logo.png',
      },
    },
  };
  
  return (
    <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Hero Section */}
        <section className="w-full py-24 md:py-32 lg:py-40">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Understand Your Body. Own Your Health.
              </h1>
              <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl">
                A comprehensive suite of free, easy-to-use health and fitness calculators designed to help you achieve your wellness goals.
              </p>
              <div className="mt-6">
                 <Link href="/all">
                  <Button size="lg">
                    Get Started <ArrowRight className="ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm">Key Features</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Why Choose Our Calculators?</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We provide accurate, science-backed tools in a user-friendly interface to empower your health journey.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center gap-2 text-center">
                <div className="rounded-full bg-primary/10 p-3 text-primary">
                  <HeartPulse className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-bold">Comprehensive Tools</h3>
                <p className="text-sm text-muted-foreground">From body composition to nutritional needs, find every calculator you need in one place.</p>
              </div>
              <div className="flex flex-col items-center gap-2 text-center">
                <div className="rounded-full bg-primary/10 p-3 text-primary">
                  <CheckCircle className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-bold">Accurate & Reliable</h3>
                <p className="text-sm text-muted-foreground">Our calculators use established formulas to provide you with trustworthy results.</p>
              </div>
              <div className="flex flex-col items-center gap-2 text-center">
                <div className="rounded-full bg-primary/10 p-3 text-primary">
                  <SlidersHorizontal className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-bold">Easy to Use</h3>
                <p className="text-sm text-muted-foreground">A clean, intuitive interface makes it simple to get the information you need, fast.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* All Calculators Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Explore Our Calculators</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Browse our comprehensive library of health and fitness tools, organized by category.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl space-y-12 py-12">
              {calculatorGroups.map((group) => (
                <div key={group.title}>
                  <h3 className="text-2xl font-bold mb-6">{group.title}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {group.calculators.map((calc) => (
                    <Link href={calc.href} key={calc.name} className="group flex items-center gap-3 rounded-md p-3 text-sm font-medium hover:bg-muted" aria-label={`Go to ${calc.name}`}>
                        <Calculator className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
                        <span className="transition-colors group-hover:text-primary">{calc.name}</span>
                    </Link>
                  ))}
                  </div>
                </div>
              ))}
            </div>
             <div className="text-center">
                <Link href="/all">
                    <Button size="lg" variant="outline">
                        View All On One Page <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </Link>
            </div>
          </div>
        </section>
    </>
  );
}
