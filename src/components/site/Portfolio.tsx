import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Reveal, SectionHeading } from "./Reveal";
import { projects, type Project } from "@/data/site";

function spanClass(span: Project["span"]) {
  if (span === "wide") return "md:col-span-7";
  if (span === "tall") return "md:col-span-5 md:row-span-2";
  return "md:col-span-5";
}

export function Portfolio() {
  const [active, setActive] = useState<Project | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <section id="realisations" className="section-pad">
      <div className="mx-auto max-w-[1600px]">
        <SectionHeading
          eyebrow="Selected work"
          title={
            <>
              Quelques projets.
              <br />
              Beaucoup d'impact.
            </>
          }
          text="Films de marque, contenus publicitaires, événements, créations visuelles et productions live. Découvrez une sélection de projets conçus pour être vus — et surtout retenus."
        />

        <div className="mt-16 grid grid-cols-1 gap-4 md:mt-24 md:grid-cols-12 md:gap-6">
          {projects.map((p, i) => (
            <Reveal key={p.id} delay={(i % 2) * 0.08} className={spanClass(p.span)}>
              <button
                type="button"
                onClick={() => setActive(p)}
                className="group block w-full text-left"
                aria-label={`Ouvrir le projet ${p.title}`}
              >
                <div className="relative overflow-hidden bg-surface">
                  <img
                    src={p.image}
                    alt={`${p.title} — ${p.category}`}
                    loading="lazy"
                    width={1600}
                    height={1000}
                    className={`w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04] ${
                      p.span === "wide" ? "aspect-[16/9]" : "aspect-4/3"
                    }`}
                  />
                  <div className="absolute inset-0 bg-ink/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <span className="pointer-events-none absolute bottom-5 right-5 hidden rounded-full border border-primary/60 bg-ink/70 px-4 py-2 text-[0.65rem] tracking-[0.25em] text-primary uppercase opacity-0 backdrop-blur transition-all duration-500 group-hover:opacity-100 md:block">
                    View
                  </span>
                </div>

                <div className="mt-5 grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
                  <div className="min-w-0">
                    <p className="text-[0.68rem] tracking-[0.25em] text-primary uppercase">
                      {p.client}
                    </p>
                    <h3 className="display mt-2 text-2xl md:text-3xl">{p.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
                  </div>
                  <p className="shrink-0 text-xs text-muted-foreground">
                    {p.category} · {p.year}
                  </p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-70 overflow-y-auto bg-ink/95 backdrop-blur-md"
            role="dialog"
            aria-modal="true"
            aria-label={active.title}
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="mx-auto max-w-5xl px-5 py-16 md:px-10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setActive(null)}
                  className="rounded-full border border-border px-5 py-2 text-xs tracking-widest uppercase transition-colors hover:border-primary hover:text-primary"
                >
                  Fermer ✕
                </button>
              </div>

              {active.video ? (
                <video
                  className="mt-6 aspect-video w-full bg-surface object-cover"
                  src={active.video}
                  poster={active.image}
                  controls
                  playsInline
                  preload="none"
                />
              ) : (
                <img
                  src={active.image}
                  alt={active.title}
                  className="mt-6 aspect-video w-full object-cover"
                  loading="lazy"
                />
              )}

              <p className="eyebrow mt-10">{active.category}</p>
              <h3 className="display mt-4 text-[clamp(2rem,5vw,3.6rem)]">{active.title}</h3>
              <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
                {active.description}
              </p>

              <dl className="mt-10 grid gap-8 border-t border-border pt-8 sm:grid-cols-3">
                <div>
                  <dt className="text-xs tracking-[0.25em] text-muted-foreground uppercase">
                    Client
                  </dt>
                  <dd className="mt-2">{active.client}</dd>
                </div>
                <div>
                  <dt className="text-xs tracking-[0.25em] text-muted-foreground uppercase">
                    Mission
                  </dt>
                  <dd className="mt-2">{active.mission}</dd>
                </div>
                <div>
                  <dt className="text-xs tracking-[0.25em] text-muted-foreground uppercase">
                    Année
                  </dt>
                  <dd className="mt-2">{active.year}</dd>
                </div>
              </dl>

              <ul className="mt-8 flex flex-wrap gap-2">
                {active.services.map((s) => (
                  <li
                    key={s}
                    className="rounded-full border border-border px-4 py-2 text-xs text-muted-foreground"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
