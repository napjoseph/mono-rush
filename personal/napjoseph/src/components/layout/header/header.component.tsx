import React from 'react';

import Image from 'next/image';
import siteLogo from '../../../../public/logo.png';

import classes from './header.module.scss';

/* eslint-disable-next-line */
interface HeaderProps {}

const Header: React.FC<HeaderProps> = (_props) => {
  const navigation = [];
  const actions = [];

  return (
    <header className={classes.container}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
          <div className="flex items-center">
            <a href="/">
              <Image
                className="h-2 w-auto"
                src={siteLogo}
                alt="Nap Joseph Calub Logo"
                height={40}
                width={40}
              />
              <span className="sr-only">Nap Joseph Calub</span>
            </a>
            <div className="hidden ml-10 space-x-8 lg:block">
              {navigation.map((link) => (
                <a
                  key={link.text}
                  href={link.href}
                  className="text-base font-medium text-white hover:text-indigo-50"
                >
                  {link.text}
                </a>
              ))}
            </div>
          </div>
          <div className={classes.actions}>
            {actions.map((link) => (
              <a
                key={link.text}
                href={link.href}
                className={link.is === 'main' ? classes.buttonMain : classes.buttonDefault}
              >
                {link.text}
              </a>
            ))}
          </div>
        </div>
        <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
          {navigation.map((link) => (
            <a
              key={link.text}
              href={link.href}
              className="text-base font-medium text-white hover:text-indigo-50"
            >
              {link.text}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
