import React from 'react';

import { Post } from '../../models';
import PostCard from './post-card.component';

import classes from './post-card-list.module.scss';

interface PostCardListProps {
  title: string;
  description?: string;
  posts: Post[];
  hideIfEmpty?: boolean;
}

const PostCardList: React.FC<PostCardListProps> = ({
  title = 'Posts',
  description,
  posts = [],
  hideIfEmpty = true
}) => {
  if (hideIfEmpty && !posts.length) return null;

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <div>
          <h2 className={classes.title}>{title}</h2>
          {description && <p className={classes.description}>{description}</p>}
        </div>
        <div className={classes.posts}>
          {posts.length ? (
            posts.map((post) => <PostCard key={post.title} post={post} />)
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

export default PostCardList;
