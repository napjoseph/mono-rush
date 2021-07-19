import React from 'react';

import classes from './post-body.module.scss';

interface PostBodyProps {
  content?: string;
}

const PostBody: React.FC<PostBodyProps> = ({ content }) => {
  if (!content) return null;

  return (
    <>
      <div className={classes.markdown} dangerouslySetInnerHTML={{ __html: content }} />
    </>
  );
};

export default PostBody;
