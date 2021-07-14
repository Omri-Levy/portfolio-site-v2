import { Button } from '@material-ui/core';
import React from 'react';
import useAppContext from './useAppContext';

const MockComponent: React.FunctionComponent = () => {
	const { isBurgerMenuOpen } = useAppContext();

	return (
		<div>
			<Button />
			{isBurgerMenuOpen}
		</div>
	);
};

export default MockComponent;
