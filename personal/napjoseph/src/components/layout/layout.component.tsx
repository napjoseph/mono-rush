import React from 'react';

import Footer from './footer/footer.component';
import Header from './header/header.component';

import classes from './layout.module.scss';

/* eslint-disable-next-line */
interface LayoutProps {}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={classes.container}>
      <Header />

      <main>{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;