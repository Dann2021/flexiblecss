import React from "react";
import TitreDoc from "../../../composants/docs_composant/TitreDoc";
import { BiCard } from "react-icons/bi";
import { Col, Bloc, Card, Bouton, Image } from "../../../composants";
import Icons from "../../../constantes/Icone";
import ImageTest from "../../../assets/images/flex1.png";
//import ImageShoe from "../../../assets/images/shoes-1.webp";
import ImageShoe from "../../../assets/images/5.png";
import { Star } from "lucide-react";
import { BsBag } from "react-icons/bs";
import { GiBuyCard } from "react-icons/gi";
import { MdMoney } from "react-icons/md";

export default function CardPage() {
  const cardStyle = {
    background: "linear-gradient(145deg, #ffffff, #f3f6f9)",
    borderRadius: "16px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
    padding: "1.25rem",
    maxWidth: "380px",
    margin: "1.5rem auto",
    transition: "transform 0.25s ease, box-shadow 0.25s ease",
    cursor: "pointer",
  };

  const cardStyle2 = {
    background: "linear-gradient(145deg, #ffffff, #f3f6f9)",
    borderRadius: "16px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
    transition: "transform 0.25s ease, box-shadow 0.25s ease",
    cursor: "pointer",
  };

  const headerStyle = {
    borderBottom: "1px solid rgba(0,0,0,0.05)",
    paddingBottom: "0.75rem",
    marginBottom: "1rem",
    fontWeight: "700",
    fontSize: "1.2rem",
    color: "#222",
  };

  const corpsStyle = {
    marginBottom: "1rem",
    lineHeight: "1.6",
    fontSize: "0.95rem",
    color: "#444",
  };

  const basStyle = {
    borderTop: "1px solid rgba(0,0,0,0.05)",
    paddingTop: "0.75rem",
    textAlign: "right",
  };

  return (
    <>
      <TitreDoc
        titre={"Card"}
        icone={<BiCard size={30} className="couleur-bleu-ciel" />}
      />

      <Col className={"mh-3 gap-6"}>
        <Bloc type={"myn"} nombre={11} className={"couleur-gris mb-5"}>
          <p>
            <span className="couleur-bleu-ciel te-noir">Card</span> est un
            élément conteneur dans lequel on peut mettre du texte, photos ou
            boutons.
          </p>
        </Bloc>

        <h2 className="texte-3">Usage</h2>

        <Bloc type={"myn"} nombre={11} className={"couleur-gris mb-5"}>
          <p>
            Le composant <span className="couleur-bleu-ciel te-noir">Card</span>{" "}
            est composé de quatre parties principales :
          </p>

          <ul className="mg-3 mh-5">
            <li className="mb-1 te-noir">
              <span>Card :</span> élément principal servant de conteneur de la
              carte.
            </li>

            <li className="mb-1 te-noir">
              <span>Card.Header :</span> zone d’en-tête, souvent utilisée pour
              un titre ou une image.
            </li>

            <li className="mb-1 te-noir">
              <span>Card.Corps :</span> partie centrale qui accueille le contenu
              principal de la carte.
            </li>

            <li className="mb-1 te-noir">
              <span>Card.Bas :</span> zone de bas de carte réservée aux actions
              ou infos.
            </li>
          </ul>
        </Bloc>

        <h2 className="fira texte-3">Exemple</h2>

        <h4 className="fira">Avec texte</h4>
        <Bloc
          type={"myn"}
          nombre={11}
          className={
            "col ai-mil mh-1 mb-3 bord-3 p-2 bord-dashed bord-gris-claire ronde-1"
          }
        >
          <Card className={"bloc-myn-7 mh-2"} style={cardStyle}>
            <Card.Header style={headerStyle}>
              🌟 Belle carte moderne
            </Card.Header>
            <Card.Corps style={corpsStyle}>
              Ceci est un exemple de carte avec un style moderne, un fond
              dégradé léger, des coins arrondis et une belle ombre douce.
            </Card.Corps>

            <Card.Bas style={basStyle}>
              <Bouton
                onClick={() => alert("Vous avez appuyer sur le bouton")}
                theme="sombre"
                variant
                taille={"min"}
                className={"ronde-1"}
              >
                Clique-moi
              </Bouton>
            </Card.Bas>
          </Card>
        </Bloc>

        <h4 className="fira">Avec image</h4>
        <Bloc
          type={"myn"}
          nombre={11}
          className={
            "col ai-mil mh-1 mb-3 bord-3 p-2 bord-dashed bord-gris-claire ronde-1"
          }
        >
          <Card className={"bloc-myn-7"} style={cardStyle}>
            <Card.Corps style={corpsStyle}>
              <Image
                alt={"image test"}
                source={ImageTest}
                className={"ronde"}
              />
            </Card.Corps>
            <Card.Bas style={basStyle}>
              <Bouton
                onClick={() => alert("Vous avez appuyer sur le bouton")}
                theme="primaire"
                variant
                className={"ronde-1"}
                taille={"me"}
              >
                Clique-moi
              </Bouton>
            </Card.Bas>
          </Card>
        </Bloc>

        <h4 className="fira">image, texte et bouton</h4>
        <Bloc
          type={"myn"}
          nombre={11}
          className={
            "col ai-mil mh-1 bord-3 p-2 bord-dashed bord-gris-claire ronde-1"
          }
        >
          <Card className={"bloc-myn-12"} style={cardStyle2}>
            <Card.Corps className={"ligne jc-sb  p-1 "}>
              <Image
                alt={"image shoe"}
                source={ImageShoe}
                className={
                  "survol ratio-auto image-cover bg-rose-saumon bloc-pt-5 bloc-myn-5 bloc-12 ronde-1"
                }
              />

              <div className="aff-flex fd-col gap-4">
                <div className="aff-flex jc-sb gap-2 mh-1">
                  <p className="te-gras texte-3 ubuntu">Nike Adapt BB 2.0</p>
                  <Bouton taille={"min"} variant className={"ronde-1"}>
                    <Star size={14} />
                  </Bouton>
                </div>
                <p className="couleur-gris taille-pt">
                  Consistent, customized fit, game-changing.
                </p>
                <div className="aff-flex gap-2 te-noir">
                  <p className="couleur-noir-charbon">$279.97</p>
                  <p className="td-barre couleur-gris ">$350</p>
                  <p className="couleur-vert-jade-fonce">20% off</p>
                </div>

                <div className="aff-flex gap-4 te-noir taille-pt">
                  <p className="tt-maj couleur-bleu-ciel">x</p>
                  <p className="tt-maj">s</p>
                  <p className="tt-maj">m</p>
                  <p className="tt-maj">l</p>
                  <p className="tt-maj">xl</p>
                </div>
                <div className="aff-flex gap-3 mh-2">
                  <Bouton className={"ronde-1"} taille={"min"}>
                    Buy now
                  </Bouton>
                  <Bouton
                    taille={"min"}
                    className={"ronde-1 bouton-icone"}
                    theme="sombre"
                  >
                    <BsBag />
                    Add to bag
                  </Bouton>
                </div>
              </div>
            </Card.Corps>
          </Card>
        </Bloc>

        <Bloc
          type={"myn"}
          nombre={11}
          className={
            "col ai-mil mh-1 bord-3 p-2 bord-dashed bord-gris-claire ronde-1"
          }
        >
          <Card className={"bloc-myn-12 relative"} style={cardStyle2}>
            <Card.Header className={"mb-2"}>
              <p className="te-gras texte-2 ubuntu">Nike Adapt BB 2.0</p>
            </Card.Header>
            <Card.Corps>
              <Image
                width={300}
                height={300}
                source={ImageShoe}
                className={"ronde-1 bg-rose-saumon image-cover"}
              />
            </Card.Corps>

            <Card.Bas className={"absolue bas-7 gauche-5"}>
              <Bouton
                taille={"min"}
                className={"ronde-1 bouton-icone survol"}
                theme="sombre"
                onClick={() => alert("Un produit ajouté au panier")}
              >
                <BsBag />
                Add to bag
              </Bouton>
            </Card.Bas>
          </Card>
        </Bloc>
      </Col>
    </>
  );
}
