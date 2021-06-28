import React from 'react';
import { Props } from './types';
import { IconButton } from '@material-ui/core';
import { Menu } from '@material-ui/icons';

const BurgerMenu: React.FunctionComponent<Props> = () => {


	return (
		<IconButton

			color={`primary`}
		>
			<Menu />
		</IconButton>
	);
};

export default BurgerMenu;
