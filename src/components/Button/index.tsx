import classNames from 'classnames';
import { Link } from 'gatsby';
import React, { FC } from 'react';
import * as styles from './style.module.css';

export interface ButtonProps {
  className?: string;
  href?: string;
  to?: string;
}

export const Button: FC<ButtonProps> = (prop) => {
  const { children, className, href, to } = prop;
  const classes = classNames(className, styles.button);

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  if (to) {
    return (
      <Link className={classes} to={to}>
        {children}
      </Link>
    );
  }

  return <span className={classes}>{children}</span>;
};

export default Button;
