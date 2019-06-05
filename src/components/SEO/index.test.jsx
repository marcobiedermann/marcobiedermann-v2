import { useStaticQuery } from 'gatsby';
import React from 'react';
import renderer from 'react-test-renderer';
import SEO from '.';

describe('SEO component', () => {
  beforeEach(() => {
    useStaticQuery.mockImplementationOnce(() => ({
      site: {
        siteMetadata: {
          title: 'Default Starter',
        },
      },
    }));
  });

  it('should render correctly', () => {
    const tree = renderer.create(<SEO />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
