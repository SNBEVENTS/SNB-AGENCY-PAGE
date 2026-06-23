import Link from "next/link";

const steps = [
  {
    n: "01",
    title: "Discovery",
    desc: "We listen first. Understanding your objectives, your audience, and your constraints is the foundation of everything we build.",
  },
  {
    n: "02",
    title: "Concept & Design",
    desc: "We develop a creative and logistical concept tailored to your goals — venues, formats, experiences, considered from the ground up.",
  },
  {
    n: "03",
    title: "Production",
    desc: "We manage every supplier, every detail, and every timeline. You stay informed without being overwhelmed.",
  },
  {
    n: "04",
    title: "Delivery",
    desc: "We run the event with precision and calm — so your team can be present and your guests experience it fully.",
  },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-24 px-6 border-b border-ink-border">
        <div className="max-w-7xl mx-auto">
          <p className="text-[11px] font-semibold text-muted tracking-[0.3em] uppercase mb-8">
            About
          </p>
          <h1 className="font-heading text-[clamp(3rem,7vw,7rem)] text-parchment leading-[0.95] tracking-tight mb-10 max-w-4xl">
            The Agency<br />Behind the<br /><em>Moment</em>
          </h1>
          <p className="text-xl text-muted max-w-2xl leading-relaxed">
            SNB Events Agency was built for clients who demand more than logistics — they demand excellence.
          </p>
        </div>
      </section>

      {/* Story + team photo */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          <div className="flex flex-col gap-8">
            <div className="overflow-hidden">
              <img
                src="/team.jpg"
                alt="SNB Events Agency team"
                className="w-full h-[480px] md:h-[600px] object-cover object-[center_20%]"
              />
            </div>
            <blockquote className="border-l-2 border-gold pl-8">
              <p className="font-heading text-xl md:text-2xl text-parchment italic leading-relaxed mb-4">
                &ldquo;Every event should do something. Create alignment. Shift culture. Launch a brand. Move people.&rdquo;
              </p>
              <cite className="block text-[11px] text-muted not-italic tracking-[0.2em] uppercase">
                — SNB Events Agency
              </cite>
            </blockquote>
          </div>

          <div className="md:pt-16">
            <h2 className="font-heading text-3xl md:text-5xl text-parchment leading-[1.1] mb-10">
              Built on Precision.<br />Driven by Results.
            </h2>
            <div className="space-y-6 text-muted leading-relaxed">
              <p>
                SNB Events Agency was founded on a simple conviction: that great corporate events
                don&apos;t happen by accident. They require a team of specialists who understand
                business, understand people, and are obsessive about craft.
              </p>
              <p>
                From the earliest conversations with a client to the last guest leaving the room,
                we are fully committed to every detail. We take time to understand your business
                objectives, your audience, and what success actually means to you — then we build
                an experience that delivers it.
              </p>
              <p>
                We work with leading brands, global businesses, and ambitious teams across
                industries — from technology and finance to luxury and consumer goods. Our client
                list is built on trust, not transactions.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-0 border border-ink-border divide-x divide-ink-border">
              {[
                { n: "10+", label: "Years of experience" },
                { n: "4", label: "Languages spoken" },
                { n: "100%", label: "Bespoke events" },
                { n: "BCN", label: "Based in Barcelona" },
              ].map((stat) => (
                <div key={stat.label} className="p-8 even:border-t even:md:border-t-0 first:border-b md:first:border-b-0 last:border-t">
                  <div className="font-heading text-3xl text-parchment mb-1">{stat.n}</div>
                  <div className="text-[11px] text-muted tracking-[0.15em] uppercase">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Photo strip */}
      <div className="w-full h-[50vh] md:h-[65vh] overflow-hidden">
        <img
          src="/about-banner.jpg"
          alt="SNB Events Agency event setup"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* How we work */}
      <section className="py-24 md:py-32 px-6 bg-ink-raised border-y border-ink-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
            <div className="md:sticky md:top-32">
              <p className="text-[11px] font-semibold text-muted tracking-[0.3em] uppercase mb-8">
                How We Work
              </p>
              <h2 className="font-heading text-3xl md:text-5xl text-parchment leading-[1.1]">
                From Brief<br />to Brilliant
              </h2>
            </div>

            <div className="divide-y divide-ink-border border-y border-ink-border">
              {steps.map((step) => (
                <div key={step.n} className="py-10 flex gap-8">
                  <span className="text-[11px] text-gold font-semibold tracking-widest mt-1 flex-shrink-0 w-8">
                    {step.n}
                  </span>
                  <div>
                    <div className="font-heading text-xl text-parchment mb-3">{step.title}</div>
                    <p className="text-sm text-muted leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <p className="text-[11px] font-semibold text-muted tracking-[0.3em] uppercase mb-4">
              Our Approach
            </p>
            <h2 className="font-heading text-3xl md:text-5xl text-parchment">
              What We Stand For
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-ink-border border border-ink-border">
            {[
              {
                title: "Experienced",
                body: "Our team has delivered high-stakes corporate events for over a decade. We&apos;ve managed the complexity, handled the pivots, and earned the trust of exacting clients across industries.",
              },
              {
                title: "Detail-Obsessed",
                body: "We lose sleep over the things most agencies don&apos;t notice. The quality of the lighting, the flow of the agenda, the moment a guest walks through the door — the details are the experience.",
              },
              {
                title: "Results-Driven",
                body: "We begin every project by asking what success looks like. Then we design backwards from that answer. Our events move people — and we measure that in real business outcomes.",
              },
            ].map((v) => (
              <div key={v.title} className="bg-surface p-10 md:p-14">
                <div className="w-8 h-px bg-gold mb-10" />
                <h3 className="font-heading text-2xl text-parchment mb-6">{v.title}</h3>
                <p className="text-muted leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-36 px-6 bg-ink relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/team.jpg"
            alt=""
            className="w-full h-full object-cover object-[center_20%] opacity-10"
            aria-hidden="true"
          />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <p className="text-[11px] font-semibold text-gold tracking-[0.4em] uppercase mb-8">
            Work With Us
          </p>
          <h2 className="font-heading text-[clamp(2.5rem,6vw,6rem)] text-surface leading-[0.95] tracking-tight mb-14 max-w-2xl">
            Let&apos;s Work Together
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 text-[11px] font-semibold text-surface tracking-[0.3em] uppercase border-b border-gold pb-1 hover:text-gold transition-colors"
          >
            Get in Touch →
          </Link>
        </div>
      </section>
    </>
  );
}
