import React from 'react';

import { ArticleTag } from '../../models';

import TagPill from './tag-pill.component';
import classes from './tag-card.module.scss';

interface TagCardProps {
  tag: ArticleTag;
}

const TagCard: React.FC<TagCardProps> = ({ tag }) => {
  return (
    <div className={classes.container}>
      <TagPill tag={tag} />
    </div>
  );
};

export default TagCard;
