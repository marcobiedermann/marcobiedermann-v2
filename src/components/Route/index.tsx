import { Link } from 'gatsby';
import React from 'react';

export interface RouteProps {
  id: string;
  className?: string;
  name: string;
  path: string;
}

const Route: React.FC<RouteProps> = props => {
  const { className, name, path } = props;

  return (
    <Link className={className} to={path}>
      {name}
    </Link>
  );
};

export default Route;
