import React, { useContext, useEffect, useState } from 'react';
import useRTLOrLTRComponent from './useRTLOrLTRComponent';
import { ThemeContext } from '~/context/ThemeContext';
import { Props } from './types';

const MockComponent: React.FunctionComponent<Props> = ({ rtl }) => {
	const { setIsRTL } = useContext(ThemeContext);
	const [isMounted, setIsMounted] = useState(true);

	useEffect(() => {
		if (rtl && isMounted) {
			setIsRTL(true);
		}

		return () => setIsMounted(false);
	}, []);

	return <div>{useRTLOrLTRComponent(<h1>rtl</h1>, <h1>ltr</h1>)}</div>;
};

export default MockComponent;
