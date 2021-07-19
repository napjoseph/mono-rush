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
    p(paragraph) {
      return <p>{paragraph.children}</p>;
    },

    code({ className = '', children }) {
      const match = /language-(\w+)/.exec(className);
      const props = {
        language: match !== null ? match[1] : ''
      };

      return (
        <>
          <div className={classes.padding}>
            <CodeBlock {...props}>{String(children).replace(/\n$/, '')}</CodeBlock>
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
