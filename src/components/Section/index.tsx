import classNames from 'classnames';
import capitalize from 'lodash/capitalize';
import React from 'react';
import styles from './style.module.css';

type Appearance = 'dark' | 'light';

export interface SectionProps {
  appearance?: Appearance;
  className?: string;
  isFull?: boolean;
}

const Section: React.FC<SectionProps> = (props) => {
  const { appearance, children, className, isFull, ...otherProps } = props;

  return (
    <section
      className={classNames(className, styles.section, {
        [styles.sectionFull]: isFull,
        [styles[`section${capitalize(appearance)}` as 'sectionLight' | 'sectionDark']]: appearance,
      })}
      {...otherProps}
    >
      {children}
    </section>
  );
};

export default Section;
