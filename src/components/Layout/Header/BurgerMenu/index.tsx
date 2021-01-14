import { Box } from '@material-ui/core';
import clsx from 'clsx';
import React, { useContext } from 'react';
import { AppContext } from '../../../../context/AppProvider';
import { Props } from './types';
import useStyles from './useStyles';

const BurgerMenu: React.FunctionComponent<Props> = (props) => {
	const { burgerMenuContainer, burgerMenuContainerOpen } = useStyles();
	const { isBurgerMenuOpen } = useContext(AppContext);
	const burgerMenuContainerClass = clsx({
		[burgerMenuContainer]: !isBurgerMenuOpen,
		[`${burgerMenuContainer} ${burgerMenuContainerOpen}`]: isBurgerMenuOpen,
	});

	return (
		<Box className={burgerMenuContainerClass}>
			<span />
			<input type={`checkbox`} onClick={props.onClick} />
		</Box>
	);
};

export default BurgerMenu;
