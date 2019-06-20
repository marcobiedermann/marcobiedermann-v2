import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';
import Grid from '../../components/Grid';
import Layout from '../../components/Layout';
import Section from '../../components/Section';

const ProjectTemplate = props => {
  const {
    data: {
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

  return (
    <Layout>
      {desktop && (
        <Section isFull>
          <Grid>
            <Img fluid={desktop.fluid} />
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
        <Section>
          <Grid>
            <h2>Colors</h2>
            <Img fluid={colors.fluid} />
          </Grid>
        </Section>
      )}

      {typography && (
        <Section>
          <Grid>
            <h2>Typography</h2>
            {typography.map(font => (
              <Img fluid={font.fluid} key={font.title} />
            ))}
          </Grid>
        </Section>
      )}

      {homepage && (
        <Section>
          <Grid>
            <h2>Homepage</h2>
            <Img fluid={homepage.fluid} />
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
        <Section>
          <Grid>
            <h2>Tablet view</h2>
            <Img fluid={tablet.fluid} />
          </Grid>
        </Section>
      )}

      {mobile && (
        <Section>
          <Grid>
            <h2>Mobile View</h2>
            <p>With a small display comes great responsibilities</p>
            <Img fluid={mobile.fluid} />
          </Grid>
        </Section>
      )}

      <Section>
        <Grid>
          {previous && <Link to={`/projects/${previous.slug}`}>Previous</Link>}

          {next && <Link to={`/projects/${next.slug}`}>Next</Link>}
        </Grid>
      </Section>
    </Layout>
  );
};

ProjectTemplate.propTypes = {
  data: PropTypes.shape({
    contentfulProject: PropTypes.shape({
      agency: PropTypes.string,
      client: PropTypes.string,
      role: PropTypes.string,
      title: PropTypes.string,
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

ProjectTemplate.defaultProps = {
  data: null,
  pageContext: null,
};

export const pageQuery = graphql`
  query ProjectBySlug($slug: String!) {
    contentfulProject(slug: { eq: $slug }) {
      agency
      client
      colors {
        fluid {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
      }
      desktop {
        fluid {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
      }
      homepage {
        fluid {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
      }
      id
      mobile {
        fluid {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
      }
      primaryColor
      role
      slug
      tablet {
        fluid {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
      }
      tags
      title
      typography {
        fluid {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
        title
      }
      url
    }
  }
`;

export default ProjectTemplate;
