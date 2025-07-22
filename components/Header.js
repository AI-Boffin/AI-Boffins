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
            <span className="text-accent font-medium">🇬🇧 Empowering UK Workers</span>
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
              <svg 
                className="h-14 w-auto cursor-pointer"
                viewBox="0 0 400 150" 
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* White circular background */}
                <circle cx="200" cy="75" r="90" fill="#ffffff" />
                
                {/* Letters AI Boffins styled individually */}
                <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle"
                      fontFamily="'Poppins', sans-serif" fontSize="60" fontWeight="900" letterSpacing="-8">
                  <tspan fill="rgb(30, 75, 124)">A</tspan>
                  <tspan fill="#FFAA00">I</tspan>
                  <tspan fill="rgb(45, 190, 127)">B</tspan>
                  <tspan fill="rgb(30, 75, 124)">offins</tspan>
                </text>
                
                {/* Spiral Overlay */}
                <circle id="spiral" cx="200" cy="75" r="0" fill="none" stroke="#00F0FF" strokeWidth="10" opacity="0" />
                
                <style>
                  {`
                    svg:hover #spiral {
                      animation: spiral-out 2s ease forwards;
                    }
                    @keyframes spiral-out {
                      0% {
                        r: 0;
                        opacity: 0.7;
                        stroke: rgb(30, 75, 124);
                      }
                      33% {
                        r: 50;
                        opacity: 0.5;
                        stroke: rgb(45, 190, 127);
                      }
                      66% {
                        r: 100;
                        opacity: 0.3;
                        stroke: #FFAA00;
                      }
                      100% {
                        r: 150;
                        opacity: 0;
                        stroke: #FFAA00;
                      }
                    }
                  `}
                </style>
              </svg>
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
                Free Team Assessment
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
                Free Team Assessment
              </Button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}