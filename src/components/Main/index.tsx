import classNames from 'classnames';
import React, { FC } from 'react';
import * as styles from './style.module.css';

export interface MainProps {
  className?: string;
}

export const Main: FC<MainProps> = (props) => {
  const { className, ...otherProps } = props;

  return <main className={classNames(className, styles.main)} {...otherProps} />;
};

export default Main;
