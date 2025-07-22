'use client';

import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageSquare, FileText, Workflow, Target, ArrowRight, Users, TrendingUp, Clock, Zap } from 'lucide-react';

const solutions = [
  {
    icon: Clock,
    title: 'Eliminate Boring Tasks',
    description: 'Automate repetitive admin work so your team can focus on what they love and what drives results.',
    features: [
      'Auto-process invoices & expenses',
      'Smart email sorting & responses',
      'Automated data entry & reporting',
      'Calendar management & scheduling'
    ],
    color: 'from-blue-500 to-primary'
  },
  {
    icon: TrendingUp,
    title: 'Boost Performance',
    description: 'Help your team hit higher targets and earn more with AI-powered insights and automation.',
    features: [
      'Performance tracking & insights',
      'Goal optimization suggestions',
      'Automated follow-ups & reminders',
      'Real-time productivity coaching'
    ],
    color: 'from-accent to-green-600'
  },
  {
    icon: Users,
    title: 'Enhance Team Collaboration',
    description: 'Streamline communication and workflow so your team works together more effectively.',
    features: [
      'Smart task assignment',
      'Automated progress updates',
      'Team performance insights',
      'Seamless system integration'
    ],
    color: 'from-purple-500 to-primary'
  },
  {
    icon: Zap,
    title: 'Accelerate Growth',
    description: 'Give your team the tools they need to scale their impact and drive business growth.',
    features: [
      'Lead qualification & nurturing',
      'Customer relationship automation',
      'Sales pipeline optimization',
      'Revenue growth tracking'
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
            AI Solutions That Empower Your Team
          </div>
          
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-gray-900">
            Stop doing the boring stuff.{' '}
            <span className="text-accent">Start achieving more.</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our AI solutions help your team eliminate repetitive tasks, focus on meaningful work, 
            and achieve better results. Because when your team wins, your business wins.
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
              Ready to transform how your team works?
            </h3>
            <p className="text-lg opacity-90 mb-6">
              Let's show you how AI can help your team achieve more while enjoying their work.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
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