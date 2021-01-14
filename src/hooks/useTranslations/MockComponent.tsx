import React, { useContext, useEffect, useState } from 'react';
import useTranslations from '.';
import { ThemeContext } from '../../context/ThemeProvider';
import { Props } from './types';

const MockComponent: React.FunctionComponent<Props> = ({ rtl }) => {
	const [isMounted, setIsMounted] = useState(true);
	const { setIsRTL } = useContext(ThemeContext);

	useEffect(() => {
		if (isMounted) {
			setIsRTL(rtl);
			if (typeof window !== `undefined`) {
				localStorage.setItem(`isRTL`, JSON.stringify(rtl));
			}
		}

		return () => setIsMounted(false);
	}, []);

	return <div>{useTranslations(`עברית`, `english`)}</div>;
};

export default MockComponent;
