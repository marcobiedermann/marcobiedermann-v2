import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';
import Projects from '../components/Projects';

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
      <Projects projects={projects.map(project => project.node)} />
    </Layout>
  );
};

export default ProjectsPage;
