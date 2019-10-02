/* eslint-disable import/no-extraneous-dependencies */

import { useStaticQuery } from 'gatsby';
import React from 'react';
import renderer from 'react-test-renderer';
import Layout from '.';
import route from '../Route/__fixtures__';

const mockedUseStaticQuery = useStaticQuery as jest.Mock;

describe('Layout component', () => {
  beforeEach(() => {
    mockedUseStaticQuery.mockImplementationOnce(() => ({
      allContentfulMenu: {
        edges: [
          {
            node: {
              slug: 'main',
              routes: [route],
            },
          },
          {
            node: {
              slug: 'footer',
              routes: [route],
            },
          },
        ],
      },
    }));
  });

  it('should render correctly', () => {
    const tree = renderer.create(<Layout />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
