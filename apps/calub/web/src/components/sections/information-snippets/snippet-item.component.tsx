import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { InformationSnippetItem } from '../../../models';

import classes from './snippet-item.module.scss';

interface SnippetItemComponentProps {
  item: InformationSnippetItem;
}

const SnippetItemComponent: React.FC<SnippetItemComponentProps> = ({ item }) => {
  const { title, value, linkTo, icon } = item;

  let content: JSX.Element;
  if (linkTo === '') {
    content = <>{value}</>;
  } else {
    content = (
      <a href={linkTo} className={classes.link}>
        {value}
      </a>
    );
  }

  return (
    <>
      <div className={classes.container}>
        <div className={classes.iconContainer}>
          <FontAwesomeIcon
            icon={icon}
            size="xs"
            fixedWidth
            className={classes.icon}
            title={title}
          />
        </div>
        <div>
          <span className={classes.content}>{content}</span>
        </div>
      </div>
    </>
  );
};

export default SnippetItemComponent;
