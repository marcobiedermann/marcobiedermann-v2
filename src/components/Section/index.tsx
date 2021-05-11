import classNames from 'classnames';
import capitalize from 'lodash/capitalize';
import React, { FC } from 'react';
import * as styles from './style.module.css';

type Appearance = 'dark' | 'light';

export interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  appearance?: Appearance;
  isFull?: boolean;
}

export const Section: FC<SectionProps> = (props) => {
  const { appearance, className, isFull, ...otherProps } = props;

  const classes = classNames(className, styles.section, {
    [styles.sectionFull]: isFull,
    [styles[`section${capitalize(appearance)}` as 'sectionLight' | 'sectionDark']]: appearance,
  });

  return <section className={classes} {...otherProps} />;
};

export default Section;
