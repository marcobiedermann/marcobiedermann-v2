import React, { FC } from 'react';

export interface IconProps {
  alt: string;
  id: string;
  src: string;
  url: string;
}

const Icon: FC<IconProps> = (props) => {
  const { src, url, alt } = props;

  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <img src={src} alt={alt} width="32" height="32" />
    </a>
  );
};

export default Icon;
