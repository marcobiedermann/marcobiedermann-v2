import React, { FC } from 'react';

export interface BadgeProps {
  id: string;
  url: string;
  image: {
    src: string;
    alt: string;
  };
}

const Badge: FC<BadgeProps> = (props) => {
  const { image, url, ...otherProps } = props;

  return (
    <a href={url} target="_blank" rel="noopener noreferrer" {...otherProps}>
      <img src={image.src} alt={image.alt} />
    </a>
  );
};

export default Badge;
