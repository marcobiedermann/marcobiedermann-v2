/* eslint-disable import/no-extraneous-dependencies */

import { render } from '@testing-library/react';
import React from 'react';
import Experiences from '..';
import experiences from '../__fixtures__';

describe('Experiences component', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Experiences experiences={experiences} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
