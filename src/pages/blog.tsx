import { PageProps } from 'gatsby';
import React from 'react';
import Grid from '../components/Grid';
import Layout from '../components/Layout';
import Posts from '../components/Posts';
import Section from '../components/Section';
import { usePostsPage } from '../hooks/posts';

const BlogPage: React.FC<PageProps> = () => {
  const {
    allContentfulPost: { posts },
  } = usePostsPage();

  return (
    <Layout>
      <Section>
        <Grid>
          <Posts posts={posts.map((post) => post.node)} />
        </Grid>
      </Section>
    </Layout>
  );
};

export default BlogPage;
