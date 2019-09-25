import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Document } from '@contentful/rich-text-types';
import { graphql } from 'gatsby';
import React from 'react';
import Grid from '../../components/Grid';
import Layout from '../../components/Layout';
import Section from '../../components/Section';

export interface PageTemplateProps {
  data: {
    contentfulPage: {
      body: {
        json: Document;
      };
      title: string;
    };
  };
}

const PageTemplate: React.FC<PageTemplateProps> = props => {
  const {
    data: {
      contentfulPage: { body, title },
    },
  } = props;
  return (
    <Layout>
      <Section>
        <Grid>
          <h1>{title}</h1>
          {documentToReactComponents(body.json)}
        </Grid>
      </Section>
    </Layout>
  );
};

export const pageQuery = graphql`
  query PageBySlug($slug: String!) {
    contentfulPage(slug: { eq: $slug }) {
      body {
        json
      }
      id
      slug
      title
    }
  }
`;
export default PageTemplate;
