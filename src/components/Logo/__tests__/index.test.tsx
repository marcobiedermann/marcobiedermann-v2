/* eslint-disable import/no-extraneous-dependencies */

import { render } from '@testing-library/react';
import React from 'react';
import Logo from '..';
import project from '../__fixtures__';

describe('Logo component', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Logo {...project} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
