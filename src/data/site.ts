import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";
import work5 from "@/assets/work-5.jpg";
import work6 from "@/assets/work-6.jpg";

/** ------------------------------------------------------------------
 *  Contenus éditoriaux — modifiables sans toucher aux composants.
 *  ------------------------------------------------------------------ */

export const company = {
  name: "Impact Studio Production",
  contactName: "Antoine STAMATI",
  address: "221 Rue Pétrarque",
  city: "Jonquerettes",
  phone: "07 83 14 65 94",
  phoneHref: "tel:+33783146594",
  email: "antoine@impactstudio-prod.com",
  website: "impactstudio-prod.com",
  hours: "Lundi au vendredi — 8h00 à 18h00",
  signature: "De la création à la diffusion, nous créons de l'impact.",
  mapsQuery: "221 Rue Pétrarque, 84450 Jonquerettes",
};

export const navLinks = [
  { label: "Réalisations", href: "#realisations" },
  { label: "Services", href: "#services" },
  { label: "Studio", href: "#studio" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export type Project = {
  id: string;
  client: string;
  title: string;
  category: string;
  year: string;
  excerpt: string;
  description: string;
  mission: string;
  services: string[];
  image: string;
  /** Optionnel : URL d'une vidéo (mp4/webm) pour la preview au survol et le modal. */
  video?: string;
  span: "wide" | "tall" | "normal";
};

/** PLACEHOLDER — projets de démonstration. Remplacer par les vraies réalisations. */
export const projects: Project[] = [
  {
    id: "broadcast-arena",
    client: "Client à venir",
    title: "Captation live multicaméras",
    category: "Broadcast",
    year: "2025",
    excerpt: "Régie complète et réalisation en direct d'un événement sportif.",
    description:
      "Dispositif multicaméras, régie vidéo et réalisation en direct pour une diffusion sans temps mort. Habillage, ralentis et intégration des flux graphiques en temps réel.",
    mission: "Captation, réalisation live et diffusion.",
    services: ["Captation multicaméras", "Régie vidéo", "Réalisation live", "Streaming"],
    image: work1,
    span: "wide",
  },
  {
    id: "film-savoir-faire",
    client: "Client à venir",
    title: "Film de savoir-faire",
    category: "Film de marque",
    year: "2025",
    excerpt: "Un geste, une matière, une histoire racontée à hauteur de main.",
    description:
      "Un film court centré sur le geste et la matière. Direction artistique sobre, lumière travaillée et montage rythmé pour transmettre une expertise sans discours.",
    mission: "Concept, réalisation, post-production.",
    services: ["Concept créatif", "Réalisation", "Étalonnage", "Sound design"],
    image: work2,
    span: "normal",
  },
  {
    id: "campagne-produit",
    client: "Client à venir",
    title: "Campagne produit",
    category: "Publicité",
    year: "2025",
    excerpt: "Une campagne pensée pour arrêter le scroll.",
    description:
      "Film publicitaire et déclinaisons sociales verticales. Lumière graphique, motion design et étalonnage pour une identité visuelle immédiatement reconnaissable.",
    mission: "Création, tournage studio, déclinaisons multi-formats.",
    services: ["Publicité", "Motion Design", "Étalonnage", "Social Content"],
    image: work3,
    span: "normal",
  },
  {
    id: "evenement-corporate",
    client: "Client à venir",
    title: "Aftermovie d'événement",
    category: "Événement",
    year: "2025",
    excerpt: "Faire revivre une soirée à celles et ceux qui n'y étaient pas.",
    description:
      "Captation de l'événement puis montage narratif rythmé. Un format long pour l'archive, des formats courts pour les réseaux.",
    mission: "Captation événementielle et montage.",
    services: ["Captation", "Montage", "Sound design", "Formats sociaux"],
    image: work4,
    span: "wide",
  },
  {
    id: "vfx-3d",
    client: "Client à venir",
    title: "Création visuelle 3D",
    category: "VFX / IA",
    year: "2025",
    excerpt: "Des images impossibles à tourner, fabriquées de zéro.",
    description:
      "Design 3D, simulation et compositing. L'intelligence artificielle est utilisée en support de production, uniquement là où elle sert l'idée.",
    mission: "Direction artistique, 3D, compositing.",
    services: ["3D", "VFX", "Intelligence artificielle", "Compositing"],
    image: work5,
    span: "normal",
  },
  {
    id: "interview-marque-employeur",
    client: "Client à venir",
    title: "Série d'interviews",
    category: "Social Content",
    year: "2025",
    excerpt: "La parole interne, filmée comme un vrai film.",
    description:
      "Dispositif d'interviews en studio, direction des intervenants et montage en série. Une base de contenus déclinable toute l'année.",
    mission: "Dispositif studio, tournage, montage sérialisé.",
    services: ["Interview", "Marque employeur", "Montage", "Communication interne"],
    image: work6,
    span: "normal",
  },
];

export type Service = {
  number: string;
  title: string;
  hook: string;
  text: string;
  skills: string[];
  image: string;
};

export const services: Service[] = [
  {
    number: "01",
    title: "Vidéo Impact",
    hook: "Pour les marques qui veulent sortir du cadre.",
    text: "Concepts créatifs, campagnes, contenus publicitaires et sociaux, storytelling, VFX, 3D et intelligence artificielle lorsque ces technologies apportent réellement quelque chose au projet.",
    skills: [
      "Concept créatif",
      "Publicité",
      "Film de marque",
      "Social Content",
      "Storytelling",
      "VFX",
      "Motion Design",
      "3D",
      "Intelligence artificielle",
    ],
    image: work3,
  },
  {
    number: "02",
    title: "Vidéo d'entreprise",
    hook: "Raconter votre entreprise sans faire une vidéo corporate de plus.",
    text: "Films de marque, interviews, témoignages, marque employeur, présentation de savoir-faire, produits et contenus internes conçus avec une véritable direction créative.",
    skills: [
      "Film corporate",
      "Interview",
      "Témoignage",
      "Marque employeur",
      "Film métier",
      "Présentation produit",
      "Communication interne",
    ],
    image: work6,
  },
  {
    number: "03",
    title: "Broadcast & Live",
    hook: "Faire vivre votre événement bien au-delà du lieu où il se déroule.",
    text: "Captation multicaméras, réalisation en direct, régie, streaming et diffusion d'événements sportifs, professionnels ou institutionnels.",
    skills: [
      "Captation multicaméras",
      "Réalisation live",
      "Régie vidéo",
      "Streaming",
      "Diffusion",
      "Événement sportif",
      "Événement professionnel",
    ],
    image: work1,
  },
];

export const pillars = [
  {
    number: "01",
    title: "Créativité",
    text: "Une approche éloignée des codes traditionnels de la vidéo corporate.",
  },
  {
    number: "02",
    title: "Technologie",
    text: "VFX, 3D et intelligence artificielle intégrés lorsqu'ils renforcent véritablement l'idée.",
  },
  {
    number: "03",
    title: "Broadcast",
    text: "Une expertise multicaméras, live, streaming et diffusion construite au fil de plusieurs années d'expérience.",
  },
  {
    number: "04",
    title: "Proximité",
    text: "Un accompagnement humain et direct, du premier brief jusqu'à la diffusion.",
  },
];

export const processSteps = [
  {
    number: "01",
    title: "On écoute",
    text: "Objectifs, audience, message, contraintes, formats et diffusion.",
  },
  {
    number: "02",
    title: "On imagine",
    text: "Concept, storytelling, direction artistique, moodboard et scénario.",
  },
  {
    number: "03",
    title: "On produit",
    text: "Préparation, tournage, captation, réalisation et coordination des équipes techniques.",
  },
  {
    number: "04",
    title: "On donne de l'impact",
    text: "Montage, sound design, étalonnage, motion design, VFX, 3D et IA.",
  },
  {
    number: "05",
    title: "On diffuse",
    text: "Exports, adaptations web et réseaux sociaux, Broadcast, streaming ou diffusion live.",
  },
];

/** PLACEHOLDER — remplacer par les vrais logos clients (ou par des témoignages). */
export const clientPlaceholders = [
  "Logo client 01",
  "Logo client 02",
  "Logo client 03",
  "Logo client 04",
  "Logo client 05",
  "Logo client 06",
];

export const faqs = [
  {
    q: "Quel budget prévoir pour une production vidéo ?",
    a: "Chaque projet est différent. Le budget dépend notamment du concept, du nombre de jours de tournage, des équipes mobilisées et du niveau de post-production. Parlez-nous de votre projet et nous établirons une proposition adaptée.",
  },
  {
    q: "Pouvez-vous gérer un projet de A à Z ?",
    a: "Oui. Impact Studio Production peut intervenir dès la réflexion créative et prendre en charge la préproduction, le tournage, la post-production et la livraison des différents formats.",
  },
  {
    q: "Réalisez-vous des captations et diffusions en direct ?",
    a: "Oui. Nous réalisons des captations multicaméras, réalisations live, streaming et diffusions d'événements professionnels ou sportifs.",
  },
  {
    q: "Utilisez-vous l'intelligence artificielle ?",
    a: "Oui, lorsqu'elle apporte une réelle valeur créative ou technique au projet. L'IA est un outil supplémentaire au service de l'idée, et non une finalité.",
  },
  {
    q: "Où intervenez-vous ?",
    a: "Impact Studio Production est basé à Jonquerettes dans le Vaucluse et intervient selon les besoins des productions et des événements.",
  },
];

/** PLACEHOLDER — URLs réseaux sociaux non fournies. */
export const socials = [
  { label: "Instagram", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Vimeo", href: "#" },
];
