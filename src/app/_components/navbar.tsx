"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Github, Menu, X } from 'lucide-react';
import { ModeToggle } from './ThemeToggle';
import { useRouter } from "next/navigation"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/80 backdrop-blur-md border-b border-border' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Github className="h-8 w-8 text-orange-500" />
            <span className="font-bold text-xl">GitMind.ai</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-foreground hover:text-orange-500 transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-foreground hover:text-orange-500 transition-colors">
              How it Works
            </a>
            <a href="#testimonials" className="text-foreground hover:text-orange-500 transition-colors">
              Testimonials
            </a>
            <a href="#faq" className="text-foreground hover:text-orange-500 transition-colors">
              FAQ
            </a>
          </div>

          {/* Right side actions */}
          <div className="hidden md:flex items-center space-x-4">
            <ModeToggle />
            <Button onClick={()=> router.push("/sign-in")} variant="ghost" size="sm">
              Sign In
            </Button>
            <Button onClick={()=> router.push("/sign-up")} size="sm" className="bg-orange-500 hover:bg-orange-600">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center space-x-2 md:hidden">
            <ModeToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b border-border shadow-lg">
            <div className="px-4 py-6 space-y-4">
              <a 
                href="#features" 
                className="block text-foreground hover:text-orange-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="#how-it-works" 
                className="block text-foreground hover:text-orange-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                How it Works
              </a>
              <a 
                href="#testimonials" 
                className="block text-foreground hover:text-orange-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </a>
              <a 
                href="#faq" 
                className="block text-foreground hover:text-orange-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </a>
              <div className="flex flex-col space-y-2 pt-4 border-t border-border">
                <Button variant="ghost" size="sm">
                  Sign In
                </Button>
                <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}