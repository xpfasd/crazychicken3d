"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Egg } from 'lucide-react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Egg className="h-8 w-8 text-orange-500" />
          <span className="font-orbitron text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-yellow-500">
            CRAZY CHICKEN 3D
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#features" className="font-medium hover:text-orange-500 transition-colors">
            Features
          </Link>
          <Link href="#gameplay" className="font-medium hover:text-orange-500 transition-colors">
            Gameplay
          </Link>
          <Link href="#characters" className="font-medium hover:text-orange-500 transition-colors">
            Characters
          </Link>
          <Link href="#testimonials" className="font-medium hover:text-orange-500 transition-colors">
            Reviews
          </Link>
          <Button 
            asChild 
            className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white"
          >
            <a href="https://crazychicken3d.com/" target="_blank" rel="noopener noreferrer">
              Play Now
            </a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <div className="w-6 flex flex-col gap-1">
            <span className={`block h-0.5 bg-current transition-transform duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block h-0.5 bg-current transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block h-0.5 bg-current transition-transform duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute w-full bg-white dark:bg-gray-900 shadow-lg transition-all duration-300 ease-in-out ${
        mobileMenuOpen ? 'max-h-screen py-4 opacity-100' : 'max-h-0 py-0 opacity-0 overflow-hidden'
      }`}>
        <nav className="container mx-auto px-4 flex flex-col gap-4">
          <Link 
            href="#features" 
            className="py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Features
          </Link>
          <Link 
            href="#gameplay" 
            className="py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Gameplay
          </Link>
          <Link 
            href="#characters" 
            className="py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Characters
          </Link>
          <Link 
            href="#testimonials" 
            className="py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Reviews
          </Link>
          <Button 
            asChild 
            className="mt-2 bg-gradient-to-r from-orange-500 to-yellow-500 text-white w-full"
          >
            <a href="https://crazychicken3d.com/" target="_blank" rel="noopener noreferrer">
              Play Now
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
}