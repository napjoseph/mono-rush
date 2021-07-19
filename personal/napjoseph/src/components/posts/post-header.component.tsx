import React from 'react';
import formatDate from '../../lib/utils/format-date';

import classes from './post-header.module.scss';

interface PostHeaderProps {
  title?: string;
  publishedDate?: string;
}

const PostHeader: React.FC<PostHeaderProps> = ({ title = '', publishedDate = '' }) => {
  return (
    <>
      <div className={classes.container}>
        <h2 className={classes.title}>{title}</h2>
        <p className={classes.publishedDate}>{formatDate(publishedDate, 'DDD')}</p>
      </div>
    </>
  );
};

export default PostHeader;
