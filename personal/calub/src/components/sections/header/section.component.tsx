import React from 'react';
import { useSnapshot } from 'valtio';

import { DEFAULT_HEADER_IMAGE, HeaderConfig } from '../../../models';
import { headerFiltersStore } from '../../../store';
import LinkListComponent from './link-list.component';
import ImageComponent from './profile-image.component';

import classes from './section.module.scss';

interface HeaderSectionComponentProps {
  config: HeaderConfig;
}

const HeaderSectionComponent: React.FC<HeaderSectionComponentProps> = ({ config }) => {
  const { introText, fullName, image = DEFAULT_HEADER_IMAGE } = config;
  const headerFilters = useSnapshot(headerFiltersStore);

  return (
    <>
      <div className={classes.container}>
        {image.show && (image.path || '') !== '' && headerFilters.showProfilePicture && (
          <div className={classes.imageContainer}>
            <ImageComponent title={fullName} image={image} />
          </div>
        )}

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
