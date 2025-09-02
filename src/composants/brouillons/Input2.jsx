import { useState } from "react";

export default function Input2({
  type,
  style,
  classNameSurcharge,
  id,
  className = "",
  placeholder,
  value,
  onChange,
  icone,
  name,
  dataType,
  children,
  label,
  clavier,
  themeBase,
  tailleMax,
  autoComplete,
  pattern,
  tailleMin,
  desactiver,
  simple,
}) {
  const [enFocus, setEnFocus] = useState(null); // pour mettre le focus

  /** Ancien style
    backgroundColor: "#fff",
    color:  "#333",
    borderColor:  "#ccc",
   */

  /**   Nouveau
    backgroundColor: "transparent",
    color:  "#ccc",
    borderColor:  "#333", */
  const stylesBase = {
    backgroundColor: "transparent",
    color: "black",
    borderColor: "#333",
    transition: "border-color 0.3s ease, box-shadow 0.3s ease",
    ...(enFocus && {
      borderColor: "#007bff",
      boxShadow: "0 0 5px rgba(0, 123, 255, 0.5)",
    }),
    ...style, // surchage du style
  };

  return (
    <div
      className={`inputConteneur ${classNameSurcharge}`}
      // fonction pour communiquer avec mon framework css
      data-type={dataType}
      // fonction pour communiquer avec mon framework css
      data-theme={themeBase}
      // fonction pour communiquer avec mon framework css
      data-label="fixe"
      // fonction pour mettre un focus sur l'element centrale
      onFocus={() => setEnFocus(true)}
      // fonction pour supprimer le focus sur l'element centrale
      onBlur={() => setEnFocus(false)}
      style={stylesBase}
    >
      {simple && <span className="iconeCont">{children}</span>}
      <input
        id={id}
        name={name} // nom de l'input
        type={type} // type d'input
        value={value} // valeur de l'input
        onChange={onChange} // fonction pour le changement lors de la saisie
        required // fonction pour rendre cet input obligatoire
        className={`inputElement ${className}`} // fonction pour communiquer avec mon framework css
        placeholder={placeholder} // fonction pour avoir un placeholder
        inputMode={clavier} // fonction choisir le type de clavier
        maxLength={tailleMax} // fonction pour avoir la taille maximale
        autoComplete={autoComplete} // fonction pour avoir de l'auto complete
        pattern={pattern} // fonction pour definir un pattern sur lequel se base
        minLength={tailleMin}
        disabled={desactiver}
      />

      {label && <label className="monLabel">{label}</label>}

      {/** icone à la fin de l'input */}
      {icone && (
        <div className="iconeCont survol curseur-pointeur">{icone}</div>
      )}
    </div>
  );
}
