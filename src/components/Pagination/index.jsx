import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'gatsby';
import styles from './style.module.css';

const Pagination = props => {
  const { className, routes, ...otherProps } = props;

  return (
    <ul className={classNames(className, styles.pagination)} {...otherProps}>
      {routes.map(route => (
        <li key={route.path}>
          <Link to={route.path} className={styles.pagination__link}>
            {route.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

Pagination.propTypes = {
  className: PropTypes.string,
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      path: PropTypes.string,
    }),
  ),
};

Pagination.defaultProps = {
  className: '',
  routes: [],
};

export default Pagination;
