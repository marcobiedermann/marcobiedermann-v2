/* eslint-disable import/no-extraneous-dependencies */

import { render } from '@testing-library/react';
import React from 'react';
import Section from '..';

describe('Section component', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Section />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render dark appearance correctly', () => {
    const { asFragment } = render(<Section appearance="dark" />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render light appearance correctly', () => {
    const { asFragment } = render(<Section appearance="light" />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render full mode correctly', () => {
    const { asFragment } = render(<Section isFull />);

    expect(asFragment()).toMatchSnapshot();
  });
});
