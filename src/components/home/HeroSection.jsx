import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HERO_IMG = 'https://www.elranchonmagnolia.com/uploads/1/3/1/3/131364923/background-images/1099376747.jpg';

export default function HeroSection() {
  return (
    <section className="relative min-h-[100vh] flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <img src={HERO_IMG} alt="El Ranchon restaurant" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 md:pb-28 pt-32 w-full">
        <p className="font-heading text-sm md:text-base font-semibold uppercase tracking-[0.3em] text-white/70 mb-4">
          Est. 1996 · Magnolia Village, Seattle
        </p>
        <h1 className="font-heading font-black text-5xl md:text-7xl lg:text-8xl text-white leading-[0.9] mb-6 max-w-4xl">
          Where Family
          <br />
          <span className="text-[hsl(16,52%,63%)]">Meets Flavor</span>
        </h1>
        <p className="font-body text-lg md:text-xl text-white/80 max-w-lg leading-relaxed mb-8">
          Three decades of authentic Mexican cuisine, amazing margaritas, and a warm welcome for everyone.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            to="/menu"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-heading font-bold text-sm px-7 py-3.5 rounded-full hover:opacity-90 transition-opacity min-h-[44px]"
          >
            Explore Our Menu
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="tel:2062819233"
            className="inline-flex items-center gap-2 border-2 border-white/30 text-white font-heading font-bold text-sm px-7 py-3.5 rounded-full hover:bg-white/10 transition-colors min-h-[44px]"
          >
            Call Us
          </a>
        </div>
      </div>
    </section>
  );
}
