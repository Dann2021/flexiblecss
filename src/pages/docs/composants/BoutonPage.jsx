import { Home, LogIn, MousePointer2, Send, HomeIcon } from "lucide-react";
import { Bloc, Bouton, Col, TexteDegrade } from "../../../composants";
import Tableau from "../../../utilitaire/Tableau";
import Codebloc from "../../../utilitaire/Codebloc";
import TitreDoc from "../../../composants/docs_composant/TitreDoc";
import Couleurs from "../../../constantes/Couleurs";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSideContexte } from "../../../contexte/SideContexte";
import { useEffect } from "react";

const data = [
  { id: 1, classe: ".bouton-primaire", style: "background-color: #3095e0" },
  { id: 2, classe: ".bouton-prime", style: "background-color: #1150d1" },
  { id: 3, classe: ".bouton-succes", style: "background-color: #28a745" },
  { id: 4, classe: ".bouton-danger", style: "background-color: #dc3545" },
  { id: 5, classe: ".bouton-alerte", style: "background-color: #ffc107" },
  { id: 6, classe: ".bouton-info", style: "background-color: #17a2b8" },
  { id: 7, classe: ".bouton-claire", style: "background-color: #f8f9fa" },
  { id: 8, classe: ".bouton-sombre", style: "background-color: #343a40" },
];

const dataSide = [
  { id: 1, label: "Boutons primaires" },
  { id: 2, label: "Boutons secondaires" },
  { id: 3, label: "formes" },
  { id: 4, label: "Taille" },
  { id: 5, label: "Boutons avec icônes" },
  { id: 6, label: "Boutons avec type (mode)" },
  { id: 7, label: "Boutons avec l'attribut as" },
  { id: 8, label: "Bonus : background + color" },
];

export default function BoutonPage() {
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
        icone={<MousePointer2 size={30} className="couleur-bleu-ciel" />}
        titre={"Bouton"}
      />

      <Col className={"mh-5 gap-5s"}>
        <Bloc type={"myn"} nombre={11} className={"couleur-gris"}>
          <p>
            Le bouton est un élément d'interface utilisé pour exécuter une
            action
          </p>
        </Bloc>

        <Tableau
          titre1={"classes"}
          titre2={"styles"}
          data={data}
          className="mb-3"
        />

        <Bloc type={"myn"} nombre={11} className={"mb-5"}>
          <h3 className="inter">Boutons primaires</h3>
          <p className="mh-1">
            Les boutons primaires sont les boutons de base déjà stylisés pour
            les actions principales.
          </p>
          <div className="aff-flex gap-3 bloc-12 overx-auto mb-2 mh-2 bord-4 bord-gris-claire bord-solid p-2 ronde">
            <Bouton taille={"me"}>primaire</Bouton>
            <Bouton taille={"me"} theme="prime">
              prime
            </Bouton>
            <Bouton taille={"me"} theme="succes">
              succes
            </Bouton>
            <Bouton taille={"me"} theme="danger">
              danger
            </Bouton>
            <Bouton taille={"me"} theme="alerte">
              alerte
            </Bouton>
            <Bouton taille={"me"} theme="info">
              info
            </Bouton>
            <Bouton taille={"me"} theme="claire">
              claire
            </Bouton>
            <Bouton taille={"me"} theme="sombre">
              sombre
            </Bouton>
          </div>

          <Codebloc langage={"jsx"} className={"p-1 mh-4"}>
            {`<Bouton theme='succes'>succes</Bouton>`} {/** ici */}
          </Codebloc>
        </Bloc>

        <Bloc type={"myn"} nombre={11} className={"mb-5 mh-5"}>
          <h3 className="inter">Boutons secondaires</h3>
          <p className="mh-1">
            Les boutons secondaires sont des boutons avec un style alternatif
            pour les actions secondaires.
          </p>
          <div className="aff-flex gap-3 bloc-12 overx-auto mb-2 mh-2 bord-4 bord-gris-claire bord-solid p-2 ronde">
            <Bouton variant taille={"me"}>
              primaire
            </Bouton>
            <Bouton variant taille={"me"} theme="prime">
              prime
            </Bouton>
            <Bouton variant taille={"me"} theme="succes">
              succes
            </Bouton>
            <Bouton variant taille={"me"} theme="danger">
              danger
            </Bouton>
            <Bouton variant taille={"me"} theme="alerte">
              alerte
            </Bouton>
            <Bouton variant taille={"me"} theme="info">
              info
            </Bouton>
            <Bouton variant taille={"me"} theme="sombre">
              sombre
            </Bouton>
          </div>

          <Codebloc langage={"jsx"} className={"p-1 mh-4"}>
            {`<Bouton variant theme='succes'>succes</Bouton>`} {/** ici */}
          </Codebloc>
        </Bloc>

        <Bloc type={"myn"} nombre={11} className={"p-1 mb-3 mh-5"}>
          <h3 className="inter">formes</h3>
          <p className="mh-1">
            Les boutons peuvent avoir différentes formes pour s'adapter au
            design.
          </p>
          <div className="aff-flex gap-3 bloc-12 overx-auto mh-2 bord-4 bord-gris-claire bord-solid p-2 ronde">
            <Bouton>forme</Bouton>
            <Bouton className={"ronde-1 taille-pt"} theme="prime">
              prime
            </Bouton>
            <Bouton className={"ronde-2 taille-pt"} theme="succes">
              succes
            </Bouton>
            <Bouton className={"ronde-3 taille-pt"} theme="danger">
              danger
            </Bouton>
            <Bouton className={"ronde-4 taille-pt"} theme="alerte">
              alerte
            </Bouton>
            <Bouton className={"ronde-2 taille-pt"} theme="info">
              info
            </Bouton>
          </div>
          <Codebloc langage={"jsx"} className={"p-1 mh-4"}>
            {`<Bouton className='ronde-3' theme='succes'>succes</Bouton>`}{" "}
            {/** ici */}
          </Codebloc>
        </Bloc>

        <Bloc type={"myn"} nombre={11} className={"mb-5 mh-5"}>
          <h3 className="inter">Taille</h3>
          <p className="mh-1">
            Les boutons peuvent avoir différentes tailles pour s'adapter au
            design.
          </p>
          <div className="aff-flex gap-3 bloc-12 overx-auto mb-2 mh-2 bord-4 bord-gris-claire bord-solid p-2 ronde">
            <Bouton className={"ronde"} taille={"min"}>
              minimum
            </Bouton>
            <Bouton className={"ronde-1"} taille={"me"} theme="prime">
              moyen
            </Bouton>
            <Bouton className={"ronde-1"} taille={"max"} theme="succes">
              maximale
            </Bouton>
          </div>

          <Codebloc langage={"jsx"} className={"p-1 mh-4"}>
            {`<Bouton taille='me' theme='succes'>moyen</Bouton>`} {/** ici */}
          </Codebloc>
        </Bloc>

        <Bloc type={"myn"} nombre={11} className={"mb-5 mh-5"}>
          <h3 className="inter">Boutons avec icônes</h3>
          <p className="mh-1">
            Les boutons avec icônes permettent d'ajouter des symboles visuels
            pour renforcer le sens des actions.
          </p>
          <div className="aff-flex gap-3 bloc-12 overx-auto mb-2 mh-2 bord-4 bord-gris-claire bord-solid p-2 ronde">
            <Bouton taille={"me"} className={"bouton-icone"}>
              <Send size={16} />
              Send
            </Bouton>
            <Bouton taille={"me"} theme="prime" className={"bouton-icone"}>
              <LogIn size={16} />
              Log out
            </Bouton>
            <Bouton taille={"me"} theme="claire" className={"bouton-icone"}>
              <FaGithub size={16} />
            </Bouton>
          </div>

          <Codebloc langage={"jsx"} className={"p-1 mh-4"}>
            {` <Bouton taille={"me"} className={"bouton-icone"}><Send size={16} /> Send</Bouton>`}{" "}
            {/** ici */}
          </Codebloc>
        </Bloc>

        <Bloc type={"myn"} nombre={11} className={"mb-5 mh-5"}>
          <h3 className="inter">Boutons avec type (mode)</h3>
          <p className="mh-1">
            Les boutons avec type permettent de spécifier le comportement du
            bouton dans un formulaire.
          </p>
          <ul className="mg-2">
            <li className="mb-1 mh-2">
              <span className="couleur-bleu-ciel te-noir">button</span> Utilisé
              pour les actions générales qui ne soumettent pas de formulaire.
            </li>
            <li className="mb-1">
              <span className="couleur-bleu-ciel te-noir">submit</span> :
              Utilisé pour soumettre un formulaire.
            </li>
            <li className="mb-1">
              <span className="couleur-bleu-ciel te-noir">reset</span> : Utilisé
              pour réinitialiser les champs d'un formulaire à leurs valeurs par
              défaut.
            </li>
          </ul>
          <div className="aff-flex gap-3 bloc-12 overx-auto mb-2 mh-2 bord-4 bord-gris-claire bord-solid p-2 ronde">
            <Bouton
              theme="sombre"
              mode="submit"
              taille={"max"}
              className={"bouton-icone"}
            >
              Submit
            </Bouton>
            <Bouton
              mode="reset"
              taille={"max"}
              theme="prime"
              className={"bouton-icone"}
            >
              Reset
            </Bouton>
            <Bouton
              mode="button"
              taille={"max"}
              theme="alerte"
              className={"bouton-icone"}
            >
              Button
            </Bouton>
          </div>

          <Codebloc langage={"jsx"} className={"p-1 mh-4"}>
            {`<Bouton theme="sombre" mode="submit" taille={"max"} className={"bouton-icone"}>Submit</Bouton>`}{" "}
            {/** ici */}
          </Codebloc>
        </Bloc>

        <Bloc type={"myn"} nombre={11} className={"mb-5 mh-5"}>
          <h3 className="inter">
            Boutons avec l'attribut{" "}
            <span className="couleur-vert-sauge te-noir">as</span>
          </h3>
          <p className="mh-1">
            Les boutons avec l'attribut{" "}
            <span className="couleur-vert-sauge te-noir">as</span> permettent de
            rendre le bouton en tant qu'autre élément HTML ou composant React.
          </p>

          <div className="aff-flex gap-3 bloc-12 overx-auto mb-2 mh-2 bord-4 bord-gris-claire bord-solid p-2 ronde">
            <Bouton
              as={Link}
              to="/"
              theme="sombre"
              mode="submit"
              taille={"me"}
              className={"bouton-icone"}
            >
              <HomeIcon size={16} /> Home
            </Bouton>
          </div>

          <Codebloc langage={"jsx"} className={"p-1 mh-4"}>
            {`<Bouton as={Link} to="/" theme="sombre" mode="submit" taille={"me"} className={"bouton-icone"}>
  <HomeIcon size={16} /> Home
</Bouton>`}{" "}
            {/** ici */}
          </Codebloc>
        </Bloc>

        <Bloc type={"myn"} nombre={11} className={"mb-5 mh-5"}>
          <h3 className="inter">
            Bonus :{" "}
            <span className="couleur-vert-sauge te-noir">
              background + color
            </span>
          </h3>
          <p className="mh-1">
            Hormis les thèmes prédéfinis, vous pouvez aussi personnaliser la
            couleur de fond et la couleur du texte en utilisant les classes
            utilitaires <span className="couleur-vert-sauge te-noir">bg-*</span>{" "}
            et <span className="couleur-vert-sauge te-noir">couleur-*</span>.
          </p>

          <div className="aff-flex gap-3 bloc-12 overx-auto mb-2 mh-2 bord-4 bord-gris-claire bord-solid p-2 ronde">
            <Bouton taille={"me"} className={"bouton-icone bg-bleu-ciel"}>
              <HomeIcon size={16} /> Home
            </Bouton>
          </div>

          <Codebloc langage={"jsx"} className={"p-1 mh-4"}>
            {`<Bouton taille={"me"} className={"bouton-icone bg-bleu-ciel"}>
  <HomeIcon size={16} /> Home
</Bouton>`}{" "}
            {/** ici */}
          </Codebloc>
        </Bloc>
      </Col>
    </>
  );
}
