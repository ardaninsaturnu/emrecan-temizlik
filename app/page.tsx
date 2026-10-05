import type { Metadata } from "next";

import { Coverage } from "@/components/coverage";
import { Faq } from "@/components/faq";
import { Guarantees } from "@/components/guarantees";
import { Hero } from "@/components/hero";
import { JsonLd } from "@/components/json-ld";
import { Process, Scope } from "@/components/process";
import { QuoteForm } from "@/components/quote-form";
import { Services } from "@/components/services";
import { Stats } from "@/components/stats";
import { Testimonials } from "@/components/testimonials";
import { TrustMarquee } from "@/components/trust-marquee";
import { buildFaqSchema } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `${site.name} | İstanbul Apartman, Ofis ve Ev Temizliği`,
  description: site.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustMarquee />
      <Services />
      <Process />
      <Scope />
      <Stats />
      <Guarantees />
      <Testimonials />
      <Coverage />
      <Faq />
      <QuoteForm />

      <JsonLd id="sss-verisi" data={buildFaqSchema()} />
    </>
  );
}
