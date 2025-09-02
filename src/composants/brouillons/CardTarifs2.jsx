import { CheckCircle2Icon } from "lucide-react";
//import { useThemeContexte } from "../contexte/contexte";
import Bouton from "../Bouton.jsx";
import { useState } from "react";

export default function CardTarif2({ id, prix, plan, m1, m2, m3, badge }) {
  // import du contexte theme
  //const { theme } = useThemeContexte();
  // couleurs pour le card
  const couleurSombre = "#1E1E1E";
  const couleurClaire = "#F9F9F9";

  const [focus, setFocus] = useState(false);

  // les trois meilleurs gris
  // gris-claire (best), gris-perle, gris-argent, gris

  const styles = {
    background: couleurClaire,
    backdropFilter: "blur(10px)",
    border: "1px solid #E0E0E0",
    boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
  };

  // bloc-11 bloc-tp-5 bloc-myn-3

  return (
    <div
      key={id}
      className={`bloc-12 bloc-tp-8 bloc-pt-5 bloc-myn-3 ronde py-1 survol curseur-pointeur`}
      style={styles}
    >
      <div className="aff-flex jc-sb gap-30 relative">
        <h4 className={"texte-couleur-bleu-petrole"}>{plan}</h4>

        {badge && (
          <span style={{ right: 0 }} className={"badge px-1 taille-pt absolue"}>
            {badge}
          </span>
        )}
      </div>

      <div className="aff-flex gap-2  jc-deb mh-4">
        <h1 className={"taille-tg"}>
          <span className={"taille-pt"}>FCFA </span>
          {prix}
        </h1>
        <div className="aff-flex gap-1" style={{ flexDirection: "column" }}>
          <p className={"taille-pt texte-couleur-gris"}>par utilisateur</p>
          <p className={"taille-pt texte-couleur-gris"}>par mois</p>
        </div>
      </div>
      <p className={"taille-pt texte-couleur-gris"}>
        votre usage de base au plan {plan}
      </p>

      <div
        className="aff-flex gap-2 mh-2 mb-3"
        style={{ flexDirection: "column" }}
      >
        <Bouton className={"bouton-block bouton-min"} type={"sombre"}>
          Essayer gratuitement
        </Bouton>
        <Bouton
          className={
            "bouton-block bouton-min bord-1 bord-solid bord-noir-charbon "
          }
          type={"claire"}
        >
          S&apos;abonner
        </Bouton>
      </div>

      <p className={"tt-maj te-noir"}>Avantages</p>
      <p className={"taille-pt"}>Choisissez votre plan</p>

      <div className="aff-flex ai-mil gap-1 mh-2">
        <CheckCircle2Icon fill={"#3B82F6"} stroke={"black"} />
        <p className="te-noir taille-pt texte-couleur-gris">{m1}</p>
      </div>
      <div className="aff-flex ai-mil gap-1">
        <CheckCircle2Icon fill={"#3B82F6"} stroke={"black"} />
        <p className="te-noir taille-pt texte-couleur-gris">{m2}</p>
      </div>
      <div className="aff-flex ai-mil gap-1 mb-2">
        <CheckCircle2Icon fill={"#3B82F6"} stroke={"black"} />
        <p className="te-noir taille-pt texte-couleur-gris">{m3}</p>
      </div>
    </div>
  );
}
