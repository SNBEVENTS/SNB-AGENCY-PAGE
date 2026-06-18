import Link from "next/link";

const services = [
  {
    title: "Corporate Offsites",
    desc: "Purposeful off-site experiences that align teams and accelerate strategy.",
  },
  {
    title: "Brand Launches",
    desc: "High-impact launch events that put your brand in the spotlight.",
  },
  {
    title: "Retreats & Team Experiences",
    desc: "Curated retreats that invest in your people and culture.",
  },
  {
    title: "Event Production",
    desc: "Full-scale technical production from concept to close.",
  },
];

const pillars = [
  {
    label: "Experienced",
    desc: "Years of high-stakes corporate event delivery across industries.",
  },
  {
    label: "Detail-Obsessed",
    desc: "No element is too small. Every decision is intentional.",
  },
  {
    label: "Results-Driven",
    desc: "We measure success in business outcomes, not just applause.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-[92vh] flex items-center px-6 py-32">
        <div className="max-w-7xl mx-auto w-full">
          <div className="max-w-4xl">
            <div className="w-12 h-px bg-gold mb-10" />
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-parchment leading-[1.05] tracking-tight mb-8">
              We Build Moments<br />That Move Business
            </h1>
            <p className="text-lg md:text-xl text-muted max-w-2xl leading-relaxed mb-12">
              SNB Events designs, produces, and executes high-end corporate events — from intimate leadership offsites to large-scale brand activations.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-gold text-ink px-9 py-4 text-xs font-semibold tracking-[0.2em] uppercase hover:bg-gold-light transition-colors"
            >
              Get in Touch <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="py-28 px-6 bg-ink-raised border-y border-ink-border">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="text-xs font-semibold text-gold tracking-[0.2em] uppercase mb-4">
              What We Do
            </p>
            <h2 className="font-heading text-3xl md:text-5xl text-parchment">
              End-to-End Event Expertise
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-ink-border">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-ink-raised p-8 group hover:bg-ink transition-colors"
              >
                <div className="w-8 h-px bg-gold mb-7 group-hover:w-14 transition-all duration-300" />
                <h3 className="font-heading text-xl text-parchment mb-4">
                  {service.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-xs text-gold tracking-[0.2em] uppercase hover:text-gold-light transition-colors border-b border-gold pb-1"
            >
              Explore All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* Why SNB */}
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div>
            <p className="text-xs font-semibold text-gold tracking-[0.2em] uppercase mb-5">
              Why SNB Events
            </p>
            <h2 className="font-heading text-3xl md:text-5xl text-parchment leading-snug mb-7">
              Precision, Craft, and Relentless Attention to Detail
            </h2>
            <p className="text-muted leading-relaxed mb-5">
              We don't do generic. Every event we touch is conceived with clear business intent and executed with the precision it deserves.
            </p>
            <p className="text-muted leading-relaxed">
              Our clients are brands and businesses that understand the value of a perfectly executed experience — and trust us to deliver it.
            </p>
          </div>

          <div className="space-y-4">
            {pillars.map((item) => (
              <div
                key={item.label}
                className="flex gap-6 p-7 border border-ink-border hover:border-gold transition-colors duration-300 group"
              >
                <div className="w-px bg-gold flex-shrink-0 group-hover:bg-gold-light transition-colors" />
                <div>
                  <div className="font-heading text-lg text-parchment mb-2">
                    {item.label}
                  </div>
                  <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-28 px-6 bg-ink-raised border-t border-ink-border">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-12 h-px bg-gold mx-auto mb-10" />
          <h2 className="font-heading text-3xl md:text-5xl text-parchment mb-7">
            Ready to Plan Your Next Event?
          </h2>
          <p className="text-muted mb-12 text-lg leading-relaxed">
            Tell us about your brief and let's build something extraordinary together.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 border border-gold text-gold px-9 py-4 text-xs font-semibold tracking-[0.2em] uppercase hover:bg-gold hover:text-ink transition-colors"
          >
            Start a Conversation →
          </Link>
        </div>
      </section>
    </>
  );
}
