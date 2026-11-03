import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function LegalPage({ title, introduction, sections }) {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="bg-primary text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-montserrat font-bold text-4xl md:text-5xl mb-6">{title}</h1>
          <p className="text-lg text-white/90">{introduction}</p>
          <p className="mt-6 text-sm text-white/80">Last updated: 11 October 2026</p>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {sections.map(({ heading, content }) => (
            <section key={heading}>
              <h2 className="font-montserrat font-bold text-2xl text-primary mb-4">{heading}</h2>
              <div className="text-gray-700 leading-relaxed space-y-4">{content}</div>
            </section>
          ))}
          <nav aria-label="Related legal information" className="flex flex-wrap gap-4 text-primary underline">
            <Link href="/privacy">Privacy notice</Link>
            <Link href="/cookies">Cookie notice</Link>
            <Link href="/terms">Service terms</Link>
            <Link href="/gdpr">Data protection</Link>
            <a href="https://ico.org.uk/make-a-complaint/">Contact the ICO</a>
            <a href="mailto:info@aiboffins.co.uk">Contact AI Boffins</a>
          </nav>
        </div>
      </section>
      <Footer />
    </main>
  );
}
