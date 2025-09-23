import { Route, Routes } from "react-router-dom";

// Imports directs (plus de lazy)
import Home from "../pages/home/Home";
import DocHome from "../pages/docs/DocHome";
import ComposantPages from "../pages/docs/ComposantPages";
import TemplatePage from "../pages/docs/TemplatePage";
import UiKitPage from "../pages/docs/UiKitPage";
import IntroPage from "../pages/docs/IntroPage";
import InstallPage from "../pages/docs/InstallPage";
import StructPage from "../pages/docs/StructPage";
import AspectRatioPage from "../pages/docs/AspectRatioPage";
import DisplayPage from "../pages/docs/DisplayPage";
import PageErreur from "../pages/404/PageErreur";
import BlocPage from "../pages/docs/BlocPage";
import CouleurPage from "../pages/docs/CouleurPage";
import Test from "../pages/test/Test";
import LigneColPage from "../pages/docs/LigneColPage";
import AccordeonPage from "../pages/docs/composants/AccordeonPage";
import CarrouselPage from "../pages/docs/composants/CarrouselPage";
import ZIndexPage from "../pages/docs/ZIndexPage";

function Routeur() {
  return (
  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
        <Route path="/docs" element={<DocHome />}>
          <Route path="composant" element={<ComposantPages />} />
          <Route path="templates" element={<TemplatePage />} />
          <Route path="uikit" element={<UiKitPage />} />
          <Route index element={<IntroPage />} />
          <Route path="intro" element={<IntroPage />} />
          <Route path="*" element={<PageErreur />} />
          {/*<Route path="intro" element={<IntroPage />} />*/}
          {/* Page par défaut quand on est sur /docs */}
          {/*<Route index element={<InstallPage />} />*/}
          {/*<Route path="install" element={<InstallPage />} />*/}
          <Route path="structure" element={<StructPage />} />
          <Route path="aspect-ratio" element={<AspectRatioPage />} />
          <Route path="display" element={<DisplayPage />} />
          <Route path="bloc" element={<BlocPage />} />
          <Route path="couleurs" element={<CouleurPage />} />
          <Route path="ligne-col" element={<LigneColPage />} />
          <Route path="accordeon" element={<AccordeonPage />} />
          <Route path="carrousel" element={<CarrouselPage />} />
          <Route path="zindex" element={<ZIndexPage />} />
        </Route>
      </Routes>
 
  );
}

export default Routeur;
