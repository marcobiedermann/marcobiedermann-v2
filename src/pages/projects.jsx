import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
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
            }
          }
        }
      }
    `,
  );

  const { edges: projects } = allContentfulProject;

  return (
    <div>
      <Projects projects={projects.map(project => project.node)} />
    </div>
  );
};

export default ProjectsPage;
