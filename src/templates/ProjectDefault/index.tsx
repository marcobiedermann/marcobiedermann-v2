import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, Document, Node } from '@contentful/rich-text-types';
import { graphql, PageProps } from 'gatsby';
import React from 'react';
import { useTranslation } from 'react-i18next';
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

export interface ProjectDefaultTemplateProps extends PageProps {
  data: {
    contentfulProject: {
      body: {
        json: Document;
      };
      title: string;
    };
    site: {
      siteMetadata: {
        author: string;
      };
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

const ProjectDefaultTemplate: React.FC<ProjectDefaultTemplateProps> = (props) => {
  const {
    data: {
      contentfulProject: { body, title },
    },
    pageContext: { previous, next },
  } = props;
  const { t } = useTranslation();

  return (
    <Layout>
      <Section>
        <Grid justify="center">
          <h1>{title}</h1>
          {documentToReactComponents(body.json, options)}
        </Grid>
      </Section>

      <Section>
        <Grid justify="center">
          <Pagination
            {...(next && {
              next: { id: 'next', name: t('pagination.next'), path: `/projects/${next.slug}` },
            })}
            {...(previous && {
              previous: { id: 'previous', name: t('pagination.previous'), path: `/projects/${previous.slug}` },
            })}
            routes={[]}
          />
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
    site {
      siteMetadata {
        author
      }
    }
  }
`;
export default ProjectDefaultTemplate;
