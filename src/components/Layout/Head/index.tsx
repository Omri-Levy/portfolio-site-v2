import { camelCase } from 'lodash';
import React from 'react';
import { Helmet } from 'react-helmet';
import { useIntl } from 'react-intl';

const Head: React.FunctionComponent = () => {
	let url = `home`;

	if (typeof document !== `undefined` && document.location.pathname !== `/`) {
		url = document.location.pathname;
	}

	const intl = useIntl();
	const omriLevy = intl.formatMessage({ id: `omriLevy` });
	const portfolioSite = intl.formatMessage({ id: `portfolioSite` });
	const pageTitlePrefix = `${omriLevy} - ${portfolioSite} -`;

	url = url?.replace(`/`, ``);
	url = intl.formatMessage({ id: camelCase(url) });

	const pageTitle = `${pageTitlePrefix} ${url}`;

	return (
		<Helmet title={pageTitle} />
	);
};

export default Head;

