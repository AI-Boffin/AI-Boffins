import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Solutions from '@/components/Solutions';
import HowItWorks from '@/components/HowItWorks';
import Pricing from '@/components/Pricing';
import CaseStudies from '@/components/CaseStudies';
import Trust from '@/components/Trust';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Solutions />
      <HowItWorks />
      <Pricing />
      <CaseStudies />
      <Trust />
      <Contact />
      <Footer />
    </main>
  );
}