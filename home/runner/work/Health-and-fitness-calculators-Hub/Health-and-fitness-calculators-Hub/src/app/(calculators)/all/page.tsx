
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calculator, List } from 'lucide-react';
import Link from 'next/link';
import { calculatorGroups } from '@/lib/calculator-groups';

export default function AllCalculatorsPage() {
  return (
    <div className="w-full max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
      <div className="flex items-center gap-4 mb-8">
        <div className="bg-primary/10 text-primary p-3 rounded-lg">
            <List className="h-8 w-8" />
        </div>
        <div>
            <h1 className="text-3xl font-bold">All Calculators</h1>
            <p className="text-muted-foreground">A comprehensive list of all body composition and weight management calculators available.</p>
        </div>
      </div>
      <div className="space-y-8">
        {calculatorGroups.map((group) => (
          <Card key={group.title}>
            <CardHeader>
              <CardTitle>{group.title}</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {group.calculators.map((calc) => (
                <Link
                  href={calc.href}
                  key={calc.name}
                  className="group flex items-center gap-3 rounded-md p-3 text-sm font-medium border hover:bg-muted"
                  aria-label={`Navigate to ${calc.name}`}
                >
                  <Calculator className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
                  <span className="transition-colors group-hover:text-primary">{calc.name}</span>
                </Link>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
