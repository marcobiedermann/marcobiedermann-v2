import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Document } from '@contentful/rich-text-types';
import classNames from 'classnames';
import { format, formatDistanceStrict } from 'date-fns';
import React from 'react';
import { DATE_NOW } from '../../constants/date';
import styles from './style.module.css';

export interface ExperienceProps {
  className?: string;
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
  const { className, company, description, location, endDate, startDate, title, url } = props;

  return (
    <div className={classNames(className, styles.experience)}>
      <h3>{title}</h3>
      <h4>
        @
        <a href={url} target="_blank" rel="noopener noreferrer">
          {company}
        </a>
        , {location}
      </h4>
      <div>
        {format(new Date(startDate), 'MMM yyyy')} – {endDate ? format(new Date(endDate), 'MMM yyyy') : 'present'} (
        {formatDistanceStrict(new Date(startDate), endDate ? new Date(endDate) : DATE_NOW)})
      </div>
      <div>{description && documentToReactComponents(description.json)}</div>
    </div>
  );
};

export default Experience;