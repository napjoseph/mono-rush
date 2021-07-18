import React from 'react';

import Link from 'next/link';

import classes from './header.module.scss';

/* eslint-disable-next-line */
interface HeaderProps {}

const Header: React.FC<HeaderProps> = (_props) => {
  const title = 'Nap Joseph Calub';
  const description = 'a byte-sized grimoire on software black magic & open-sourcery';

  return (
    <header className={classes.container}>
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:flex lg:justify-between">
        <div className="max-w-xl">
          <Link href="/">
            <a className={classes.title}>
              <h1>{title}</h1>
            </a>
          </Link>

          <p className={classes.description}>{description}</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
