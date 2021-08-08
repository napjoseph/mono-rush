import React from 'react';

import Image from 'next/image';

import { HeaderImage } from '../../../models';
import getPublicBasePath from '../../../utils/get-public-base-path';

interface ImageComponentProps {
  title: string;
  image: HeaderImage;
}

const ImageComponent: React.FC<ImageComponentProps> = ({ title = 'Profile Picture', image }) => {
  let imagePath = image.path || '';
  if (image.source === 'static') {
    imagePath = `${getPublicBasePath()}${image.path}`;
  }

  return (
    <>
      <Image
        className="object-contain"
        src={imagePath}
        alt={title}
        title={title}
        width={300}
        height={300}
        quality={100}
        unoptimized={true}
      />
    </>
  );
};

export default ImageComponent;
