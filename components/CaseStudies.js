'use client';

import { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Quote, ArrowRight, TrendingUp, Clock, DollarSign, Users, Smile, Target } from 'lucide-react';

const caseStudies = [
  {
    company: 'Logistics Company',
    location: 'Milton Keynes',
    industry: 'Transport & Logistics',
    challenge: 'Team overwhelmed with repetitive admin tasks and customer queries',
    solution: 'AI automation that freed up time for strategic work and customer relationships',
    results: {
      timeSaved: '60 hours/month',
      teamProductivity: '+75%',
      jobSatisfaction: '92%'
    },
    quote: "Our team was drowning in admin work. Now they're focused on building relationships and growing the business. Sarah, our customer service lead, says she finally feels like she's making a real impact.",
    icon: Users,
    color: 'from-blue-500 to-primary'
  },
  {
    company: 'Estate Agency',
    location: 'Buckinghamshire',
    industry: 'Real Estate',
    challenge: 'Agents spending 40% of time on paperwork instead of clients',
    solution: 'AI-powered automation that lets agents focus on what they do best',
    results: {
      timeSaved: '40% admin reduction',
      clientSatisfaction: '+60%',
      agentEarnings: '+35%'
    },
    quote: "Our agents were frustrated with all the paperwork. Now they're closing more deals and earning more money. Mike hit 120% of his target last month and couldn't be happier.",
    icon: Target,
    color: 'from-accent to-green-600'
  },
  {
    company: 'Manufacturing SME',
    location: 'Bedfordshire',
    industry: 'Manufacturing',
    challenge: 'Operations team stuck in manual processes and error-prone tasks',
    solution: 'AI automation that eliminated boring tasks and boosted accuracy',
    results: {
      timeSaved: '25 hours/week',
      errorReduction: '99%',
      teamMorale: '+80%'
    },
    quote: "Our operations team was making mistakes and feeling demotivated. Now they're focused on process improvement and innovation. The whole team is more engaged and productive.",
    icon: Smile,
    color: 'from-purple-500 to-primary'
  }
];

export default function CaseStudies() {
  const [activeCase, setActiveCase] = useState(0);
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

  // Auto-rotate through case studies
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCase((prev) => (prev + 1) % caseStudies.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="case-studies" className="py-20 bg-gradient-to-b from-white to-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
            See How AI Empowers Teams
          </div>
          
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-gray-900">
            Real teams achieving{' '}
            <span className="text-primary">real results</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how teams across the UK are eliminating boring tasks, 
            achieving more, and actually enjoying their work with AI automation.
          </p>
        </div>

        {/* Main Featured Case Study */}
        <div 
          ref={el => elementRefs.current[0] = el}
          className={`mb-16 transform transition-all duration-700 ${
            visibleElements.includes(0) 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-8 opacity-0'
          }`}
        >
          <Card className="bg-gradient-to-br from-primary to-accent text-white shadow-2xl border-0 overflow-hidden">
            <CardContent className="p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Quote Side */}
                <div className="space-y-6">
                  <Quote className="h-12 w-12 text-white/80" />
                  <blockquote className="text-2xl md:text-3xl font-light leading-relaxed">
                    {caseStudies[activeCase].quote}
                  </blockquote>
                  <div className="space-y-2">
                    <div className="font-semibold text-lg">
                      {caseStudies[activeCase].company}
                    </div>
                    <div className="text-white/80">
                      {caseStudies[activeCase].location} • {caseStudies[activeCase].industry}
                    </div>
                  </div>
                </div>

                {/* Results Side */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-montserrat font-bold mb-6">Team Impact</h3>
                  <div className="grid gap-4">
                    {Object.entries(caseStudies[activeCase].results).map(([key, value], index) => (
                      <div key={key} className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                        <div className="text-3xl font-bold mb-1">{value}</div>
                        <div className="text-white/80 text-sm capitalize">
                          {key.replace(/([A-Z])/g, ' $1').toLowerCase()}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Case Study Navigation */}
              <div className="flex justify-center mt-8 space-x-3">
                {caseStudies.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveCase(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      activeCase === index 
                        ? 'bg-white scale-125' 
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Case Studies Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {caseStudies.map((caseStudy, index) => {
            const Icon = caseStudy.icon;
            const isVisible = visibleElements.includes(index + 1);
            
            return (
              <div
                key={index}
                ref={el => elementRefs.current[index + 1] = el}
                className={`transform transition-all duration-700 ${
                  isVisible 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg group hover:-translate-y-2">
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${caseStudy.color} p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    
                    <h3 className="font-montserrat font-bold text-lg text-gray-900 mb-2">
                      {caseStudy.company}
                    </h3>
                    
                    <p className="text-sm text-gray-600 mb-4">
                      {caseStudy.location} • {caseStudy.industry}
                    </p>
                    
                    <div className="space-y-3 mb-6">
                      <div>
                        <div className="text-xs font-medium text-gray-500 uppercase tracking-wide">Team Challenge</div>
                        <div className="text-sm text-gray-700">{caseStudy.challenge}</div>
                      </div>
                      <div>
                        <div className="text-xs font-medium text-gray-500 uppercase tracking-wide">AI Solution</div>
                        <div className="text-sm text-gray-700">{caseStudy.solution}</div>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-gray-100">
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium text-accent">
                          {Object.values(caseStudy.results)[0]}
                        </span>
                        <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div 
          ref={el => elementRefs.current[4] = el}
          className={`text-center transform transition-all duration-700 ${
            visibleElements.includes(4) 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-8 opacity-0'
          }`}
        >
          <div className="bg-gradient-to-r from-secondary to-white p-8 rounded-3xl border border-gray-100">
            <h3 className="text-2xl font-montserrat font-bold text-gray-900 mb-4">
              Ready to empower your team?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join hundreds of UK teams already achieving more and enjoying their work with AI automation. 
              Let's show you how your team can benefit.
            </p>
            <Button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white px-8 py-4 h-auto font-semibold group"
            >
              Book Your Free Team Assessment
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}