import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { useSEO } from '../../hooks/seo';

export type Lang = 'en';
export type Meta = {
  name: string;
  content: string;
};

export interface SEOProps {
  description?: string;
  lang?: Lang;
  meta?: Meta[];
  title?: string;
}

export const SEO: FC<SEOProps> = (props) => {
  const { description, lang = 'en', meta = [], title, ...otherProps } = props;
  const { site } = useSEO();

  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:creator',
          content: site.siteMetadata.author,
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
      ].concat(meta)}
      {...otherProps}
    />
  );
};

export default SEO;
