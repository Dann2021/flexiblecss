import Lottie from "lottie-react";
import TexteDegrade from "../ui/TexteDegrade";

export default function CardGenerale({
  animation,
  numero,
  titre,
  description,
}) {
  // import du contexte theme

  // couleurs pour le card
  //const couleurSombre = "#1E1E1E";
  const couleurClaire = "#F9F9F9";

  // les trois meilleurs gris
  // gris-claire (best), gris-perle, gris-argent, gris

  const styles = {
    background: couleurClaire,
    backdropFilter: "blur(10px)",
    border: "1px solid #E0E0E0",
    boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
  };

  return (
    <div
      className={`bloc-11 bloc-tp-5 bloc-myn-3 ronde py-2 survol curseur-pointeur relative`}
      style={styles}
    >
      {/*<div className="absolue haut-2 bas-2 bg-vert-sauge" style={{width:"25px", height:"25px", borderRadius: "50px"}}>
        <p className="taille-myn ta-mil">{numero}</p>
      </div>*/}
      <p className={"badge absolue px-1"}>{numero}</p>

      <div className="col ai-mil mb-5">
        <Lottie
          loop
          animationData={animation}
          style={{ width: "150px", height: "150px" }}
        />
      </div>

      <TexteDegrade
        className="ta-mil taille-myn mh-3 te-noir"
        texte={titre}
        couleurs=" #2193b0, #6dd5ed"
      />
      <p className="taille-pt"> {description} </p>
    </div>
  );
}
