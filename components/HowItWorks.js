'use client';

import { useState, useEffect, useRef } from 'react';
import { Search, Building as Build, Rocket, Headphones, CheckCircle, Users, Target, Zap, BarChart3 } from 'lucide-react';

const steps = [
  {
    icon: Search,
    number: '01',
    title: 'Free Team Assessment',
    subtitle: 'Discover which AI service fits your needs',
    description: 'We analyze your team\'s biggest pain points and recommend the AI service that will deliver the fastest ROI.',
    features: [
      'Team productivity analysis',
      'Service recommendation',
      'ROI projections',
      'Implementation timeline'
    ],
    duration: '30 mins',
    color: 'from-blue-500 to-primary'
  },
  {
    icon: Build,
    number: '02',
    title: 'Quick Installation',
    subtitle: 'Get your AI service running in under an hour',
    description: 'We install and configure your chosen AI service, ensuring it integrates seamlessly with your existing workflows.',
    features: [
      'Same-day installation',
      'System integration',
      'Basic configuration',
      'Team access setup'
    ],
    duration: '15 mins - 1 hour',
    color: 'from-accent to-green-600'
  },
  {
    icon: Users,
    number: '03',
    title: 'Team Training',
    subtitle: 'Get your team up and running quickly',
    description: 'Comprehensive 1-hour training session to ensure your team feels confident using their new AI tools.',
    features: [
      '1-hour training session',
      'Best practices guide',
      'Q&A support',
      'Performance tips'
    ],
    duration: '1 hour',
    color: 'from-purple-500 to-primary'
  },
  {
    icon: Rocket,
    number: '04',
    title: 'See Results in a Week',
    subtitle: 'Start experiencing productivity gains immediately',
    description: 'Your team begins seeing time savings and productivity improvements within the first week of use.',
    features: [
      'Immediate time savings',
      'Performance monitoring',
      'Ongoing support',
      'Upgrade opportunities'
    ],
    duration: '1 week',
    color: 'from-orange-500 to-accent'
  }
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const [visibleSteps, setVisibleSteps] = useState([]);
  const stepRefs = useRef([]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const observers = stepRefs.current.map((ref, index) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleSteps(prev => [...new Set([...prev, index])]);
          }
        },
        { threshold: 0.3 }
      );
      
      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  // Ensure steps are visible on desktop immediately to avoid perceived white space
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const isLargeScreen = window.matchMedia('(min-width: 1024px)').matches; // lg breakpoint
    if (isLargeScreen) {
      setVisibleSteps(Array.from({ length: steps.length }, (_, index) => index));
    }
  }, []);

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
            How We Get You Started
          </div>
          
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-gray-900">
            From assessment to{' '}
            <span className="text-primary">ROI in under a week</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our streamlined process gets your chosen AI service up and running quickly, 
            so your team can start seeing productivity gains immediately.
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-24 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary rounded-full"></div>
            
            {/* Steps */}
            <div className="grid grid-cols-4 gap-8">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isVisible = visibleSteps.includes(index);
                
                return (
                  <div
                    key={index}
                    ref={el => stepRefs.current[index] = el}
                    className={`relative transform transition-all duration-700 ${
                      isVisible 
                        ? 'translate-y-0 opacity-100' 
                        : 'translate-y-8 opacity-0'
                    }`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                    onMouseEnter={() => setActiveStep(index)}
                  >
                    {/* Step Number Circle */}
                    <div className={`relative z-10 w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg transform transition-all duration-300 ${
                      activeStep === index ? 'scale-110 shadow-2xl' : ''
                    }`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    
                    {/* Content Card */}
                    <div className={`bg-white p-6 rounded-2xl shadow-lg border border-gray-100 transform transition-all duration-300 ${
                      activeStep === index ? 'shadow-xl border-primary/20 -translate-y-2' : ''
                    }`}>
                      <div className="text-center mb-4">
                        <div className="text-3xl font-montserrat font-bold text-gray-300 mb-2">
                          {step.number}
                        </div>
                        <h3 className="text-xl font-montserrat font-bold text-gray-900 mb-1">
                          {step.title}
                        </h3>
                        <p className="text-primary font-medium text-sm">
                          {step.subtitle}
                        </p>
                      </div>
                      
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {step.description}
                      </p>
                      
                      <ul className="space-y-2 mb-4">
                        {step.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-xs text-gray-700">
                            <CheckCircle className="h-3 w-3 text-accent mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      
                      <div className="text-center pt-4 border-t border-gray-100">
                        <span className="text-xs font-medium text-accent">
                          Timeline: {step.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden">
          <div className="space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isVisible = visibleSteps.includes(index);
              
              return (
                <div
                  key={index}
                  ref={el => stepRefs.current[index] = el}
                  className={`relative transform transition-all duration-700 ${
                    isVisible 
                      ? 'translate-x-0 opacity-100' 
                      : 'translate-x-8 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="flex items-start space-x-4">
                    {/* Icon */}
                    <div className={`flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-lg font-montserrat font-bold text-gray-900">
                          {step.title}
                        </h3>
                        <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded-full">
                          {step.duration}
                        </span>
                      </div>
                      
                      <p className="text-primary font-medium text-sm mb-3">
                        {step.subtitle}
                      </p>
                      
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {step.description}
                      </p>
                      
                      <ul className="space-y-2">
                        {step.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                            <CheckCircle className="h-4 w-4 text-accent mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  {/* Connecting Line */}
                  {index < steps.length - 1 && (
                    <div className="ml-6 w-0.5 h-8 bg-gradient-to-b from-primary to-accent opacity-30 mt-4"></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 text-center">
          {/* Site Analyser CTA */}
          <div className="mb-10 p-8 rounded-3xl bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 border border-primary/20 shadow-sm">
            <div className="inline-flex items-center px-3 py-1 mb-3 rounded-full bg-accent/10 text-accent text-sm font-medium">
              Site Analyser
            </div>
            <h3 className="text-2xl md:text-3xl font-montserrat font-bold text-gray-900 mb-2">
              Already have a site? See how it scores on our site analyser website!
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Get an instant snapshot of performance, accessibility and SEO.
            </p>
            <a
              href="https://www.ai-siteanalyser.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <BarChart3 className="h-5 w-5 mr-2" />
              Open Site Analyser
            </a>
          </div>
          <div className="inline-flex items-center px-6 py-3 bg-primary/5 text-primary rounded-full text-lg font-medium mb-4">
            Ready to empower your team? Let's start with a free assessment.
          </div>
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            Book Your Free Team Assessment
          </button>
        </div>
      </div>
    </section>
  );
}