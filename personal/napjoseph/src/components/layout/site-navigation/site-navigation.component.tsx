import React from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import { SiteNavigationLinkItem } from '../../../models';

import classes from './site-navigation.module.scss';

interface SiteNavigationProps {
  links: SiteNavigationLinkItem[];
}

const SiteNavigation: React.FC<SiteNavigationProps> = ({ links = [] }) => {
  const router = useRouter();
  const pathname = router ? router.pathname : '';

  if (!links) return null;

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <nav>
          {links.map((link) => (
            <SiteNavigationItem key={link.name} link={link} isActive={pathname === link.href} />
          ))}
        </nav>
      </div>
    </div>
  );
};

interface SiteNavigationItemProps {
  link: SiteNavigationLinkItem;
  isActive?: boolean;
}

const SiteNavigationItem: React.FC<SiteNavigationItemProps> = ({ link, isActive = false }) => {
  if (link.external !== undefined && link.external) {
    return (
      <a href={link.href} className={classes.link} target="_blank" rel="noreferrer">
        {link.name}
      </a>
    );
  }

  return (
    <Link href={link.href}>
      <a className={isActive ? classes.linkActive : classes.link}>{link.name}</a>
    </Link>
  );
};

export default SiteNavigation;
