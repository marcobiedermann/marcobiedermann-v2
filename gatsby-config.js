/* eslint-disable camelcase, @typescript-eslint/explicit-function-return-type, @typescript-eslint/no-var-requires */

const dotenv = require('dotenv');

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: 'Marco Biedermann',
    description:
      'Full-Stack JavaScript Engineer with focus on React, Redux & Node.js and passioned about Open Source working @moovel based in Berlin, Germany',
    author: 'm412c0b',
    siteUrl: `https://marcobiedermann.com`,
  },
  plugins: [
    {
      resolve: '@sentry/gatsby',
      options: {
        dsn: 'https://eb79f5612afa4007a4bfc4d84fe421c9@o81678.ingest.sentry.io/5505951',
        sampleRate: 0.7,
      },
    },
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        anonymize: true,
        head: false,
        respectDNT: true,
        trackingId: 'UA-46884111-4',
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png',
      },
    },
    {
      resolve: 'gatsby-plugin-netlify',
      options: {
        headers: {
          '/*': ['X-Frame-Options: sameorigin'],
        },
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-twitter',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        localeFilter: (locale) => locale.code === 'en-US',
        spaceId: 'xcrbc5t6zr5p',
      },
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'GitHub',
        fieldName: 'github',
        url: 'https://api.github.com/graphql',
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        },
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-autolink-headers',
          'gatsby-remark-embedder',
          'gatsby-remark-external-links',
          'gatsby-remark-prismjs',
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
