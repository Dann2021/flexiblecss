export default function MenuDeroulant({ titre, children, className, side }) {
  return (
    <div className={`menu-deroulant-survol ${className}`}>
      {side ? (
        <li className="taille-gm"> {titre}</li>
      ) : (
        <span className={`titre taille-gm ta-mil`}>{titre}</span>
      )}

      {side ? (
        <div className="contenu">
          <ul>{children}</ul>
        </div>
      ) : (
        <div className="contenu">{children}</div>
      )}
    </div>
  );
}

/** 
 * 
 *  Le contenu de cet accordéon n'est visible que lorsqu'on clique sur
             ce bouton accordeon (dans la version mobile) et dans la version pc
             il faut juste le survoler.
 */
