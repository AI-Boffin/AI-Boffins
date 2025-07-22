'use client';

import { useState, useEffect, useRef } from 'react';
import { Shield, Award, Users, MapPin, Check, Star, Heart, Zap } from 'lucide-react';

const trustElements = [
  {
    icon: Heart,
    title: 'Team-First Approach',
    description: 'We design AI solutions that enhance your team\'s work, never replace it. Your people come first.',
    color: 'from-green-500 to-accent'
  },
  {
    icon: MapPin,
    title: 'UK-Based Team Support',
    description: 'Real people supporting real teams. Our entire team is based right here in the UK.',
    color: 'from-blue-500 to-primary'
  },
  {
    icon: Award,
    title: 'Backed by IT Boffins Reputation',
    description: 'Part of the trusted IT Boffins family, serving UK teams for over a decade.',
    color: 'from-purple-500 to-primary'
  },
  {
    icon: Shield,
    title: 'Secure & Private',
    description: 'Your team\'s data stays yours. We never store or share sensitive information.',
    color: 'from-orange-500 to-accent'
  }
];

const credentials = [
  'Team Training Certified',
  'GDPR Compliant',
  'Cyber Essentials Plus',
  'UK Government Framework',
  'SME Business Approved',
  'Microsoft Partner'
];

export default function Trust() {
  const [visibleElements, setVisibleElements] = useState([]);
  const elementRefs = useRef([]);

  useEffect(() => {
    const observers = elementRefs.current.map((ref, index) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleElements(prev => [...new Set([...prev, index])]);
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
    <section className="py-20 bg-gradient-to-b from-secondary/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
            Trust & Team Empowerment
          </div>
          
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-gray-900">
            Your team is safe with{' '}
            <span className="text-accent">AI Boffins</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We understand that trust is earned. That's why we've built our reputation on 
            empowering teams, not replacing them, with secure and compliant AI solutions.
          </p>
        </div>

        {/* Trust Elements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {trustElements.map((element, index) => {
            const Icon = element.icon;
            const isVisible = visibleElements.includes(index);
            
            return (
              <div
                key={index}
                ref={el => elementRefs.current[index] = el}
                className={`text-center transform transition-all duration-700 ${
                  isVisible 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="group hover:scale-105 transition-transform duration-300">
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${element.color} p-5 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                    <Icon className="h-10 w-10 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-montserrat font-bold text-gray-900 mb-3">
                    {element.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {element.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Credentials Section */}
        <div 
          ref={el => elementRefs.current[4] = el}
          className={`transform transition-all duration-700 ${
            visibleElements.includes(4) 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-8 opacity-0'
          }`}
        >
          <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-montserrat font-bold text-gray-900 mb-4">
                Certified & Team-Focused
              </h3>
              <p className="text-gray-600">
                We maintain the highest standards of security, compliance, and team empowerment.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {credentials.map((credential, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-center p-4 bg-gray-50 rounded-xl hover:bg-primary/5 transition-colors duration-300"
                >
                  <div className="text-center">
                    <Check className="h-6 w-6 text-accent mx-auto mb-2" />
                    <div className="text-sm font-medium text-gray-700">
                      {credential}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div 
          ref={el => elementRefs.current[5] = el}
          className={`mt-16 transform transition-all duration-700 ${
            visibleElements.includes(5) 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-8 opacity-0'
          }`}
        >
          <div className="bg-gradient-to-r from-primary to-accent p-8 rounded-3xl text-white">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-montserrat font-bold mb-2">500+</div>
                <div className="text-white/90">UK Workers Empowered</div>
              </div>
              <div>
                <div className="text-4xl font-montserrat font-bold mb-2">99.9%</div>
                <div className="text-white/90">Uptime Guarantee</div>
              </div>
              <div>
                <div className="text-4xl font-montserrat font-bold mb-2">24/7</div>
                <div className="text-white/90">Team Support</div>
              </div>
              <div>
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <div className="text-white/90">Team Satisfaction</div>
              </div>
            </div>
          </div>
        </div>

        {/* Final Trust Statement */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-secondary to-white p-8 rounded-3xl border border-gray-100">
            <h3 className="text-2xl font-montserrat font-bold text-gray-900 mb-4">
              🇬🇧 Proudly British, Team-Focused
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              As a UK-based company, we understand the unique challenges British teams face. 
              From GDPR compliance to local workplace dynamics, we've got you covered with solutions 
              designed to empower your people, not replace them.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}