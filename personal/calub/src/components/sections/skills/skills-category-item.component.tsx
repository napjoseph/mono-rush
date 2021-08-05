import React from 'react';

import { SkillsCategory } from '../../../models';
import SkillsItemBarComponent from './skills-item-bar.component';
import SkillsItemPillComponent from './skills-item-pill.component';

interface SkillsCategoryItemComponentProps {
  category: SkillsCategory;
}

const SkillsCategoryItemComponent: React.FC<SkillsCategoryItemComponentProps> = ({ category }) => {
  const { title, items = [] } = category;
  const list = items
    .filter((item) => {
      if (!item.meta || item.meta.show === undefined) return true;

      return !!item.meta.show;
    })
    .sort((a, b) => {
      if (a.rating > b.rating) {
        return -1;
      }
      if (a.rating < b.rating) {
        return 1;
      }
      return 0;
    });

  return (
    <>
      <div className="print:avoid-page-break-inside">
        <h3 className="font-medium uppercase">{title}</h3>

        {list && (
          <ul className="mt-1 ml-4 print:flex print:flex-wrap print:gap-1">
            {list.map((item, index) => {
              return (
                <li key={index}>
                  <div className="print:hidden">
                    <SkillsItemBarComponent item={item}></SkillsItemBarComponent>
                  </div>
                  <div className="hidden print:inline">
                    <SkillsItemPillComponent item={item}></SkillsItemPillComponent>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </>
  );
};

export default SkillsCategoryItemComponent;
