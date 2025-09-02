import clsx from "../classe";

// fini
/**
 * type : represente le modele d'ecran et ses valeurs possibles sont -> tp,pt,myn,gd,tg
 * nombre : represente la proportion de surface que l'on souhaite prendre
 * mobile : c'est le nombre dit plus haut mais pour les appareils mobile
 * 
 */

export default function Bloc({
  type,
  nombre,
  children,
  className,
  mobile = 12,
  ...props
}) {
  // ici mobile est la valeur par défaut et ce bloc-mobile est pour les petits écrans
  return (
    <div
      className={clsx(
        `bloc-${mobile}`,
        type && nombre && `bloc-${type}-${nombre}`,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
