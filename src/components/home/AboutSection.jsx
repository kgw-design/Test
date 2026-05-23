const KITCHEN_IMG = 'https://www.elranchonmagnolia.com/uploads/1/3/1/3/131364923/dsc00694_orig.jpg';

export default function AboutSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <div className="rounded-[2rem] overflow-hidden aspect-[4/3]">
              <img
                src={KITCHEN_IMG}
                alt="Sizzling chicken fajita at El Ranchon"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 md:right-8 bg-accent text-accent-foreground rounded-full w-28 h-28 flex flex-col items-center justify-center font-heading">
              <span className="text-3xl font-black leading-none">30</span>
              <span className="text-[10px] font-bold uppercase tracking-wider">Years</span>
            </div>
          </div>

          <div>
            <p className="font-heading text-sm font-semibold uppercase tracking-[0.3em] text-accent mb-4">Our Story</p>
            <h2 className="font-heading font-black text-4xl md:text-5xl text-foreground leading-[1.05] mb-6">
              A Family Kitchen,<br />Open to All
            </h2>
            <div className="space-y-4 text-muted-foreground leading-[1.7] text-lg">
              <p>
                El Ranchon Family Mexican Restaurant was established in 1996 in the Magnolia Village Neighborhood of Seattle, Washington.
              </p>
              <p>
                For three decades, we've served our community with quality service, amazing margaritas, and a warm environment for everyone to enjoy. Every dish carries the flavors and traditions of our family kitchen.
              </p>
              <p>
                We're proud to celebrate our 30th anniversary, and we invite the Magnolia community to join us as we continue this journey together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
