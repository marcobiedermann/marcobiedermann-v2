import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Document } from '@contentful/rich-text-types';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Experiences from '../components/Experiences';
import Grid from '../components/Grid';
import Layout from '../components/Layout';
import Section from '../components/Section';

interface AboutPageQuery {
  allContentfulExperience: {
    edges: [
      {
        node: {
          description: {
            json: Document;
          };
          company: string;
          endDate: Date;
          location: string;
          id: string;
          startDate: Date;
          title: string;
          url: string;
        };
      },
    ];
  };
  contentfulPage: {
    body: {
      json: Document;
    };
    id: string;
    slug: string;
    title: string;
  };
}

const AboutPage: React.FC = () => {
  const { allContentfulExperience, contentfulPage }: AboutPageQuery = useStaticQuery(
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
  const { t } = useTranslation();

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
          <h2>{t('about:experiences')}</h2>
          <Experiences experiences={experiences.map(experience => experience.node)} />
        </Grid>
      </Section>
    </Layout>
  );
};

export default AboutPage;
