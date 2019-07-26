import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import Grid from '../components/Grid';
import Layout from '../components/Layout';
import Projects from '../components/Projects';
import Section from '../components/Section';
import SEO from '../components/SEO';
import * as routes from '../constants/routes';

const IndexPage = () => {
  const { allContentfulProject } = useStaticQuery(
    graphql`
      query {
        allContentfulProject(sort: { fields: [createdAt], order: DESC }, limit: 8) {
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
      <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
      <Section>
        <Grid>
          <h1>Hi people</h1>
          <p>Welcome to your new Gatsby site.</p>
          <p>Now go build something great.</p>
          <Link to="/page-2/">Go to page 2</Link>
        </Grid>
      </Section>

      <Section>
        <Grid>
          <Projects projects={projects.map(project => project.node)} />
          <Link to={routes.PROJECTS.path}>See more Work</Link>
        </Grid>
      </Section>
    </Layout>
  );
};

export default IndexPage;
