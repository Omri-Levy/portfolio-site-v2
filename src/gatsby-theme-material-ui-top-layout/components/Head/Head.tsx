import React from 'react';
import { Helmet } from 'react-helmet';

const Head: React.FunctionComponent = () => {
	const url = document.location.pathname;
	const pageTitlePrefix = `Omri Levy - Portfolio Site -`;
	const isLandingPage = url === `/`;

	let pageTitle;

	if (isLandingPage) {
		pageTitle = `${pageTitlePrefix} Landingpage`;
	} else {
		pageTitle = `${pageTitlePrefix} ${url}`;
	}

	return <Helmet title={pageTitle} />;
};

export default Head;
