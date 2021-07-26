import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

import { SiteNavigationLinkItem } from '../../../models';
import joinClassNames from '../../../lib/utils/join-class-names';

interface SiteNavigationProps {
  links: SiteNavigationLinkItem[];
}

const SiteNavigation: React.FC<SiteNavigationProps> = ({ links = [] }) => {
  const router = useRouter();
  const pathname = router ? router.pathname : '';

  if (!links) return null;

  return (
    <div>
      <div>
        <nav>
          <ul className="flex flex-col sm:flex-row gap-1 sm:gap-2 justify-center">
            {links.map((link) => (
              <li key={link.name}>
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

  const regularLink =
    'block text-center py-1.5 sm:py-1 sm:px-4 uppercase text-2xs sm:text-xs font-bold bg-gray-500 text-gray-100 hover:bg-blue-700 main-transition';

  if (link.external !== undefined && link.external) {
    linkEl = (
      <a href={link.href} className={regularLink} target="_blank" rel="noreferrer">
        {link.name}
      </a>
    );
  } else {
    linkEl = (
      <Link href={link.href}>
        <a
          className={
            isActive ? joinClassNames(regularLink, 'bg-gray-700 text-gray-100') : regularLink
          }
        >
          {link.name}
        </a>
      </Link>
    );
  }

  return <motion.div whileHover={{ scale: 1.1 }}>{linkEl}</motion.div>;
};

export default SiteNavigation;
