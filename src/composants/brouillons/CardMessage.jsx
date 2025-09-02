
import Icons from "../../constantes/Icone";

export default function CardMessage({ message }) {

  // couleurs pour le card

  const couleurClaire = "#F9F9F9";

  // les trois meilleurs gris
  // gris-claire (best), gris-perle, gris-argent, gris

  const styles = {
    background: couleurClaire ,
    backdropFilter: "blur(10px)",
    border: "1px solid #E0E0E0",
    boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
  };

  return (
    <div className={`bloc-myn-4 bloc-12 bloc-tp-5  p-2 ronde`} style={styles}>
      <div className="aff-flex jc-sb ai-mil mb-2">
        <Icons.Avatar
          className="image bloc-3 bloc-myn-4"
          width={20}
          height={20}
        />
        <p>utilisateur</p>
      </div>

      <p className="ta-mil taille-pt">{message}</p>
    </div>
  );
}
