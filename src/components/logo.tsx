
import Image from 'next/image';

const assetPrefix = process.env.NODE_ENV === 'production' ? '/Health-and-fitness-calculators-Hub' : '';

export function Logo() {
  return (
    <div className="flex items-center gap-2" aria-label="Health and Fitness Calculators Hub">
      <Image src={`${assetPrefix}/logo.png`} alt="Health and Fitness Calculators Hub Logo" width={32} height={32} priority />
      <span className="hidden sm:inline-block text-lg font-bold tracking-tight text-foreground">
        Health & Fitness Calculators
      </span>
    </div>
  );
}
