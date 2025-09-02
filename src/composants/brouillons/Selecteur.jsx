export default function Selecteur({
  children,
  label,
  onChange,
  name,
  className,
  style
}) {
  return (
    <div className={`selecteur ${className}`} style={style}>
      <label htmlFor={name} className="monLabel">
        {label}
      </label>
      <select name={name} className="selectElement" onChange={onChange}>
        {children}
      </select>
    </div>
  );
}
