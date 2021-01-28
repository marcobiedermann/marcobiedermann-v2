/* eslint-disable import/no-extraneous-dependencies */

import { render } from '@testing-library/react';
import React from 'react';
import Route from '..';
import route from '../__fixtures__';

describe('Route component', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Route {...route} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
