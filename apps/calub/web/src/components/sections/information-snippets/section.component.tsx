import React from 'react';

import { InformationSnippetItem } from '../../../models';
import SnippetItemComponent from './snippet-item.component';

interface InformationSnippetComponentProps {
  items?: InformationSnippetItem[];
}

const InformationSnippetComponent: React.FC<InformationSnippetComponentProps> = ({ items }) => {
  return (
    <>
      <ul>
        {items.map((item, index) => {
          return (
            <li key={index}>
              <SnippetItemComponent item={item} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default InformationSnippetComponent;
