import React from 'react';

import DocumentHead from '../document/document-head.component';
import FooterComponent from './footer/footer.component';

import classes from './layout.module.scss';

/* eslint-disable-next-line */
interface LayoutComponentProps {}

const LayoutComponent: React.FC<LayoutComponentProps> = (props) => {
  return (
    <>
      <DocumentHead />

      <div className={classes.app}>
        <main>{props.children}</main>
      </div>

      <FooterComponent />
    </>
  );
};

export default LayoutComponent;
