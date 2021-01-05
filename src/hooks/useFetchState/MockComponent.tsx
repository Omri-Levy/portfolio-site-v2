import React from 'react';
import useFetchState from './useFetchState';

const MockComponent: React.FunctionComponent = () => {
	const {
		fetchState,
		setFetchState,
		isLoading,
		shouldDisplayAlert,
		severity,
		alertMessage,
	} = useFetchState({});

	return (
		<>
			{JSON.stringify(fetchState)}
			{JSON.stringify(setFetchState)}
			{JSON.stringify(isLoading)}
			{JSON.stringify(shouldDisplayAlert)}
			{JSON.stringify(severity)}
			{JSON.stringify(alertMessage)}
		</>
	);
};

export default MockComponent;
