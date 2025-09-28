import { MousePointer2 } from "lucide-react";
import { Bloc, Bouton, Col, TexteDegrade } from "../../../composants";
import Tableau from "../../../utilitaire/Tableau";
import Codebloc from "../../../utilitaire/Codebloc";
import TitreDoc from "../../../composants/docs_composant/TitreDoc";
import Couleurs from "../../../constantes/Couleurs";

const data = [
  { id: 1, classe: ".bouton-primaire", style: "background-color: #3095e0" },
  { id: 2, classe: ".bouton-prime", style: "background-color: #1150d1" },
  { id: 3, classe: ".bouton-succes", style: "background-color: #28a745" },
  { id: 4, classe: ".bouton-danger", style: "background-color: #dc3545" },
  { id: 5, classe: ".bouton-alerte", style: "background-color: #ffc107" },
  { id: 6, classe: ".bouton-info", style: "background-color: #17a2b8" },
  { id: 7, classe: ".bouton-claire", style: "background-color: #f8f9fa" },
  { id: 8, classe: ".bouton-sombre", style: "background-color: #343a40" },
];

export default function BoutonPage() {
  return (
    <>
      <TitreDoc
        icone={<MousePointer2 size={30} className="texte-couleur-bleu-ciel" />}
        titre={"Bouton"}
      />

      <Col className={"mh-5 gap-5s"}>
        <Bloc type={"myn"} nombre={11} className={"texte-couleur-gris"}>
          <p>
            Le bouton est un élément d'interface utilisé pour exécuter une
            action
          </p>
        </Bloc>

        <Tableau
          titre1={"classes"}
          titre2={"styles"}
          data={data}
          className="mb-3"
        />
        <h3>Boutons de base</h3>

        <Bloc type={"myn"} nombre={11} className={"mb-5"}>
          <div className="aff-flex gap-3 bloc-12 overx-auto mb-2">
            <Bouton taille={"me"}>primaire</Bouton>
            <Bouton taille={"me"} theme="prime">
              prime
            </Bouton>
            <Bouton taille={"me"} theme="succes">
              succes
            </Bouton>
            <Bouton taille={"me"} theme="danger">
              danger
            </Bouton>
            <Bouton taille={"me"} theme="alerte">
              alerte
            </Bouton>
            <Bouton taille={"me"} theme="info">
              info
            </Bouton>
            <Bouton taille={"me"} theme="claire">
              claire
            </Bouton>
            <Bouton taille={"me"} theme="sombre">
              sombre
            </Bouton>
          </div>

          {/*<Codebloc langage={"jsx"}>
            {`<Bouton theme='primaire'>primaire</Bouton>`} {/** ici */}
          {/*</Codebloc>*/}
        </Bloc>
        <h3>formes</h3>
        <Bloc type={"myn"} nombre={11} className={"p-1 mb-3"}>
          <div className="aff-flex gap-3 bloc-12 overx-auto">
            <Bouton className={"ronde"}>forme</Bouton>
            <Bouton className={"ronde-1 taille-pt"} theme="prime">
              prime
            </Bouton>
            <Bouton className={"ronde-2 taille-pt"} theme="succes">
              succes
            </Bouton>
            <Bouton className={"ronde-3 taille-pt"} theme="danger">
              danger
            </Bouton>
            <Bouton className={"ronde-4 taille-pt"} theme="alerte">
              alerte
            </Bouton>
            <Bouton className={"ronde-5 taille-pt"} theme="info">
              info
            </Bouton>
          </div>
        </Bloc>
        <TexteDegrade
          className="texte-4 ta-mil te-noir"
          couleurs={`${Couleurs.orange1}, ${Couleurs.orange2}`}
        >
          En cours de développement ...
        </TexteDegrade>
      </Col>
    </>
  );
}
