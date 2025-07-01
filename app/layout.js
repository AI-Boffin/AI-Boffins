import './globals.css';
import { Montserrat, Open_Sans } from 'next/font/google';

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

const openSans = Open_Sans({ 
  subsets: ['latin'],
  variable: '--font-open-sans',
  display: 'swap',
});

export const metadata = {
  title: 'AI Boffins - AI Automation for UK Businesses',
  description: 'Save time, cut costs, and boost productivity with AI automation. UK-based, GDPR-compliant, and expertly delivered by AI Boffins.',
  keywords: 'AI automation, UK business automation, customer service AI, workflow automation, document automation, lead generation AI',
  openGraph: {
    title: 'AI Boffins - AI Automation for UK Businesses',
    description: 'Save time, cut costs, and boost productivity with AI automation. UK-based, GDPR-compliant, and expertly delivered.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-open-sans antialiased bg-white text-foreground min-h-screen">
        {children}
      </body>
    </html>
  );
}