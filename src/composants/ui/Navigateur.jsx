import { AlertCircle, Menu, Sun, User2, UserCircle2Icon } from "lucide-react";
import "../../styles/navigateur.css";
import Lien from "./Lien";
import TexteDegrade from "./TexteDegrade";

import { useState } from "react";
import Couleurs from "../../constantes/Couleurs";
import Dropdown from "./Dropdown";
import { FaGithub } from "react-icons/fa6";
import Bouton from "./Bouton";

export default function Navigateur({ logo, texte }) {
  const [activeur, setActiveur] = useState(false);

  const ouverture = () => setActiveur(!activeur);

  return (
    <nav
      className={"conteneur sticky haut-0 navigateur theme-clair z-50"}
      style={{ background: "#ffffff" }}
    >
      <div className="elements">
        <div className="logo">
          <Lien chemin={"/"}>
            {logo && <img src={logo} alt="" className="logo-image" />}
            {texte && (
              <TexteDegrade
                className="playwrite"
                couleurs={`${Couleurs.cyan}, ${Couleurs.indigo}`}
              >
                {texte}
              </TexteDegrade>
            )}
          </Lien>
        </div>
        <div className="actions-btn">
          {/*<div className="bt-theme" onClick={changerTheme}>
                  <Sun size={25} className="survol  curseur-pointeur"   stroke="currentColor" fill={theme === 'claire' ? 'currentColor' : 'none'} style={{transition: "all 0.3s ease"}}/>
                  
                       
                </div>*/}
          <div className="bt-user">
            {/*<Sun size={30} />*/}
            <AlertCircle size={30} color="#FF8C00" />
          </div>

          <div className="aff-none aff-myn-block absolue droite-3 haut-2 bas-2">
            <Bouton taille={"min"} theme="claire" className={"ronde-1"}>
              <FaGithub />
            </Bouton>
          </div>

          <div className="bt-hamburger" onClick={ouverture}>
            <Menu size={30} />
          </div>
        </div>
      </div>

      <div className={`menu-conteneur ${activeur ? "activeur" : ""}`}>
        <ul className="menu">
          <li className="effet">
            <Lien chemin={"/"} className={"taille-pt couleur-gris nav-item"}>
              Home
            </Lien>
          </li>
          <li className="effet">
            <Lien
              chemin={"/docs"}
              className={"taille-pt couleur-gris nav-item"}
            >
              Docs
            </Lien>
          </li>
           <li className="effet">
            <Lien
              chemin={"/docs"}
              className={"taille-pt couleur-gris nav-item"}
            >
              Vitrines
            </Lien>
          </li>
          {/*<Dropdown
            contenuClassName={""}
            className={"effet"}
            labelClassName={"couleur-gris"}
            label={"Labo"}
          >
            <li className="effet">
              <Lien
                chemin={"/test"}
                className={"taille-pt couleur-gris nav-item"}
              >
                Test
              </Lien>
            </li>
          </Dropdown>*/}
        </ul>
      </div>
    </nav>
  );
}
