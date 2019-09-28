import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Experiences from '../components/Experiences';
import Grid from '../components/Grid';
import Layout from '../components/Layout';
import Section from '../components/Section';

const AboutPage: React.FC = () => {
  const { allContentfulExperience, contentfulPage } = useStaticQuery(
    graphql`
      query {
        allContentfulExperience(sort: { fields: endDate, order: DESC }) {
          edges {
            node {
              company
              description {
                json
              }
              endDate
              location
              id
              startDate
              title
              url
            }
          }
        }
        contentfulPage(slug: { eq: "about" }) {
          body {
            json
          }
          id
          slug
          title
        }
      }
    `,
  );

  const { edges: experiences } = allContentfulExperience;
  const { body, title } = contentfulPage;

  return (
    <Layout>
      <Section>
        <Grid>
          <h1>{title}</h1>
          {documentToReactComponents(body.json)}
        </Grid>
      </Section>
      <Section>
        <Grid>
          <h2>Experiences</h2>
          <Experiences experiences={experiences.map(experience => experience.node)} />
        </Grid>
      </Section>
    </Layout>
  );
};

export default AboutPage;
