/* eslint-disable @typescript-eslint/explicit-function-return-type, @typescript-eslint/no-var-requires */

const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const pageTemplate = path.resolve('./src/templates/Page/index.tsx');
  const projectDefaultTemplate = path.resolve('./src/templates/ProjectDefault/index.tsx');
  const projectWebsiteTemplate = path.resolve('./src/templates/ProjectWebsite/index.tsx');
  const projectsTemplate = path.resolve('./src/templates/Projects/index.tsx');
  const tagTemplate = path.resolve('./src/templates/Tag/index.tsx');

  const pagesQuery = graphql(
    `
      {
        allContentfulPage {
          edges {
            node {
              slug
            }
          }
        }
      }
    `,
  ).then(result => {
    if (result.errors) {
      throw result.errors;
    }

    result.data.allContentfulPage.edges.forEach(page => {
      createPage({
        path: page.node.slug,
        component: pageTemplate,
        context: {
          slug: page.node.slug,
        },
      });
    });
  });

  const projectsQuery = graphql(
    `
      {
        allContentfulProject {
          edges {
            node {
              slug
              tags
            }
          }
        }
      }
    `,
  ).then(result => {
    if (result.errors) {
      throw result.errors;
    }

    const projects = result.data.allContentfulProject.edges;
    const limit = 12;
    const total = projects.length;
    const pages = Math.ceil(total / limit);
    const tags = [...new Set(projects.flatMap(project => project.node.tags))];

    Array.from({ length: pages }).forEach((_page, index) => {
      const page = index + 1;
      const skip = index * limit;

      createPage({
        path: index === 0 ? '/projects' : `/projects/${index + 1}`,
        component: projectsTemplate,
        context: {
          limit,
          page,
          pages,
          skip,
        },
      });
    });

    projects.forEach((project, index) => {
      const previous = index === projects.length - 1 ? null : projects[index + 1].node;
      const next = index === 0 ? null : projects[index - 1].node;

      createPage({
        path: `/projects/${project.node.slug}`,
        component: project.node.tags.includes('website') ? projectWebsiteTemplate : projectDefaultTemplate,
        context: {
          slug: project.node.slug,
          previous,
          next,
        },
      });
    });

    tags.forEach(tag => {
      createPage({
        component: tagTemplate,
        path: `/tags/${tag}`,
        context: {
          tag,
        },
      });
    });
  });

  return Promise.all([pagesQuery, projectsQuery]);
};
