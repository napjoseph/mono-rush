import React from 'react';

import { SkillsConfig } from '../../../models';
import SkillsCategoryItemComponent from './skills-category-item.component';

interface SkillsSectionComponentProps {
  config: SkillsConfig;
}

const SkillsSectionComponent: React.FC<SkillsSectionComponentProps> = ({ config }) => {
  const { items = [] } = config;
  if (!items) return null;

  const list = items.filter((item) => {
    if (!item.meta || item.meta.show === undefined) return true;

    return !!item.meta.show;
  });

  return (
    <div className="text-sm text-gray-700">
      <ul className="flex flex-col gap-2">
        {list.map((item, index) => {
          return (
            <li key={index}>
              <SkillsCategoryItemComponent category={item} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SkillsSectionComponent;
