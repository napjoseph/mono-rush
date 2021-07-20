import React from 'react';

import Footer from './footer/footer.component';
import Header from './header/header.component';
import ContentWrapper from './content/content-wrapper.component';

import classes from './layout.module.scss';
import StaticHead from '../document/static-head.component';

/* eslint-disable-next-line */
interface LayoutProps {}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <StaticHead />

      <ContentWrapper>
        <div className={classes.container}>
          <Header />
          <main className={classes.main}>{children}</main>
          <Footer />
        </div>
      </ContentWrapper>
    </>
  );
};

export default Layout;
