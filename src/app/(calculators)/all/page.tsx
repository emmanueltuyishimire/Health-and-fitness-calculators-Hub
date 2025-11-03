
import { CalculatorCard } from '@/components/calculator-card';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { List } from 'lucide-react';

const calculatorGroups = [
  {
    title: 'Core Body Composition',
    calculators: [
      { name: 'BMI Calculator', demand: 'Very High' },
      { name: 'Body Fat Percentage Calculator', demand: 'Very High' },
      { name: 'Lean Body Mass Calculator', demand: 'High' },
      { name: 'Fat-Free Mass Index (FFMI)', demand: 'High' },
      { name: 'Ideal Body Weight (IBW)', demand: 'High' },
      { name: 'Body Surface Area (BSA)', demand: 'Medium' },
      { name: 'Waist-to-Height Ratio', demand: 'High' },
      { name: 'Waist-to-Hip Ratio', demand: 'High' },
      { name: 'Body Shape Type Calculator', demand: 'Medium' },
      { name: 'Body Density Calculator', demand: 'Medium' },
    ],
  },
  {
    title: 'Weight Management & Goal Setting',
    calculators: [
      { name: 'Calorie Deficit Calculator', demand: 'Very High' },
      { name: 'Calorie Surplus Calculator', demand: 'High' },
      { name: 'TDEE Calculator', demand: 'Very High' },
      { name: 'BMR Calculator', demand: 'Very High' },
      { name: 'Weight Loss Goal Calculator', demand: 'High' },
      { name: 'Weight Gain Goal Calculator', demand: 'Medium' },
      { name: 'Calorie Maintenance Calculator', demand: 'Very High' },
      { name: 'Weekly Weight Change Tracker', demand: 'Medium' },
      { name: 'Fat Loss Progress Tracker', demand: 'Medium' },
      { name: 'Goal Weight Estimator by Date', demand: 'Medium' },
    ],
  },
  {
    title: 'Nutrition & Energy Balance',
    calculators: [
      { name: 'Daily Calorie Needs', demand: 'High' },
      { name: 'Macronutrient Ratio Calculator', demand: 'High' },
      { name: 'Protein Intake Calculator', demand: 'High' },
      { name: 'Carb Intake Calculator', demand: 'Medium' },
      { name: 'Fat Intake Calculator', demand: 'Medium' },
      { name: 'Calorie Burn by Activity Calculator', demand: 'High' },
      { name: 'Calorie Adjustment for Weight Goals', demand: 'Medium' },
      { name: 'Meal Calorie Split Calculator', demand: 'Medium' },
      { name: 'Water Intake Calculator', demand: 'Very High' },
      { name: 'Hydration Tracker', demand: 'Medium' },
    ],
  },
  {
    title: 'Fitness & Performance',
    calculators: [
      { name: 'One Rep Max (1RM) Calculator', demand: 'High' },
      { name: 'Strength-to-Weight Ratio', demand: 'Medium' },
      { name: 'VO2 Max Estimator', demand: 'Medium' },
      { name: 'Resting Metabolic Rate (RMR)', demand: 'Medium' },
      { name: 'Activity MET Value Calculator', demand: 'Medium' },
      { name: 'Energy Expenditure per Step Calculator', demand: 'High' },
      { name: 'Walking/Running Calorie Calculator', demand: 'Very High' },
      { name: 'Daily Activity Level Estimator', demand: 'Medium' },
      { name: 'Workout Calorie Tracker', demand: 'Medium' },
      { name: 'Weekly Workout Load Calculator', demand: 'Medium' },
    ],
  },
  {
    title: 'Health Risk Assessment',
    calculators: [
      { name: 'Obesity Risk Calculator', demand: 'High' },
      { name: 'Metabolic Age Calculator', demand: 'Medium' },
      { name: 'Heart Disease Risk (based on BMI)', demand: 'Medium' },
      { name: 'Diabetes Risk by BMI', demand: 'Medium' },
      { name: 'Body Fat Health Zone Classifier', demand: 'Medium' },
      { name: 'Body Type Visualizer', demand: 'Medium' },
      { name: 'Calorie-to-Weight Conversion', demand: 'Medium' },
      { name: 'BMI Percentile for Age (Teens)', demand: 'Medium' },
      { name: 'Pregnancy BMI Calculator', demand: 'Medium' },
      { name: 'Postpartum Weight Recovery Calculator', demand: 'Medium' },
    ],
  },
];

const getDemandVariant = (demand: string) => {
  switch (demand) {
    case 'Very High':
      return 'destructive';
    case 'High':
      return 'default';
    default:
      return 'secondary';
  }
};


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
                    <span>{calc.name}</span>
                    <Badge variant={getDemandVariant(calc.demand)}>{calc.demand}</Badge>
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
