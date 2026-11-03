import './globals.css';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'optional',
});

export const metadata = {
  metadataBase: new URL('https://www.aiboffins.co.uk'),
  title: 'AI Consultancy & Training for UK SMEs | AI Boffins',
  description: 'AI consultancy, ChatGPT and Copilot training, and workflow automation for UK SMEs. Based in Milton Keynes. Book a free AI review.',
  keywords: 'AI consultancy UK, AI training for SMEs, AI workflow automation, ChatGPT training, Copilot training, UK business AI',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'AI Consultancy & Training for UK SMEs | AI Boffins',
    description: 'AI workflows, consultancy and crash-course training for UK SMEs.',
    type: 'website',
    url: '/',
    siteName: 'AI Boffins',
    locale: 'en_GB',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB" className={montserrat.variable}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="font-sans antialiased bg-white text-foreground min-h-screen">
        {children}
      </body>
    </html>
  );
}
