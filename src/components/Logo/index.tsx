import { Link } from 'gatsby';
import React from 'react';

export interface LogoProps {
  id: string;
  logo: {
    file: {
      url: string;
    };
    title: string;
  };
  slug?: string;
}

const Logo: React.FC<LogoProps> = props => {
  const { logo, slug } = props;

  return <Link to={`/projects/${slug}`}>{logo && <img src={logo.file.url} alt={logo.title} />}</Link>;
};

export default Logo;
