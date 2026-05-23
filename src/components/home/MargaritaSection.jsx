const PARTY_IMG = 'https://www.elranchonmagnolia.com/uploads/1/3/1/3/131364923/img-4227_orig.jpg';

export default function MargaritaSection() {
  return (
    <section className="py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <p className="font-heading text-sm font-semibold uppercase tracking-[0.3em] text-accent mb-4">
              The Bar
            </p>
            <h2 className="font-heading font-black text-4xl md:text-5xl text-foreground leading-[1.05] mb-6">
              Amazing Margaritas {"&"} Cocktails
            </h2>
            <p className="text-muted-foreground text-lg leading-[1.7] mb-8">
              Our legendary margaritas are crafted with premium tequila, fresh-squeezed lime, and the perfect balance of sweet and salt. Whether you prefer classic, frozen, or one of our signature flavors — there's a perfect pour waiting for you.
            </p>
            <a
              href="tel:2062819233"
              className="inline-flex items-center gap-2 bg-gold text-primary font-heading font-bold text-sm px-7 py-3.5 rounded-full hover:opacity-90 transition-opacity min-h-[44px]"
            >
              Call Us: (206) 281-9233
            </a>
          </div>

          <div className="order-1 lg:order-2">
            <div className="rounded-[2rem] overflow-hidden aspect-[4/3] max-w-md mx-auto lg:ml-auto">
              <img
                src={PARTY_IMG}
                alt="Cinco de Mayo celebration at El Ranchon"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
