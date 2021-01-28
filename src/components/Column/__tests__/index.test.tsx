/* eslint-disable import/no-extraneous-dependencies */

import { render } from '@testing-library/react';
import React from 'react';
import Column from '..';

describe('Column component', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Column />);

    expect(asFragment()).toMatchSnapshot();
  });
});
