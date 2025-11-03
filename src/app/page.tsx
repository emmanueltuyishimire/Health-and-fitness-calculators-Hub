
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Calculator, CheckCircle, HeartPulse, Scale, SlidersHorizontal } from 'lucide-react';
import { Logo } from '@/components/logo';
import { calculatorGroups } from '@/lib/calculator-groups';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
          <Logo />
          <Link href="/all">
            <Button>
              View All Calculators <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </header>

      <main className="flex-1">
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
                    <Link href={calc.href} key={calc.name} className="group flex items-center gap-3 rounded-md p-3 text-sm font-medium hover:bg-muted">
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
      </main>

      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2025 <a href="https://calculation.site" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">calculation.site</a>. All rights reserved.</p>
        <nav className="sm:ml-auto flex flex-wrap gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4" href="https://calculation.site/about" target="_blank" rel="nofollow noopener noreferrer">
            About
          </a>
          <a className="text-xs hover:underline underline-offset-4" href="https://calculation.site/contact" target="_blank" rel="nofollow noopener noreferrer">
            Contact
          </a>
          <a className="text-xs hover:underline underline-offset-4" href="https://calculation.site/privacy-policy" target="_blank" rel="nofollow noopener noreferrer">
            Privacy Policy
          </a>
           <a className="text-xs hover:underline underline-offset-4" href="https://calculation.site/terms-and-conditions" target="_blank" rel="nofollow noopener noreferrer">
            Terms and Conditions
          </a>
          <a className="text-xs hover:underline underline-offset-4" href="https://calculation.site/disclaimer" target="_blank" rel="nofollow noopener noreferrer">
            Disclaimer
          </a>
           <a className="text-xs hover:underline underline-offset-4" href="https://calculation.site" target="_blank" rel="noopener noreferrer">
            Central Hub
          </a>
        </nav>
      </footer>
    </div>
  );
}
