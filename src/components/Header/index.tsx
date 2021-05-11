import classNames from 'classnames';
import React, { FC } from 'react';
import * as styles from './style.module.css';

export interface HeaderProps {
  className?: string;
}

export const Header: FC<HeaderProps> = (props) => {
  const { className, ...otherProps } = props;

  return <header className={classNames(className, styles.header)} {...otherProps} />;
};

export default Header;
