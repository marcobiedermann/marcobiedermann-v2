import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './style.module.css';

const Column = props => {
  const { children, className, ...otherProps } = props;

  return (
    <div className={classNames(className, styles.column)} {...otherProps}>
      {children}
    </div>
  );
};

Column.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

Column.defaultProps = {
  children: null,
  className: '',
};

export default Column;
