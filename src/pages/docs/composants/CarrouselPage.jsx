import React from "react"
import {Bloc, Carrousel, Col, Table} from "../../../composants/index.js";
import Tableau from "../../../utilitaire/Tableau.jsx";
import Image1 from "../../../assets/images/carousel/1.jpg";
import Image2 from "../../../assets/images/carousel/2.jpg";
import Image3 from "../../../assets/images/carousel/3.jpg";
import Image4 from "../../../assets/images/carousel/4.jpg";
import Image5 from "../../../assets/images/carousel/5.jpg";
import Image6 from "../../../assets/images/carousel/6.jpg";
import CodePlay from "../../../utilitaire/CodePlay.jsx";


/*
 *   images = [],
  titre,
  classNameImages,
  taille,
  children
 */
const dataProps = [
    {id: 1, classe:"images []", style: "Tableau des images"},

    {id: 2, classe:"titre", style: "Nom du carrousel"},

    {id: 3, classe:"taille", style: "Taille des images"},

    {id: 4, classe:"children", style: "Element enfant"},

]



export default function CarrouselPage(){




    return (
        <>
            <h1 className={"texte-5 texte-couleur-bleu-ciel fira"}>Carrousel</h1>

            <Col className={"mh-3 gap-5"}>
                <Bloc type={"myn"} nombre={11} className={"texte-couleur-gris mb-8"}>
                   <p>
                      Le <span className="texte-couleur-bleu-ciel te-noir">carrousel</span> est un composant UI
                      qui permet de faire défiler plusieurs contenus (images, cartes, textes, etc.)
                      de manière interactive et élégante.
                   </p>



                </Bloc>

                <h3>Propriétés</h3>
                <Tableau titre1={"Propriétés"} titre2={"Description"} data={dataProps} />
                {/*<Bloc type={"myn"} nombre={11} className={"texte-couleur-gris"}>
                    <ul>
                        <li className={"aff-flex ai-mil gap-2 fira mb-2"}>
                            <span className={"bg-bleu-claire ronde p-1"}>{dataProps[0].classe}</span>
                            : <p className={"taille-pt"}>Ceci est un tableau qui doit contenir toutes les images du carrousel</p>
                        </li>
                        <li className={"aff-flex ai-mil gap-2 fira mb-2"}>
                            <span className={"bg-bleu-claire ronde p-1"}>{dataProps[1].classe}</span>
                            : <p className={"taille-pt"}>Nom que l'on souhaite donné au carrousel</p>
                        </li>

                        <li className={"aff-flex ai-mil gap-2 fira mb-2"}>
                            <span className={"bg-bleu-claire ronde p-1"}>{dataProps[2].classe}</span>
                            : <p className={"taille-pt"}>Taille qu'on donne aux images</p>
                        </li>
                    </ul>

                </Bloc>*/}
               <h3>Exemple</h3>
               <Bloc type={"myn"} nombre={11}>
                <Carrousel images={[Image1, Image2, Image3, Image4, Image5, Image6]} taille={250} titre={"Carrousel"} />
               </Bloc>



            </Col>
        </>
    )
}