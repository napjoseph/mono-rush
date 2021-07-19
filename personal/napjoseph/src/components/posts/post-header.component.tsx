import React from 'react';

import Link from 'next/link';

import formatDate from '../../lib/utils/format-date';
import { Post } from '../../models';
import TagPill from '../tags/tag-pill.component';

import classes from './post-header.module.scss';
import convertToPostTag from '../../lib/utils/convert-to-post-tag';

interface PostHeaderProps {
  post: Post;

  // When set to true, it uses a smaller header with a link to the post.
  forCard?: boolean;
}

const PostHeader: React.FC<PostHeaderProps> = ({ post, forCard = false }) => {
  const { title = '', publishedDate = '', tags = [] } = post;

  return (
    <>
      <div className={classes.container}>
        {forCard ? (
          <Link href={`/posts/${post.slug}`}>
            <a className={classes.link}>
              <span className={classes.title}>{post.title}</span>
            </a>
          </Link>
        ) : (
          <h2 className={classes.title}>{title}</h2>
        )}

        {publishedDate !== '' && (
          <p className={classes.publishedDate}>{formatDate(publishedDate, 'DDD')}</p>
        )}

        {tags && tags.length !== 0 && (
          <div className={classes.tags}>
            {tags.map((tag) => (
              <TagPill key={tag} tag={convertToPostTag(tag)} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default PostHeader;
