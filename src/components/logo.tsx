
import Image from 'next/image';

export function Logo() {
  return (
    <div className="flex items-center gap-2" aria-label="Health and Fitness Calculators Hub">
      <Image src="/logo.png" alt="Health and Fitness Calculators Hub Logo" width={32} height={32} />
      <span className="text-lg font-bold tracking-tight text-foreground">
        Health & Fitness Calculators Hub
      </span>
    </div>
  );
}
