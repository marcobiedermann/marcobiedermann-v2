import classNames from 'classnames';
import React from 'react';
import Alignment, { AlignmentProps } from '../Alignment';
import styles from './style.module.css';

export interface RowProps extends AlignmentProps {
  className?: string;
}

const Row: React.FC<RowProps> = (props) => {
  const { children, className, ...otherProps } = props;

  return (
    <Alignment className={classNames(className, styles.row)} {...otherProps}>
      {children}
    </Alignment>
  );
};

export default Row;
