import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './style.module.css';

const Grid = props => {
  const { children, className } = props;

  return <div className={classNames(className, styles.grid)}>{children}</div>;
};

Grid.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

Grid.defaultProps = {
  children: null,
  className: '',
};

export default Grid;
