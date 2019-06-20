import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Grid from '../components/Grid';
import Layout from '../components/Layout';
import Projects from '../components/Projects';
import Section from '../components/Section';

const ProjectsPage = () => {
  const { allContentfulProject } = useStaticQuery(
    graphql`
      query {
        allContentfulProject(sort: { fields: [createdAt], order: DESC }, limit: 12) {
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
    `,
  );

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

export default ProjectsPage;
