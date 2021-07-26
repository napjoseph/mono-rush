import React from 'react';

import { Utterances } from 'utterances-react-component';

import { SITE_CONFIG } from '../../config';
import { Article } from '../../models';

interface ArticleCommentsProps {
  article?: Article;
}

const ArticleComments: React.FC<ArticleCommentsProps> = ({ article }) => {
  if (SITE_CONFIG.comments === undefined || SITE_CONFIG.comments.using === 'none') {
    return null;
  }

  let commentsSection: JSX.Element = null;
  if (article.frontMatter.disableComments !== undefined && article.frontMatter.disableComments) {
    commentsSection = <p>Comments are disabled.</p>;
  }
  if (SITE_CONFIG.comments.using === 'utterances') {
    commentsSection = <Utterances {...SITE_CONFIG.comments.props} />;
  }

  return (
    <>
      <div className="block">{commentsSection}</div>
    </>
  );
};

export default ArticleComments;
