import classNames from 'classnames';
import { Link } from 'gatsby';
import React from 'react';
import { Route } from '../../constants/routes';
import styles from './style.module.css';

export interface PaginationProps {
  className?: string;
  routes: Route[];
}

const Pagination: React.FC<PaginationProps> = props => {
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

export default Pagination;
