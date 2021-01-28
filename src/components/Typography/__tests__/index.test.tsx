/* eslint-disable import/no-extraneous-dependencies */

import { render } from '@testing-library/react';
import React from 'react';
import Typography from '..';

describe('Typography component', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Typography />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should align text to left', () => {
    const { asFragment } = render(
      <Typography textAlign="left">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita soluta quis, eveniet, fuga iusto
          similique ut est, molestiae velit illum. Commodi ab obcaecati consectetur eos molestiae assumenda earum magni.
        </p>
      </Typography>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should align text to center', () => {
    const { asFragment } = render(
      <Typography textAlign="center">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita soluta quis, eveniet, fuga iusto
          similique ut est, molestiae velit illum. Commodi ab obcaecati consectetur eos molestiae assumenda earum magni.
        </p>
      </Typography>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should align text to right', () => {
    const { asFragment } = render(
      <Typography textAlign="right">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita soluta quis, eveniet, fuga iusto
          similique ut est, molestiae velit illum. Commodi ab obcaecati consectetur eos molestiae assumenda earum magni.
        </p>
      </Typography>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
