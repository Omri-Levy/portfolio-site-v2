import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '~/context/ThemeContext';
import { Props } from './types';
import useRTLOrLTRComponent from './useRTLOrLTRComponent';

const MockComponent: React.FunctionComponent<Props> = ({ rtl }) => {
	const { setIsRTL } = useContext(ThemeContext);
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
