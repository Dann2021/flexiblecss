export default function FooterElement({ titre, icone, children }) {
  return (
    <ul className="menu">
      <span className="ta-mil taille-pt texte-couleur-gris-claire">
        {" "}
        {icone} {titre}
      </span>
      {children}
    </ul>
  );
}
