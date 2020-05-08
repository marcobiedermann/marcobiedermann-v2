import classNames from 'classnames';
import React from 'react';
import Alignment, { AlignmentProps } from '../Alignment';
import styles from './style.module.css';

export interface ColumnProps extends AlignmentProps {
  className?: string;
}

const Column: React.FC<ColumnProps> = (props) => {
  const { className, ...otherProps } = props;

  return <Alignment className={classNames(className, styles.column)} {...otherProps} />;
};

export default Column;
