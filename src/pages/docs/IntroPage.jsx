import { Accordeon, Bloc, Col } from "../../composants";

import Codebloc from "../../utilitaire/Codebloc";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

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
        <h1 className="inter-1">
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

        <p className="couleur-gris mh-4">
          Bienvenue dans la documentation de FlexibleCss ! 🚀
        </p>

        <div
          className="bg-violet-lavande-clar ronde-1 p-2 mh-5 bloc-12 bloc-myn-6"
          style={{
            background: "rgb(243, 232, 255)",
            color: "rgb(100, 27, 163)",
          }}
        >
          <span className="inter te-noir">Vous êtes sur la version V1.1.0</span>

        </div>
        <Bloc type={"myn"} nombre={11} className={"mh-2 p-myn-2 mb-2"}>
          <h2 className="inter mb-2">Qu'est ce que FlexibleCss ?</h2>

          <p className="couleur-gris">
            <span className="te-noir couleur-bleu-ciel">Flexible Css✨</span>{" "}
            est un micro-framework né d’une envie simple : comprendre le CSS en
            profondeur et créer une solution claire, logique et maîtrisée. Léger
            et facile à utiliser, il vous aide à concevoir vos sites web plus
            vite et plus efficacement.
          </p>
        </Bloc>

        

        <h2 className="inter">Démarrage rapide</h2>
        <Bloc type={"myn"} nombre={11} className={"mh-2 couleur-gris"}>
          <p>
            Pour bien commencer, installez tout d'abord les fichiers{" "}
            <span className="couleur-bleu-ciel te-noir fira">
              `flexible.css`
            </span>{" "}
            pour le style de vos interfaces et{" "}
            <span className="couleur-bleu-ciel te-noir fira">
              `flexible.js`
            </span>{" "}
            à la racine de votre projet.
          </p>
          <ul className="mh-2 mg-3 py-1">
            <li className="mb-2">
              {" "}
              <span className="couleur-bleu-ciel te-noir fira">
                `flexible.css`
              </span>
              contient toutes les classes nécessaire au bon fonctionnement du
              framework
            </li>
            <li>
              {" "}
              <span className="couleur-bleu-ciel te-noir fira">
                `flexible.js`
              </span>
              contient tous les scripts nécessaire au bon fonctionnement du
              framework
            </li>
          </ul>
          <p className=" mh-2 mb-1">
            Après avoir installer les fichiers vous n'avez qu'à les inclures
            dans votre fichier html principal{" "}
            <span className="couleur-rouge-cerise te-noir">`main.html`</span>{" "}
            comme le montre l'exemple ci-dessous.
          </p>
        </Bloc>

        <Codebloc className={"p-2 bloc-myn-11 taille-pt"} langage={"html"}>
          {code}
        </Codebloc>

        <h2 className="mh-2 inter">
          Installation avec <span className="couleur-bleu-ciel">npm</span>
        </h2>
        <Bloc type={"myn"} nombre={11}>
          <p className="couleur-gris">
            <span className="te-noir couleur-bleu-ciel">Flexible Css✨</span>{" "}
            peut être installé sur un projet React Js de deux manières, vou
            n'avez qu'à suivre les procédures ci-dessous.
          </p>
          <Accordeon titre={"Installation via css"} className={"mh-2"}>
            {/*<p className="couleur-gris">Désolé je rigolais 😂😂😂😂</p>*/}
            <p className="couleur-gris">
              Pour cette méthode voir celle du démarrage rapide 👆🏿
            </p>
          </Accordeon>

          <Accordeon titre={"Installation npm"} className={"mh-2"}>
            <p className="couleur-gris">
              Pour cette méthode référez vous à l'exemple ci-dessous 👇🏿
            </p>
          </Accordeon>
        </Bloc>

        <Codebloc className={"p-2 bloc-myn-11 taille-pt mb-5"} langage={"bash"}>
          {npmInstall}
        </Codebloc>
      </Col>
    </>
  );
}
