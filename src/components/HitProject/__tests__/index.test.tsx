/* eslint-disable import/no-extraneous-dependencies */

import { render } from '@testing-library/react';
import React from 'react';
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
    const { asFragment } = render(<HitProject {...project} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
