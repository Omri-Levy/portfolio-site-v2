import React from 'react';
import { useIntl } from 'react-intl';
import { SEO } from '../../SEO';

const Head: React.FunctionComponent = () => {
	const intl = useIntl();
	const omriLevy = intl.formatMessage({ id: `omriLevy` });
	const portfolioSite = intl.formatMessage({ id: `portfolioSite` });
	const pageTitle = `${omriLevy} - ${portfolioSite}`;

	return (
		<SEO title={pageTitle} />
	);
};

export default Head;

