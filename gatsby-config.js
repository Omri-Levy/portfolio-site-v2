// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require(`path`);

module.exports = {
	siteMetadata: {
		title: `Omri Levy - Portfolio site`,
		author: `Omri Levy`,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-typescript`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		`gatsby-plugin-anchor-links`,
		{
			resolve: `gatsby-plugin-root-import`,
			options: {
				'~': path.join(__dirname, `src`),
			},
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Omri Levy - Portfolio site`,
				short_name: `Omri Levy - Portfolio site`,
				start_url: `/`,
				background_color: `#222831`,
				theme_color: `#3e96ff`,
				display: `standalone`,
				icon: `static/favicon.png`,
			},
		},
		{
			resolve: `gatsby-source-contentful`,
			options: {
				spaceId: process.env.CONTENTFUL_SPACE_ID,
				accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `assets`,
				path: path.join(__dirname, `static`, `images`),
			},
		},
		{
			resolve: `gatsby-theme-material-ui`,
			options: {
				webFontsConfig: {
					fonts: {
						google: [
							{
								family: `Montserrat`,
								variants: [`300`, `400`, `500`, `600`, `700`],
							},
							{
								family: `Open Sans`,
								variants: [`300`, `400`, `500`, `600`, `700`],
							},
						],
					},
				},
			},
		},
	],
};
