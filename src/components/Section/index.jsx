import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './style.module.css';

const Section = props => {
  const { children, className } = props;

  return <section className={classNames(className, styles.section)}>{children}</section>;
};

Section.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

Section.defaultProps = {
  children: null,
  className: '',
};

export default Section;
