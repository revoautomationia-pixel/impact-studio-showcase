import { Reveal, SectionHeading } from "./Reveal";
import { processSteps } from "@/data/site";

export function Process() {
  return (
    <section id="process" className="section-pad">
      <div className="mx-auto max-w-[1600px]">
        <SectionHeading
          eyebrow="Our process"
          title={
            <>
              De l'idée
              <br />
              au dernier pixel.
            </>
          }
        />

        <ol className="mt-16 md:mt-24 md:grid md:grid-cols-5 md:gap-8">
          {processSteps.map((s, i) => (
            <Reveal key={s.number} delay={i * 0.06}>
              <li className="border-t border-border py-8 md:h-full md:py-10">
                <span className="display text-4xl text-primary/70 md:text-5xl">{s.number}</span>
                <h3 className="mt-6 text-lg font-semibold tracking-tight">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </li>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={0.1}>
          <div className="mt-16 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center rounded-full border border-primary/50 px-7 py-4 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Démarrer un projet ↗
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
