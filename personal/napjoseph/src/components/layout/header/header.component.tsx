import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

import SiteNavigation from '../site-navigation/site-navigation.component';
import { SITE_CONFIG } from '../../../config';
import SiteLogo from '../../assets/site-logo.component';

/* eslint-disable-next-line */
interface HeaderProps {}

const Header: React.FC<HeaderProps> = (_props) => {
  const title = SITE_CONFIG.title;
  const description = SITE_CONFIG.description || '';
  const siteNavigationLinks = SITE_CONFIG.navbar.links || [];

  return (
    <header className="flex flex-col justify-center items-stretch">
      <div className="py-10 sm:py-14">
        <div className="flex flex-col gap-14">
          <div className="flex flex-col gap-1 sm:gap-3 text-center">
            <div className="flex flex-col gap-1 sm:gap-2 justify-center items-center">
              <Link href="/">
                <a className="main-link-hover flex items-center" title={title}>
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                    variants={{
                      hidden: {
                        rotate: 0,
                        opacity: 0
                      },
                      visible: {
                        rotate: 180,
                        opacity: 1,
                        transition: {
                          duration: 0.3
                        }
                      },
                      hover: {
                        rotate: 0,
                        scale: 1.2,
                        transition: {
                          duration: 0.3
                        }
                      }
                    }}
                  >
                    <div className="hidden sm:block">
                      <SiteLogo height={'120'} width={'120'} fill={'#1d4ed8'} />
                    </div>
                    <div className="block sm:hidden">
                      <SiteLogo height={'50'} width={'50'} fill={'#1d4ed8'} />
                    </div>
                  </motion.div>
                </a>
              </Link>
              <Link href="/">
                <a
                  className="text-3xl sm:text-5xl font-extrabold text-gray-700 flex items-center main-link-hover"
                  title={title}
                >
                  <h1>{title}</h1>
                </a>
              </Link>
            </div>

            {description !== '' && (
              <p className="text-gray-500 text-xs sm:text-base">{description}</p>
            )}
          </div>

          {siteNavigationLinks && (
            <div className="block">
              <SiteNavigation links={siteNavigationLinks} />
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
