export default function Dropdown({
  className = "",
  titre,
  children,
  icone,
  mode,
}) {
  // mode = flotte
  return (
    <div className={`dropdown ${className}`}>
      <button className="dropdown-bouton aff-flex gap-1 ai-mil taille-myn texte-couleur-gris">
        {icone}
        {titre}
      </button>
      <ul
        className={`dropdown-menu bg-gris-claire`}
        data-mode={mode}
        style={{ minWidth: "200px", background: "rgb(26,25,25)" }}
      >
        {children}
      </ul>
    </div>
  );
}

/**
 * Nouveau composant dropdown
 * import { useState, useRef, useEffect } from "react";
import clsx from "./classe";

export default function Dropdown({
  className = "",
  titre,
  children,
  icone,
  mode = "flotte", // peut évoluer : "flotte" | "inline"...
  width = "200px",
  bg = "bg-gris-claire",
  // eslint-disable-next-line no-unused-vars
  as: Component = "button", // bouton ou autre déclencheur
  ...props
}) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  // Fermer si clic en dehors
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={clsx("dropdown", className)} ref={menuRef}>
      <Component
        className={clsx(
          "dropdown-bouton aff-flex gap-1 ai-mil taille-myn texte-couleur-gris"
        )}
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="true"
        aria-expanded={open}
        {...props}
      >
        {icone}
        {titre}
      </Component>

      {open && (
        <ul
          className={clsx("dropdown-menu", bg)}
          data-mode={mode}
          style={{ minWidth: width }}
          role="menu"
        >
          {children}
        </ul>
      )}
    </div>
  );
}

 */
