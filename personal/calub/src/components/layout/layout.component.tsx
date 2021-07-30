import React from 'react';

import DocumentHead from '../document/document-head.component';
import FooterComponent from './footer/footer.component';

/* eslint-disable-next-line */
interface LayoutComponentProps {}

const LayoutComponent: React.FC<LayoutComponentProps> = (props) => {
  return (
    <>
      <DocumentHead />

      <div className="bg-white max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 shadow-lg print:shadow-none">
        <main>{props.children}</main>
      </div>

      <FooterComponent />
    </>
  );
};

export default LayoutComponent;
