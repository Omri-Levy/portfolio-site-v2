import React from 'react';
import useDevice from '~/hooks/useDevice/useDevice';

const MockComponent: React.FunctionComponent = () => {
	const { isDesktop } = useDevice();

	return <div>{JSON.stringify(isDesktop)}</div>;
};

export default MockComponent;
