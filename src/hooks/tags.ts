import { graphql, useStaticQuery } from 'gatsby';

export interface TagsPageQuery {
  allContentfulProject: {
    tags: [
      {
        fieldValue: string;
        totalCount: number;
      },
    ];
  };
}

export const useTagsPage = (): TagsPageQuery => {
  return useStaticQuery<TagsPageQuery>(
    graphql`
      query {
        allContentfulProject {
          tags: group(field: tags) {
            fieldValue
            totalCount
          }
        }
      }
    `,
  );
};
