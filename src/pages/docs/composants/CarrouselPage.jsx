import { Bloc, Carrousel, Col } from "../../../composants/index.js";
import Tableau from "../../../utilitaire/Tableau.jsx";
import Image1 from "../../../assets/images/carousel/1.jpg";
import Image2 from "../../../assets/images/carousel/2.jpg";
import Image3 from "../../../assets/images/carousel/3.jpg";
import Image4 from "../../../assets/images/carousel/4.jpg";
import Image5 from "../../../assets/images/carousel/5.jpg";
import Image6 from "../../../assets/images/carousel/6.jpg";
import { Images } from "lucide-react";
import TitreDoc from "../../../composants/docs_composant/TitreDoc.jsx";


/*
 *   images = [],
  titre,
  classNameImages,
  taille,
  children
 */
const dataProps = [
  { id: 1, classe: "images []", style: "Tableau des images" },

  { id: 2, classe: "titre", style: "Nom du carrousel" },

  { id: 3, classe: "taille", style: "Taille des images" },

  { id: 4, classe: "children", style: "Element enfant" },
];

export default function CarrouselPage() {
  return (
    <>
  
      <TitreDoc
        icone={<Images size={30} className="texte-couleur-bleu-ciel" />}
        titre={"Carrousel"}
      />

      <Col className={"mh-3 gap-5"}>
        <Bloc type={"myn"} nombre={11} className={"texte-couleur-gris mb-8"}>
          <p>
            Le{" "}
            <span className="texte-couleur-bleu-ciel te-noir">carrousel</span>{" "}
            est un composant UI qui permet de faire défiler plusieurs contenus
            (images, cartes, textes, etc.) de manière interactive et élégante.
          </p>
        </Bloc>

        <h3>Propriétés</h3>
        <Tableau
          titre1={"Propriétés"}
          titre2={"Description"}
          data={dataProps}
        />

        <h3>Exemple</h3>
        <Bloc type={"myn"} nombre={11}>
          <Carrousel
            images={[Image1, Image2, Image3, Image4, Image5, Image6]}
            taille={250}
            titre={"Carrousel"}
          />
        </Bloc>
      </Col>
    </>
  );
}
