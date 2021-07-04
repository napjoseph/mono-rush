import React from 'react';

import DocumentHead from '../document/document-head.component';

import classes from './layout.module.scss';

/* eslint-disable-next-line */
interface LayoutProps {}

const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <>
      <DocumentHead />

      <div className={classes.app}>
        <main>{props.children}</main>
      </div>
    </>
  );
};

export default Layout;
