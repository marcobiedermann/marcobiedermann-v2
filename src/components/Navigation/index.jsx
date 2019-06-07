import classNames from 'classnames';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './style.module.css';

const Navigation = props => {
  const { className, routes, ...otherProps } = props;

  return (
    <nav className={classNames(className, styles.navigation)} {...otherProps}>
      <ul>
        {routes.map(route => (
          <li key={route.path}>
            <Link to={route.path}>{route.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Navigation.propTypes = {
  className: PropTypes.string,
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string,
      name: PropTypes.string,
    }),
  ),
};

Navigation.defaultProps = {
  className: '',
  routes: [],
};

export default Navigation;
