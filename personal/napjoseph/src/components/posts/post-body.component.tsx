import React from 'react';

import ReactMarkdown from 'react-markdown';
import { Components } from 'react-markdown/src/ast-to-react';

import { Post } from '../../models';
import CodeBlock from '../ui/blocks/code-block.component';

import classes from './post-body.module.scss';

interface PostBodyProps {
  post?: Post;
}

const PostBody: React.FC<PostBodyProps> = ({ post }) => {
  if (!post) return null;

  const customRenderers: Components = {
    p({ children }) {
      return <p>{children}</p>;
    },

    code({ inline, className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || '');
      if (!inline && match) {
        return (
          <div className={classes.padding}>
            <CodeBlock language={match[1]} {...props}>
              {String(children).replace(/\n$/, '')}
            </CodeBlock>
          </div>
        );
      } else {
        return (
          <div className={classes.inlineCode}>
            <code className={className} {...props}>
              {children}
            </code>
          </div>
        );
      }
    }
  };

  return (
    <div className={classes.container}>
      <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
    </div>
  );
};

export default PostBody;
