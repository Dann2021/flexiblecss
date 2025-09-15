import React from "react";
import { Bloc } from "../composants";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

export default function CodeDisplay({
  nombre,
  children,
  className,
  langage,
  theme,
  code,
}) {
  return (
    <div className="bord- bord-dashe bord-gris-clair ronde bloc-12 bloc-myn-11">
      <Bloc type={"myn"} nombre={nombre} className={className}>
        {children}
      </Bloc>
      <SyntaxHighlighter language={langage} style={theme} className="bloc-12 ronde">
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
