import PropTypes from 'prop-types';
import React from 'react';

const Grid = props => {
  const { children } = props;

  return (
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children}
    </div>
  );
};

Grid.propTypes = {
  children: PropTypes.node,
};

Grid.defaultProps = {
  children: null,
};

export default Grid;
