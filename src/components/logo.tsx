import Image from 'next/image';

export function Logo() {
  return (
    <div className="flex items-center gap-2" aria-label="Body Balance Logo">
      <Image src="/logo.png" alt="Body Balance Logo" width={32} height={32} />
      <span className="text-xl font-bold tracking-tight text-foreground">
        Body Balance
      </span>
    </div>
  );
}