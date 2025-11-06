
import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2" aria-label="Health and Fitness Calculators Hub Home">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-8 w-8 text-primary"
      >
        <path d="M4.5 12.5l3-3-3-3" />
        <path d="M19.5 12.5l-3-3 3-3" />
        <path d="M12 21v-4" />
        <path d="M12 11V3" />
        <path d="M10 12H3" />
        <path d="M21 12h-7" />
        <path d="M12 17a5 5 0 100-10 5 5 0 000 10z" />
      </svg>
      <span className="hidden sm:inline-block text-lg font-bold tracking-tight text-foreground">
        Health & Fitness Calculators
      </span>
    </Link>
  );
}
