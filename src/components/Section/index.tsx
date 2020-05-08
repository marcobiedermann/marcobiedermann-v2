import classNames from 'classnames';
import capitalize from 'lodash/capitalize';
import React from 'react';
import styles from './style.module.css';

type Appearance = 'dark' | 'light';

export interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  appearance?: Appearance;
  isFull?: boolean;
}

const Section: React.FC<SectionProps> = (props) => {
  const { appearance, className, isFull, ...otherProps } = props;

  const classes = classNames(className, styles.section, {
    [styles.sectionFull]: isFull,
    [styles[`section${capitalize(appearance)}` as 'sectionLight' | 'sectionDark']]: appearance,
  });

  return <section className={classes} {...otherProps} />;
};

export default Section;
