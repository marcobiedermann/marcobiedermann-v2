/* eslint-disable import/no-extraneous-dependencies */

import { render } from '@testing-library/react';
import React from 'react';
import Main from '..';

describe('Main component', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Main />);

    expect(asFragment()).toMatchSnapshot();
  });
});
