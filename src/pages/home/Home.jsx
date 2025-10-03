import Couleurs from "../../constantes/Couleurs.js";
import ImageMac from "../../assets/images/flex3.png";
import { Minus, Square, X } from "lucide-react";
import Code2 from "../../assets/images/code2.png";
import Icons from "../../constantes/Icone.js";
import ImageTest from "../../assets/images/image.png";
import {
  SiJavascript,
  SiPython,
  SiHtml5,
  SiSass,
  SiCss3,
  SiReact,
} from "react-icons/si";
import {
  Bouton,
  Col,
  Bloc,
  TexteDegrade,
  HeroSection,
  Image,
  Ligne,
  Conteneur,
} from "../../composants/index.js";
import { Link } from "react-router-dom";
import CardModele from "../../modeles/CardModele.jsx";

export default function Home() {
  return (
    <Conteneur>
      <HeroSection
        col={9}
        textePrincipale={"Build your website with FlexibleCss"}
        sousTexte={
          "Create your site with the tools and packages in the FlexibleCSS"
        }
        //btn={"Documentation"}
        sourceImage={ImageMac}
        btn1={"Get started"}
        btn2={"Installation"}
      >
        Create your site with the tools and packages in the FlexiblesCSS.
        Flexible CSS is a{" "}
        <span className="texte-couleur-bleu-lavande te-noir">
          new css framework
        </span>{" "}
        👋
      </HeroSection>

      <Col className={" mh-15 gap-3"}>
        <TexteDegrade
          className="texte-3 ta-mil te-noir "
          couleurs={`${Couleurs.cyan}, ${Couleurs.grisClair}`}
        >
          Supported and backed by
        </TexteDegrade>
        <div className="aff-flex jc-mil  gap-2 p-1">
          <div className="bloc-myn-2 aff-flex  ai-mil gap-2 bord-1 bg-gris-claire ronde p-1">
            <SiReact size={30} color="#61DBFB" />
            <span className="taille-pt">React</span>
          </div>
          <div className="bloc-myn-2 aff-flex  ai-mil gap-2 bord-1 bg-gris-claire ronde p-1">
            <SiJavascript size={30} color="#F7DF1E" />
            <span className="taille-pt">JavaScript</span>
          </div>
          <div className="bloc-myn-2 aff-flex  ai-mil gap-2 bord-1 bg-gris-claire ronde p-1">
            <SiHtml5 size={30} color="#E34F26" />
            <span className="taille-pt">Html</span>
          </div>
        </div>
      </Col>

      <Ligne className={"jc-sb bg-gris-claire ronde p-2 mh-8"}>
        <Bloc type={"myn"} nombre={6} className="col ai-mil jc-mil">
          <TexteDegrade
            couleurs={`${Couleurs.cyan}, ${Couleurs.indigo}`}
            className="texte-10 ls-2 lh-2 ta-mil"
          >
            Build your website with FlexibleCss
          </TexteDegrade>

          <p className="texte-2 texte-couleur-gris mb-1 ta-mil">
            Create your site with the tools and packages in the FlexiblesCSS.
            Flexible CSS is a{" "}
            <span className="texte-couleur-bleu-lavande te-noir">
              new css framework
            </span>
          </p>
          <div className="aff-flex ai-mil gap-2 jc-mil mh-2">
            <Bouton type={"primaire"}>Get started</Bouton>
            <Bouton
              as={Link}
              onClick={() => console.log("hello")}
              to={"/docs/install"}
              type={"sombre"}
            >
              Installation
            </Bouton>
          </div>
        </Bloc>

        <Bloc type={"myn"} nombre={5} className="col ai-mil jc-mil">
          <Icons.CodingIcon className="image" />
        </Bloc>
      </Ligne>

      <Ligne className={"jc-sb ai-mil bg-gris-c mh-10 ronde"}>
        <Bloc type={"myn"} nombre={6}>
          <TexteDegrade
            couleurs={`${Couleurs.cyan}, ${Couleurs.indigo}`}
            className="texte-5 ls-3 lh-2 te-noir ta-gauche"
          >
            Nouvelles technologies utilisées dans Flexible
          </TexteDegrade>
          <p className="ta-gauche">
            La création de ce framework regroupe plusieurs technologie avec
            lesquelles vous pouvez interagir
          </p>
        </Bloc>

        <div
          className={"mh-8 grille col-3 ai-mil gap-3 bloc-myn-5 bloc-12 p-2"}
        >
          <Card
            titre={"JavaScript"}
            icone={<SiJavascript size={90} color="#F7DF1E" />}
          />
          <Card
            titre={"Python"}
            icone={<SiPython size={90} color="#3776AB" />}
          />
          <Card titre={"Html5"} icone={<SiHtml5 size={90} color="#E34F26" />} />
          <Card titre={"Css3"} icone={<SiCss3 size={90} color="#1572B6" />} />
          <Card
            titre={"React Js"}
            icone={<SiReact size={90} color="#61DBFB" />}
          />
          <Card titre={"Sass"} icone={<SiSass size={90} color="#CC6699" />} />
        </div>
      </Ligne>

      <Col className={"ai-mil mh-8 mb-8"}>
        <Ligne className={"jc-sa p-2"}>
          <Bloc
            type={"myn"}
            nombre={4}
            className="col ai-mil bg-gris-claire  ronde p-2 survol"
          >
            <p className="texte-5 ls-2 lh-3">
              Utilisez Flexible pour vos projets personnels
            </p>
            <p className="taille-pt texte-couleur-gris">
              Flexible repose sur le principe de conteneur. Un conteneur est
              bloc de code similaire à une{" "}
              <span className="texte-couleur-bleu-lavande te-noir">div</span>{" "}
              qui accepte des classes toutes sortes de classe afin de constituer
              une mise en page.
            </p>
            <div className="aff-flex ai-mil jc-sb mh-5 gap-5">
              <Icons.Avatar width={70} height={70} />
              <p className="texte-couleur-gris texte-2">
                FlexibleCss est bien plus qu'un simple framework css.{" "}
              </p>
            </div>
          </Bloc>
          {/*<Bloc
            type={"myn"}
            nombre={5}
            className="bg-gris-claire ronde p-2 survol relative"
          >
            <div className="aff-flex ai-mil gap-2 flou-1  absolue ronde-5 haut-1 droite-1">
              <Minus size={25} className="badge bg-rouge-tomate" />
              <Square size={25} className="badge bg-jaune-canari" />
              <X size={25} className="badge bg-vert-claire" />
            </div>
            <h1 className="texte-8">card</h1>

            <Image source={ImageTest} className={"ronde ratio-large"} />

            <p className="texte-2 texte-couleur-gris">
              Ceci est un composant{" "}
              <span className="te-noir texte-couleur-bleu-ciel">card</span> créé
              à partir de FlexibleCSS 🪄. Ce composant est un mélange de classes{" "}
              <span className="texte-couleur-rouge-cerise">
                .bloc-taille, .ronde, .survol et .relative
              </span>
            </p>
          </Bloc>*/}
          <Bloc type={"myn"} nombre={7}>
            <CardModele />
          </Bloc>
        </Ligne>
      </Col>

      <Col className={"ai-mil mh-8"}>
        <h1 className="texte-7 ta-mil texte-couleur-bleu-ciel">Composants</h1>
        <Bloc type={"myn"} nombre={5} className="col ai-mil jc-mil">
          <p className="ta-mil">
            Flexible propose des composants natifs et hautement personnalisable
          </p>
        </Bloc>
        <Ligne className={"jc-sb ai-mil gap-5 p-2"}>
          <Bloc
            type={"myn"}
            nombre={4}
            className="bg-gris-claire ronde p-4 survol "
          >
            <h1 className="texte-6 ls-2 lh-2 texte-couleur-bleu-lavande ta-mil">
              Des couleurs uniques et modifiables{" "}
              <span className="texte-3">✨</span>
            </h1>

            <p className="taille-pt texte-couleur-gris">
              Utilisez directement avec les couleurs de{" "}
              <span className="texte-couleur-bleu-lilas te-noir">
                FlexibleCss✨
              </span>{" "}
              ou encore ajoutez les vôtres
            </p>
          </Bloc>
          <Bloc
            type={"myn"}
            nombre={7}
            className="survol p-5 bg-bleu-lila ronde"
          >
            <Image source={Code2} className={"ronde"} />
          </Bloc>
        </Ligne>
      </Col>
    </Conteneur>
  );
}

const CodeBloc = ({ children, langue }) => {
  return (
    <div className="bloc-myn-5 bg-gris-claire ronde relative p-2">
      <div className="aff-flex ai-mil jc-mil gap-2 absolue haut-1 droite-2">
        <span
          className="bg-bleu-ciel ta-mil te-noir col ai-mil jc-mil"
          style={{
            border: "1px solid transparent",
            height: "22px",
            width: "22px",
            borderRadius: "50%",
          }}
        >
          <Minus size={15} />
        </span>
        <span
          className="bg-vert-fluo ta-mil te-noir taille-pt col ai-mil jc-mil"
          style={{
            border: "1px solid transparent",
            height: "22px",
            width: "22px",
            borderRadius: "50%", // carré avec coins légèrement arrondis
          }}
        >
          <Square size={15} />
        </span>
        <span
          className="bg-rouge-cerise ta-mil te-noir taille-pt col ai-mil jc-mil"
          style={{
            border: "1px solid transparent",
            height: "22px",
            width: "22px",
            borderRadius: "50%",
          }}
        >
          <X size={15} />
        </span>
      </div>
      <pre className="taille-pt">
        <code lang={langue}>{children}</code>
      </pre>
    </div>
  );
};

const Card = ({ icone, titre, ...rest }) => {
  return (
    <Bloc
      type={"myn"}
      nombre={3}
      {...rest}
      className="col ai-mil ronde p-1 gap-2"
    >
      {icone}
      <p className="ta-mil taille-pt">{titre}</p>
    </Bloc>
  );
};
