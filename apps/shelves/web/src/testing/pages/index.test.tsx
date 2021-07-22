import React from 'react';
import { render } from '../testUtils';
import HomePage from '../../pages/index.page';

describe('Home page', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<HomePage />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
