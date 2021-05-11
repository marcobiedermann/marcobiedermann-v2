import classNames from 'classnames';
import React, { FC } from 'react';
import * as styles from './style.module.css';

export interface FooterProps {
  className?: string;
}

export const Footer: FC<FooterProps> = (props) => {
  const { className, ...otherProps } = props;

  return <footer className={classNames(className, styles.footer)} {...otherProps} />;
};

export default Footer;
