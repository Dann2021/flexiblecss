import React from "react";

export default function TitreDoc({ icone, titre }) {
  return (
    <div className="aff-flex ai-mil gap-2 mb-3">
      {icone}
      <h1 className="couleur-bleu-ciel texte-5 fira">{titre}</h1>
    </div>
  );
}
