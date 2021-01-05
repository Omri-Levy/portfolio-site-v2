import React from 'react';
import useAllFavicons from '~/hooks/useAllFavicons/useAllFavicons';

const MockComponent: React.FunctionComponent = () => {
	return <div>{JSON.stringify(useAllFavicons())}</div>;
};

export default MockComponent;
