

'use client';

import { usePathname } from 'next/navigation';
import {
  Anchor,
  BrainCircuit,
  Calculator,
  Flame,
  GitCommitHorizontal,
  List,
  Percent,
  Ruler,
  Scale,
  Sparkles,
  Square,
  Target,
  Weight,
  PersonStanding,
  Database,
  Bike,
  TrendingDown,
  TrendingUp,
  Flag,
  AreaChart,
  CalendarClock,
  PieChart,
  Egg,
  Droplets,
  Zap,
  Soup,
  GlassWater,
  ListChecks,
  Dumbbell,
  Medal,
  Activity,
  BedDouble,
} from 'lucide-react';
import { PiPersonArmsSpread } from "react-icons/pi";


import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import { Logo } from '@/components/logo';
import { useCalculator } from '@/context/calculator-context';
import { Label } from './ui/label';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import type { UnitSystem } from '@/context/calculator-context';
import Link from 'next/link';

const links = [
  { href: '/bmi', label: 'BMI Calculator', icon: Scale },
  { href: '/body-fat', label: 'Body Fat %', icon: Percent },
  { href: '/ideal-weight', label: 'Ideal Weight', icon: Target },
  { href: '/lean-body-mass', label: 'Lean Body Mass', icon: Weight },
  { href: '/ffmi', label: 'FFMI Calculator', icon: PiPersonArmsSpread },
  { href: '/bsa', label: 'Body Surface Area', icon: Square },
  { href: '/waist-to-height-ratio', label: 'Waist-to-Height Ratio', icon: Ruler },
  { href: '/waist-to-hip-ratio', label: 'Waist-to-Hip Ratio', icon: GitCommitHorizontal },
  { href: '/body-shape', label: 'Body Shape', icon: PersonStanding },
  { href: '/body-density', label: 'Body Density', icon: Database },
  { href: '/bmr', label: 'BMR Calculator', icon: Flame },
  { href: '/rmr', label: 'RMR Calculator', icon: BedDouble },
  { href: '/tdee', label: 'TDEE Calculator', icon: Bike },
  { href: '/daily-calorie-needs', label: 'Daily Calorie Needs', icon: Calculator },
  { href: '/calorie-adjustment-for-weight-loss', label: 'Calorie Adjustment (Loss)', icon: TrendingDown },
  { href: '/calorie-adjustment-for-weight-gain', label: 'Calorie Adjustment (Gain)', icon: TrendingUp },
  { href: '/calorie-maintenance', label: 'Calorie Maintenance', icon: Anchor },
  { href: '/macronutrient-ratio', label: 'Macronutrient Ratio', icon: PieChart },
  { href: '/protein-intake', label: 'Protein Intake', icon: Egg },
  { href: '/carb-intake', label: 'Carb Intake', icon: BrainCircuit },
  { href: '/fat-intake', label: 'Fat Intake', icon: Droplets },
  { href: '/water-intake', label: 'Water Intake', icon: GlassWater },
  { href: '/hydration-tracker', label: 'Hydration Tracker', icon: ListChecks },
  { href: '/calorie-burn-by-activity', label: 'Calorie Burn by Activity', icon: Zap },
  { href: '/meal-calorie-split', label: 'Meal Calorie Split', icon: Soup },
  { href: '/weight-loss-goal', label: 'Weight Loss Goal', icon: Flag },
  { href: '/weight-gain-goal', label: 'Weight Gain Goal', icon: Flag },
  { href: '/goal-weight-estimator', label: 'Goal Weight Estimator', icon: CalendarClock },
  { href: '/weight-change-tracker', label: 'Weekly Weight Tracker', icon: AreaChart },
  { href: '/fat-loss-tracker', label: 'Fat Loss Tracker', icon: Target },
  { href: '/one-rep-max', label: 'One Rep Max (1RM)', icon: Dumbbell },
  { href: '/strength-to-weight-ratio', label: 'Strength-to-Weight Ratio', icon: Medal },
  { href: '/vo2-max', label: 'VO2 Max Estimator', icon: Activity },
  { href: '/recommendations', label: 'AI Recommendations', icon: Sparkles },
  { href: '/all', label: 'All Calculators', icon: List },
];

export function SidebarNav() {
  const pathname = usePathname();
  const { state, dispatch } = useCalculator();

  const handleUnitChange = (value: string) => {
    dispatch({ type: 'SET_UNIT_SYSTEM', payload: value as UnitSystem });
  };

  return (
    <>
    <div className="md:hidden flex items-center p-2 border-b">
        <SidebarTrigger/>
        <div className="mx-auto">
            <Logo />
        </div>
    </div>
    <Sidebar>
      <SidebarHeader className="hidden md:flex">
        <Logo />
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {links.map((link) => (
            <SidebarMenuItem key={link.href}>
              <Link href={link.href} className="w-full">
                <SidebarMenuButton
                  isActive={pathname === link.href}
                  tooltip={link.label}
                >
                  <link.icon />
                  <span>{link.label}</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="hidden md:flex flex-col gap-4 p-4">
        <div>
          <Label className="mb-2 block px-2 text-xs text-muted-foreground">
            Unit System
          </Label>
          <RadioGroup
            value={state.unitSystem}
            onValueChange={handleUnitChange}
            className="flex"
          >
            <div className="flex flex-1 items-center space-x-2 rounded-md border p-2 hover:bg-accent hover:text-accent-foreground has-[[data-state=checked]]:border-primary has-[[data-state=checked]]:bg-primary/10">
              <RadioGroupItem value="metric" id="metric" />
              <Label htmlFor="metric" className="w-full cursor-pointer">
                Metric
              </Label>
            </div>
            <div className="flex flex-1 items-center space-x-2 rounded-md border p-2 hover:bg-accent hover:text-accent-foreground has-[[data-state=checked]]:border-primary has-[[data-state=checked]]:bg-primary/10">
              <RadioGroupItem value="imperial" id="imperial" />
              <Label htmlFor="imperial" className="w-full cursor-pointer">
                Imperial
              </Label>
            </div>
          </RadioGroup>
        </div>
      </SidebarFooter>
    </Sidebar>
    </>
  );
}
