import Link from "next/link";

const values = [
  {
    title: "Experienced",
    body: "Our team has delivered high-stakes corporate events for over a decade. We've managed the complexity, handled the pivots, and earned the trust of exacting clients across industries. Nothing surprises us — and that means nothing surprises your guests.",
  },
  {
    title: "Detail-Obsessed",
    body: "We lose sleep over the things most agencies don't notice. The quality of the lighting, the flow of the agenda, the moment a guest walks through the door — every detail is a deliberate decision. The details are the experience.",
  },
  {
    title: "Results-Driven",
    body: "We begin every project by asking what success looks like. Then we design backwards from that answer. Our events move people — and we measure that in real business outcomes: alignment, engagement, leads, and momentum.",
  },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="pt-24 pb-24 px-6 border-b border-ink-border">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-semibold text-gold tracking-[0.2em] uppercase mb-5">
            About
          </p>
          <h1 className="font-heading text-5xl md:text-7xl text-parchment leading-[1.05] tracking-tight mb-8 max-w-3xl">
            The Agency Behind the Moment
          </h1>
          <p className="text-xl text-muted max-w-2xl leading-relaxed">
            SNB Events was built for clients who demand more than logistics — they demand excellence.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl text-parchment mb-10 leading-snug">
              Built on Precision.<br />Driven by Results.
            </h2>
            <div className="space-y-6 text-muted leading-relaxed">
              <p>
                SNB Events was founded on a simple conviction: that great corporate events don't happen by accident. They require a team of specialists who understand business, understand people, and are obsessive about craft.
              </p>
              <p>
                From the earliest conversations with a client to the last guest leaving the room, we are fully committed to every detail. We take the time to understand your business objectives, your audience, and what success actually means to you — and then we build an experience that delivers it.
              </p>
              <p>
                We work with leading brands, global businesses, and ambitious teams across industries — from technology and finance to luxury and consumer goods. Our client list is built on trust, not transactions.
              </p>
            </div>
          </div>

          <div className="flex items-center">
            <blockquote className="border-l-2 border-gold pl-10">
              <p className="font-heading text-2xl md:text-3xl text-parchment italic leading-relaxed mb-6">
                "Every event should do something. Create alignment. Shift culture. Launch a brand. Move people."
              </p>
              <cite className="block text-xs text-muted not-italic tracking-[0.15em] uppercase">
                — SNB Events
              </cite>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-28 px-6 bg-ink-raised border-y border-ink-border">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="text-xs font-semibold text-gold tracking-[0.2em] uppercase mb-5">
              Our Approach
            </p>
            <h2 className="font-heading text-3xl md:text-5xl text-parchment">
              How We Work
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-ink-border">
            {values.map((v) => (
              <div key={v.title} className="bg-ink-raised p-10 md:p-14">
                <div className="w-8 h-px bg-gold mb-10" />
                <h3 className="font-heading text-2xl text-parchment mb-6">{v.title}</h3>
                <p className="text-muted leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
            <div>
              <p className="text-xs font-semibold text-gold tracking-[0.2em] uppercase mb-5">
                The Process
              </p>
              <h2 className="font-heading text-3xl md:text-5xl text-parchment leading-snug">
                From Brief to Brilliant
              </h2>
            </div>
            <div className="space-y-0 divide-y divide-ink-border">
              {[
                { n: "01", title: "Discovery", desc: "We listen first. Understanding your objectives, your audience, and your constraints is the foundation of everything we build." },
                { n: "02", title: "Concept & Design", desc: "We develop a creative and logistical concept tailored to your goals — venues, formats, experiences, all considered from the ground up." },
                { n: "03", title: "Production", desc: "We manage every supplier, every detail, and every timeline. You stay informed without being overwhelmed." },
                { n: "04", title: "Delivery", desc: "We run the event with precision and calm — so your team can be present and your guests experience it fully." },
              ].map((step) => (
                <div key={step.n} className="py-8 flex gap-8">
                  <span className="text-xs text-gold font-semibold tracking-widest mt-1 flex-shrink-0">{step.n}</span>
                  <div>
                    <div className="font-heading text-lg text-parchment mb-2">{step.title}</div>
                    <p className="text-sm text-muted leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 px-6 bg-ink-raised border-t border-ink-border">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-12 h-px bg-gold mx-auto mb-10" />
          <h2 className="font-heading text-3xl md:text-5xl text-parchment mb-7">
            Let's Work Together
          </h2>
          <p className="text-muted mb-12 leading-relaxed">
            We take on a select number of projects each year. If you're planning something significant, we'd like to hear about it.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-gold text-ink px-9 py-4 text-xs font-semibold tracking-[0.2em] uppercase hover:bg-gold-light transition-colors"
          >
            Get in Touch →
          </Link>
        </div>
      </section>
    </>
  );
}
