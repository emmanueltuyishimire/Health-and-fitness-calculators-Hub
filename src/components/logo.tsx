import { HeartPulse } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center gap-2" aria-label="Body Balance Logo">
      <div className="p-1.5 bg-primary rounded-lg text-primary-foreground">
        <HeartPulse className="h-5 w-5" />
      </div>
      <span className="text-xl font-bold tracking-tight text-foreground">
        Body Balance
      </span>
    </div>
  );
}
