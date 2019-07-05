import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Logo from '../Logo';
import styles from './style.module.css';

const Logos = props => {
  const { className, logos, ...otherProps } = props;

  return (
    <ul className={classNames(className, styles.logos)} {...otherProps}>
      {logos.map(logo => (
        <li key={logo.id}>
          <Logo {...logo} />
        </li>
      ))}
    </ul>
  );
};

Logos.propTypes = {
  className: PropTypes.string,
  logos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
    }),
  ),
};

Logos.defaultProps = {
  className: '',
  logos: [],
};

export default Logos;
