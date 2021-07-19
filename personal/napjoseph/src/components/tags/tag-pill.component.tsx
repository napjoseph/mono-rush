import React from 'react';

import Link from 'next/link';

import { PostTag } from '../../models';

import classes from './tag-pill.module.scss';

interface TagPillProps {
  tag?: PostTag;
}

const TagPill: React.FC<TagPillProps> = ({ tag }) => {
  if (!tag) return null;

  return (
    <div className={classes.container}>
      <Link href={`/tags/${tag.slug}`}>
        <a className={classes.tag}>
          <span className={classes.inner}>{tag.name}</span>
        </a>
      </Link>
    </div>
  );
};

export default TagPill;
