import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { HeaderLinksItem } from '../../../models';

interface LinkItemComponentProps {
  item: HeaderLinksItem;
}

const LinkItemComponent: React.FC<LinkItemComponentProps> = ({ item }) => {
  const { title, value, linkTo, icon } = item;

  let content: JSX.Element;
  if (linkTo === '') {
    content = <>{value}</>;
  } else {
    content = (
      <a href={linkTo} className="color-link" target="_blank" rel="noreferrer">
        {value}
      </a>
    );
  }

  return (
    <>
      <div className="flex items-start text-gray-800">
        <div className="mr-2" title={title}>
          <FontAwesomeIcon
            icon={icon}
            size="xs"
            fixedWidth
            className="text-gray-700 inline-icon-item"
          />
        </div>
        <div>
          <span className="mt-1 text-sm">{content}</span>
        </div>
      </div>
    </>
  );
};

export default LinkItemComponent;
