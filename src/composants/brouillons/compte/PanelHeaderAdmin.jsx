import React from "react";
import Spinner from "../../Spinner.jsx";
import { LogOutIcon } from "lucide-react";
import Icons from "../../../constantes/Icone.js";
import Bouton from "../../ui/Bouton.jsx";

export default function PanelHeaderAdmin({
  nom,
  email,
  chargement,
  deconnecte,
}) {
  return (
    <div className="aff-flex jc-sb gap-3 relative">
      <div className="aff-flex jc-mil gap-2">
        <Icons.Avatar height={30} width={30} className="image" />
        <div className="aff-flex gap-1 fd-col">
          <p className="taille-pt">{nom}</p>
          <p className="taille-pt">{email}</p>
        </div>
      </div>

      {/*<button className="absolue droite-1 ">
            {chargement ? <Spinner  type={1} taille={20}   /> :   <LogOutIcon size={20}  className="curseur-pointeur survol " onClick={deconnecte} />}
        </button>*/}
      <Bouton
        variant
        type={"danger"}
        className={"absolue droite-1 bouton-min curseur-pointeur"}
        onClick={deconnecte}
      >
        {chargement ? (
          <Spinner type={1} taille={20} />
        ) : (
          <LogOutIcon size={15} className="curseur-pointeur survol " />
        )}
      </Bouton>
    </div>
  );
}
