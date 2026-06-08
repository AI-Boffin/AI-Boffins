import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy - AI Boffins',
  description: 'Learn how AI Boffins protects your privacy and handles your personal data in compliance with GDPR and UK data protection laws.',
  alternates: {
    canonical: '/privacy',
  },
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/90 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-montserrat font-bold text-4xl md:text-5xl mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            How we protect your privacy and handle your personal data
          </p>
          <div className="mt-6 flex items-center justify-center space-x-4 text-sm text-white/80">
            <span>Last updated: {new Date().toLocaleDateString('en-GB')}</span>
            <span>|</span>
            <span>GDPR-Aware</span>
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
                Introduction
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                AI Boffins ("we", "our", or "us") is committed to protecting your privacy and ensuring the security of your personal data. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, 
                use our services, or interact with us in any way.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We are a UK-based company operating under UK data protection laws, including the UK GDPR and Data Protection Act 2018. 
                By using our services, you agree to the collection and use of information in accordance with this policy.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="mb-12">
              <h2 className="font-montserrat font-bold text-2xl text-primary mb-4">
                Information We Collect
              </h2>
              
              <h3 className="font-montserrat font-semibold text-lg text-gray-800 mb-3">
                Personal Information
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li>Name and contact details (email, phone number)</li>
                <li>Company information and job title</li>
                <li>Communication preferences</li>
                <li>Payment and billing information</li>
                <li>Service usage data and preferences</li>
              </ul>

              <h3 className="font-montserrat font-semibold text-lg text-gray-800 mb-3">
                Technical Information
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li>IP address and device information</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Website usage analytics</li>
                <li>Cookies and similar technologies</li>
              </ul>

              <h3 className="font-montserrat font-semibold text-lg text-gray-800 mb-3">
                Information from Third Parties
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We may receive information about you from third-party sources, such as business partners, 
                social media platforms, or publicly available sources, in accordance with applicable laws.
              </p>
            </div>

            {/* How We Use Your Information */}
            <div className="mb-12">
              <h2 className="font-montserrat font-bold text-2xl text-primary mb-4">
                How We Use Your Information
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use your personal information for the following purposes:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li>Providing and improving our AI services</li>
                <li>Processing payments and managing accounts</li>
                <li>Communicating with you about our services</li>
                <li>Sending marketing communications (with your consent)</li>
                <li>Providing customer support and technical assistance</li>
                <li>Analyzing website usage and improving user experience</li>
                <li>Complying with legal obligations</li>
                <li>Preventing fraud and ensuring security</li>
              </ul>
            </div>

            {/* Legal Basis for Processing */}
            <div className="mb-12">
              <h2 className="font-montserrat font-bold text-2xl text-primary mb-4">
                Legal Basis for Processing
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Under UK GDPR, we process your personal data based on the following legal grounds:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li><strong>Contract:</strong> To fulfill our contractual obligations to you</li>
                <li><strong>Legitimate Interest:</strong> To provide and improve our services</li>
                <li><strong>Consent:</strong> For marketing communications and cookies</li>
                <li><strong>Legal Obligation:</strong> To comply with applicable laws</li>
              </ul>
            </div>

            {/* Information Sharing */}
            <div className="mb-12">
              <h2 className="font-montserrat font-bold text-2xl text-primary mb-4">
                Information Sharing and Disclosure
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li>With your explicit consent</li>
                <li>With service providers who assist in our operations</li>
                <li>To comply with legal requirements or court orders</li>
                <li>To protect our rights, property, or safety</li>
                <li>In connection with a business transfer or merger</li>
              </ul>
            </div>

            {/* Data Security */}
            <div className="mb-12">
              <h2 className="font-montserrat font-bold text-2xl text-primary mb-4">
                Data Security
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We implement appropriate technical and organizational measures to protect your personal data against:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li>Unauthorized access or disclosure</li>
                <li>Accidental loss or destruction</li>
                <li>Alteration or damage</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                These measures include encryption, secure servers, access controls, and regular security assessments.
              </p>
            </div>

            {/* Data Retention */}
            <div className="mb-12">
              <h2 className="font-montserrat font-bold text-2xl text-primary mb-4">
                Data Retention
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We retain your personal data only for as long as necessary to fulfill the purposes outlined in this policy:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li>Account information: Until account closure + 7 years</li>
                <li>Service usage data: 2 years after last activity</li>
                <li>Marketing data: Until consent withdrawal</li>
                <li>Legal compliance: As required by law</li>
              </ul>
            </div>

            {/* Your Rights */}
            <div className="mb-12">
              <h2 className="font-montserrat font-bold text-2xl text-primary mb-4">
                Your Rights
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Under UK GDPR, you have the following rights regarding your personal data:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li><strong>Access:</strong> Request a copy of your personal data</li>
                <li><strong>Rectification:</strong> Correct inaccurate or incomplete data</li>
                <li><strong>Erasure:</strong> Request deletion of your personal data</li>
                <li><strong>Restriction:</strong> Limit how we process your data</li>
                <li><strong>Portability:</strong> Receive your data in a portable format</li>
                <li><strong>Objection:</strong> Object to certain types of processing</li>
                <li><strong>Withdraw Consent:</strong> Withdraw consent for marketing</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                To exercise these rights, please contact us at{' '}
                <a href="mailto:privacy@aiboffins.co.uk" className="text-accent hover:text-accent/80">
                  privacy@aiboffins.co.uk
                </a>
              </p>
            </div>

            {/* Cookies */}
            <div className="mb-12">
              <h2 className="font-montserrat font-bold text-2xl text-primary mb-4">
                Cookies and Tracking Technologies
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use cookies and similar technologies to enhance your experience on our website. 
                For detailed information about our use of cookies, please see our{' '}
                <Link href="/cookies" className="text-accent hover:text-accent/80">
                  Cookie Policy
                </Link>.
              </p>
            </div>

            {/* International Transfers */}
            <div className="mb-12">
              <h2 className="font-montserrat font-bold text-2xl text-primary mb-4">
                International Data Transfers
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Your personal data is primarily processed within the UK and European Economic Area (EEA). 
                If we transfer your data outside the EEA, we ensure appropriate safeguards are in place, 
                such as Standard Contractual Clauses or adequacy decisions.
              </p>
            </div>

            {/* Children's Privacy */}
            <div className="mb-12">
              <h2 className="font-montserrat font-bold text-2xl text-primary mb-4">
                Children's Privacy
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Our services are not intended for children under 16 years of age. We do not knowingly collect 
                personal information from children under 16. If you believe we have collected such information, 
                please contact us immediately.
              </p>
            </div>

            {/* Changes to Policy */}
            <div className="mb-12">
              <h2 className="font-montserrat font-bold text-2xl text-primary mb-4">
                Changes to This Privacy Policy
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li>Posting the updated policy on our website</li>
                <li>Sending you an email notification</li>
                <li>Displaying a notice on our website</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Your continued use of our services after such changes constitutes acceptance of the updated policy.
              </p>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <h2 className="font-montserrat font-bold text-2xl text-primary mb-4">
                Contact Us
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2">
                  <strong>AI Boffins</strong>
                </p>
                <p className="text-gray-700 mb-2">
                  Email: <a href="mailto:privacy@aiboffins.co.uk" className="text-accent hover:text-accent/80">
                    privacy@aiboffins.co.uk
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

            {/* Supervisory Authority */}
            <div className="mb-12">
              <h2 className="font-montserrat font-bold text-2xl text-primary mb-4">
                Supervisory Authority
              </h2>
              <p className="text-gray-700 leading-relaxed">
                You have the right to lodge a complaint with the Information Commissioner's Office (ICO) 
                if you believe we have not handled your personal data in accordance with applicable law. 
                You can contact the ICO at{' '}
                <a href="https://ico.org.uk" className="text-accent hover:text-accent/80" target="_blank" rel="noopener noreferrer">
                  ico.org.uk
                </a>.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
