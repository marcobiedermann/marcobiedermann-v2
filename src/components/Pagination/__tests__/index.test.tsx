/* eslint-disable import/no-extraneous-dependencies */

import { render } from '@testing-library/react';
import React from 'react';
import Pagination from '..';
import route from '../../Route/__fixtures__';
import { next, previous } from '../__fixtures__';

describe('Pagination component', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Pagination routes={[]} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render routes correctly', () => {
    const routes = [route];
    const { asFragment } = render(<Pagination next={next} previous={previous} routes={routes} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
