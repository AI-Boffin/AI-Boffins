import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'GDPR Compliance - AI Boffins',
  description: 'Learn about AI Boffins GDPR compliance and how we protect your data rights under UK and EU data protection laws.',
};

export default function GDPRCompliance() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/90 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-montserrat font-bold text-4xl md:text-5xl mb-6">
            GDPR Compliance
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            How we protect your data rights under UK and EU data protection laws
          </p>
          <div className="mt-6 flex items-center justify-center space-x-4 text-sm text-white/80">
            <span>Last updated: {new Date().toLocaleDateString('en-GB')}</span>
            <span>•</span>
            <span>UK GDPR Compliant</span>
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
                Our GDPR Commitment
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                AI Boffins is committed to full compliance with the UK General Data Protection Regulation (UK GDPR) 
                and the Data Protection Act 2018. We recognize the importance of protecting your personal data 
                and ensuring your privacy rights are respected.
              </p>
              <p className="text-gray-700 leading-relaxed">
                This page outlines our GDPR compliance measures and how we protect your data rights. 
                For detailed information about our data practices, please see our{' '}
                <a href="/privacy" className="text-accent hover:text-accent/80">Privacy Policy</a>.
              </p>
            </div>

            {/* Data Controller Information */}
            <div className="mb-12">
              <h2 className="font-montserrat font-bold text-2xl text-primary mb-4">
                Data Controller Information
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2">
                  <strong>Data Controller:</strong> AI Boffins
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Address:</strong> Milton Keynes, UK
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Email:</strong> <a href="mailto:privacy@aiboffins.co.uk" className="text-accent hover:text-accent/80">
                    privacy@aiboffins.co.uk
                  </a>
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Phone:</strong> <a href="tel:01908410917" className="text-accent hover:text-accent/80">
                    01908 410917
                  </a>
                </p>
                <p className="text-gray-700">
                  <strong>ICO Registration:</strong> We are registered with the Information Commissioner's Office 
                  and comply with all UK data protection requirements.
                </p>
              </div>
            </div>

            {/* Legal Basis for Processing */}
            <div className="mb-12">
              <h2 className="font-montserrat font-bold text-2xl text-primary mb-4">
                Legal Basis for Data Processing
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Under UK GDPR, we process your personal data based on the following legal grounds:
              </p>
              
              <h3 className="font-montserrat font-semibold text-lg text-gray-800 mb-3">
                Contract (Article 6(1)(b))
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Processing is necessary for the performance of a contract with you or to take steps at your request 
                before entering into a contract.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li>Providing our AI services</li>
                <li>Processing payments and billing</li>
                <li>Managing your account</li>
                <li>Providing customer support</li>
              </ul>

              <h3 className="font-montserrat font-semibold text-lg text-gray-800 mb-3">
                Legitimate Interest (Article 6(1)(f))
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Processing is necessary for our legitimate interests, provided these interests do not override 
                your fundamental rights and freedoms.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li>Improving our services and user experience</li>
                <li>Website analytics and performance monitoring</li>
                <li>Security and fraud prevention</li>
                <li>Business development and marketing (with opt-out rights)</li>
              </ul>

              <h3 className="font-montserrat font-semibold text-lg text-gray-800 mb-3">
                Consent (Article 6(1)(a))
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Processing is based on your explicit consent, which you can withdraw at any time.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li>Marketing communications</li>
                <li>Non-essential cookies</li>
                <li>Third-party data sharing</li>
                <li>Newsletter subscriptions</li>
              </ul>

              <h3 className="font-montserrat font-semibold text-lg text-gray-800 mb-3">
                Legal Obligation (Article 6(1)(c))
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Processing is necessary for compliance with our legal obligations.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li>Tax and accounting requirements</li>
                <li>Regulatory compliance</li>
                <li>Legal proceedings</li>
                <li>Data retention requirements</li>
              </ul>
            </div>

            {/* Your GDPR Rights */}
            <div className="mb-12">
              <h2 className="font-montserrat font-bold text-2xl text-primary mb-4">
                Your GDPR Rights
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Under UK GDPR, you have the following rights regarding your personal data:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-montserrat font-semibold text-lg text-gray-800 mb-3">
                    Right of Access
                  </h3>
                  <p className="text-gray-700 text-sm">
                    You can request a copy of your personal data and information about how we process it.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-montserrat font-semibold text-lg text-gray-800 mb-3">
                    Right to Rectification
                  </h3>
                  <p className="text-gray-700 text-sm">
                    You can request correction of inaccurate or incomplete personal data.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-montserrat font-semibold text-lg text-gray-800 mb-3">
                    Right to Erasure
                  </h3>
                  <p className="text-gray-700 text-sm">
                    You can request deletion of your personal data in certain circumstances.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-montserrat font-semibold text-lg text-gray-800 mb-3">
                    Right to Restriction
                  </h3>
                  <p className="text-gray-700 text-sm">
                    You can request limitation of processing in certain circumstances.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-montserrat font-semibold text-lg text-gray-800 mb-3">
                    Right to Portability
                  </h3>
                  <p className="text-gray-700 text-sm">
                    You can receive your data in a structured, machine-readable format.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-montserrat font-semibold text-lg text-gray-800 mb-3">
                    Right to Object
                  </h3>
                  <p className="text-gray-700 text-sm">
                    You can object to processing based on legitimate interests or for direct marketing.
                  </p>
                </div>
              </div>
            </div>

            {/* How to Exercise Your Rights */}
            <div className="mb-12">
              <h2 className="font-montserrat font-bold text-2xl text-primary mb-4">
                How to Exercise Your Rights
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                To exercise your GDPR rights, please contact us using the following methods:
              </p>
              
              <div className="bg-accent/10 p-6 rounded-lg border-l-4 border-accent">
                <h3 className="font-montserrat font-semibold text-lg text-gray-800 mb-3">
                  Contact Methods
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                  <li><strong>Email:</strong> <a href="mailto:privacy@aiboffins.co.uk" className="text-accent hover:text-accent/80">
                    privacy@aiboffins.co.uk
                  </a></li>
                  <li><strong>Phone:</strong> <a href="tel:01908410917" className="text-accent hover:text-accent/80">
                    01908 410917
                  </a></li>
                  <li><strong>Post:</strong> AI Boffins, Milton Keynes, UK</li>
                </ul>
                <p className="text-gray-700 text-sm">
                  We will respond to your request within one month, or within two months for complex requests. 
                  We may need to verify your identity before processing your request.
                </p>
              </div>
            </div>

            {/* Data Security Measures */}
            <div className="mb-12">
              <h2 className="font-montserrat font-bold text-2xl text-primary mb-4">
                Data Security Measures
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We implement appropriate technical and organizational measures to ensure data security:
              </p>
              
              <h3 className="font-montserrat font-semibold text-lg text-gray-800 mb-3">
                Technical Measures
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li>Encryption of data in transit and at rest</li>
                <li>Secure servers and cloud infrastructure</li>
                <li>Regular security updates and patches</li>
                <li>Access controls and authentication</li>
                <li>Firewall and intrusion detection systems</li>
              </ul>

              <h3 className="font-montserrat font-semibold text-lg text-gray-800 mb-3">
                Organizational Measures
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li>Staff training on data protection</li>
                <li>Data protection policies and procedures</li>
                <li>Regular security audits and assessments</li>
                <li>Incident response procedures</li>
                <li>Data protection impact assessments</li>
              </ul>
            </div>

            {/* Data Breach Procedures */}
            <div className="mb-12">
              <h2 className="font-montserrat font-bold text-2xl text-primary mb-4">
                Data Breach Procedures
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                In the event of a personal data breach, we have procedures in place to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li>Detect and assess the breach within 72 hours</li>
                <li>Notify the Information Commissioner's Office if required</li>
                <li>Notify affected individuals if there is a high risk to their rights</li>
                <li>Document all breaches and remedial actions taken</li>
                <li>Implement measures to prevent future breaches</li>
              </ul>
            </div>

            {/* International Transfers */}
            <div className="mb-12">
              <h2 className="font-montserrat font-bold text-2xl text-primary mb-4">
                International Data Transfers
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Your personal data is primarily processed within the UK and European Economic Area (EEA). 
                When we transfer data outside the EEA, we ensure appropriate safeguards are in place:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li>Adequacy decisions by the UK government</li>
                <li>Standard Contractual Clauses (SCCs)</li>
                <li>Binding Corporate Rules (BCRs)</li>
                <li>Certification schemes</li>
              </ul>
            </div>

            {/* Data Protection Officer */}
            <div className="mb-12">
              <h2 className="font-montserrat font-bold text-2xl text-primary mb-4">
                Data Protection Officer
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                While we are not legally required to appoint a Data Protection Officer (DPO), 
                we have designated a data protection contact who can assist with any GDPR-related queries:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2">
                  <strong>Data Protection Contact:</strong> AI Boffins Privacy Team
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Email:</strong> <a href="mailto:privacy@aiboffins.co.uk" className="text-accent hover:text-accent/80">
                    privacy@aiboffins.co.uk
                  </a>
                </p>
                <p className="text-gray-700">
                  <strong>Response Time:</strong> Within 2 business days
                </p>
              </div>
            </div>

            {/* Supervisory Authority */}
            <div className="mb-12">
              <h2 className="font-montserrat font-bold text-2xl text-primary mb-4">
                Supervisory Authority
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You have the right to lodge a complaint with the Information Commissioner's Office (ICO) 
                if you believe we have not handled your personal data in accordance with UK GDPR:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2">
                  <strong>Information Commissioner's Office</strong>
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Website:</strong> <a href="https://ico.org.uk" className="text-accent hover:text-accent/80" target="_blank" rel="noopener noreferrer">
                    ico.org.uk
                  </a>
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Phone:</strong> 0303 123 1113
                </p>
                <p className="text-gray-700">
                  <strong>Address:</strong> Wycliffe House, Water Lane, Wilmslow, Cheshire, SK9 5AF
                </p>
              </div>
            </div>

            {/* Updates and Changes */}
            <div className="mb-12">
              <h2 className="font-montserrat font-bold text-2xl text-primary mb-4">
                Updates to GDPR Compliance
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We regularly review and update our GDPR compliance measures to ensure we meet all requirements. 
                Any significant changes will be communicated to you through:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li>Updates to our Privacy Policy</li>
                <li>Email notifications for significant changes</li>
                <li>Website notices</li>
                <li>Direct communication for material changes</li>
              </ul>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <h2 className="font-montserrat font-bold text-2xl text-primary mb-4">
                Contact Us
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about our GDPR compliance or data protection practices, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2">
                  <strong>AI Boffins</strong>
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>GDPR Email:</strong> <a href="mailto:privacy@aiboffins.co.uk" className="text-accent hover:text-accent/80">
                    privacy@aiboffins.co.uk
                  </a>
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Phone:</strong> <a href="tel:01908410917" className="text-accent hover:text-accent/80">
                    01908 410917
                  </a>
                </p>
                <p className="text-gray-700">
                  <strong>Address:</strong> Milton Keynes, UK
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
