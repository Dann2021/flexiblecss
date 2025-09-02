import React from "react";

export default function PanelHeader({ titre, icone }) {
  return (
    <div className="aff-flex ai-mil jc-deb gap-3">
      {icone} <p className="taille-myn">{titre}</p>
    </div>
  );
}
