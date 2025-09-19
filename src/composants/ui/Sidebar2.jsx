import { useRef, useState } from "react";
import { BookOpen, Component, Package, Sidebar, X } from "lucide-react";
import { CgTemplate } from "react-icons/cg";
import Lien from "./Lien";

// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import clsx from "../classe";

export default function Sidebar2({ onToggle, onSelect }) {
  // variables de state
  const sidebarRef = useRef(null);
  const [ouvert, setOuvert] = useState(false);
  const [lienActif, setLienActif] = useState(null);

  // fonctions de state
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
    { id: 4, label: "couleurs", icone: null, lien: "couleurs" },
    { id: 5, label: "ligne & col", icone: null, lien: "ligne-col" },
  ];

  const composants = [
    { id: 1, label: "Accordeon", icone: null, lien: "accordeon" },
    { id: 2, label: "Bouton", icone: null, lien: "bouton" },
    { id: 3, label: "Carrousel", icone: null, lien: "carrousel" },
    { id: 4, label: "autre", icone: null, lien: "autre" },
  ];

  const itemVariants = {
    hover: { background: "#f1f3f5" },
    exit: { opacity: 0, scale: 0.7 },
  };

  // #e9ecef,#f1f3f5 (très bien), #dee2e6 (bien), #e6f2ea

  //console.log("state : ", ouvert);
  

  const renduLien = (elements) =>
    elements.map((element) => {
      const lienChoisit = lienActif === element.lien;

      return (
        <motion.div
          key={element.id}
          initial={false}
          whileHover="hover"
          variants={itemVariants}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className={`ronde-1 curseur-pointeur mb-1`}
          style={{ background: lienChoisit ? "#f1f3f5" : "transparent" }}
          onClick={() => {
            setLienActif(element.lien);
            onSelect?.(element.lien);
          }}
        >
          <Lien
            chemin={element.lien}
            className="gap-2 aff-flex ai-mil px-2 py-1"
          >
            {element.icone} {element.label}
          </Lien>
        </motion.div>
      );
    });
  return (
    <div className="conteneur">
      {/* Bouton pour ouvrir la sidebar */}
      <span className="ouvrir" onClick={ouvrir}>
        <Sidebar size={20} />
      </span>

      <div
        ref={sidebarRef}
        className={clsx(
          "sidebar p-myn-3 fixe haut-13 gauche-0",
          ouvert && "ronde",
          ouvert && "bg-gris-claire"
        )}
        id="maSidebar"
      >
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
          {renduLien(docs)}
        </div>

        <h4 className="mg-2 tt-maj texte-couleur-gris my-2">get started</h4>
        <div className="mg-2 taille-pt mh-3 texte-couleur-gris">
          {renduLien(started)}
        </div>

        <h4 className="mg-2 tt-maj texte-couleur-gris my-2">Mise en page</h4>
        <div className="mg-2 taille-pt mh-3 texte-couleur-gris">
          {renduLien(mpage)}
        </div>

        <h4 className={"mg-2 tt-maj texte-couleur-gris my-2"}>composants</h4>
        <div className="mg-2 taille-pt mh-3 texte-couleur-gris">
          {renduLien(composants)}
        </div>
      </div>
    </div>
  );
}
