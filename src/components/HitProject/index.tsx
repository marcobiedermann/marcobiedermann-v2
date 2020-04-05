import { Link } from 'gatsby';
import React from 'react';

export interface HitProjectProps {
  slug: {
    'en-US': string;
  };
  title: {
    'en-US': string;
  };
}

const HitProject: React.FC<HitProjectProps> = (props) => {
  const { slug, title } = props;

  return (
    <div>
      <figure>
        <figcaption>
          <h3>
            <Link to={`/projects/${slug['en-US']}`}>{title['en-US']}</Link>
          </h3>
        </figcaption>
      </figure>
    </div>
  );
};

export default HitProject;
