'use client';

import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageSquare, FileText, Workflow, Target, ArrowRight, Users, TrendingUp, Clock, Zap, Bot, BarChart3, Mic } from 'lucide-react';

const solutions = [
  {
    icon: Bot,
    title: 'AI Chatbot + Live Chat Support',
    description: 'Automates FAQs and basic support with a ChatGPT-powered bot effortlessly trained on your site content.',
    installTime: '15 mins',
    timeSaved: 'Save 10+ hrs/week',
    features: [
      'GDPR-compliant UK hosting',
      'ChatGPT-powered responses',
      'Easy content training',
      'Live chat handoff',
      'Lead capture automation'
    ],
    upgradeOptions: [
      'Add more chat volume',
      'Custom integrations',
      'Advanced analytics',
      'Multi-language support'
    ],
    color: 'from-blue-500 to-primary',
    price: 'From £39/mo'
  },
  {
    icon: FileText,
    title: 'Automated Content Generation & Marketing',
    description: 'AI-powered tools that generate blog posts, social media content, email drafts, and marketing copy.',
    installTime: '30 mins',
    timeSaved: 'Save 8+ hrs/week',
    features: [
      'Blog post generation',
      'Social media content',
      'Email marketing drafts',
      'SEO optimization',
      'Brand voice consistency'
    ],
    upgradeOptions: [
      'Scheduled content packs',
      'Custom templates',
      'Design assets',
      'Content strategy planning'
    ],
    color: 'from-accent to-green-600',
    price: 'From £49/mo'
  },
  {
    icon: BarChart3,
    title: 'AI-Enhanced CRM & Sales Workflow',
    description: 'AI enhancements to CRM systems for lead scoring, sales forecasting, and outreach automation.',
    installTime: '1 hour',
    timeSaved: 'Boost conversions 25%',
    features: [
      'Smart lead scoring',
      'Sales forecasting',
      'Automated follow-ups',
      'Pipeline optimization',
      'Performance insights'
    ],
    upgradeOptions: [
      'Custom CRM pipelines',
      'Advanced analytics',
      'Team training',
      'Integration support'
    ],
    color: 'from-purple-500 to-primary',
    price: 'From £79/mo'
  },
  {
    icon: Mic,
    title: 'AI Transcription & Admin Automation',
    description: 'Tools to transcribe meetings, extract insights from audio/video, and automate admin processes.',
    installTime: '45 mins',
    timeSaved: 'Save 6+ hrs/week',
    features: [
      'Meeting transcription',
      'Audio/video insights',
      'Admin process automation',
      'Document processing',
      'Multi-language support'
    ],
    upgradeOptions: [
      'Multi-language transcription',
      'Custom workflows',
      'API integrations',
      'Advanced analytics'
    ],
    color: 'from-orange-500 to-accent',
    price: 'From £59/mo'
  }
];

export default function Solutions() {
  const [visibleCards, setVisibleCards] = useState([]);
  const [expandedCard, setExpandedCard] = useState(null);
  const cardRefs = useRef([]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
    <section id="solutions" className="py-20 bg-gradient-to-b from-white to-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
            Four Core AI Services
          </div>
          
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-gray-900">
            Install in a morning.{' '}
            <span className="text-accent">Start seeing ROI by next week.</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We specialize in four high-impact AI services that UK SMEs can install quickly and scale easily. 
            No overwhelm, just proven solutions that work.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            const isVisible = visibleCards.includes(index);
            const isExpanded = expandedCard === index;
            
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
                <Card className="h-full group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
                  <CardHeader className="pb-4">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${solution.color} p-4 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-montserrat font-semibold text-gray-900 group-hover:text-primary transition-colors">
                      {solution.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 leading-relaxed">
                      {solution.description}
                    </CardDescription>
                    
                    {/* Quick Stats */}
                    <div className="flex items-center space-x-4 pt-3">
                      <div className="flex items-center space-x-2 text-sm">
                        <Clock className="h-4 w-4 text-accent" />
                        <span className="font-medium">{solution.installTime}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <TrendingUp className="h-4 w-4 text-primary" />
                        <span className="font-medium">{solution.timeSaved}</span>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    {/* Core Features */}
                    <div className="mb-4">
                      <h4 className="font-medium text-gray-900 mb-3">What you get:</h4>
                      <ul className="space-y-2">
                        {solution.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                            <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Upgrade Options */}
                    <div className="mb-4">
                      <h4 className="font-medium text-gray-900 mb-3">Upgrade options:</h4>
                      <ul className="space-y-2">
                        {solution.upgradeOptions.map((option, optionIndex) => (
                          <li key={optionIndex} className="flex items-center text-sm text-gray-600">
                            <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                            {option}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Price and CTA */}
                    <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                      <div className="text-lg font-bold text-primary">{solution.price}</div>
                      <button 
                        onClick={() => setExpandedCard(isExpanded ? null : index)}
                        className="flex items-center text-primary font-medium text-sm group-hover:text-accent transition-colors"
                      >
                        {isExpanded ? 'Show less' : 'Learn more'}
                        <ArrowRight className={`ml-2 h-4 w-4 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                      </button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Why These Four Section */}
        <div className="mt-20 bg-gradient-to-r from-primary/5 to-accent/5 p-8 rounded-3xl">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-montserrat font-bold text-gray-900 mb-4">
              Why These Four Services?
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We've chosen these services because they deliver the highest ROI with the easiest implementation for UK SMEs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Zap className="h-6 w-6 text-accent" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">High ROI</h4>
              <p className="text-sm text-gray-600">Broad appeal across all SME pain points</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Easy Deploy</h4>
              <p className="text-sm text-gray-600">Off-the-shelf integrations, minimal setup</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="h-6 w-6 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Upsell Potential</h4>
              <p className="text-sm text-gray-600">Base installation + add-ons & training</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Target className="h-6 w-6 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Lean Focus</h4>
              <p className="text-sm text-gray-600">Excel in four vs. under-deliver in ten</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary to-accent p-8 rounded-3xl text-white">
            <h3 className="text-2xl font-montserrat font-bold mb-4">
              Ready to install your first AI tool?
            </h3>
            <p className="text-lg opacity-90 mb-6">
              Let's show you how to get started with one of these services in under an hour.
            </p>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Book Free Team Assessment
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}