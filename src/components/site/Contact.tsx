import { useState, type FormEvent } from "react";
import { z } from "zod";
import { Reveal } from "./Reveal";
import { company } from "@/data/site";

const schema = z.object({
  name: z.string().trim().min(2, "Merci d'indiquer votre nom.").max(100),
  company: z.string().trim().max(120).optional(),
  email: z.string().trim().email("Adresse email invalide.").max(255),
  phone: z.string().trim().max(30).optional(),
  projectType: z.string().max(60).optional(),
  budget: z.string().max(60).optional(),
  message: z.string().trim().min(10, "Décrivez votre projet en quelques mots.").max(2000),
  consent: z.literal(true, { message: "Votre consentement est nécessaire." }),
  // Anti-spam : champ honeypot invisible, doit rester vide.
  website: z.string().max(0).optional(),
});

const PROJECT_TYPES = ["Vidéo Impact", "Vidéo d'entreprise", "Broadcast / Live", "Autre"];
const BUDGETS = [
  "À définir",
  "Moins de 5 000 €",
  "5 000 – 10 000 €",
  "10 000 – 20 000 €",
  "20 000 € et plus",
];

const fieldClass =
  "w-full border-b border-border bg-transparent py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary";

export function Contact() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const parsed = schema.safeParse({ ...data, consent: data.consent === "on" });

    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) next[String(issue.path[0])] = issue.message;
      setErrors(next);
      setStatus("error");
      return;
    }

    setErrors({});
    // PLACEHOLDER : brancher ici l'envoi réel (email / backend).
    setStatus("success");
    form.reset();
  };

  return (
    <section id="contact" className="section-pad bg-ink">
      <div className="mx-auto max-w-[1600px]">
        <Reveal>
          <p className="eyebrow">Start a project</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="display mt-6 text-[clamp(2.4rem,7vw,6.5rem)]">
            Vous avez une idée ?
            <br />
            Donnons-lui de l'impact.
          </h2>
        </Reveal>
        <Reveal delay={0.14}>
          <p className="mt-8 max-w-2xl leading-relaxed text-muted-foreground">
            Film de marque, campagne, contenu social, captation ou diffusion live : parlez-nous de
            votre projet, même s'il n'en est encore qu'au stade de l'idée.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-7">
            <form onSubmit={onSubmit} noValidate className="grid gap-8 sm:grid-cols-2">
              <div className="hidden" aria-hidden>
                <label htmlFor="website">Ne pas remplir</label>
                <input id="website" name="website" tabIndex={-1} autoComplete="off" />
              </div>

              <div>
                <label htmlFor="name" className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
                  Nom *
                </label>
                <input id="name" name="name" required className={fieldClass} placeholder="Votre nom" />
                {errors.name ? <p className="mt-2 text-xs text-destructive">{errors.name}</p> : null}
              </div>

              <div>
                <label htmlFor="company" className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
                  Entreprise
                </label>
                <input id="company" name="company" className={fieldClass} placeholder="Votre entreprise" />
              </div>

              <div>
                <label htmlFor="email" className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
                  Email *
                </label>
                <input id="email" name="email" type="email" required className={fieldClass} placeholder="vous@exemple.com" />
                {errors.email ? <p className="mt-2 text-xs text-destructive">{errors.email}</p> : null}
              </div>

              <div>
                <label htmlFor="phone" className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
                  Téléphone
                </label>
                <input id="phone" name="phone" type="tel" className={fieldClass} placeholder="06 00 00 00 00" />
              </div>

              <div>
                <label htmlFor="projectType" className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
                  Type de projet
                </label>
                <select id="projectType" name="projectType" className={`${fieldClass} text-foreground`} defaultValue="">
                  <option value="" className="bg-ink">Sélectionner</option>
                  {PROJECT_TYPES.map((t) => (
                    <option key={t} value={t} className="bg-ink">
                      {t}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="budget" className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
                  Budget indicatif
                </label>
                <select id="budget" name="budget" className={`${fieldClass} text-foreground`} defaultValue="">
                  <option value="" className="bg-ink">Sélectionner</option>
                  {BUDGETS.map((b) => (
                    <option key={b} value={b} className="bg-ink">
                      {b}
                    </option>
                  ))}
                </select>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="message" className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className={`${fieldClass} resize-none`}
                  placeholder="Parlez-nous de votre projet"
                />
                {errors.message ? <p className="mt-2 text-xs text-destructive">{errors.message}</p> : null}
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="consent" className="flex items-start gap-3 text-sm text-muted-foreground">
                  <input id="consent" name="consent" type="checkbox" className="mt-1 accent-[var(--primary)]" />
                  <span>
                    J'accepte que mes données soient utilisées pour être recontacté au sujet de ma
                    demande.
                  </span>
                </label>
                {errors.consent ? <p className="mt-2 text-xs text-destructive">{errors.consent}</p> : null}
              </div>

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="inline-flex items-center rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
                >
                  Démarrer un projet ↗
                </button>
                <p aria-live="polite" className="mt-4 text-sm">
                  {status === "success" ? (
                    <span className="text-primary">
                      Merci, votre message est bien pris en compte. Nous revenons vers vous
                      rapidement.
                    </span>
                  ) : null}
                  {status === "error" ? (
                    <span className="text-destructive">
                      Certains champs doivent être corrigés avant l'envoi.
                    </span>
                  ) : null}
                </p>
              </div>
            </form>
          </div>

          <aside className="lg:col-span-5">
            <p className="display text-2xl">{company.name}</p>
            <address className="mt-6 space-y-2 text-sm not-italic text-muted-foreground">
              <p>{company.contactName}</p>
              <p>
                {company.address}
                <br />
                {company.city}
              </p>
              <p>
                <a href={company.phoneHref} className="transition-colors hover:text-primary">
                  {company.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${company.email}`} className="transition-colors hover:text-primary">
                  {company.email}
                </a>
              </p>
              <p>{company.hours}</p>
            </address>

            <div className="mt-10 overflow-hidden border border-border">
              <iframe
                title="Localisation d'Impact Studio Production à Jonquerettes"
                src={`https://www.google.com/maps?q=${encodeURIComponent(company.mapsQuery)}&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-64 w-full grayscale md:h-80"
              />
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
