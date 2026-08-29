# Effet scroll horizontal sur mobile aussi

Actuellement, la section `#realisations` utilise la galerie horizontale pilotée par le scroll vertical uniquement sur desktop (`md:` et plus). Sur mobile, c'est une grille verticale classique.

## Objectif

Activer le même effet (section épinglée + défilement horizontal pendant le scroll vertical) sur mobile et tablette, avec des réglages adaptés au tactile.

## Changements dans `src/components/site/Portfolio.tsx`

1. **Supprimer la variante mobile verticale** (la grille `md:hidden`).
2. **Étendre la galerie horizontale à tous les écrans** :
   - Section épinglée sur toutes les tailles : remplacer `md:h-[320vh]` par `h-[320vh]`, et le wrapper `md:sticky md:h-screen` par `sticky h-screen`.
   - Supprimer les `hidden md:block` / `md:hidden` qui séparent les deux versions.
3. **Adapter les dimensions mobile** :
   - Cartes : `w-[82vw]` sur mobile (au lieu de `42vw`), `sm:w-[60vw]`, puis `md:w-[42vw] lg:w-[34vw]`.
   - Translation `x` ajustée : utiliser une translation en pixels calculée à partir de la largeur réelle de la piste (`scrollWidth - viewportWidth`) plutôt qu'un pourcentage fixe, afin que la fin de la galerie tombe juste quelle que soit la largeur d'écran. Mesure via `ref` + `resize` listener, avec fallback sur le pourcentage actuel.
   - Hauteur de la section éventuellement réduite sur mobile (`h-[260vh]`) pour un défilement ni trop lent ni trop court.
4. **Titre de section** : rester visible dans le wrapper sticky comme sur desktop.
5. **Accessibilité** : conserver `prefers-reduced-motion` (pas de translation, galerie défilable nativement en horizontal si réduit, ou grille simple), labels ARIA et modal inchangés.

## Vérification

- Test Playwright en viewport mobile (390x844) : scroll vertical → cartes glissent horizontalement, fin de galerie sans espace vide.
- Test desktop inchangé.
- Modal projet toujours fonctionnel.
- Build OK.

## Fichiers concernés

- `src/components/site/Portfolio.tsx`
