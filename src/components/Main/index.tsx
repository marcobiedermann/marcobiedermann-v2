import classNames from 'classnames';
import React from 'react';
import styles from './style.module.css';

export interface MainProps {
  className?: string;
}

const Main: React.FC<MainProps> = (props) => {
  const { children, className, ...otherProps } = props;

  return (
    <main className={classNames(className, styles.main)} {...otherProps}>
      {children}
    </main>
  );
};

export default Main;
