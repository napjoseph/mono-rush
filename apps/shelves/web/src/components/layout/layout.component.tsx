import React from 'react';
import { Box } from '@chakra-ui/react';

import DocumentHead from '../document/document-head.component';

/* eslint-disable-next-line */
interface LayoutProps {}

const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <>
      <DocumentHead />

      <Box>
        <Box as="main">{props.children}</Box>
      </Box>
    </>
  );
};

export default Layout;
