import classNames from 'classnames';
import React from 'react';
import Route, { RouteProps } from '../Route';
import styles from './style.module.css';

export interface PaginationProps {
  className?: string;
  routes: RouteProps[];
}

const Pagination: React.FC<PaginationProps> = props => {
  const { className, routes, ...otherProps } = props;

  return (
    <ul className={classNames(className, styles.pagination)} {...otherProps}>
      {routes.map(route => (
        <li key={route.id}>
          <Route className={styles.pagination__link} {...route} />
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
