import React from 'react';

import Image from 'next/image';

import { DEFAULT_HEADER_IMAGE, HeaderConfig } from '../../../models';
import getPublicBasePath from '../../../utils/get-public-base-path';
import LinkListComponent from './link-list.component';

import classes from './section.module.scss';

interface HeaderSectionComponentProps {
  config: HeaderConfig;
}

const HeaderSectionComponent: React.FC<HeaderSectionComponentProps> = ({ config }) => {
  const { introText, fullName, image = DEFAULT_HEADER_IMAGE } = config;
  let imagePath = image.path || '';
  if (image.source === 'static') {
    imagePath = `${getPublicBasePath()}${image.path}`;
  }

  return (
    <>
      <div className={classes.container}>
        {image.show && imagePath !== '' && (
          <div className={classes.imageContainer}>
            <Image
              className={classes.image}
              src={imagePath}
              alt={fullName}
              title={fullName}
              width={180}
              height={180}
              quality={100}
              unoptimized={true}
            />
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
