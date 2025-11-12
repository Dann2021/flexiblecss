import {
  BookOpen,
  Brush,
  CheckCircle2,
  ChevronDown,
  FolderCode,
  Layers,
  Monitor,
  Package2Icon,
  Search,
  Sparkles,
  SquareStack,
  X,
  Zap,
} from "lucide-react";
import ImageHero from "../../assets/images/component.png";
import Couleurs from "../../constantes/Couleurs.js";

import {
  SiHtml5,
  SiNextdotjs,
  SiReact,
  SiSass,
  SiUikit,
  SiVite,
} from "react-icons/si";
import {
  Accordeon,
  Bloc,
  Bouton,
  Card,
  Col,
  Conteneur,
  Dropdown,
  Image,
  Input,
  Ligne,
  Spinner,
  TexteDegrade,
} from "../../composants/index.js";

import { Archive, File, Share } from "lucide-react";
import { Link } from "react-router-dom";
import Kpp14Image from "../../assets/background/kpp14.jpg";
import ChaussureWebp from "../../assets/images/shoes-1.webp";

import { FaRocket } from "react-icons/fa";
import clsx from "../../composants/classe.js";
import { PiBracketsCurly } from "react-icons/pi";

const dropdown = [
  { id: 1, label: "Exporter en csv", icone: <File size={16} />, className: "" },
  { id: 2, label: "Partager", icone: <Share size={16} />, className: "" },
  { id: 3, label: "Archiver", icone: <Archive size={16} />, className: "" },
  {
    id: 4,
    label: "Supprimer",
    icone: <X size={16} />,
    className: "couleur-rouge-vif te-noir",
  },
];

const iconeCard = [
  { id: 1, label: "html", icone: SiHtml5, couleur: "#E34F26" },
  { id: 2, label: "next js", icone: SiNextdotjs, couleur: "#333" },
  { id: 3, label: "react js", icone: SiReact, couleur: "#61DAFB" },
  { id: 4, label: "vite", icone: SiVite, couleur: "#646CFF" },
  { id: 5, label: "sass", icone: SiSass, couleur: "#CC6699" },
];

const iconeSection = [
  { id: 1, label: "ui kit", icone: SiUikit },
  { id: 2, label: "composants", icone: Package2Icon },
  { id: 3, label: "supports", icone: Monitor },
];

const avantageFlexible = [
  { id: 1, description: "Facile à comprendre et à utiliser" },
  { id: 2, description: "Design responsive prêt à l’emploi" },
  { id: 3, description: "Léger, rapide et personnalisable" },
  { id: 4, description: "Syntaxe claire et moderne" },
  {
    id: 5,
    description: "Parfait pour créer des interfaces élégantes",
  },
];

const adnElement = [
  {
    id: 1,
    description: "Simplicité avant tout — des classes intuitives et lisibles.",
    icon: <Sparkles size={20} className="couleur-orange-corail" />,
  },
  {
    id: 2,
    description:
      "Une architecture modulaire pensée pour évoluer avec ton projet.",
    icon: <Layers size={20} className="couleur-bleu-ciel" />,
  },
  {
    id: 3,
    description: "Rapidité et performance grâce à une feuille de style légère.",
    icon: <Zap size={20} className="couleur-vert" />,
  },
  {
    id: 4,
    description: "Un design moderne et personnalisable selon ton univers.",
    icon: <Brush size={20} className="couleur-rose" />,
  },
];

export default function Home() {
  return (
    <Conteneur className={"py-4"}>
      <Ligne className={"jc-sb gap-8 ai-mil my-18"}>
        <Bloc type={"myn"} nombre={5}>
          <div className="bg-bleu-glacial p-1 w-4 aff-flex ai-mil gap-2 ronde my-3">
            <span class="md-1">🔥</span>
            <p className="couleur-bleu-ciel te-noir fira">
              FlexibleCSS V.1.0.1
            </p>
          </div>

          <h1 className="inter texte-6 lh-2 te-noir">
           Créez des interfaces modernes en clin d'oeil.
          </h1>
        

          <p className="mh-4 couleur-gris texte-2">
           Flexible Css fournit des classes prêtes à l'emploi et alimente déjà plusieurs projets en production.
          </p>
          
          <div className="aff-flex jc- ai-mil gap-5 mh-4">
            <Bouton
            
              as={Link}
              to={"/docs/intro"}
              type={"primaire"}
              className={"bouton-icone ronde-1"}
            >
              <FaRocket size={20} />
              Essayer maintenant
            </Bouton>
          
          </div>
        </Bloc>
        <Bloc type={"myn"} nombre={6}>
          <Image
            source={ImageHero}
            className={"ronde"}
            //width={600}
            //height={600}
          />
        </Bloc>
      </Ligne>

      <Ligne className={"my-20 jc-mil"}>
        <Card
          className={"bord-4 bord-gris-claire bord-solid bloc-myn-3 bloc-pt-5"}
        >
          <Card.Corps className={"py-5 aff-flex fd-col ai-mil"}>
            <Bouton
              onClick={() => alert("Tu as appuyé sur le bouton")}
              taille={"me"}
              theme="prime"
              className={"ronde-1"}
            >
              Clique-moi
            </Bouton>
          </Card.Corps>
          <Card.Bas className={"mh-2"}>
            <p className="ta-mil fira"> Bouton</p>
          </Card.Bas>
        </Card>

        <Card
          className={"bord-4 bord-gris-claire bord-solid bloc-myn-3 bloc-pt-5"}
        >
          <Card.Corps className={"py-5 aff-flex fd-col ai-mil"}>
            <Input simple placeholder={"Saisir un mot"} dataType={"arrondie"}>
              <Search className="iconeElement" />
            </Input>
          </Card.Corps>
          <Card.Bas className={"mh-2"}>
            <p className="ta-mil fira">Input</p>
          </Card.Bas>
        </Card>

        <Card
          className={"bord-4 bord-gris-claire bord-solid bloc-myn-3 bloc-pt-5"}
        >
          <Card.Corps className={"py-5 aff-flex fd-col ai-mil"}>
            <Dropdown
              labelClassName={"aff-flex bg-gris-claire p-1 gap-2 ronde ai-mil"}
              icone={<ChevronDown size={16} />}
              contenuClassName={"theme-claire"}
              label={"Dropdown"}
            >
              {dropdown.map((element) => (
                <li
                  key={element.id}
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "")
                  }
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = "#f0f0f0")
                  }
                  className={clsx(
                    "aff-flex ai-mil gap-3 p-1 taille-pt p-1 mb-1 ronde-1 curseur-pointeur",
                    element.className
                  )}
                >
                  {element.icone} <span>{element.label}</span>
                </li>
              ))}
            </Dropdown>
          </Card.Corps>
          <Card.Bas className={"mh-2"}>
            <p className="ta-mil fira">Dropdown</p>
          </Card.Bas>
        </Card>

        <Card
          className={"bord-4 bord-gris-claire bord-solid bloc-myn-3 bloc-pt-5"}
        >
          <Card.Corps className={"py-5 aff-flex fd-col ai-mil"}>
            <Accordeon titre={"Accordeon 1"}>
              <p>
                Ceci est un composant accordeon qui permet de{" "}
                <span className="couleur-bleu-ciel">masquer/afficher </span>le
                contenu
              </p>
            </Accordeon>
          </Card.Corps>
          <Card.Bas className={"mh-2"}>
            <p className="ta-mil fira">Accordeon</p>
          </Card.Bas>
        </Card>

        <Card
          className={"bord-4 bord-gris-claire bord-solid bloc-myn-3 bloc-pt-5"}
        >
          <Card.Corps className={"py-5 aff-flex fd-col ai-mil"}>
            <Spinner type={1} taille={25} />
          </Card.Corps>
          <Card.Bas className={"mh-2"}>
            <p className="ta-mil fira">Spinner</p>
          </Card.Bas>
        </Card>

        <Card
          className={"bord-4 bord-gris-claire bord-solid bloc-myn-3 bloc-pt-5"}
        >
          <Card.Corps className={"py-5 aff-flex fd-col ai-mil"}>
            <Image
              width={200}
              height={200}
              alt={"image à mettre"}
              source={ChaussureWebp}
              className={"survol curseur-pointeur"}
            />
          </Card.Corps>
          <Card.Bas className={"mh-2"}>
            <p className="ta-mil fira">Card</p>
          </Card.Bas>
        </Card>
      </Ligne>

      <Col
        className={" mh-15 gap-3 p-3 ronde bg-gris-claire"}
        style={{
          backgroundImage: "radial-gradient(#d9d9d9 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      >
        <h2 className="ta-mil inter-10 texte-4">
          Conçut pour le développement rapide
        </h2>
        <p className="ta-mil">
          Utilisez flexible pour concevoir simplement et rapidement vos
          interfaces
        </p>

        <Ligne className="aff-flex jc-mil gap-3 mh-2">
          {iconeSection.map((element) => (
            <Card
              key={element.id}
              className={"bloc-myn-3 survol curseur-pointeur"}
            >
              <Card.Corps className={"aff-flex fd-col ai-mil"}>
                <element.icone className="couleur-bleu-ciel" size={100} />
              </Card.Corps>
              <Card.Bas className={"mh-1"}>
                <p className="ta-mil fira ">{element.label}</p>
              </Card.Bas>
            </Card>
          ))}
        </Ligne>
      </Col>

      <Col className={"gap-5 my-20"}>
        {/*<Bloc type={"myn"} nombre={4}>
          <h1 className="inter texte-6 ls-2 lh-2">
            Dark mode is{" "}
            <TexteDegrade
              direction="to bottom"
              as="span"
              couleurs="#FF705B, #FFB457"
            >
              effortless.
            </TexteDegrade>
          </h1>
        </Bloc>
        <Bloc type={"myn"} nombre={5}>
          <p>
            HeroUI comes with a fully well-scaled default dark theme that you
            can apply to your application with just adding the dark attribute to
            your
          </p>
        </Bloc>*/}

        <Bloc type={"myn"} nombre={4}>
          <h1 className="inter texte-6 ls-2 lh-2">
            Un framework adopté par{" "}
            <TexteDegrade
              direction="to bottom"
              as="span"
              couleurs="#FF705B, #FFB457"
            >
              les créateurs.
            </TexteDegrade>
          </h1>
        </Bloc>
        <Bloc type={"myn"} nombre={5}>
          <p>
            Composants élégants, classes légères et projets réels : Flexible CSS
            s’impose comme un outil rapide et efficace pour concevoir des
            interfaces modernes.
          </p>
        </Bloc>

        <Ligne className={"jc-mil"}>
          <Card
            className={
              "bloc-myn-3 bloc-pt-4 bord-4 bord-gris-claire p-2 ronde bord-solid"
            }
          >
            <Card.Corps>
              <SquareStack size={30} />
              <h1 className="texte-6 ta-mil couleur-vert-claire">21</h1>
            </Card.Corps>
            <Card.Bas>
              <p className="ta-mil tt-cap">composants</p>
            </Card.Bas>
          </Card>
          <Card
            className={
              "bloc-myn-3 bloc-pt-4 bord-4 bord-gris-claire p-2 ronde bord-solid"
            }
          >
            <Card.Corps>
              <FolderCode size={30} />
              <h1 className="texte-6 ta-mil couleur-vert-claire">10</h1>
            </Card.Corps>
            <Card.Bas>
              <p className="ta-mil tt-cap">projets</p>
            </Card.Bas>
          </Card>
          <Card
            className={
              "bloc-myn-3 bloc-pt-4 bord-4 bord-gris-claire p-2 ronde bord-solid"
            }
          >
            <Card.Corps>
              <PiBracketsCurly size={30} />
              <h1 className="texte-6 ta-mil couleur-vert-claire">100</h1>
            </Card.Corps>
            <Card.Bas>
              <p className="ta-mil tt-cap">classes</p>
            </Card.Bas>
          </Card>
        </Ligne>
      </Col>

      <Col className={"gap-4 p-2 my-10 ai-mil"}>
        <Bloc type={"myn"} nombre={6}>
          {/*<h1 className="ta-mil inter texte-6">
            Works with your favorite application{" "}
            <TexteDegrade
              as="span"
              couleurs={`${Couleurs.vertCitron}, ${Couleurs.turquoise}`}
            >
              framework
            </TexteDegrade>
          </h1>
          <p className="ta-mil texte-2 mh-3 couleur-gris">
            Chakra provides a consistent developer experience for most modern
            frameworks
          </p>*/}

          <h1 className="ta-mil inter texte-6">
            Utilisez votre framework préférée avec{" "}
            <TexteDegrade
              as="span"
              couleurs={`${Couleurs.vertCitron}, ${Couleurs.turquoise}`}
            >
              Flexible
            </TexteDegrade>
          </h1>
          <p className="ta-mil texte-2 mh-3 couleur-gris">
            Flexible Css vous offre la possibilité de l'adapter avec le
            framework de votre choix
          </p>
        </Bloc>

        <Ligne className={"my-1 jc-mil ai-mi w-full"}>
          {iconeCard.map((element) => (
            <Card
              key={element.id}
              className={
                "bloc-myn-2 ronde p-2 bloc-pt-3 bord-4 bord-solid bord-gris-claire"
              }
            >
              <Card.Corps className={"mh-1 aff-flex jc-mil"}>
                <element.icone size={40} color={element.couleur} />
              </Card.Corps>
              <p className="fira ta-mil mh-1 tt-cap">{element.label}</p>
            </Card>
          ))}
        </Ligne>
      </Col>

      <Col className={"my-15"}>
        <Bloc type={"myn"} nombre={4}>
          <h1 className="inter texte-6 ls-2 lh-2">
            Pourquoi{" "}
            <TexteDegrade
              direction="to bottom"
              as="span"
              couleurs={`${Couleurs.vertCitron}, ${Couleurs.turquoise}`}
            >
              FlexibleCss ?
            </TexteDegrade>
          </h1>
        </Bloc>

        <Bloc type={"myn"} nombre={5} className={"my-2"}>
          <p>
            Flexible CSS simplifie la création d’interfaces modernes et
            cohérentes. Grâce à ses classes intuitives, tu peux styliser
            rapidement ton site tout en gardant un design élégant et responsive.
          </p>
        </Bloc>

        <Ligne className={"jc-mil"}>
          <Card
            className={"bord-4 bloc-myn-5 bord-solid bord-gris-claire ronde-1"}
          >
            <Card.Header>
              <h1 className="inter">
                Avantages de{" "}
                <TexteDegrade as="span" couleurs="#4ffa6b80, #8ce732">
                  Flexible
                </TexteDegrade>
              </h1>
            </Card.Header>
            <Card.Corps className={"mh-5"}>
              <ul className="lst-aucun mg-2">
                {avantageFlexible.map((element) => (
                  <li key={element.id} className="aff-flex gap-1 ai-mil mb-1">
                    <CheckCircle2 className="couleur-vert-sauge" size={20} />{" "}
                    <span className="montserrat">{element.description}</span>
                  </li>
                ))}
              </ul>
            </Card.Corps>
            <Card.Bas className={"my-3 mg-2"}>
              <Bouton className={"ronde-1"}>Essayer</Bouton>
            </Card.Bas>
          </Card>
          <Card className="bord-4 bloc-myn-5 bord-solid bord-gris-claire ronde-1 p-4">
            <Card.Header>
              <h1 className="inter">
                L’ADN de{" "}
                <TexteDegrade as="span" couleurs="#4ffa6b80, #8ce732">
                  Flexible CSS
                </TexteDegrade>
              </h1>
            </Card.Header>

            <Card.Corps className="mh-5">
              <ul className="lst-aucun mg-2">
                {adnElement.map((element) => (
                  <li key={element.id} className="aff-flex ai-mil gap-2 mb-2">
                    {element.icon}
                    <span className="montserrat">{element.description}</span>
                  </li>
                ))}
              </ul>
            </Card.Corps>
          </Card>
        </Ligne>
      </Col>
    </Conteneur>
  );
}
