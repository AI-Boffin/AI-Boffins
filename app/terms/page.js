import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Terms of Service - AI Boffins',
  description: 'Read our terms of service and understand the conditions for using AI Boffins services and website.',
};

export default function TermsOfService() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/90 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-montserrat font-bold text-4xl md:text-5xl mb-6">
            Terms of Service
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            The terms and conditions for using our AI services
          </p>
          <div className="mt-6 flex items-center justify-center space-x-4 text-sm text-white/80">
            <span>Last updated: {new Date().toLocaleDateString('en-GB')}</span>
            <span>•</span>
            <span>UK Law Governed</span>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="font-montserrat font-bold text-2xl text-primary mb-4">
                Agreement to Terms
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                These Terms of Service ("Terms") govern your use of the AI Boffins website and services 
                operated by AI Boffins ("we", "our", or "us"). By accessing or using our services, 
                you agree to be bound by these Terms and our Privacy Policy.
              </p>
              <p className="text-gray-700 leading-relaxed">
                If you disagree with any part of these terms, then you may not access our services. 
                These Terms apply to all visitors, users, and others who access or use our services.
              </p>
            </div>

            {/* Services Description */}
            <div className="mb-12">
              <h2 className="font-montserrat font-bold text-2xl text-primary mb-4">
                Our Services
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                AI Boffins provides AI-powered business solutions including:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li>AI Chatbot and Live Chat services</li>
                <li>Content Generation and Marketing tools</li>
                <li>CRM and Sales AI automation</li>
                <li>Transcription and Administrative AI</li>
                <li>Full Service Bundles</li>
                <li>Team assessment and consultation services</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to modify, suspend, or discontinue any part of our services 
                at any time with reasonable notice.
              </p>
            </div>

            {/* User Accounts */}
            <div className="mb-12">
              <h2 className="font-montserrat font-bold text-2xl text-primary mb-4">
                User Accounts and Registration
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                When you create an account with us, you must provide accurate, complete, and current information. 
                You are responsible for safeguarding the password and for all activities that occur under your account.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                You agree not to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li>Use false or misleading information when creating an account</li>
                <li>Share your account credentials with others</li>
                <li>Use our services for any illegal or unauthorized purpose</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with or disrupt our services</li>
              </ul>
            </div>

            {/* Acceptable Use */}
            <div className="mb-12">
              <h2 className="font-montserrat font-bold text-2xl text-primary mb-4">
                Acceptable Use Policy
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You agree to use our services only for lawful purposes and in accordance with these Terms. 
                You must not use our services:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li>In any way that violates applicable laws or regulations</li>
                <li>To transmit or store malicious code, viruses, or harmful content</li>
                <li>To infringe on intellectual property rights</li>
                <li>To harass, abuse, or harm others</li>
                <li>To generate spam or unsolicited communications</li>
                <li>To attempt to reverse engineer our services</li>
                <li>To use our services for competitive analysis without permission</li>
              </ul>
            </div>

            {/* Intellectual Property */}
            <div className="mb-12">
              <h2 className="font-montserrat font-bold text-2xl text-primary mb-4">
                Intellectual Property Rights
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our services and their original content, features, and functionality are owned by AI Boffins 
                and are protected by international copyright, trademark, patent, trade secret, and other 
                intellectual property laws.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                You retain ownership of content you create using our services, but you grant us a license to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li>Use your content to provide and improve our services</li>
                <li>Display your content as part of our service delivery</li>
                <li>Analyze usage patterns to enhance our AI capabilities</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                You are responsible for ensuring you have the rights to any content you input into our services.
              </p>
            </div>

            {/* Payment Terms */}
            <div className="mb-12">
              <h2 className="font-montserrat font-bold text-2xl text-primary mb-4">
                Payment Terms
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our services are offered on a subscription or project basis. Payment terms are as follows:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li>All prices are quoted in British Pounds (GBP) and exclude VAT where applicable</li>
                <li>Payment is due upon service delivery or as specified in your service agreement</li>
                <li>We reserve the right to suspend services for non-payment</li>
                <li>Refunds are provided according to our refund policy</li>
                <li>Price changes will be communicated with 30 days' notice</li>
              </ul>
            </div>

            {/* Service Level Agreement */}
            <div className="mb-12">
              <h2 className="font-montserrat font-bold text-2xl text-primary mb-4">
                Service Level Agreement
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We strive to provide reliable services with the following commitments:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li>99.5% uptime for our core services</li>
                <li>Response time of 2 hours for support inquiries during business hours</li>
                <li>Implementation timeline as specified in your service agreement</li>
                <li>Regular updates and improvements to our AI services</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Force majeure events may affect our ability to meet these commitments.
              </p>
            </div>

            {/* Data and Privacy */}
            <div className="mb-12">
              <h2 className="font-montserrat font-bold text-2xl text-primary mb-4">
                Data and Privacy
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Your privacy is important to us. Our collection and use of personal information 
                is governed by our Privacy Policy, which is incorporated into these Terms by reference.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                By using our services, you acknowledge that:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li>We may process your data to provide and improve our services</li>
                <li>Your data will be handled in accordance with UK GDPR requirements</li>
                <li>You are responsible for the data you input into our services</li>
                <li>We implement appropriate security measures to protect your data</li>
              </ul>
            </div>

            {/* Limitation of Liability */}
            <div className="mb-12">
              <h2 className="font-montserrat font-bold text-2xl text-primary mb-4">
                Limitation of Liability
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                To the maximum extent permitted by law, AI Boffins shall not be liable for any indirect, 
                incidental, special, consequential, or punitive damages, including but not limited to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li>Loss of profits, data, or business opportunities</li>
                <li>Service interruptions or downtime</li>
                <li>Errors or inaccuracies in AI-generated content</li>
                <li>Third-party actions or content</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Our total liability shall not exceed the amount paid by you for our services in the 12 months 
                preceding the claim.
              </p>
            </div>

            {/* Disclaimers */}
            <div className="mb-12">
              <h2 className="font-montserrat font-bold text-2xl text-primary mb-4">
                Disclaimers
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our services are provided "as is" and "as available" without warranties of any kind. 
                We disclaim all warranties, express or implied, including:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li>Warranties of merchantability or fitness for a particular purpose</li>
                <li>Warranties that our services will be uninterrupted or error-free</li>
                <li>Warranties regarding the accuracy of AI-generated content</li>
                <li>Warranties that defects will be corrected</li>
              </ul>
            </div>

            {/* Termination */}
            <div className="mb-12">
              <h2 className="font-montserrat font-bold text-2xl text-primary mb-4">
                Termination
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may terminate or suspend your account and access to our services immediately, 
                without prior notice, for any reason, including breach of these Terms.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Upon termination:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li>Your right to use our services will cease immediately</li>
                <li>We may delete your account and data</li>
                <li>You remain liable for any outstanding payments</li>
                <li>Provisions of these Terms that survive termination remain in effect</li>
              </ul>
            </div>

            {/* Governing Law */}
            <div className="mb-12">
              <h2 className="font-montserrat font-bold text-2xl text-primary mb-4">
                Governing Law and Dispute Resolution
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                These Terms shall be governed by and construed in accordance with the laws of England and Wales. 
                Any disputes arising from these Terms or our services shall be resolved in the courts of England and Wales.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We encourage you to contact us first to resolve any issues before pursuing legal action.
              </p>
            </div>

            {/* Changes to Terms */}
            <div className="mb-12">
              <h2 className="font-montserrat font-bold text-2xl text-primary mb-4">
                Changes to Terms
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We reserve the right to modify these Terms at any time. We will notify you of any material changes by:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li>Posting the updated Terms on our website</li>
                <li>Sending you an email notification</li>
                <li>Displaying a notice on our website</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Your continued use of our services after such changes constitutes acceptance of the updated Terms.
              </p>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <h2 className="font-montserrat font-bold text-2xl text-primary mb-4">
                Contact Information
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2">
                  <strong>AI Boffins</strong>
                </p>
                <p className="text-gray-700 mb-2">
                  Email: <a href="mailto:legal@aiboffins.co.uk" className="text-accent hover:text-accent/80">
                    legal@aiboffins.co.uk
                  </a>
                </p>
                <p className="text-gray-700 mb-2">
                  Phone: <a href="tel:01908410917" className="text-accent hover:text-accent/80">
                    01908 410917
                  </a>
                </p>
                <p className="text-gray-700">
                  Address: Milton Keynes, UK
                </p>
              </div>
            </div>

            {/* Severability */}
            <div className="mb-12">
              <h2 className="font-montserrat font-bold text-2xl text-primary mb-4">
                Severability
              </h2>
              <p className="text-gray-700 leading-relaxed">
                If any provision of these Terms is found to be unenforceable or invalid, 
                that provision will be limited or eliminated to the minimum extent necessary 
                so that these Terms will otherwise remain in full force and effect.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
