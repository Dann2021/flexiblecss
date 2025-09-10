import React, { useState } from "react";
import Col from "../../composants/ui/Col";
import { Bloc, Bouton } from "../../composants";
import Tableau from "../../utilitaire/Tableau";
import Ligne from "../../composants/ui/Ligne";
import Codebloc from "../../utilitaire/Codebloc";

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
/*const html = `
    <div class="aff-flex jc-mil ai-mil gap-3">
        <div className="bloc-2 bg-gris-claire ronde p-2"></div>
        <div className="bloc-2 bg-bleu-lavande ronde p-2"></div>
        <div className="bloc-2 bg-rouge-cerise ronde p-2"></div>
    </div>
`;*/
export default function DisplayPage() {
  const classe = `aff-[propriete]`;
  const [valeur, setValeur] = useState("inline")
  
  return (
    <>
      <Col className={"gap-2"}>
        <h1 className="texte-5 texte-couleur-bleu-ciel">Display</h1>
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

        <p className="texte-2">Exemple</p>
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
        {/* a deverouiller
        <CardTexte>
          <Bloc type={"myn"} nombre={5} className={"mb-3 ta-mil  aff-inline"}>
            <h4>Paragraphe1</h4>
            <p className="taille-pt ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              quae, iste illum eligendi ut iure officiis earum excepturi
              quibusdam inventore minima cum vitae adipisci incidunt laboriosam
              accusamus doloribus id voluptas!
            </p>
          </Bloc>
          <Bloc type={"myn"} nombre={5} className={"aff-block"}>
            <h4>Paragraphe2</h4>
            <p className="taille-pt ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              quae, iste illum eligendi ut iure officiis earum excepturi
              quibusdam inventore minima cum vitae adipisci incidunt laboriosam
              accusamus doloribus id voluptas!
            </p>
          </Bloc>
          <Bloc type={"myn"} nombre={5}>
            <h4>Paragraphe2</h4>
            <p className="taille-pt ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              quae, iste illum eligendi ut iure officiis earum excepturi
              quibusdam inventore minima cum vitae adipisci incidunt laboriosam
              accusamus doloribus id voluptas!
            </p>
          </Bloc>
        </CardTexte>*/}
      </Col>
     

      <div>
        <h1>Test</h1>
        <Ligne className={"jc-mil"}>
          <Bloc type={"myn"} nombre={5}>
            <h1>Bloc</h1>
            <Bouton className={"m-1"} onClick={() => setValeur("inline")}>inline</Bouton>
            <Bouton className={"m-1"} onClick={() => setValeur("flex")}>aff-flex</Bouton>
            <Bouton className={"m-1"} onClick={() => setValeur("block")}>aff-block</Bouton>
            <Bouton className={"m-1"} onClick={() => setValeur("flex")}>inline-flex</Bouton>

          </Bloc>
          <Bloc type={"myn"} nombre={6}>
            <h1>Paragraphe</h1>
            <h3>{valeur}</h3>
            <p className={`aff-${valeur} taille-pt`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi repudiandae sed optio quidem recusandae quis modi est vero officia dolorum, porro perspiciatis debitis explicabo nam dicta deserunt cum ipsum impedit.</p>
          </Bloc>
        </Ligne>
      </div>
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

