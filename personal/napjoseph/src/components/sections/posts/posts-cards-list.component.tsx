import React from 'react';
import { Post } from '../../../models';
import PostsCardsItem from './posts-cards-item.component';

import classes from './posts-cards-list.module.scss';

interface PostsCardsListProps {
  title: string;
  description?: string;
  posts: Post[];
  hideIfEmpty?: boolean;
}

const PostsCardsList: React.FC<PostsCardsListProps> = ({
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
            posts.map((post) => <PostsCardsItem key={post.title} post={post} />)
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

export default PostsCardsList;
