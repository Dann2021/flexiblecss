import React from "react";
import Col from "../../composants/ui/Col";
import { Bloc, Bouton } from "../../composants";
import Tableau from "../../utilitaire/Tableau";



const data = [
  { id: 1, classe: "aff-[prop]", style: "display : [prop]" },
  { id: 2, classe: "aff-block", style: "display : block" },
  { id: 3, classe: "aff-inline", style: "display : inline" },
  { id: 4, classe: "aff-inline-block", style: "display : inline-flex" },
  { id: 5, classe: "aff-flex", style: "display : flex" },
  { id: 6, classe: "aff-inline-flex", style: "display : inline-flex" },
  { id: 7, classe: "aff-grid", style: "display : grid" },
  { id: 8, classe: "aff-inline-grid", style: "display : inline-grid" },
  { id: 9, classe: "aff-none", style: "display : none" },
];

export default function DisplayPage() {
  const classe = `aff-[propriete]`;

  
  return (
    <>
      <Col className={"gap-2"}>
        <h1 className="texte-5 texte-couleur-bleu-ciel fira">Display</h1>
        <Bloc type={"myn"} nombre={11}>
          <p className="texte-couleur-gris">
            Cette classe permet de determiner le mode d'affichage d'un element
            et dans{" "}
            <span className="texte-couleur-bleu-ciel te-noir">
              Flexible CSS
            </span>{" "}
            cette classe se nomme{" "}
            <span className="te-noir texte-couleur-bleu-ciel fira">
              {classe}
            </span>
          </p>
        </Bloc>
        <Tableau titre1={"classes"} titre2={"styles"} data={data} />

        <p className="texte-3">Exemple</p>
        <h3 className="mh-2 ls-2">
          <span className="fira texte-couleur-bleu-ciel">`aff-block`</span> et{" "}
          <span className="fira texte-couleur-bleu-ciel">`aff-inline`</span>
        </h3>
        <Bloc type={"myn"} nombre={11}>
          <p className="texte-couleur-gris">
            Ces classes permettent de contrôler le comportement d'affichage des
            éléments HTML sur la page. Elles déterminent comment un élément se
            positionne par rapport aux autres et comment il gère sa taille.
          </p>
        </Bloc>

      </Col>
     


    </>
  );
}

const CardTexte = ({ children, className = "" }) => {
  return (
    <Bloc
      type={"myn"}
      nombre={11}
      className={`mh-5 p-2 bord-3 bord-dashed ronde bord-gris-claire ${className}`}
    >
      {children}
    </Bloc>
  );
};

