import TitreDoc from "../../../composants/docs_composant/TitreDoc";
import { Monitor, Trash2 } from "lucide-react";
import { Bloc, Bouton, Card, Col, Modal } from "../../../composants";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "motion/react";
import Icons from "../../../constantes/Icone";
import { useState } from "react";

export default function ModalPage() {
  return (
    <>
      <TitreDoc
        titre={"Modal"}
        icone={<Monitor size={30} className="couleur-bleu-ciel" />}
      />

      <Col className={"gap-3"}>
        <Bloc type={"myn"} nombre={11} className={"couleur-gris"}>
          <p>
            Le composant{" "}
            <span className="fira couleur-bleu-ciel te-noir">Modal</span>{" "}
            affiche une fenêtre au-dessus de la page pour montrer un message,
            une action ou un formulaire sans changer de page.
          </p>

          <p className="mh-4">Le modal se compose : </p>
          <ul className="mg-3 mh-2">
            <li className="mb-1">
              un <span className="inter te-noir">bouton d’ouverture</span> pour
              afficher la fenêtre
            </li>
            <li className="mb-1">
              un <span className="inter te-noir">fond semi-transparent</span>{" "}
              qui couvre la page
            </li>
            <li className="mb-1">
              un <span className="inter te-noir">contenu central</span> avec les
              informations ou actions (Fermer, Continuer)
            </li>
          </ul>
        </Bloc>
        <Modal label={"ouvrir"}>
          <Card
            className={"bg-gris-claie bloc-myn-5 bloc-pt-8"}
            style={{
              backgroundColor: "white",
              boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
            }}
          >
            <Card.Header>
              <h1>My Modal</h1>
            </Card.Header>
            <Card.Corps>
              <p>Ceci est un composant que je teste avec mon framework css</p>
            </Card.Corps>
            <Card.Bas className={"aff-flex jc-sb mh-1"}>
              <Bouton taille={"min"} className={"ronde-1"}>
                fermer
              </Bouton>
              <Bouton
                variant
                taille={"min"}
                theme="sombre"
                className={"ronde-1"}
              >
                continuer
              </Bouton>
            </Card.Bas>
          </Card>
        </Modal>
        <Test />
      </Col>
    </>
  );
}

const Test = () => {
  const data = [
    {
      id: 1,
      nom: "Sloann",
    },

    {
      id: 2,
      nom: "Pablo",
    },

    {
      id: 3,
      nom: "Dannys",
    },
  ];
  const [dataCopie, setDataCopie] = useState(data);

  /*const toggleDelete = (id) => {
    const copie = [...dataCopie];
    const filter = copie.filter((element) => element.id !== id);
    setDataCopie(filter);
  };
*/
  const toggleDelete = (id) => {
    setDataCopie((prev) => prev.filter((el) => el.id !== id));
  };

  return (
    <Bloc type={"myn"} nombre={11}>
      <AnimatePresence>
        {dataCopie &&
          dataCopie.map((element) => (
            <motion.div
              key={element.id}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: "easeIn" }}
            >
              <Card className={"bg-gris-claire ronde mb-1"}>
                <Card.Corps className={"aff-flex jc-sb gap-2"}>
                  <div className="aff-flex gap-2 ai-mil">
                    <Icons.Avatar height={50} width={50} />
                    <h3>{element.nom}</h3>
                  </div>

                  <Bouton
                    onClick={() => toggleDelete(element.id)}
                    theme="sombre"
                    taille={"min"}
                    className={"ronde-1"}
                  >
                    <Trash2 size={20} />
                  </Bouton>
                </Card.Corps>
              </Card>
            </motion.div>
          ))}
      </AnimatePresence>
    </Bloc>
  );
};
