import { Bloc } from "../composants";
import clsx from "../composants/classe.js";

/**
 * ce composant me permet d'afficher un tableau dont les colonnes sont classe et style
 * afin d'avoir un aperçu des classes de flexible et le style css appliqué
 */
const Tableau = ({ className = "", titre1, titre2, data }) => {
  return (
    <Bloc
      type={"myn"}
      nombre={11}
      className={clsx("p-2", className)}
    >
      <div className="aff-flex fd-col gap-2">
        <div className="aff-flex ai-mil jc-sb gap-2">
          <p className="te-noir">{titre1}</p>
          <p className="te-noir">{titre2}</p>
     

        </div>
        <hr style={{ border: "1px solid #f5f5f5" }} />

        {data.map((element) => (
          <>
            <div className="aff-flex ai-mil jc-sb gap-2" key={element.id}>
              <p className="texte-couleur-bleu-lavande te-noir taille-pt fira">
                {element.classe}
              </p>
              <p className="texte-couleur-bleu-lagon te-noir taille-pt fira">
                {element.style}
              </p>
            </div>
            <hr style={{ border: "1px solid #f5f5f5" }} />
          </>
        ))}
      </div>
    </Bloc>
  );
};

export default Tableau;