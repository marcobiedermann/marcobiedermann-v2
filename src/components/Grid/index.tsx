import classNames from 'classnames';
import capitalize from 'lodash/capitalize';
import React, { FC } from 'react';
import Alignment, { AlignmentProps } from '../Alignment';
import * as styles from './style.module.css';

export interface GridProps extends AlignmentProps {
  className?: string;
  size?: 'small';
}

export const Grid: FC<GridProps> = (props) => {
  const { className, size, ...otherProps } = props;

  return (
    <Alignment
      className={classNames(className, styles.grid, {
        [styles[`grid${capitalize(size)}` as 'gridSmall']]: size,
      })}
      {...otherProps}
    />
  );
};

export default Grid;
