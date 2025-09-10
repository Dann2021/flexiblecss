import React from "react";
import { Bouton, Col, Ligne } from "../../composants";
import Icons from "../../constantes/Icone";

export default function ComposantPages() {
  return (
    <>
      <h1 className="texte-6 ta-mil texte-couleur-bleu-ciel ls-3 lh-2">
        Composants utilitaires
      </h1>

      <Col className={"mh-2"}>
        <Ligne className={"jc-mil ai-mil"}>
          <CardComponent nom={"Bouton"} >
            <div className="aff-flex jc-mil gap-3 mh-2 ">
              <Bouton
                onClick={() => alert("Vous avez cliqué")}
                variant="contour"
              >
                bouton
              </Bouton>

              <Bouton theme="sombre">bouton</Bouton>
            </div>
          </CardComponent>
          <CardComponent nom={"Card"}>
            <div className="col gap-3">
              <Icons.Avatar className="image" height={50} width={50} />
              <div className="bloc-12  mh-2 overy-auto">
                <p className="texte-1">Lorem ipsum dolor sit, amet consectetur adipisicing elit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi deserunt repellat et, maxime aperiam iste laborum impedit facilis. Natus temporibus obcaecati praesentium deleniti</p>

              </div>
              
            </div>
          </CardComponent>
          <CardComponent />
          <CardComponent />
        </Ligne>
      </Col>
    </>
  );
}

const CardComponent = ({ nom, children, className="" }) => {
  return (
    <div className={`bg-gris-claire p-2  ronde bloc-myn-3  bloc-10  box-2 ${className}`}>
      <p className="texte-couleur-gris te-noir texte-3">{nom}</p>
      {children}
    </div>
  );
};
