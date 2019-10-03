import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Document } from '@contentful/rich-text-types';
import { format, formatDistanceStrict } from 'date-fns';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { DATE_NOW } from '../../constants/date';

export interface ExperienceProps {
  company: string;
  description?: {
    json: Document;
  };
  endDate?: Date;
  location: string;
  id: string;
  startDate: Date;
  title: string;
  url: string;
}

const Experience: React.FC<ExperienceProps> = props => {
  const { company, description, location, endDate, startDate, title, url } = props;
  const { t } = useTranslation();

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
        {format(new Date(startDate), 'MMM yyyy')} – {endDate ? format(new Date(endDate), 'MMM yyyy') : t('present')} (
        {formatDistanceStrict(new Date(startDate), endDate ? new Date(endDate) : DATE_NOW)})
      </div>
      <div>{description && documentToReactComponents(description.json)}</div>
    </div>
  );
};

export default Experience;
