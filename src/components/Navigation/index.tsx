import classNames from 'classnames';
import React, { FC } from 'react';
import Route, { RouteProps } from '../Route';
import styles from './style.module.css';

export interface NavigationProps {
  className?: string;
  routes: RouteProps[];
}

export const Navigation: FC<NavigationProps> = (props) => {
  const { className, routes, ...otherProps } = props;

  return (
    <nav className={classNames(className, styles.navigation)} {...otherProps}>
      <ul className={styles.navigation__list}>
        {routes.map((route) => (
          <li key={route.id}>
            <Route activeClassName={styles.navigation__linkActive} className={styles.navigation__link} {...route} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
