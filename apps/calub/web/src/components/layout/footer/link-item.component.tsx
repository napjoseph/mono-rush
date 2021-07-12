import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { FooterLink } from '../../../models';

import classes from './link-item.module.scss';

interface LinkItemComponentProps {
  link: FooterLink;
}

const LinkItemComponent: React.FC<LinkItemComponentProps> = ({ link }) => {
  return (
    <>
      <span title={link.title}>
        <a href={link.url} target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={link.icon} size="lg" fixedWidth className={classes.icon} />
        </a>
      </span>
    </>
  );
};

export default LinkItemComponent;
