import PropTypes from 'prop-types';
import React from 'react';
import styles from './style.module.css';

const Grid = props => {
  const { children } = props;

  return <div className={styles.grid}>{children}</div>;
};

Grid.propTypes = {
  children: PropTypes.node,
};

Grid.defaultProps = {
  children: null,
};

export default Grid;
