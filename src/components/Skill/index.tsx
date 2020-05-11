import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Document } from '@contentful/rich-text-types';
import React, { FC } from 'react';

export interface SkillProps {
  description?: {
    json: Document;
  };
  id: string;
  title: string;
}

export const Skill: FC<SkillProps> = (props) => {
  const { description, title } = props;

  return (
    <div>
      <h3>{title}</h3>
      <div>{description && documentToReactComponents(description.json)}</div>
    </div>
  );
};

export default Skill;
