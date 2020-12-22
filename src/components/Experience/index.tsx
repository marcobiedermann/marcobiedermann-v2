import { format, formatDistanceStrict } from 'date-fns';
import {
  ContentfulRichTextGatsbyReference,
  renderRichText,
  RenderRichTextData,
} from 'gatsby-source-contentful/rich-text';
import React, { FC } from 'react';
import { DATE_NOW } from '../../constants/date';

export interface ExperienceProps {
  company: string;
  description?: RenderRichTextData<ContentfulRichTextGatsbyReference>;
  endDate?: Date;
  location: string;
  id: string;
  startDate: Date;
  title: string;
  url: string;
}

export const Experience: FC<ExperienceProps> = (props) => {
  const { company, description, location, endDate, startDate, title, url } = props;

  return (
    <div>
      <h3>{title}</h3>
      <h4>
        @
        <a href={url} target="_blank" rel="noopener noreferrer">
          {company}
        </a>
        , {location}
      </h4>
      <div>
        {format(new Date(startDate), 'MMM yyyy')} – {endDate ? format(new Date(endDate), 'MMM yyyy') : 'Present'} (
        {formatDistanceStrict(new Date(startDate), endDate ? new Date(endDate) : DATE_NOW)})
      </div>
      <div>{description && renderRichText(description)}</div>
    </div>
  );
};

export default Experience;
