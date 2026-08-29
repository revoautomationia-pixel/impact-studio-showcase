import { useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import heroPoster from "@/assets/hero-poster.jpg";

const TICKER =
  "PRODUCTION AUDIOVISUELLE — STORYTELLING — VFX & 3D — IA — BROADCAST — LIVE — ";

/**
 * PLACEHOLDER VIDÉO HERO :
 * déposer le showreel (mp4/webm) et renseigner les URLs ci-dessous.
 * Tant qu'elles sont vides, l'image poster est affichée seule.
 */
const HERO_VIDEO_WEBM = "";
const HERO_VIDEO_MP4 = "";

export function Hero() {
  const reduce = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const hasVideo = Boolean(HERO_VIDEO_MP4 || HERO_VIDEO_WEBM);

  const toggleSound = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  const lines = ["Des images qu'on regarde.", "Des histoires qu'on retient."];

  return (
    <section id="top" className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroPoster}
          alt="Tournage en studio, opérateur derrière une caméra cinéma"
          width={1920}
          height={1080}
          fetchPriority="high"
          className="h-full w-full object-cover"
        />
        {hasVideo ? (
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover"
            poster={heroPoster}
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            aria-label="Showreel Impact Studio Production"
          >
            {HERO_VIDEO_WEBM ? <source src={HERO_VIDEO_WEBM} type="video/webm" /> : null}
            {HERO_VIDEO_MP4 ? <source src={HERO_VIDEO_MP4} type="video/mp4" /> : null}
          </video>
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/40" />
      </div>

      <div className="relative mx-auto w-full max-w-[1600px] px-5 pb-14 pt-36 md:px-10 md:pb-20">
        <h1 className="display text-[clamp(2.7rem,8.4vw,7.5rem)]">
          {lines.map((line, i) => (
            <span key={line} className="block overflow-hidden">
              <motion.span
                className="block"
                initial={reduce ? { opacity: 0 } : { opacity: 0, y: "110%" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.1, delay: 0.15 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
        >
          Impact Studio Production imagine et produit des contenus audiovisuels créatifs, du concept
          à la diffusion : films, contenus de marque, effets visuels, IA, captation multicaméras et
          live.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.65 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <a
            href="#realisations"
            className="inline-flex items-center rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Voir nos réalisations ↓
          </a>
          <a
            href="#contact"
            className="inline-flex items-center rounded-full border border-border px-7 py-4 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            Parler de votre projet ↗
          </a>
          {hasVideo ? (
            <button
              type="button"
              onClick={toggleSound}
              className="inline-flex items-center rounded-full border border-border px-5 py-4 text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
            >
              {muted ? "Activer le son" : "Couper le son"}
            </button>
          ) : null}
        </motion.div>
      </div>

      <div className="relative hairline overflow-hidden py-4">
        <div className="marquee-track flex w-max gap-8 whitespace-nowrap text-[0.68rem] tracking-[0.32em] text-muted-foreground uppercase">
          <span>{TICKER.repeat(3)}</span>
          <span aria-hidden>{TICKER.repeat(3)}</span>
        </div>
      </div>
    </section>
  );
}
