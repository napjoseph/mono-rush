import React from 'react';

import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

export const FontAwesomeIcon: React.FC<FontAwesomeIconProps> = ({ className }) => {
  return <i className={`${className} fa-mocked`} />;
};
