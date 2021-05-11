import classNames from 'classnames';
import React, { FC } from 'react';
import Alignment, { AlignmentProps } from '../Alignment';
import * as styles from './style.module.css';

export interface RowProps extends AlignmentProps {
  className?: string;
}

export const Row: FC<RowProps> = (props) => {
  const { className, ...otherProps } = props;

  return <Alignment className={classNames(className, styles.row)} {...otherProps} />;
};

export default Row;
