import React from 'react';

import Footer from './footer/footer.component';
import Header from './header/header.component';
import Content from './content/content.component';

import classes from './layout.module.scss';

/* eslint-disable-next-line */
interface LayoutProps {}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={classes.container}>
      <Header />

      <Content>{children}</Content>

      <Footer />
    </div>
  );
};

export default Layout;
