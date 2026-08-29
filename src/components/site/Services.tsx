import { Reveal, SectionHeading } from "./Reveal";
import { services } from "@/data/site";

export function Services() {
  return (
    <section id="services" className="section-pad">
      <div className="mx-auto max-w-[1600px]">
        <SectionHeading eyebrow="What we do" title="De l'idée à la diffusion." />

        <div className="mt-16 md:mt-24">
          {services.map((s, i) => (
            <Reveal key={s.number}>
              <article
                className={`group grid gap-8 border-t border-border py-12 md:grid-cols-12 md:gap-12 md:py-20 ${
                  i === services.length - 1 ? "border-b" : ""
                }`}
              >
                <div className="md:col-span-1">
                  <span className="display text-3xl text-primary">{s.number}</span>
                </div>

                <div className="md:col-span-5">
                  <h3 className="display text-[clamp(2rem,4vw,3.4rem)]">{s.title}</h3>
                  <p className="mt-4 text-lg text-foreground/80">{s.hook}</p>
                  <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">{s.text}</p>
                  <ul className="mt-8 flex flex-wrap gap-2">
                    {s.skills.map((k) => (
                      <li
                        key={k}
                        className="rounded-full border border-border px-4 py-2 text-xs text-muted-foreground transition-colors group-hover:border-primary/40"
                      >
                        {k}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="md:col-span-6">
                  <div className="overflow-hidden">
                    <img
                      src={s.image}
                      alt={`${s.title} — Impact Studio Production`}
                      loading="lazy"
                      width={1600}
                      height={1000}
                      className="aspect-16/10 w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                    />
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
