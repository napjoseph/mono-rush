import React from 'react';
import { useSnapshot } from 'valtio';

import { HeaderConfig, HeaderImage } from '../../../models';
import { headerFiltersStore } from '../../../store';
import joinClassNames from '../../../utils/join-class-names';
import LinkListComponent from './link-list.component';
import ProfileImageComponent from './profile-image.component';

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
      <div className="flex flex-col items-center space-x-4 space-y-4 lg:space-x-6 xs:flex-row">
        {headerFilters.showProfilePicture &&
          headerFilters.profilePictures.length > 0 &&
          (image.path || '') !== '' && (
            <div
              className={joinClassNames(
                'w-60 h-60 sm:h-44 sm:w-44 print:h-40 print:w-40 overflow-hidden flex-none',
                headerFilters.useCircularImage ? 'rounded-full' : '',
                headerFilters.addDropShadow ? 'shadow-xl' : ''
              )}
            >
              <ProfileImageComponent title={fullName} image={image} />
            </div>
          )}

        <div className="grow">
          {introText && <span className="text-sm uppercase font-extralight">{introText}</span>}
          <h1 className="text-5xl font-medium uppercase">{fullName}</h1>

          <div className="mt-3">
            <LinkListComponent items={config.links} />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderSectionComponent;
