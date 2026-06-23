import Link from "next/link";

const services = [
  {
    n: "01",
    title: "Corporate Offsites & Retreats",
    desc: "Purposeful off-site experiences that align teams and accelerate strategy.",
  },
  {
    n: "02",
    title: "Brand Activations",
    desc: "High-impact launch events that put your brand in the spotlight.",
  },
  {
    n: "03",
    title: "Team Building & Experiences",
    desc: "Structured activities and shared experiences that build culture.",
  },
  {
    n: "04",
    title: "Corporate & Company Events",
    desc: "Summer parties, end-of-year nights, and company socials — expertly organised.",
  },
];

const work = [
  {
    src: "/gallery-outdoor.jpg",
    position: "object-[center_60%]",
    cat: "COMPANY EVENT",
    title: "Summer Garden Party, Barcelona",
  },
  {
    src: "/brand-activation.jpg",
    position: "object-center",
    cat: "BRAND ACTIVATION",
    title: "Brand Activation, Barcelona",
  },
  {
    src: "/team-building.jpg",
    position: "object-top",
    cat: "TEAM BUILDING",
    title: "Activity Day, Ibiza",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="h-screen flex items-end pb-16 md:pb-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/Hero.jpg"
            alt=""
            className="w-full h-full object-cover object-center"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-ink/55" />
        </div>
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <p className="text-[11px] font-semibold text-gold-light tracking-[0.4em] uppercase mb-6">
            Barcelona · Ibiza · Worldwide
          </p>
          <h1 className="font-heading text-[clamp(3.5rem,9vw,8.5rem)] text-surface leading-[0.92] tracking-tight mb-10">
            Corporate<br />
            <em>Events</em><br />
            That Move<br />
            Business
          </h1>
          <div className="flex flex-wrap items-center gap-8 md:gap-12">
            <Link
              href="/contact"
              className="text-[11px] font-semibold text-surface tracking-[0.3em] uppercase border-b border-gold pb-1 hover:text-gold transition-colors"
            >
              Start a Conversation →
            </Link>
            <Link
              href="/services"
              className="text-[11px] font-semibold text-surface/60 tracking-[0.3em] uppercase hover:text-surface transition-colors"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Intro statement */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="w-8 h-px bg-gold mb-12" />
          <p className="font-heading text-2xl md:text-4xl text-parchment leading-[1.35] max-w-4xl">
            We design, produce, and execute high-end corporate events — from intimate leadership
            offsites to large-scale brand activations. Every event starts with a brief and ends
            with a result.
          </p>
        </div>
      </section>

      {/* What we do */}
      <section className="px-6 border-y border-ink-border">
        <div className="max-w-7xl mx-auto">
          <div className="py-10 border-b border-ink-border">
            <p className="text-[11px] font-semibold text-muted tracking-[0.3em] uppercase">
              What We Do
            </p>
          </div>
          {services.map((s) => (
            <Link
              key={s.n}
              href="/services"
              className="flex items-start md:items-center gap-6 md:gap-16 py-9 group border-b border-ink-border hover:bg-ink-raised transition-colors duration-200 px-2 -mx-2"
            >
              <span className="text-[11px] text-gold font-semibold tracking-widest flex-shrink-0 mt-1.5 md:mt-0 w-8">
                {s.n}
              </span>
              <h2 className="font-heading text-xl md:text-3xl text-parchment flex-1">
                {s.title}
              </h2>
              <p className="hidden md:block text-sm text-muted max-w-xs leading-relaxed flex-shrink-0">
                {s.desc}
              </p>
              <span className="text-muted group-hover:text-gold transition-colors flex-shrink-0 text-lg">
                →
              </span>
            </Link>
          ))}
          <div className="py-8">
            <Link
              href="/services"
              className="text-[11px] font-semibold text-gold tracking-[0.25em] uppercase hover:text-gold-light transition-colors"
            >
              Explore All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* Full-bleed photo */}
      <div className="w-full h-[55vh] md:h-[75vh] overflow-hidden">
        <img
          src="/gallery-outdoor.jpg"
          alt="SNB Events Agency outdoor event setup"
          className="w-full h-full object-cover object-[center_60%]"
        />
      </div>

      {/* Why SNB */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
          <div className="md:sticky md:top-32">
            <p className="text-[11px] font-semibold text-muted tracking-[0.3em] uppercase mb-8">
              Why SNB Events Agency
            </p>
            <h2 className="font-heading text-3xl md:text-5xl text-parchment leading-[1.1] mb-8">
              Precision, Craft,<br />and Relentless<br />Attention to Detail
            </h2>
            <p className="text-muted leading-relaxed mb-5">
              Every event we work on starts with a conversation. We take time to understand what
              you need, what success looks like, and how to make it happen.
            </p>
            <p className="text-muted leading-relaxed mb-10">
              Our clients are brands and businesses who want an agency they can genuinely rely on —
              straightforward to work with, invested in your event, and there every step of the way.
            </p>
            <Link
              href="/about"
              className="text-[11px] font-semibold text-gold tracking-[0.25em] uppercase border-b border-gold pb-1 hover:text-gold-light hover:border-gold-light transition-colors"
            >
              About Us →
            </Link>
          </div>

          <div className="divide-y divide-ink-border border-y border-ink-border">
            {[
              {
                label: "Experienced & Multilingual",
                desc: "Years of high-stakes event delivery across industries and languages. Our multilingual team works seamlessly with international clients and cross-border briefs.",
              },
              {
                label: "Detail-Obsessed & Flexible",
                desc: "No element is too small. Every decision is intentional. When things shift — as they always do — we adapt without losing grip on what matters.",
              },
              {
                label: "Results-Driven & Quick to Respond",
                desc: "We measure success in business outcomes, not just applause. Expect fast, clear communication from first enquiry to final delivery.",
              },
            ].map((item) => (
              <div key={item.label} className="py-10">
                <h3 className="font-heading text-xl text-parchment mb-4">{item.label}</h3>
                <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured work */}
      <section className="py-24 md:py-32 px-6 border-t border-ink-border bg-ink-raised">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-14">
            <div>
              <p className="text-[11px] font-semibold text-muted tracking-[0.3em] uppercase mb-4">
                Featured Work
              </p>
              <h2 className="font-heading text-3xl md:text-5xl text-parchment">Our Events</h2>
            </div>
            <Link
              href="/services"
              className="hidden md:inline text-[11px] font-semibold text-gold tracking-[0.25em] uppercase hover:text-gold-light transition-colors"
            >
              All Services →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {work.map((item) => (
              <div key={item.src} className="group cursor-pointer">
                <div className="overflow-hidden aspect-[3/4] mb-5">
                  <img
                    src={item.src}
                    alt={item.title}
                    className={`w-full h-full object-cover ${item.position} group-hover:scale-105 transition-transform duration-700`}
                  />
                </div>
                <p className="text-[10px] font-semibold text-gold tracking-[0.3em] uppercase mb-1.5">
                  {item.cat}
                </p>
                <p className="font-heading text-lg text-parchment">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-36 md:py-48 px-6 bg-ink relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/Hero.jpg"
            alt=""
            className="w-full h-full object-cover opacity-15"
            aria-hidden="true"
          />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <p className="text-[11px] font-semibold text-gold tracking-[0.4em] uppercase mb-8">
            Let&apos;s Work Together
          </p>
          <h2 className="font-heading text-[clamp(2.5rem,7vw,7rem)] text-surface leading-[0.95] tracking-tight mb-14 max-w-3xl">
            Ready to Plan Your Next Event?
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 text-[11px] font-semibold text-surface tracking-[0.3em] uppercase border-b border-gold pb-1 hover:text-gold transition-colors"
          >
            Start a Conversation →
          </Link>
        </div>
      </section>
    </>
  );
}
