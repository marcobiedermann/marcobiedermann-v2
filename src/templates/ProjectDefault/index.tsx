import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, Document, Node } from '@contentful/rich-text-types';
import { graphql } from 'gatsby';
import React from 'react';
import Grid from '../../components/Grid';
import Layout from '../../components/Layout';
import Pagination from '../../components/Pagination';
import Section from '../../components/Section';

const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node: Node): React.ReactElement => {
      const { description, file } = node.data.target.fields;
      const { contentType, details, url } = file['en-US'];
      const mineGroup = contentType.split('/')[0];

      switch (mineGroup) {
        case 'image':
          return (
            <figure>
              <img
                alt={description ? description['en-US'] : null}
                src={url}
                width={details.image.width}
                height={details.image.height}
              />
            </figure>
          );

        default:
          return <span>{contentType} embedded asset</span>;
      }
    },
  },
};

export interface ProjectDefaultTemplateProps {
  data: {
    contentfulProject: {
      body: {
        json: Document;
      };
      title: string;
    };
  };
  pageContext: {
    previous: {
      slug: string;
    };
    next: {
      slug: string;
    };
  };
}

const ProjectDefaultTemplate: React.FC<ProjectDefaultTemplateProps> = props => {
  const {
    data: {
      contentfulProject: { body, title },
    },
    pageContext: { previous, next },
  } = props;

  const paginationRoutes = [];

  if (previous) {
    paginationRoutes.push({
      name: 'Previous',
      path: `/projects/${previous.slug}`,
    });
  }

  if (next) {
    paginationRoutes.push({
      name: 'Next',
      path: `/projects/${next.slug}`,
    });
  }

  return (
    <Layout>
      <Section>
        <Grid>
          <h1>{title}</h1>
          {documentToReactComponents(body.json, options)}
        </Grid>
      </Section>

      <Section>
        <Grid>
          <Pagination routes={paginationRoutes} />
        </Grid>
      </Section>
    </Layout>
  );
};

export const pageQuery = graphql`
  query ProjectDefaultBySlug($slug: String!) {
    contentfulProject(slug: { eq: $slug }) {
      body {
        json
      }
      id
      slug
      title
    }
  }
`;
export default ProjectDefaultTemplate;
