import React from 'react';

import { motion } from 'framer-motion';

import { Article } from '../../models';
import ArticleHeader from './article-header.component';

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <motion.div whileHover={{ scale: 1.05 }}>
      <ArticleHeader article={article} forCard={true} />

      <p className="mt-3 text-sm text-gray-500">{article.excerpt}</p>
    </motion.div>
  );
};

export default ArticleCard;
