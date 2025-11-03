
import { CalculatorCard } from '@/components/calculator-card';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { List } from 'lucide-react';
import Link from 'next/link';

const calculatorGroups = [
  {
    title: 'Core Body Composition',
    calculators: [
      { name: 'BMI Calculator', href: '/bmi' },
      { name: 'Body Fat Percentage Calculator', href: '/body-fat' },
      { name: 'Lean Body Mass Calculator', href: '/lean-body-mass' },
      { name: 'Fat-Free Mass Index (FFMI)', href: '/ffmi' },
      { name: 'Ideal Body Weight (IBW)', href: '/ideal-weight' },
      { name: 'Body Surface Area (BSA)', href: '/bsa' },
      { name: 'Waist-to-Height Ratio', href: '/waist-to-height-ratio' },
      { name: 'Waist-to-Hip Ratio', href: '/waist-to-hip-ratio' },
      { name: 'Body Shape Type Calculator', href: '/body-shape' },
      { name: 'Body Density Calculator', href: '/body-density' },
    ],
  },
  {
    title: 'Weight Management & Goal Setting',
    calculators: [
      { name: 'Calorie Deficit Calculator', href: '/calorie-deficit' },
      { name: 'Calorie Surplus Calculator', href: '/calorie-surplus' },
      { name: 'TDEE Calculator', href: '/tdee' },
      { name: 'BMR Calculator', href: '/bmr' },
      { name: 'Weight Loss Goal Calculator', href: '/weight-loss-goal' },
      { name: 'Weight Gain Goal Calculator', href: '/weight-gain-goal' },
      { name: 'Calorie Maintenance Calculator', href: '/calorie-maintenance' },
      { name: 'Weekly Weight Change Tracker', href: '/weight-change-tracker' },
      { name: 'Fat Loss Progress Tracker', href: '/fat-loss-tracker' },
      { name: 'Goal Weight Estimator by Date', href: '/goal-weight-estimator' },
    ],
  },
  {
    title: 'Nutrition & Energy Balance',
    calculators: [
      { name: 'Daily Calorie Needs', href: '/calorie-needs' },
      { name: 'Macronutrient Ratio Calculator', href: '/macronutrient-ratio' },
      { name: 'Protein Intake Calculator', href: '/protein-intake' },
      { name: 'Carb Intake Calculator', href: '/carb-intake' },
      { name: 'Fat Intake Calculator', href: '/fat-intake' },
      { name: 'Calorie Burn by Activity Calculator', href: '/calorie-burn-by-activity' },
      { name: 'Calorie Adjustment for Weight Goals', href: '/calorie-adjustment' },
      { name: 'Meal Calorie Split Calculator', href: '/meal-calorie-split' },
      { name: 'Water Intake Calculator', href: '/water-intake' },
      { name: 'Hydration Tracker', href: '/hydration-tracker' },
    ],
  },
  {
    title: 'Fitness & Performance',
    calculators: [
      { name: 'One Rep Max (1RM) Calculator', href: '/one-rep-max' },
      { name: 'Strength-to-Weight Ratio', href: '/strength-to-weight-ratio' },
      { name: 'VO2 Max Estimator', href: '/vo2-max' },
      { name: 'Resting Metabolic Rate (RMR)', href: '/rmr' },
      { name: 'Activity MET Value Calculator', href: '/met-value' },
      { name: 'Energy Expenditure per Step Calculator', href: '/steps-to-calories' },
      { name: 'Walking/Running Calorie Calculator', href: '/walking-running-calories' },
      { name: 'Daily Activity Level Estimator', href: '/activity-level-estimator' },
      { name: 'Workout Calorie Tracker', href: '/workout-calorie-tracker' },
      { name: 'Weekly Workout Load Calculator', href: '/weekly-workout-load' },
    ],
  },
  {
    title: 'Health Risk Assessment',
    calculators: [
      { name: 'Obesity Risk Calculator', href: '/obesity-risk' },
      { name: 'Metabolic Age Calculator', href: '/metabolic-age' },
      { name: 'Heart Disease Risk (based on BMI)', href: '/heart-disease-risk' },
      { name: 'Diabetes Risk by BMI', href: '/diabetes-risk' },
      { name: 'Body Fat Health Zone Classifier', href: '/body-fat-zone' },
      { name: 'Body Type Visualizer', href: '/body-type-visualizer' },
      { name: 'Calorie-to-Weight Conversion', href: '/calorie-to-weight' },
      { name: 'BMI Percentile for Age (Teens)', href: '/bmi-percentile-teens' },
      { name: 'Pregnancy BMI Calculator', href: '/pregnancy-bmi' },
      { name: 'Postpartum Weight Recovery Calculator', href: '/postpartum-weight-recovery' },
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
                    <Link href={calc.href || '#'} className="hover:text-primary hover:underline">
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
