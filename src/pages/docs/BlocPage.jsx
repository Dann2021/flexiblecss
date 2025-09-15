import React from "react";
import { Bloc, Bouton, Col, Ligne, Table } from "../../composants";
import { ContainerIcon, Smartphone } from "lucide-react";
import Tableau from "../../utilitaire/Tableau";
import { ImPhone } from "react-icons/im";

const data = [
  {
    id: 0,
    classe: ".bloc-<valeur>",
    style: "max-width: [valeur %]",
  },
  {
    id: 1,
    classe: ".bloc-[screen]-1",
    style: "max-width : 8.33%",
  },
  {
    id: 2,
    classe: ".bloc-[screen]-2",
    style: "max-width : 16.67%",
  },
  { id: 3, classe: ".bloc-[screen]-3", style: "max-width : 25%" },
  {
    id: 4,
    classe: ".bloc-[screen]-4",
    style: "max-width : 33.33%",
  },
  {
    id: 5,
    classe: ".bloc-[screen]-5",
    style: "max-width : 41.67%",
  },
  { id: 6, classe: ".bloc-[screen]-6", style: "max-width : 50%" },
  {
    id: 7,
    classe: ".bloc-[screen]-7",
    style: "max-width : 58.33%",
  },
  {
    id: 8,
    classe: ".bloc-[screen]-8",
    style: "max-width : 66.67%",
  },
  { id: 9, classe: ".bloc-[screen]-9", style: "max-width : 75%" },
  {
    id: 10,
    classe: ".bloc-[screen]-10",
    style: "max-width : 83.33%",
  },
  {
    id: 11,
    classe: ".bloc-[screen]-11",
    style: "max-width : 91.67%",
  },
  {
    id: 12,
    classe: ".bloc-[screen]-12",
    style: "max-width : 100%",
  },
];

const dataScreen = [
  {
    id: 1,
    classe: "tp",
    style: "très petit",
  },
  {
    id: 2,
    classe: "pt",
    style: "petit",
  },
  {
    id: 3,
    classe: "myn",
    style: "moyen",
  },
  {
    id: 4,
    classe: "gd",
    style: "grand",
  },
  {
    id: 5,
    classe: "tg",
    style: "très grand",
  },
];
export default function BlocPage() {
  const prop = `.bloc-<valeur>`;
  return (
    <>
      <div className="aff-flex ai-mil gap-2 mb-3">
        <ContainerIcon size={30} className="texte-couleur-bleu-ciel" />
        <h1 className="texte-couleur-bleu-ciel texte-5 fira">Bloc </h1>
      </div>

      <Col className={"gap-10"}>
        <Bloc type={"myn"} nombre={11} className={"texte-couleur-gris"}>
          <p>
            <span className="te-noir texte-couleur-bleu-ciel">Flexible</span>{" "}
            propose un systeme de conteneur nommé{" "}
            <span className="te-noir texte-couleur-bleu-ciel">`Bloc`</span> qui
            permet de créer une zone spéficique à dimension fixe dans la page
            web.
          </p>
          <p className="mh-2">
            La zone de{" "}
            <span className="te-noir texte-couleur-bleu-ciel">`Bloc`</span> se
            créée en fonction de la{" "}
            <span className="texte-couleur-rouge-cerise te-noir">taille</span>{" "}
            d'écran de l'appareil{" "}
            <span className="texte-couleur-bleu-ciel te-noir">
              -tp, -pt, -myn, -gd et -tg
            </span>{" "}
            et de la{" "}
            <span className="texte-couleur-rouge-cerise te-noir">
              proportion voulue
            </span>{" "}
            généralement allant de 1 à 12.
          </p>
        </Bloc>
        <Tableau titre1={"Classes"} titre2={"Styles"} data={data} />

        <div className="aff-flex ai-mil gap-2 mb-3">
          <Smartphone size={30} className="texte-couleur-bleu-ciel" />
          <h1 className="texte-couleur-bleu-ciel texte-4 fira">
            Mobile First{" "}
          </h1>
        </div>

        <Bloc type={"myn"} nombre={11} className={"texte-couleur-gris"}>
          <p>
            <span className="texte-couleur-bleu-ciel te-noir">Flexible ✨</span>{" "}
            est un framework CSS basé sur le principe du{" "}
            <span className="texte-couleur-bleu-ciel te-noir fira">
              mobile-first
            </span>{" "}
            : on pense d’abord aux petits écrans, puis on adapte aux plus
            grands.
          </p>

          <p className="mh-3">
            La classe{" "}
            <span className="bg-gris-claire fira  texte-couleur-bleu-ciel te-noir">
              {prop}
            </span>{" "}
            permet définir une zone qui sera la même quelque soit le type
            d'écran et d'appareils.
          </p>
        </Bloc>
        <Bloc type={"myn"} nombre={11} className={"texte-couleur-gris"}>
          <h3>Exemples</h3>
          <Ligne
            className={
              "jc-sb bord-3 bord-dashed ronde bord-gris-claire p-2 mh-2"
            }
          >
            <div className="ronde bg-gris-claire p-2 bloc-1 survol curseur-pointeur ">
              <h2 className="ta-mil">1</h2>
            </div>
            <div className="ronde bg-gris-claire p-2 bloc-2 survol curseur-pointeur ">
              <h2 className="ta-mil">2</h2>
            </div>
            <div className="ronde bg-gris-claire p-2 bloc-3 survol curseur-pointeur ">
              <h2 className="ta-mil">3</h2>
            </div>
            <div className="ronde bg-gris-claire p-2 bloc-4 survol curseur-pointeur ">
              <h2 className="ta-mil">4</h2>
            </div>
            <div className="ronde bg-gris-claire p-2 bloc-5 survol curseur-pointeur ">
              <h2 className="ta-mil">5</h2>
            </div>
            <div className="ronde bg-gris-claire p-2 bloc-6 survol curseur-pointeur">
              <h2 className="ta-mil">6</h2>
            </div>

            <div className="ronde bg-gris-claire p-2 bloc-12 survol curseur-pointeur">
              <h2 className="ta-mil">12</h2>
            </div>
          </Ligne>
        </Bloc>
        <Bloc type={"myn"} nombre={11} className={"texte-couleur-gris"}>
          <h3>Types d'écrans</h3>
          <p className="mh-2">
            La classe{" "}
            <span className="texte-couleur-bleu-ciel te-noir fira">
              .bloc-[screen]-[valeur]
            </span>{" "}
            de{" "}
            <span className="texte-couleur-bleu-ciel te-noir">Flexible ✨</span>{" "}
            utilise les types d'écrans ci-dessous :
          </p>
        </Bloc>
        <Tableau titre1={"type"} titre2={"signification"} data={dataScreen} />
      </Col>
    </>
  );
}
