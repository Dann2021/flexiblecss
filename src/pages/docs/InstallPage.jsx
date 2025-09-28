import Conteneur from "../../composants/ui/Conteneur";
import Sidebar2 from "../../composants/ui/Sidebar2";
import Col from "../../composants/ui/Col";
import Bloc from "../../composants/ui/Bloc";
import { ChevronDown, Copy, MenuSquare, Plus, X } from "lucide-react";
import Ligne from "../../composants/ui/Ligne";
import { Accordeon, Bouton } from "../../composants";
import Lien from "../../composants/ui/Lien";
import { Outlet } from "react-router-dom";

export default function InstallPage() {
  const np = "npm";
  const i = "install";
  const fl = "flexible";

  return (
    <>
      <Col className={"p-1 gap-3"}>
        <h1 className="texte-5">Installation</h1>
        <Bloc type={"myn"} nombre={11}>
          <p className="texte-couleur-gris">
            L'installation de Flexible se fait à partir des méthodes suivantes :
          </p>
        </Bloc>
        <Bloc type={"myn"} nombre={11}>
          <p className="texte-couleur-gris">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            saepe tempore ut, deserunt cumque culpa dolores nemo perferendis
            nisi unde numquam cupiditate! Sed, maiores nihil at obcaecati quia
            accusantium illo.
          </p>
        </Bloc>
        <h2 className="my-3">Dépendances</h2>
        <hr className="bord-1 texte-couleur-gris-claire bloc-myn-8" />

        <Bloc type={"myn"} nombre={8}>
          <p className="texte-2 texte-couleur-gris">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae eius
            repellat magnam accusamus ea consequatur, quisquam molestiae enim,
            iusto commodi reprehenderit expedita debitis excepturi veniam non?
            Quibusdam maiores eligendi quaerat?
          </p>
        </Bloc>

        <Ligne className={"jc-deb"}>
          <Bloc type={"myn"} nombre={5}>
            <h3>Install via npm</h3>
          </Bloc>

          <Bloc
            type={"myn"}
            nombre={5}
            className="aff-flex fd-col bg-gris-claire ronde mh-5 gap-2 p-3 relative"
          >
            <Copy className="absolue haut-1 droite-2" />
            <div className="aff-flex ai-mil gap-2">
              <p>$</p>
              <p className="texte-couleur-rouge-cerise te-noir">{np}</p>
              <p className="texte-couleur-bleu-ciel">{i}</p>
              <p className="texte-couleur-bleu-ciel">{fl}</p>
            </div>
          </Bloc>
        </Ligne>
      </Col>
    </>
  );
}
