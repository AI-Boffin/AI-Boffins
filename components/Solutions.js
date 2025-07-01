'use client';

import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageSquare, FileText, Workflow, Target, ArrowRight } from 'lucide-react';

const solutions = [
  {
    icon: MessageSquare,
    title: 'AI Customer Support',
    description: 'AI chatbots, automated email responses, and instant support tools. Handle queries 24/7.',
    features: [
      'Intelligent chatbot responses',
      '24/7 customer support',
      'Multi-channel integration',
      'Sentiment analysis'
    ],
    color: 'from-blue-500 to-primary'
  },
  {
    icon: FileText,
    title: 'Document Automation',
    description: 'Auto-generate contracts, invoices, reports, and summaries—error-free, lightning fast.',
    features: [
      'Contract generation',
      'Invoice automation',
      'Report creation',
      'Document summarization'
    ],
    color: 'from-accent to-green-600'
  },
  {
    icon: Workflow,
    title: 'Workflow Automation',
    description: 'Connect systems like CRM, email, SMS, and calendars with AI-powered logic.',
    features: [
      'System integrations',
      'Process automation',
      'Smart scheduling',
      'Task management'
    ],
    color: 'from-purple-500 to-primary'
  },
  {
    icon: Target,
    title: 'Lead Generation AI',
    description: 'AI-powered prospecting, outreach, follow-ups, and appointment scheduling.',
    features: [
      'Lead qualification',
      'Automated outreach',
      'Follow-up sequences',
      'Appointment booking'
    ],
    color: 'from-orange-500 to-accent'
  }
];

export default function Solutions() {
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
    <section id="solutions" className="py-20 bg-gradient-to-b from-white to-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
            AI Solutions Built for Your Business
          </div>
          
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-gray-900">
            Whether you're drowning in admin or looking to{' '}
            <span className="text-accent">supercharge growth</span>,{' '}
            AI Boffins delivers automation that works.
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our AI solutions are designed specifically for UK businesses, ensuring compliance, 
            reliability, and measurable results from day one.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            const isVisible = visibleCards.includes(index);
            
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
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <ul className="space-y-3">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                          <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-6 pt-4 border-t border-gray-100">
                      <button className="flex items-center text-primary font-medium text-sm group-hover:text-accent transition-colors">
                        Learn more
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary to-accent p-8 rounded-3xl text-white">
            <h3 className="text-2xl font-montserrat font-bold mb-4">
              Ready to see which solution fits your business?
            </h3>
            <p className="text-lg opacity-90 mb-6">
              Book a free consultation and we'll show you exactly how AI can transform your operations.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Book Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}