import React from 'react';

import Link from 'next/link';

import formatDate from '../../lib/utils/format-date';
import { Post } from '../../models';
import TagPill from '../tags/tag-pill.component';
import convertToPostTag from '../../lib/utils/convert-to-post-tag';
import joinClassNames from '../../lib/utils/join-class-names';

import classes from './post-header.module.scss';

interface PostHeaderProps {
  post: Post;

  // When set to true, it uses a smaller header with a link to the post.
  forCard?: boolean;
}

const PostHeader: React.FC<PostHeaderProps> = ({ post, forCard = false }) => {
  const { title = '', publishedDate = '', tags = [] } = post;

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
        <TagPill key={tag} tag={convertToPostTag(tag)} />
      ))}
    </div>
  );

  if (forCard) {
    return (
      <div className={joinClassNames(classes.container, classes.card)}>
        <Link href={`/posts/${post.slug}`}>
          <a className={classes.link}>
            <span className={classes.title}>{post.title}</span>
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

export default PostHeader;
