# Générer la connaissance projet à T=0

## Objectif

Créer la base de connaissance persistante du projet (mémoire interne) à partir des fonctionnalités déjà implémentées, afin que toutes les prochaines interventions respectent automatiquement l'existant.

## Contenu à enregistrer

### 1. Index mémoire (règles Core)
- Projet : site vitrine one-page premium pour Impact Studio Production (agence audiovisuelle française)
- Design : thème sombre cinématographique, inspiré du niveau de finition de node42.fr (sans copie)
- Interdictions : ne pas copier design/textes de node42.fr
- Langue du site : français (fr-FR)

### 2. Mémoire design
- Direction artistique sombre et cinématographique
- Tokens sémantiques dans `src/styles.css` — jamais de couleurs hardcodées
- Logo officiel : caméléon sur objectif caméra (header, footer, favicon)
- Correction appliquée : `pb-[0.1em]` pour éviter le clipping des titres

### 3. Mémoire fonctionnalités
- Hero : poster + vidéo background optionnelle (constantes `HERO_VIDEO_WEBM` / `HERO_VIDEO_MP4` dans `Hero.tsx`, fichiers dans `public/`), autoplay/muted/loop
- Portfolio `#realisations` : desktop = galerie horizontale pilotée par scroll vertical (section ~320vh, sticky, `useScroll`/`useTransform` de motion/react, offset final -55%) ; mobile = grille verticale native ; `prefers-reduced-motion` respecté
- Modal projet immersive, accessible (ARIA, clavier)
- Sections : manifeste, services, différenciation, process, studio, clients, FAQ, contact
- Formulaire contact : validation Zod, honeypot anti-spam, consentement RGPD, Google Maps lazy-loaded
- SEO : meta/OG/Twitter/canonical par route, JSON-LD `ProfessionalService` + `FAQPage`
- Pages légales : `mentions-legales.tsx`, `politique-de-confidentialite.tsx` avec placeholders
- Stack : TanStack Start + Tailwind v4 + motion/react, Zod

## Résultat

Chaque future session pourra appliquer ces règles automatiquement sans re-découvrir l'existant.
