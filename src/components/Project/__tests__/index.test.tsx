/* eslint-disable import/no-extraneous-dependencies */

import { render } from '@testing-library/react';
import React from 'react';
import Project from '..';
import project from '../__fixtures__';

describe('Project component', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Project {...project} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
