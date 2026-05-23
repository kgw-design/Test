import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="font-heading font-black text-2xl mb-4">EL RANCHON</h3>
          <p className="font-body text-primary-foreground/70 leading-relaxed">
            Family Mexican Restaurant — Serving the Magnolia community with love since 1996.
          </p>
        </div>

        <div className="space-y-4">
          <h4 className="font-heading font-bold text-sm uppercase tracking-widest text-primary-foreground/50">Visit Us</h4>
          <div className="flex items-start gap-3 text-primary-foreground/80">
            <MapPin className="w-5 h-5 mt-0.5 shrink-0" />
            <p>3416 W McGraw St.<br />Seattle, WA 98199</p>
          </div>
          <div className="flex items-center gap-3 text-primary-foreground/80">
            <Phone className="w-5 h-5 shrink-0" />
            <a href="tel:2062819233" className="hover:text-primary-foreground transition-colors">(206) 281-9233</a>
          </div>
          <div className="flex items-center gap-3 text-primary-foreground/80">
            <Clock className="w-5 h-5 shrink-0" />
            <p>Mon–Sun: 11:00 AM – 9:00 PM</p>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="font-heading font-bold text-sm uppercase tracking-widest text-primary-foreground/50">Explore</h4>
          <div className="flex flex-col gap-2">
            <Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Home</Link>
            <Link to="/menu" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Menu</Link>
            <Link to="/contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Contact</Link>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 py-6 text-center text-primary-foreground/40 text-sm font-heading">
        © {new Date().getFullYear()} El Ranchon Family Mexican Restaurant. All rights reserved.
      </div>
    </footer>
  );
}
