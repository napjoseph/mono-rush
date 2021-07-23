import React from 'react';

import Link from 'next/link';

import formatDate from '../../lib/utils/format-date';
import { Article } from '../../models';
import TagPill from '../tags/tag-pill.component';
import convertToArticleTag from '../../lib/utils/convert-to-article-tag';
import joinClassNames from '../../lib/utils/join-class-names';

import classes from './article-header.module.scss';

interface ArticleHeaderProps {
  article: Article;

  // When set to true, it uses a smaller header with a link to the article.
  forCard?: boolean;
}

const ArticleHeader: React.FC<ArticleHeaderProps> = ({ article, forCard = false }) => {
  const { title = '', frontMatter } = article;
  const { publishedDate = '', tags = [] } = frontMatter;

  const publishedDateSection = publishedDate !== '' && (
    <p className={classes.publishedDate}>
      Published on{' '}
      <span className={classes.date} title={publishedDate}>
        {formatDate(publishedDate, 'DDD')}
      </span>
    </p>
  );

  const tagsSection = tags && tags.length !== 0 && (
    <div className={classes.tags}>
      {tags.map((tag) => (
        <TagPill key={tag} tag={convertToArticleTag(tag)} />
      ))}
    </div>
  );

  if (forCard) {
    return (
      <div className={joinClassNames(classes.container, classes.card)}>
        <Link href={`/posts/${article.slug}`}>
          <a className={classes.link}>
            <span className={classes.title}>{article.title}</span>
          </a>
        </Link>

        {publishedDateSection}
        {tagsSection}
      </div>
    );
  }

  return (
    <div className={classes.container}>
      <h2 className={classes.title}>{title}</h2>

      {publishedDateSection}
      {tagsSection}
    </div>
  );
};

export default ArticleHeader;
