import { BrowserRouter as Router } from "react-router-dom";
import Routeur from "./routes/Routeur";
import Navigateur from "./composants/ui/Navigateur";
import Footer from "./composants/Footer";
import { SpeedInsights } from "@vercel/speed-insights/react";

//  <Router basename="/flexiblecss">
function App() {
  return (
    <Router
    //basename="/flexiblecss"
    >
      <div className={`poppins conteneur`}>
        <Navigateur texte={"Flexible✨"} />

        <Routeur />
        <SpeedInsights />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
