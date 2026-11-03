import LegalPage from '@/components/LegalPage';

export const metadata = {
  title: "Privacy Notice | AI Boffins",
  description: "How AI Boffins handles enquiries and personal information.",
  alternates: { canonical: '/privacy' },
  openGraph: { title: "Privacy Notice | AI Boffins", description: "How AI Boffins handles enquiries and personal information.", url: '/privacy' },
};

const sections = [
  {
    "heading": "Who this notice covers",
    "content": "AI Boffins is the trading name used on this website. For questions about personal information, contact info@aiboffins.co.uk or call 01908 410917. This notice covers website enquiries and service communications. Projects involving customer data need agreed data handling arrangements."
  },
  {
    "heading": "Information you provide",
    "content": "The enquiry form asks for your name, email, business name, optional phone number, service interest and message. We use this information to respond and discuss your requirements. You are not obliged to send an enquiry; without contact details we cannot reply. Do not send passwords, payment card details, sensitive personal information or confidential client files through the form."
  },
  {
    "heading": "Why we use information",
    "content": "We rely on our legitimate interests in responding to business enquiries, providing support and securing communications. If you request steps towards a contract with us personally or enter one, we may rely on those pre-contract steps or that contract. Billing and tax records may be kept to meet legal obligations. Submitting an enquiry does not subscribe you to marketing. Where marketing requires consent, it must be obtained separately."
  },
  {
    "heading": "Providers and sharing",
    "content": "The contact form sends your enquiry through Plunk, an email delivery provider, to info@aiboffins.co.uk. Website hosting and mailbox providers may also process technical logs and messages. This enables us to deliver the website and answer enquiries. We do not sell enquiry information. Providers and AI tools for paid projects should be identified when agreeing each project."
  },
  {
    "heading": "Storage and international processing",
    "content": "Processing locations depend on the providers and settings used; UK-only storage is not promised. Any restricted international transfer must meet the applicable UK transfer requirements, using adequacy or appropriate safeguards where required. Contact us for the providers, locations and safeguards relevant to your enquiry or project."
  },
  {
    "heading": "Retention",
    "content": "Enquiries and correspondence are kept for the time needed to answer the enquiry, manage resulting work and resolve relevant complaints or disputes. Retention depends on whether an enquiry leads to a project, ongoing support, a legal obligation or a dispute. Unrelated enquiry material is not needed indefinitely. Contract and accounting records may require longer retention under applicable law."
  },
  {
    "heading": "Your rights and complaints",
    "content": "Depending on the circumstances, you can request access, correction, deletion, restriction or portability. You can object to processing based on legitimate interests. You have an absolute right to object to direct marketing and can withdraw any consent without affecting earlier lawful processing. Contact info@aiboffins.co.uk. Requests are normally answered within one month; where an extension is legally permitted, we will explain it. Identity checks may be necessary. You can also complain to the Information Commissioner's Office at ico.org.uk/make-a-complaint/."
  },
  {
    "heading": "Cookies, automated decisions and updates",
    "content": "The current application code does not include analytics or advertising trackers. See our cookie notice. The enquiry form does not make automated decisions with legal or similarly significant effects. We update this notice when the website or processing changes. Continued website use is not consent to new processing purposes."
  }
];

export default function Page() {
  return <LegalPage title="Privacy Notice" introduction="How AI Boffins handles enquiries and personal information." sections={sections} />;
}
