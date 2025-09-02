export default function Paragraphe({ children, className, style }) {
  return (
    <p className={`ta-mil texte-2 my-3 ${className}`} style={style}>
      {children}
    </p>
  );
}
