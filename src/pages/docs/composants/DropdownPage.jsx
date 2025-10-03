import TitreDoc from "../../../composants/docs_composant/TitreDoc";
import { Bloc, Col, Table } from "../../../composants";
import { IoMdArrowDropdown } from "react-icons/io";
import Tableau from "../../../utilitaire/Tableau";
import Codebloc from "../../../utilitaire/Codebloc";
import { Archive, File, Share, X } from "lucide-react";

const data = [
  { id: 1, classe: "label", style: "Texte du bouton" },
  { id: 2, classe: "labelClassName", style: "Classe pour le bouton" },
  { id: 3, classe: "children", style: "Éléments du menu" },
  { id: 4, classe: "className", style: "Classe du conteneur" },
  { id: 5, classe: "contenuClassName", style: "Classe pour la liste" },
];

export default function DropdownPage() {
  const code = `
<Dropdown
  contenuClassName={""}
  className={"effet"}
  labelClassName={"texte-couleur-gris"}
  label={"Labo"}>
  
  <li className="effet">
    <Lien chemin={"/docs"} className={"taille-pt texte-couleur-gris nav-item"}>
        Documentation
    </Lien>
  </li>
</Dropdown>`;
  return (
    <>
      <TitreDoc
        titre={"Dropdown"}
        icone={
          <IoMdArrowDropdown size={20} className="texte-couleur-bleu-ciel" />
        }
      />

      <Col className={"mh-3"}>
        <Bloc type={"myn"} nombre={11} className={"texte-couleur-gris mb-5"}>
          <p>
            Le <span className="texte-couleur-bleu-ciel te-noir">Dropdown</span>{" "}
            permet d’afficher ou de cacher du contenu.
          </p>

          <ul className="mh-3 taille-pt">
            <li className="mb-3">
              <span className="bg-bleu-claire ronde p-1">ouvert</span>
            </li>
            <li className="mb-2">
              <span className="bg-bleu-claire ronde p-1">fermer</span>
            </li>
          </ul>
        </Bloc>

        <Tableau
          className="mb-3"
          titre1={"props"}
          titre2={"description"}
          data={data}
        />

        <h3 className="fira">Code de base</h3>
        <Codebloc
          className={"mh-3 mb-5 p-2 bloc-12 bloc-myn-11"}
          langage={"jsx"}
        >
          {code}
        </Codebloc>

        <h3 className="fira">Exemple</h3>

        <Bloc type={"myn"} nombre={11} className={"texte-couleur-gris mb-5"}>
          <p className="mh-2 mb-4">
            {" "}
            Dans cet exemple vous verrez un{" "}
            <span className="texte-couleur-bleu-ciel te-noir">
              dropdown
            </span>{" "}
            que vous pouvez cliquer et ce dernier affichera un menu contextuel.
          </p>
        </Bloc>
        <Table data={dataTest} label={"Dropdown"} actions={dataActions} />
      </Col>
    </>
  );
}

const dataActions = [
  { id: 1, label: "Exporter en csv", icone: <File size={16} />, className: "" },
  { id: 2, label: "Partager", icone: <Share size={16} />, className: "" },
  { id: 3, label: "Archiver", icone: <Archive size={16} />, className: "" },
  {
    id: 4,
    label: "Supprimer",
    icone: <X size={16} />,
    className: "texte-couleur-rouge-vif te-noir",
  },
];

const dataTest = [
  {
    id: 32,
    nom: "Essone Obame",
    prenom: "Stéphanie Mireille",
    age: 25,
    ecole: "UOB",
    niveau: "L3 Communication",
    quartier: "Owendo",
  },
  {
    id: 33,
    nom: "Biyogo Ella",
    prenom: "Emmanuel Pierre",
    age: 28,
    ecole: "ENSET",
    niveau: "M2 Génie Mécanique",
    quartier: "Melen",
  },
  {
    id: 34,
    nom: "Mvong Ella",
    prenom: "Dorine Clarisse",
    age: 24,
    ecole: "HEM",
    niveau: "M1 Comptabilité",
    quartier: "Belle-Vue 1",
  },
  {
    id: 35,
    nom: "Mengue Ndong",
    prenom: "Grégoire Thierry",
    age: 27,
    ecole: "ISSEA",
    niveau: "M2 Statistiques",
    quartier: "Okala",
  },
  {
    id: 36,
    nom: "Allogo Nna",
    prenom: "Judith Grâce",
    age: 22,
    ecole: "ENS",
    niveau: "L3 Littérature",
    quartier: "Nzeng-Ayong",
  },
];
