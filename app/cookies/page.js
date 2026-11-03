import LegalPage from '@/components/LegalPage';

export const metadata = {
  title: "Cookie Notice | AI Boffins",
  description: "Cookies, browser storage and external links on this website.",
  alternates: { canonical: '/cookies' },
  openGraph: { title: "Cookie Notice | AI Boffins", description: "Cookies, browser storage and external links on this website.", url: '/cookies' },
};

const sections = [
  {
    "heading": "Current application",
    "content": "The current website code does not set analytics, advertising or preference cookies. It does not include Google Analytics, Google Ads, Meta Pixel, Stripe checkout or a cookie preference banner. The enquiry form works without these tools. Hosting infrastructure may process technical requests and security information; any infrastructure cookies need assessment separately from the application code."
  },
  {
    "heading": "Cookies and consent",
    "content": "Cookies are small pieces of information saved in your browser. Similar rules can apply to other storage or access on your device. Visiting the website is not consent to optional tracking. Before introducing tools that need consent, their purposes and providers must be explained, this notice updated, and a way to accept or reject them provided. Tools requiring consent must not load before the appropriate choice. Any exemption needs assessment under current UK rules."
  },
  {
    "heading": "External links",
    "content": "The website analyser and social links open other websites, whose operators have their own cookie and privacy notices. Linking to a website does not embed its cookies on this site."
  },
  {
    "heading": "Browser controls and questions",
    "content": "You can inspect and clear cookies and site data in your browser settings. For questions, contact info@aiboffins.co.uk. For general information, visit ico.org.uk/for-the-public/online/cookies/."
  }
];

export default function Page() {
  return <LegalPage title="Cookie Notice" introduction="Cookies, browser storage and external links on this website." sections={sections} />;
}
