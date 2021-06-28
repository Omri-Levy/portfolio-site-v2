import { AnchorLink } from 'gatsby-plugin-anchor-links';
import React from 'react';
import TranslateText from '../../Locales/TranslateText';
import { Typography } from '@material-ui/core';


const Logo: React.FunctionComponent = () => {


	return (
		<AnchorLink
			to={`/#hero`}
			gatsbyLinkProps={{
				style: {
					textDecoration: `none`,
					color: `inherit`,
					'&:visited': {
						color: `inherit`,
					},
				},
			}}>
			<Typography variant={`h2`} style={{
				fontSize: 17,
			}}>
				<TranslateText text={`Omri Levy`} />
			</Typography>
			<Typography variant={`h1`} style={{
				fontSize: 15,
			}}>
				<TranslateText text={`Portfolio Site`} />
			</Typography>
		</AnchorLink>
	);
};

export default Logo;
