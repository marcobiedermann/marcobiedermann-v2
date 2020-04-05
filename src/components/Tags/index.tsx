import React from 'react';
import Tag, { TagProps } from '../Tag';

export interface TagsProps {
  tags: TagProps[];
}

const Tags: React.FC<TagsProps> = (props) => {
  const { tags } = props;

  return (
    <ul>
      {tags.map((tag) => (
        <li key={tag.fieldValue}>
          <Tag fieldValue={tag.fieldValue} totalCount={tag.totalCount} />
        </li>
      ))}
    </ul>
  );
};

export default Tags;
