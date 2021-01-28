/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import renderer from 'react-test-renderer';
import HitProject from '..';

describe('HitProject component', () => {
  it('should render correctly', () => {
    const project = {
      slug: {
        'en-US': 'demo-project',
      },
      title: {
        'en-US': 'Demo Project',
      },
    };
    const tree = renderer.create(<HitProject {...project} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
