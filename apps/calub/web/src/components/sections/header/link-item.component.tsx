import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { HeaderLinksItem } from '../../../models';

import classes from './link-item.module.scss';

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
      <a href={linkTo} className={classes.link}>
        {value}
      </a>
    );
  }

  return (
    <>
      <div className={classes.container}>
        <div className={classes.iconContainer} title={title}>
          <FontAwesomeIcon icon={icon} size="xs" fixedWidth className={classes.icon} />
        </div>
        <div>
          <span className={classes.content}>{content}</span>
        </div>
      </div>
    </>
  );
};

export default LinkItemComponent;
