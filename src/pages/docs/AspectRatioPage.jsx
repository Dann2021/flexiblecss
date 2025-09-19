import React, { useState } from "react";
import Col from "../../composants/ui/Col";
import { Bloc } from "../../composants";
import Codebloc from "../../utilitaire/Codebloc";
import Image from "../../composants/ui/Image";
import ImageTest from "../../assets/images/image.png";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Ligne from "../../composants/ui/Ligne";

import Tableau from "../../utilitaire/Tableau";
const data = [
  { id: 1, classe: "ratio-<ratio>", style: "aspect-ratio : <ratio>" },
  { id: 2, classe: "ratio-carre", style: "aspect-ratio : 1 / 1" },
  { id: 3, classe: "ratio-classique", style: "aspect-ratio : 4 / 3" },
  { id: 4, classe: "ratio-large", style: "aspect-ratio : 16 / 9" },
  { id: 5, classe: "ratio-ultraLarge", style: "aspect-ratio : 21 / 9" },
  { id: 6, classe: "ratio-auto", style: "aspect-ratio : auto" },
];

/**
 * 
 * .ratio-carre {
  aspect-ratio: 1/1;
}

.ratio-classique {
  aspect-ratio: 4/3;
}

.ratio-large {
  aspect-ratio: 16/9;
}

.ratio-ultraLarge {
  aspect-ratio: 21/9;
}

.ratio-auto {
  aspect-ratio: auto;
}
 */

export default function AspectRatioPage() {
  return (
    <>
      <Col className={"gap-3"}>
        <h1 className="texte-5 texte-couleur-bleu-ciel fira">Aspect-ratio</h1>
        <Bloc type={"myn"} nombre={11} className={"mb-4 mh-2"}>
          <p className="texte-couleur-gris">
            Classe utilitaire pour contrôler le ratio d'un élément
          </p>
        </Bloc>

        <Tableau
          className="mb-5"
          titre1={"classes"}
          titre2={"styles"}
          data={data}
        />

        <p className="texte-couleur-gris">Exemple</p>
        <p className="texte-couleur-gri texte-2">Exemple de base</p>
        <Bloc type={"myn"} nombre={11} className={"mb-4 mh-2"}>
          <p className="texte-couleur-gris">
            Utilisez la class utilitaire{" "}
            <span className="texte-couleur-bleu-ciel fira">{`ratio-<ratio>`}</span>{" "}
            pour contrôler les proportions d'un élément peu importe la taille de
            son conteneur.
          </p>
        </Bloc>

        <CardResize sourceImage={ImageTest} langage={"jsx"} />
        <h4>Utilisation dans une video</h4>
        <Bloc type={"myn"} nombre={11} className={"mb-4 mh-2"}>
          <p className="texte-couleur-gris">
            Tout comme les images, le{" "}
            <span className="texte-couleur-bleu-ciel fira">{`ratio-<ratio>`}</span>{" "}
            fonctionne tout aussi bien avec les vidéos.
          </p>
        </Bloc>
      </Col>
    </>
  );
}

// eslint-disable-next-line no-unused-vars
const CardResize = ({ sourceImage, className = "", langage }) => {
  const [ratio, setRatio] = useState("large");
  const valeurRatio = [
    { id: 1, classe: "carre", valeur: "1/1" },
    { id: 2, classe: "classique", valeur: "4/3" },
    { id: 3, classe: "large", valeur: "16/9" },
    //{id: 4, classe: "ultraLarge", valeur: "21/9"},
  ];
  // eslint-disable-next-line no-unused-vars
  const codeReact = `<img class="image ratio-${ratio} ..." src="./img/mac.jpeg" />`;

  // mise du ratio

  return (
    <Bloc
      type={"myn"}
      nombre={10}
      className={`bloc-pt-10 centre py-3 bg-gris-claire ronde ${className}`}
    >
      <div className="aff-flex ai-mil gap-2">
        {valeurRatio.map((element) => (
          <button
            key={element.id}
            className="bouton bouton-min bouton-contour-sombre"
            onClick={() => setRatio(element.classe)}
          >
            {element.valeur}
          </button>
        ))}
      </div>
      <motion.div
        layout
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="mh-2 bloc-12"
      >
        <Image
          source={sourceImage}
          alt={"Image de test"}
          className={`ronde image-cover ratio-${ratio}`}
        />
      </motion.div>

      {/*<div className="aff-flex fd-col mh-3">
        <Codebloc langage={langage}>{codeReact}</Codebloc>
      </div>*/}
    </Bloc>
  );
};
