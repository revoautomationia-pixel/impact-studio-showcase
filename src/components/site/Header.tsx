import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import logoAsset from "@/assets/logo.webp.asset.json";
import { navLinks } from "@/data/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-border bg-background/70 backdrop-blur-xl"
            : "border-b border-transparent"
        }`}
      >
        <div className="mx-auto grid max-w-[1600px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 md:px-10 lg:grid-cols-[auto_1fr_auto]">
          <a href="#top" className="flex min-w-0 items-center" aria-label="Impact Studio Production — accueil">
            <img
              src={logoAsset.url}
              alt="Impact Studio Production"
              width={344}
              height={230}
              className="h-9 w-auto object-contain md:h-11"
            />
          </a>

          <nav className="hidden justify-center gap-9 lg:flex" aria-label="Navigation principale">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-3">
            <a
              href="#contact"
              className="hidden rounded-full border border-primary/50 px-5 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground md:inline-flex"
            >
              Parler de votre projet ↗
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Ouvrir le menu"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border lg:hidden"
            >
              <span className="sr-only">Menu</span>
              <span aria-hidden className="flex flex-col gap-1.5">
                <span className="block h-px w-5 bg-foreground" />
                <span className="block h-px w-5 bg-foreground" />
              </span>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-60 flex flex-col bg-ink px-5 py-4 lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
          >
            <div className="flex items-center justify-between">
              <img
                src={logoAsset.url}
                alt="Impact Studio Production"
                width={344}
                height={230}
                className="h-10 w-auto object-contain"
              />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Fermer le menu"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-lg"
              >
                ✕
              </button>
            </div>

            <nav className="mt-16 flex flex-col gap-2" aria-label="Navigation mobile">
              {navLinks.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 * i + 0.1, duration: 0.5 }}
                  className="display border-b border-border py-4 text-4xl"
                >
                  {l.label}
                </motion.a>
              ))}
            </nav>

            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-auto inline-flex items-center justify-center rounded-full bg-primary px-6 py-4 text-sm font-semibold text-primary-foreground"
            >
              Parler de votre projet ↗
            </a>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
