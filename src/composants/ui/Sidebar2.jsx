import React, { useRef, useState } from "react";
import {
  BookOpen,
  Component,
  ComponentIcon,
  Package,
  Sidebar,
  X,
} from "lucide-react";
import { CgTemplate } from "react-icons/cg";
import { MdClose } from "react-icons/md";
import Bouton from "./Bouton";

import Lien from "./Lien";
export default function Sidebar2({ onToggle, onSelect }) {
  const sidebarRef = useRef(null);
  // eslint-disable-next-line no-unused-vars
  const [ouvert, setOuvert] = useState(false);

  const ouvrir = () => {
    if (sidebarRef.current) sidebarRef.current.style.width = "50%";
    setOuvert(true);
    onToggle?.(true); // prévenir le parent
  };

  const fermer = () => {
    if (sidebarRef.current) sidebarRef.current.style.width = "0";
    setOuvert(false);
    onToggle?.(false); // prévenir le parent
  };

  // variable pour section Documentation
  const docs = [
    {
      id: 1,
      label: "Composants",
      icone: <Component size={20} />,
      lien: "composant",
    },
    {
      id: 2,
      label: "Templates",
      icone: <CgTemplate size={20} />,
      lien: "templates",
    },
    { id: 3, label: "Ui Kit", icone: <Package size={20} />, lien: "uikit" },
  ];

  // variable pour get_started
  const started = [
    { id: 1, label: "Introduction", icone: null, lien: "intro" },
   // { id: 2, label: "Installation", icone: null, lien: "install" },
    { id: 3, label: "Structure projet", icone: null, lien: "structure" },
  ];

  // variable pour mise en page
  const mpage = [
    { id: 1, label: "aspect-ratio", icone: null, lien: "aspect-ratio" },
    { id: 2, label: "display", icone: null, lien: "display" },
    { id: 3, label: "bloc", icone: null, lien: "bloc" },

  ];

  //console.log("state : ", ouvert);
  return (
    <div className="conteneur">
      {/* Bouton pour ouvrir la sidebar */}
      <span className="ouvrir" onClick={ouvrir}>
        <Sidebar size={20} />
      </span>

      <div
        ref={sidebarRef}
        className="sidebar p-myn-3 fixe haut-13 gauche-0 bg-gris-claire ronde "
        id="maSidebar"
      >
        {/*<h3 onClick={fermer} className="fermer texte-couleur-vert-sauge te-noir">
          &times;
        </h3>*/}

        <X
          size={20}
          className="fermer curseur-pointeur mh-2"
          onClick={fermer}
        />

        <div className="mg-2 aff-flex ai-mil gap-2">
          <BookOpen size={20} />
          <h5>Documentation</h5>
        </div>

        <div className="taille-pt mh-2 texte-couleur-gris px-1 ">
          {docs.map((element) => (
            <Lien
              key={element.id}
              className="gap-2 aff-flex ai-mil"
              onClick={() => onSelect?.(element.lien)}
              chemin={element.lien}
            >
              {" "}
              {element.icone} {element.label}
            </Lien>
          ))}
        </div>

        <h4 className="mg-2 tt-maj texte-couleur-gris my-2">get started</h4>
        <div className="mg-2 taille-pt mh-3 texte-couleur-gris">
          {started.map((element) => (
            <Lien
              key={element.id}
              className="gap-2 aff-flex ai-mil"
              onClick={() => onSelect?.(element.lien)}
              chemin={element.lien}
            >
              {" "}
              {element.label}
            </Lien>
          ))}
        </div>

        <h4 className="mg-2 tt-maj texte-couleur-gris my-2">Mise en page</h4>
        <div className="mg-2 taille-pt mh-3 texte-couleur-gris">
          {mpage.map((element) => (
            <Lien
              key={element.id}
              className="gap-2 aff-flex ai-mil"
              onClick={() => onSelect?.(element.lien)}
              chemin={element.lien}
            >
              {" "}
              {element.label}
            </Lien>
          ))}
        </div>
      </div>
    </div>
  );
}
