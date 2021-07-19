import React from 'react';

import ReactMarkdown from 'react-markdown';
import { Components } from 'react-markdown/src/ast-to-react';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

import { Post } from '../../models';

import classes from './post-body.module.scss';

interface PostBodyProps {
  post?: Post;
}

const PostBody: React.FC<PostBodyProps> = ({ post }) => {
  if (!post) return null;

  const customRenderers: Components = {
    p(paragraph) {
      return <p>{paragraph.children}</p>;
    },

    code(code) {
      const { className = '', children } = code;
      const language = className === '' ? className : className.split('-')[1];
      const showLineNumbers = !['', 'bash'].includes(language);

      return (
        <>
          <div className={classes.padding}>
            <SyntaxHighlighter
              style={atomDark}
              language={language}
              showLineNumbers={showLineNumbers}
            >
              {children}
            </SyntaxHighlighter>
          </div>
        </>
      );
    }
  };

  return (
    <div className={classes.container}>
      <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
    </div>
  );
};

export default PostBody;
