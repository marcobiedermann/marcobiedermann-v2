/* eslint-disable import/no-extraneous-dependencies */

import { render } from '@testing-library/react';
import React from 'react';
import Projects from '..';
import projects from '../__fixtures__';

describe('Projects component', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Projects projects={projects} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render empty projects correctly', () => {
    const { asFragment } = render(<Projects projects={[]} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
