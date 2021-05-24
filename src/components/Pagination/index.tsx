import classNames from 'classnames';
import React, { FC } from 'react';
import Route, { RouteProps } from '../Route';
import * as styles from './style.module.css';

export interface PaginationProps {
  className?: string;
  next?: RouteProps;
  previous?: RouteProps;
  routes?: RouteProps[];
}

export const Pagination: FC<PaginationProps> = (props) => {
  const { className, next, previous, routes, ...otherProps } = props;

  return (
    <ul className={classNames(className, styles.pagination)} {...otherProps}>
      {previous && (
        <li>
          <Route className={styles.pagination__link} {...previous} rel="previous" />
        </li>
      )}
      {routes &&
        routes.map((route) => (
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
