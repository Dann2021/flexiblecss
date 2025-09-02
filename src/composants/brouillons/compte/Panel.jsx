import React from "react";

export default function Panel({ children, style }) {
  return (
    <div className="bloc-12 bloc-myn-3 bg-gris-claire p-2 ronde" style={style}>
      {children}
    </div>
  );
}
