import { IoColorPaletteSharp } from "react-icons/io5";
import { Bloc,  Col  } from "../../composants";
import {
  paletteRouge,
  paletteVert,
  paletteBleu,
  paletteGris,
  paletteViolet,
  paletteRose,
  paletteOrangeJaune,
  paletteAutres,
} from "../../constantes/Color.js";
import Tableau from "../../utilitaire/Tableau.jsx";
import TitreDoc from "../../composants/docs_composant/TitreDoc.jsx";


const couleurData = [
  { id: 1, classe: ".texte-couleur-bleu-ciel", style: "color : #3095e0" },
  { id: 2, classe: ".bord-bleu-ciel", style: "border-color : #3095e0" },
  { id: 3, classe: ".bg-bleu-ciel", style: "background : #3095e0" },
];

export default function CouleurPage() {
  return (
    <>
    
      <TitreDoc
        icone={
          <IoColorPaletteSharp size={30} className="texte-couleur-bleu-ciel" />
        }
        titre={"Couleurs"}
      />

      <Col className={"gap-5"}>
        <Bloc type={"myn"} nombre={11} className={"texte-couleur-gris"}>
          <p>
            <span className="te-noir texte-couleur-bleu-ciel">Flexible</span>{" "}
            propose une large palette de couleurs qui vous sera utile dans les{" "}
            <span className={"texte-couleur-bleu-ciel fira te-noir"}>
              border-[color], font-color, background et background-color
            </span>{" "}
          </p>
        </Bloc>
        <h2 className={"texte-couleur-gris"}>Utilisation</h2>
        <Bloc type={"myn"} nombre={11} className={"texte-couleur-gris"}>
          <p>
            Les couleurs dans{" "}
            <span className={"te-noir texte-couleur-bleu-ciel"}>Flexible</span>{" "}
            permettent d'appliquer du styles à des éléments dans une page web.
          </p>
        </Bloc>
        <Tableau titre1={"Classes"} titre2={"Style"} data={couleurData} />

        <Bloc type={"myn"} nombre={12}>
          <CardCouleur couleurName={"Rouge"} datasColor={paletteRouge} />
          <CardCouleur couleurName={"Bleu"} datasColor={paletteBleu} />
          <CardCouleur couleurName={"Vert"} datasColor={paletteVert} />
          <CardCouleur couleurName={"Gris"} datasColor={paletteGris} />
          <CardCouleur couleurName={"Violet"} datasColor={paletteViolet} />
          <CardCouleur couleurName={"Rose"} datasColor={paletteRose} />
          <CardCouleur
            couleurName={"Orange & Jaune"}
            datasColor={paletteOrangeJaune}
          />
          <CardCouleur couleurName={"Autres"} datasColor={paletteAutres} />
        </Bloc>
      </Col>
    </>
  );
}

const CardCouleur = ({ couleurName, datasColor = [] }) => {
  if (!datasColor || datasColor.length === 0) {
    return <p>Aucun tableau pour l'instant</p>;
  }
  return (
    <>
      <h3 className={"texte-couleur-gris fira"}>{couleurName}</h3>

      <div
        className="mg-pt-9 aff-flex jc-deb ai-mil gap-3 bloc-12  bloc-myn-12 over-auto p-1  mh-1"
        style={{ flexWrap: "wrap" }}
      >
        {" "}
        {/* style={{flexWrap: "wrap"}} */}
        {datasColor.map((couleur) => (
          <span
            className={`bord-1 survol ta-mil curseur-pointeur bord-solid bord-${couleur.nom} ronde-1 p-2 bloc-4 bloc-tp-2  bloc-myn-2 bg-${couleur.nom}`}
          >
            <span className={"taille-pt tt-maj te-noir"}>{couleur.valeur}</span>
          </span>
        ))}
      </div>
    </>
  );
};
