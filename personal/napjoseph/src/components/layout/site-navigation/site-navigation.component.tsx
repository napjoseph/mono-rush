import React from 'react';

import Link from 'next/link';
import { SiteNavigationLinkItem } from '../../../models';

import classes from './site-navigation.module.scss';

interface SiteNavigationProps {
  links: SiteNavigationLinkItem[];
}

const SiteNavigation: React.FC<SiteNavigationProps> = ({ links = [] }) => {
  if (!links) return null;

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <nav>
          {links.map((link) => (
            <SiteNavigationItem key={link.name} link={link} />
          ))}
        </nav>
      </div>
    </div>
  );
};

interface SiteNavigationItemProps {
  link: SiteNavigationLinkItem;
}

const SiteNavigationItem: React.FC<SiteNavigationItemProps> = ({ link }) => {
  if (link.external !== undefined && link.external) {
    return (
      <a href={link.href} className={classes.link} target="_blank" rel="noreferrer">
        {link.name}
      </a>
    );
  }

  return (
    <Link href={link.href}>
      <a className={classes.link}>{link.name}</a>
    </Link>
  );
};

export default SiteNavigation;
