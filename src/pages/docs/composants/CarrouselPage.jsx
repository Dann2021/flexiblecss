import React from "react";
import { Bloc, Carrousel, Col, Table } from "../../../composants/index.js";
import Tableau from "../../../utilitaire/Tableau.jsx";
import Image1 from "../../../assets/images/carousel/1.jpg";
import Image2 from "../../../assets/images/carousel/2.jpg";
import Image3 from "../../../assets/images/carousel/3.jpg";
import Image4 from "../../../assets/images/carousel/4.jpg";
import Image5 from "../../../assets/images/carousel/5.jpg";
import Image6 from "../../../assets/images/carousel/6.jpg";




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
      <h1 className={"texte-5 texte-couleur-bleu-ciel fira"}>Carrousel</h1>

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
