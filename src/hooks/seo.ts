import { graphql, useStaticQuery } from 'gatsby';

export interface SEOQuery {
  site: {
    siteMetadata: {
      title: string;
      description: string;
      author: string;
    };
  };
}

export const useSEO = (): SEOQuery =>
  useStaticQuery<SEOQuery>(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `,
  );
