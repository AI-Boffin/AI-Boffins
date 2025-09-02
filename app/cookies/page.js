import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Cookie Policy - AI Boffins',
  description: 'Learn about how AI Boffins uses cookies and similar technologies to enhance your website experience.',
};

export default function CookiePolicy() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/90 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-montserrat font-bold text-4xl md:text-5xl mb-6">
            Cookie Policy
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            How we use cookies and similar technologies to improve your experience
          </p>
          <div className="mt-6 flex items-center justify-center space-x-4 text-sm text-white/80">
            <span>Last updated: {new Date().toLocaleDateString('en-GB')}</span>
            <span>•</span>
            <span>GDPR Compliant</span>
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
                What Are Cookies?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Cookies are small text files that are placed on your device (computer, tablet, or mobile) 
                when you visit our website. They help us provide you with a better experience by remembering 
                your preferences, analyzing how you use our site, and personalizing content.
              </p>
              <p className="text-gray-700 leading-relaxed">
                This Cookie Policy explains how AI Boffins uses cookies and similar technologies on our website. 
                By using our website, you consent to the use of cookies in accordance with this policy.
              </p>
            </div>

            {/* Types of Cookies */}
            <div className="mb-12">
              <h2 className="font-montserrat font-bold text-2xl text-primary mb-4">
                Types of Cookies We Use
              </h2>
              
              <h3 className="font-montserrat font-semibold text-lg text-gray-800 mb-3">
                Essential Cookies
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                These cookies are necessary for the website to function properly. They enable basic functions 
                like page navigation, access to secure areas, and form submissions. The website cannot function 
                properly without these cookies.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li>Session management and security</li>
                <li>Form validation and submission</li>
                <li>Language and region preferences</li>
                <li>Authentication and login status</li>
              </ul>

              <h3 className="font-montserrat font-semibold text-lg text-gray-800 mb-3">
                Performance and Analytics Cookies
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                These cookies help us understand how visitors interact with our website by collecting and 
                reporting information anonymously. This helps us improve our website and services.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li>Google Analytics (page views, user behavior)</li>
                <li>Website performance monitoring</li>
                <li>Error tracking and debugging</li>
                <li>Load time optimization</li>
              </ul>

              <h3 className="font-montserrat font-semibold text-lg text-gray-800 mb-3">
                Functional Cookies
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                These cookies enable enhanced functionality and personalization, such as remembering your 
                preferences and choices to provide a more personalized experience.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li>User preferences and settings</li>
                <li>Personalized content and recommendations</li>
                <li>Social media integration</li>
                <li>Chat and support functionality</li>
              </ul>

              <h3 className="font-montserrat font-semibold text-lg text-gray-800 mb-3">
                Marketing and Advertising Cookies
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                These cookies are used to track visitors across websites to display relevant and engaging 
                advertisements. They may also be used to limit the number of times you see an advertisement.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li>Google Ads and remarketing</li>
                <li>Social media advertising (Facebook, LinkedIn)</li>
                <li>Email marketing tracking</li>
                <li>Conversion tracking and optimization</li>
              </ul>
            </div>

            {/* Specific Cookies */}
            <div className="mb-12">
              <h2 className="font-montserrat font-bold text-2xl text-primary mb-4">
                Specific Cookies We Use
              </h2>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Cookie Name</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Purpose</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Duration</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-mono text-sm">session_id</td>
                      <td className="border border-gray-300 px-4 py-2">Maintains user session</td>
                      <td className="border border-gray-300 px-4 py-2">Session</td>
                      <td className="border border-gray-300 px-4 py-2">Essential</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-mono text-sm">_ga</td>
                      <td className="border border-gray-300 px-4 py-2">Google Analytics tracking</td>
                      <td className="border border-gray-300 px-4 py-2">2 years</td>
                      <td className="border border-gray-300 px-4 py-2">Analytics</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-mono text-sm">_gid</td>
                      <td className="border border-gray-300 px-4 py-2">Google Analytics session</td>
                      <td className="border border-gray-300 px-4 py-2">24 hours</td>
                      <td className="border border-gray-300 px-4 py-2">Analytics</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-mono text-sm">_gat</td>
                      <td className="border border-gray-300 px-4 py-2">Google Analytics throttle</td>
                      <td className="border border-gray-300 px-4 py-2">1 minute</td>
                      <td className="border border-gray-300 px-4 py-2">Analytics</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-mono text-sm">cookie_consent</td>
                      <td className="border border-gray-300 px-4 py-2">Remembers cookie preferences</td>
                      <td className="border border-gray-300 px-4 py-2">1 year</td>
                      <td className="border border-gray-300 px-4 py-2">Functional</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-mono text-sm">_fbp</td>
                      <td className="border border-gray-300 px-4 py-2">Facebook advertising</td>
                      <td className="border border-gray-300 px-4 py-2">3 months</td>
                      <td className="border border-gray-300 px-4 py-2">Marketing</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Third-Party Cookies */}
            <div className="mb-12">
              <h2 className="font-montserrat font-bold text-2xl text-primary mb-4">
                Third-Party Cookies
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use services from third parties that may place cookies on your device:
              </p>
              
              <h3 className="font-montserrat font-semibold text-lg text-gray-800 mb-3">
                Google Services
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li><strong>Google Analytics:</strong> Website usage analytics and performance monitoring</li>
                <li><strong>Google Ads:</strong> Advertising and remarketing campaigns</li>
                <li><strong>Google Tag Manager:</strong> Cookie and tag management</li>
              </ul>

              <h3 className="font-montserrat font-semibold text-lg text-gray-800 mb-3">
                Social Media Platforms
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li><strong>Facebook:</strong> Social media integration and advertising</li>
                <li><strong>LinkedIn:</strong> Professional networking and advertising</li>
                <li><strong>Twitter:</strong> Social media sharing and engagement</li>
              </ul>

              <h3 className="font-montserrat font-semibold text-lg text-gray-800 mb-3">
                Other Services
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li><strong>Hotjar:</strong> User behavior analysis and heatmaps</li>
                <li><strong>Mailchimp:</strong> Email marketing and newsletter tracking</li>
                <li><strong>Stripe:</strong> Payment processing and security</li>
              </ul>
            </div>

            {/* Cookie Management */}
            <div className="mb-12">
              <h2 className="font-montserrat font-bold text-2xl text-primary mb-4">
                Managing Your Cookie Preferences
              </h2>
              
              <h3 className="font-montserrat font-semibold text-lg text-gray-800 mb-3">
                Browser Settings
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                You can control and manage cookies through your browser settings:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li><strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
                <li><strong>Firefox:</strong> Options → Privacy & Security → Cookies and Site Data</li>
                <li><strong>Safari:</strong> Preferences → Privacy → Manage Website Data</li>
                <li><strong>Edge:</strong> Settings → Cookies and site permissions → Cookies and site data</li>
              </ul>

              <h3 className="font-montserrat font-semibold text-lg text-gray-800 mb-3">
                Cookie Consent
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                When you first visit our website, you'll see a cookie consent banner that allows you to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li>Accept all cookies</li>
                <li>Reject non-essential cookies</li>
                <li>Customize your cookie preferences</li>
                <li>Learn more about our cookie usage</li>
              </ul>

              <h3 className="font-montserrat font-semibold text-lg text-gray-800 mb-3">
                Opt-Out Options
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                You can opt out of specific third-party cookies:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li><a href="https://tools.google.com/dlpage/gaoptout" className="text-accent hover:text-accent/80" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out</a></li>
                <li><a href="https://www.facebook.com/ads/preferences" className="text-accent hover:text-accent/80" target="_blank" rel="noopener noreferrer">Facebook Ad Preferences</a></li>
                <li><a href="https://www.linkedin.com/psettings/guest-controls" className="text-accent hover:text-accent/80" target="_blank" rel="noopener noreferrer">LinkedIn Ad Preferences</a></li>
                <li><a href="https://optout.networkadvertising.org/" className="text-accent hover:text-accent/80" target="_blank" rel="noopener noreferrer">Network Advertising Initiative</a></li>
              </ul>
            </div>

            {/* Impact of Disabling Cookies */}
            <div className="mb-12">
              <h2 className="font-montserrat font-bold text-2xl text-primary mb-4">
                Impact of Disabling Cookies
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you choose to disable cookies, please be aware that:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li>Some website features may not function properly</li>
                <li>You may need to re-enter information repeatedly</li>
                <li>Personalized content and recommendations may not be available</li>
                <li>Website performance may be affected</li>
                <li>Some third-party integrations may not work</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Essential cookies cannot be disabled as they are necessary for the website to function.
              </p>
            </div>

            {/* Updates to Policy */}
            <div className="mb-12">
              <h2 className="font-montserrat font-bold text-2xl text-primary mb-4">
                Updates to This Cookie Policy
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may update this Cookie Policy from time to time to reflect changes in our practices 
                or for other operational, legal, or regulatory reasons. We will notify you of any 
                material changes by:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li>Posting the updated policy on our website</li>
                <li>Displaying a notice on our website</li>
                <li>Sending you an email notification if required</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Your continued use of our website after such changes constitutes acceptance of the updated policy.
              </p>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <h2 className="font-montserrat font-bold text-2xl text-primary mb-4">
                Contact Us
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about our use of cookies or this Cookie Policy, please contact us:
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

            {/* Additional Resources */}
            <div className="mb-12">
              <h2 className="font-montserrat font-bold text-2xl text-primary mb-4">
                Additional Resources
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                For more information about cookies and online privacy:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li><a href="https://ico.org.uk/for-the-public/online/cookies/" className="text-accent hover:text-accent/80" target="_blank" rel="noopener noreferrer">ICO Cookie Guidance</a></li>
                <li><a href="https://www.allaboutcookies.org/" className="text-accent hover:text-accent/80" target="_blank" rel="noopener noreferrer">All About Cookies</a></li>
                <li><a href="https://www.youronlinechoices.com/uk/" className="text-accent hover:text-accent/80" target="_blank" rel="noopener noreferrer">Your Online Choices</a></li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
