export default function Sidenav({ logo, children }) {
  // Script pour sidebar
  // script pour sidenav2

  function ouvrirSidenav() {
    document.getElementById("bloc2").style.width = "100%";
  }

  function fermerSidenav() {
    document.getElementById("bloc2").style.width = "0";
  }

  return (
    <>
      <nav className="sidenav2 theme-sombre">
        <div className="bloc1">
          <div className="e1">
            <img src={logo} alt="" width={40} height={40} className="" />
            {/*<p className="logo texte-couleur-vert-sauge tt-maj  bebas-neue-regular">
              {logo}
            </p>*/}
          </div>
          <div className="e2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              width="30"
              height="30"
              onClick={ouvrirSidenav}
              className="bot"
            >
              <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
            </svg>
          </div>
        </div>
        <div className="bloc2" id="bloc2">
          <a href="#" onClick={fermerSidenav} className="btn-fermer">
            &times;
          </a>
          <div className="ma-side-bar">{children}</div>
        </div>
      </nav>
    </>
  );
}
