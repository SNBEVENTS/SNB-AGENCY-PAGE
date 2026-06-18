import Link from "next/link";

const services = [
  {
    title: "Corporate Offsites",
    tagline: "Strategy. Alignment. Impact.",
    description:
      "We design and produce corporate offsites that go beyond the hotel conference room. Whether you're taking your leadership team off-grid to reset and re-align, or bringing together a global organisation for a company-wide summit, we build events that create the conditions for real strategic work. Venue selection, facilitation design, logistics, catering, AV — we handle everything so your leadership can focus on what matters.",
    details: [
      "Leadership summits",
      "Company-wide conferences",
      "Strategic planning offsites",
      "Board & executive retreats",
    ],
  },
  {
    title: "Brand Launches & Activations",
    tagline: "Make the market take notice.",
    description:
      "A great brand launch is a statement. It sets the tone for everything that follows. We create launch experiences that are bold, intentional, and built for impact — from intimate media previews to large-scale consumer activations. We understand that a brand event isn't just an event; it's a positioning exercise, and we treat it with the seriousness that deserves.",
    details: [
      "Product launches",
      "Brand activations",
      "Press & media events",
      "Consumer experiences",
    ],
  },
  {
    title: "Retreats & Team Experiences",
    tagline: "Invest in your people.",
    description:
      "Culture doesn't build itself — it's built in moments. We create retreats and team experiences that reconnect people, rebuild momentum, and reinforce what your organisation values. From intimate leadership off-sites to full-team retreats, we curate environments and programmes that bring out the best in your people and give them something to return from energised.",
    details: [
      "Team retreats",
      "Culture & values events",
      "Employee milestones",
      "Incentive travel programmes",
    ],
  },
  {
    title: "Event Production",
    tagline: "Flawless from first call to final bow.",
    description:
      "For clients who need expert production partners, we offer full end-to-end event production services. We bring the technical expertise, supplier relationships, and operational rigour to deliver complex events at the highest standard — on time and on budget. From technical production and staging to run-of-show management, we own the detail so you don't have to.",
    details: [
      "AV & technical production",
      "Stage design & set build",
      "Run-of-show management",
      "Supplier & logistics coordination",
    ],
  },
];

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="pt-24 pb-24 px-6 border-b border-ink-border">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-semibold text-gold tracking-[0.2em] uppercase mb-5">
            Services
          </p>
          <h1 className="font-heading text-5xl md:text-7xl text-parchment leading-[1.05] tracking-tight mb-8 max-w-3xl">
            What We Do
          </h1>
          <p className="text-xl text-muted max-w-2xl leading-relaxed">
            From concept to completion, we manage every aspect of the events we produce — with no compromises.
          </p>
        </div>
      </section>

      {/* Service cards */}
      <section className="py-10 px-6">
        <div className="max-w-7xl mx-auto space-y-0 divide-y divide-ink-border border-y border-ink-border">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="py-16 md:py-20 group"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
                <div className="md:col-span-4">
                  <div className="text-xs text-gold tracking-[0.2em] mb-4 font-semibold">
                    0{i + 1}
                  </div>
                  <h2 className="font-heading text-2xl md:text-3xl text-parchment mb-4">
                    {service.title}
                  </h2>
                  <p className="text-sm text-gold italic">{service.tagline}</p>
                </div>

                <div className="md:col-span-8">
                  <p className="text-muted leading-relaxed mb-10">
                    {service.description}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.details.map((d) => (
                      <div
                        key={d}
                        className="flex items-center gap-3 text-sm text-muted"
                      >
                        <span className="w-1.5 h-1.5 bg-gold flex-shrink-0" />
                        {d}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 px-6 bg-ink-raised border-t border-ink-border">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-12 h-px bg-gold mx-auto mb-10" />
          <h2 className="font-heading text-3xl md:text-5xl text-parchment mb-7">
            Have Something in Mind?
          </h2>
          <p className="text-muted mb-12 text-lg leading-relaxed">
            Tell us about your brief and let's see what we can build together.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-gold text-ink px-9 py-4 text-xs font-semibold tracking-[0.2em] uppercase hover:bg-gold-light transition-colors"
          >
            Enquire Now →
          </Link>
        </div>
      </section>
    </>
  );
}
