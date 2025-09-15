import clsx from "../classe.js";

export default function Spinner({ type, className, taille }) {
  return (
    <div
      className={clsx("spinner centre", `spinner-${type}`, className)}
      style={{ height: `${taille}px`, width: `${taille}px` }}
    ></div>
  );
}
