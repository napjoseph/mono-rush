import React from 'react';

import Image from 'next/image';

import { DEFAULT_HEADER_IMAGE, HeaderImage } from '../../../models';
import getPublicBasePath from '../../../utils/get-public-base-path';

import classes from './profile-image.module.scss';

interface ImageComponentProps {
  title: string;
  image: HeaderImage;
}

const ImageComponent: React.FC<ImageComponentProps> = ({
  title = 'Profile Picture',
  image = DEFAULT_HEADER_IMAGE
}) => {
  let imagePath = image.path || '';
  if (image.source === 'static') {
    imagePath = `${getPublicBasePath()}${image.path}`;
  }

  return (
    <>
      {image.show && imagePath !== '' && (
        <div className={classes.imageContainer}>
          <Image
            className={classes.image}
            src={imagePath}
            alt={title}
            title={title}
            width={180}
            height={180}
            quality={100}
            unoptimized={true}
          />
        </div>
      )}
    </>
  );
};

export default ImageComponent;
