import { ListItem } from '@material-ui/core';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import React from 'react';
import TranslateText from '../../../Locales/TranslateText';
import { Props } from './types';
import styled, { css } from 'styled-components';


const StyledListItem = styled(ListItem)(({ theme }) => {
	return css`
    display: grid;
    place-content: center;
    width: unset;
	`;
});
const StyledAnchorLink = styled(AnchorLink)(({ theme }) => {
	return css`
    text-decoration: none;
    display: grid;
    place-items: center;
    color: inherit;

    &:visited {
      color: inherit;
    }
	`;
});
const NavLink: React.FunctionComponent<Props> = (props) => {
	const { to, Icon, text } = props;


	return (
		// cast false to any due to the button prop expecting boolean and receiving
		// false
		<StyledListItem disableGutters button={false as any}>
			<StyledAnchorLink to={to}>
				{Icon && <Icon />}
				<TranslateText text={text} />
			</StyledAnchorLink>
		</StyledListItem>
	);
};

export default NavLink;
