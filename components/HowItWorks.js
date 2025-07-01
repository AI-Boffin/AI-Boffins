'use client';

import { useState, useEffect, useRef } from 'react';
import { Search, Building as Build, Rocket, Headphones, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: Search,
    number: '01',
    title: 'Discover',
    subtitle: 'Free AI audit to map your processes',
    description: 'We analyze your current workflows, identify automation opportunities, and create a tailored roadmap for your business.',
    features: [
      'Process mapping session',
      'ROI calculation',
      'Custom strategy document',
      'No obligation consultation'
    ],
    duration: '1-2 days',
    color: 'from-blue-500 to-primary'
  },
  {
    icon: Build,
    number: '02',
    title: 'Build',
    subtitle: 'Custom AI automation tailored to your needs',
    description: 'Our expert team develops and configures your AI solutions, ensuring seamless integration with your existing systems.',
    features: [
      'Custom AI development',
      'System integrations',
      'Testing & quality assurance',
      'Staff training materials'
    ],
    duration: '1-2 weeks',
    color: 'from-accent to-green-600'
  },
  {
    icon: Rocket,
    number: '03',
    title: 'Launch',
    subtitle: 'Go live in as little as 7–14 days',
    description: 'Smooth deployment with comprehensive testing, staff training, and phased rollout to ensure zero disruption to your business.',
    features: [
      'Phased deployment',
      'Comprehensive testing',
      'Team training sessions',
      'Performance monitoring'
    ],
    duration: '3-5 days',
    color: 'from-purple-500 to-primary'
  },
  {
    icon: Headphones,
    number: '04',
    title: 'Support',
    subtitle: 'Ongoing tuning, updates, and growth help',
    description: 'Continuous optimization, regular updates, and dedicated UK-based support to ensure your AI solutions evolve with your business.',
    features: [
      '24/7 monitoring',
      'Regular optimizations',
      'Feature updates',
      'Dedicated UK support'
    ],
    duration: 'Ongoing',
    color: 'from-orange-500 to-accent'
  }
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const [visibleSteps, setVisibleSteps] = useState([]);
  const stepRefs = useRef([]);

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

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
            How We Get You Automated
          </div>
          
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-gray-900">
            From idea to implementation in{' '}
            <span className="text-primary">just 4 simple steps</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our proven methodology ensures quick deployment without disrupting your business operations.
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
        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-primary/5 text-primary rounded-full text-lg font-medium mb-4">
            Ready to get started? It all begins with a free consultation.
          </div>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            Book Your Free AI Audit Today
          </button>
        </div>
      </div>
    </section>
  );
}