export default function Grille({ children, col }) {
  return <div className={`grille col-${col}`}>{children}</div>;
}
