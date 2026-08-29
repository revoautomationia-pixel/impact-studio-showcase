# Scroll horizontal des réalisations aussi sur mobile

Objectif : la galerie « Selected work » défile horizontalement au scroll vertical sur tous les écrans (mobile inclus), de façon stable, sans espace vide en fin de galerie ni décalage sur des largeurs inhabituelles.

## Ce qui change pour l'utilisateur

- Sur mobile, la grille verticale actuelle est remplacée par la même expérience que sur desktop : la section reste « collée » à l'écran pendant que les projets défilent latéralement.
- Cartes dimensionnées pour le mobile (environ 80% de la largeur d'écran) afin que la carte suivante soit visible et invite au geste.
- La dernière carte s'arrête proprement au bord droit, quelle que soit la taille d'écran.
- Le clic sur une carte ouvre toujours la fiche projet (modal) inchangée ; le hover desktop est conservé.
- Si l'utilisateur a activé « réduire les animations » dans son système, on retombe sur la liste verticale classique.

## Détails techniques

Fichier concerné : `src/components/site/Portfolio.tsx`.

1. Supprimer la double implémentation (grille `md:hidden` + piste `hidden md:block`) et garder une seule piste horizontale, rendue à toutes les tailles.
2. Remplacer la translation en pourcentage (`-55%`) par un calcul en pixels mesuré :
   - refs sur le conteneur sticky et sur la piste ;
   - `ResizeObserver` sur les deux éléments pour recalculer `distance = trackWidth - viewportWidth + padding` à chaque changement de taille ou d'orientation ;
   - `useTransform(scrollYProgress, [0, 1], [0, -distance])`, borné à `Math.max(0, distance)`.
3. Hauteur de section dynamique plutôt que `320vh` figé : `height = 100vh + distance` (via style inline), pour que la fin du scroll horizontal coïncide exactement avec la fin de la section — c'est ce qui rend l'effet stable sur mobile où les largeurs varient beaucoup.
4. Conteneur sticky : `sticky top-0 h-[100svh] overflow-hidden` (utiliser `svh` pour éviter les sauts liés à la barre d'URL mobile) ; le titre de section reste au-dessus de la piste dans le bloc sticky.
5. Tailles de cartes : `w-[80vw]` sur mobile, `w-[42vw] max-w-[620px]` en `md`, `w-[34vw]` en `lg`. Image `aspect-[16/10]` (mobile `aspect-4/3` pour un meilleur rapport).
6. Accessibilité et repli :
   - `useReducedMotion` → rendu en liste verticale (pas de sticky, pas de transform) ;
   - garder `aria-label` sur chaque carte, focus clavier fonctionnel ; la piste reçoit `overflow-x-auto` désactivé pour éviter un double défilement, mais le focus clavier fait scroller la page verticalement grâce au sticky.
7. Vérification : build, puis test Playwright en viewport mobile (390x844) et desktop (1280x800) pour confirmer le déplacement horizontal et l'arrêt propre sur la dernière carte.
