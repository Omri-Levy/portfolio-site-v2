import { Box, Typography } from '@material-ui/core';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import React from 'react';
import { TranslateText } from '~/components/Layout/Locales/TranslateText';
import useStyles from './useStyles';

const Logo: React.FunctionComponent = () => {
	const classes = useStyles();

	return (
		<Box className={classes.logoContainer}>
			<AnchorLink
				to={`/home#portfolio`}
				className={classes.link}
				gatsbyLinkProps={{ role: `link` }}
			>
				<Typography className={classes.title}>
					<TranslateText text={`Omri Levy`} />
					<span className={classes.subtitle}>
						<TranslateText text={`Fullstack Dev`} />
					</span>
				</Typography>
			</AnchorLink>
		</Box>
	);
};

export default Logo;
