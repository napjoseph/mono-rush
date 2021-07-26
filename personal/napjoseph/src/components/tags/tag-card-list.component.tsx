import React from 'react';

import { ArticleTag } from '../../models';
import TagCard from './tag-card.component';
import TotalResults from '../snippets/total-results/total-results.component';

interface TagCardListProps {
  title: string;
  tags: ArticleTag[];
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
    <div className="block">
      <div className="relative">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
            {title}
          </h2>
          {description && <p className="text-xl text-gray-500">{description}</p>}
          {showTotal && (
            <div className="text-gray-500">
              <TotalResults total={tags.length} unit="tag" />
            </div>
          )}
        </div>
        <div className="mt-12">
          {tags.length ? (
            tags.map((tag) => <TagCard key={tag.name} tag={tag} />)
          ) : (
            <p className="text-gray-600 text-sm">
              It looks a little empty right now. Please check back later.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TagCardList;
