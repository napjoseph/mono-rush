import React from 'react';

import Link from 'next/link';

import { Post } from '../../models';

import classes from './post-card.module.scss';

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <div className={classes.container}>
      <Link href={`/posts/${post.slug}`}>
        <a className={classes.link}>
          <span className={classes.title}>{post.title}</span>
        </a>
      </Link>

      <div className={classes.tags}>
        {post.tags.map((tag) => (
          <Link key={tag} href="#">
            <a className={classes.tag}>
              <span className={classes.inner}>{tag}</span>
            </a>
          </Link>
        ))}
      </div>

      <p className={classes.excerpt}>{post.excerpt}</p>
    </div>
  );
};

export default PostCard;
