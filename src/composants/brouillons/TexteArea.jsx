export default function TexteArea({
  placeholder,
  message,
  onChange,
  className,
  ligne,
}) {
  return (
    <div className={`texteArea  ${className}`}>
      <textarea
        rows={ligne}
        name=""
        className="texteElement"
        placeholder={placeholder}
        value={message}
        onChange={onChange}
      ></textarea>
    </div>
  );
}
