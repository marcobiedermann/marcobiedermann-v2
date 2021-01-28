/* eslint-disable import/no-extraneous-dependencies */

import { render } from '@testing-library/react';
import React from 'react';
import Logos from '..';
import projects from '../__fixtures__';

describe('Logos component', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Logos logos={projects} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
