import React from 'react';

import Link from 'next/link';

import classes from './footer.module.scss';

/* eslint-disable-next-line */
interface FooterProps {}

const Footer: React.FC<FooterProps> = (_props) => {
  const year = '2021';
  const name = 'Nap Joseph Calub';

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
              <a className="font-bold">{name}</a>
            </Link>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
