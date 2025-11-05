
import { CalculatorCard } from '@/components/calculator-card';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { List } from 'lucide-react';
import Link from 'next/link';
import { calculatorGroups } from '@/lib/calculator-groups';

export default function AllCalculatorsPage() {
  return (
    <CalculatorCard
      icon={<List className="h-8 w-8" />}
      title="All Calculators"
      description="A comprehensive list of all body composition and weight management calculators available."
    >
      <div className="space-y-8">
        {calculatorGroups.map((group) => (
          <Card key={group.title}>
            <CardHeader>
              <CardTitle>{group.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {group.calculators.map((calc) => (
                  <li
                    key={calc.name}
                    className="flex justify-between items-center"
                  >
                    <Link href={calc.href} className="hover:text-primary hover:underline" aria-label={`Go to ${calc.name}`}>
                      {calc.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </CalculatorCard>
  );
}
