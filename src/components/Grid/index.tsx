import classNames from 'classnames';
import React from 'react';
import Alignment, { AlignmentProps } from '../Alignment';
import styles from './style.module.css';

export interface GridProps extends AlignmentProps {
  className?: string;
}

const Grid: React.FC<GridProps> = (props) => {
  const { className, ...otherProps } = props;

  return <Alignment className={classNames(className, styles.grid)} {...otherProps} />;
};

export default Grid;
