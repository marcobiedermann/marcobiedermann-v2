import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { PageProps } from 'gatsby';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Experiences from '../components/Experiences';
import Grid from '../components/Grid';
import Layout from '../components/Layout';
import Section from '../components/Section';
import Skills from '../components/Skills';
import { useAboutPage } from '../hooks/about';

const AboutPage: React.FC<PageProps> = () => {
  const { allContentfulExperience, contentfulSkills, contentfulPage } = useAboutPage();
  const { t } = useTranslation();

  const { edges: experiences } = allContentfulExperience;
  const { skills } = contentfulSkills;
  const { body, title } = contentfulPage;

  return (
    <Layout>
      <Section>
        <Grid>
          <h1>{title}</h1>
          {body && documentToReactComponents(body.json)}
        </Grid>
      </Section>
      <Section>
        <Grid>
          <h2>{t('about:experiences')}</h2>
          <Experiences experiences={experiences.map((experience) => experience.node)} />
        </Grid>
      </Section>
      <Section>
        <Grid>
          <h2>{t('about:skills')}</h2>
          <Skills skills={skills} />
        </Grid>
      </Section>
    </Layout>
  );
};

export default AboutPage;
