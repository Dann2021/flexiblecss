import React from "react";
import { Bouton, Card, Col } from "../../composants";
import TexteDegrade from "../../composants/ui/TexteDegrade";
import Couleurs from "../../constantes/Couleurs";
import { CheckCircle2Icon, User } from "lucide-react";

export default function TemplatePage() {
  return (
    <>
      <h1>Page template</h1>

      <Col>
        <Card className={"bg-gris-claire bloc-myn-4 bloc-pt-5"}>
          <Card.Header className={"relative py-2"}>
            <div className="aff-flex jc-sb">
              <TexteDegrade
                className="texte-3 te-noir"
                couleurs={`${Couleurs.bleuCiel}, ${Couleurs.violet}`}
              >
                standard
              </TexteDegrade>
              <span className="badge absolue haut-0 droite-0 bg-bleu-lavande taille-pt">
                promo
              </span>
            </div>

            <div className="aff-flex gap-4 ai-mil mh-1">
              <p className="texte-5 te-noir"> 90$</p>
              <div className="col">
                <div className="texte-couleur-gris taille-pt aff-flex ai-mil gap-1">
                  <p>par user</p>
                  <User size={15} />
                </div>
                <p className="texte-couleur-gris taille-pt">par mois</p>
              </div>
            </div>
            <p className="texte-couleur-gris ta-mil">
              Votre usage au plan standard
            </p>
          </Card.Header>

          <Card.Corps className={"py-2"}>
            <Bouton theme="sombre" taille={"min"} className={"bouton-block"}>
              Essayer gratuitement
            </Bouton>
            <Bouton
              theme="prime"
              taille={"min"}
              className={"bouton-block mh-1 mb-2"}
            >
              S'abonner
            </Bouton>
            <p className="texte-2 texte-couleur-gris tt-maj mb-2">Avantages</p>
            <div className="aff-flex ai-mil gap-2 texte-couleur-gris taille-pt mb-1">
              <CheckCircle2Icon size={20} />
              <p>5 jours minimum</p>
            </div>

            <div className="aff-flex ai-mil gap-2 texte-couleur-gris taille-pt mb-1">
              <CheckCircle2Icon size={20} />
              <p>5 jours minimum</p>
            </div>

            <div className="aff-flex ai-mil gap-2 texte-couleur-gris taille-pt">
              <CheckCircle2Icon size={20} />
              <p>5 jours minimum</p>
            </div>




          </Card.Corps>
        </Card>
      </Col>
    </>
  );
}
