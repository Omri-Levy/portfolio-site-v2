import { Alert } from '@material-ui/lab';
import React, { useState } from 'react';
import resetFetchState from './resetFetchState';

const MockComponent: React.FunctionComponent = () => {
	const [fetchState, setFetchState] = useState<string | undefined>(`success`);

	if (fetchState === undefined) {
		return null;
	}

	return (
		<Alert onClose={resetFetchState(setFetchState, fetchState)}>
			test alert
		</Alert>
	);
};

export default MockComponent;
