import classNames from 'classnames';
import { Link } from 'gatsby';
import React from 'react';
import { Route } from '../../constants/routes';
import styles from './style.module.css';

export interface NavigationProps {
  className?: string;
  routes: Route[];
}

const Navigation: React.FC<NavigationProps> = props => {
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

export default Navigation;
