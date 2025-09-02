import { Copy, Check } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coy } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Bouton } from "../composants";
import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

export default function Codebloc({ children, langage, className }) {
  const [copie, setCopie] = useState(false);

  const copieTexte = async (texte) => {
    try {
      // moderne
      await navigator.clipboard.writeText(texte);
      setCopie(true);
      setTimeout(() => setCopie(false), 2000);
    // eslint-disable-next-line no-unused-vars
    } catch (err) {
      // fallback pour tous les appareils
      const textarea = document.createElement("textarea");
      textarea.value = texte;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();

      try {
        const success = document.execCommand("copy");
        setCopie(success);
        setTimeout(() => setCopie(false), 2000);
      // eslint-disable-next-line no-unused-vars
      } catch (err) {
        alert("Impossible de copier le texte");
      }

      document.body.removeChild(textarea);
    }
  };

  return (
    <div className={className}>
      <div className="aff-flex ai-mil gap-3 jc-sb">
        <p className="taille-pt te-noir">Terminal</p>

        <Bouton theme="claire" taille="min" onClick={() => copieTexte(children)}>
          <AnimatePresence mode="wait">
            {copie ? (
              <motion.span
                key="check"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
              >
                <Check size={18} />
              </motion.span>
            ) : (
              <motion.span
                key="copy"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
              >
                <Copy size={18} />
              </motion.span>
            )}
          </AnimatePresence>
        </Bouton>
      </div>

      <SyntaxHighlighter
        language={langage}
        style={coy}
        className="bloc-12 bg-gris-claire"
      >
        {children}
      </SyntaxHighlighter>
    </div>
  );
}
