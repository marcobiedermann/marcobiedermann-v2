import classNames from 'classnames';
import React from 'react';
import Route, { RouteProps } from '../Route';
import styles from './style.module.css';

export interface PaginationProps {
  className?: string;
  next?: RouteProps;
  previous?: RouteProps;
  routes: RouteProps[];
}

const Pagination: React.FC<PaginationProps> = (props) => {
  const { className, next, previous, routes, ...otherProps } = props;

  return (
    <ul className={classNames(className, styles.pagination)} {...otherProps}>
      {previous && (
        <li>
          <Route className={styles.pagination__link} {...previous} rel="previous" />
        </li>
      )}
      {routes.map((route) => (
        <li key={route.id}>
          <Route className={styles.pagination__link} {...route} />
        </li>
      ))}
      {next && (
        <li>
          <Route className={styles.pagination__link} {...next} rel="next" />
        </li>
      )}
    </ul>
  );
};

export default Pagination;
