import LegalPage from '@/components/LegalPage';

export const metadata = {
  title: "Website & Service Terms | AI Boffins",
  description: "How enquiries, quotations and paid service agreements work.",
  alternates: { canonical: '/terms' },
  openGraph: { title: "Website & Service Terms | AI Boffins", description: "How enquiries, quotations and paid service agreements work.", url: '/terms' },
};

const sections = [
  {
    "heading": "Website and enquiries",
    "content": "AI Boffins is the trading name used on this website. We describe AI consultancy, training and workflow setup. An enquiry or free review is not a paid order. Before accepting paid work, the contracting party and scope must be identified and agreed in writing."
  },
  {
    "heading": "Prices and quotations",
    "content": "Published prices are indicative starting prices in pounds sterling for the stated scope. A written quotation will confirm the total payable, any applicable VAT, licences, usage charges, travel costs and other fees before you commit. Additional work needs agreement. Website prices do not override an existing contract."
  },
  {
    "heading": "Scope and support",
    "content": "Your written agreement will specify deliverables, dependencies, timings, support hours and any minimum subscription term. Setup estimates depend on access, source material and integrations. There is no blanket uptime guarantee or guarantee of particular savings, sales, rankings or business results."
  },
  {
    "heading": "Cancellation and refunds",
    "content": "Payment milestones, renewal, cancellation notice and refunds must be agreed before paid work begins. Do not rely on a refund policy that has not been supplied. Nothing here removes mandatory consumer rights, including cancellation rights where applicable. Requests to begin work during a statutory cancellation period must be handled under the applicable law."
  },
  {
    "heading": "AI limitations",
    "content": "AI can produce inaccurate, incomplete or inappropriate information. Check outputs before publishing, sending them to customers or relying on them. Training and general consultancy do not replace legal, financial, medical or other regulated professional advice."
  },
  {
    "heading": "Your material and confidentiality",
    "content": "You must have permission to provide project material. You retain your rights in that material. Permission to process it is limited to agreed delivery; publicity, model training or unrelated use needs a separate appropriate agreement. Ownership or licensing of deliverables and third-party tools must be addressed in the written contract."
  },
  {
    "heading": "Privacy and acceptable use",
    "content": "Our privacy notice covers enquiry data. Do not use the website or services for unlawful activity, unauthorised access, spam or infringement of others' rights. Project personal data needs agreed processing arrangements where required."
  },
  {
    "heading": "Liability and statutory rights",
    "content": "Allocation or limitation of liability for paid work must be set out in the service agreement and comply with applicable law. Nothing here excludes liability for fraud, fraudulent misrepresentation, death or personal injury caused by negligence, or liability that cannot lawfully be excluded. Mandatory consumer rights remain unaffected."
  },
  {
    "heading": "External links, changes and questions",
    "content": "External providers have their own terms. Website updates do not retrospectively change an agreed contract. Contact info@aiboffins.co.uk or 01908 410917 with questions or complaints. Governing law and jurisdiction for paid work should be confirmed in the written agreement, subject to mandatory protections."
  }
];

export default function Page() {
  return <LegalPage title="Website & Service Terms" introduction="How enquiries, quotations and paid service agreements work." sections={sections} />;
}
