import React from 'react';
import { Box, Text } from '@chakra-ui/react';
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
    commentsSection = <Text>Comments are disabled.</Text>;
  }
  if (SITE_CONFIG.comments.using === 'utterances') {
    commentsSection = <Utterances {...SITE_CONFIG.comments.props} />;
  }

  return <Box>{commentsSection}</Box>;
};

export default ArticleComments;
