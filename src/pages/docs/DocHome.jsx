import React, { useState } from "react";
import Conteneur from "../../composants/ui/Conteneur";
import Sidebar2 from "../../composants/ui/Sidebar2";
import { Outlet } from "react-router-dom";
import {HomeIcon} from "lucide-react";
import {Breadcrumbs} from "../../composants/index.js";

export default function DocHome() {
  const [sidebarOuverte, setSidebarOuverte] = useState(false);
  //const [pageActive, setPageActive] = useState("intro"); // par défaut


  return (
    <div className="p-myn-3 conteneur">
      <Sidebar2 onToggle={setSidebarOuverte} />

      <Conteneur className={`decalage ${sidebarOuverte ? "flou-1" : ""}`}>


      <Breadcrumbs/>
        <Outlet />
      </Conteneur>
    </div>
  );
}
