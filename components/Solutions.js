'use client';

import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, BarChart3, Bot, Clock, FileText, GraduationCap, ShieldCheck, Target, TrendingUp, Users, Zap } from 'lucide-react';

const solutions = [
  {
    icon: Bot,
    title: 'Customer Enquiry Assistant',
    description: 'AI-assisted web chat, email triage, booking prompts, quote capture and live handoff for busy UK SMEs.',
    installTime: '1-2 days',
    timeSaved: 'Reduce missed enquiries',
    features: [
      'Website FAQ and enquiry assistant',
      'Lead capture and booking prompts',
      'Email or CRM notification workflow',
      'Human handoff for complex queries',
      'GDPR-aware setup and data guidance'
    ],
    upgradeOptions: [
      'WhatsApp or Facebook integration',
      'Custom quote forms',
      'Conversation review reports',
      'More pages and knowledge sources'
    ],
    color: 'from-blue-500 to-primary',
    price: 'From £59/mo'
  },
  {
    icon: BarChart3,
    title: 'Lead & Quote Follow-Up',
    description: 'Simple automations that stop leads, quotes and sales follow-ups slipping through the cracks.',
    installTime: '2-5 days',
    timeSaved: 'Win back warm leads',
    features: [
      'Missed lead alerts',
      'Quote chaser sequences',
      'CRM tidy-up and pipeline stages',
      'AI-assisted follow-up drafts',
      'Weekly sales activity summary'
    ],
    upgradeOptions: [
      'CRM integrations',
      'Custom sales dashboards',
      'Proposal and email templates',
      'Team coaching'
    ],
    color: 'from-accent to-green-600',
    price: 'From £79/mo'
  },
  {
    icon: FileText,
    title: 'Admin & Document Assistant',
    description: 'Practical AI workflows for meeting notes, action lists, document summaries, forms and repetitive admin.',
    installTime: '2-5 days',
    timeSaved: 'Save admin hours',
    features: [
      'Meeting notes and action summaries',
      'Document and email summarisation',
      'Form and spreadsheet workflows',
      'Invoice or paperwork extraction',
      'Reusable prompt and template library'
    ],
    upgradeOptions: [
      'Microsoft 365 or Google Workspace setup',
      'Custom automation workflows',
      'Approval steps and audit trails',
      'Department-specific templates'
    ],
    color: 'from-purple-500 to-primary',
    price: 'From £69/mo'
  },
  {
    icon: GraduationCap,
    title: 'AI Consultancy & Crash Course',
    description: 'A practical AI crash course and consultancy session that shows your team what to use, what to avoid and where to start.',
    installTime: 'Half day',
    timeSaved: 'Build team confidence',
    features: [
      'AI readiness review',
      'Hands-on ChatGPT and Copilot training',
      'Safe-use and data protection basics',
      'Prompting for real business tasks',
      '30-day action plan'
    ],
    upgradeOptions: [
      'Leadership consultancy',
      'Department workshops',
      'Custom training materials',
      'Monthly AI office hours'
    ],
    color: 'from-orange-500 to-accent',
    price: 'From £360'
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
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
            Practical AI Services for UK SMEs
          </div>

          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-gray-900">
            Start with one useful workflow.{' '}
            <span className="text-accent">Train your team as you go.</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We focus on straightforward AI services that solve everyday problems: missed enquiries, slow follow-up,
            admin overload and uncertainty about how to use AI safely.
          </p>
        </div>

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

                    <div className="flex flex-wrap items-center gap-4 pt-3">
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

        <div className="mt-20 bg-gradient-to-r from-primary/5 to-accent/5 p-8 rounded-3xl">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-montserrat font-bold text-gray-900 mb-4">
              Why These Services?
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These are the areas where UK SMEs usually see value fastest without buying a complex enterprise AI platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Target className="h-6 w-6 text-accent" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Clear Pain Points</h4>
              <p className="text-sm text-gray-600">Built around enquiries, admin, sales and skills</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Lean Setup</h4>
              <p className="text-sm text-gray-600">Uses tools your team can actually maintain</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Training Included</h4>
              <p className="text-sm text-gray-600">People learn the workflow, not just the software</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <ShieldCheck className="h-6 w-6 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Safe Adoption</h4>
              <p className="text-sm text-gray-600">Practical guidance on data, quality and oversight</p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary to-accent p-8 rounded-3xl text-white">
            <h3 className="text-2xl font-montserrat font-bold mb-4">
              Ready to find your first useful AI workflow?
            </h3>
            <p className="text-lg opacity-90 mb-6">
              Book a short review and we will recommend a simple starting point for your team.
            </p>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Book Free AI Review
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
