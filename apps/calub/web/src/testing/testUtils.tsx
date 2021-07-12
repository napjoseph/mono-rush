import React from 'react';

import { render } from '@testing-library/react';

import Layout from '../components/layout/layout.component';
import { StateProvider } from '../providers/state';

const Providers: React.FC = ({ children }) => {
  return (
    <StateProvider>
      <Layout>{children}</Layout>
    </StateProvider>
  );
};

const customRender = (ui, options = {}) => render(ui, { wrapper: Providers, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
