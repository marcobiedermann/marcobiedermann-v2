/* eslint-disable import/no-extraneous-dependencies */

import { render } from '@testing-library/react';
import React from 'react';
import Alignment from '..';

describe('Alignment component', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Alignment />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render content correctly', () => {
    const { asFragment } = render(<Alignment>Content</Alignment>);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render align `center` correctly', () => {
    const { asFragment } = render(<Alignment align="center" />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render align `end` correctly', () => {
    const { asFragment } = render(<Alignment align="end" />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render align `start` correctly', () => {
    const { asFragment } = render(<Alignment align="start" />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render justify `center` correctly', () => {
    const { asFragment } = render(<Alignment justify="center" />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render justify `end` correctly', () => {
    const { asFragment } = render(<Alignment justify="end" />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render justify `space-between` correctly', () => {
    const { asFragment } = render(<Alignment justify="space-between" />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render justify `start` correctly', () => {
    const { asFragment } = render(<Alignment justify="start" />);

    expect(asFragment()).toMatchSnapshot();
  });
});
