'use client';

import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <div className="font-montserrat font-bold text-2xl mb-2">
                AI <span className="text-accent">Boffins</span>
              </div>
              <p className="text-white/80 text-sm">
                Sister company to IT Boffins
              </p>
            </div>
            
            <p className="text-white/90 leading-relaxed">
              AI automation solutions for UK businesses. Save time, cut costs, 
              and boost productivity with our GDPR-compliant AI systems.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-2">
              <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-xs font-medium">
                🇬🇧 UK-Based
              </span>
              <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs font-medium">
                GDPR Compliant
              </span>
              <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs font-medium">
                ISO 27001
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-6 text-white">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-white/80 hover:text-accent transition-colors text-sm"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('solutions')}
                  className="text-white/80 hover:text-accent transition-colors text-sm"
                >
                  AI Solutions
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('how-it-works')}
                  className="text-white/80 hover:text-accent transition-colors text-sm"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('pricing')}
                  className="text-white/80 hover:text-accent transition-colors text-sm"
                >
                  Pricing
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('case-studies')}
                  className="text-white/80 hover:text-accent transition-colors text-sm"
                >
                  Case Studies
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-white/80 hover:text-accent transition-colors text-sm"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-6 text-white">
              AI Services
            </h3>
            <ul className="space-y-3">
              <li className="text-white/80 text-sm">AI Customer Support</li>
              <li className="text-white/80 text-sm">Document Automation</li>
              <li className="text-white/80 text-sm">Workflow Automation</li>
              <li className="text-white/80 text-sm">Lead Generation AI</li>
              <li className="text-white/80 text-sm">Custom AI Solutions</li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-accent hover:text-accent/80 transition-colors text-sm font-medium"
                >
                  Free AI Audit →
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-6 text-white">
              Get In Touch
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <a 
                    href="tel:01234567890"
                    className="text-white/90 hover:text-accent transition-colors text-sm"
                  >
                    01234 567890
                  </a>
                  <p className="text-white/60 text-xs">Mon-Fri, 9am-6pm GMT</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <a 
                    href="mailto:hello@aiboffins.co.uk"
                    className="text-white/90 hover:text-accent transition-colors text-sm"
                  >
                    hello@aiboffins.co.uk
                  </a>
                  <p className="text-white/60 text-xs">We respond within 2 hours</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white/90 text-sm">Milton Keynes, UK</p>
                  <p className="text-white/60 text-xs">Serving businesses nationwide</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6">
              <p className="text-white/80 text-sm mb-3">Follow us:</p>
              <div className="flex space-x-3">
                <a 
                  href="#" 
                  className="bg-white/10 hover:bg-accent p-2 rounded-full transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a 
                  href="#" 
                  className="bg-white/10 hover:bg-accent p-2 rounded-full transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="h-4 w-4" />
                </a>
                <a 
                  href="#" 
                  className="bg-white/10 hover:bg-accent p-2 rounded-full transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-white/70">
              <p>&copy; {new Date().getFullYear()} AI Boffins. All rights reserved.</p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-accent transition-colors">GDPR</a>
              </div>
            </div>
            
            <Button
              onClick={scrollToTop}
              variant="outline"
              size="sm"
              className="border-white/20 text-white hover:bg-accent hover:border-accent bg-transparent"
            >
              <ArrowUp className="h-4 w-4 mr-1" />
              Back to top
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}