import React from 'react';
import { MDXRemote } from 'next-mdx-remote';

import { Article } from '../../models';
import CustomComponents from './custom-components/index.component';

interface ArticleBodyProps {
  article?: Article;
}

const ArticleBody: React.FC<ArticleBodyProps> = ({ article }) => {
  if (!article) return null;

  return (
    <div className="text-base text-gray-700 leading-relaxed flex flex-col gap-3">
      <MDXRemote {...article.serializedContent} components={CustomComponents} />
    </div>
  );
};

export default ArticleBody;
