/* eslint-disable import/no-extraneous-dependencies */

import { useStaticQuery } from 'gatsby';
import React from 'react';
import renderer from 'react-test-renderer';
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
    const tree = renderer.create(<SEO {...seo} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
