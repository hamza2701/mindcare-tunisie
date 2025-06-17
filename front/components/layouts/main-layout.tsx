'use client';

import { ReactNode } from 'react';
import { ThemeProvider } from '../theme-provider';
import { Navigation } from './navigation';
import { Footer } from './footer';

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="min-h-screen flex flex-col">
        {/* Navigation */}
        <Navigation />
        
        {/* Main Content */}
        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
} 