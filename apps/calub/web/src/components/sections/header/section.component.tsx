import React from 'react';

import { HeaderConfig } from '../../../models';

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
    </>
  );
};

export default HeaderSectionComponent;
