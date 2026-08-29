import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Reveal } from "./Reveal";
import { faqs } from "@/data/site";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section-pad bg-surface">
      <div className="mx-auto grid max-w-[1600px] gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <h2 className="display text-[clamp(2rem,4.5vw,4rem)]">Vous avez des questions ?</h2>
        </Reveal>

        <div className="lg:col-span-7">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 0.04}>
                <div className="border-t border-border last:border-b">
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="flex w-full items-start justify-between gap-6 py-6 text-left"
                    >
                      <span className="text-base font-medium md:text-lg">{f.q}</span>
                      <span
                        aria-hidden
                        className={`mt-1 shrink-0 text-primary transition-transform duration-300 ${
                          isOpen ? "rotate-45" : ""
                        }`}
                      >
                        +
                      </span>
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-2xl pb-8 leading-relaxed text-muted-foreground">
                          {f.a}
                        </p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
