import { Link } from 'gatsby';
import React, { FC } from 'react';

export interface RouteProps {
  activeClassName?: string;
  className?: string;
  name: string;
  path: string;
  rel?: string;
}

export const Route: FC<RouteProps> = (props) => {
  const { activeClassName, className, name, path, rel, ...otherProps } = props;

  return (
    <Link activeClassName={activeClassName} className={className} rel={rel} to={path} {...otherProps}>
      {name}
    </Link>
  );
};

export default Route;
