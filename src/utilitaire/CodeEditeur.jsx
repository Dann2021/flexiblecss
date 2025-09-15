import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";



export default function CodeEditeur({code}) {
  return (
    <LiveProvider  code={code} className="bg-rouge-cerise">
      <LivePreview /> {/* rendu */}
      <LiveEditor  /> {/* éditeur */}
      <LiveError /> {/* erreurs */}
      
    </LiveProvider>
  );
}
