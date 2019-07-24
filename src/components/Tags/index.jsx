import PropTypes from 'prop-types';
import React from 'react';
import Tag from '../Tag';

const Tags = props => {
  const { tags } = props;

  return (
    <ul>
      {tags.map(tag => (
        <li key={tag.fieldValue}>
          <Tag fieldValue={tag.fieldValue} totalCount={tag.totalCount} />
        </li>
      ))}
    </ul>
  );
};

Tags.propTypes = {
  tags: PropTypes.arrayOf({
    fieldValue: PropTypes.string,
    totalCount: PropTypes.number,
  }),
};

Tags.defaultProps = {
  tags: [],
};

export default Tags;
