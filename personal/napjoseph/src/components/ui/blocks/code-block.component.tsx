import React from 'react';

import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';

import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import bash from 'react-syntax-highlighter/dist/cjs/languages/prism/bash';
import dockerfile from 'react-syntax-highlighter/dist/cjs/languages/prism/docker';
import go from 'react-syntax-highlighter/dist/cjs/languages/prism/go';
import javascript from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import toml from 'react-syntax-highlighter/dist/cjs/languages/prism/toml';
import typescript from 'react-syntax-highlighter/dist/cjs/languages/prism/typescript';
import yaml from 'react-syntax-highlighter/dist/cjs/languages/prism/yaml';

SyntaxHighlighter.registerLanguage('bash', bash);
SyntaxHighlighter.registerLanguage('dockerfile', dockerfile);
SyntaxHighlighter.registerLanguage('go', go);
SyntaxHighlighter.registerLanguage('javascript', javascript);
SyntaxHighlighter.registerLanguage('toml', toml);
SyntaxHighlighter.registerLanguage('typescript', typescript);
SyntaxHighlighter.registerLanguage('yaml', yaml);

interface CodeBlockProps {
  language?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ children, language = '' }) => {
  const showLineNumbers = !['', 'bash'].includes(language);

  return (
    <SyntaxHighlighter
      PreTag="div"
      style={atomDark}
      language={language}
      showLineNumbers={showLineNumbers}
    >
      {children}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
