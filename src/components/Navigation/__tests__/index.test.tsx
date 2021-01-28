/* eslint-disable import/no-extraneous-dependencies */

import { render } from '@testing-library/react';
import React from 'react';
import Navigation from '..';

describe('Navigation component', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Navigation routes={[]} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
