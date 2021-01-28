import classNames from 'classnames';
import React, { FC } from 'react';
import Route, { RouteProps } from '../Route';
import styles from './style.module.css';

export interface NavigationProps {
  className?: string;
  inline?: boolean;
  routes: RouteProps[];
}

export const Navigation: FC<NavigationProps> = (props) => {
  const { className, inline, routes, ...otherProps } = props;

  return (
    <nav className={classNames(className, styles.navigation)} {...otherProps}>
      <ul
        className={classNames(styles.navigation__list, {
          [styles.navigation__listInline]: inline,
        })}
      >
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
