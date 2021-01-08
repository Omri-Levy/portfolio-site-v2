import React from 'react';
import { Helmet } from 'react-helmet';

const Head: React.FunctionComponent = () => {
	let url = document.location.pathname;
	const isLandingPage = url === `/`;
	const pageTitlePrefix = `Omri Levy - Portfolio Site -`;

	let pageTitle;

	if (isLandingPage) {
		pageTitle = `${pageTitlePrefix} Landing page`;
	} else {
		url = url.charAt(1).toUpperCase() + url.slice(2);
		url = url.replace(`/`, ``);
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
