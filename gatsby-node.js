const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const pageTemplate = path.resolve('./src/templates/Page/index.jsx');
  const projectTemplate = path.resolve('./src/templates/Project/index.jsx');
  const projectsTemplate = path.resolve('./src/templates/Projects/index.jsx');

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
        component: projectTemplate,
        context: {
          slug: project.node.slug,
          previous,
          next,
        },
      });
    });
  });

  return Promise.all([pagesQuery, projectsQuery]);
};
