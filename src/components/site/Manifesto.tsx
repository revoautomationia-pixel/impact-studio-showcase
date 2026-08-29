import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { Reveal } from "./Reveal";

export function Manifesto() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], reduce ? [1, 1] : [0.94, 1.06]);

  return (
    <section className="grain section-pad bg-ink">
      <div className="mx-auto max-w-[1600px]">
        <Reveal>
          <p className="eyebrow">Our vision</p>
        </Reveal>

        <div className="mt-10 grid gap-14 lg:grid-cols-12">
          <Reveal delay={0.06} className="lg:col-span-6">
            <h2 className="display text-[clamp(2.4rem,6vw,5rem)]">
              Une belle vidéo
              <br />
              ne suffit plus.
            </h2>
          </Reveal>

          <div className="space-y-6 lg:col-span-6 lg:pt-3">
            <Reveal delay={0.12}>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Dans un environnement saturé de contenus, être vu est devenu difficile. Être retenu
                l'est encore plus.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="leading-relaxed text-muted-foreground">
                Chez Impact Studio Production, nous ne produisons pas simplement des images. Nous
                transformons les messages, les savoir-faire et les histoires en contenus capables de
                capter l'attention, de provoquer une émotion et de laisser une empreinte.
              </p>
            </Reveal>
          </div>
        </div>

        <div ref={ref} className="mt-32 md:mt-56">
          <motion.blockquote style={{ scale }} className="origin-left">
            <p className="display text-[clamp(2.6rem,9vw,9rem)]">
              Une vidéo peut être belle
              <br />
              et être oubliée.
              <br />
              <span className="text-primary">Nous voulons qu'elle reste.</span>
            </p>
          </motion.blockquote>
        </div>
      </div>
    </section>
  );
}
