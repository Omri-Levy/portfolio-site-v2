import React from 'react';
import TranslateText from '../../../Locales/TranslateText';
import { Props } from './types';
import useAppContext from '../../../../../context/AppProvider/useAppContext';
import { StyledAnchorLink, StyledListItem } from './styled';

const NavLink: React.FunctionComponent<Props> = (props) => {
	const { to, Icon, text } = props;
	const { closeBurgerMenu } = useAppContext();


	return (
		// cast false to any due to the button prop expecting boolean and receiving
		// false
		<StyledListItem disableGutters button={false as any}>
			<StyledAnchorLink to={to} onAnchorLinkClick={closeBurgerMenu}>
				{Icon && <Icon />}
				<TranslateText text={text} />
			</StyledAnchorLink>
		</StyledListItem>
	);
};

export default NavLink;
