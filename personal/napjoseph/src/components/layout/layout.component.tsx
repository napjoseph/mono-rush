import React from 'react';

import Footer from './footer/footer.component';
import Header from './header/header.component';
import Content from './content/content.component';

import classes from './layout.module.scss';
import StaticHead from '../document/static-head.component';

/* eslint-disable-next-line */
interface LayoutProps {}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <StaticHead />

      <div className={classes.container}>
        <Header />

        <Content>{children}</Content>

        <Footer />
      </div>
    </>
  );
};

export default Layout;
