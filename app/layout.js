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
  metadataBase: new URL('https://aiboffins.co.uk'),
  title: 'AI Boffins - Practical AI Services for UK SMEs',
  description: 'Practical AI workflows, consultancy and crash-course training for UK SMEs that want useful adoption without the jargon.',
  keywords: 'AI consultancy UK, AI training for SMEs, AI workflow automation, ChatGPT training, Copilot training, UK business AI',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'AI Boffins - Practical AI Services for UK SMEs',
    description: 'AI workflows, consultancy and crash-course training for UK SMEs.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-open-sans antialiased bg-white text-foreground min-h-screen">
        {children}
      </body>
    </html>
  );
}
