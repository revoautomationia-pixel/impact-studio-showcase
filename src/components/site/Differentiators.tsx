import { Reveal, SectionHeading } from "./Reveal";
import { pillars } from "@/data/site";

export function Differentiators() {
  return (
    <section className="section-pad bg-surface">
      <div className="mx-auto max-w-[1600px]">
        <SectionHeading
          eyebrow="Why impact"
          title={
            <>
              Créatif dans l'idée.
              <br />
              Rigoureux dans l'exécution.
            </>
          }
        />

        <div className="mt-16 grid gap-px border border-border bg-border sm:grid-cols-2 md:mt-24">
          {pillars.map((p, i) => (
            <Reveal key={p.number} delay={i * 0.06}>
              <div className="h-full bg-surface p-8 transition-colors hover:bg-surface-2 md:p-14">
                <span className="text-[0.68rem] tracking-[0.3em] text-primary">{p.number}</span>
                <h3 className="display mt-6 text-3xl md:text-4xl">{p.title}</h3>
                <p className="mt-4 max-w-sm leading-relaxed text-muted-foreground">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
