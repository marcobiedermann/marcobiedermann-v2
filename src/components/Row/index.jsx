import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './style.module.css';

const Row = props => {
  const { children, className, ...otherProps } = props;

  return (
    <div className={classNames(className, styles.row)} {...otherProps}>
      {children}
    </div>
  );
};

Row.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

Row.defaultProps = {
  children: null,
  className: '',
};

export default Row;
