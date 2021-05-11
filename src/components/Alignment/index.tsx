import classNames from 'classnames';
import camelCase from 'lodash/camelCase';
import capitalize from 'lodash/capitalize';
import React, { FC } from 'react';
import * as styles from './style.module.css';

type Align = 'center' | 'end' | 'start';
type AlignClass = 'alignmentAlignCenter' | 'alignmentAlignEnd' | 'alignmentAlignStart';
type Justify = 'center' | 'end' | 'space-between' | 'start';
type JustifyClass =
  | 'alignmentJustifyCenter'
  | 'alignmentJustifyEnd'
  | 'alignmentJustifySpaceBetween'
  | 'alignmentJustifyStart';

export interface AlignmentProps {
  align?: Align;
  className?: string;
  justify?: Justify;
}

export const Alignment: FC<AlignmentProps> = (props) => {
  const { align, className, justify, ...otherProps } = props;

  return (
    <div
      className={classNames(className, {
        [styles.alignment]: align || justify,
        [styles[camelCase(`alignmentAlign${capitalize(align)}`) as AlignClass]]: align,
        [styles[camelCase(`alignmentJustify${capitalize(justify)}`) as JustifyClass]]: justify,
      })}
      {...otherProps}
    />
  );
};

export default Alignment;
