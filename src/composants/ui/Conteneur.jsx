import clsx from "../classe";

// Creation d'un composant conteneur
/**
 * Composant principal à integrer dans une page web
 *
 */
export default function Conteneur({ children, className, ...props }) {
  return (
    <div className={clsx("conteneur py-5", className)} {...props} >
      {children}
    </div>
  );
}
