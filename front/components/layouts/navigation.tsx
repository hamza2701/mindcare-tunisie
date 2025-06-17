'use client';

import Link from 'next/link';
import { ThemeToggle } from '../theme-toggle';
import { Button } from '../ui/button';

export function Navigation() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <Link href="/" className="text-xl font-bold flex items-center gap-2">
          <span className="text-primary">♥</span>
          <span>MindCare Tunisia</span>
        </Link>
        
        <nav className="flex items-center gap-4">
          <Button variant="ghost" asChild>
            <Link href="/login">Se connecter</Link>
          </Button>
          <Button asChild>
            <Link href="/signup/patient">Rejoignez-nous</Link>
          </Button>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
} 