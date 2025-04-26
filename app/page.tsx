import { Navbar } from '@/components/navbar';
import { HeroSection } from '@/components/hero-section';
import { FeaturesSection } from '@/components/features-section';
import { GameplaySection } from '@/components/gameplay-section';
import { CharactersSection } from '@/components/characters-section';
import { TestimonialsSection } from '@/components/testimonials-section';
import { CtaSection } from '@/components/cta-section';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <GameplaySection />
      <CharactersSection />
      <TestimonialsSection />
      <CtaSection />
      <Footer />
    </main>
  );
}