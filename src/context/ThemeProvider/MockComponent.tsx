import { Button } from '@material-ui/core';
import React from 'react';
import useThemeContext from './useThemeContext';

const MockComponent: React.FunctionComponent = () => {
	const { primaryColor } = useThemeContext();

	return (
		<div>
			<Button />
			{primaryColor}
		</div>
	);
};

export default MockComponent;
