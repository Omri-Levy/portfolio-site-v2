import React from 'react';
import useDevice from '.';

const MockComponent: React.FunctionComponent = () => {
	const { isDesktop } = useDevice();

	return <div>{JSON.stringify(isDesktop)}</div>;
};

export default MockComponent;
