import React from 'react';

import { Post } from '../../../models';

import classes from './posts-cards-item.module.scss';

interface PostsCardsItemProps {
  post: Post;
}

const PostsCardsItem: React.FC<PostsCardsItemProps> = ({ post }) => {
  return (
    <div className={classes.container}>
      <a href={post.href} className={classes.link}>
        <span className={classes.title}>{post.title}</span>
      </a>

      <div className={classes.tags}>
        {post.tags.map((tag) => (
          <a key={tag.name} href={tag.href} className={classes.tag}>
            <span
              className={classNames(
                tag.color,
                'inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium hover:bg-opacity-60'
              )}
            >
              {tag.name}
            </span>
          </a>
        ))}
      </div>

      <p className={classes.snippet}>{post.snippet}</p>
    </div>
  );
};

const classNames = (...classes: string[]): string => {
  return classes.filter(Boolean).join(' ');
};

export default PostsCardsItem;
