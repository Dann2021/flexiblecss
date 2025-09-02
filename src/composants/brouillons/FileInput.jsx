import { useRef } from "react";

const FileInput = ({ nom }) => {
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log("fichier selectionné : ", file);
  };

  const handleClick = () => fileInputRef.current.click();

  return (
    <div className="aff-flex ai-mil gap-2 bord-1 bord-solid p-2 ronde bloc-12 bloc-myn-6">
      <input
        type="file"
        ref={fileInputRef}
        name=""
        style={{ display: "none" }}
        onChange={handleFileChange}
        id=""
      />

      <Bouton type={"sombre"} className={"bouton-min"} onClick={handleClick}>
        {nom}
      </Bouton>

      <File />
    </div>
  );
};

export default FileInput;
