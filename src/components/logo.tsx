
import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2" aria-label="Health and Fitness Calculators Hub Home">
      <img 
        src="/logo.png" 
        alt="Health and Fitness Calculators Hub Logo" 
        width="32" 
        height="32" 
        className="h-8 w-8"
      />
      <span className="hidden sm:inline-block text-lg font-bold tracking-tight text-foreground">
        Health & Fitness Calculators
      </span>
    </Link>
  );
}
