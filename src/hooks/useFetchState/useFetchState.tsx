import { useState } from 'react';
import { generateSeverity } from '~/hooks/useFetchState/generateSeverity';
import { generateAlertMessage } from './generateAlertMessage';
import { generateShouldDisplayAlert } from './generateShouldDisplayAlert';
import { FetchState, Hook } from './types';

const useFetchState: Hook = (props) => {
	const [fetchState, setFetchState] = useState<FetchState>(undefined);
	const { successMessage, errorMessage, cooldownMessage, robotMessage } = props;
	const isLoading = fetchState === `loading`;
	const shouldDisplayAlert = generateShouldDisplayAlert(fetchState);
	const severity = generateSeverity(fetchState);
	const alertMessage = generateAlertMessage({
		fetchState,
		successMessage,
		errorMessage,
		cooldownMessage,
		robotMessage,
	});

	return {
		fetchState,
		setFetchState,
		isLoading,
		shouldDisplayAlert,
		severity,
		alertMessage,
	};
};

export default useFetchState;
