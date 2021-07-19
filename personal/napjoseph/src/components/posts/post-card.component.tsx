import React from 'react';

import { Post } from '../../models';
import PostHeader from './post-header.component';

import classes from './post-card.module.scss';

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <div className={classes.container}>
      <PostHeader post={post} forCard={true} />

      <p className={classes.excerpt}>{post.excerpt}</p>
    </div>
  );
};

export default PostCard;
