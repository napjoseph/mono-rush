import React from 'react';

import { HeaderConfig } from '../../../models';
import LinkListComponent from './link-list.component';

import classes from './section.module.scss';

interface HeaderSectionComponentProps {
  config: HeaderConfig;
}

const HeaderSectionComponent: React.FC<HeaderSectionComponentProps> = ({ config }) => {
  const { introText, fullName } = config;

  return (
    <>
      {introText && <span className={classes.introText}>{introText}</span>}
      <h1 className={classes.title}>{fullName}</h1>

      <div className={classes.links}>
        <LinkListComponent items={config.links} />
      </div>
    </>
  );
};

export default HeaderSectionComponent;
