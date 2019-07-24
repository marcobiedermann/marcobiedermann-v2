import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Grid from '../../components/Grid';
import Layout from '../../components/Layout';
import Projects from '../../components/Projects';
import Section from '../../components/Section';

const TagTemplate = props => {
  const {
    data: { allContentfulProject },
  } = props;

  const { edges: projects } = allContentfulProject;

  return (
    <Layout>
      <Section>
        <Grid>
          <h1>Tag</h1>
          <Projects projects={projects.map(project => project.node)} />
        </Grid>
      </Section>
    </Layout>
  );
};

TagTemplate.propTypes = {
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

TagTemplate.defaultProps = {
  data: null,
};

export const pageQuery = graphql`
  query ProjectsByTag($tag: String!) {
    allContentfulProject(filter: { tags: { in: [$tag] } }, sort: { fields: [createdAt], order: DESC }) {
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
export default TagTemplate;
