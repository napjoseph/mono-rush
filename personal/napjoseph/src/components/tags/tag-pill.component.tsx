import React from 'react';

import Link from 'next/link';
import { motion } from 'framer-motion';

import { ArticleTag } from '../../models';

import classes from './tag-pill.module.scss';

interface TagPillProps {
  tag?: ArticleTag;
}

const TagPill: React.FC<TagPillProps> = ({ tag }) => {
  if (!tag) return null;

  return (
    <motion.div className={classes.container} whileHover={{ scale: 1.1 }}>
      <Link href={`/tags/${tag.slug}`}>
        <a className={classes.tag}>
          <span className={classes.inner}>{tag.name}</span>
        </a>
      </Link>
    </motion.div>
  );
};

export default TagPill;
