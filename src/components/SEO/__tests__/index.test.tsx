/* eslint-disable import/no-extraneous-dependencies */

import { render } from '@testing-library/react';
import { useStaticQuery } from 'gatsby';
import React from 'react';
import SEO from '..';
import seo from '../__fixtures__';

const mockedUseStaticQuery = useStaticQuery as jest.Mock;

describe('SEO component', () => {
  beforeEach(() => {
    mockedUseStaticQuery.mockImplementationOnce(() => ({
      site: {
        siteMetadata: {
          title: 'Default Starter',
          description: 'Meta description',
        },
      },
    }));
  });

  it('should render correctly', () => {
    const { asFragment } = render(<SEO {...seo} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
