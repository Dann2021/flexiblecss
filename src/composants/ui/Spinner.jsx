export default function Spinner({ type, className, taille }) {
  return (
    <div
      className={`spinner spinner-${type} centre ${className}`}
      style={{ height: `${taille}px`, width: `${taille}px` }}
    ></div>
  );
}
