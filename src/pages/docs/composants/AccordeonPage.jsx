import { React } from "react";
import { Accordeon, Bloc, Col } from "../../../composants/index.js";
import { BsGithub } from "react-icons/bs";
import { CgNpm } from "react-icons/cg";
import Codebloc from "../../../utilitaire/Codebloc.jsx";
import Tableau from "../../../utilitaire/Tableau.jsx";

const dataAccordeon = [
  { id: 1, classe: "titre", style: "nom de l'accordeon" },
  { id: 2, classe: "children", style: "contenu de l'accordeon" },
  { id: 3, classe: "className", style: "style" },
  { id: 4, classe: "icone", style: "icone personnalisée" },
  { id: 5, classe: "type", style: "[rotate ou croix]" },
];

export default function AccordeonPage() {
  const code = `npm install flexible@accordeon`;
  const codejsx = `import { Accordeon } from "../composants/Accordeon.jsx"`;

  return (
    <>
      <h1 className={"texte-5 fira te-noir texte-couleur-bleu-ciel"}>
        Accordeon
      </h1>
      <Col className={"mh-2 gap-3 mb-4"}>
        <Bloc type={"myn"} nombre={11} className={"texte-couleur-gris mb-3"}>
          <p>
            Un accordéon permet d’afficher ou masquer du contenu afin de gagner
            de l’espace et améliorer la lisibilité.
          </p>

          <div className="aff-flex gap-2  fira te-noir mh-3">
            <span
              className={
                "p-1 ronde  bg-blanc-menthe aff-flex gap-1 ai-mil fira survol"
              }
            >
              <BsGithub fill={"#333"} /> <span>Github</span>
            </span>

            <span
              className={
                "p-1 ronde bg-blanc-menthe aff-flex gap-1 ai-mil fira survol"
              }
            >
              <CgNpm /> <span>npm</span>
            </span>
          </div>
        </Bloc>

        <Tableau
          titre1={"propriétés"}
          titre2={"description"}
          data={dataAccordeon}
        />

        <span className={"te-extra-gras texte-3 mh-5 mb-3"}>Installation</span>

        <Codebloc
          className={"p-2 bloc-myn-11 taille-pt mb-5"}
          langage={"shell"}
        >
          {code}
        </Codebloc>

        <span className={"te-noir texte-3"}>Import</span>

        <Bloc
          type={"myn"}
          nombre={11}
          className={"mh-3 mb-4 texte-couleur-gris"}
        >
          <p>Cet élément est conçut pour masquer le contenu</p>
          <ul className={"mg-3 mh-3"}>
            <li>
              Accordion: The main component to display a list of accordion
              items.
            </li>
            <li>
              AccordionItem: The item component to display a single accordion
              item.
            </li>
          </ul>
          <Codebloc
            className={"p-2 bloc-myn-12 taille-pt mh-3"}
            langage={"jsx"}
          >
            {codejsx}
          </Codebloc>

          <div className="bloc-12 bloc-myn-12 bord-2 bord-solid bord-blanc-menthe ronde mh-3 p-2">
            <Accordeon titre={"Accordeon 1"}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </Accordeon>
            <hr
              className={"bord-1 bloc-myn-12 bord-solid bord-gris-claire mh-1"}
            />

            <Accordeon titre={"Accordeon 2"}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </Accordeon>
            <hr
              className={"bord-1 bloc-myn-12 bord-solid bord-gris-claire mh-1"}
            />

            <Accordeon titre={"Accordeon 3"}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </Accordeon>
          </div>
        </Bloc>
      </Col>
    </>
  );
}
