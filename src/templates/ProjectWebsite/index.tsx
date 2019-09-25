import { graphql } from 'gatsby';
import Img, { FixedObject } from 'gatsby-image';
import React from 'react';
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
      {desktop && (
        <Section appearance="light" isFull>
          <Grid>
            <Img fixed={desktop.fixed} />
          </Grid>
        </Section>
      )}

      <Section>
        <Grid>
          <h1>{title}</h1>
          <ul>
            {client && (
              <li>
                <strong>Client:</strong> {client}
              </li>
            )}

            {agency && (
              <li>
                <strong>Agency:</strong> {agency}
              </li>
            )}

            {role && (
              <li>
                <strong>Role:</strong> {role}
              </li>
            )}
          </ul>
        </Grid>
      </Section>

      {colors && (
        <Section appearance="light">
          <Grid>
            <h2>Colors</h2>
            <Img fixed={colors.fixed} />
          </Grid>
        </Section>
      )}

      {typography && (
        <Section>
          <Grid>
            <h2>Typography</h2>
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
          <Grid>
            <h2>Homepage</h2>
            <Img fixed={homepage.fixed} />
          </Grid>
        </Section>
      )}

      <Section
        style={{
          backgroundColor: primaryColor,
        }}
      >
        <Grid>Responsive Design</Grid>
      </Section>

      {tablet && (
        <Section appearance="light">
          <Grid>
            <h2>Tablet view</h2>
            <Img fixed={tablet.fixed} />
          </Grid>
        </Section>
      )}

      {mobile && (
        <Section>
          <Grid>
            <h2>Mobile View</h2>
            <p>With a small display comes great responsibilities</p>
            <Img fixed={mobile.fixed} />
          </Grid>
        </Section>
      )}

      <Section>
        <Grid>
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
