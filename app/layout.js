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
  title: 'AI Boffins - Empowering UK Teams with AI',
  description: 'Transform boring tasks into opportunities for growth. Help your team hit higher targets, earn more, and enjoy their work with AI automation.',
  keywords: 'team empowerment, AI automation, UK workers, productivity boost, job satisfaction, workflow automation',
  openGraph: {
    title: 'AI Boffins - Empowering UK Teams with AI',
    description: 'Transform boring tasks into opportunities for growth. Help your team hit higher targets, earn more, and enjoy their work.',
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