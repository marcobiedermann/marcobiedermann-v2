/* eslint-disable import/no-extraneous-dependencies */

import { render } from '@testing-library/react';
import React from 'react';
import Skills from '..';
import skills from '../__fixtures__';

describe('Skills component', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Skills skills={skills} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
