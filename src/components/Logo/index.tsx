import classNames from 'classnames';
import { Link } from 'gatsby';
import React, { FC } from 'react';
import * as styles from './style.module.css';

export interface LogoProps {
  className?: string;
  id: string;
  logo: {
    file: {
      url: string;
    };
    title: string;
  };
  slug?: string;
}

export const Logo: FC<LogoProps> = (props) => {
  const { className, logo, slug } = props;

  return (
    <Link to={`/projects/${slug}`} className={classNames(className, styles.logo)}>
      {logo && <img src={logo.file.url} alt={logo.title} />}
    </Link>
  );
};

export default Logo;
