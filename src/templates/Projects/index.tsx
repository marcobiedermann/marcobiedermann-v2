import { graphql } from 'gatsby';
import React from 'react';
import Grid from '../../components/Grid';
import Layout from '../../components/Layout';
import { ProjectProps } from '../../components/Project';
import Projects from '../../components/Projects';
import Section from '../../components/Section';

export interface ProjectsTemplate {
  data: {
    allContentfulProject: {
      edges: [
        {
          node: ProjectProps;
        },
      ];
    };
  };
}

const ProjectsTemplate: React.FC<ProjectsTemplate> = props => {
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
