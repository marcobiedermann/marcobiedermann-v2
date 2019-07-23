import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';
import Column from '../../components/Column';
import Grid from '../../components/Grid';
import Layout from '../../components/Layout';
import Logos from '../../components/Logos';
import Pagination from '../../components/Pagination';
import Row from '../../components/Row';
import Section from '../../components/Section';

const ProjectWebsiteTemplate = props => {
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

ProjectWebsiteTemplate.propTypes = {
  data: PropTypes.shape({
    allContentfulProject: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape(),
        }),
      ),
    }),
    contentfulProject: PropTypes.shape({
      agency: PropTypes.string,
      client: PropTypes.string,
      colors: PropTypes.shape({
        fixed: PropTypes.shape(),
      }),
      desktop: PropTypes.shape({
        fixed: PropTypes.shape(),
      }),
      homepage: PropTypes.shape({
        fixed: PropTypes.shape(),
      }),
      mobile: PropTypes.shape({
        fixed: PropTypes.shape(),
      }),
      primaryColor: PropTypes.string,
      role: PropTypes.string,
      tablet: PropTypes.shape({
        fixed: PropTypes.shape(),
      }),
      title: PropTypes.string,
      typography: PropTypes.arrayOf(
        PropTypes.shape({
          fixed: PropTypes.shape(),
          title: PropTypes.string,
        }),
      ),
    }),
  }),
  pageContext: PropTypes.shape({
    previous: PropTypes.shape({
      slug: PropTypes.string,
    }),
    next: PropTypes.shape({
      slug: PropTypes.string,
    }),
  }),
};

ProjectWebsiteTemplate.defaultProps = {
  data: null,
  pageContext: null,
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
