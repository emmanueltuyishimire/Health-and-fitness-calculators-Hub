import type { ReactNode } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Separator } from './ui/separator';

type CalculatorCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  children: ReactNode;
  result?: ReactNode;
  footer?: ReactNode;
  className?: string;
};

export function CalculatorCard({
  icon,
  title,
  description,
  children,
  result,
  footer,
  className,
}: CalculatorCardProps) {
  return (
    <Card className={cn('w-full max-w-2xl mx-auto', className)}>
      <CardHeader>
        <div className="flex flex-col sm:flex-row items-start gap-4">
          <div className="bg-primary/10 text-primary p-3 rounded-lg">
            {icon}
          </div>
          <div className="flex-1">
            <CardTitle className="font-headline text-2xl">{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>{children}</CardContent>
      {result && (
        <>
          <Separator className="my-4" />
          <CardFooter className="flex-col items-start gap-2 text-sm text-muted-foreground p-6 pt-0">
            {result}
          </CardFooter>
        </>
      )}
       {footer && (
        <>
          <Separator className="my-4" />
          <CardFooter className="p-6 pt-0">
            {footer}
          </CardFooter>
        </>
      )}
    </Card>
  );
}
