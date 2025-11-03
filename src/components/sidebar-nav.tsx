'use client';

import { usePathname } from 'next/navigation';
import {
  Calculator,
  Flame,
  HeartPulse,
  Percent,
  Scale,
  Sparkles,
  Target,
} from 'lucide-react';

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
  { href: '/bmr', label: 'BMR Calculator', icon: Flame },
  { href: '/calorie-needs', label: 'Calorie Needs', icon: Calculator },
  { href: '/recommendations', label: 'AI Recommendations', icon: Sparkles },
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
