import { Instagram, Youtube, Mail, Phone } from "lucide-react";
import { Wordmark } from "./primitives";

const COLUMNS: { heading: string; links: string[] }[] = [
  {
    heading: "Shop",
    links: ["Women", "Men", "Unisex", "Best Sellers", "Discovery Sets", "Gift Sets"],
  },
  {
    heading: "About",
    links: ["Our Story", "Journal", "Contact", "Shipping", "Returns", "FAQ"],
  },
];

export function Footer() {
  return (
    <footer className="bg-background">
      <div className="mx-auto max-w-[1400px] px-4 py-16 md:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4 lg:grid-cols-[1.6fr_1fr_1fr_1.4fr]">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Wordmark className="text-[22px]" />
            <p className="mt-5 max-w-xs text-[14px] leading-relaxed text-brand-muted">
              Luxury fragrance for women, men, and unisex expression — crafted
              for presence, worn as power.
            </p>
            <div className="mt-6 flex gap-3">
              {[Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center border border-brand-charcoal/15 text-brand-charcoal transition-colors hover:border-brand-red hover:text-brand-red"
                  aria-label="Social link"
                >
                  <Icon className="h-4 w-4" strokeWidth={1.5} />
                </a>
              ))}
              <a
                href="#"
                className="flex h-9 items-center justify-center border border-brand-charcoal/15 px-3 text-[11px] uppercase tracking-[0.12em] text-brand-charcoal transition-colors hover:border-brand-red hover:text-brand-red"
              >
                Pinterest
              </a>
              <a
                href="#"
                className="flex h-9 items-center justify-center border border-brand-charcoal/15 px-3 text-[11px] uppercase tracking-[0.12em] text-brand-charcoal transition-colors hover:border-brand-red hover:text-brand-red"
              >
                TikTok
              </a>
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.heading}>
              <h3 className="text-[11px] uppercase tracking-[0.2em] text-brand-charcoal">
                {col.heading}
              </h3>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-[14px] text-brand-muted transition-colors hover:text-brand-red"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h3 className="text-[11px] uppercase tracking-[0.2em] text-brand-charcoal">
              Contact
            </h3>
            <ul className="mt-5 space-y-3 text-[14px] text-brand-muted">
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-brand-red" strokeWidth={1.5} />
                hello@rovenaire.com
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-brand-red" strokeWidth={1.5} />
                +00 123 456 789
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-brand-charcoal/10 pt-7 text-[12px] text-brand-muted md:flex-row">
          <p>© {new Date().getFullYear()} ROVÉNAIRE. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-brand-red">Privacy Policy</a>
            <a href="#" className="hover:text-brand-red">Terms of Service</a>
            <a href="#" className="hover:text-brand-red">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
