import LegalPage from '@/components/LegalPage';

export const metadata = {
  title: "Data Protection & AI | AI Boffins",
  description: "Practical data protection considerations for AI projects.",
  alternates: { canonical: '/gdpr' },
  openGraph: { title: "Data Protection & AI | AI Boffins", description: "Practical data protection considerations for AI projects.", url: '/gdpr' },
};

const sections = [
  {
    "heading": "Project-specific responsibilities",
    "content": "AI services are not automatically compliant because they use a business account or UK hosting. Each workflow needs an appropriate purpose, lawful basis, configuration and access controls. Our consultancy provides practical guidance, not legal advice or certification of compliance."
  },
  {
    "heading": "Agree the data handling",
    "content": "Before a project uses personal information, agree which data is needed, who controls it, which providers process it, where it is stored and how long it is retained. Where we act as a processor on your instructions, required data processing terms must be agreed. Higher-risk processing may need a data protection impact assessment."
  },
  {
    "heading": "Inputs and human review",
    "content": "Use anonymised or sample material for introductory training where possible. Do not upload personal, confidential or sensitive information until the chosen tool's terms, training use, retention and permissions have been checked. AI outputs can be wrong and need appropriate human review, especially for important decisions."
  },
  {
    "heading": "Security and transfers",
    "content": "Access permissions, provider settings and international transfer arrangements must be checked for each deployment. No tool guarantees information will never leak. General security statements do not replace review of the actual configuration."
  },
  {
    "heading": "Website enquiries",
    "content": "Our privacy notice explains enquiry information, recipients, retention criteria and your rights. Contact info@aiboffins.co.uk for data protection questions. You can also complain to the ICO at ico.org.uk/make-a-complaint/."
  }
];

export default function Page() {
  return <LegalPage title="Data Protection & AI" introduction="Practical data protection considerations for AI projects." sections={sections} />;
}
