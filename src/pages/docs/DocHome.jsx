import { useState } from "react";

import Sidebar2 from "../../composants/ui/Sidebar2";
import { Outlet } from "react-router-dom";
import { Bouton, Breadcrumbs, Conteneur } from "../../composants";
import { Sidebar } from "lucide-react";
import { useSideContexte } from "../../contexte/SideContexte";


export default function DocHome() {
  const [sidebarOuverte, setSidebarOuverte] = useState(false);
  //const [pageActive, setPageActive] = useState("intro"); // par défaut

 

  // import du contexte 
  const {data} = useSideContexte()
  return (
    <div className="py- conteneu">
      <div className="aff-flex jc-sb  gap-8 mh-5">
        <Sidebar2
          ouvert={sidebarOuverte}
          onClose={() => setSidebarOuverte(false)}
          onSelect={() => setSidebarOuverte(false)}
        />
        <div
          className={`bloc-12 bloc-myn-12  ${sidebarOuverte ? "flou-1" : ""}`}
        >
          <Bouton
             onClick={() => setSidebarOuverte(true)}
            theme="claire"
            taille={"min"}
            className={"ronde-1 mb-2 aff-myn-none"}
          >
            <Sidebar size={20} />
          </Bouton>
          <Breadcrumbs />
          <Outlet />
        </div>

        <div className="bloc-myn-3 bg-gris-clair ronde-1 aff-none aff-myn-block h-4 over-auto p-2 sticky haut-0">
          <h3>Sur cette page</h3>
          <hr className="mh-1 couleur-gris-claire" />
          {!data ? <h3>Rien pour l'instant</h3> :
           <ul className="mh-3 taille-pt mg-5">

           {data.map((element) => <li key={element.id} className="te-noir couleur-gris">{element.label}</li> )}
          </ul>
           }
         
        </div>
      </div>
    </div>
  );
}
