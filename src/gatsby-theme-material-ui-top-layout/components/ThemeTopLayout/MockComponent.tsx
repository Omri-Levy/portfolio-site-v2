import { Button } from '@material-ui/core';
import React from 'react';
import ThemeTopLayout from './ThemeTopLayout';

const MockComponent: React.FunctionComponent = () => (
	<ThemeTopLayout>
		<Button color={`primary`} variant={`contained`} />
	</ThemeTopLayout>
);

export default MockComponent;
