import { Columns } from "lucide-react";

import { Bloc, Col, Ligne } from "../../composants";
import Codebloc from "../../utilitaire/Codebloc";
import Tableau from "../../utilitaire/Tableau";
import TitreDoc from "../../composants/docs_composant/TitreDoc.jsx";
import { useSideContexte } from "../../contexte/SideContexte.jsx";
import { useEffect } from "react";

const dataTable = [
  { id: 1, classe: ".ligne", style: "display : flex" },
  { id: 2, classe: ".col", style: "flex-direction : coloumn" },
];

const dataSide = [
  {id:1, label: "Ligne & Col"},
  {id:2, label: "👉  ligne"},
  {id:3, label: "👉  col"},

]
export default function LigneColPage() {
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
  
  const ligneCode = `
    <div className="ligne jc-sb">
        <div className="bloc-12 bloc-pt-2 bg-gris-claire ronde p-3 ">
            <h1 className="ta-mil">1</h1>
        </div>

        <div className="bloc-12 bloc-pt-2 bg-gris-claire ronde p-3">
            <h1 className="ta-mil">2</h1>
        </div>

        <div className="bloc-12 bloc-pt-2 bg-gris-claire ronde p-3">
            <h1 className="ta-mil">3</h1>
        </div>
    </div>
    `;
  return (
    <>
  
      <TitreDoc
        icone={<Columns size={30} className="couleur-bleu-ciel" />}
        titre={"Ligne & Col"}
      />

      <Col className={"gap-5"}>
        <Bloc type={"myn"} nombre={11} className={"couleur-gris mb-6"}>
          <p>
            Les classes{" "}
            <span className="couleur-bleu-ciel te-noir fira">
              .ligne et .col
            </span>{" "}
            sont des classes utilitaires{" "}
            <span className="couleur-bleu-lagon te-noir">responsive</span> de{" "}
            <span className="couleur-bleu-ciel fira te-noir">FlexibleCss</span>{" "}
            qui permettent de contrôler la disposition des éléments qu'ils
            contiennent.
          </p>
          <ul className="mg-3 mh-2 mb-2">
            <li>
              <span className="couleur-bleu-ciel te-noir fira">ligne</span>{" "}
              permet une disposition en ligne
            </li>
            <li>
              <span className="couleur-bleu-ciel te-noir fira">col</span> permet
              une disposition en colonne
            </li>
          </ul>
          <p>
            {" "}
            Ces deux classes respectent le principe du{" "}
            <span className="bg-gris-claire px-1 te-noir couleur-bleu-ciel">
              responsive
            </span>{" "}
            c'est à dire que tous les éléments qu'ils contiennent changent ou
            adaptent leurs dispositions en fonction de la taille d'écran de
            l'appareil.
          </p>
        </Bloc>
        <Tableau titre1={"Classes"} titre2={"Styles"} data={dataTable} />

        <h2 className={"couleur-gris"}>Utilisation</h2>

        <Bloc type={"myn"} nombre={11} className={"couleur-gris"}>
          <h3 className="texte-3 mb-2">
            👉 <span className="couleur-bleu-ciel fira">ligne</span>
          </h3>
          <p>
            Les éléments ci-dessous se mettent en ligne sur de grands écrans et
            en colonne sur des petits écrans (principe du responsive).
          </p>

          <Ligne className={"jc-sb  p-2 my-5"}>
            <div className="bloc-12 bloc-pt-2 bg-gris-claire ronde p-3 ">
              <h1 className="ta-mil">1</h1>
            </div>
            <div className="bloc-12 bloc-pt-2 bg-gris-claire ronde p-3">
              <h1 className="ta-mil">2</h1>
            </div>
            <div className="bloc-12 bloc-pt-2 bg-gris-claire ronde p-3">
              <h1 className="ta-mil">3</h1>
            </div>
          </Ligne>

        

          {/*<CodeEditeur code={ligneCode} />*/}

            <p>La particularité de la classe <span className="couleur-bleu-ciel">.ligne</span> est que celle-ci admet un comportement <span className="couleur-bleu-ciel te-noir">responsive</span> qui changera la disposition des blocs en fonction de la taille d'écran de l'appareil.</p> 
        </Bloc>
        <Codebloc
          langage={"jsx"}
          className={"p-2 bloc-12 bloc-myn-11 taille-pt mh-8"}
        >
          {ligneCode}
        </Codebloc>

        <Bloc type={"myn"} nombre={11} className={"couleur-gris"}>
          <h3 className="texte-3 mh-3 mb-2">
            👉 <span className="couleur-bleu-ciel fira">col</span>
          </h3>

          <p>
            L'utilisation de cette classe permet de mettre en place une disposition
             verticale des éléments contrairement à  la classe {" "}
            <span className="couleur-bleu-ciel te-noir">.ligne</span>.
          </p>

           <Col className={"jc-sb  p-2 gap-3 ai-mil"}>
            <div className="bloc-12 bloc-pt-2 box-3 bg-gris-claire ronde p-3 ">
              <h1 className="ta-mil">1</h1>
            </div>
            <div className="bloc-12 bloc-pt-2 box-3 bg-gris-claire ronde p-3">
              <h1 className="ta-mil">2</h1>
            </div>
            <div className="bloc-12 bloc-pt-2 box-3 bg-gris-claire ronde p-3">
              <h1 className="ta-mil">3</h1>
            </div>
          </Col>
        </Bloc>
      </Col>
    </>
  );
}
// atomDark, dracula, vscDarkPlus
