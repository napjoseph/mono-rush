import React from 'react';

import { HeaderLinksItem } from '../../../models';
import LinkItemComponent from './link-item.component';

interface LinkListComponentProps {
  items?: HeaderLinksItem[];
}

const LinkListComponent: React.FC<LinkListComponentProps> = ({ items }) => {
  return (
    <>
      {items && (
        <ul>
          {items.map((item, index) => {
            return (
              <li key={index}>
                <LinkItemComponent item={item} />
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default LinkListComponent;
