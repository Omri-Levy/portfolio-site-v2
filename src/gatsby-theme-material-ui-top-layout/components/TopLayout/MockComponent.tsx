import { Button } from '@material-ui/core';
import React from 'react';
import TopLayout from './TopLayout';

const MockComponent: React.FunctionComponent = () => (
	<TopLayout>
		<Button color={`primary`} variant={`contained`} />
	</TopLayout>
);

export default MockComponent;
