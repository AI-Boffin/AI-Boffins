'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Calendar, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    service: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset form after success
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          message: '',
          service: ''
        });
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
            Ready to Start? Let's Chat.
          </div>
          
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-gray-900">
            Get your{' '}
            <span className="text-primary">free AI audit</span>{' '}
            today
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Book a consultation or send us a message. We'll show you exactly how AI 
            can transform your business operations.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <Card className="shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-lg font-montserrat">
                  <Phone className="h-5 w-5 text-accent mr-3" />
                  Phone
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">Speak to our AI experts</p>
                <a 
                  href="tel:01234567890"
                  className="text-xl font-semibold text-primary hover:text-accent transition-colors"
                >
                  01234 567890
                </a>
                <p className="text-sm text-gray-500 mt-2">Mon-Fri, 9am-6pm GMT</p>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-lg font-montserrat">
                  <Mail className="h-5 w-5 text-accent mr-3" />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">Send us your requirements</p>
                <a 
                  href="mailto:hello@aiboffins.co.uk"
                  className="text-xl font-semibold text-primary hover:text-accent transition-colors"
                >
                  hello@aiboffins.co.uk
                </a>
                <p className="text-sm text-gray-500 mt-2">We respond within 2 hours</p>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-lg font-montserrat">
                  <MapPin className="h-5 w-5 text-accent mr-3" />
                  Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">UK-based team</p>
                <p className="text-xl font-semibold text-primary">
                  Milton Keynes, UK
                </p>
                <p className="text-sm text-gray-500 mt-2">Serving businesses nationwide</p>
              </CardContent>
            </Card>

            {/* Calendly Integration */}
            <Card className="bg-gradient-to-br from-primary to-accent text-white shadow-xl border-0">
              <CardHeader>
                <CardTitle className="flex items-center text-lg font-montserrat">
                  <Calendar className="h-5 w-5 mr-3" />
                  Book a Call
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/90 mb-4">
                  Schedule a free 30-minute consultation to discuss your AI automation needs.
                </p>
                <Button 
                  className="w-full bg-white text-primary hover:bg-gray-100 font-semibold"
                  onClick={() => {
                    // In a real implementation, this would open Calendly
                    window.open('https://calendly.com/aiboffins', '_blank');
                  }}
                >
                  Schedule Free Consultation
                </Button>
                <p className="text-white/70 text-sm mt-3 text-center">
                  No commitment • Free expert advice
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-xl border-0">
              <CardHeader>
                <CardTitle className="text-2xl font-montserrat font-bold text-gray-900">
                  Send us a message
                </CardTitle>
                <p className="text-gray-600">
                  Tell us about your business and we'll recommend the perfect AI solution.
                </p>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="h-16 w-16 text-accent mx-auto mb-4" />
                    <h3 className="text-2xl font-montserrat font-bold text-gray-900 mb-2">
                      Thank you!
                    </h3>
                    <p className="text-gray-600 mb-4">
                      We've received your message and will get back to you within 2 hours.
                    </p>
                    <div className="bg-accent/10 text-accent p-4 rounded-lg inline-block">
                      <strong>Next steps:</strong> We'll analyze your requirements and prepare 
                      a custom AI automation plan for your business.
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <Input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          required
                          className="h-12"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <Input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your@email.com"
                          required
                          className="h-12"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                          Company Name *
                        </label>
                        <Input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Your company name"
                          required
                          className="h-12"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <Input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="01234 567890"
                          className="h-12"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                        Which service interests you most?
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full h-12 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      >
                        <option value="">Select a service</option>
                        <option value="customer-support">AI Customer Support</option>
                        <option value="document-automation">Document Automation</option>
                        <option value="workflow-automation">Workflow Automation</option>
                        <option value="lead-generation">Lead Generation AI</option>
                        <option value="custom">Custom Solution</option>
                        <option value="consultation">Just want a consultation</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Tell us about your business *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="What challenges are you facing? What processes take up most of your time? How many team members do you have?"
                        required
                        className="min-h-[120px]"
                      />
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                        <div className="text-sm text-gray-600">
                          <strong>What happens next?</strong> We'll review your requirements and send you a 
                          custom AI automation plan within 24 hours, including potential cost savings and implementation timeline.
                        </div>
                      </div>
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      size="lg"
                      className="w-full bg-accent hover:bg-accent/90 text-white text-lg py-4 h-auto font-semibold group disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center">
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Sending Message...
                        </div>
                      ) : (
                        <>
                          Send Message & Get Free AI Plan
                          <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </Button>

                    <p className="text-xs text-gray-500 text-center">
                      By submitting this form, you agree to our privacy policy. We'll never share your information 
                      and you can unsubscribe at any time.
                    </p>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}