import { Document } from '@contentful/rich-text-types';
import { graphql, useStaticQuery } from 'gatsby';

export interface AboutPageQuery {
  allContentfulExperience: {
    edges: [
      {
        node: {
          description: {
            json: Document;
          };
          company: string;
          endDate: Date;
          location: string;
          id: string;
          startDate: Date;
          title: string;
          url: string;
        };
      },
    ];
  };
  contentfulSkills: {
    skills: [
      {
        description: {
          json: Document;
        };
        id: string;
        slug: string;
        title: string;
      },
    ];
  };
  contentfulPage: {
    body: {
      json: Document;
    };
    id: string;
    slug: string;
    title: string;
  };
}

export const useAboutPage = (): AboutPageQuery => {
  return useStaticQuery<AboutPageQuery>(
    graphql`
      query {
        allContentfulExperience(sort: { fields: endDate, order: DESC }) {
          edges {
            node {
              company
              description {
                json
              }
              endDate
              location
              id
              startDate
              title
              url
            }
          }
        }
        contentfulSkills(slug: { eq: "skills" }) {
          id
          skills {
            description {
              json
            }
            id
            title
          }
        }
        contentfulPage(slug: { eq: "about" }) {
          body {
            json
          }
          id
          slug
          title
        }
      }
    `,
  );
};
