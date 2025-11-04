import Link from 'next/link';
import { Sparkles } from 'lucide-react';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2" aria-label="Health and Fitness Calculators Hub Home">
      <div className="p-2 bg-primary rounded-md text-primary-foreground">
        <Sparkles className="h-4 w-4" />
      </div>
      <span className="hidden sm:inline-block text-lg font-bold tracking-tight text-foreground">
        Health & Fitness Calculators
      </span>
    </Link>
  );
}
