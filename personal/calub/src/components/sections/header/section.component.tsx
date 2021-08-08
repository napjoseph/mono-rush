import React from 'react';
import { useSnapshot } from 'valtio';

import { HeaderConfig, HeaderImage } from '../../../models';
import { headerFiltersStore } from '../../../store';
import LinkListComponent from './link-list.component';
import ProfileImageComponent from './profile-image.component';

import classes from './section.module.scss';

interface HeaderSectionComponentProps {
  config: HeaderConfig;
}

const HeaderSectionComponent: React.FC<HeaderSectionComponentProps> = ({ config }) => {
  const { introText, fullName } = config;

  const headerFilters = useSnapshot(headerFiltersStore);
  const image: HeaderImage | null =
    headerFilters.profilePictures.length > 0
      ? headerFilters.profilePictures[headerFilters.selectedProfilePictureIndex]
      : null;

  return (
    <>
      <div className={classes.container}>
        {headerFilters.showProfilePicture &&
          headerFilters.profilePictures.length > 0 &&
          (image.path || '') !== '' && (
            <div className={classes.imageContainer}>
              <ProfileImageComponent title={fullName} image={image} />
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
