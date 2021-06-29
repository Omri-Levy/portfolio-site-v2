import React, { useEffect, useState } from 'react';
import useRTLOrLTRComponent from '.';
import { Props } from './types';
import useThemeContext from '../../context/ThemeProvider/useThemeContext';

const MockComponent: React.FunctionComponent<Props> = ({ rtl }) => {
	const { setIsRTL } = useThemeContext();
	const [isMounted, setIsMounted] = useState(true);

	useEffect(() => {
		if (isMounted) {
			setIsRTL(rtl);
			if (typeof window !== `undefined`) {
				localStorage.setItem(`isRTL`, JSON.stringify(rtl));
			}
		}

		return () => setIsMounted(false);
	}, []);

	return <div>{useRTLOrLTRComponent(<h1>rtl</h1>, <h1>ltr</h1>)}</div>;
};

export default MockComponent;
