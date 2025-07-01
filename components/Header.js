'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      {/* Top bar */}
      <div className="bg-primary text-white py-2 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>Call us: 01234 567890</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>hello@aiboffins.co.uk</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span className="text-accent font-medium">🇬🇧 UK-Based AI Experts</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg' 
            : 'bg-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <div className="font-montserrat font-bold text-2xl text-primary">
                AI <span className="text-accent">Boffins</span>
              </div>
              <div className="ml-2 text-xs text-muted-foreground hidden sm:block">
                by IT Boffins
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-gray-700 hover:text-primary transition-colors font-medium"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('solutions')}
                className="text-gray-700 hover:text-primary transition-colors font-medium"
              >
                Solutions
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="text-gray-700 hover:text-primary transition-colors font-medium"
              >
                Pricing
              </button>
              <button 
                onClick={() => scrollToSection('case-studies')}
                className="text-gray-700 hover:text-primary transition-colors font-medium"
              >
                Case Studies
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-primary transition-colors font-medium"
              >
                Contact
              </button>
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-accent hover:bg-accent/90 text-white font-medium"
              >
                Book Free Audit
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-primary transition-colors"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="px-4 py-6 space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="block w-full text-left text-gray-700 hover:text-primary transition-colors font-medium py-2"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('solutions')}
                className="block w-full text-left text-gray-700 hover:text-primary transition-colors font-medium py-2"
              >
                Solutions
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="block w-full text-left text-gray-700 hover:text-primary transition-colors font-medium py-2"
              >
                Pricing
              </button>
              <button 
                onClick={() => scrollToSection('case-studies')}
                className="block w-full text-left text-gray-700 hover:text-primary transition-colors font-medium py-2"
              >
                Case Studies
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left text-gray-700 hover:text-primary transition-colors font-medium py-2"
              >
                Contact
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="w-full bg-accent hover:bg-accent/90 text-white font-medium mt-4"
              >
                Book Free Audit
              </Button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}