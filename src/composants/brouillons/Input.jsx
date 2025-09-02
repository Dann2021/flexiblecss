export default function Input({
  label,
  type,

  className,
  categorie,
  className2,
  value,
  onChange,
  name,
}) {
  return (
    <div className={`input${categorie} ${className}`}>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required
        className={`saisie ${className2}`}
      />

      <label htmlFor="saisie" className="newamsterdam taille-myn">
        {label}
      </label>
    </div>
  );
}
