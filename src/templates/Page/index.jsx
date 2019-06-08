import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Layout from '../../components/Layout';

const PageTemplate = props => {
  const {
    data: {
      contentfulPage: { body, title },
    },
  } = props;
  return (
    <Layout>
      <h1>{title}</h1>
      {documentToReactComponents(body.json)}
    </Layout>
  );
};

PageTemplate.propTypes = {
  data: PropTypes.shape({
    contentfulPage: PropTypes.shape({
      body: PropTypes.shape({
        json: PropTypes.object,
      }),
      title: PropTypes.string,
    }),
  }),
};

PageTemplate.defaultProps = {
  data: null,
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
