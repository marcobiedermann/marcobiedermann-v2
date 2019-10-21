/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import renderer from 'react-test-renderer';
import Typography from '.';

describe('Typography component', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<Typography />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should align text to left', () => {
    const tree = renderer
      .create(
        <Typography textAlign="left">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita soluta quis, eveniet, fuga iusto
            similique ut est, molestiae velit illum. Commodi ab obcaecati consectetur eos molestiae assumenda earum
            magni.
          </p>
        </Typography>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should align text to center', () => {
    const tree = renderer
      .create(
        <Typography textAlign="center">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita soluta quis, eveniet, fuga iusto
            similique ut est, molestiae velit illum. Commodi ab obcaecati consectetur eos molestiae assumenda earum
            magni.
          </p>
        </Typography>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should align text to right', () => {
    const tree = renderer
      .create(
        <Typography textAlign="right">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita soluta quis, eveniet, fuga iusto
            similique ut est, molestiae velit illum. Commodi ab obcaecati consectetur eos molestiae assumenda earum
            magni.
          </p>
        </Typography>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
