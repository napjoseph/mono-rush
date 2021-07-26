import React from 'react';

import { Article } from '../../models';
import ArticleCard from './article-card.component';
import TotalResults from '../snippets/total-results/total-results.component';

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
    <div>
      <div className="relative">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
            {title}
          </h2>
          {description && <p className="text-xl text-gray-500">{description}</p>}
          {showTotal && (
            <div className="text-gray-500">
              <TotalResults total={articles.length} unit="article" />
            </div>
          )}
        </div>
        <div className="mt-12 grid gap-6 lg:gap-16 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
          {articles.length ? (
            articles.map((article) => <ArticleCard key={article.title} article={article} />)
          ) : (
            <p className="text-gray-600 text-sm">
              It looks a little empty right now. Please check back later.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ArticleCardList;
