import { graphql, useStaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';
import { DefaultProps } from './types';
import React from 'react';

const SEO = ({ title, description, image, article }: DefaultProps) => {
	const { site } = useStaticQuery(query);

	const {
		defaultTitle,
		defaultDescription,
		siteUrl,
		defaultImage,
	} = site.siteMetadata;

	const seo = {
		title: title || defaultTitle,
		description: description || defaultDescription,
		image: `${siteUrl}${image || defaultImage}`,
		url: siteUrl,
	};

	return (
		<Helmet title={seo.title}>
			<meta name='description' content={seo.description} />
			<meta name='image' content={seo.image} />
			{seo.url && <meta property='og:url' content={seo.url} />}
			{(article ? true : null) && <meta property='og:type' content='article' />}
			{seo.title && <meta property='og:title' content={seo.title} />}
			{seo.description && (
				<meta property='og:description' content={seo.description} />
			)}
			{seo.image && <meta property='og:image' content={seo.image} />}
		</Helmet>
	);
};

export default SEO;

SEO.defaultProps = {
	title: null,
	description: null,
	image: null,
	article: false,
};

const query = graphql`
    query SEO {
        site {
            siteMetadata {
                defaultTitle: title
                defaultDescription: description
                siteUrl: url
                defaultImage: image
            }
        }
    }
`;
