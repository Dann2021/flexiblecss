import { Bloc, Col } from "../../composants";
import Tableau from "../../utilitaire/Tableau";
import { Layers2 } from "lucide-react";
import TitreDoc from "../../composants/docs_composant/TitreDoc";

const data = [
  { id: 1, classe: ".z-n1", style: "z-index: -1" },
  { id: 2, classe: ".z-0", style: "z-index: 0" },
  { id: 3, classe: ".z-10", style: "z-index: 10" },
  { id: 4, classe: ".z-20", style: "z-index: 20" },
  { id: 5, classe: ".z-30", style: "z-index: 30" },
  { id: 6, classe: ".z-40", style: "z-index: 40" },
  { id: 7, classe: ".z-50", style: "z-index: 50" },
  { id: 8, classe: ".z-100", style: "z-index: 100" },
  { id: 9, classe: ".z-1000", style: "z-index: 1000" },
  { id: 10, classe: ".z-max", style: "z-index: 9999" },
  { id: 11, classe: ".z-auto", style: "z-index: auto" },
];

// eslint-disable-next-line no-unused-vars
const code = `
<div className="aff-flex relative gap-5">
  <div className="bloc-7 box-2 bloc-myn-4 bg-gris-claire survol ronde p-5 absolue z-10 bord-1 bord-dashed bord-gris">
    <h1 className="ta-mil fira couleur-bleu-ciel">z-10</h1>
  </div>
  <div className="bloc-7 box-2 bloc-myn-4 bg-gris-claire survol ronde p-5 absolue haut-20 gauche-30 bord-1 bord-dashed bord-gris z-max">
    <h1 className="ta-mil fira couleur-bleu-ciel">z-max</h1>
  </div>
</div>
`;

export default function ZIndexPage() {
  return (
    <>
      <TitreDoc
        icone={<Layers2 size={30} className="couleur-bleu-ciel" />}
        titre={"z-index"}
      />

      <Col className={"mh-3 p-1"}>
        <Bloc type={"myn"} nombre={11} className={"couleur-gris"}>
          <p className="taille-p">
            <span className="couleur-bleu-ciel te-noir">z-index</span> gère
            l’ordre d’empilement des éléments.
          </p>
          <p>
            Plus la valeur est haute, plus l’élément passe devant. Utilisable
            seulement avec ces positions :
          </p>
          <ul className="taille-pt te-noir mh-3">
            <li className="mb-2">
              <span className="p-1 bg-bleu-claire ronde">.absolue</span>
            </li>
            <li className="mb-2">
              <span className="p-1 bg-bleu-claire ronde">.relative</span>
            </li>
            <li className="mb-2">
              <span className="p-1 bg-bleu-claire ronde">.fixe</span>
            </li>
            <li className="mb-2">
              <span className="p-1 bg-bleu-claire ronde">.sticky</span>
            </li>
          </ul>
        </Bloc>

        <Tableau
          className="mb-3"
          titre1={"classes"}
          titre2={"styles"}
          data={data}
        />

        <h2>Exemple</h2>

        <Bloc type={"myn"} nombre={11} className={"mh-5"}>
          <p className="couleur-gris mb-2">Deux blocs qui se chevauchent.</p>
          <p className="couleur-gris mb-2">
            Le premier a{" "}
            <span className="p-1 bg-bleu-claire taille-pt ronde">z-10</span>, le
            second a{" "}
            <span className="p-1 bg-bleu-claire taille-pt ronde">z-max</span>. →
            Le bloc avec <b>z-max</b> passe toujours devant.
          </p>
          <div className="aff-flex relative gap-5">
            <div className="bloc-7 box-2 bloc-myn-4 bg-vert-claire survol ronde p-5 absolue z-10">
              <h1 className="ta-mil fira couleur-bleu-ciel">z-10</h1>
            </div>
            <div className="bloc-7 box-2 bloc-myn-4 bg-violet-lavande-clair survol ronde p-5 absolue haut-20 gauche-30 z-50">
              <h1 className="ta-mil fira">z-max</h1>
            </div>
          </div>
        </Bloc>
      </Col>
    </>
  );
}
