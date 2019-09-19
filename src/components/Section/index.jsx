import classNames from 'classnames';
import capitalize from 'lodash/capitalize';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './style.module.css';

const Section = props => {
  const { appearance, children, className, isFull, ...otherProps } = props;

  return (
    <section
      className={classNames(className, styles.section, {
        [styles.sectionFull]: isFull,
        [styles[`section${capitalize(appearance)}`]]: appearance,
      })}
      {...otherProps}
    >
      {children}
    </section>
  );
};

Section.propTypes = {
  appearance: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  isFull: PropTypes.bool,
};

Section.defaultProps = {
  appearance: '',
  children: null,
  className: '',
  isFull: false,
};

export default Section;
