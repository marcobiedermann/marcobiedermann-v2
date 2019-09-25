import classNames from 'classnames';
import React from 'react';
import styles from './style.module.css';

export interface GridProps {
  className?: string;
}

const Grid: React.FC<GridProps> = props => {
  const { children, className, ...otherProps } = props;

  return (
    <div className={classNames(className, styles.grid)} {...otherProps}>
      {children}
    </div>
  );
};

export default Grid;