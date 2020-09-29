import { format } from 'date-fns';
import { graphql, Link, PageProps } from 'gatsby';
import React from 'react';
import Grid from '../../components/Grid';
import Layout from '../../components/Layout';
import Pagination from '../../components/Pagination';
import Section from '../../components/Section';
import { DATE_FORMAT } from '../../constants/date';

export interface PostTemplateProps extends PageProps {
  data: {
    contentfulPost: {
      body: {
        childMarkdownRemark: {
          html: string;
          timeToRead: number;
        };
      };
      date: string;
      tags: string[];
      title: string;
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

const PostTemplate: React.FC<PostTemplateProps> = (props) => {
  const {
    data: {
      contentfulPost: { body, date, tags, title },
    },
    pageContext: { previous, next },
  } = props;

  return (
    <Layout>
      <Section>
        <Grid justify="center">
          <h1>{title}</h1>
          <div>
            {format(new Date(date), DATE_FORMAT)} · {body.childMarkdownRemark.timeToRead} min read
          </div>
          <div dangerouslySetInnerHTML={{ __html: body.childMarkdownRemark.html }} />
          {tags && (
            <ul>
              {tags.map((tag) => (
                <li key={tag}>
                  <Link to={`/tags/${tag}`}>{tag}</Link>
                </li>
              ))}
            </ul>
          )}
        </Grid>
      </Section>

      <Section>
        <Grid justify="center">
          <Pagination
            {...(next && {
              next: { id: 'next', name: 'Next', path: `/blog/${next.slug}` },
            })}
            {...(previous && {
              previous: { id: 'previous', name: 'Previous', path: `/blog/${previous.slug}` },
            })}
            routes={[]}
          />
        </Grid>
      </Section>
    </Layout>
  );
};

export const pageQuery = graphql`
  query PostBySlug($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      body {
        childMarkdownRemark {
          html
          timeToRead
        }
      }
      date
      id
      slug
      tags
      title
    }
    site {
      siteMetadata {
        author
      }
    }
  }
`;
export default PostTemplate;
