import { Link } from 'gatsby';
import React from 'react';

export interface RouteProps {
  id: string;
  name: string;
  path: string;
}

const Route: React.FC<RouteProps> = props => {
  const { name, path, ...otherProps } = props;

  return (
    <Link to={path} {...otherProps}>
      {name}
    </Link>
  );
};

export default Route;
