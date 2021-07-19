import React from 'react';

import { Utterances } from 'utterances-react-component';

import { SITE_CONFIG } from '../../config';
import { Post } from '../../models';

import classes from './post-comments.module.scss';

interface PostCommentsProps {
  post?: Post;
}

const PostComments: React.FC<PostCommentsProps> = ({ post }) => {
  if (SITE_CONFIG.comments === undefined || SITE_CONFIG.comments.using === 'none') {
    return null;
  }

  let commentsSection: JSX.Element = null;
  if (post.disableComments !== undefined && post.disableComments) {
    commentsSection = <p className={classes.disabled}>Comments are disabled.</p>;
  }
  if (SITE_CONFIG.comments.using === 'utterances') {
    commentsSection = <Utterances {...SITE_CONFIG.comments.props} />;
  }

  return (
    <>
      <div className={classes.container}>{commentsSection}</div>
    </>
  );
};

export default PostComments;
