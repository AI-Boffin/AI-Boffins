'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, PlayCircle, Users, TrendingUp, Smile } from 'lucide-react';

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
              Empowering 500+ UK workers daily
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-gray-900 leading-tight">
                AI that{' '}
                <span className="text-primary">empowers your team</span>{' '}
                to achieve more
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed">
                Transform boring, repetitive tasks into opportunities for growth. 
                <span className="text-accent font-medium"> Help your team hit higher targets</span>, earn more, and actually enjoy coming to work.
              </p>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                <span>Free up 15+ hours for meaningful work</span>
              </div>
              <div className="flex items-center space-x-3">
                <TrendingUp className="h-5 w-5 text-accent flex-shrink-0" />
                <span>Boost team productivity by 60%</span>
              </div>
              <div className="flex items-center space-x-3">
                <Smile className="h-5 w-5 text-accent flex-shrink-0" />
                <span>Increase job satisfaction & retention</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                <span>UK-based, worker-friendly solutions</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection('contact')}
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-4 h-auto group transition-all duration-300 hover:shadow-lg hover:shadow-accent/25"
              >
                See How We Help Your Team
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                onClick={() => scrollToSection('how-it-works')}
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-white text-lg px-8 py-4 h-auto group transition-all duration-300"
              >
                <PlayCircle className="mr-2 h-5 w-5" />
                Watch How It Works
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 text-sm text-gray-600 pt-4 border-t border-gray-200">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-accent rounded-full"></div>
                <span>No job losses - only job enhancement</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <span>Team training included</span>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className={`relative ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className="relative bg-gradient-to-br from-primary to-accent p-8 rounded-3xl shadow-2xl">
              {/* Mock Dashboard */}
              <div className="bg-white rounded-2xl p-6 space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-montserrat font-semibold text-gray-900">Team Performance Dashboard</h3>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-accent rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  </div>
                </div>
                
                {/* Stats Cards */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-accent/10 p-4 rounded-xl">
                    <div className="text-2xl font-bold text-accent">+47%</div>
                    <div className="text-sm text-gray-600">Team Productivity</div>
                  </div>
                  <div className="bg-primary/10 p-4 rounded-xl">
                    <div className="text-2xl font-bold text-primary">92%</div>
                    <div className="text-sm text-gray-600">Job Satisfaction</div>
                  </div>
                </div>

                {/* Activity Feed */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-sm text-gray-700">Sarah automated invoice processing</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm text-gray-700">Mike hit 120% of monthly target</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-sm text-gray-700">Team saved 18 hours this week</span>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-white p-3 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Team Happy</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-accent text-white p-3 rounded-xl shadow-lg">
                <div className="text-sm font-medium">£3,200 extra earned this month</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}