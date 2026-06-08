'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Send, CheckCircle, Users } from 'lucide-react';
import emailjs from '@emailjs/browser';

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
    
    try {
      // EmailJS configuration - Read from environment variables with fallbacks
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_p5sojk8';
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_mk77o7v';
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '9kVunWNyXihFri4Qj';
      
      console.log('EmailJS Config loaded');
      
      if (!serviceId || !templateId || !publicKey) {
        console.error('EmailJS environment variables are not set');
        alert('Email service is not configured. Please contact us directly at info@aiboffins.co.uk');
        setIsSubmitting(false);
        return;
      }
      
      // Map service key to reader-friendly label
      const serviceLabels = {
        'customer-enquiry': 'Customer Enquiry Assistant',
        'lead-follow-up': 'Lead & Quote Follow-Up',
        'admin-documents': 'Admin & Document Assistant',
        'ai-training': 'AI Consultancy & Crash Course',
        'starter-package': 'Managed AI Starter Package',
        'consultation': 'Not sure - need a consultation'
      };
      const serviceLabel = serviceLabels[formData.service] || formData.service || 'General Inquiry';

      // Build a premium HTML email template matching the AI Boffins brand
      const htmlMessage = `
<div style="font-family: system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; padding: 40px 20px; color: #1e293b;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.025); border: 1px solid #e2e8f0;">
    
    <!-- Header -->
    <div style="background-color: #1E4B7C; padding: 32px; text-align: center; border-bottom: 4px solid #FFAA00;">
      <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 800; letter-spacing: -0.5px;">
        AI <span style="color: #FFAA00;">Boffins</span>
      </h1>
      <p style="margin: 4px 0 0 0; color: #e2e8f0; font-size: 14px;">New Lead Submission</p>
    </div>

    <!-- Content Body -->
    <div style="padding: 32px;">
      <h2 style="margin-top: 0; margin-bottom: 24px; color: #0f172a; font-size: 18px; font-weight: 700; border-bottom: 1px solid #f1f5f9; padding-bottom: 12px;">
        Contact Details
      </h2>

      <!-- Details Table -->
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 32px;">
        <tr>
          <td style="padding: 10px 0; font-size: 14px; color: #64748b; width: 35%; font-weight: 600; border-bottom: 1px solid #f1f5f9;">Name</td>
          <td style="padding: 10px 0; font-size: 14px; color: #0f172a; border-bottom: 1px solid #f1f5f9; font-weight: 500;">${formData.name}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; font-size: 14px; color: #64748b; border-bottom: 1px solid #f1f5f9; font-weight: 600;">Email</td>
          <td style="padding: 10px 0; font-size: 14px; color: #1E4B7C; border-bottom: 1px solid #f1f5f9; font-weight: 500;">
            <a href="mailto:${formData.email}" style="color: #1E4B7C; text-decoration: none;">${formData.email}</a>
          </td>
        </tr>
        <tr>
          <td style="padding: 10px 0; font-size: 14px; color: #64748b; border-bottom: 1px solid #f1f5f9; font-weight: 600;">Company</td>
          <td style="padding: 10px 0; font-size: 14px; color: #0f172a; border-bottom: 1px solid #f1f5f9;">${formData.company}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; font-size: 14px; color: #64748b; border-bottom: 1px solid #f1f5f9; font-weight: 600;">Phone</td>
          <td style="padding: 10px 0; font-size: 14px; color: #0f172a; border-bottom: 1px solid #f1f5f9;">
            ${formData.phone ? `<a href="tel:${formData.phone}" style="color: #0f172a; text-decoration: none;">${formData.phone}</a>` : '<span style="color: #cbd5e1; font-style: italic;">Not provided</span>'}
          </td>
        </tr>
        <tr>
          <td style="padding: 10px 0; font-size: 14px; color: #64748b; border-bottom: 1px solid #f1f5f9; font-weight: 600;">Service Interest</td>
          <td style="padding: 10px 0; font-size: 14px; color: #2DBE7F; font-weight: 600; border-bottom: 1px solid #f1f5f9;">
            ${serviceLabel}
          </td>
        </tr>
      </table>

      <!-- Message Section -->
      <h2 style="margin-top: 0; margin-bottom: 16px; color: #0f172a; font-size: 18px; font-weight: 700; border-bottom: 1px solid #f1f5f9; padding-bottom: 12px;">
        Team Challenges & Inquiry
      </h2>
      <div style="background-color: #f8fafc; border-radius: 12px; padding: 20px; border: 1px solid #e2e8f0; line-height: 1.6; font-size: 14px; color: #334155; white-space: pre-wrap;">${formData.message}</div>
    </div>

    <!-- Footer -->
    <div style="background-color: #f1f5f9; padding: 24px; text-align: center; font-size: 12px; color: #64748b; border-top: 1px solid #e2e8f0;">
      <p style="margin: 0 0 8px 0; font-weight: 600;">AI Boffins Lead Generation</p>
      <p style="margin: 0;">This email was automatically generated and sent from <a href="https://aiboffins.co.uk" style="color: #1E4B7C; text-decoration: none; font-weight: 500;">aiboffins.co.uk</a>.</p>
    </div>
  </div>
</div>
`;

      // Prepare template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company,
        phone: formData.phone || 'Not provided',
        service: serviceLabel,
        message: formData.message,
        html_message: htmlMessage,
        to_email: 'info@aiboffins.co.uk'
      };
      
      // Send email using EmailJS (newer API version)
      await emailjs.send(serviceId, templateId, templateParams, {
        publicKey: publicKey
      });
      
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
      
    } catch (error) {
      console.error('Failed to send email:', error);
      console.error('Error details:', error.text || error.message || error);
      setIsSubmitting(false);
      
      // Show more detailed error message to help debug
      const errorMsg = error.text || error.message || 'Unknown error';
      alert(`Failed to send message: ${errorMsg}. Please contact us directly at info@aiboffins.co.uk`);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
            Ready to Make AI Useful? Let's Chat.
          </div>
          
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-gray-900">
            Get your{' '}
            <span className="text-primary">free AI review</span>{' '}
            today
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Book a consultation or send us a message. We'll help you identify the simplest workflow to improve first,
            and whether your team needs setup, consultancy, training or all three.
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
                <p className="text-gray-600 mb-2">Speak to our team empowerment experts</p>
                <a 
                  href="tel:01908410917"
                  className="text-xl font-semibold text-primary hover:text-accent transition-colors"
                >
                  01908 410917
                </a>
                <p className="text-sm text-gray-500 mt-2">Mon-Fri, 930am-430pm GMT</p>
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
                <p className="text-gray-600 mb-2">Send us your team's challenges</p>
                <a 
                  href="mailto:info@aiboffins.co.uk"
                  className="text-xl font-semibold text-primary hover:text-accent transition-colors"
                >
                  info@aiboffins.co.uk
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
                <p className="text-sm text-gray-500 mt-2">Serving teams nationwide</p>
              </CardContent>
            </Card>

          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-xl border-0">
              <CardHeader>
                <CardTitle className="text-2xl font-montserrat font-bold text-gray-900">
                  Tell us about your team
                </CardTitle>
                <p className="text-gray-600">
                  Share your team's challenges and we'll show you where AI can help without overcomplicating the business.
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
                      <strong>Next steps:</strong> We'll analyze your team's challenges and prepare 
                      a practical AI starting plan for your team.
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
                        Which AI service interests you most?
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full h-12 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      >
                        <option value="">Select a service</option>
                        <option value="customer-enquiry">Customer Enquiry Assistant</option>
                        <option value="lead-follow-up">Lead & Quote Follow-Up</option>
                        <option value="admin-documents">Admin & Document Assistant</option>
                        <option value="ai-training">AI Consultancy & Crash Course</option>
                        <option value="starter-package">Managed AI Starter Package</option>
                        <option value="consultation">Not sure - need a consultation</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Tell us about your team's challenges * 
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="What repetitive tasks frustrate your team? Where do leads, admin or customer enquiries slow down? How many people need to use AI? What would you like to improve in the next 30 days?"
                        required
                        className="min-h-[120px]"
                      />
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                        <div className="text-sm text-gray-600">
                          <strong>What happens next?</strong> We'll review your team's challenges and send you a 
                          practical AI starting plan within 24 hours, including which workflow to start with, likely tools,
                          pricing and the training your team would need.
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
