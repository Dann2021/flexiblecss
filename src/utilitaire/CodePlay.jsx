import React from 'react';
import { CodeHighlighter, CodeHighlighterTheme } from 'code-highlighter-react';



const CodePlay = ({code, className, langage}) => {
  return (
      <CodeHighlighter
          className={className}
          code={code}
          language={langage}
          shouldShowLineNumbers
          theme={CodeHighlighterTheme.Dark}
       
      />
  );
};

export default CodePlay;