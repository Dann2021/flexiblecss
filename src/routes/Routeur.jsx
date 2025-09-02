import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Spinner from "../composants/ui/Spinner";

const Home = lazy(() => import("../pages/home/Home"));
const DocHome = lazy(() => import("../pages/docs/DocHome"));
const ComposantPages = lazy(() => import("../pages/docs/ComposantPages"));
const TemplatePage = lazy(() => import("../pages/docs/TemplatePage"));
const UiKitPage = lazy(() => import("../pages/docs/UiKitPage"));
const IntroPage = lazy(() => import("../pages/docs/IntroPage"));
const InstallPage = lazy(() => import("../pages/docs/InstallPage"));
const StructPage = lazy(() => import("../pages/docs/StructPage"));
const AspectRatioPage = lazy(() => import("../pages/docs/AspectRatioPage"));
const DisplayPage = lazy(() => import("../pages/docs/DisplayPage"));



function Routeur() {
  return (
    <Suspense fallback={<Spinner type={1} />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/docs" element={<DocHome />}>
          <Route path="composant" element={<ComposantPages />} />
          <Route path="templates" element={<TemplatePage />} />
          <Route path="uikit" element={<UiKitPage />} />
          <Route index  element={<IntroPage />} />
          <Route path="intro" element={<IntroPage />} />
          {/*<Route path="intro" element={<IntroPage />} />*/}
          {/* Page par défaut quand on est sur /docs */}
          {/*<Route index element={<InstallPage />} />*/}
          {/*<Route path="install" element={<InstallPage />} />*/}
          <Route path="structure" element={<StructPage />} />
          <Route path="aspect-ratio" element={<AspectRatioPage />} />
          <Route path="display" element={<DisplayPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default Routeur;
