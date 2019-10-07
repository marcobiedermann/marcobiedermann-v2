import { graphql } from 'gatsby';
import Img, { FixedObject } from 'gatsby-image';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Column from '../../components/Column';
import Grid from '../../components/Grid';
import Layout from '../../components/Layout';
import { LogoProps } from '../../components/Logo';
import Logos from '../../components/Logos';
import Pagination from '../../components/Pagination';
import Row from '../../components/Row';
import Section from '../../components/Section';

export interface ProjectWebsiteTemplate {
  data: {
    allContentfulProject: {
      edges: [
        {
          node: LogoProps;
        },
      ];
    };
    contentfulProject: {
      agency: string;
      client: string;
      colors: {
        fixed: FixedObject;
      };
      desktop: {
        fixed: FixedObject;
      };
      homepage: {
        fixed: FixedObject;
      };
      mobile: {
        fixed: FixedObject;
      };
      primaryColor: {
        fixed: FixedObject;
      };
      tablet: {
        fixed: FixedObject;
      };
      role: string;
      title: string;
      typography: [
        {
          title: string;
          fixed: FixedObject;
        },
      ];
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

const ProjectWebsiteTemplate: React.FC<ProjectWebsiteTemplate> = props => {
  const {
    data: {
      allContentfulProject: { edges },
      contentfulProject: {
        agency,
        client,
        colors,
        desktop,
        homepage,
        mobile,
        primaryColor,
        tablet,
        role,
        title,
        typography,
      },
    },
    pageContext: { previous, next },
  } = props;
  const { t } = useTranslation();

  const paginationRoutes = [];

  if (previous) {
    paginationRoutes.push({
      name: t('pagination.previous'),
      path: `/projects/${previous.slug}`,
    });
  }

  if (next) {
    paginationRoutes.push({
      name: t('pagination.next'),
      path: `/projects/${next.slug}`,
    });
  }

  return (
    <Layout>
      {desktop && (
        <Section appearance="light" isFull>
          <Grid justify="center">
            <Img fixed={desktop.fixed} />
          </Grid>
        </Section>
      )}

      <Section>
        <Grid justify="center">
          <h1>{title}</h1>
          <ul>
            {client && (
              <li>
                <strong>{t('project:client')}:</strong> {client}
              </li>
            )}

            {agency && (
              <li>
                <strong>{t('project:agency')}:</strong> {agency}
              </li>
            )}

            {role && (
              <li>
                <strong>{t('project:role')}:</strong> {role}
              </li>
            )}
          </ul>
        </Grid>
      </Section>

      {colors && (
        <Section appearance="light">
          <Grid justify="center">
            <h2>{t('project:colors.title')}</h2>
            <Img fixed={colors.fixed} />
          </Grid>
        </Section>
      )}

      {typography && (
        <Section>
          <Grid justify="center">
            <h2>{t('project:typography.title')}</h2>
            <Row>
              {typography.map(font => (
                <Column key={font.title}>
                  <Img fixed={font.fixed} />
                </Column>
              ))}
            </Row>
          </Grid>
        </Section>
      )}

      {homepage && (
        <Section appearance="light">
          <Grid justify="center">
            <h2>{t('project:homepage.title')}</h2>
            <Img fixed={homepage.fixed} />
          </Grid>
        </Section>
      )}

      <Section
        style={{
          backgroundColor: primaryColor,
        }}
      >
        <Grid justify="center">{t('project:responsive')}</Grid>
      </Section>

      {tablet && (
        <Section appearance="light">
          <Grid justify="center">
            <h2>{t('project:tablet.title')}</h2>
            <Img fixed={tablet.fixed} />
          </Grid>
        </Section>
      )}

      {mobile && (
        <Section>
          <Grid justify="center">
            <h2>{t('project:mobile.title')}</h2>
            <p>{t('project:mobile.description')}</p>
            <Img fixed={mobile.fixed} />
          </Grid>
        </Section>
      )}

      <Section>
        <Grid justify="center">
          <Pagination routes={paginationRoutes} />
        </Grid>
      </Section>

      <Section appearance="light">
        <Grid>
          <Logos logos={edges.map(edge => edge.node)} />
        </Grid>
      </Section>
    </Layout>
  );
};

export const pageQuery = graphql`
  query ProjectBySlug($slug: String!) {
    allContentfulProject(filter: { logo: { id: { ne: null } } }) {
      edges {
        node {
          id
          logo {
            file {
              url
            }
            title
          }
          slug
        }
      }
    }
    contentfulProject(slug: { eq: $slug }) {
      agency
      client
      colors {
        fixed(height: 212) {
          ...GatsbyContentfulFixed_withWebp_noBase64
        }
      }
      desktop {
        fixed(width: 832) {
          ...GatsbyContentfulFixed_withWebp_noBase64
        }
      }
      homepage {
        fixed(width: 1120) {
          ...GatsbyContentfulFixed_withWebp_noBase64
        }
      }
      id
      mobile {
        fixed(width: 500) {
          ...GatsbyContentfulFixed_withWebp_noBase64
        }
      }
      primaryColor
      role
      slug
      tablet {
        fixed(width: 800) {
          ...GatsbyContentfulFixed_withWebp_noBase64
        }
      }
      tags
      title
      typography {
        fixed(width: 730) {
          ...GatsbyContentfulFixed_withWebp_noBase64
        }
        title
      }
      url
    }
  }
`;

export default ProjectWebsiteTemplate;
