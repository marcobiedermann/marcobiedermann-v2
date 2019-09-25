import classNames from 'classnames';
import React from 'react';
import styles from './style.module.css';

export interface ColumnProps {
  className?: string;
}

const Column: React.FC<ColumnProps> = props => {
  const { children, className, ...otherProps } = props;

  return (
    <div className={classNames(className, styles.column)} {...otherProps}>
      {children}
    </div>
  );
};

export default Column;
