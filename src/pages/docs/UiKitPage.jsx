import React from "react";
import { Bloc, Col, Ligne, Image, Bouton } from "../../composants/index.js";
import UiKitImage from "../../assets/images/uikit.png";
import UiKitImageFlexible from "../../assets/images/flex3.png";
import Icons from "../../constantes/Icone.js";
import { Heart, HomeIcon, Shapes, User2 } from "lucide-react";

export default function UiKitPage() {
  return (
    <>
      <div className="aff-flex ai-mil gap-2 texte-couleur-bleu-ciel mb-2">
        <Shapes className={"image"} size={30} />
        <h1 className={"fira te-noir ls-2 lh-3"}>Ui Kit</h1>
      </div>

      <Col>
        {/*}<Bloc type={"myn"} nombre={11} className={"texte-couleur-gris"}>
          <p>Cette page présente les éléments visuels de base du framework pour assurer une interface cohérente et réutilisable. </p>
        </Bloc>

        <Bloc type={"myn"} nombre={11} className={"col ai-mil mh-2 bg-gris-claire p-2 ronde"}>
          <Icons.WebDesign height={300} width={300} />
        </Bloc>

        <Bloc type={"myn"} nombre={11} className={"mh-2 ronde bord-3 bord-dashed bord-gris-claire texte-couleur-gris"}>
          <p>Cette page présente les éléments visuels de base du framework pour assurer une interface cohérente et réutilisable. </p>
        </Bloc>*/}
        {/*<Ligne className={"jc-sa ai-mil gap-6"}>
          <Bloc type={"myn"} nombre={4} className={"p-2"}  >
            <div className="aff-flex ai-mil gap-3 mb-3">
              <Icons.Avatar height={40} width={40} />
              <p className={"texte-couleur-gris taille-pt"}>Material Design</p>
            </div>
            <h2>Material 3 Design Kit</h2>
            <div className="aff-flex ai-mil gap-2 texte-couleur-gris taille-pt mh-2 mb-3">
              <span>Design file</span>
              <span>.</span>
              <Heart size={15}/>
              <span>47.7k</span>
              <span>.</span>
              <User2 size={15} />
              <span>1m users</span>
            </div>
            <Bouton taille={"me"}>Open in figma</Bouton>
          </Bloc>
          <Bloc type={"myn"} nombre={7}>
            <Image source={UiKitImage}   className={"ronde"} alt={"Material design ui kit"} />
          </Bloc>
        </Ligne>*/}

        <Ligne className={"jc-sb  gap-6"}>
          <Bloc type={"myn"} nombre={4} className={"p-2 m-1"}>
            <div className="aff-flex ai-mil gap-3 mb-3">
              <Icons.Avatar height={40} width={40} />
              <p className={"texte-couleur-gris taille-pt"}>Flexible Design</p>
            </div>
            <h2>Flexible Design Kit</h2>
            <div className="aff-flex ai-mil gap-2 texte-couleur-gris taille-pt mh-2 mb-3">
              <span>Design file</span>
              <span>.</span>
              <Heart size={15} />
              <span>47.7k</span>
              <span>.</span>
              <User2 size={15} />
              <span>1m users</span>
            </div>
            <Bouton taille={"me"}>Open in figma</Bouton>
          </Bloc>
          <Bloc type={"myn"} nombre={7}>
            <Image
              source={UiKitImageFlexible}
              className={"ronde curseur-pointeur survol"}
              alt={"Material design ui kit"}
            />
          </Bloc>
        </Ligne>
      </Col>
    </>
  );
}
