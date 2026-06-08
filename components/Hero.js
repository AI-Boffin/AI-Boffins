'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, PlayCircle, Users, TrendingUp, Smile, Clock, Zap } from 'lucide-react';

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
              <Users className="h-4 w-4 mr-2" />
              UK-based AI specialists since 2024
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-gray-900 leading-tight">
                Practical AI Help{' '}
                <span className="text-primary">for British SMEs</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed">
                We set up useful AI workflows, teach your team how to use them, and keep adoption safe, simple and measurable.{' '}
                <span className="text-accent font-medium">Start with one job worth improving.</span>
              </p>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-accent flex-shrink-0" />
                <span>Cut repetitive admin</span>
              </div>
              <div className="flex items-center space-x-3">
                <TrendingUp className="h-5 w-5 text-accent flex-shrink-0" />
                <span>Follow up leads faster</span>
              </div>
              <div className="flex items-center space-x-3">
                <Zap className="h-5 w-5 text-accent flex-shrink-0" />
                <span>GDPR-aware UK guidance</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                <span>AI crash courses available</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection('solutions')}
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-4 h-auto group transition-all duration-300 hover:shadow-lg hover:shadow-accent/25"
              >
                See Practical AI Services
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                onClick={() => scrollToSection('contact')}
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-white text-lg px-8 py-4 h-auto group transition-all duration-300"
              >
                <PlayCircle className="mr-2 h-5 w-5" />
                Free AI Review
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 text-sm text-gray-600 pt-4 border-t border-gray-200">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-accent rounded-full"></div>
                <span>Designed to support your team</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <span>Training and handover included</span>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className={`relative ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className="relative bg-gradient-to-br from-primary to-accent p-8 rounded-3xl shadow-2xl">
              {/* Mock Dashboard */}
              <div className="bg-white rounded-2xl p-6 space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-montserrat font-semibold text-gray-900">AI Starter Plan</h3>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-accent rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  </div>
                </div>
                
                {/* Service Cards */}
                <div className="grid grid-cols-2 gap-3">
                  <button 
                    onClick={() => scrollToSection('solutions')}
                    className="bg-accent/10 p-3 rounded-xl hover:bg-accent/20 transition-colors cursor-pointer"
                  >
                    <div className="text-sm font-bold text-accent">Enquiries</div>
                    <div className="text-xs text-gray-600">Chat + Lead Capture</div>
                  </button>
                  <button 
                    onClick={() => scrollToSection('solutions')}
                    className="bg-primary/10 p-3 rounded-xl hover:bg-primary/20 transition-colors cursor-pointer"
                  >
                    <div className="text-sm font-bold text-primary">AI Training</div>
                    <div className="text-xs text-gray-600">Crash Course</div>
                  </button>
                  <button 
                    onClick={() => scrollToSection('solutions')}
                    className="bg-green-500/10 p-3 rounded-xl hover:bg-green-500/20 transition-colors cursor-pointer"
                  >
                    <div className="text-sm font-bold text-green-600">Follow-Up</div>
                    <div className="text-xs text-gray-600">Quotes + Leads</div>
                  </button>
                  <button 
                    onClick={() => scrollToSection('solutions')}
                    className="bg-purple-500/10 p-3 rounded-xl hover:bg-purple-500/20 transition-colors cursor-pointer"
                  >
                    <div className="text-sm font-bold text-purple-600">Admin</div>
                    <div className="text-xs text-gray-600">Docs + Meetings</div>
                  </button>
                </div>

                {/* Quick Stats */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm text-gray-700">First Workflow</span>
                    <span className="text-sm font-bold text-accent">2-5 days</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm text-gray-700">Team Training</span>
                    <span className="text-sm font-bold text-primary">Included</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm text-gray-700">Action Plan</span>
                    <span className="text-sm font-bold text-green-600">30 days</span>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-white p-3 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">UK-Based</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-accent text-white p-3 rounded-xl shadow-lg">
                <div className="text-sm font-medium">GDPR-Aware</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
