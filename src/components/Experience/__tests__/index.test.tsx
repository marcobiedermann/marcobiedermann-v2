/* eslint-disable import/no-extraneous-dependencies, @typescript-eslint/no-unused-vars */

import { render } from '@testing-library/react';
import React from 'react';
import Experience from '..';
import experience from '../__fixtures__';

describe('Experience component', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Experience {...experience} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render without `endDate` correctly', () => {
    const { endDate, ...experienceWithoutEndDate } = experience;

    const { asFragment } = render(<Experience {...experienceWithoutEndDate} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
