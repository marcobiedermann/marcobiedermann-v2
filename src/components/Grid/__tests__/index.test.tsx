/* eslint-disable import/no-extraneous-dependencies */

import { render } from '@testing-library/react';
import React from 'react';
import Grid from '..';

describe('Grid component', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Grid />);

    expect(asFragment()).toMatchSnapshot();
  });
});
