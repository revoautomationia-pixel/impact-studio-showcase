import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/logo.webp.asset.json";
import { company, socials } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border px-5 py-16 md:px-10">
      <div className="mx-auto grid max-w-[1600px] gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <img
            src={logoAsset.url}
            alt="Impact Studio Production"
            width={344}
            height={230}
            loading="lazy"
            className="h-12 w-auto object-contain"
          />
          <p className="mt-6 max-w-sm text-sm text-muted-foreground">{company.signature}</p>
        </div>

        <nav className="lg:col-span-3" aria-label="Navigation pied de page">
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li><a href="#realisations" className="hover:text-primary">Réalisations</a></li>
            <li><a href="#services" className="hover:text-primary">Services</a></li>
            <li><a href="#studio" className="hover:text-primary">Studio</a></li>
            <li><a href="#contact" className="hover:text-primary">Contact</a></li>
            <li><Link to="/mentions-legales" className="hover:text-primary">Mentions légales</Link></li>
            <li>
              <Link to="/politique-de-confidentialite" className="hover:text-primary">
                Politique de confidentialité
              </Link>
            </li>
          </ul>
        </nav>

        <div className="lg:col-span-4">
          <address className="space-y-2 text-sm not-italic text-muted-foreground">
            <p>{company.address} — {company.city}</p>
            <p><a href={company.phoneHref} className="hover:text-primary">{company.phone}</a></p>
            <p><a href={`mailto:${company.email}`} className="hover:text-primary">{company.email}</a></p>
            <p>{company.website}</p>
          </address>

          {/* PLACEHOLDER — URLs des réseaux sociaux à renseigner. */}
          <ul className="mt-6 flex gap-4 text-xs tracking-[0.2em] text-muted-foreground uppercase">
            {socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} className="hover:text-primary">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="mx-auto mt-16 max-w-[1600px] text-xs text-muted-foreground">
        © {year} {company.name} — Tous droits réservés.
      </p>
    </footer>
  );
}
