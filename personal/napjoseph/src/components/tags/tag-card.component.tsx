import React from 'react';

import { ArticleTag } from '../../models';
import TagPill from './tag-pill.component';

interface TagCardProps {
  tag: ArticleTag;
}

const TagCard: React.FC<TagCardProps> = ({ tag }) => {
  return (
    <div className="inline-block">
      <TagPill tag={tag} />
    </div>
  );
};

export default TagCard;
