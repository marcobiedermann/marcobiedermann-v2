import { Link } from 'gatsby';
import React from 'react';

export interface RouteProps {
  activeClassName?: string;
  className?: string;
  id: string;
  name: string;
  path: string;
}

const Route: React.FC<RouteProps> = props => {
  const { activeClassName, className, name, path } = props;

  return (
    <Link activeClassName={activeClassName} className={className} to={path}>
      {name}
    </Link>
  );
};

export default Route;
