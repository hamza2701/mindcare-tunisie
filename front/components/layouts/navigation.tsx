'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';
import { Heart } from 'lucide-react';

export function Navigation() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Heart className="h-6 w-6 text-primary" />
          <span className="text-lg font-bold">MindCare Tunisia</span>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-6 text-sm">
          <Link 
            href="#comment-ca-marche" 
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Comment ça marche
          </Link>
          <Link 
            href="#pour-les-therapeutes" 
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Pour les thérapeutes
          </Link>
          <Link 
            href="#contact" 
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* Auth Buttons & Theme Toggle */}
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <div className="hidden sm:flex items-center space-x-2">
            <Button variant="ghost" asChild>
              <Link href="/login">Se connecter</Link>
            </Button>
            <Button asChild>
              <Link href="/signup/patient">Rejoignez-nous</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
} 