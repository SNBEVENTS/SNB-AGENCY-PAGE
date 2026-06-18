import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <>
      {/* Hero */}
      <section className="pt-24 pb-24 px-6 border-b border-ink-border">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-semibold text-gold tracking-[0.2em] uppercase mb-5">
            Contact
          </p>
          <h1 className="font-heading text-5xl md:text-7xl text-parchment leading-[1.05] tracking-tight mb-8 max-w-3xl">
            Let's Talk
          </h1>
          <p className="text-xl text-muted max-w-2xl leading-relaxed">
            Whether you have a detailed brief or just a spark of an idea, we'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Form + info */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-20">
          {/* Info sidebar */}
          <div className="space-y-12">
            <div>
              <div className="text-xs font-semibold text-gold tracking-[0.2em] uppercase mb-5">
                Email
              </div>
              <a
                href="mailto:info@strawsnberries.com"
                className="text-sm text-muted hover:text-parchment transition-colors"
              >
                info@strawsnberries.com
              </a>
            </div>

            <div>
              <div className="text-xs font-semibold text-gold tracking-[0.2em] uppercase mb-5">
                Based In
              </div>
              <p className="text-sm text-muted">London, United Kingdom</p>
            </div>

            <div>
              <div className="text-xs font-semibold text-gold tracking-[0.2em] uppercase mb-5">
                What Happens Next
              </div>
              <div className="space-y-4 text-sm text-muted leading-relaxed">
                <p>
                  We review every enquiry personally and aim to respond within 48 hours.
                </p>
                <p>
                  If your brief is a good fit, we'll arrange a call to learn more about your event and what success looks like for you.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-ink-border">
              <div className="text-xs font-semibold text-gold tracking-[0.2em] uppercase mb-5">
                Working With Us
              </div>
              <div className="space-y-3 text-sm text-muted leading-relaxed">
                <p>We take on a select number of projects each year.</p>
                <p>We work exclusively with businesses and brands — not private individuals.</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-2">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
