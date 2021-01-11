import React, { useContext } from 'react';
import { ThemeContext } from '~/context/ThemeProvider';
import { Button } from '@material-ui/core';

const MockComponent: React.FunctionComponent = () => {
	const { primaryColor } = useContext(ThemeContext);

	return (
		<div>
			<Button />
			{primaryColor}
		</div>
	);
};

export default MockComponent;