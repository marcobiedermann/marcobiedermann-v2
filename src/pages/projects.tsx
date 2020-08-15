import { PageProps } from 'gatsby';
import React from 'react';
import Grid from '../components/Grid';
import Layout from '../components/Layout';
import Projects from '../components/Projects';
import Section from '../components/Section';
import { useProjectsPage } from '../hooks/projects';

const BlogPage: React.FC<PageProps> = () => {
  const {
    allContentfulProject: { projects },
  } = useProjectsPage();

  return (
    <Layout>
      <Section>
        <Grid>
          <Projects projects={projects.map((project) => project.node)} />
        </Grid>
      </Section>
    </Layout>
  );
};

export default BlogPage;
