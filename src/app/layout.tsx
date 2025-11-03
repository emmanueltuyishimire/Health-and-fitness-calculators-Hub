
import type {Metadata} from 'next';
import { PT_Sans } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Logo } from '@/components/logo';

const ptSans = PT_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-pt-sans',
});

const assetPrefix = process.env.NODE_ENV === 'production' ? '/Health-and-fitness-calculators-Hub' : '';

export const metadata: Metadata = {
  title: 'Health and Fitness Calculators Hub',
  description: 'Body Composition & Weight Management Calculators Hub',
  icons: {
    icon: `${assetPrefix}/favicon.ico`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=pub-3042223846300811"
          crossOrigin="anonymous"></script>
      </head>
      <body className={`${ptSans.variable} font-body antialiased`} suppressHydrationWarning>
        <div className="flex flex-col min-h-screen bg-background">
          <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
              <Logo />
              <Link href="/all">
                <Button variant="outline">
                  View All Calculators <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </header>

          <main className="flex-1">
            {children}
          </main>

          <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
            <p className="text-xs text-muted-foreground">&copy; 2025 <a href="https://calculation.site" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">calculation.site</a>. All rights reserved.</p>
            <nav className="sm:ml-auto flex flex-wrap gap-4 sm:gap-6">
              <a className="text-xs hover:underline underline-offset-4" href="https://calculation.site/about" target="_blank" rel="nofollow noopener noreferrer">
                About
              </a>
              <a className="text-xs hover:underline underline-offset-4" href="https://calculation.site/contact" target="_blank" rel="nofollow noopener noreferrer">
                Contact
              </a>
              <a className="text-xs hover:underline underline-offset-4" href="https://calculation.site/privacy-policy" target="_blank" rel="nofollow noopener noreferrer">
                Privacy Policy
              </a>
              <a className="text-xs hover:underline underline-offset-4" href="https://calculation.site/terms-and-conditions" target="_blank" rel="nofollow noopener noreferrer">
                Terms and Conditions
              </a>
              <a className="text-xs hover:underline underline-offset-4" href="https://calculation.site/disclaimer" target="_blank" rel="nofollow noopener noreferrer">
                Disclaimer
              </a>
              <a className="text-xs hover:underline underline-offset-4" href="https://calculation.site" target="_blank" rel="noopener noreferrer">
                Central Hub
              </a>
            </nav>
          </footer>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
