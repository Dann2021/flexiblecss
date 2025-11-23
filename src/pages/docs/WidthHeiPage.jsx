import React, { useEffect } from "react";
import TitreDoc from "../../composants/docs_composant/TitreDoc";
import { MdWidthFull } from "react-icons/md";

import { Col, Bloc } from "../../composants";
import Tableau from "../../utilitaire/Tableau";
import { useSideContexte } from "../../contexte/SideContexte";

const data = [
  { id: 1, classe: "w-[valeur]", style: "width : [valeur]rem" },
  { id: 1, classe: "w-1", style: "width : 2rem" },
  { id: 1, classe: "w-2", style: "width : 4rem" },
  { id: 1, classe: "w-3", style: "width : 8rem" },
  { id: 1, classe: "w-4", style: "width : 16rem" },
  { id: 1, classe: "w-5", style: "width : 32rem" },
  { id: 1, classe: "w-6", style: "width : 64rem" },
  { id: 1, classe: "w-full", style: "width : 100%" },
  { id: 1, classe: "w-ecran", style: "width : 100vh" },
];


const dataSide = [
  {id: 1, label: "Dimensions"},
  {id: 2, label: "Exemple"},
  {id: 3, label: "Avec width"},
  {id: 4, label: "Avec height"},

]
export default function WidthHeiPage() {


  
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
        icone={<MdWidthFull size={30} className="couleur-bleu-ciel" />}
        titre={"Dimensions"}
      />

      <Col className={"gap-4 p-1"}>
        <Bloc type={"myn"} nombre={11}>
          <p className="couleur-gris">
            Cette classe permet de déterminer ou de fixer la largeur{" "}
            <span className="couleur-bleu-ciel fira">`width`</span> ou la
            hauteur <span className="couleur-bleu-ciel fira">`height`</span>{" "}
            d'un élément
          </p>

          <ul className="mg-3 mh-2 mb-2">
            <li>
              <span className="couleur-bleu-ciel te-noir fira">
                .w-[valeur]
              </span>{" "}
              permet de fixer une largeur
            </li>
            <li>
              <span className="couleur-bleu-ciel te-noir fira">
                .h-[valeur]
              </span>{" "}
              permet de fixer un hauteur
            </li>
          </ul>
        </Bloc>

        <Tableau titre1={"classes"} titre2={"styles"} data={data} />

        <h2>Exemple</h2>

        <h3>
          Avec <span className="couleur-bleu-ciel fira">width</span>
        </h3>
        <Bloc
          type={"myn"}
          nombre={11}
          className={"bord-1 bord-dashed p-2 bord-gris ronde mb-3"}
        >
          <div className="w-1 bloc-1 bg-gris-claire ronde p-1  mb-1">
            <span className="texte-1  te-noir">.w-1</span>
          </div>

          <div className="w-2 bloc-2 bg-gris-claire ronde p-1 mb-1">
            <span className="taille-pt  te-noir">.w-2</span>
          </div>
          <div className="w-3 bloc-3 bg-gris-claire ronde p-1 mb-1">
            <span className="taille-pt  te-noir">.w-3</span>
          </div>
          <div className="w-4 bloc-4 bg-gris-claire ronde p-1 mb-1" p-1 mb-1>
            <span className="taille-pt  te-noir">.w-4</span>
          </div>
          <div className="w-5 bloc-5 bg-gris-claire ronde p-1 mb-1">
            <span className="taille-pt  te-noir">.w-5</span>
          </div>
         
          
        </Bloc>

        <h3>
          Avec <span className="couleur-bleu-ciel fira">height</span>
        </h3>
        <Bloc
          type={"myn"}
          nombre={11}
          className={
            "bord-1 aff-flex jc-sb fw-wrap gap-2 bord-dashed p-2 bord-gris ronde mb-3"
          }
        >
          <div className="h-1 bg-gris-claire ronde p-1  mb-1">
            <span className="texte-1  te-noir">.h-1</span>
          </div>

          <div className="h-2 bg-gris-claire ronde p-1 mb-1">
            <span className="taille-pt  te-noir">.h-2</span>
          </div>
          <div className="h-3 bg-gris-claire ronde p-1 mb-1">
            <span className="taille-pt  te-noir">.h-3</span>
          </div>
          <div className="h-4 bg-gris-claire ronde p-1 mb-1" p-1 mb-1>
            <span className="taille-pt  te-noir">.h-4</span>
          </div>
          <div className="h-5 bg-gris-claire ronde p-1 mb-1">
            <span className="taille-pt  te-noir">.h-5</span>
          </div>
         
         
        </Bloc>
      </Col>
    </>
  );
}
