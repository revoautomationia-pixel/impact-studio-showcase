import { createFileRoute, Link } from "@tanstack/react-router";
import { company } from "@/data/site";

const TITLE = "Politique de confidentialité | Impact Studio Production";
const DESCRIPTION =
  "Comment Impact Studio Production collecte et traite les données envoyées via le formulaire de contact du site.";

export const Route = createFileRoute("/politique-de-confidentialite")({
  component: PrivacyPage,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/politique-de-confidentialite" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/politique-de-confidentialite" }],
  }),
});

function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-28 md:px-10">
      <Link to="/" className="text-xs tracking-[0.25em] text-primary uppercase">
        ← Retour
      </Link>
      <h1 className="display mt-8 text-4xl md:text-6xl">Politique de confidentialité</h1>

      <div className="mt-12 space-y-8 text-sm leading-relaxed text-muted-foreground">
        <section>
          <h2 className="text-base font-semibold text-foreground">Données collectées</h2>
          <p className="mt-2">
            Les données transmises via le formulaire de contact (nom, entreprise, email, téléphone,
            type de projet, budget indicatif, message) sont utilisées uniquement pour répondre à
            votre demande.
          </p>
        </section>
        <section>
          <h2 className="text-base font-semibold text-foreground">Conservation</h2>
          <p className="mt-2">
            Les données sont conservées le temps nécessaire au traitement de la demande et à la
            relation commerciale qui pourrait en découler.
          </p>
        </section>
        <section>
          <h2 className="text-base font-semibold text-foreground">Vos droits</h2>
          <p className="mt-2">
            Vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Pour
            l'exercer, écrivez à{" "}
            <a href={`mailto:${company.email}`} className="text-primary">
              {company.email}
            </a>
            .
          </p>
        </section>
        <section>
          <h2 className="text-base font-semibold text-foreground">Cookies</h2>
          {/* PLACEHOLDER — compléter si des outils de mesure d'audience sont ajoutés. */}
          <p className="mt-2">
            Ce site n'utilise pas d'outil de suivi publicitaire. La carte Google Maps est chargée à
            la demande et peut déposer ses propres cookies.
          </p>
        </section>
      </div>
    </main>
  );
}
