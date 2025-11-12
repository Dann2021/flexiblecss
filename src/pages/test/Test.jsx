import React, { useState } from "react";
import { Bloc, Bouton, Carrousel, Col, Conteneur } from "../../composants";
import { CheckCircle2, Edit2, EyeIcon, EyeOff, Moon, Sun } from "lucide-react";
import Image1 from "../../assets/images/carousel/1.jpg";
import Image2 from "../../assets/images/carousel/2.jpg";
import Image3 from "../../assets/images/carousel/3.jpg";
import Image4 from "../../assets/images/carousel/4.jpg";
import Image5 from "../../assets/images/carousel/5.jpg";
import Image6 from "../../assets/images/carousel/6.jpg";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";

export default function Test() {
  // variable pour theme
  const [theme, setTheme] = useState("claire");

  // fonction pour changer theme

  const toggleTheme = () => {
    setTheme(theme === "claire" ? "sombre" : "claire");
  };

  const name = `{ motion }`;

  return (
    <Conteneur>
      <Col className={`theme-${theme}  ronde-2 p-3`}>
        <div className="aff-flex jc-fin gap-2">
          {/** partie sombre */}
          <Bouton
            theme={theme}
            taille={"min"}
            onClick={toggleTheme}
            className={"ronde-1"}
          >
            {/*theme === "claire" ? <Moon size={15} /> : <Sun size={15} />*/}
            <AnimatePresence mode="wait" initial={false}>
              {theme === "claire" ? (
                <motion.div
                  key="moon"
                  initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  <Moon size={15} />
                </motion.div>
              ) : (
                <motion.div
                  key="sun"
                  initial={{ opacity: 0, rotate: 90, scale: 0.8 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: -90, scale: 0.8 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  <Sun size={15} />
                </motion.div>
              )}
            </AnimatePresence>
          </Bouton>
        </div>

        <Carrousel
          taille={260}
          titre={"Teams members"}
          images={[Image1, Image2, Image3, Image4, Image5, Image6]}
        />

        <Bloc type={"myn"} nombre={11} className={"mh-3 ronde bg-gris-claire"}>
          <h1 className="texte-4">
            Apprendre{" "}
            <span className="fira couleur-bleu-ciel">{name}</span>{" "}
          </h1>

          <Box />
        </Bloc>
      </Col>
    </Conteneur>
  );
}

const Box = () => {
  return (
    <motion.div
      className="box-1 bg-bleu-ciel ronde mh-3 mb-5 curseur-pointeur"
      animate={{ rotate: 360 }}
      whileHover={{ scale: 1.2 }}
      transition={{ duration: 0.3 }}
    ></motion.div>
  );
};
