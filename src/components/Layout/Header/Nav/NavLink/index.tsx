import { ListItem } from '@material-ui/core';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import React from 'react';
import TranslateText from '../../../Locales/TranslateText';
import { Props } from './types';


const NavLink: React.FunctionComponent<Props> = (props) => {
	const { to, Icon, text } = props;


	return (
		<ListItem style={{
			display: `grid`,
			placeContent: `center`,
		}}>
			<AnchorLink
				to={to}
				gatsbyLinkProps={{
					style: {
						textDecoration: `none`,
						display: `grid`,
						placeItems: `center`,
						color: `inherit`,
						'&:visited': {
							color: `inherit`,
						},
					},
				}}
			>
				{Icon && <Icon />}
				<TranslateText text={text} />
			</AnchorLink>
		</ListItem>
	);
};

export default NavLink;
