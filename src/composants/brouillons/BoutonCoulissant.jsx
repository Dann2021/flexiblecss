import { useState } from "react";
import clsx from "../classe";

// fini
/**  
 * forme : rond
 */
function BoutonCoulissant({ classeName, forme, onClick, checked=false, onChange }) {
  const [etat, setEtat] = useState(checked);

  
  const handleToggle = (e) => {
    setEtat(e.target.checked);
    if (onChange) onChange(e.target.checked);
  };
  return (
    <label className={clsx("coulissant", classeName)}>
      <input type="checkbox" checked={etat}
        onChange={handleToggle}/>
      <span className={clsx("forme", forme)} onClick={onClick}/>
    </label>
  );
}

export default BoutonCoulissant;
