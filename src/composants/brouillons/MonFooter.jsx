import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faSnapchat,
  faTiktok,
  faTwitter,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBars,
  faBriefcase,
  faEnvelope,
  faGlobe,
  faHeadset,
  faHome,
  faInfoCircle,
  faLanguage,
  faLifeRing,
  faPhoneAlt,
  faQuestionCircle,
  faShareAlt,
  faUniversalAccess,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Footer from "./Footer";
import Lien from "../ui/Lien";
import SectionFooter from "./SectionFooter";

export default function MonFooter({ theme }) {
  return (
    <Footer className={`theme-${theme} bg-gris-claire-100`}>
      <SectionFooter
        titre={"Navigation Rapide"}
        icone={<FontAwesomeIcon icon={faBars} />}
      >
        <li>
          <Lien chemin={"/"} className={"texte-couleur-gris-claire"}>
            <FontAwesomeIcon icon={faHome} /> Acceuil
          </Lien>
        </li>
        <li>
          <Lien chemin={"/emploi"} className={"texte-couleur-gris-claire"}>
            <FontAwesomeIcon icon={faBriefcase} /> Emploi
          </Lien>
        </li>
        <li>
          <Lien chemin={"/contact"} className={"texte-couleur-gris-claire"}>
            <FontAwesomeIcon icon={faEnvelope} /> Contact
          </Lien>
        </li>
        <li>
          <Lien chemin={"/apropos"} className={"texte-couleur-gris-claire"}>
            <FontAwesomeIcon icon={faInfoCircle} /> A propos
          </Lien>
        </li>
      </SectionFooter>

      <SectionFooter
        titre={"Support Assistance"}
        icone={<FontAwesomeIcon icon={faHeadset} />}
      >
        <li>
          <Lien chemin={"/faq"} className={"texte-couleur-gris-claire"}>
            <FontAwesomeIcon icon={faQuestionCircle} /> FAQ
          </Lien>
        </li>
        <li>
          <Lien chemin={"/support"} className={"texte-couleur-gris-claire"}>
            <FontAwesomeIcon icon={faPhoneAlt} /> Support client
          </Lien>
        </li>
        <li>
          <Lien chemin={"/aide"} className={"texte-couleur-gris-claire"}>
            <FontAwesomeIcon icon={faLifeRing} /> Centre d&apos;aide
          </Lien>
        </li>
        <li>
          <Lien chemin={"/paiements"} className={"texte-couleur-gris-claire"}>
            <FontAwesomeIcon icon={faLifeRing} /> paiements
          </Lien>
        </li>
      </SectionFooter>
      <SectionFooter
        titre={"Réseaux Sociaux"}
        icone={<FontAwesomeIcon icon={faShareAlt} />}
      >
        <li>
          <Lien
            chemin={"https://www.linkedin.com"}
            className={"texte-couleur-gris-claire"}
          >
            <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
          </Lien>
        </li>
        <li>
          <Lien
            chemin={"https://www.facebook.com"}
            className={"texte-couleur-gris-claire"}
          >
            <FontAwesomeIcon icon={faFacebook} /> Facebook
          </Lien>
        </li>
        <li>
          <Lien
            chemin={"https://twitter.com"}
            className={"texte-couleur-gris-claire"}
          >
            <FontAwesomeIcon icon={faXTwitter} /> Twitter/X
          </Lien>
        </li>
        <li>
          <Lien
            chemin={"https://www.instagram.com"}
            className={"texte-couleur-gris-claire"}
          >
            <FontAwesomeIcon icon={faInstagram} /> Instagram
          </Lien>
        </li>
      </SectionFooter>

      <SectionFooter
        titre={"Langues Accessibilité"}
        icone={<FontAwesomeIcon icon={faGlobe} />}
      >
        <li>
          <Lien chemin={"/langues"} className={"texte-couleur-gris-claire"}>
            <FontAwesomeIcon icon={faLanguage} /> Sélecteur de langue
          </Lien>
        </li>
        <li>
          <Lien
            chemin={"/accessibilite"}
            className={"texte-couleur-gris-claire"}
          >
            <FontAwesomeIcon icon={faUniversalAccess} /> Accessibilité
          </Lien>
        </li>
        <li>
          <Lien chemin={"/langues"} className={"texte-couleur-gris-claire"}>
            <FontAwesomeIcon icon={faLanguage} /> Sélecteur de langue
          </Lien>
        </li>
        <li>
          <Lien
            chemin={"/accessibilite"}
            className={"texte-couleur-gris-claire"}
          >
            <FontAwesomeIcon icon={faUniversalAccess} /> Accessibilité
          </Lien>
        </li>
      </SectionFooter>
      {/*<SectionFooter
        titre={"Partenariats"}
        icone={<FontAwesomeIcon icon={faHandshake} />}
      >
        <li>
          <Lien chemin={"/partenaires"} className={"texte-couleur-gris-claire"}>
            <FontAwesomeIcon icon={faUsers} /> Nos partenaires
          </Lien>
        </li>
        <li>
          <Lien chemin={"/partenaires"} className={"texte-couleur-gris-claire"}>
            <FontAwesomeIcon icon={faUsers} /> Nos partenaires
          </Lien>
        </li>
        <li>
          <Lien chemin={"/partenaires"} className={"texte-couleur-gris-claire"}>
            <FontAwesomeIcon icon={faUsers} /> Nos partenaires
          </Lien>
        </li>
        <li>
          <Lien chemin={"/partenaires"} className={"texte-couleur-gris-claire"}>
            <FontAwesomeIcon icon={faUsers} /> Nos partenaires
          </Lien>
        </li>
      </SectionFooter>
      {/*<LogoReseau />*/}
    </Footer>
  );
}

export function LogoReseau() {
  return (
    <div className={"aff-flex jc-mil gap-3"}>
      <FontAwesomeIcon icon={faTwitter} size="2x" />

      <FontAwesomeIcon icon={faFacebook} size="2x" />

      <FontAwesomeIcon icon={faSnapchat} size="2x" />

      <FontAwesomeIcon icon={faLinkedin} size="2x" />

      <FontAwesomeIcon icon={faInstagram} size="2x" />

      <FontAwesomeIcon icon={faTiktok} size="2x" />
    </div>
  );
}
