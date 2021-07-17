import React from 'react';

import { render } from '@testing-library/react';

const Providers: React.FC = ({ children }) => {
  return <>{children}</>;
};

const customRender = (ui, options = {}) => render(ui, { wrapper: Providers, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
