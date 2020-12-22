import { BLOCKS, Node } from '@contentful/rich-text-types';
import { graphql, PageProps } from 'gatsby';
import {
  ContentfulRichTextGatsbyReference,
  renderRichText,
  RenderRichTextData,
} from 'gatsby-source-contentful/rich-text';
import React from 'react';
import Grid from '../../components/Grid';
import Layout from '../../components/Layout';
import Section from '../../components/Section';

const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node: Node): React.ReactElement => {
      const {
        description,
        file: {
          url,
          details: {
            image: { width, height },
          },
        },
      } = node.data.target;

      return (
        <figure>
          <img alt={description} src={url} width={width} height={height} />
        </figure>
      );
    },
  },
};

export interface PageTemplateProps extends PageProps {
  data: {
    contentfulPage: {
      body: RenderRichTextData<ContentfulRichTextGatsbyReference>;
      title: string;
    };
  };
}

const PageTemplate: React.FC<PageTemplateProps> = (props) => {
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
          {body && renderRichText(body, options)}
        </Grid>
      </Section>
    </Layout>
  );
};

export const pageQuery = graphql`
  query PageBySlug($slug: String!) {
    contentfulPage(slug: { eq: $slug }) {
      body {
        raw
        references {
          ... on ContentfulAsset {
            __typename
            contentful_id
            description
            file {
              url
              details {
                image {
                  width
                  height
                }
              }
            }
          }
        }
      }
      id
      slug
      title
    }
  }
`;
export default PageTemplate;
