/* eslint-disable import/no-extraneous-dependencies */

import { render } from '@testing-library/react';
import { useStaticQuery } from 'gatsby';
import React from 'react';
import Layout from '..';
import route from '../../Route/__fixtures__';

const mockedUseStaticQuery = useStaticQuery as jest.Mock;

jest.mock('../../../constants/date', () => ({
  DATE_NOW: new Date('2000-01-01'),
}));

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
    const { asFragment } = render(<Layout />);

    expect(asFragment()).toMatchSnapshot();
  });
});
