export default function Titre({ titre, className, children }) {
  return (
    <p className={`taille-gd te-gras texte-couleur-gris ${className}`}>
      {children} {titre}
    </p>
  );
}
