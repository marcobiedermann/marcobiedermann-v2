import React, { FC } from 'react';
import Badges from '../Badges';

export interface RepositoryProps {
  descriptionHTML: string;
  id: string;
  name: string;
  nameWithOwner: string;
  primaryLanguage?: {
    name: string;
  };
  url: string;
}

const Repository: FC<RepositoryProps> = (props) => {
  const { descriptionHTML, name, nameWithOwner, url, ...otherProps } = props;

  return (
    <div {...otherProps}>
      <h3>
        <a href={url} target="_blank" rel="noopener noreferrer">
          {name}
        </a>
      </h3>
      <Badges
        badges={[
          // {
          //   id: 'github',
          //   image: {
          //     src: `https://img.shields.io/github/stars/${nameWithOwner}?style=social`,
          //     alt: `Star ${nameWithOwner} on GitHub`,
          //   },
          //   url: `https://github.com/${nameWithOwner}`,
          // },
          {
            id: 'build',
            image: {
              src: `https://img.shields.io/travis/com/${nameWithOwner}`,
              alt: 'Build Status',
            },
            url: `https://travis-ci.com/${nameWithOwner}`,
          },
          {
            id: 'dependencies',
            image: {
              src: `https://img.shields.io/david/${nameWithOwner}`,
              alt: 'dependencies Status',
            },
            url: `https://david-dm.org/${nameWithOwner}`,
          },
          {
            id: 'devDependencies',
            image: {
              src: `https://img.shields.io/david/dev/${nameWithOwner}`,
              alt: 'devDependencies Status',
            },
            url: `https://david-dm.org/${nameWithOwner}?type=dev`,
          },
        ]}
      />
      <div dangerouslySetInnerHTML={{ __html: descriptionHTML }} />
    </div>
  );
};

export default Repository;
