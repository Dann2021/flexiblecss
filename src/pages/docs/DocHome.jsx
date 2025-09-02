import React, { useState } from "react";
import Conteneur from "../../composants/ui/Conteneur";
import Sidebar2 from "../../composants/ui/Sidebar2";
import Col from "../../composants/ui/Col";
import Bloc from "../../composants/ui/Bloc";
import { ChevronDown, Copy, MenuSquare, Plus, X } from "lucide-react";
import Ligne from "../../composants/ui/Ligne";
import { Accordeon, Bouton, BoutonCoulissant } from "../../composants";
import Lien from "../../composants/ui/Lien";
import { Outlet } from "react-router-dom";

export default function DocHome() {
  const [sidebarOuverte, setSidebarOuverte] = useState(false);
  //const [pageActive, setPageActive] = useState("intro"); // par défaut

  return (
    <div className="p-myn-3 conteneur">
      <Sidebar2 onToggle={setSidebarOuverte} />

      <Conteneur className={`decalage ${sidebarOuverte ? "flou-1" : ""}`}>
        <Outlet />
      </Conteneur>
    </div>
  );
}
