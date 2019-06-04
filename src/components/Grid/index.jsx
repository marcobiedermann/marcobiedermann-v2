import PropTypes from 'prop-types';
import React from 'react';

const Grid = props => {
  const { children } = props;

  return <div>{children}</div>;
};

Grid.propTypes = {
  children: PropTypes.node,
};

Grid.defaultProps = {
  children: null,
};

export default Grid;
