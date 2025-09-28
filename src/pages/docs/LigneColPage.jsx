import { Columns } from "lucide-react";

import { Bloc, Col, Ligne } from "../../composants";
import Codebloc from "../../utilitaire/Codebloc";
import Tableau from "../../utilitaire/Tableau";
import TitreDoc from "../../composants/docs_composant/TitreDoc.jsx";

const dataTable = [
  { id: 1, classe: ".ligne", style: "display : flex" },
  { id: 2, classe: ".col", style: "flex-direction : coloumn" },
];
export default function LigneColPage() {
  const ligneCode = `
    <div className="ligne jc-sb">
        <div className="bloc-12 bloc-pt-2 bg-gris-claire ronde p-3 ">
            <h1 className="ta-mil">1</h1>
        </div>

        <div className="bloc-12 bloc-pt-2 bg-gris-claire ronde p-3">
            <h1 className="ta-mil">2</h1>
        </div>

        <div className="bloc-12 bloc-pt-2 bg-gris-claire ronde p-3">
            <h1 className="ta-mil">3</h1>
        </div>
    </div>
    `;
  return (
    <>
      {/** haut de pages */}
      {/*<div className="aff-flex ai-mil gap-2 mb-3">
        <div className="aff-flex jc-mil ai-mil gap-2">
          <Rows size={30} className="texte-couleur-bleu-ciel" />
          <Columns size={30} className="texte-couleur-bleu-ciel" />
        </div>
        <h1 className="texte-couleur-bleu-ciel texte-5 fira">Ligne & Col </h1>
      </div>*/}
      <TitreDoc
        icone={<Columns size={30} className="texte-couleur-bleu-ciel" />}
        titre={"Ligne & Col"}
      />

      <Col className={"gap-5"}> 
        <Bloc type={"myn"} nombre={11} className={"texte-couleur-gris mb-6"}>
          <p>
            Les classes{" "}
            <span className="texte-couleur-bleu-ciel te-noir fira">
              .ligne et .col
            </span>{" "}
            sont des classes utilitaires{" "}
            <span className="texte-couleur-bleu-lagon te-noir">responsive</span>{" "}
            de{" "}
            <span className="texte-couleur-bleu-ciel fira te-noir">
              FlexibleCss
            </span>{" "}
            qui permettent de contrôler la disposition des éléments qu'ils
            contiennent.
          </p>
          <ul className="mg-3 mh-2 mb-2">
            <li>
              <span className="texte-couleur-bleu-ciel te-noir fira">
                ligne
              </span>{" "}
              permet une disposition en ligne
            </li>
            <li>
              <span className="texte-couleur-bleu-ciel te-noir fira">col</span>{" "}
              permet une disposition en colonne
            </li>
          </ul>
          <p>
            {" "}
            Ces deux classes respectent le principe du{" "}
            <span className="bg-gris-claire px-1 te-noir texte-couleur-bleu-ciel">
              responsive
            </span>{" "}
            c'est à dire que tous les éléments qu'ils contiennent changent ou
            adaptent leurs dispositions en fonction de la taille d'écran de
            l'appareil.
          </p>
        </Bloc>
        <Tableau titre1={"Classes"} titre2={"Styles"} data={dataTable} />

        <h2 className={"texte-couleur-gris"}>Utilisation</h2>

        <Bloc type={"myn"} nombre={11} className={"texte-couleur-gris"}>
          <h3 className="texte-3 mb-2">
            👉 <span className="texte-couleur-bleu-ciel fira">ligne</span>
          </h3>
          <p>
            Les éléments ci-dessous se mettent en ligne sur de grands écrans et
            en colonne sur des petits écrans (principe du responsive).
          </p>

          <Ligne className={"jc-sb  p-2"}>
            <div className="bloc-12 bloc-pt-2 bg-gris-claire ronde p-3 ">
              <h1 className="ta-mil">1</h1>
            </div>
            <div className="bloc-12 bloc-pt-2 bg-gris-claire ronde p-3">
              <h1 className="ta-mil">2</h1>
            </div>
            <div className="bloc-12 bloc-pt-2 bg-gris-claire ronde p-3">
              <h1 className="ta-mil">3</h1>
            </div>
          </Ligne>

          {/*<CodeEditeur code={ligneCode} />*/}
        </Bloc>
        <Codebloc
          langage={"jsx"}
          className={"p-2 bloc-12 bloc-myn-11 taille-pt mh-8"}
        >
          {ligneCode}
        </Codebloc>

        <Bloc type={"myn"} nombre={11} className={"texte-couleur-gris"}>
          <h3 className="texte-3 mh-3 mb-2">
            👉 <span className="texte-couleur-bleu-ciel fira">col</span>
          </h3>

          <p>
            L'utilisation de cette classe permet juste de faire une disposition
            inverse à celle de{" "}
            <span className="texte-couleur-bleu-ciel te-noir">.ligne</span>,
            c'est à dire une disposition en colonne.
          </p>
        </Bloc>
      </Col>
    </>
  );
}
// atomDark, dracula, vscDarkPlus
