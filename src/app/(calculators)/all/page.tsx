
import { CalculatorCard } from '@/components/calculator-card';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { List } from 'lucide-react';

const calculatorGroups = [
  {
    title: 'Core Body Composition',
    calculators: [
      { name: 'BMI Calculator' },
      { name: 'Body Fat Percentage Calculator' },
      { name: 'Lean Body Mass Calculator' },
      { name: 'Fat-Free Mass Index (FFMI)' },
      { name: 'Ideal Body Weight (IBW)' },
      { name: 'Body Surface Area (BSA)' },
      { name: 'Waist-to-Height Ratio' },
      { name: 'Waist-to-Hip Ratio' },
      { name: 'Body Shape Type Calculator' },
      { name: 'Body Density Calculator' },
    ],
  },
  {
    title: 'Weight Management & Goal Setting',
    calculators: [
      { name: 'Calorie Deficit Calculator' },
      { name: 'Calorie Surplus Calculator' },
      { name: 'TDEE Calculator' },
      { name: 'BMR Calculator' },
      { name: 'Weight Loss Goal Calculator' },
      { name: 'Weight Gain Goal Calculator' },
      { name: 'Calorie Maintenance Calculator' },
      { name: 'Weekly Weight Change Tracker' },
      { name: 'Fat Loss Progress Tracker' },
      { name: 'Goal Weight Estimator by Date' },
    ],
  },
  {
    title: 'Nutrition & Energy Balance',
    calculators: [
      { name: 'Daily Calorie Needs' },
      { name: 'Macronutrient Ratio Calculator' },
      { name: 'Protein Intake Calculator' },
      { name: 'Carb Intake Calculator' },
      { name: 'Fat Intake Calculator' },
      { name: 'Calorie Burn by Activity Calculator' },
      { name: 'Calorie Adjustment for Weight Goals' },
      { name: 'Meal Calorie Split Calculator' },
      { name: 'Water Intake Calculator' },
      { name: 'Hydration Tracker' },
    ],
  },
  {
    title: 'Fitness & Performance',
    calculators: [
      { name: 'One Rep Max (1RM) Calculator' },
      { name: 'Strength-to-Weight Ratio' },
      { name: 'VO2 Max Estimator' },
      { name: 'Resting Metabolic Rate (RMR)' },
      { name: 'Activity MET Value Calculator' },
      { name: 'Energy Expenditure per Step Calculator' },
      { name: 'Walking/Running Calorie Calculator' },
      { name: 'Daily Activity Level Estimator' },
      { name: 'Workout Calorie Tracker' },
      { name: 'Weekly Workout Load Calculator' },
    ],
  },
  {
    title: 'Health Risk Assessment',
    calculators: [
      { name: 'Obesity Risk Calculator' },
      { name: 'Metabolic Age Calculator' },
      { name: 'Heart Disease Risk (based on BMI)' },
      { name: 'Diabetes Risk by BMI' },
      { name: 'Body Fat Health Zone Classifier' },
      { name: 'Body Type Visualizer' },
      { name: 'Calorie-to-Weight Conversion' },
      { name: 'BMI Percentile for Age (Teens)' },
      { name: 'Pregnancy BMI Calculator' },
      { name: 'Postpartum Weight Recovery Calculator' },
    ],
  },
];

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
