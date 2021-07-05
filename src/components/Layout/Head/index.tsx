import React from 'react';
import { Helmet } from 'react-helmet';
import { useIntl } from 'react-intl';

const Head: React.FunctionComponent = () => {
	const intl = useIntl();
	const omriLevy = intl.formatMessage({ id: `omriLevy` });
	const portfolioSite = intl.formatMessage({ id: `portfolioSite` });
	const pageTitle = `${omriLevy} - ${portfolioSite}`;

	return (
		<Helmet title={pageTitle} />
	);
};

export default Head;

