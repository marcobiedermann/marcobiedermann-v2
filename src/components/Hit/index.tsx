import React from 'react';
import HitProject, { HitProjectProps } from '../HitProject';

export interface HitProps {
  hit: {
    fields: HitProjectProps;
  };
}

const Hit: React.FC<HitProps> = props => {
  const { hit, ...otherProps } = props;

  return (
    <div {...otherProps}>
      <HitProject {...hit.fields} />
    </div>
  );
};

export default Hit;
