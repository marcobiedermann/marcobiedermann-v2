import classNames from 'classnames';
import React from 'react';
import styles from './style.module.css';

export interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = (props) => {
  const { children, className, ...otherProps } = props;

  return (
    <header className={classNames(className, styles.header)} {...otherProps}>
      {children}
    </header>
  );
};

export default Header;
