/* eslint-disable import/no-extraneous-dependencies */

import { render } from '@testing-library/react';
import React from 'react';
import Footer from '..';

describe('Footer component', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Footer />);

    expect(asFragment()).toMatchSnapshot();
  });
});
