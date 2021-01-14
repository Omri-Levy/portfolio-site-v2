import { AnchorLink } from 'gatsby-plugin-anchor-links';
import React from 'react';
import TranslateText from '../../Locales/TranslateText';
import useStyles from './useStyles';

const Logo: React.FunctionComponent = () => {
	const classes = useStyles();

	return (
		<AnchorLink to={`/home#portfolio`} className={classes.title}>
			<TranslateText text={`Omri Levy`} />
			<span className={classes.subtitle}>
				<TranslateText text={`Portfolio Site`} />
			</span>
		</AnchorLink>
	);
};

export default Logo;
