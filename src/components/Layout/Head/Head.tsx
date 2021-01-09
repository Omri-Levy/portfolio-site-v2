import camelCase from 'lodash/camelCase';
import React from 'react';
import { Helmet } from 'react-helmet';
import { useIntl } from 'react-intl';

const Head: React.FunctionComponent = () => {
	let url = document.location.pathname;
	const isLandingPage = url === `/`;
	const intl = useIntl();
	const omriLevy = intl.formatMessage({ id: `omriLevy` });
	const portfolioSite = intl.formatMessage({ id: `portfolioSite` });
	const landingPage = intl.formatMessage({ id: `landingPage` });
	const pageTitlePrefix = `${omriLevy} - ${portfolioSite} -`;

	let pageTitle;

	if (isLandingPage) {
		pageTitle = `${pageTitlePrefix} ${landingPage}`;
	} else {
		url = url.replace(`/`, ``);
		url = intl.formatMessage({ id: camelCase(url) });
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
