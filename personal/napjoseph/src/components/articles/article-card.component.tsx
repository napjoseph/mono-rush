import React from 'react';

import { motion } from 'framer-motion';

import { Article } from '../../models';
import ArticleHeader from './article-header.component';

import classes from './article-card.module.scss';

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <motion.div className={classes.container} whileHover={{ scale: 1.05 }}>
      <ArticleHeader article={article} forCard={true} />

      <p className={classes.excerpt}>{article.excerpt}</p>
    </motion.div>
  );
};

export default ArticleCard;
