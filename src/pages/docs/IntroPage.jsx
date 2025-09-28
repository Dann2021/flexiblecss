import {
  Accordeon,
  Bloc,
  Bouton,
  Card,
  Col,
  TexteDegrade,
} from "../../composants";
import Couleurs from "../../constantes/Couleurs";
import Codebloc from "../../utilitaire/Codebloc";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { BsDiscord, BsGithub, BsTwitterX } from "react-icons/bs";

export default function IntroPage() {
  const code = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="./flexible.css">
  <title>Document</title>
</head>
<body>
  
  <h1>Utilisation de flexible</h1>

  <script src="./flexible.js"></script>
</body>
</html>`;

  const npmInstall = `$ npm install flexible-css`;
  //Les symboles ├── et └── donnent un rendu typique d’arborescence.

  return (
    <>
      <Col className={"gap-3"}>
        <div className="aff-flex jc-sb gap-2 ai-mil pd-myn-10">
          <div className="aff-flex ai-mil gap-2">
            <h1 className="texte-5 ls-2 lh-2">Débutez avec Flexible CSS </h1>
            <span className="badge bg-bleu-lavande te-noir">V1.0.1</span>
          </div>

          <Bouton theme="claire" taille={"min"} className={"bouton-icone"}>
            <BsGithub size={20} />
          </Bouton>
        </div>

        <h1 className="texte-5">
          Introduction{" "}
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1.5, rotate: 360 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{ fontSize: "2rem", display: "inline-block" }}
          >
            ✨
          </motion.span>
        </h1>

        <Bloc
          type={"myn"}
          nombre={11}
          className={"mh-2 p-myn-2 mb-2 texte-couleur-gris"}
        >
          {/*<p className="texte-couleur-gris">
            L’idée de créer ce framework m’est venue un peu par hasard 🤔. Je
            n’arrivais pas à adopter des solutions existantes comme Tailwind ou
            Bootstrap — non pas parce qu’elles sont complexes 😅, mais
            simplement parce que mon esprit préfère décortiquer, comprendre et
            construire les choses par lui-même 🙏.
          </p>*/}

          <p>
            Ce framework est né d’une volonté simple : comprendre en profondeur
            les mécanismes du CSS et bâtir une solution adaptée, plutôt que
            d’adopter des outils préexistants comme Tailwind ou Bootstrap. Mon
            objectif est d’offrir une alternative conçue avec clarté, logique et
            maîtrise.
          </p>
        </Bloc>

        <Bloc type={"myn"} nombre={11} className={"mh-2 p-myn-2 mb-3"}>
          <p className="texte-couleur-gris texte-2">
            {" "}
            <span className="te-noir texte-couleur-bleu-ciel">
              Flexible Css✨
            </span>{" "}
            est un micro framework css facile à prendre en main dont le but est
            de vous aidez à concevoir vos sites web{" "}
            <span className="te-noir texte-couleur-bleu-ciel">rapidement</span>{" "}
            et{" "}
            <span className="te-noir texte-couleur-bleu-ciel">
              efficacement
            </span>
            .
          </p>
        </Bloc>

        <h2>Démarrage rapide</h2>
        <Bloc type={"myn"} nombre={11} className={"mh-2 texte-couleur-gris"}>
          <p>
            Pour bien commencer, installez tout d'abord les fichiers{" "}
            <span className="texte-couleur-rouge-cerise te-noir fira">
              `flexible.css`
            </span>{" "}
            pour le style de vos interfaces et{" "}
            <span className="texte-couleur-rouge-cerise te-noir fira">
              `flexible.js`
            </span>{" "}
            à la racine de votre projet.
          </p>
          <ul className="mh-2 mg-3 taille-pt py-1">
            <li className="mb-2">
              {" "}
              <span className="texte-couleur-rouge-cerise te-noir fira">
                `flexible.css`
              </span>
              contient toutes les classes nécessaire au bon fonctionnement du
              framework
            </li>
            <li>
              {" "}
              <span className="texte-couleur-rouge-cerise te-noir fira">
                `flexible.js`
              </span>
              contient tous les scripts nécessaire au bon fonctionnement du
              framework
            </li>
          </ul>
          <p className=" mh-2 mb-1">
            Après avoir installer les fichiers vous n'avez qu'à les inclures
            dans votre fichier html principal{" "}
            <span className="texte-couleur-rouge-cerise te-noir">
              `main.html`
            </span>{" "}
            comme le montre l'exemple ci-dessous.
          </p>
        </Bloc>

        <Codebloc className={"p-2 bloc-myn-11 taille-pt"} langage={"html"}>
          {code}
        </Codebloc>

        <h2 className="mh-2">
          Installation avec <span className="texte-couleur-bleu-ciel">npm</span>
        </h2>
        <Bloc type={"myn"} nombre={11}>
          <p className="texte-couleur-gris">
            <span className="te-noir texte-couleur-bleu-ciel">
              Flexible Css✨
            </span>{" "}
            peut être installé sur un projet React Js de deux manières, vou
            n'avez qu'à suivre les procédures ci-dessous.
          </p>
          <Accordeon titre={"Installation via css"} className={"mh-2"}>
            {/*<p className="texte-couleur-gris">Désolé je rigolais 😂😂😂😂</p>*/}
            <p className="texte-couleur-gris">
              Pour cette méthode voir celle du démarrage rapide 👆🏿
            </p>
          </Accordeon>

          <Accordeon titre={"Installation npm"} className={"mh-2"}>
            <p className="texte-couleur-gris">
              Pour cette méthode référez vous à l'exemple ci-dessous 👇🏿
            </p>
          </Accordeon>
        </Bloc>

        {/*<CodeBloc /> */}
        <Codebloc className={"p-2 bloc-myn-11 taille-pt mb-5"} langage={"bash"}>
          {npmInstall}
        </Codebloc>

        {/*<TexteDegrade
          className="te-noir texte-4 ls-1 lh-2"
          couleurs={`${Couleurs.orange1}, ${Couleurs.orange2}`}
        >
          Communauté
        </TexteDegrade>*/}
      </Col>
    </>
  );
}

/*const CodeBloc = () => {
  const e1 = "import";
  const e2 = "{ FlexibleCSS }";
  const e3 = "from";
  const e4 = " './flexible' ";

  return (
    <Bloc
      type={"myn"}
      nombre={8}
      className={"bg-gris-claire bloc-myn-11 ronde p-2 mh-5"}
    >
      <div className="aff-flex ai-mil gap-3 jc-sb mb-1">
        <p className="taille-pt te-noir">Terminal</p>
        <Copy />
      </div>

      <pre className="bloc-12 overx-auto">
        <code>
          <div className="aff-flex ai-mil gap-1">
            <p className="texte-couleur-bleu-ciel te-noir">{e1}</p>
            <p>{e2}</p>
            <p className="texte-couleur-bleu-ciel te-noir">{e3}</p>
            <p className="texte-couleur-rouge-cerise te-noir">{e4}</p>
          </div>
        </code>
      </pre>
    </Bloc>
  );
};*/
