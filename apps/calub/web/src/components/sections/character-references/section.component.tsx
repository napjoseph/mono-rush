import React from 'react';

import { CharacterReferencesConfig } from '../../../models';
import CharacterReferencesItemComponent from './reference-item.component';

import classes from './section.module.scss';

interface CharacterReferencesSectionComponentProps {
  config: CharacterReferencesConfig;
}

const CharacterReferencesSectionComponent: React.FC<CharacterReferencesSectionComponentProps> = ({
  config
}) => {
  const { items = [] } = config;

  return (
    <>
      <div className={classes.container}>
        <ul className={classes.list}>
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
