import { PageProps } from 'gatsby';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import React from 'react';
import Experiences from '../components/Experiences';
import Grid from '../components/Grid';
import Layout from '../components/Layout';
import Section from '../components/Section';
import Skills from '../components/Skills';
import { useAboutPage } from '../hooks/about';

const AboutPage: React.FC<PageProps> = () => {
  const { allContentfulExperience, contentfulSkills, contentfulPage } = useAboutPage();

  const { edges: experiences } = allContentfulExperience;
  const { skills } = contentfulSkills;
  const { body, title } = contentfulPage;

  return (
    <Layout>
      <Section appearance="dark">
        <Grid>
          <h1>{title}</h1>
          {body && renderRichText(body)}
        </Grid>
      </Section>
      <Section>
        <Grid>
          <h2>Experiences</h2>
          <Experiences experiences={experiences.map((experience) => experience.node)} />
        </Grid>
      </Section>
      <Section>
        <Grid>
          <h2>Skills</h2>
          <Skills skills={skills} />
        </Grid>
      </Section>
    </Layout>
  );
};

export default AboutPage;
