import { Reveal } from "./Reveal";
import { clientPlaceholders } from "@/data/site";

/**
 * PLACEHOLDER — logos clients.
 * Remplacer `clientPlaceholders` (src/data/site.ts) par les vrais logos,
 * ou remplacer cette section par des témoignages clients une fois disponibles.
 */
export function Clients() {
  return (
    <section className="section-pad">
      <div className="mx-auto max-w-[1600px]">
        <Reveal>
          <p className="eyebrow">Trust</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="display mt-6 text-[clamp(2rem,4.5vw,4rem)]">
            Ils nous confient leur image.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-px border border-border bg-border sm:grid-cols-3 lg:grid-cols-6">
          {clientPlaceholders.map((c, i) => (
            <Reveal key={c} delay={i * 0.04}>
              <div className="flex h-28 items-center justify-center bg-background px-4 md:h-36">
                <span className="text-center text-[0.65rem] tracking-[0.25em] text-muted-foreground uppercase">
                  {c}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
