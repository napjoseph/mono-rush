import React from 'react';

import { CharacterReferencesConfig } from '../../../models';
import CharacterReferencesItemComponent from './reference-item.component';

interface CharacterReferencesSectionComponentProps {
  config: CharacterReferencesConfig;
}

const CharacterReferencesSectionComponent: React.FC<CharacterReferencesSectionComponentProps> = ({
  config
}) => {
  const { items = [] } = config;

  return (
    <>
      <div className="text-sm text-gray-700">
        <ul className="list-square ml-4 grid grid-cols-1 sm:grid-cols-2 gap-y-1 gap-x-2">
          {items
            .filter((item) => {
              if (!item.meta || item.meta.show === undefined) return true;

              return !!item.meta.show;
            })
            .map((item, index) => {
              return (
                <li key={index}>
                  <CharacterReferencesItemComponent item={item} />
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
};

export default CharacterReferencesSectionComponent;
