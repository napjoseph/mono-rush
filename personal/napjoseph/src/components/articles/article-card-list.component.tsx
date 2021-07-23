import React from 'react';

import { Article } from '../../models';
import ArticleCard from './article-card.component';
import TotalResults from '../snippets/total-results/total-results.component';

import classes from './article-card-list.module.scss';

interface ArticleCardListProps {
  title: string;
  articles: Article[];
  description?: string;
  showTotal?: boolean;
  hideIfEmpty?: boolean;
}

const ArticleCardList: React.FC<ArticleCardListProps> = ({
  title = 'Articles',
  articles = [],
  description,
  showTotal = false,
  hideIfEmpty = true
}) => {
  if (hideIfEmpty && !articles.length) return null;

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <div className={classes.information}>
          <h2 className={classes.title}>{title}</h2>
          {description && <p className={classes.description}>{description}</p>}
          {showTotal && (
            <div className={classes.total}>
              <TotalResults total={articles.length} unit="article" />
            </div>
          )}
        </div>
        <div className={classes.articles}>
          {articles.length ? (
            articles.map((article) => <ArticleCard key={article.title} article={article} />)
          ) : (
            <p className={classes.empty}>
              It looks a little empty right now. Please check back later.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ArticleCardList;
