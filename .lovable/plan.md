# Ajouter une vidéo en arrière-plan du hero

Le composant `src/components/site/Hero.tsx` est déjà prévu pour accueillir une vidéo en arrière-plan. Aucune modification structurelle n'est nécessaire.

## Où renseigner la vidéo

En haut du fichier `src/components/site/Hero.tsx`, deux constantes sont vides :

```ts
const HERO_VIDEO_WEBM = "";
const HERO_VIDEO_MP4 = "";
```

Remplir au moins l'une des deux avec l'URL de la vidéo :

```ts
const HERO_VIDEO_WEBM = "/showreel.webm";
const HERO_VIDEO_MP4 = "/showreel.mp4";
```

## Formats recommandés

- **WebM** en premier (plus léger, meilleur pour le web).
- **MP4 H.264** en fallback (compatibilité maximale, notamment Safari / iOS).
- Laisser `HERO_VIDEO_WEBM` vide si tu n'as qu'un MP4.

## Où placer le fichier

- Si la vidéo est hébergée en externe : utiliser l'URL absolue (`https://...`).
- Si elle est dans le projet : la placer dans `public/` (par exemple `public/showreel.mp4`), puis la référencer avec un chemin relatif à la racine (`/showreel.mp4`).

## Comportement existant

- La vidéo se lance automatiquement, en sourdine, en boucle.
- L'image poster (`heroPoster`) reste visible tant que la vidéo n'est pas chargée.
- Un bouton "Activer le son / Couper le son" apparaît automatiquement dès qu'une vidéo est présente.
- Le composant respecte `prefers-reduced-motion` pour les animations texte ; la vidéo reste active.

## Vérification

Après avoir renseigné une URL, recharger la page : la vidéo remplace le poster en arrière-plan du hero.
