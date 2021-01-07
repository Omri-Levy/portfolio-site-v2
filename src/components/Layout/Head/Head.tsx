import React from 'react';
import { Helmet } from 'react-helmet';

const Head: React.FunctionComponent = () => {
	const url = document.location.pathname;
	const pageTitlePrefix = `Omri Levy - Portfolio Site -`;
	const isLandingPage = url === `/`;

	let pageTitle;

	if (isLandingPage) {
		pageTitle = `${pageTitlePrefix} Landing page`;
	} else {
		pageTitle = `${pageTitlePrefix} ${url}`;
	}

	return (
		<Helmet title={pageTitle}>
			<script
				src={`https://www.google.com/recaptcha/api.js?r=${Math.random()}`}
				async
				defer
			/>
		</Helmet>
	);
};

export default Head;
