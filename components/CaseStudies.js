'use client';

import { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Quote, ArrowRight, TrendingUp, Clock, DollarSign, Users, Smile, Target } from 'lucide-react';

const caseStudies = [
  {
    company: 'E-commerce Retailer',
    location: 'Manchester',
    industry: 'Online Retail',
    challenge: 'Customer support team overwhelmed with 200+ daily queries, 80% were repetitive FAQs',
    solution: 'AI Chatbot + Live Chat Support could handle 70% of queries automatically',
    results: {
      timeSaved: '15 hours/week',
      responseTime: '90% faster',
      customerSatisfaction: '+45%'
    },
    quote: "Imagine your support team no longer drowning in repetitive questions. An AI chatbot could handle the basics while your team focuses on complex issues. Your support lead could finally have time to provide excellent service.",
    icon: Users,
    color: 'from-blue-500 to-primary',
    service: 'AI Chatbot + Live Chat'
  },
  {
    company: 'Marketing Agency',
    location: 'Birmingham',
    industry: 'Digital Marketing',
    challenge: 'Content team spending 25 hours/week on blog posts and social media content',
    solution: 'Automated Content Generation & Marketing could produce 80% of routine content',
    results: {
      timeSaved: '20 hours/week',
      contentOutput: '+300%',
      teamProductivity: '+60%'
    },
    quote: "Picture your content team breaking free from repetitive writing. AI could generate the first draft while your team adds creativity and strategy. You could be producing 3x more content with better quality.",
    icon: Target,
    color: 'from-accent to-green-600',
    service: 'Content Generation & Marketing'
  },
  {
    company: 'B2B Sales Company',
    location: 'Leeds',
    industry: 'Business Services',
    challenge: 'Sales team losing leads due to slow follow-up and poor lead scoring',
    solution: 'AI-Enhanced CRM & Sales Workflow with automated lead scoring and follow-ups',
    results: {
      leadConversion: '+40%',
      followUpTime: '90% faster',
      salesRevenue: '+35%'
    },
    quote: "Envision your sales team never missing opportunities again. AI could prioritize leads and send personalized follow-ups automatically. Your whole team could be hitting targets they never thought possible.",
    icon: Smile,
    color: 'from-purple-500 to-primary',
    service: 'CRM & Sales AI'
  },
  {
    company: 'Legal Practice',
    location: 'Edinburgh',
    industry: 'Legal Services',
    challenge: 'Paralegals spending 30+ hours/week on document transcription and admin tasks',
    solution: 'AI Transcription & Admin Automation could handle 85% of routine document processing',
    results: {
      timeSaved: '25 hours/week',
      accuracy: '99.5%',
      clientTurnaround: '+50% faster'
    },
    quote: "Consider your paralegals freed from mind-numbing transcription work. AI could handle the routine stuff while they focus on legal research and client service. Your whole practice could be more efficient with faster client turnaround.",
    icon: Clock,
    color: 'from-orange-500 to-accent',
    service: 'Transcription & Admin AI'
  },
  {
    company: 'Electrical Contractor',
    location: 'Bristol',
    industry: 'Electrical Services',
    challenge: 'Field teams spending 2+ hours daily on admin tasks, scheduling, and customer follow-ups',
    solution: 'AI Chatbot + CRM could automate scheduling, quotes, and customer communications',
    results: {
      timeSaved: '10 hours/week',
      jobBooking: '+60%',
      customerResponse: 'Instant'
    },
    quote: "Think about your field teams focusing purely on electrical work instead of admin. An AI chatbot could handle customer inquiries and booking while your CRM automatically follows up on quotes. You could book more jobs with instant customer responses.",
    icon: Users,
    color: 'from-blue-500 to-primary',
    service: 'AI Chatbot + CRM'
  },
  {
    company: 'Artisan Bakery',
    location: 'York',
    industry: 'Food Production',
    challenge: 'Daily stock management taking 3+ hours, frequent ingredient shortages affecting production',
    solution: 'AI-powered inventory tracking with automated restocking alerts and supplier ordering',
    results: {
      timeSaved: '12 hours/week',
      wasteReduction: '-40%',
      stockAccuracy: '99%'
    },
    quote: "Imagine never running out of flour or yeast again. AI could track your ingredient levels, predict usage patterns, and automatically alert suppliers when restocking is needed. You could reduce waste by 40% while ensuring perfect stock accuracy.",
    icon: Clock,
    color: 'from-orange-500 to-accent',
    service: 'Transcription & Admin AI'
  }
];

export default function CaseStudies() {
  const [activeCase, setActiveCase] = useState(0);
  const [visibleElements, setVisibleElements] = useState([]);
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
            See How Our Four AI Services Transform Teams
          </div>
          
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-gray-900">
            Here are ways our{' '}
            <span className="text-primary">AI services can support</span> your business
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how our four core AI services can help eliminate repetitive tasks, 
            boost productivity, and transform how your team works.
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
              Discover how our four AI services could help your team save 15+ hours per week. 
              Let's show you which service could give you the biggest productivity boost.
            </p>
            <Button 
              onClick={() => scrollToSection('contact')}
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