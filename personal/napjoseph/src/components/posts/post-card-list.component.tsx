import React from 'react';

import { Post } from '../../models';
import PostCard from './post-card.component';

import classes from './post-card-list.module.scss';
import TotalResults from '../snippets/total-results/total-results.component';

interface PostCardListProps {
  title: string;
  posts: Post[];
  description?: string;
  showTotal?: boolean;
  hideIfEmpty?: boolean;
}

const PostCardList: React.FC<PostCardListProps> = ({
  title = 'Posts',
  posts = [],
  description,
  showTotal = false,
  hideIfEmpty = true
}) => {
  if (hideIfEmpty && !posts.length) return null;

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <div className={classes.information}>
          <h2 className={classes.title}>{title}</h2>
          {description && <p className={classes.description}>{description}</p>}
          {showTotal && (
            <div className={classes.total}>
              <TotalResults total={posts.length} unit="post" />
            </div>
          )}
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
