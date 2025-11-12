import { Bloc, Col, Ligne, Image, Bouton } from "../../composants";
import UiKitImageFlexible from "../../assets/images/flex3.png";
import Icons from "../../constantes/Icone.js";
import { Heart, Shapes, User2 } from "lucide-react";
import TitreDoc from "../../composants/docs_composant/TitreDoc.jsx";

export default function UiKitPage() {
  return (
    <>
      <TitreDoc
        icone={<Shapes className="couleur-bleu-ciel" size={30} />}
        titre={"Ui Kit"}
      />

    
        <Ligne className={"jc-sb gap-6 mb-5"}>
          <Bloc type={"myn"} nombre={5} className={"p-2 m-1"}>
            <div className="aff-flex ai-mil gap-3 mb-3">
              <Icons.Avatar height={40} width={40} />
              <p className={"couleur-gris taille-pt"}>Flexible Design</p>
            </div>
            <h2>Flexible Design Kit</h2>
            <div className="aff-flex ai-mil gap-2 couleur-gris taille-pt mh-2 mb-3">
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
          <Bloc type={"myn"} nombre={6}>
            <Image
              source={UiKitImageFlexible}
              className={"ronde curseur-pointeur survol"}
              alt={"Material design ui kit"}
            />
          </Bloc>
        </Ligne>

        <h1>Flexible Design</h1>
        <Bloc type={"myn"} nombre={11} className={"mh-3 couleur-gris"}>
          <p>
            Le développement initial de{" "}
            <span className="couleur-bleu-ciel te-noir">FlexibleCSS</span> s'est
            fait avec du CSS natif. Cependant, pour améliorer Flexible, j'ai dû
            créer un site en React et perfectionner certains composants en
            utilisant la librairie Framer Motion.
          </p>
        </Bloc>
     
    </>
  );
}
