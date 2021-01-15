import React from 'react';
import useBreakpoints from '.';

const MockComponent: React.FunctionComponent = () => {
	const mediaQuery = useBreakpoints(`md`, `up`);

	return <div>{JSON.stringify(mediaQuery)}</div>;
};

export default MockComponent;
