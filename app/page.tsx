import Approach from "@/components/Approach";
import CtaBand from "@/components/CtaBand";
import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import PricingSection from "@/components/PricingSection";
import Process from "@/components/Process";
import Services from "@/components/Services";
import StructuredData from "@/components/StructuredData";
import { faqItems } from "@/lib/faq-data";
import { createMetadata, siteConfig } from "@/lib/meta";
import { services } from "@/lib/services-data";

export const metadata = createMetadata({
  title: `${siteConfig.name}: Engineering high-performance systems`,
  description: siteConfig.description,
  keywords: [
    "NerveStack",
    "software house",
    "software agency",
    "n8n automation",
    "AI integration",
    "Next.js development",
    "React Native development",
  ],
  path: "/",
});

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: services.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Service",
      name: service.title,
      description: service.summary,
      url: `${siteConfig.url}/services/${service.slug}`,
      provider: { "@id": `${siteConfig.url}#organization` },
    },
  })),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Process />
      <Approach />
      <Portfolio />
      <PricingSection />
      <Faq />
      <CtaBand />
      <StructuredData data={serviceSchema} />
      <StructuredData data={faqSchema} />
    </>
  );
}
