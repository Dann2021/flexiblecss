import { Link } from "react-router-dom";
import clsx from "../classe";

export default function BoutonLien({
  type = "primaire",
  variant = false,
  className,
  children,
  chemin,
  mode,
  taille,
  forme,
  ...props
}) {
  return (
    <Link to={chemin} className="td-none">
      <button
        className={clsx(
          "bouton",
          variant ? `bouton-contour-${type}` : `bouton-${type}`,
          taille && `bouton-${taille}`,
          forme && `bouton-${forme}`,
          className
        )}
        type={mode}
        {...props}
      >
        {children} {/*variant && "contour"*/} {/** C'est type qui était là */}
      </button>
    </Link>
  );
}


