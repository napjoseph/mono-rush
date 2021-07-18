import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { SocialLinkItem } from '../../../models';

import classes from './social-links.module.scss';

/* eslint-disable-next-line */
interface SocialLinksProps {
  socialLinks: SocialLinkItem[];
}

const SocialLinks: React.FC<SocialLinksProps> = ({ socialLinks = [] }) => {
  if (!socialLinks) return null;

  return (
    <nav className={classes.container}>
      {socialLinks.map((link, index) => {
        return (
          <a key={index} href={link.href} className={classes.link} target="_blank" rel="noreferrer">
            <div className={classes.iconWrapper}>
              <FontAwesomeIcon icon={link.icon} fixedWidth className={classes.icon} />
            </div>
          </a>
        );
      })}
    </nav>
  );
};

export default SocialLinks;
