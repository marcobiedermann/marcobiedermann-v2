import { Link } from 'gatsby';
import React from 'react';

export interface RouteProps {
  activeClassName?: string;
  className?: string;
  id: string;
  name: string;
  path: string;
  rel?: string;
}

const Route: React.FC<RouteProps> = props => {
  const { activeClassName, className, name, path, rel, ...otherProps } = props;

  return (
    <Link activeClassName={activeClassName} className={className} rel={rel} to={path} {...otherProps}>
      {name}
    </Link>
  );
};

export default Route;
