# Effet scroll horizontal sur la section Réalisations

Transformer la grille actuelle de la section `#realisations` en une galerie qui défile horizontalement pendant que l'utilisateur scroll verticalement (scroll-driven horizontal gallery).

## Objectif

- La section s'épingle (pin) à l'écran pendant le scroll vertical.
- Les cartes de projets glissent de droite à gauche proportionnellement à la progression du scroll.
- L'effet reste fluide et respecte `prefers-reduced-motion`.
- Sur mobile, conserver un défilement vertical natif (la galerie horizontale par scroll vertical n'est pas adaptée au tactile).

## Approche technique

Utiliser `motion/react` déjà installé :

- `useScroll` sur un conteneur de référence pour obtenir `scrollXProgress`.
- `useTransform` pour convertir la progression en translation `translateX`.
- Un conteneur interne très large qui contient toutes les cartes sur une seule ligne.
- La section a une hauteur augmentée (par exemple `300vh`) pour créer la distance de scroll nécessaire.
- Un wrapper sticky reste centré verticalement pendant le défilement.

## Étapes d'implémentation

1. **Refactor `src/components/site/Portfolio.tsx`**
   - Remplacer la grille CSS actuelle par un conteneur horizontal.
   - Ajouter une `ref` sur la section pour `useScroll({ target: ref, offset: ["start start", "end end"] })`.
   - Calculer `x = useTransform(progress, [0, 1], ["0%", "-75%"])` (valeur à ajuster selon la largeur totale).
   - Appliquer `x` au conteneur interne des cartes via `motion.div`.

2. **Adapter les cartes**
   - Chaque carte occupe une largeur fixe (par exemple `60vw` desktop, `85vw` mobile si horizontal natif).
   - Conserver les proportions d'image `aspect-[16/9]` ou `aspect-4/3`.
   - Garder le hover scale et le badge "View".

3. **Responsive**
   - Desktop (`md:` et plus) : galerie horizontale pilotée par le scroll vertical.
   - Mobile : garder le défilement vertical natif avec la grille existante, ou permettre un swipe horizontal natif.

4. **Accessibilité**
   - Si l'utilisateur a activé `prefers-reduced-motion`, désactiver le pin et afficher la grille verticale standard.
   - Conserver les labels ARIA et l'ouverture du modal au clic/clavier.

5. **Vérification**
   - Tester que le modal s'ouvre toujours correctement.
   - Vérifier que les images lazy-loadées ne gênent pas le rendu horizontal.
   - Contrôler le build et les performances (pas de recalculs excessifs).

## Fichiers concernés

- `src/components/site/Portfolio.tsx`
- `src/styles.css` (si besoin d'ajuster les utilitaires de section)
