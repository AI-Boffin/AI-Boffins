'use client';

import { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Quote, ArrowRight, TrendingUp, Clock, DollarSign, Users, Smile, Target } from 'lucide-react';

const caseStudies = [
  {
    company: 'Home Services Company',
    location: 'Manchester',
    industry: 'Trades & Maintenance',
    challenge: 'Enquiries arriving by phone, form and email were not always followed up quickly',
    solution: 'Customer Enquiry Assistant with quote capture, FAQ answers and handoff to the office team',
    results: {
      timeSaved: 'Less manual triage',
      responseTime: 'Faster first reply',
      customerSatisfaction: 'Fewer missed jobs'
    },
    quote: "Imagine every new enquiry being captured cleanly, with the right questions asked before your team calls back. AI can handle the first pass while people deal with the customer relationship.",
    icon: Users,
    color: 'from-blue-500 to-primary',
    service: 'Customer Enquiry Assistant'
  },
  {
    company: 'Professional Services Firm',
    location: 'Birmingham',
    industry: 'Business Services',
    challenge: 'Consultants were losing time turning meetings, notes and emails into client-ready actions',
    solution: 'Admin & Document Assistant for meeting summaries, action logs and document first drafts',
    results: {
      timeSaved: 'Less copy-paste admin',
      contentOutput: 'Cleaner action lists',
      teamProductivity: 'More client time'
    },
    quote: "Picture every meeting ending with a clear action list, follow-up email and draft summary. The team still checks the work, but they are not starting from a blank page.",
    icon: Target,
    color: 'from-accent to-green-600',
    service: 'Admin & Document Assistant'
  },
  {
    company: 'B2B Sales Company',
    location: 'Leeds',
    industry: 'Business Services',
    challenge: 'Quotes were being sent but not chased consistently',
    solution: 'Lead & Quote Follow-Up with quote chaser sequences and weekly missed-lead summaries',
    results: {
      leadConversion: 'More warm follow-up',
      followUpTime: 'Same-day prompts',
      salesRevenue: 'Better pipeline visibility'
    },
    quote: "Envision your team no longer relying on memory to chase quotes. AI-assisted reminders and templates can keep warm prospects moving without making the process feel robotic.",
    icon: Smile,
    color: 'from-purple-500 to-primary',
    service: 'Lead & Quote Follow-Up'
  },
  {
    company: 'Growing Local SME',
    location: 'Edinburgh',
    industry: 'Operations',
    challenge: 'Staff were experimenting with AI, but managers were unsure what was safe or useful',
    solution: 'AI Consultancy & Crash Course covering ChatGPT, Copilot, prompting, data safety and real business tasks',
    results: {
      timeSaved: 'Less uncertainty',
      accuracy: 'Better output checks',
      clientTurnaround: 'Clearer next steps'
    },
    quote: "Consider the difference between random AI use and a team that knows what to ask, what to check and what data to keep out of public tools. The crash course turns curiosity into a working habit.",
    icon: Clock,
    color: 'from-orange-500 to-accent',
    service: 'AI Consultancy & Crash Course'
  },
  {
    company: 'Electrical Contractor',
    location: 'Bristol',
    industry: 'Electrical Services',
    challenge: 'Field teams were sending job notes back to the office in inconsistent formats',
    solution: 'Admin & Document Assistant with standard job summary prompts and office handoff templates',
    results: {
      timeSaved: 'Cleaner handovers',
      jobBooking: 'Fewer admin gaps',
      customerResponse: 'Faster updates'
    },
    quote: "Think about engineers sending consistent job notes back to the office without needing to write polished updates from scratch. AI can structure the rough notes while people stay in control.",
    icon: Users,
    color: 'from-blue-500 to-primary',
    service: 'Admin & Document Assistant'
  },
  {
    company: 'Artisan Bakery',
    location: 'York',
    industry: 'Food Production',
    challenge: 'Marketing, review replies and seasonal updates were always pushed behind daily operations',
    solution: 'AI crash course plus a simple marketing prompt pack for offers, reviews and local updates',
    results: {
      timeSaved: 'Faster first drafts',
      wasteReduction: 'More consistent updates',
      stockAccuracy: 'Clearer brand voice'
    },
    quote: "Imagine having a practical prompt pack for offers, review replies and seasonal posts, so marketing no longer starts from a blank page at the end of a long day.",
    icon: Clock,
    color: 'from-orange-500 to-accent',
    service: 'AI Consultancy & Crash Course'
  }
];

export default function CaseStudies() {
  const [activeCase, setActiveCase] = useState(0);
  const [visibleElements, setVisibleElements] = useState(new Array(caseStudies.length + 1).fill(true).map((_, i) => i));
  const elementRefs = useRef([]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const observers = elementRefs.current.map((ref, index) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleElements(prev => {
              if (!prev.includes(index)) {
                return [...prev, index];
              }
              return prev;
            });
          }
        },
        { threshold: 0.05, rootMargin: '50px' }
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
            See How Practical AI Can Support Teams
          </div>
          
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-gray-900">
            Here are ways our{' '}
            <span className="text-primary">AI services can support</span> everyday work
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            These examples show realistic places to start: enquiries, follow-up, admin, documents and staff confidence.
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
                  <div className="inline-flex items-center px-3 py-1 bg-white/20 rounded-full text-sm mb-4">
                    {caseStudies[activeCase].service}
                  </div>
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {caseStudies.map((caseStudy, index) => {
            const Icon = caseStudy.icon;
            const isVisible = visibleElements.includes(index + 1);
            
            return (
              <div
                key={index}
                ref={el => elementRefs.current[index + 1] = el}
                className={`transform transition-all duration-500 ${
                  isVisible 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-4 opacity-0'
                }`}
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
                        <div className="text-xs font-medium text-gray-500 uppercase tracking-wide">AI Service Used</div>
                        <div className="text-sm font-medium text-primary mb-2">{caseStudy.service}</div>
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
              Ready to explore how AI could transform your team?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Discover where AI could remove friction from your team without overcomplicating the business.
              We will show you which workflow is worth testing first.
            </p>
            <Button 
              onClick={() => scrollToSection('contact')}
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white px-8 py-4 h-auto font-semibold group"
            >
              Book Your Free AI Review
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
