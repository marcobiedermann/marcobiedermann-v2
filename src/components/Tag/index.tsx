import { Link } from 'gatsby';
import React, { FC } from 'react';

export interface TagProps {
  fieldValue: string;
  totalCount: number;
}

export const Tag: FC<TagProps> = (props) => {
  const { fieldValue, totalCount } = props;

  return (
    <Link to={`/tags/${fieldValue}`}>
      {fieldValue} <span>({totalCount})</span>
    </Link>
  );
};

export default Tag;
