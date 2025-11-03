
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { SidebarNav } from '@/components/sidebar-nav';
import { CalculatorProvider } from '@/context/calculator-context';

export default function CalculatorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CalculatorProvider>
      <SidebarProvider>
        <SidebarNav />
        <SidebarInset>
            {children}
        </SidebarInset>
      </SidebarProvider>
    </CalculatorProvider>
  );
}
