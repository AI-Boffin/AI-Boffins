'use client';

import { useState, useEffect } from 'react';
import { CheckCircle, Clock, Heart, MapPin, Shield, Star, Users } from 'lucide-react';

const trustFactors = [
  {
    icon: MapPin,
    title: 'UK-Based & GDPR-Aware',
    description: 'We are based in the UK and build with data protection, sensible tool choices and clear staff guidance in mind.',
    color: 'from-blue-500 to-primary'
  },
  {
    icon: Users,
    title: 'Employee-Friendly Approach',
    description: 'We train your team to use AI as a practical assistant for repetitive work, not as a black-box replacement.',
    color: 'from-accent to-green-600'
  },
  {
    icon: Shield,
    title: 'Privacy-Conscious Solutions',
    description: 'We help you decide what data should and should not go into AI tools, and where human checks are needed.',
    color: 'from-purple-500 to-primary'
  },
  {
    icon: Clock,
    title: 'Practical Implementation',
    description: 'Most starter workflows can be scoped, configured and handed over within days, not months.',
    color: 'from-orange-500 to-accent'
  }
];

const stats = [
  { number: '2 hrs', label: 'AI crash course' },
  { number: '2-5 days', label: 'Typical workflow setup' },
  { number: '30 days', label: 'Starter action plan' },
  { number: '100%', label: 'UK-based support' }
];

export default function Trust() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="trust" className="py-20 bg-gradient-to-b from-secondary/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
            Why Choose AI-Boffins?
          </div>

          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-gray-900">
            We're not just another{' '}
            <span className="text-primary">AI agency</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're UK-based specialists who believe AI should enhance human potential, not replace it.
            That's why we focus on practical workflows, consultancy and team training that make sense for British SMEs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {trustFactors.map((factor, index) => {
            const Icon = factor.icon;

            return (
              <div
                key={index}
                className={`text-center transform transition-all duration-700 ${
                  isVisible
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${factor.color} p-4 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-montserrat font-semibold text-gray-900 mb-3">
                  {factor.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {factor.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-primary to-accent p-8 rounded-3xl text-white mb-20">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-montserrat font-bold mb-4">
              The Numbers That Matter
            </h3>
            <p className="text-lg opacity-90">
              Practical support for UK teams adopting AI sensibly
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-sm opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-montserrat font-bold text-gray-900 mb-6">
                Why We're Different from Other AI Agencies
              </h3>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">We Don't Overwhelm</h4>
                    <p className="text-gray-600 text-sm">Focused workflows instead of vague promises about AI transformation</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">We Actually Implement</h4>
                    <p className="text-gray-600 text-sm">We do not just consult - we set up workflows and train your team</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">We're UK-Based</h4>
                    <p className="text-gray-600 text-sm">Local support, UK business context and practical data protection guidance</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">We Focus on Useful Work</h4>
                    <p className="text-gray-600 text-sm">Every service is chosen for a clear operational problem</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 rounded-2xl">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto">
                    <Heart className="h-10 w-10 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900">Our Promise</h4>
                  <p className="text-gray-600">
                    "We'll help you implement AI in a way your team understands, trusts and can keep using after handover."
                  </p>
                  <div className="flex items-center justify-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-500">Practical AI support for UK SMEs</p>
                </div>
              </div>

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
