import React from 'react';

import Link from 'next/link';

import { PostTag } from '../../models';

import classes from './tag-pill.module.scss';

interface TagPillProps {
  tag: string;
  postTag?: PostTag;
}

const TagPill: React.FC<TagPillProps> = ({ tag }) => {
  return (
    <div className={classes.container}>
      <Link href="#">
        <a className={classes.tag}>
          <span className={classes.inner}>{tag}</span>
        </a>
      </Link>
    </div>
  );
};

export default TagPill;
