import React from 'react';
import { render } from '../testUtils';
import HomePage from '../../pages/index.page';
import { DEFAULT_CONFIG } from '../../models';

describe('Home page', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<HomePage config={DEFAULT_CONFIG} />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
