import React from 'react';

import { motion } from 'framer-motion';

import { Post } from '../../models';
import PostHeader from './post-header.component';

import classes from './post-card.module.scss';

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <motion.div className={classes.container} whileHover={{ scale: 1.05 }}>
      <PostHeader post={post} forCard={true} />

      <p className={classes.excerpt}>{post.excerpt}</p>
    </motion.div>
  );
};

export default PostCard;
