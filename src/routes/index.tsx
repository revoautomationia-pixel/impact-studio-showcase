import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Portfolio } from "@/components/site/Portfolio";
import { Manifesto } from "@/components/site/Manifesto";
import { Services } from "@/components/site/Services";
import { Differentiators } from "@/components/site/Differentiators";
import { Process } from "@/components/site/Process";
import { Studio } from "@/components/site/Studio";
import { Clients } from "@/components/site/Clients";
import { Faq } from "@/components/site/Faq";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { company, faqs } from "@/data/site";

const TITLE = "Production audiovisuelle & vidéo | Impact Studio Production";
const DESCRIPTION =
  "Impact Studio Production crée des films, contenus de marque et productions Broadcast à fort impact : vidéo, storytelling, VFX, IA, captation multicaméras et live.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: company.name,
          description: DESCRIPTION,
          telephone: "+33783146594",
          email: company.email,
          address: {
            "@type": "PostalAddress",
            streetAddress: company.address,
            addressLocality: company.city,
            addressRegion: "Vaucluse",
            addressCountry: "FR",
          },
          areaServed: "Vaucluse, Avignon",
          openingHours: "Mo-Fr 08:00-18:00",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Portfolio />
        <Manifesto />
        <Services />
        <Differentiators />
        <Process />
        <Studio />
        <Clients />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
