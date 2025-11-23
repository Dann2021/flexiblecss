import { useEffect } from "react";
import { Bloc, Card, Col, Ligne } from "../../composants";
import { useSideContexte } from "../../contexte/SideContexte";
import Codebloc from "../../utilitaire/Codebloc";
import { SiHtml5, SiNextdotjs, SiNextui, SiReact } from "react-icons/si";

const dataSide = [
  {id:1, label: "Structure de flexible"},
  {id:2, label: "Html"},
  {id:3, label: "React Js"},
]
export default function StructPage() {


     // update du contexte
        const {setData} = useSideContexte()
        useEffect(()=>{
      
          // composant monté
          setData(dataSide)
      
          // on vide le contexte
          return () => {
            setData(null)
          }
        }, [])
  
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
      <h1 className="texte-5 inter">
        Structure de <span className="couleur-bleu-ciel fira">Flexible</span>
      </h1>
      <Col className={"gap-3 mh-2"}>
        <Bloc type={"myn"} nombre={11} className={"my-2"}>
          <p className="couleur-gris">
            Dans cette page vous verrez comment tous les projets qui utilisent{" "}
            <span className="couleur-bleu-ciel te-noir">Flexible CSS</span>{" "}
            doivent se présenter. Pour cela nous partiront de la structure la
            plus simple à la plus complexe
          </p>
        </Bloc>

        <div className="aff-flex ai-mil gap-2">
          <h2 className="texte-4 couleur-bleu-lavande tt-maj">html</h2>
          <SiHtml5 size={40} color="#E34F26" />
        </div>

        <Ligne className={"my-1"}>

          <Card className={"bloc-myn-3 ronde p-2"} style={{ border: "1px solid #ccc" }}>
            <Card.Header>
              <SiHtml5 size={40} color="#E34F26" />

            </Card.Header>
             
             <Card.Corps className={"mh-1"}>
              <p className="fira">Html</p>
              <p className="inter">utilisez cela avec html</p>
             </Card.Corps>
          </Card>

            <Card className={"bloc-myn-3 ronde p-2"} style={{ border: "1px solid #ccc" }}>
            <Card.Header>
              <SiNextdotjs size={40} color="#333" />

            </Card.Header>
             
             <Card.Corps className={"mh-1"}>
              <p className="fira">Html</p>
              <p className="inter">utilisez cela avec html</p>
             </Card.Corps>
          </Card>
        </Ligne>

        <Bloc type={"myn"} nombre={11} className={"my-2"}>
          <p className="couleur-gris">
            Un projet html utilsant{" "}
            <span className="couleur-bleu-ciel te-noir">Flexible CSS</span> doit
            respecter cette structure.
          </p>
        </Bloc>

        <Codebloc
          className={"ronde p-2 bloc-myn-11 taille-pt"}
          langage={"bash"}
        >
          {proj}
        </Codebloc>

        <div className="aff-flex ai-mil gap-2 mh-2">
          <h2 className="texte-4 couleur-bleu-lavande">React Js</h2>{" "}
          <SiReact size={40} color="#61DBFB" />
        </div>

        <Bloc type={"myn"} nombre={11} className={"my-2"}>
          <p className="couleur-gris">
            Un projet reatc js utilsant{" "}
            <span className="couleur-bleu-ciel te-noir">Flexible CSS</span> doit
            respecter cette structure.
          </p>
        </Bloc>

        <Codebloc className={"p-2 bloc-myn-11 taille-pt"} langage={"bash"}>
          {projectTree}
        </Codebloc>
      </Col>
    </div>
  );
}
