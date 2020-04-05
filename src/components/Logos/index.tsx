import classNames from 'classnames';
import React from 'react';
import Logo, { LogoProps } from '../Logo';
import styles from './style.module.css';

export interface LogosProps {
  className?: string;
  logos: LogoProps[];
}

const Logos: React.FC<LogosProps> = (props) => {
  const { className, logos, ...otherProps } = props;

  return (
    <ul className={classNames(className, styles.logos)} {...otherProps}>
      {logos.map((logo) => (
        <li key={logo.id}>
          <Logo {...logo} />
        </li>
      ))}
    </ul>
  );
};

export default Logos;
