import { graphql, PageProps } from 'gatsby';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import React from 'react';
import Button from '../../components/Button';
import Column from '../../components/Column';
import Grid from '../../components/Grid';
import Layout from '../../components/Layout';
import { LogoProps } from '../../components/Logo';
import Logos from '../../components/Logos';
import Pagination from '../../components/Pagination';
import Row from '../../components/Row';
import Section from '../../components/Section';
import Typography from '../../components/Typography';

export interface ProjectWebsiteTemplateProps extends PageProps {
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
        gatsbyImageData: IGatsbyImageData;
      };
      desktop: {
        gatsbyImageData: IGatsbyImageData;
      };
      homepage: {
        gatsbyImageData: IGatsbyImageData;
      };
      mobile: {
        gatsbyImageData: IGatsbyImageData;
      };
      primaryColor: string;
      tablet: {
        gatsbyImageData: IGatsbyImageData;
      };
      role: string;
      title: string;
      typography: [
        {
          gatsbyImageData: IGatsbyImageData;
          title: string;
        },
      ];
      url: string;
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

const ProjectWebsiteTemplate: React.FC<ProjectWebsiteTemplateProps> = (props) => {
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
        url,
      },
    },
    pageContext: { previous, next },
  } = props;

  return (
    <Layout>
      {desktop && (
        <Section appearance="light" isFull>
          <Grid justify="center">
            <GatsbyImage image={desktop.gatsbyImageData} alt="Desktop" />
          </Grid>
        </Section>
      )}

      <Section>
        <Grid justify="center">
          <Typography textAlign="center">
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
          </Typography>
        </Grid>
      </Section>

      {colors && (
        <Section appearance="light">
          <Grid justify="center">
            <div>
              <Typography textAlign="center">
                <h2>Colors</h2>
              </Typography>
              <GatsbyImage image={colors.gatsbyImageData} alt="Color" />
            </div>
          </Grid>
        </Section>
      )}

      {typography && (
        <Section>
          <Grid justify="center">
            <div>
              <Typography textAlign="center">
                <h2>Typography</h2>
              </Typography>
              <Row>
                {typography.map((font) => (
                  <Column key={font.title}>
                    <GatsbyImage image={font.gatsbyImageData} alt={font.title} />
                  </Column>
                ))}
              </Row>
            </div>
          </Grid>
        </Section>
      )}

      {homepage && (
        <Section appearance="light">
          <Grid justify="center">
            <div>
              <Typography textAlign="center">
                <h2>Homepage</h2>
              </Typography>
              <GatsbyImage image={homepage.gatsbyImageData} alt="Homepage" />
            </div>
          </Grid>
        </Section>
      )}

      <Section
        appearance="dark"
        style={{
          backgroundColor: primaryColor,
        }}
      >
        <Grid justify="center">
          <div>
            <h2>Responsive Design</h2>
            <p>A website that displays nicely on desktop and on your phone and tablet</p>
            <img src="/images/apple-devices.svg" alt="" />
          </div>
        </Grid>
      </Section>

      {tablet && (
        <Section appearance="light">
          <Grid justify="center">
            <div>
              <Typography textAlign="center">
                <h2>Tablet View</h2>
              </Typography>
              <GatsbyImage image={tablet.gatsbyImageData} alt="Tablet" />
            </div>
          </Grid>
        </Section>
      )}

      {mobile && (
        <Section>
          <Grid justify="center">
            <div>
              <Typography textAlign="center">
                <h2>Mobile View</h2>
                <p>With a small display comes great responsibilities</p>
              </Typography>
              <GatsbyImage image={mobile.gatsbyImageData} alt="Mobile" />
            </div>
          </Grid>
        </Section>
      )}

      <Section appearance="light">
        <Grid justify="center">
          <div>
            <Button href={url}>Visit Website</Button>
            <Pagination
              {...(next && {
                next: { id: 'next', name: 'Next', path: `/projects/${next.slug}` },
              })}
              {...(previous && {
                previous: { id: 'previous', name: 'Previous', path: `/projects/${previous.slug}` },
              })}
              routes={[]}
            />
          </div>
        </Grid>
      </Section>

      <Section>
        <Grid>
          <Logos logos={edges.map((edge) => edge.node)} />
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
        gatsbyImageData(layout: FULL_WIDTH)
      }
      desktop {
        gatsbyImageData(layout: FULL_WIDTH)
      }
      homepage {
        gatsbyImageData(layout: FULL_WIDTH)
      }
      id
      mobile {
        gatsbyImageData(layout: FULL_WIDTH)
      }
      primaryColor
      role
      slug
      tablet {
        gatsbyImageData(layout: FULL_WIDTH)
      }
      tags
      title
      typography {
        gatsbyImageData(layout: FULL_WIDTH)
        title
      }
      url
    }
    site {
      siteMetadata {
        author
      }
    }
  }
`;

export default ProjectWebsiteTemplate;
