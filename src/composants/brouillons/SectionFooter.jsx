export default function SectionFooter({ titre, icone, children }) {
  return (
    <div className="section">
      <span className="titre taille-myn texte-couleur-vert-jade">
        {icone} {titre}
      </span>
      <ul className="menu">{children}</ul>
    </div>
  );
}
