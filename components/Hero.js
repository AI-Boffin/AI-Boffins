'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, PlayCircle } from 'lucide-react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative bg-gradient-to-br from-primary/5 via-white to-accent/5 py-20 md:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className={`space-y-8 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium border border-accent/20">
              <CheckCircle className="h-4 w-4 mr-2" />
              Trusted by 100+ UK businesses
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-gray-900 leading-tight">
                AI Automation for{' '}
                <span className="text-primary">UK Businesses</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed">
                Save time, cut costs, and boost productivity with AI automation. 
                <span className="text-accent font-medium"> UK-based, GDPR-compliant</span>, and expertly delivered.
              </p>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                <span>Save 10+ hours per week</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                <span>Reduce operational costs by 40%</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                <span>24/7 automated customer support</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                <span>GDPR-compliant solutions</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection('contact')}
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-4 h-auto group transition-all duration-300 hover:shadow-lg hover:shadow-accent/25"
              >
                Book Your Free AI Audit
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                onClick={() => scrollToSection('how-it-works')}
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-white text-lg px-8 py-4 h-auto group transition-all duration-300"
              >
                <PlayCircle className="mr-2 h-5 w-5" />
                See How It Works
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 text-sm text-gray-600 pt-4 border-t border-gray-200">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-accent rounded-full"></div>
                <span>No setup fees for starter plans</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <span>7-14 day implementation</span>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className={`relative ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className="relative bg-gradient-to-br from-primary to-accent p-8 rounded-3xl shadow-2xl">
              {/* Mock Dashboard */}
              <div className="bg-white rounded-2xl p-6 space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-montserrat font-semibold text-gray-900">AI Dashboard</h3>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-accent rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  </div>
                </div>
                
                {/* Stats Cards */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-accent/10 p-4 rounded-xl">
                    <div className="text-2xl font-bold text-accent">127</div>
                    <div className="text-sm text-gray-600">Automated Tasks</div>
                  </div>
                  <div className="bg-primary/10 p-4 rounded-xl">
                    <div className="text-2xl font-bold text-primary">98%</div>
                    <div className="text-sm text-gray-600">Accuracy Rate</div>
                  </div>
                </div>

                {/* Activity Feed */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-sm text-gray-700">Customer inquiry auto-responded</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm text-gray-700">Invoice generated automatically</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-sm text-gray-700">Lead qualified and assigned</span>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-white p-3 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Live</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-accent text-white p-3 rounded-xl shadow-lg">
                <div className="text-sm font-medium">£2,847 saved this month</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}