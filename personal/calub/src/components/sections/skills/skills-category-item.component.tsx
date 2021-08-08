import React from 'react';
import { useSnapshot } from 'valtio';

import { SkillsCategory } from '../../../models';
import { skillsFiltersStore } from '../../../store';
import joinClassNames from '../../../utils/join-class-names';
import SkillsItemBarComponent from './skills-item-bar.component';
import SkillsItemPillComponent from './skills-item-pill.component';

interface SkillsCategoryItemComponentProps {
  category: SkillsCategory;
}

const SkillsCategoryItemComponent: React.FC<SkillsCategoryItemComponentProps> = ({ category }) => {
  const skillsFilters = useSnapshot(skillsFiltersStore);

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

  const useProgressBar = skillsFilters.showFamiliarity && skillsFilters.useProgressBar;

  return (
    <>
      <div className="block w-full">
        <h3 className="font-medium uppercase">{title}</h3>

        {list && (
          <ul
            className={joinClassNames(
              'mt-1 ml-4 flex',
              useProgressBar ? 'flex-col gap-2' : 'flex-wrap gap-1'
            )}
          >
            {list.map((item, index) => {
              return (
                <li key={index}>
                  {useProgressBar ? (
                    <SkillsItemBarComponent item={item} />
                  ) : (
                    <div className="inline">
                      <SkillsItemPillComponent
                        item={item}
                        showFamiliarity={skillsFilters.showFamiliarity}
                      />
                    </div>
                  )}
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
