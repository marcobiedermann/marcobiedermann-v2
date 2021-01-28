/* eslint-disable import/no-extraneous-dependencies */

import { render } from '@testing-library/react';
import React from 'react';
import Button from '..';

describe('Button component', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Button />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render link using `href`', () => {
    const { asFragment } = render(<Button href="#" />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render link using `to`', () => {
    const { asFragment } = render(<Button to="#" />);

    expect(asFragment()).toMatchSnapshot();
  });
});
