import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, Document, Node } from '@contentful/rich-text-types';
import { graphql, PageProps } from 'gatsby';
import React from 'react';
import Grid from '../../components/Grid';
import Layout from '../../components/Layout';
import Section from '../../components/Section';

const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node: Node): React.ReactElement => {
      const { description, file } = node.data.target.fields;
      const { contentType, details, url } = file['en-US'];
      const [mineGroup] = contentType.split('/');

      switch (mineGroup) {
        case 'image':
          return (
            <p>
              <img
                alt={description ? description['en-US'] : null}
                src={url}
                width={details.image.width}
                height={details.image.height}
              />
            </p>
          );

        default:
          return <span>{contentType} embedded asset</span>;
      }
    },
  },
};

export interface PageTemplateProps extends PageProps {
  data: {
    contentfulPage: {
      body: {
        json: Document;
      };
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
          {documentToReactComponents(body.json, options)}
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
