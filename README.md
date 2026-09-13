# Impact Studio Site

# PROJET — IMPACT STUDIO PRODUCTION

Crée un site vitrine **one-page premium, cinématographique, moderne et immersif** pour une agence de production audiovisuelle française nommée **Impact Studio Production**.

Le site doit s’inspirer de l’expérience visuelle, du rythme, des animations et du niveau de finition de :

* https://www.node42.fr

IMPORTANT : ne copie ni le design, ni les textes, ni les composants de ces sites. Utilise-les uniquement comme références de niveau de qualité, de rythme, de minimalisme et d’immersion.

---

# 1. OBJECTIF DU SITE

Le site doit avoir trois objectifs principaux :

1. Présenter clairement les services d’Impact Studio Production.
2. Mettre très fortement en avant les réalisations et le portfolio.
3. Générer des prises de contact et des demandes de devis.

Le visiteur doit comprendre en moins de 5 secondes qu’Impact Studio Production produit des contenus audiovisuels haut de gamme, créatifs et techniquement maîtrisés.

Le site ne doit surtout pas ressembler à un template classique d’agence digitale.

Il doit donner l’impression d’entrer dans un studio de production.

---

# 2. POSITIONNEMENT DE MARQUE

Impact Studio Production est une agence de production audiovisuelle spécialisée dans la création de contenus qui ne passent pas inaperçus.

L’agence accompagne :

* entreprises
* marques
* événements
* organisations

Elle associe :

* production audiovisuelle
* storytelling
* réalisation
* effets visuels
* 3D
* intelligence artificielle
* captation multicaméras
* réalisation live
* streaming
* diffusion Broadcast

L’expertise Broadcast est issue de plusieurs années d’expérience avec Murphy Production.

Les trois piliers de la marque sont :

**CRÉATIVITÉ — ÉMOTION — MAÎTRISE TECHNIQUE**

Le positionnement doit s’éloigner des codes traditionnels de la vidéo corporate.

Idée centrale de la marque :

> Une vidéo peut être belle et être oubliée.
> Impact Studio Production veut qu’elle reste.

Signature :

**De la création à la diffusion, nous créons de l’impact.**

---

# 3. DIRECTION ARTISTIQUE

Je veux une direction artistique très premium et cinématographique.

## Ambiance

* dark / noir dominant
* très grandes images
* vidéos plein écran
* typographie éditoriale très forte
* beaucoup d’espace
* contrastes importants
* interface minimaliste
* animations fluides
* transitions premium
* sensation de studio créatif / cinéma / production

Éviter :

* les grosses cards SaaS classiques
* les gradients violets génériques
* les illustrations corporate
* les icônes inutiles
* les effets futuristes cheap
* les composants ressemblant à un template
* trop de bordures ou de boîtes

La vidéo et la typographie doivent être les éléments graphiques principaux.

---

# 4. CHARTE GRAPHIQUE

Utiliser en priorité les couleurs présentes dans le logo et la charte graphique d’Impact Studio Production.

LOGO — ASSET FOURNI

Un fichier contenant le logo officiel d’Impact Studio Production sera joint directement à ce prompt dans Lovable.

nom du fichier :
"logo-impact-studio-production.webp"

IMPORTANT :

Utilise obligatoirement le logo fourni.
Ne recrée pas le logo.
Ne génère pas un nouveau logo.
Ne modifie pas sa typographie, son symbole ou ses proportions.
Ne remplace pas le logo par du texte.
Identifie automatiquement le fichier image joint correspondant au logo et importe-le dans les assets du projet.

Le logo doit être utilisé notamment :

Header

Afficher le logo officiel en haut à gauche du header.

Le logo doit :

être parfaitement lisible ;
conserver son ratio original ;
utiliser object-fit: contain ;
ne jamais être déformé ;
être correctement dimensionné sur desktop et mobile ;
rester visible lorsque le header devient sticky.
Menu mobile

Afficher également le logo officiel dans le menu mobile plein écran.

Footer

Réutiliser le même logo officiel dans le footer.

Favicon / identité

Si le fichier fourni contient un symbole exploitable séparément, ne pas l'extraire ou le modifier automatiquement sans certitude.

Prévoir simplement un emplacement pour un favicon dédié si aucun favicon n'est fourni.

Implémentation

Ne référence pas un nom de fichier inventé.

Utilise directement le fichier logo réellement joint au projet Lovable et son chemin d'asset généré lors de l'import.

Exemple de comportement attendu :

<img
  src={logoAsset}
  alt="Impact Studio Production"
  className="h-auto w-auto object-contain"
/>

Adapter les dimensions via CSS / Tailwind sans modifier le ratio de l'image.

Le logo fourni constitue la référence visuelle officielle de la marque et doit être intégré dès la première version générée du site.
`logo-impact-studio-production.webp`

Le logo doit rester parfaitement lisible sur fond sombre.

Si certaines couleurs exactes ne sont pas disponibles, partir sur :

* noir profond / anthracite
* blanc cassé
* couleur d’accent issue du logo

Ne pas inventer plusieurs couleurs secondaires.

---

# 5. TYPOGRAPHIE

Utiliser une combinaison de polices premium modernes.

Pour les titres :

* très grande taille
* graisse forte ou medium
* tracking maîtrisé
* look éditorial / cinéma / studio

Pour le texte :

* sans-serif moderne
* excellente lisibilité
* paragraphes relativement courts

Créer une vraie hiérarchie typographique.

Les H1 peuvent atteindre environ 80–120px sur desktop selon viewport.

Sur mobile, garder une excellente lisibilité et éviter les retours à la ligne maladroits.

---

# 6. NAVIGATION

Créer un header minimaliste, transparent au départ, puis légèrement opaque ou blur au scroll.

Logo à gauche.

Navigation :

* Réalisations
* Services
* Studio
* Process
* Contact

CTA à droite :

**Parler de votre projet ↗**

Le header doit devenir sticky au scroll.

Ajouter un menu mobile élégant en plein écran.

Tous les liens doivent faire un smooth-scroll vers les sections correspondantes.

---

# 7. SECTION HERO

Créer un hero spectaculaire en plein écran.

Hauteur :

`100vh`

Prévoir comme arrière-plan :

* un showreel vidéo plein écran
* ou, tant que la vraie vidéo n’est pas disponible, un emplacement clairement prévu pour une vidéo hero

Ajouter un overlay sombre léger pour garantir la lisibilité.

Ne jamais lancer automatiquement le son.

Prévoir éventuellement un petit bouton :

**Activer le son**

Contenu principal :

### H1

**Des images qu’on regarde.
Des histoires qu’on retient.**

Utiliser un effet d’apparition progressif très propre.

Sous-titre :

**Impact Studio Production imagine et produit des contenus audiovisuels créatifs, du concept à la diffusion : films, contenus de marque, effets visuels, IA, captation multicaméras et live.**

CTA principal :

**Voir nos réalisations ↓**

CTA secondaire :

**Parler de votre projet ↗**

Ajouter en bas du hero une ligne horizontale très discrète :

`PRODUCTION AUDIOVISUELLE — STORYTELLING — VFX & 3D — IA — BROADCAST — LIVE`

Possibilité de la faire défiler très lentement comme un ticker premium.

---

# 8. SECTION RÉALISATIONS

Cette section doit arriver IMMÉDIATEMENT après le hero.

ID :

`realisations`

Sur-titre :

`SELECTED WORK`

Titre :

**Quelques projets.
Beaucoup d’impact.**

Texte :

**Films de marque, contenus publicitaires, événements, créations visuelles et productions live. Découvrez une sélection de projets conçus pour être vus — et surtout retenus.**

Créer une grille portfolio premium.

Prévoir 6 projets en données mock facilement modifiables.

Chaque projet possède :

* grande image ou vidéo
* client
* titre du projet
* catégorie
* année
* courte description

Catégories possibles :

* Film de marque
* Publicité
* Social Content
* Événement
* Broadcast
* VFX / IA

Ne pas utiliser de petites cards identiques.

Créer plutôt une grille éditoriale asymétrique avec certains projets occupant davantage d’espace.

Au hover desktop :

* légère animation de scale
* preview vidéo si disponible
* apparition du nom du projet
* curseur custom possible : `VIEW`

Au clic :

ouvrir un modal ou une vue projet immersive avec :

* vidéo
* description
* client
* mission
* prestations
* bouton fermer

Le portfolio doit être très facile à alimenter ensuite.

Créer les données des projets dans une structure séparée facilement éditable.

---

# 9. SECTION MANIFESTE

Fond noir ou très sombre.

Beaucoup d’espace vertical.

Créer un reveal du texte lié au scroll.

Sur-titre :

`OUR VISION`

Titre :

**Une belle vidéo
ne suffit plus.**

Texte :

**Dans un environnement saturé de contenus, être vu est devenu difficile. Être retenu l’est encore plus.**

**Chez Impact Studio Production, nous ne produisons pas simplement des images. Nous transformons les messages, les savoir-faire et les histoires en contenus capables de capter l’attention, de provoquer une émotion et de laisser une empreinte.**

Créer ensuite une phrase beaucoup plus grande, occupant presque tout l’écran :

**Une vidéo peut être belle et être oubliée.
Nous voulons qu’elle reste.**

Cette phrase doit devenir un moment visuel fort du site.

---

# 10. SECTION SERVICES

ID :

`services`

Sur-titre :

`WHAT WE DO`

Titre :

**De l’idée à la diffusion.**

Créer trois services principaux.

Ne pas utiliser trois petites cards SaaS.

Faire plutôt trois grandes sections horizontales ou verticales, avec images/vidéos qui changent au hover ou au scroll.

---

## SERVICE 01

Numéro :

`01`

Titre :

**Vidéo Impact**

Accroche :

**Pour les marques qui veulent sortir du cadre.**

Texte :

**Concepts créatifs, campagnes, contenus publicitaires et sociaux, storytelling, VFX, 3D et intelligence artificielle lorsque ces technologies apportent réellement quelque chose au projet.**

Compétences :

* Concept créatif
* Publicité
* Film de marque
* Social Content
* Storytelling
* VFX
* Motion Design
* 3D
* Intelligence artificielle

---

## SERVICE 02

Numéro :

`02`

Titre :

**Vidéo d’entreprise**

Accroche :

**Raconter votre entreprise sans faire une vidéo corporate de plus.**

Texte :

**Films de marque, interviews, témoignages, marque employeur, présentation de savoir-faire, produits et contenus internes conçus avec une véritable direction créative.**

Compétences :

* Film corporate
* Interview
* Témoignage
* Marque employeur
* Film métier
* Présentation produit
* Communication interne

---

## SERVICE 03

Numéro :

`03`

Titre :

**Broadcast & Live**

Accroche :

**Faire vivre votre événement bien au-delà du lieu où il se déroule.**

Texte :

**Captation multicaméras, réalisation en direct, régie, streaming et diffusion d’événements sportifs, professionnels ou institutionnels.**

Compétences :

* Captation multicaméras
* Réalisation live
* Régie vidéo
* Streaming
* Diffusion
* Événement sportif
* Événement professionnel

---

# 11. SECTION DIFFÉRENCIATION

Créer une section très graphique autour des quatre piliers.

Sur-titre :

`WHY IMPACT`

Titre :

**Créatif dans l’idée.
Rigoureux dans l’exécution.**

Afficher quatre grands éléments.

### 01 — CRÉATIVITÉ

**Une approche éloignée des codes traditionnels de la vidéo corporate.**

### 02 — TECHNOLOGIE

**VFX, 3D et intelligence artificielle intégrés lorsqu’ils renforcent véritablement l’idée.**

### 03 — BROADCAST

**Une expertise multicaméras, live, streaming et diffusion construite au fil de plusieurs années d’expérience.**

### 04 — PROXIMITÉ

**Un accompagnement humain et direct, du premier brief jusqu’à la diffusion.**

Ajouter des animations au scroll mais garder une UX sobre.

---

# 12. SECTION PROCESS

ID :

`process`

Sur-titre :

`OUR PROCESS`

Titre :

**De l’idée
au dernier pixel.**

Créer un process en 5 étapes.

Sur desktop, possibilité d’utiliser une timeline horizontale sticky liée au scroll.

Sur mobile, timeline verticale.

### 01 — ON ÉCOUTE

**Objectifs, audience, message, contraintes, formats et diffusion.**

### 02 — ON IMAGINE

**Concept, storytelling, direction artistique, moodboard et scénario.**

### 03 — ON PRODUIT

**Préparation, tournage, captation, réalisation et coordination des équipes techniques.**

### 04 — ON DONNE DE L’IMPACT

**Montage, sound design, étalonnage, motion design, VFX, 3D et IA.**

### 05 — ON DIFFUSE

**Exports, adaptations web et réseaux sociaux, Broadcast, streaming ou diffusion live.**

---

# 13. SECTION STUDIO

ID :

`studio`

Utiliser une grande photo professionnelle de l’équipe ou d’un tournage.

Créer une composition asymétrique texte/image.

Sur-titre :

`THE STUDIO`

Titre :

**Un nouveau studio.
Une expérience déjà bien réelle.**

Texte :

**Impact Studio Production réunit création audiovisuelle, storytelling et technologies visuelles avec une expertise Broadcast construite au fil de plusieurs années d’expérience avec Murphy Production.**

**Notre ambition : réunir créativité, émotion et maîtrise technique sous une même direction pour accompagner chaque projet, de sa première idée jusqu’à sa diffusion.**

Ajouter la signature :

**De la création à la diffusion, nous créons de l’impact.**

Ne pas afficher « entreprise créée il y a 2 mois ».

Ne pas inventer d’ancienneté, d’effectifs ou de chiffres.

---

# 14. SECTION CLIENTS / PREUVES

Pour le moment, l'entreprise ne possède pas encore d'avis Google.

NE PAS inventer de témoignages.

Créer à la place une section :

Sur-titre :

`TRUST`

Titre :

**Ils nous confient leur image.**

Prévoir une grille de logos clients facilement modifiable.

Utiliser des logos placeholders neutres tant que les vrais logos n’ont pas été ajoutés.

Prévoir dans le code une future possibilité de remplacer cette section par des témoignages clients.

---

# 15. FAQ

Créer une FAQ minimaliste en accordéon.

Titre :

**Vous avez des questions ?**

Questions :

### Quel budget prévoir pour une production vidéo ?

Réponse :

**Chaque projet est différent. Le budget dépend notamment du concept, du nombre de jours de tournage, des équipes mobilisées et du niveau de post-production. Parlez-nous de votre projet et nous établirons une proposition adaptée.**

### Pouvez-vous gérer un projet de A à Z ?

**Oui. Impact Studio Production peut intervenir dès la réflexion créative et prendre en charge la préproduction, le tournage, la post-production et la livraison des différents formats.**

### Réalisez-vous des captations et diffusions en direct ?

**Oui. Nous réalisons des captations multicaméras, réalisations live, streaming et diffusions d’événements professionnels ou sportifs.**

### Utilisez-vous l’intelligence artificielle ?

**Oui, lorsqu’elle apporte une réelle valeur créative ou technique au projet. L’IA est un outil supplémentaire au service de l’idée, et non une finalité.**

### Où intervenez-vous ?

**Impact Studio Production est basé à Jonquerettes dans le Vaucluse et intervient selon les besoins des productions et des événements.**

Ne pas inventer de rayon géographique précis.

---

# 16. CONTACT / CONVERSION

ID :

`contact`

Cette section doit être visuellement très forte et presque aussi importante que le hero.

Sur-titre :

`START A PROJECT`

Titre :

**Vous avez une idée ?
Donnons-lui de l’impact.**

Texte :

**Film de marque, campagne, contenu social, captation ou diffusion live : parlez-nous de votre projet, même s’il n’en est encore qu’au stade de l’idée.**

CTA :

**Démarrer un projet ↗**

Créer un formulaire avec :

* Nom *
* Entreprise
* Email *
* Téléphone
* Type de projet
* Budget indicatif
* Message *
* consentement RGPD

Choix du type de projet :

* Vidéo Impact
* Vidéo d’entreprise
* Broadcast / Live
* Autre

Pour le budget, utiliser des fourchettes sans afficher de tarifs inventés :

* À définir
* Moins de 5 000 €
* 5 000 – 10 000 €
* 10 000 – 20 000 €
* 20 000 € et plus

Le formulaire doit avoir :

* validation front-end
* message de succès
* message d’erreur
* protection anti-spam prévue
* champs accessibles

---

# 17. COORDONNÉES

Afficher :

**Impact Studio Production**

Antoine STAMATI

221 Rue Pétrarque
Jonquerettes

Téléphone :

**07 83 14 65 94**

Email :

**[antoine@impactstudio-prod.com](mailto:antoine@impactstudio-prod.com)**

Horaires :

**Lundi au vendredi
8h00 — 18h00**

Site :

**impactstudio-prod.com**

Créer les liens :

* téléphone avec `tel:`
* email avec `mailto:`

---

# 18. GOOGLE MAPS

Ajouter une carte Google Maps dans la partie contact.

Localisation :

**221 Rue Pétrarque, Jonquerettes**

La carte ne doit pas ralentir le chargement initial.

Utiliser du lazy-loading.

Sur mobile, garder une hauteur raisonnable.

---

# 19. FOOTER

Créer un footer minimaliste.

Logo Impact Studio Production.

Texte :

**De la création à la diffusion, nous créons de l’impact.**

Liens :

* Réalisations
* Services
* Studio
* Contact
* Mentions légales
* Politique de confidentialité

Coordonnées simplifiées.

Ajouter éventuellement les réseaux sociaux avec placeholders :

* Instagram
* LinkedIn
* Vimeo / YouTube

Ne pas inventer les URLs des réseaux sociaux.

Ajouter :

`© Impact Studio Production — Tous droits réservés.`

L’année doit être dynamique.

---

# 20. ANIMATIONS

Les animations doivent donner une sensation premium mais rester fluides.

Utiliser :

* reveal de texte
* fade + translate très léger
* images qui se dévoilent au scroll
* parallaxe subtile
* clip-path / mask pour certaines images
* transitions entre projets
* smooth scrolling
* apparition progressive de la navigation
* micro-interactions sur les CTA

Possibilité d’utiliser Framer Motion.

Éviter :

* animations excessives
* effets de particules
* animations qui ralentissent la navigation
* curseur compliqué sur mobile

Respecter :

`prefers-reduced-motion`

---

# 21. RESPONSIVE

Le site doit être parfaitement responsive.

Tester particulièrement :

* 1920px
* 1440px
* 1280px
* 1024px
* 768px
* 390px
* 375px

Mobile-first pour les adaptations.

Les vidéos doivent être optimisées pour mobile.

Sur mobile :

* réduire les animations
* pas de hover-dependent UX
* navigation full-screen simple
* portfolio facile à parcourir
* formulaire parfaitement utilisable

---

# 22. PERFORMANCE

La performance est très importante malgré l’utilisation intensive de vidéos.

Mettre en place :

* lazy loading
* images WebP / AVIF
* `srcset`
* dimensions d’images explicites
* poster pour les vidéos
* vidéo WebM + MP4 si nécessaire
* chargement différé des vidéos portfolio
* fonts optimisées
* preload uniquement pour les ressources critiques
* code splitting
* pas de grosses librairies inutiles

Objectif :

Core Web Vitals corrects même avec un site très visuel.

Le hero doit afficher immédiatement une image poster avant le chargement vidéo.

---

# 23. SEO

Le site doit être techniquement SEO-friendly.

Créer un seul H1.

Structure Hn cohérente.

Proposition de `<title>` :

**Production audiovisuelle & vidéo | Impact Studio Production**

Meta description :

**Impact Studio Production crée des films, contenus de marque et productions Broadcast à fort impact : vidéo, storytelling, VFX, IA, captation multicaméras et live.**

Prévoir du contenu permettant de cibler naturellement :

* production audiovisuelle Vaucluse
* agence vidéo Vaucluse
* production vidéo Avignon
* captation vidéo Avignon
* captation multicaméras
* streaming événement
* vidéo entreprise
* film corporate
* production Broadcast

Ne pas faire de keyword stuffing.

Ajouter :

* Open Graph
* Twitter cards
* favicon
* canonical
* sitemap
* robots.txt

Ajouter les données structurées pertinentes :

* Organization
* LocalBusiness / ProfessionalService
* FAQPage si approprié

---

# 24. ACCESSIBILITÉ

Respecter les bonnes pratiques WCAG :

* contrastes suffisants
* navigation clavier
* focus visibles
* labels formulaires
* aria-label si nécessaire
* alt text
* boutons correctement identifiés
* vidéos compatibles avec les bonnes pratiques d’accessibilité

Ne pas sacrifier l’accessibilité pour le design.

---

# 25. TECHNOLOGIES

Utilise une stack moderne adaptée à Lovable.

De préférence :

* React
* TypeScript
* Tailwind CSS
* Framer Motion

Créer des composants propres et réutilisables.

Architecture souhaitée :

* Header
* Hero
* Portfolio
* Manifesto
* Services
* Differentiators
* Process
* Studio
* Clients
* FAQ
* Contact
* Footer

Séparer les contenus éditoriaux des composants lorsque cela est pertinent.

Créer les portfolios et services sous forme de données structurées afin de pouvoir les modifier facilement plus tard.

---

# 26. UX

La priorité UX est :

**VISUEL → PREUVE → COMPRÉHENSION → CONFIANCE → CONTACT**

Le parcours doit être :

Hero
↓
Réalisations
↓
Positionnement
↓
Services
↓
Différenciation
↓
Process
↓
Studio
↓
Clients
↓
FAQ
↓
Contact

Ajouter plusieurs CTA vers la section contact au cours de la page sans devenir agressif.

---

# 27. COPYWRITING

Style rédactionnel :

* direct
* premium
* créatif
* phrases courtes
* peu de jargon marketing
* pas de langage corporate générique
* pas de superlatifs inutiles
* pas de « leader »
* pas de « passionnés »
* pas de « solutions innovantes »
* pas de chiffres inventés

Utiliser régulièrement le territoire lexical :

* impact
* regard
* attention
* émotion
* image
* histoire
* création
* diffusion
* mémorisation

Le site doit donner davantage envie de voir les réalisations que de lire de longs paragraphes.

---

# 28. IMPORTANT — NE RIEN INVENTER

Ne jamais inventer :

* des clients
* des témoignages
* des récompenses
* des chiffres
* des années d’ancienneté de l’entreprise
* des collaborateurs
* des tarifs
* des URLs de réseaux sociaux
* des projets déjà réalisés

Quand une information n’est pas disponible, créer un placeholder clairement identifiable dans le code.

---

# 29. RÉSULTAT ATTENDU

Je veux un résultat qui pourrait être présenté comme le site officiel définitif d’un studio audiovisuel premium.

Il doit être :

* spectaculaire dès les premières secondes
* sobre
* élégant
* cinématographique
* rapide
* immersif
* facilement administrable
* parfaitement responsive
* orienté conversion
* techniquement propre

La référence principale en matière de sensation et de niveau de finition est **node42.fr**, sans reproduction directe.

Le visiteur doit quitter le site avec trois idées :

**1. Ils savent créer de belles images.**
**2. Ils maîtrisent techniquement des productions complexes.**
**3. J’ai envie de leur parler de mon projet.**

Commence directement par créer la version complète de la homepage one-page avec tous les composants, contenus, responsive states et animations nécessaires.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/a4d51710-8e8d-4d23-b143-d7a82691b7a6).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
