import { BrowserRouter as Router } from "react-router-dom";
import Routeur from "./routes/Routeur";
import Navigateur from "./composants/ui/Navigateur";
import { Bouton } from "./composants";
import Footer from "./composants/Footer";

//  <Router basename="/flexiblecss">
function App() {
  return (
    <Router 
    //basename="/flexiblecss"
    >
      {/*<header
        className="p-1 relative haut-0 w-full aff-none aff-myn-block"
        style={{
          background: "linear-gradient(to right, #0c5d56, #a855f7)",
          color: "#fff",
        }}
      >
        <div className="aff-flex jc-mil ai-mil gap-2 ">
          <p className="poppins taille-pt">
            Build faster with Premium Chakra UI Components 💎
          </p>
          <Bouton theme="sombre" className={"taille-pt"} variant taille={"min"}>
            Learn
          </Bouton>
        </div>
      </header>*/}
      <div className={`poppins conteneur`}>
        <Navigateur texte={"Flexible✨"} />

        <Routeur />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
