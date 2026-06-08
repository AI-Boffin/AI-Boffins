'use client';

import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, BarChart3, Bot, Check, FileText, GraduationCap, Star } from 'lucide-react';

const services = [
  {
    name: 'Customer Enquiry Assistant',
    shortName: 'Enquiries',
    description: 'AI-assisted FAQs, enquiry capture, booking prompts and live handoff',
    icon: Bot,
    basePrice: '£59',
    proPrice: '£119',
    setupFee: '£399',
    installTime: '1-2 days',
    features: [
      'Website enquiry assistant',
      'Up to 75 conversations/month',
      'FAQ and service-page training',
      'Lead capture email alerts',
      'Safe-use handover notes'
    ],
    proFeatures: [
      'Up to 300 conversations/month',
      'Quote request forms',
      'WhatsApp or Facebook handoff',
      'Monthly conversation review',
      'Priority tweaks and support',
      'More knowledge sources'
    ],
    color: 'from-blue-500 to-primary'
  },
  {
    name: 'Lead & Quote Follow-Up',
    shortName: 'Follow-Up',
    description: 'Follow-up workflows for quotes, warm leads and slow sales admin',
    icon: BarChart3,
    basePrice: '£79',
    proPrice: '£149',
    setupFee: '£499',
    installTime: '2-5 days',
    features: [
      'One lead source connected',
      'Quote chaser email sequence',
      'CRM pipeline tidy-up',
      'AI follow-up templates',
      'Weekly missed-lead summary'
    ],
    proFeatures: [
      'Multiple lead sources',
      'Custom CRM stages',
      'Sales dashboard',
      'Proposal and reply templates',
      'Team workflow training',
      'Monthly optimisation call'
    ],
    color: 'from-accent to-green-600'
  },
  {
    name: 'Admin & Document Assistant',
    shortName: 'Admin',
    description: 'Meeting notes, document summaries, forms and paperwork automation',
    icon: FileText,
    basePrice: '£69',
    proPrice: '£139',
    setupFee: '£449',
    installTime: '2-5 days',
    features: [
      'Meeting notes workflow',
      'Document summary templates',
      'Reusable prompt library',
      'One admin automation',
      'Basic team training'
    ],
    proFeatures: [
      'Three admin automations',
      'Invoice or form extraction',
      'Microsoft 365 or Google setup',
      'Approval steps and checks',
      'Department prompt packs',
      'Monthly support slot'
    ],
    color: 'from-purple-500 to-primary'
  },
  {
    name: 'AI Consultancy & Crash Course',
    shortName: 'Training',
    description: 'A practical AI crash course and consultancy session for your team',
    icon: GraduationCap,
    basePrice: '£360',
    proPrice: '£780',
    setupFee: '£0',
    installTime: '2 hours / half day',
    baseLabel: 'Crash Course',
    proLabel: 'Half-Day Workshop',
    features: [
      '2-hour remote crash course',
      'Up to 8 attendees',
      'ChatGPT and Copilot basics',
      'Safe AI use and data guidance',
      'Prompt pack and 30-day plan'
    ],
    proFeatures: [
      'Half-day remote workshop',
      'Up to 20 attendees',
      'Role-specific business exercises',
      'AI opportunity mapping',
      'Management Q&A',
      'Follow-up action report'
    ],
    color: 'from-orange-500 to-accent'
  }
];

export default function Pricing() {
  const [visibleCards, setVisibleCards] = useState([]);
  const [selectedService, setSelectedService] = useState(0);
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
    <section id="pricing" className="py-20 bg-gradient-to-b from-secondary/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
            Transparent SME Pricing
          </div>

          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-gray-900">
            Practical AI help,{' '}
            <span className="text-accent">priced for small teams</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We price below typical UK AI consultancy and workshop rates while keeping enough room for proper setup,
            training and support. Automation services have a one-off setup fee plus monthly support.
          </p>
        </div>

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
                <span className="text-sm font-medium">{service.shortName}</span>
              </button>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
          {(() => {
            const service = services[selectedService];
            const Icon = service.icon;
            const baseTitle = service.baseLabel || 'Base';
            const proTitle = service.proLabel || 'Pro';
            const isTraining = service.setupFee === '£0';

            return (
              <>
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
                        {service.name} - {baseTitle}
                      </CardTitle>
                      <CardDescription className="text-gray-600 mb-4">
                        {service.description}
                      </CardDescription>

                      <div className="space-y-2">
                        {!isTraining && (
                          <>
                            <div className="text-sm text-gray-500">Setup Fee</div>
                            <div className="text-2xl font-bold text-primary">
                              {service.setupFee}
                            </div>
                            <div className="text-sm text-gray-500 mt-4">Monthly</div>
                          </>
                        )}
                        <div className="text-3xl font-montserrat font-bold text-gray-900">
                          {service.basePrice}
                          {!isTraining && <span className="text-base font-normal text-gray-500">/month</span>}
                        </div>
                        <div className="text-sm text-gray-500">Typical setup: {service.installTime}</div>
                      </div>
                    </CardHeader>

                    <CardContent className="pt-0">
                      <ul className="space-y-3 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start text-sm text-gray-700">
                            <Check className="h-4 w-4 text-accent mr-3 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <Button
                        onClick={() => scrollToSection('contact')}
                        className="w-full bg-gray-800 hover:bg-gray-900 text-white font-semibold py-3 h-auto group transition-all duration-300"
                      >
                        Get Started
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                </div>

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
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-accent text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4" />
                        <span>Best Value</span>
                      </div>
                    </div>

                    <CardHeader className="text-center pb-4 pt-8">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-4 mx-auto mb-4`}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-xl font-montserrat font-bold text-gray-900 mb-2">
                        {service.name} - {proTitle}
                      </CardTitle>
                      <CardDescription className="text-gray-600 mb-4">
                        More scope, more training and more support for teams ready to embed AI properly.
                      </CardDescription>

                      <div className="space-y-2">
                        {!isTraining && (
                          <>
                            <div className="text-sm text-gray-500">Setup Fee</div>
                            <div className="text-2xl font-bold text-primary">
                              {service.setupFee}
                            </div>
                            <div className="text-sm text-gray-500 mt-4">Monthly</div>
                          </>
                        )}
                        <div className="text-3xl font-montserrat font-bold text-gray-900">
                          {service.proPrice}
                          {!isTraining && <span className="text-base font-normal text-gray-500">/month</span>}
                        </div>
                        <div className="text-sm text-gray-500">Typical setup: {service.installTime}</div>
                      </div>
                    </CardHeader>

                    <CardContent className="pt-0">
                      <ul className="space-y-3 mb-6">
                        {service.proFeatures.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start text-sm text-gray-700">
                            <Check className="h-4 w-4 text-accent mr-3 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <Button
                        onClick={() => scrollToSection('contact')}
                        className="w-full bg-accent hover:bg-accent/90 text-white font-semibold py-3 h-auto group transition-all duration-300"
                      >
                        Ask About This
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </>
            );
          })()}
        </div>

        <div className="text-center mb-16">
          <div className="bg-gradient-to-r from-primary to-accent p-8 rounded-3xl text-white">
            <h3 className="text-2xl font-montserrat font-bold mb-4">
              Want a managed AI starter package?
            </h3>
            <p className="text-lg opacity-90 mb-6">
              Combine a crash course, one enquiry or admin workflow, and 90 days of support.
            </p>
            <div className="text-4xl font-bold mb-4">£249/month</div>
            <p className="text-sm opacity-90 mb-6">Setup: £995 | Minimum term: 3 months</p>
            <Button
              onClick={() => scrollToSection('contact')}
              size="lg"
              className="bg-white text-primary px-8 py-4 h-auto font-semibold hover:shadow-lg transition-all duration-300"
            >
              Ask About Starter Package
            </Button>
          </div>
        </div>

        <div className="text-center space-y-8">
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-8 rounded-3xl border border-gray-100">
            <h3 className="text-2xl font-montserrat font-bold text-gray-900 mb-4">
              Not sure where AI would help?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Book a free AI review and we will identify the most realistic first workflow, the tools involved and
              the training your team would need.
            </p>
            <Button
              onClick={() => scrollToSection('contact')}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 h-auto font-semibold"
            >
              Book Free AI Review
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            <span>All setup projects include handover training</span>
            <span>GDPR-aware implementation guidance</span>
            <span>UK-based support team</span>
            <span>Remote and onsite options available</span>
          </div>
        </div>
      </div>
    </section>
  );
}
