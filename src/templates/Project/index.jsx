import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Section from '../../components/Section';

const ProjectTemplate = props => {
  const {
    data: {
      contentfulProject: { agency, client, role, title },
    },
  } = props;

  return (
    <div>
      <Section>
        <h1>{title}</h1>
        <ul>
          <li>
            <strong>Client:</strong> {client}
          </li>
          <li>
            <strong>Agency:</strong> {agency}
          </li>
          <li>
            <strong>Role:</strong> {role}
          </li>
        </ul>
      </Section>
    </div>
  );
};

ProjectTemplate.propTypes = {
  data: PropTypes.shape({
    contentfulProject: PropTypes.shape({
      agency: PropTypes.string,
      client: PropTypes.string,
      role: PropTypes.string,
      title: PropTypes.string,
    }),
  }),
};

ProjectTemplate.defaultProps = {
  data: null,
};

export const pageQuery = graphql`
  query ProjectBySlug($slug: String!) {
    contentfulProject(slug: { eq: $slug }) {
      agency
      client
      id
      role
      slug
      tags
      title
      url
    }
  }
`;

export default ProjectTemplate;
