import { Reveal } from "./Reveal";
import studioImg from "@/assets/studio.jpg";
import { company } from "@/data/site";

export function Studio() {
  return (
    <section id="studio" className="section-pad bg-ink">
      <div className="mx-auto grid max-w-[1600px] gap-12 lg:grid-cols-12 lg:gap-20">
        <Reveal className="lg:col-span-5">
          <div className="overflow-hidden">
            <img
              src={studioImg}
              alt="Équipe Impact Studio Production en tournage"
              loading="lazy"
              width={1400}
              height={1700}
              className="aspect-4/5 w-full object-cover"
            />
          </div>
        </Reveal>

        <div className="lg:col-span-7 lg:pt-16">
          <Reveal>
            <p className="eyebrow">The studio</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="display mt-6 text-[clamp(2.2rem,5vw,4.4rem)]">
              Un nouveau studio.
              <br />
              Une expérience déjà bien réelle.
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-8 max-w-xl leading-relaxed text-muted-foreground">
              Impact Studio Production réunit création audiovisuelle, storytelling et technologies
              visuelles avec une expertise Broadcast construite au fil de plusieurs années
              d'expérience avec Murphy Production.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
              Notre ambition : réunir créativité, émotion et maîtrise technique sous une même
              direction pour accompagner chaque projet, de sa première idée jusqu'à sa diffusion.
            </p>
          </Reveal>
          <Reveal delay={0.26}>
            <p className="display mt-12 max-w-2xl text-[clamp(1.5rem,3vw,2.6rem)] text-primary">
              {company.signature}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
