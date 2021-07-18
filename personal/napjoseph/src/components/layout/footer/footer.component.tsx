import React from 'react';

import Link from 'next/link';

import { SocialLinkItem } from '../../../models';
import SocialLinks from '../social-links/social-links.component';

import classes from './footer.module.scss';

/* eslint-disable-next-line */
interface FooterProps {}

const Footer: React.FC<FooterProps> = (_props) => {
  const year = '2021';
  const name = 'Nap Joseph Calub';
  const socialLinks: SocialLinkItem[] = [
    {
      name: 'GitHub',
      href: 'https://github.com/njncalub',
      icon: {
        prefix: 'fab',
        iconName: 'github'
      }
    },
    {
      name: 'Keybase',
      href: 'https://keybase.io/njncalub',
      icon: {
        prefix: 'fab',
        iconName: 'keybase'
      }
    }
  ];

  return (
    <footer className={classes.container} aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-400 text-center">
            &copy; {year}{' '}
            <Link href="/">
              <a className={classes.name}>{name}</a>
            </Link>
            . All rights reserved.
          </p>
          {socialLinks && (
            <div className="my-4 flex justify-center space-x-6">
              <SocialLinks socialLinks={socialLinks} />
            </div>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
