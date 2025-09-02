import TexteDegrade from "../ui/TexteDegrade.jsx";
import Lien from "../ui/Lien.jsx";

import Col from "../ui/Col.jsx";
import Input2 from "./Input2.jsx";
import { BadgeCheck, Headset, Mail, Navigation, Scale } from "lucide-react";
import Bouton from "../ui/Bouton.jsx";

export default function Foot({ className = "" }) {
  // const bonne1 = "#1a1a1a"
  const bg = "#f1f1f1";
  const couleur_texte = "#333333";

  // icone pour navigation : <Compass />

  return (
    <div className={`p-4  col ${className} `} style={{ background: bg }}>
      <div className="px-3 py-3 ligne gap-5 jc-mil ai-mil poppins">
        <div className="bloc-pt-2 col ai-mil">
          <span
            className={"taille-myn aff-flex gap-1 ai-mil"}
            style={{ color: couleur_texte }}
          >
            {" "}
            <Navigation size={20} /> Navigation
          </span>
          <ul className={"liste-style-aucun py-1 col ai-mil"}>
            <li className={"mh-1 taille-pt"}>
              <Lien chemin={"/"} style={{ color: couleur_texte }}>
                Accueil
              </Lien>
            </li>
            <li className={"mh-1 taille-pt"}>
              <Lien chemin={"/vols"} style={{ color: couleur_texte }}>
                Vols
              </Lien>
            </li>
            <li className={"mh-1 taille-pt"}>
              <Lien chemin={"/apropos"} style={{ color: couleur_texte }}>
                About
              </Lien>
            </li>
          </ul>
        </div>

        <div className="bloc-pt-2 col ai-mil">
          <span
            className={"taille-myn aff-flex gap-1 ai-mil"}
            style={{ color: couleur_texte }}
          >
            {" "}
            <BadgeCheck size={20} /> Avantages
          </span>
          <ul className={"liste-style-aucun py-1 col ai-mil"}>
            <li className={"mh-1 taille-pt"}>
              <Lien chemin={"/tarifs"} style={{ color: couleur_texte }}>
                Tarifs
              </Lien>
            </li>
            <li className={"mh-1 taille-pt"} style={{ color: couleur_texte }}>
              item 2
            </li>
            <li className={"mh-1 taille-pt"} style={{ color: couleur_texte }}>
              item 3
            </li>
          </ul>
        </div>

        <div className="bloc-pt-2 col ai-mil">
          <span
            className={"taille-myn aff-flex gap-1 ai-mil"}
            style={{ color: couleur_texte }}
          >
            {" "}
            <Headset size={20} /> Support
          </span>
          <ul className={"liste-style-aucun py-1 col ai-mil"}>
            <li className={"mh-1 taille-pt"}>
              <Lien chemin={"/feedback"} style={{ color: couleur_texte }}>
                Feedback
              </Lien>
            </li>
            <li className={"mh-1 taille-pt"}>
              <Lien chemin={"/faq"} style={{ color: couleur_texte }}>
                FAQ
              </Lien>
            </li>
            <li className={"mh-1 taille-pt"} style={{ color: couleur_texte }}>
              item 3
            </li>
          </ul>
        </div>

        <div className="bloc-pt-2 col ai-mil">
          <span
            className={"taille-myn aff-flex gap-1 ai-mil"}
            style={{ color: couleur_texte }}
          >
            {" "}
            <Scale size={20} /> Legal
          </span>
          <ul className={"liste-style-aucun py-1 col ai-mil"}>
            <li className={"mh-1 taille-pt"} style={{ color: couleur_texte }}>
              <Lien
                chemin={"/paiement/succes"}
                style={{ color: couleur_texte }}
              >
                succes
              </Lien>
            </li>
            <li className={"mh-1 taille-pt"} style={{ color: couleur_texte }}>
              <Lien
                chemin={"/paiement/erreur"}
                style={{ color: couleur_texte }}
              >
                erreur
              </Lien>
            </li>

            <li className={"mh-1 taille-pt"} style={{ color: couleur_texte }}>
              item 3
            </li>
          </ul>
        </div>
      </div>

      <Col className={"mh-3 mb-3 gap-3"}>
        <div className="aff-flex gap-3 jc-mil">
          {/** mettre les icones ici */}
        </div>

        <div className="mh-2">
          <p className="ta-mil taille-pt">Abonnez-vous à notre newsletter</p>
          <div className="aff-flex jc-mil gap-3 mh-1">
            <Input2
              simple
              dataType={"arrondie"}
              icone={<Mail />}
              placeholder={"Saisir votre mail"}
            />
            <Bouton className={"bouton-min"} type={"primaire"}>
              Envoyer
            </Bouton>
          </div>
        </div>
      </Col>

      <p className={"texte-2 ta-mil"} style={{ color: couleur_texte }}>
        © 2025 Tous les droits réservés
      </p>
      <div className="col ai-mil mh-3">
        <TexteDegrade
          texte={"ZEvent✨"}
          className="ubuntu texte-2"
          couleurs=" #228B22, #6B8E23"
        />
      </div>
    </div>
  );
}
