import React, { useEffect } from "react";
import TitreDoc from "../../composants/docs_composant/TitreDoc";
import { MdMargin } from "react-icons/md";
import { Col, Bloc } from "../../composants";
import Tableau from "../../utilitaire/Tableau";
import { label } from "motion/react-client";
import { useSideContexte } from "../../contexte/SideContexte";

const data = [
  { id: 1, classe: ".m-[valeur]", style: "margin: [valeur]" },
  { id: 2, classe: ".mh-[valeur]", style: "margin-top:  [valeur] " },
  { id: 3, classe: ".mg-[valeur]", style: "margin-left:  [valeur] " },
  { id: 4, classe: ".md-[valeur]", style: "margin-right:  [valeur] " },
  { id: 5, classe: ".mb-[valeur]", style: "margin-bottom:  [valeur] " },
];

const dataSide = [
  {id : 1, label : "Marges"},
  {id: 2, label: "Marges spéciales"},
  {id: 3, label: "Exemple 1"},
  {id: 4, label: "Exemple 2"},
 
]

export default function MargePage() {

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
  return (
    <>
      <TitreDoc
        icone={<MdMargin className="couleur-bleu-ciel" size={30} />}
        titre={dataSide[0].label}
      />
      <Col className={"gap-5"}>
        <Bloc type={"myn"} nombre={11} className={"couleur-gris"}>
          <p>
            Les marges représentent l’espace extérieur d’un élément. Elles
            servent à créer de la distance entre celui-ci et les éléments
            voisins, afin d’aérer et organiser la mise en page.
          </p>
          <p className="my-1">
            Il existe différents types de marges, les marges à l'extérieur d'un
            élément (
            <span className="couleur-bleu-ciel fira te-noir">margin</span>) et
            celle à l'intérieur d'un élément (
            <span className="couleur-bleu-ciel fira te-noir">padding</span>).
          </p>
          <ul className="fira  mh-2 mg-2">
            <li>
              m <span className="couleur-bleu-ciel te-noir">[p]</span> : marge
              générale
            </li>
            <li>
              mh <span className="couleur-bleu-ciel te-noir">[ph]</span> : marge
              haute
            </li>
            <li>
              mg <span className="couleur-bleu-ciel te-noir">[pg]</span> : marge
              gauche
            </li>
            <li>
              md <span className="couleur-bleu-ciel te-noir">[pd]</span> : marge
              droite
            </li>
            <li>
              mb <span className="couleur-bleu-ciel te-noir">[pb]</span> : marge
              bas
            </li>
          </ul>
        </Bloc>
        <Tableau
          className="mb-3"
          titre1={"classes"}
          titre2={"styles"}
          data={data}
        />
        <h3>{dataSide[1].label}</h3>
        <Bloc type={"myn"} nombre={11} className={"couleur-gris my-5"}>
          <p>
            A l'instar des marges traditionnelles, il existe des marges que nous
            pouvons qualifiés de{" "}
            <span className="couleur-bleu-ciel te-noir">spéciale</span> car
            celles-ci s'appliquent sur les principaux axes{" "}
            <span className="couleur-bleu-ciel te-noir">
              (horizontal, vertical)
            </span>
            .
          </p>

          <ul className="fira  mh-2 mg-2">
            <li>
              mx <span className="couleur-bleu-ciel te-noir">[px]</span> : marge
              sur l'axe horizontal
            </li>
            <li>
              my <span className="couleur-bleu-ciel te-noir">[py]</span> : marge
              sur l'axe vertical
            </li>
          </ul>
        </Bloc>
        <h4>{dataSide[2].label}</h4>
        <Bloc
          type={"myn"}
          nombre={11}
          className={
            "bord-4 bord-dashed bord-gris-claire ronde ligne gap-4 jc-mil ai-mil p-4 fw-wrap mb-3 fira"
          }
        >
          <div className="box-1 bg-rose ronde mh-5 p-">
            <div className="w-full h-1 bg-bleu-claire bord-1 bord-dashed ronde"></div>
            <p className="p-1 te-noir taille-pt">mh-3</p>
          </div>

          <div className="box-1 bg-rose ronde my-2 mg-3 aff-flex">
            <div className="w-1 h-full bg-bleu-claire bord-1 bord-dashed ronde"></div>
            <p className="p-1 te-noir taille-pt">mg-3</p>
          </div>
          <div className="box-1 bg-rose ronde aff-flex fd-col jc-fin  mb-5">
            <p className="p-1 te-noir taille-pt">mb-5</p>
            <div className="w-full h-1  bg-bleu-claire bord-1 bord-dashed ronde"></div>
          </div>
          <div className="box-1 bg-rose ronde my-2 md-3 aff-flex  jc-sb">
            <p className="p-1 te-noir taille-pt">md-3</p>
            <div className="w-1 h-full bg-bleu-claire bord-1 bord-dashed ronde"></div>
          </div>

          <div className="box-1 bg-rose ronde my-3">
            <div className="w-full h-1 bg-bleu-claire bord-1 bord-dashed ronde"></div>
            <p className="p-1 te-noir ta-mil taille-pt">my-3</p>
            <div className="w-full h-1 bg-bleu-claire bord-1 bord-dashed ronde"></div>
          </div>

          <div className="box-1 bg-rose ronde mx-3 aff-flex">
            <div className="w-1 h-full bg-bleu-claire bord-1 bord-dashed ronde"></div>
            <p className="p-1 te-noir ta-mil taille-pt">mx-3</p>
            <div className="w-1 h-full bg-bleu-claire bord-1 bord-dashed ronde"></div>
          </div>
        </Bloc>

        <Bloc type={"myn"} nombre={11}>
          <p>
            L'exemple ci-dessus nous montre l'utilisation des marges extérieurs
            à travers la classe{" "}
            <span className="couleur-bleu-ciel fira">.m-[valeur]</span>. 
            
            Dans un second exemple, nous présenterons les marges intérieurs à
            travers la classe{" "}
            <span className="couleur-bleu-ciel fira">.p-[valeur]</span>
          </p>
        </Bloc>

        <h4>{dataSide[3].label}</h4>
      </Col>
    </>
  );
}
