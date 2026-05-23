import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'Menu', path: '/menu' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="font-heading font-black text-xl tracking-tight text-foreground">
          EL RANCHON
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(l => (
            <Link
              key={l.path}
              to={l.path}
              className={`font-heading text-sm font-semibold tracking-wide uppercase transition-colors hover:text-accent ${
                location.pathname === l.path ? 'text-accent' : 'text-foreground'
              }`}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="tel:2062819233"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-heading text-sm font-semibold px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity"
          >
            <Phone className="w-4 h-4" />
            Call Now
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 min-w-[44px] min-h-[44px] flex items-center justify-center">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-t border-border px-6 py-6 space-y-4">
          {NAV_LINKS.map(l => (
            <Link
              key={l.path}
              to={l.path}
              onClick={() => setOpen(false)}
              className="block font-heading text-lg font-semibold tracking-wide"
            >
              {l.label}
            </Link>
          ))}
          <a
            href="tel:2062819233"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-heading text-sm font-semibold px-5 py-2.5 rounded-full"
          >
            <Phone className="w-4 h-4" />
            (206) 281-9233
          </a>
        </div>
      )}
    </nav>
  );
}
