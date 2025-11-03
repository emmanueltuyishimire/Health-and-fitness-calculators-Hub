
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Sparkles, Scale, Percent, Flame } from 'lucide-react';
import { Logo } from '@/components/logo';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
          <Logo />
          <Link href="/all">
            <Button>
              Explore Calculators <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-20 md:py-32 lg:py-40 bg-gradient-to-b from-background to-muted/50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-1 lg:gap-12 xl:grid-cols-1">
              <div className="flex flex-col justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Understand Your Body. Own Your Health.
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl mx-auto">
                    A comprehensive suite of free, easy-to-use health and fitness calculators designed to help you achieve your wellness goals.
                  </p>
                </div>
                <div className="w-full max-w-sm mx-auto space-x-4">
                   <Link href="/all">
                    <Button size="lg">
                      Explore Calculators <ArrowRight className="ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Calculators Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Key Tools</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Calculators</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Get started with our most popular calculators to get a quick snapshot of your health and metabolic profile.
                </p>
              </div>
            </div>
            <div className="mx-auto grid grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-lg font-medium">BMI Calculator</CardTitle>
                  <Scale className="w-6 h-6 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Get a quick assessment of your weight status in relation to your height.</p>
                   <Link href="/bmi" className="text-sm font-semibold text-primary mt-4 inline-block">
                    Calculate Now <ArrowRight className="inline-block h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-lg font-medium">Body Fat %</CardTitle>
                  <Percent className="w-6 h-6 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Go beyond the scale and estimate your body composition (fat vs. lean mass).</p>
                   <Link href="/body-fat" className="text-sm font-semibold text-primary mt-4 inline-block">
                    Estimate Now <ArrowRight className="inline-block h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-lg font-medium">TDEE Calculator</CardTitle>
                  <Flame className="w-6 h-6 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Discover your total daily calorie needs to plan for weight loss, gain, or maintenance.</p>
                   <Link href="/tdee" className="text-sm font-semibold text-primary mt-4 inline-block">
                    Find Your TDEE <ArrowRight className="inline-block h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 Body Balance. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="/all">
            Calculators
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy Policy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
