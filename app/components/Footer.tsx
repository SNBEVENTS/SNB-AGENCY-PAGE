import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-ink-raised border-t border-ink-border">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
          <div>
            <div className="font-heading text-lg font-semibold text-parchment tracking-[0.2em] uppercase mb-5">
              SNB Events
            </div>
            <p className="text-sm text-muted leading-relaxed max-w-xs">
              We design, produce, and execute high-end corporate events that drive real business impact.
            </p>
          </div>

          <div>
            <div className="text-xs font-semibold text-gold tracking-[0.2em] uppercase mb-6">
              Navigation
            </div>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-parchment transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs font-semibold text-gold tracking-[0.2em] uppercase mb-6">
              Contact
            </div>
            <ul className="space-y-3 text-sm text-muted">
              <li>
                <a
                  href="mailto:info@strawsnberries.com"
                  className="hover:text-parchment transition-colors"
                >
                  info@strawsnberries.com
                </a>
              </li>
              <li>London, United Kingdom</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-ink-border mt-16 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-xs text-muted">
            © 2026 SNB Events. All rights reserved.
          </p>
          <p className="text-xs text-muted tracking-widest uppercase">
            Corporate Event Agency
          </p>
        </div>
      </div>
    </footer>
  );
}
