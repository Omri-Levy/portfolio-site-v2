import React from 'react';
import useAllFavicons from '.';

const MockComponent: React.FunctionComponent = () => {
	return <div>{JSON.stringify(useAllFavicons())}</div>;
};

export default MockComponent;
