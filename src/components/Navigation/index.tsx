import classNames from 'classnames';
import React from 'react';
import Route, { RouteProps } from '../Route';
import styles from './style.module.css';

export interface NavigationProps {
  className?: string;
  routes: RouteProps[];
}

const Navigation: React.FC<NavigationProps> = props => {
  const { className, routes, ...otherProps } = props;

  return (
    <nav className={classNames(className, styles.navigation)} {...otherProps}>
      <ul>
        {routes.map(route => (
          <li key={route.id}>
            <Route {...route} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
