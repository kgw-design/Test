import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const DISHES = [
  {
    name: 'Sizzling Chicken Fajitas',
    desc: 'Grilled chicken with peppers, onions, and warm tortillas',
    img: 'https://www.elranchonmagnolia.com/uploads/1/3/1/3/131364923/dsc00694_orig.jpg',
  },
  {
    name: 'Tacos al Carbon',
    desc: 'Charcoal-grilled meat with fresh cilantro and salsa verde',
    img: 'https://www.elranchonmagnolia.com/uploads/1/3/1/3/131364923/dsc00691_orig.jpg',
  },
  {
    name: 'Chiles Ranchon',
    desc: 'Roasted poblanos with our signature ranchero sauce',
    img: 'https://www.elranchonmagnolia.com/uploads/1/3/1/3/131364923/dsc00697_orig.jpg',
  },
];

export default function MenuPreview() {
  return (
    <section className="py-24 md:py-32 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <p className="font-heading text-sm font-semibold uppercase tracking-[0.3em] text-[hsl(16,52%,63%)] mb-4">
              From Our Kitchen
            </p>
            <h2 className="font-heading font-black text-4xl md:text-5xl leading-[1.05]">
              Signature Dishes
            </h2>
          </div>
          <Link
            to="/menu"
            className="mt-6 md:mt-0 inline-flex items-center gap-2 font-heading font-bold text-sm text-[hsl(16,52%,63%)] hover:text-[hsl(16,52%,73%)] transition-colors min-h-[44px]"
          >
            View Full Menu <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {DISHES.map((dish) => (
            <div
              key={dish.name}
              className="group rounded-[1.5rem] overflow-hidden bg-primary-foreground/5 hover:bg-primary-foreground/10 transition-colors"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={dish.img}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading font-bold text-xl mb-1">{dish.name}</h3>
                <p className="text-primary-foreground/60 text-sm">{dish.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
