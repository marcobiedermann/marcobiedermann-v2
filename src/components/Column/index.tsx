import classNames from 'classnames';
import { camelCase, capitalize } from 'lodash';
import React, { FC } from 'react';
import Alignment, { AlignmentProps } from '../Alignment';
import styles from './style.module.css';

type ColumnClass = 'columnSpan6';

export interface ColumnProps extends AlignmentProps {
  className?: string;
  span?: number;
}

export const Column: FC<ColumnProps> = (props) => {
  const { className, span = 12, ...otherProps } = props;

  return (
    <Alignment
      className={classNames(className, styles.column, {
        [styles[camelCase(`columnSpan${capitalize(span.toString())}`) as ColumnClass]]: span,
      })}
      {...otherProps}
    />
  );
};

export default Column;
