'use client';

import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Star, ArrowRight, MessageSquare, Users, Target, Zap, Bot, FileText, BarChart3, Mic } from 'lucide-react';

const services = [
  {
    name: 'AI Chatbot + Live Chat',
    description: 'Automate FAQs and capture leads with ChatGPT-powered support',
    icon: Bot,
    basePrice: '£39',
    proPrice: '£79',
    setupFee: '£299',
    installTime: '15 mins',
    features: [
      'GDPR-compliant UK hosting',
      'ChatGPT-powered responses',
      'Basic content training',
      'Live chat handoff',
      'Up to 100 chats/month'
    ],
    proFeatures: [
      'Advanced analytics dashboard',
      'Custom integrations',
      'Multi-language support',
      'Unlimited chats',
      'Priority support',
      'Custom branding'
    ],
    color: 'from-blue-500 to-primary'
  },
  {
    name: 'Content Generation & Marketing',
    description: 'AI-powered blog posts, social media content, and marketing copy',
    icon: FileText,
    basePrice: '£49',
    proPrice: '£99',
    setupFee: '£399',
    installTime: '30 mins',
    features: [
      'Blog post generation',
      'Social media content',
      'Email marketing drafts',
      'Basic SEO optimization',
      'Up to 20 pieces/month'
    ],
    proFeatures: [
      'Scheduled content packs',
      'Custom templates',
      'Design assets included',
      'Content strategy planning',
      'Unlimited content',
      'Brand voice training'
    ],
    color: 'from-accent to-green-600'
  },
  {
    name: 'CRM & Sales AI',
    description: 'AI enhancements for lead scoring, forecasting, and automation',
    icon: BarChart3,
    basePrice: '£79',
    proPrice: '£149',
    setupFee: '£599',
    installTime: '1 hour',
    features: [
      'Smart lead scoring',
      'Basic sales forecasting',
      'Automated follow-ups',
      'Pipeline optimization',
      'Up to 1,000 leads/month'
    ],
    proFeatures: [
      'Custom CRM pipelines',
      'Advanced analytics',
      'Team training included',
      'Integration support',
      'Unlimited leads',
      'Performance coaching'
    ],
    color: 'from-purple-500 to-primary'
  },
  {
    name: 'Transcription & Admin AI',
    description: 'Meeting transcription and admin process automation',
    icon: Mic,
    basePrice: '£59',
    proPrice: '£119',
    setupFee: '£449',
    installTime: '45 mins',
    features: [
      'Meeting transcription',
      'Basic audio insights',
      'Admin process automation',
      'Document processing',
      'Up to 10 hours/month'
    ],
    proFeatures: [
      'Multi-language support',
      'Custom workflows',
      'API integrations',
      'Advanced analytics',
      'Unlimited transcription',
      'Custom training'
    ],
    color: 'from-orange-500 to-accent'
  }
];

export default function Pricing() {
  const [visibleCards, setVisibleCards] = useState([]);
  const [selectedService, setSelectedService] = useState(0);
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
            Choose the service that{' '}
            <span className="text-accent">fits your needs</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Each service has two tiers: Base for getting started, Pro for scaling up. 
            Start with one service and add more as you grow.
          </p>
        </div>

        {/* Service Selection */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <button
                key={index}
                onClick={() => setSelectedService(index)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full border-2 transition-all duration-300 ${
                  selectedService === index
                    ? 'border-accent bg-accent text-white'
                    : 'border-gray-200 hover:border-primary/50 hover:bg-primary/5'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span className="text-sm font-medium">{service.name.split(' ')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
          {(() => {
            const service = services[selectedService];
            const Icon = service.icon;
            
            return (
              <>
                {/* Base Tier */}
                <div
                  ref={el => cardRefs.current[0] = el}
                  className={`transform transition-all duration-700 ${
                    visibleCards.includes(0) 
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-8 opacity-0'
                  }`}
                >
                  <Card className="h-full border-2 border-gray-200 hover:shadow-lg transition-shadow duration-300">
                    <CardHeader className="text-center pb-4">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-4 mx-auto mb-4`}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-xl font-montserrat font-bold text-gray-900 mb-2">
                        {service.name} - Base
                      </CardTitle>
                      <CardDescription className="text-gray-600 mb-4">
                        {service.description}
                      </CardDescription>
                      
                      {/* Pricing */}
                      <div className="space-y-2">
                        <div className="text-sm text-gray-500">Setup Fee</div>
                        <div className="text-2xl font-bold text-primary">
                          {service.setupFee}
                        </div>
                        <div className="text-sm text-gray-500 mt-4">Monthly</div>
                        <div className="text-3xl font-montserrat font-bold text-gray-900">
                          {service.basePrice}
                          <span className="text-base font-normal text-gray-500">/month</span>
                        </div>
                        <div className="text-sm text-gray-500">Install: {service.installTime}</div>
                      </div>
                    </CardHeader>

                    <CardContent className="pt-0">
                      {/* Features */}
                      <ul className="space-y-3 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start text-sm text-gray-700">
                            <Check className="h-4 w-4 text-accent mr-3 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      {/* CTA Button */}
                      <Button 
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        className="w-full bg-gray-800 hover:bg-gray-900 text-white font-semibold py-3 h-auto group transition-all duration-300"
                      >
                        Get Started
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                </div>

                {/* Pro Tier */}
                <div
                  ref={el => cardRefs.current[1] = el}
                  className={`transform transition-all duration-700 ${
                    visibleCards.includes(1) 
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-8 opacity-0'
                  }`}
                  style={{ transitionDelay: '150ms' }}
                >
                  <Card className="h-full border-2 border-accent shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
                    {/* Popular Badge */}
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-accent text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4" />
                        <span>Most Popular</span>
                      </div>
                    </div>

                    <CardHeader className="text-center pb-4 pt-8">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-4 mx-auto mb-4`}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-xl font-montserrat font-bold text-gray-900 mb-2">
                        {service.name} - Pro
                      </CardTitle>
                      <CardDescription className="text-gray-600 mb-4">
                        Everything in Base, plus advanced features and unlimited usage
                      </CardDescription>
                      
                      {/* Pricing */}
                      <div className="space-y-2">
                        <div className="text-sm text-gray-500">Setup Fee</div>
                        <div className="text-2xl font-bold text-primary">
                          {service.setupFee}
                        </div>
                        <div className="text-sm text-gray-500 mt-4">Monthly</div>
                        <div className="text-3xl font-montserrat font-bold text-gray-900">
                          {service.proPrice}
                          <span className="text-base font-normal text-gray-500">/month</span>
                        </div>
                        <div className="text-sm text-gray-500">Install: {service.installTime}</div>
                      </div>
                    </CardHeader>

                    <CardContent className="pt-0">
                      {/* Features */}
                      <ul className="space-y-3 mb-6">
                        {service.proFeatures.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start text-sm text-gray-700">
                            <Check className="h-4 w-4 text-accent mr-3 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      {/* CTA Button */}
                      <Button 
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        className="w-full bg-accent hover:bg-accent/90 text-white font-semibold py-3 h-auto group transition-all duration-300"
                      >
                        Go Pro
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </>
            );
          })()}
        </div>

        {/* Bundle Pricing */}
        <div className="text-center mb-16">
          <div className="bg-gradient-to-r from-primary to-accent p-8 rounded-3xl text-white">
            <h3 className="text-2xl font-montserrat font-bold mb-4">
              Want all four services?
            </h3>
            <p className="text-lg opacity-90 mb-6">
              Bundle all services and save 25% on monthly fees
            </p>
            <div className="text-4xl font-bold mb-4">£199/month</div>
            <p className="text-sm opacity-90 mb-6">Setup: £1,499 | Install: 2-3 hours</p>
            <Button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              size="lg"
              className="bg-white text-primary px-8 py-4 h-auto font-semibold hover:shadow-lg transition-all duration-300"
            >
              Get Full Bundle
            </Button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center space-y-8">
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-8 rounded-3xl border border-gray-100">
            <h3 className="text-2xl font-montserrat font-bold text-gray-900 mb-4">
              Not sure which service to start with?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Book a free assessment and we'll recommend the perfect starting point 
              based on your team's biggest pain points.
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
            <span>💡 All plans include 1-hour training</span>
            <span>🔒 GDPR compliant UK hosting</span>
            <span>🇬🇧 UK-based support team</span>
            <span>⚡ Same-day installation available</span>
          </div>
        </div>
      </div>
    </section>
  );
}