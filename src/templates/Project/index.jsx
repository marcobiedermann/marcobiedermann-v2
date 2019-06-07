import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';
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
  } = props;

  return (
    <Layout>
      {desktop && (
        <Section>
          <Img fluid={desktop.fluid} />
        </Section>
      )}

      <Section>
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
      </Section>

      {colors && (
        <Section>
          <h2>Colors</h2>
          <Img fluid={colors.fluid} />
        </Section>
      )}

      {typography && (
        <Section>
          <h2>Typography</h2>
          {typography.map(font => (
            <Img fluid={font.fluid} key={font.title} />
          ))}
        </Section>
      )}

      {homepage && (
        <Section>
          <h2>Homepage</h2>
          <Img fluid={homepage.fluid} />
        </Section>
      )}

      <Section
        style={{
          backgroundColor: primaryColor,
        }}
      >
        Responsive Design
      </Section>

      {tablet && (
        <Section>
          <h2>Tablet view</h2>
          <Img fluid={tablet.fluid} />
        </Section>
      )}

      {mobile && (
        <Section>
          <h2>Mobile View</h2>
          <p>With a small display comes great responsibilities</p>
          <Img fluid={mobile.fluid} />
        </Section>
      )}
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
};

ProjectTemplate.defaultProps = {
  data: null,
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
