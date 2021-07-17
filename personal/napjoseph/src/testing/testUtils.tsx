import React from 'react';

import { render } from '@testing-library/react';

import Layout from '../components/layout/layout.component';

const Providers: React.FC = ({ children }) => {
  return <Layout>{children}</Layout>;
};

const customRender = (ui, options = {}) => render(ui, { wrapper: Providers, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
