import React from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

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
        <nav className={classes.nav}>
          <ul className={classes.links}>
            {links.map((link) => (
              <li key={link.name} className={classes.item}>
                <SiteNavigationItem link={link} isActive={pathname === link.href} />
              </li>
            ))}
          </ul>
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
  let linkEl: JSX.Element;

  if (link.external !== undefined && link.external) {
    linkEl = (
      <a href={link.href} className={classes.link} target="_blank" rel="noreferrer">
        {link.name}
      </a>
    );
  } else {
    linkEl = (
      <Link href={link.href}>
        <a className={isActive ? classes.linkActive : classes.link}>{link.name}</a>
      </Link>
    );
  }

  return <motion.div whileHover={{ scale: 1.1 }}>{linkEl}</motion.div>;
};

export default SiteNavigation;
