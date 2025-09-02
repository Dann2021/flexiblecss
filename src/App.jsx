import { BrowserRouter as Router } from "react-router-dom";

import Routeur from "./routes/Routeur";

import Navigateur from "./composants/ui/Navigateur";


function App() {

    return (
        <Router>
            <div
                className={`poppins`}
                style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
            >
                <Navigateur texte={"Flexible✨"} />


                <div style={{ flex: 1 }}>
                    <Routeur />
                </div>
            </div>


        </Router>
    );
}

export default App;