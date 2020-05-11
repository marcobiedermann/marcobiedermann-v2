import classNames from 'classnames';
import React, { FC } from 'react';
import Alignment, { AlignmentProps } from '../Alignment';
import styles from './style.module.css';

export interface GridProps extends AlignmentProps {
  className?: string;
}

export const Grid: FC<GridProps> = (props) => {
  const { className, ...otherProps } = props;

  return <Alignment className={classNames(className, styles.grid)} {...otherProps} />;
};

export default Grid;
