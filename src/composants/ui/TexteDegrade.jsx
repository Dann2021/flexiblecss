import { useEffect, useRef } from "react";

export default function TexteDegrade({
  texte,
  children,
  couleurs = "blue, red",
  className = "",
  //as: Element = "p",
}) {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      const colors = couleurs.split(",").map((c) => c.trim());
      const gradient = `linear-gradient(to right, ${colors.join(", ")})`;

      Object.assign(ref.current.style, {
        backgroundImage: gradient,
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        color: "transparent",
        WebkitTextFillColor: "transparent",
        display: "inline-block", // important pour que le gradient soit visible
      });
    }
  }, [couleurs]);

  return (
    <span
      ref={ref}
      className={`texte-degrade ${className}`}
      data-color={couleurs}
    >
      {children ?? texte}
    </span>
  );
}

/*import { useEffect, useRef } from "react";

export default function TexteDegrade({
  texte,
  couleurs = "#ff0080, #7928ca, #2afadf", // Couleurs vibrantes par défaut
  className = "",
  as: Element = "p",
  children,
}) {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      const colors = couleurs.split(",").map((c) => c.trim());
      const gradient = `linear-gradient(270deg, ${colors.join(", ")})`;

      Object.assign(ref.current.style, {
        backgroundImage: gradient,
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        color: "transparent",
        WebkitTextFillColor: "transparent",
        display: "inline-block",
        backgroundSize: "200% auto", // nécessaire pour créer le mouvement
        animation: "degradeMove 4s linear infinite", // applique l'animation
      });
    }
  }, [couleurs]);

  return (
    <>
      {/* Animation globale à injecter dans la page si elle n’est pas déjà là }
      <style>
        {`
          @keyframes degradeMove {
            0% { background-position: 0% 50%; }
            100% { background-position: 100% 50%; }
          }
        `}
      </style>
      <Element ref={ref} className={`texte-degrade ${className}`} data-color={couleurs}>
        {children ?? texte}
      </Element>
    </>
  );
}
*/
