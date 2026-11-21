import { useState } from "react";
import { toast } from "sonner";
import { Eyebrow, Button } from "./primitives";

export function Newsletter() {
  const [email, setEmail] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) {
      toast.error("Please enter a valid email address");
      return;
    }
    toast.success("Welcome to the Private List", {
      description: "Check your inbox for early access to limited releases.",
    });
    setEmail("");
  };

  return (
    <section className="bg-brand-charcoal text-brand-ivory">
      <div className="mx-auto max-w-[760px] px-4 py-20 text-center md:px-8 lg:py-28">
        <Eyebrow withMark={false} className="justify-center text-brand-ivory/60">
          VIP Access
        </Eyebrow>
        <h2
          className="mt-6 font-display text-[34px] leading-[1.1] md:text-[46px]"
          style={{ fontWeight: 400 }}
        >
          Join the <span className="italic text-brand-red">Private List</span>
        </h2>
        <p className="mx-auto mt-5 max-w-md text-[15px] leading-relaxed text-brand-ivory/70">
          Get early access to limited releases, signature edits, exclusive
          offers, and fragrance stories curated for a refined audience.
        </p>

        <form
          onSubmit={submit}
          className="mx-auto mt-9 flex max-w-md flex-col gap-3 sm:flex-row"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 border border-brand-ivory/25 bg-transparent px-5 py-3.5 text-[14px] text-brand-ivory outline-none placeholder:text-brand-ivory/40 focus:border-brand-red"
          />
          <Button type="submit" variant="light">
            Subscribe
          </Button>
        </form>
        <p className="mt-4 text-[12px] text-brand-ivory/40">
          No spam — only the rare and the refined.
        </p>
      </div>
    </section>
  );
}
