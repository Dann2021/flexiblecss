import { AlertCircleIcon } from "lucide-react";
import Icons from "../../constantes/Icone";
import { Bloc, Col, Lien, Conteneur } from "../../composants";

export default function PageErreur() {
  return (
    <Conteneur className={"poppins"}>
      <Col className={"jc-mil ai-mil gap-5"}>
        <Titre
          titre={"Page Introuvable"}
          className={"texte-couleur-rouge-cerise"}
        >
          <AlertCircleIcon />
        </Titre>

        <Bloc type={"myn"} nombre={11}>
          <Icons.Erreur404 height={400} width={400} className="image" />
        </Bloc>
        <div className="defilement">
          <Titre
            titre={"Retournez en arrière"}
            className={"texte-couleur-rouge-cerise element-defile"}
          />
        </div>
        <p className="ta-mil">
          <Lien chemin={"/"} className={"texte-couleur-vert-jade"}>
            Retournez à l&apos;acceuil
          </Lien>
        </p>
      </Col>
    </Conteneur>
  );
}


function Titre({ titre, className, children }) {
  return (
    <p className={`taille-gd te-gras texte-couleur-gris ${className}`}>
      {children} {titre}
    </p>
  );
}