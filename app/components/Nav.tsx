import Link from "next/link";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-ink border-b border-ink-border">
      <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link
          href="/"
          className="font-heading text-lg font-semibold text-parchment tracking-[0.2em] uppercase"
        >
          SNB Events
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs font-semibold text-muted hover:text-parchment transition-colors tracking-[0.15em] uppercase"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          href="/contact"
          className="hidden md:inline-flex items-center gap-2 border border-gold text-gold px-6 py-2.5 text-xs font-semibold tracking-[0.15em] uppercase hover:bg-gold hover:text-ink transition-colors"
        >
          Get in Touch
        </Link>

        <div className="md:hidden flex flex-col gap-1.5 cursor-pointer">
          <span className="block w-6 h-px bg-parchment" />
          <span className="block w-6 h-px bg-parchment" />
          <span className="block w-4 h-px bg-parchment" />
        </div>
      </nav>
    </header>
  );
}
