import { graphql, useStaticQuery } from 'gatsby';
import { ContentfulRichTextGatsbyReference, RenderRichTextData } from 'gatsby-source-contentful/rich-text';

export interface AboutPageQuery {
  allContentfulExperience: {
    edges: [
      {
        node: {
          description: RenderRichTextData<ContentfulRichTextGatsbyReference>;
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
        description: RenderRichTextData<ContentfulRichTextGatsbyReference>;
        id: string;
        slug: string;
        title: string;
      },
    ];
  };
  contentfulPage: {
    body: RenderRichTextData<ContentfulRichTextGatsbyReference>;
    id: string;
    slug: string;
    title: string;
  };
}

export const useAboutPage = (): AboutPageQuery =>
  useStaticQuery<AboutPageQuery>(
    graphql`
      query {
        allContentfulExperience(sort: { fields: endDate, order: DESC }) {
          edges {
            node {
              company
              description {
                raw
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
              raw
            }
            id
            title
          }
        }
        contentfulPage(slug: { eq: "about" }) {
          body {
            raw
          }
          id
          slug
          title
        }
      }
    `,
  );
