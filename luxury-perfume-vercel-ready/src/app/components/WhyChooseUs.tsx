import { Droplet, Clock, Package, Users, Gift, FlaskConical } from "lucide-react";
import { Eyebrow, SectionHeading } from "./primitives";

const POINTS = [
  {
    icon: FlaskConical,
    title: "Extrait & Eau de Parfum",
    desc: "High-concentration blends crafted by master perfumers.",
  },
  {
    icon: Clock,
    title: "Long-Lasting Wear",
    desc: "Luxury scent profiles that linger gracefully all day.",
  },
  {
    icon: Package,
    title: "Premium Presentation",
    desc: "Weighted glass, considered detail, gift-ready packaging.",
  },
  {
    icon: Users,
    title: "Curated for All",
    desc: "Designed for women, men, and unisex taste alike.",
  },
  {
    icon: Gift,
    title: "Made for Gifting",
    desc: "Ideal for personal collection or unforgettable presents.",
  },
  {
    icon: Droplet,
    title: "Modern Compositions",
    desc: "Carefully crafted, contemporary fragrance architecture.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="border-y border-brand-charcoal/10 bg-background">
      <div className="mx-auto max-w-[1400px] px-4 py-20 md:px-8 lg:py-28">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <Eyebrow>The ROVÉNAIRE Difference</Eyebrow>
            <SectionHeading className="mt-4">Why ROVÉNAIRE</SectionHeading>
          </div>
          <p className="max-w-sm text-[14px] leading-relaxed text-brand-muted">
            Every fragrance is designed to feel luxurious from the first spray
            to the final lingering note.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden border border-brand-charcoal/10 bg-brand-charcoal/10 sm:grid-cols-2 lg:grid-cols-3">
          {POINTS.map((p) => (
            <div key={p.title} className="bg-background p-8">
              <p.icon className="h-6 w-6 text-brand-red" strokeWidth={1.3} />
              <h3
                className="mt-5 font-display text-[21px] text-brand-charcoal"
                style={{ fontWeight: 500 }}
              >
                {p.title}
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-brand-muted">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
