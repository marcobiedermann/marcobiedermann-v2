/* eslint-disable import/no-extraneous-dependencies, @typescript-eslint/no-unused-vars */

import { render } from '@testing-library/react';
import React from 'react';
import Skill from '..';
import skill from '../__fixtures__';

describe('Skill component', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Skill {...skill} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
