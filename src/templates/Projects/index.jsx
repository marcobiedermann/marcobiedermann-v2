import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Grid from '../../components/Grid';
import Layout from '../../components/Layout';
import Projects from '../../components/Projects';
import Section from '../../components/Section';

const ProjectsTemplate = props => {
  const {
    data: { allContentfulProject },
  } = props;

  const { edges: projects } = allContentfulProject;

  return (
    <Layout>
      <Section>
        <Grid>
          <Projects projects={projects.map(project => project.node)} />
        </Grid>
      </Section>
    </Layout>
  );
};

ProjectsTemplate.propTypes = {
  data: PropTypes.shape({
    allContentfulProject: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape(),
        }),
      ),
    }),
  }),
};

ProjectsTemplate.defaultProps = {
  data: null,
};

export const pageQuery = graphql`
  query Projects($limit: Int!, $skip: Int!) {
    allContentfulProject(sort: { fields: [createdAt], order: DESC }, limit: $limit, skip: $skip) {
      edges {
        node {
          id
          slug
          title
          thumbnail {
            fluid {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
          }
        }
      }
    }
  }
`;

export default ProjectsTemplate;
