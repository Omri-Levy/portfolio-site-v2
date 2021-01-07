import React from 'react';
import useMakeTheme from '~/hooks/useMakeTheme/useMakeTheme';

const MockComponent: React.FunctionComponent = () => {
	const theme = useMakeTheme();

	return <div>{JSON.stringify(theme)}</div>;
};

export default MockComponent;
