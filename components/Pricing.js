'use client';

import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Star, ArrowRight, MessageSquare, Users, Target, Zap } from 'lucide-react';

const plans = [
  {
    name: 'Team Starter',
    description: 'Perfect for small teams ready to eliminate boring tasks',
    setupFee: 'From £500',
    monthlyFee: '£99',
    badge: 'Most Popular',
    color: 'border-accent shadow-accent/20',
    headerColor: 'bg-accent',
    features: [
      '1 AI solution for your team',
      'Basic task automation',
      'Team training included',
      'Monthly performance insights',
      'GDPR compliance included',
      'Up to 1,000 team actions/month',
      'Standard integrations (Email, Calendar)',
      '30-day satisfaction guarantee'
    ],
    notIncluded: [
      'Custom team workflows',
      'Priority support',
      'Advanced team analytics'
    ]
  },
  {
    name: 'Team Pro',
    description: 'Ideal for growing teams with multiple automation needs',
    setupFee: '£1,500 – £3,000',
    monthlyFee: '£299',
    badge: 'Best Value',
    color: 'border-primary shadow-primary/20',
    headerColor: 'bg-primary',
    features: [
      'Up to 3 AI solutions for your team',
      'Advanced workflow automation',
      'Priority team support',
      'Weekly performance tracking',
      'GDPR compliance included',
      'Up to 10,000 team actions/month',
      'Custom integrations (CRM, SMS, etc.)',
      'Dedicated team success manager',
      'Quarterly team optimization reviews'
    ],
    notIncluded: [
      'Unlimited team automations',
      '24/7 phone support'
    ]
  },
  {
    name: 'Team Enterprise',
    description: 'Fully tailored solutions for large teams and organizations',
    setupFee: 'Custom Quote',
    monthlyFee: 'From £499',
    badge: 'Full Service',
    color: 'border-gray-300 shadow-lg',
    headerColor: 'bg-gradient-to-r from-primary to-accent',
    features: [
      'Unlimited AI solutions for your team',
      'Fully custom team automations',
      '24/7 priority team support',
      'Real-time team performance dashboard',
      'GDPR compliance included',
      'Unlimited team actions',
      'All integrations included',
      'Dedicated team success team',
      'Monthly team strategy sessions',
      'SLA guarantees',
      'Custom team training programs'
    ],
    notIncluded: []
  }
];

export default function Pricing() {
  const [visibleCards, setVisibleCards] = useState([]);
  const cardRefs = useRef([]);

  useEffect(() => {
    const observers = cardRefs.current.map((ref, index) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleCards(prev => [...new Set([...prev, index])]);
          }
        },
        { threshold: 0.1 }
      );
      
      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-secondary/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
            Simple, Transparent Pricing
          </div>
          
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-gray-900">
            Choose the plan that{' '}
            <span className="text-accent">empowers your team</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            No hidden fees, no surprises. Just clear pricing that helps your team achieve more and enjoy their work.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => {
            const isVisible = visibleCards.includes(index);
            const isPopular = plan.name === 'Team Starter';
            
            return (
              <div
                key={index}
                ref={el => cardRefs.current[index] = el}
                className={`transform transition-all duration-700 ${
                  isVisible 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <Card className={`h-full relative ${plan.color} hover:shadow-xl transition-shadow duration-300 ${
                  isPopular ? 'transform scale-105 z-10' : ''
                }`}>
                  {/* Badge */}
                  {plan.badge && (
                    <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 ${plan.headerColor} text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg`}>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4" />
                        <span>{plan.badge}</span>
                      </div>
                    </div>
                  )}

                  <CardHeader className="text-center pb-4 pt-8">
                    <CardTitle className="text-2xl font-montserrat font-bold text-gray-900 mb-2">
                      {plan.name}
                    </CardTitle>
                    <CardDescription className="text-gray-600 mb-6">
                      {plan.description}
                    </CardDescription>
                    
                    {/* Pricing */}
                    <div className="space-y-2">
                      <div className="text-sm text-gray-500">Setup Fee</div>
                      <div className="text-2xl font-bold text-primary">
                        {plan.setupFee}
                      </div>
                      <div className="text-sm text-gray-500 mt-4">Monthly Support</div>
                      <div className="text-4xl font-montserrat font-bold text-gray-900">
                        {plan.monthlyFee}
                        <span className="text-base font-normal text-gray-500">/month</span>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="pt-0">
                    {/* Features */}
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start text-sm text-gray-700">
                          <Check className="h-4 w-4 text-accent mr-3 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Not Included (if any) */}
                    {plan.notIncluded.length > 0 && (
                      <div className="mb-8">
                        <div className="text-sm font-medium text-gray-500 mb-3">Not included:</div>
                        <ul className="space-y-2">
                          {plan.notIncluded.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start text-sm text-gray-400">
                              <div className="w-4 h-4 mr-3 mt-0.5 flex-shrink-0">
                                <div className="w-3 h-3 border border-gray-300 rounded-full"></div>
                              </div>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* CTA Button */}
                    <Button 
                      onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                      className={`w-full ${
                        isPopular 
                          ? 'bg-accent hover:bg-accent/90 text-white' 
                          : 'bg-primary hover:bg-primary/90 text-white'
                      } font-semibold py-3 h-auto group transition-all duration-300`}
                    >
                      {plan.name === 'Team Enterprise' ? 'Get Custom Quote' : 'Empower Your Team'}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>

                    {/* Additional Info */}
                    <div className="mt-4 text-center">
                      <div className="flex items-center justify-center text-sm text-gray-500">
                        <MessageSquare className="h-4 w-4 mr-1" />
                        <span>Free team assessment included</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Bottom Section */}
        <div className="text-center space-y-8">
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-8 rounded-3xl border border-gray-100">
            <h3 className="text-2xl font-montserrat font-bold text-gray-900 mb-4">
              Not sure what's right for your team? Let's find out together.
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Every team is unique. Book a free assessment and we'll recommend the perfect plan 
              based on your team's specific challenges and goals.
            </p>
            <Button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 h-auto font-semibold"
            >
              Book Free Team Assessment
            </Button>
          </div>

          {/* FAQ Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            <span>💡 All plans include team training</span>
            <span>🔒 Your team's data stays secure</span>
            <span>🇬🇧 UK-based team support</span>
            <span>⚡ Implementation in 7-14 days</span>
          </div>
        </div>
      </div>
    </section>
  );
}