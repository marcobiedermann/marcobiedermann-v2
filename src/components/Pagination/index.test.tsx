/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import renderer from 'react-test-renderer';
import Pagination from '.';
import route from '../Route/__fixtures__';
import { next, previous } from './__fixtures__';

describe('Pagination component', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<Pagination routes={[]} />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render routes correctly', () => {
    const routes = [route];
    const tree = renderer.create(<Pagination next={next} previous={previous} routes={routes} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
