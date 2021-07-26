import React from 'react';
import { MDXRemote } from 'next-mdx-remote';

import { Article } from '../../models';
import CustomComponents from './custom-components/index.component';

import classes from './article-body.module.scss';

interface ArticleBodyProps {
  article?: Article;
}

const ArticleBody: React.FC<ArticleBodyProps> = ({ article }) => {
  if (!article) return null;

  return (
    <div className={classes.container}>
      <MDXRemote {...article.serializedContent} components={CustomComponents} />
    </div>
  );
};

export default ArticleBody;
