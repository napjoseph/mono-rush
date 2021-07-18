import React from 'react';
import Divider from './divider/divider.component';

import Footer from './footer/footer.component';
import Header from './header/header.component';

import classes from './layout.module.scss';

/* eslint-disable-next-line */
interface LayoutProps {}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={classes.container}>
      <Header />
      <Divider />

      <main>{children}</main>

      <Divider />
      <Footer />
    </div>
  );
};

export default Layout;
