import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";

const code = `
() => <button onClick={() => alert("Hello!")}>Clique-moi</button>
`;

export default function CodeEditeur() {
  return (
    <LiveProvider  code={code} className="bg-rouge-cerise">
      <LiveEditor /> {/* éditeur */}
      <LiveError /> {/* erreurs */}
      <LivePreview /> {/* rendu */}
    </LiveProvider>
  );
}
