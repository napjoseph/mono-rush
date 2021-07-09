import React from 'react';

import LogoComponent from '../../assets/logo.component';
import {
  DividerConfig,
  DEFAULT_DIVIDER_CONFIG,
  DividerLogoConfig,
  DEFAULT_DIVIDER_LOGO_CONFIG
} from '../../../models';

import classes from './section.module.scss';

interface DividerSectionComponentProps {
  config?: DividerConfig;
}

const DividerSectionComponent: React.FC<DividerSectionComponentProps> = ({
  config = DEFAULT_DIVIDER_CONFIG
}) => {
  const logoConfig: DividerLogoConfig = { ...DEFAULT_DIVIDER_LOGO_CONFIG, ...config.logo };

  return (
    <>
      <div className={classes.container}>
        <div className={classes.borderContainer} aria-hidden="true">
          <div className={classes.border}></div>
        </div>
        <div className={classes.iconContainer}>
          <span className={classes.icon}>
            <LogoComponent overrideClassName={logoConfig.className} fill={logoConfig.fill} />
          </span>
        </div>
      </div>
    </>
  );
};

export default DividerSectionComponent;
