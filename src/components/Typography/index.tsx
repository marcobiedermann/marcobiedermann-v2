import classNames from 'classnames';
import camelCase from 'lodash/camelCase';
import capitalize from 'lodash/capitalize';
import React, { FC } from 'react';
import styles from './style.module.css';

type Component = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
type TextAlign = 'center' | 'left' | 'right';
type TextAlignClass = 'typographyTextAlignCenter' | 'typographyTextAlignLeft' | 'typographyTextAlignRight';

export interface TypographyProps {
  className?: string;
  textAlign?: TextAlign;
}

export const Typography: FC<TypographyProps> = (props) => {
  const { className, textAlign, ...otherProps } = props;

  return (
    <div
      className={classNames(className, {
        [styles[camelCase(`typographyTextAlign${capitalize(textAlign)}`) as TextAlignClass]]: textAlign,
      })}
      {...otherProps}
    />
  );
};

export default Typography;
