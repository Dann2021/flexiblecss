import React from "react";
import Col from "../../composants/ui/Col";
import { Bloc } from "../../composants";
import Codebloc from "../../utilitaire/Codebloc";
import Icons from "../../constantes/Icone";
import { SiHtml5, SiReact } from "react-icons/si";

export default function StructPage() {
  const t = "├──";
  const e = "└──";
  const b = "│";
  const s = "/";
  const proj = `
# Structure HTML

projet${s}
${t} style${s}
${b}   ${t} flexible.css
${b}   ${e} favicon.ico
${t} script${s}
${b}   ${e} flexible.js
${e} index.html
`;
  const projectTree = `
# Structure React Js 

my-app/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   └── Footer.jsx
${b}   ${t} style${s}
${b}   ${b}   ${e} flexible.css
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── About.jsx
│   ├── App.jsx
│   └── main.jsx
├── package.json
└── README.md
  `;
  return (
    <div>
      <h1 className="texte-5">
        Structure de <span className="texte-couleur-bleu-ciel">Flexible</span>
      </h1>
      <Col className={"gap-3 mh-2"}>
        <Bloc type={"myn"} nombre={11} className={"my-2"}>
          <p className="texte-couleur-gris">
            Dans cette page vous verrez comment tous les projets qui utilisent{" "}
            <span className="texte-couleur-bleu-ciel te-noir">
              Flexible CSS
            </span>{" "}
            doivent se présenter. Pour cela nous partiront de la structure la
            plus simple à la plus complexe
          </p>
        </Bloc>

        <div className="aff-flex ai-mil gap-2">
          <h2 className="texte-4 texte-couleur-bleu-lavande tt-maj">
            
            html
          </h2>
          <SiHtml5 size={40} color="#E34F26" />
        </div>

        <Bloc type={"myn"} nombre={11} className={"my-2"}>
          <p className="texte-couleur-gris">
            Un projet html utilsant{" "}
            <span className="texte-couleur-bleu-ciel te-noir">
              Flexible CSS
            </span>{" "}
            doit respecter cette structure.
          </p>
        </Bloc>

        <Codebloc
          className={"ronde p-2 bloc-myn-11 taille-pt"}
          langage={"bash"}
        >
          {proj}
        </Codebloc>

        <div className="aff-flex ai-mil gap-2 mh-2">
          <h2 className="texte-4 texte-couleur-bleu-lavande">
          React Js
          </h2>{" "}
          <SiReact size={40} color="#61DBFB" />
        </div>

        <Bloc type={"myn"} nombre={11} className={"my-2"}>
          <p className="texte-couleur-gris">
            Un projet reatc js utilsant{" "}
            <span className="texte-couleur-bleu-ciel te-noir">
              Flexible CSS
            </span>{" "}
            doit respecter cette structure.
          </p>
        </Bloc>

        <Codebloc
          className={"p-2 bloc-myn-11 taille-pt"}
          langage={"bash"}
        >
          {projectTree}
        </Codebloc>
      </Col>
    </div>
  );
}
