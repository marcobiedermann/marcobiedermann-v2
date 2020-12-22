import {
  ContentfulRichTextGatsbyReference,
  renderRichText,
  RenderRichTextData,
} from 'gatsby-source-contentful/rich-text';
import React, { FC } from 'react';

export interface SkillProps {
  description?: RenderRichTextData<ContentfulRichTextGatsbyReference>;
  id: string;
  title: string;
}

export const Skill: FC<SkillProps> = (props) => {
  const { description, title } = props;

  return (
    <div>
      <h3>{title}</h3>
      <div>{description && renderRichText(description)}</div>
    </div>
  );
};

export default Skill;
