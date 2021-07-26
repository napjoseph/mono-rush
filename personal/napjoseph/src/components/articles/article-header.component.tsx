import React from 'react';

import Link from 'next/link';

import formatDate from '../../lib/utils/format-date';
import { Article } from '../../models';
import TagPill from '../tags/tag-pill.component';
import convertToArticleTag from '../../lib/utils/convert-to-article-tag';
import joinClassNames from '../../lib/utils/join-class-names';

interface ArticleHeaderProps {
  article: Article;

  // When set to true, it uses a smaller header with a link to the article.
  forCard?: boolean;
}

const ArticleHeader: React.FC<ArticleHeaderProps> = ({ article, forCard = false }) => {
  const { title = '', frontMatter } = article;
  const { publishedDate = '', tags = [] } = frontMatter;

  const publishedDateSection = publishedDate !== '' && (
    <p className="text-gray-400">
      Published on{' '}
      <span className="font-medium" title={publishedDate}>
        {formatDate(publishedDate, 'DDD')}
      </span>
    </p>
  );

  const tagsSection = tags && tags.length !== 0 && (
    <div>
      {tags.map((tag) => (
        <TagPill key={tag} tag={convertToArticleTag(tag)} />
      ))}
    </div>
  );

  if (forCard) {
    return (
      <div className={joinClassNames('flex flex-col gap-2', 'gap-1.5')}>
        <Link href={`/posts/${article.slug}`}>
          <a className="block">
            <span className="text-2xl text-gray-900 main-link-hover">{article.title}</span>
          </a>
        </Link>

        {publishedDateSection}
        {tagsSection}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-4xl">{title}</h2>

      {publishedDateSection}
      {tagsSection}
    </div>
  );
};

export default ArticleHeader;
