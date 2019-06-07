import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './style.module.css';

const Footer = props => {
  const { children, className, ...otherProps } = props;

  return (
    <footer className={classNames(className, styles.footer)} {...otherProps}>
      {children}
    </footer>
  );
};

Footer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

Footer.defaultProps = {
  children: null,
  className: '',
};

export default Footer;
