import {
    Monitor,
    Package2Icon, X
} from "lucide-react";

import {
    SiHtml5,
    SiNextdotjs,
    SiReact,
    SiSass,
    SiUikit,
    SiVite,
} from "react-icons/si";

import {
    Archive,
    File,
    Share,
} from "lucide-react";




export const dropdown = [
  { id: 1, label: "Exporter en csv", icone: <File size={16} />, className: "" },
  { id: 2, label: "Partager", icone: <Share size={16} />, className: "" },
  { id: 3, label: "Archiver", icone: <Archive size={16} />, className: "" },
  {
    id: 4,
    label: "Supprimer",
    icone: <X size={16} />,
    className: "couleur-rouge-vif te-noir",
  },
];

export const iconeCard = [
  { id: 1, label: "html", icone: SiHtml5, couleur: "#E34F26" },
  { id: 2, label: "next js", icone: SiNextdotjs, couleur: "#333" },
  { id: 3, label: "react js", icone: SiReact, couleur: "#61DAFB" },
  { id: 4, label: "vite", icone: SiVite, couleur: "#646CFF" },
  { id: 5, label: "sass", icone: SiSass, couleur: "#CC6699" },
];

export const iconeSection = [
  {id: 1, label: "ui kit", icone: SiUikit},
  {id: 2, label: "composants", icone: Package2Icon},
  {id: 3, label: "supports", icone: Monitor},
]