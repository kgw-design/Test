import { MapPin, Phone, Clock } from 'lucide-react';

export default function LocationSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-heading text-sm font-semibold uppercase tracking-[0.3em] text-accent mb-4">Find Us</p>
          <h2 className="font-heading font-black text-4xl md:text-5xl text-foreground leading-[1.05]">
            Location {"&"} Hours
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-[1.5rem] overflow-hidden aspect-[4/3] bg-secondary">
            <iframe
              title="El Ranchon location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2687.4!2d-122.399!3d47.6395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s3416+W+McGraw+St+Seattle+WA+98199!5e0!3m2!1sen!2sus!4v1"
              className="w-full h-full border-0"
              loading="lazy"
              allowFullScreen
            />
          </div>

          <div className="flex flex-col gap-6 justify-center">
            <InfoCard icon={MapPin} title="Address" text="3416 W McGraw St. Seattle, WA 98199" />
            <InfoCard icon={Phone} title="Phone" text="(206) 281-9233" href="tel:2062819233" />
            <InfoCard icon={Clock} title="Hours" text="Monday – Sunday: 11:00 AM – 9:00 PM" />
            <InfoCard icon={Clock} title="Lunch Specials" text="Weekdays, Mon–Fri: 11:00 AM – 3:00 PM" />
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({ icon: Icon, title, text, href }) {
  const content = (
    <div className="flex items-start gap-5 p-6 rounded-2xl bg-secondary hover:bg-secondary/80 transition-colors">
      <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
        <Icon className="w-5 h-5 text-accent" />
      </div>
      <div>
        <p className="font-heading font-bold text-sm uppercase tracking-wider text-muted-foreground mb-1">{title}</p>
        <p className="font-body text-lg text-foreground">{text}</p>
      </div>
    </div>
  );
  if (href) return <a href={href}>{content}</a>;
  return content;
}
