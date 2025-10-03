import React from "react";
import ImageShoe from "../assets/images/5.png";
import { Card, Image, Bouton } from "../composants";
import { BsBag } from "react-icons/bs";
import { Star } from "lucide-react";

export default function CardModele() {
  const cardStyle2 = {
    background: "linear-gradient(145deg, #ffffff, #f3f6f9)",
    borderRadius: "16px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
    transition: "transform 0.25s ease, box-shadow 0.25s ease",
    cursor: "pointer",
  };
  return (
    <Card className={"bloc-myn-12"} style={cardStyle2}>
      <Card.Corps className={"ligne jc-sb  p-1 "}>
        <Image
          alt={"image shoe"}
          source={ImageShoe}
          className={
            "survol ratio-auto image-cover bg-rose-saumon bloc-pt-5 bloc-myn-5 bloc-12 ronde-1"
          }
        />

        <div className="aff-flex fd-col gap-4">
          <div className="aff-flex jc-sb gap-2 mh-1">
            <p className="te-gras texte-3 ubuntu">Nike Adapt BB 2.0</p>

            <Star size={14} />
          </div>
          <p className="texte-couleur-gris taille-pt">
            Consistent, customized fit, game-changing.
          </p>
          <div className="aff-flex gap-2 te-noir">
            <p className="texte-couleur-noir-charbon">$279.97</p>
            <p className="td-barre texte-couleur-gris ">$350</p>
            <p className="texte-couleur-vert-jade-fonce">20% off</p>
          </div>

          <div className="aff-flex gap-4 te-noir taille-pt">
            <p className="tt-maj texte-couleur-bleu-ciel">x</p>
            <p className="tt-maj">s</p>
            <p className="tt-maj">m</p>
            <p className="tt-maj">l</p>
            <p className="tt-maj">xl</p>
          </div>
          <div className="aff-flex gap-3 mh-2">
            <Bouton className={"ronde-1"} taille={"min"}>
              Buy now
            </Bouton>
            <Bouton
              taille={"min"}
              className={"ronde-1 bouton-icone"}
              theme="sombre"
            >
              <BsBag />
              Add to bag
            </Bouton>
          </div>
        </div>
      </Card.Corps>
    </Card>
  );
}
