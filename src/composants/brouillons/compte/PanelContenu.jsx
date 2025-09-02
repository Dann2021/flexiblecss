import React, { Suspense } from "react";
import Spinner from "../Spinner";
import { AnimatePresence, motion } from "framer-motion";

export default function PanelContenu({ data, setOngletActif, type }) {
  return (
    <ul className="lst-aucun mh-2">
      {data && data.length > 1 ? (
        data.map((element) => (
          
          <li
            key={element.id}
            className="aff-flex ai-mil mh-1 gap-2 taille-pt survol curseur-pointeur"
            onClick={() => setOngletActif(element.id_element)}
          >
            {" "}
            {element.icone} {element.nom}{" "}
          </li>
        ))
      ) : (
        <Spinner taille={20} type={1} />
      )}
      {/*data.map((element) => <li key={element.id} className='aff-flex ai-mil mh-1 gap-2 taille-pt survol curseur-pointeur'> {element.icone} {element.nom} </li> ) */}
    </ul>
  );
}
