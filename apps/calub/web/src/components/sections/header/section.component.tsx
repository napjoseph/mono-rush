import React from 'react';

import { DEFAULT_HEADER_IMAGE, HeaderConfig } from '../../../models';
import LinkListComponent from './link-list.component';
import ImageComponent from './profile-image.component';

import classes from './section.module.scss';

interface HeaderSectionComponentProps {
  config: HeaderConfig;
}

const HeaderSectionComponent: React.FC<HeaderSectionComponentProps> = ({ config }) => {
  const { introText, fullName, image = DEFAULT_HEADER_IMAGE } = config;

  return (
    <>
      <div className={classes.container}>
        <ImageComponent title={fullName} image={image} />

        <div className={classes.infoContainer}>
          {introText && <span className={classes.introText}>{introText}</span>}
          <h1 className={classes.title}>{fullName}</h1>

          <div className={classes.links}>
            <LinkListComponent items={config.links} />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderSectionComponent;
