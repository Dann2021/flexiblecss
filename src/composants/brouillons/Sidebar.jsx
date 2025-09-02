export default function Sidebar({ children, className }) {
  // creation d'une sidebar

  // Script pour sidebar
  const handleOpen = () => {
    document.getElementById("maSidebar").style.width = "100%";
  };

  const handleClose = () => {
    document.getElementById("maSidebar").style.width = "0";
  };

  // href="javascript:void(0)"

  return (
    <>
      <div className={`sidebar ${className}`} id="maSidebar">
        <a onClick={handleClose} className="fermer" href="#">
          &times;
        </a>

        <div className="side-bloc">{children}</div>
      </div>
      <span onClick={handleOpen}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          width="30"
          height="30"
        >
          <path
            d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"
            fill="black"
          />
        </svg>
      </span>
    </>
  );
}

/**
 * 
 *  <Sidebar>
        <Liste titre={"composant"}>
          <Lien>Accueil</Lien>
          <Lien>Accueil</Lien>
          <Lien>Accueil</Lien>
        </Liste>
        <Liste titre={"composant"}>
          <Lien>Accueil</Lien>
          <Lien>Accueil</Lien>
          <Lien>Accueil</Lien>
        </Liste>
        <Liste titre={"composant"}>
          <Lien>Accueil</Lien>
          <Lien>Accueil</Lien>
          <Lien>Accueil</Lien>
        </Liste>
        <Liste titre={"composant"}>
          <Lien>Accueil</Lien>
          <Lien>Accueil</Lien>
          <Lien>Accueil</Lien>
        </Liste>
      </Sidebar>
 */
