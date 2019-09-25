import classNames from 'classnames';
import React from 'react';
import styles from './style.module.css';

export interface RowProps {
  className?: string;
}

const Row: React.FC<RowProps> = props => {
  const { children, className, ...otherProps } = props;

  return (
    <div className={classNames(className, styles.row)} {...otherProps}>
      {children}
    </div>
  );
};

export default Row;
