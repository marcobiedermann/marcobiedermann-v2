import classNames from 'classnames';
import React from 'react';
import styles from './style.module.css';

export interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = (props) => {
  const { children, className, ...otherProps } = props;

  return (
    <footer className={classNames(className, styles.footer)} {...otherProps}>
      {children}
    </footer>
  );
};

export default Footer;
