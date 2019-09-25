import { Link } from 'gatsby';
import React from 'react';

export interface TagProps {
  fieldValue: string;
  totalCount: number;
}

const Tag: React.FC<TagProps> = props => {
  const { fieldValue, totalCount } = props;

  return (
    <Link to={`/tags/${fieldValue}`}>
      {fieldValue} <span>({totalCount})</span>
    </Link>
  );
};

export default Tag;
