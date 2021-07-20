import React from 'react';

import { PostTag } from '../../models';
import TagCard from './tag-card.component';

import classes from './tag-card-list.module.scss';
import TotalResults from '../snippets/total-results/total-results.component';

interface TagCardListProps {
  title: string;
  tags: PostTag[];
  description?: string;
  showTotal?: boolean;
  hideIfEmpty?: boolean;
}

const TagCardList: React.FC<TagCardListProps> = ({
  title = 'Tags',
  tags = [],
  description,
  showTotal = false,
  hideIfEmpty = true
}) => {
  if (hideIfEmpty && !tags.length) return null;

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <div className={classes.information}>
          <h2 className={classes.title}>{title}</h2>
          {description && <p className={classes.description}>{description}</p>}
          {showTotal && (
            <div className={classes.total}>
              <TotalResults total={tags.length} unit="tag" />
            </div>
          )}
        </div>
        <div className={classes.tags}>
          {tags.length ? (
            tags.map((tag) => <TagCard key={tag.name} tag={tag} />)
          ) : (
            <p className={classes.empty}>
              It looks a little empty right now. Please check back later.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TagCardList;
