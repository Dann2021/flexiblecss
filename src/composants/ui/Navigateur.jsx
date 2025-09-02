import { AlertCircle, Menu, Sun, User2, UserCircle2Icon } from "lucide-react";
import "../../styles/navigateur.css";
import Lien from "./Lien";
import TexteDegrade from "./TexteDegrade";

import { useState } from "react";
import Couleurs from "../../constantes/Couleurs";

export default function Navigateur({ logo, texte }) {
  const [activeur, setActiveur] = useState(false);

  const ouverture = () => setActiveur(!activeur);

  return (
    <nav className={"conteneur navigateur theme-claire"}>
      <div className="elements">
        <div className="logo">
          <Lien chemin={"/"}>
            {logo && <img src={logo} alt="" className="logo-image" />}
            {texte && (
              <TexteDegrade
                texte={texte}
                className="playwrite"
                couleurs={`${Couleurs.cyan}, ${Couleurs.indigo}`}
              />
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

          <div className="bt-hamburger" onClick={ouverture}>
            <Menu size={30} />
          </div>
        </div>
      </div>

      <div className={`menu-conteneur ${activeur ? "activeur" : ""}`}>
        <ul className="menu">
          <li className="effet">
            <Lien
              chemin={"/"}
              className={"taille-pt texte-couleur-gris nav-item"}
            >
              Home
            </Lien>
          </li>
          <li className="effet">
            <Lien
              chemin={"/docs"}
              className={"taille-pt texte-couleur-gris nav-item"}
            >
              Documentation
            </Lien>
          </li>
        </ul>
      </div>
    </nav>
  );
}
