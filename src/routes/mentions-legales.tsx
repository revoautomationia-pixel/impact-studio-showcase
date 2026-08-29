import { createFileRoute, Link } from "@tanstack/react-router";
import { company } from "@/data/site";

const TITLE = "Mentions légales | Impact Studio Production";
const DESCRIPTION =
  "Mentions légales du site d'Impact Studio Production, studio de production audiovisuelle basé à Jonquerettes (Vaucluse).";

export const Route = createFileRoute("/mentions-legales")({
  component: LegalPage,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/mentions-legales" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/mentions-legales" }],
  }),
});

function LegalPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-28 md:px-10">
      <Link to="/" className="text-xs tracking-[0.25em] text-primary uppercase">
        ← Retour
      </Link>
      <h1 className="display mt-8 text-4xl md:text-6xl">Mentions légales</h1>

      <div className="mt-12 space-y-8 text-sm leading-relaxed text-muted-foreground">
        <section>
          <h2 className="text-base font-semibold text-foreground">Éditeur du site</h2>
          <p className="mt-2">
            {company.name} — {company.contactName}
            <br />
            {company.address}, {company.city}
            <br />
            {company.phone} — {company.email}
          </p>
        </section>
        <section>
          <h2 className="text-base font-semibold text-foreground">Informations légales</h2>
          {/* PLACEHOLDER — compléter : forme juridique, SIRET, RCS, TVA, directeur de publication. */}
          <p className="mt-2">Informations à compléter par l'éditeur.</p>
        </section>
        <section>
          <h2 className="text-base font-semibold text-foreground">Hébergement</h2>
          {/* PLACEHOLDER — coordonnées de l'hébergeur. */}
          <p className="mt-2">Informations à compléter par l'éditeur.</p>
        </section>
        <section>
          <h2 className="text-base font-semibold text-foreground">Propriété intellectuelle</h2>
          <p className="mt-2">
            L'ensemble des contenus de ce site est protégé. Toute reproduction sans autorisation est
            interdite.
          </p>
        </section>
      </div>
    </main>
  );
}
