import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { FooterLink } from '../../../models';

interface LinkItemComponentProps {
  link: FooterLink;
}

const LinkItemComponent: React.FC<LinkItemComponentProps> = ({ link }) => {
  return (
    <>
      <span title={link.title}>
        <a href={link.url} target="_blank" rel="noreferrer">
          <FontAwesomeIcon
            icon={link.icon}
            size="lg"
            fixedWidth
            className="text-gray-600 hover:text-gray-300 transition duration-150 ease-in-out"
          />
        </a>
      </span>
    </>
  );
};

export default LinkItemComponent;
