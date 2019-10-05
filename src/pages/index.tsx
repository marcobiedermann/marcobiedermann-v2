import { graphql, useStaticQuery } from 'gatsby';
import { FluidObject } from 'gatsby-image';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../components/Button';
import Grid from '../components/Grid';
import Layout from '../components/Layout';
import Projects from '../components/Projects';
import Section from '../components/Section';
import SEO from '../components/SEO';

interface IndexPageQuery {
  allContentfulProject: {
    edges: [
      {
        node: {
          id: string;
          slug: string;
          title: string;
          thumbnail: {
            fluid: FluidObject;
          };
        };
      },
    ];
  };
}

const IndexPage: React.FC = () => {
  const { allContentfulProject }: IndexPageQuery = useStaticQuery(
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
  const { t } = useTranslation();
  const { edges: projects } = allContentfulProject;

  return (
    <Layout>
      <SEO title="Home" keywords={['gatsby', 'application', 'react']} />

      <Section>
        <Grid>
          <Projects projects={projects.map(project => project.node)} />
          <Button to="/projects">{t('project:more work')}</Button>
        </Grid>
      </Section>
    </Layout>
  );
};

export default IndexPage;
