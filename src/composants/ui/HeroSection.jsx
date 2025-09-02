// creation d'un composant Hero

import Bloc from "./Bloc.jsx";
import Bouton from "./Bouton.jsx";
import Image from "./Image.jsx";
import Couleurs from "../../constantes/Couleurs.js";
import TexteDegrade from "./TexteDegrade.jsx";
import Col from "./Col.jsx";
import BoutonLien from "../brouillons/BoutonLien.jsx";

export default function HeroSection({
  textePrincipale,
  //sousTexte,
  children,

  btn1,
  btn2,
  sourceImage,
  col,
}) {
  return (
    <Col className={"ai-mil mh-10"}>
     
      <Bloc type={"myn"} nombre={col} className="col ai-mil  slidebas gap-3 relative">
        <TexteDegrade
          className="texte-9  lh-2 ls-2 ta-mil te-noir mh-2"
          couleurs={`${Couleurs.cyan}, ${Couleurs.indigo}`}
        >
          {textePrincipale}
        </TexteDegrade>
         <span className="absolue haut-0 droite-1 badge bg-bleu-lavande te-noir  ">Bêta</span>
        {/*<p className={"texte-2 texte-couleur-gris mb-3 ta-mil"}>{sousTexte}</p>*/}
        <div className="bloc-12 bloc-myn-9 texte-2 texte-couleur-gris mb-1 ta-mil">
         {children}
        </div>
        {/*<Bouton type={"primaire"} className={"bouton-rond bouton-min"} variant>
          {btn}
        </Bouton>*/}
        <div className="aff-flex ai-mil gap-2 jc-mil mh-1">
          <BoutonLien chemin={"/docs/intro"} type={"primaire"} >{btn1}</BoutonLien>
          <BoutonLien chemin={"/docs/install"} type={"sombre"} >{btn2}</BoutonLien>
        </div>

        <Image
          source={sourceImage}
          className={"ronde"}
          height={600}
          width={600}
        />
      </Bloc>
    </Col>
  );
}
