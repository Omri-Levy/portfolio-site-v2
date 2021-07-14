import React, { useEffect, useState } from 'react';
import useTranslations from '.';
import { Props } from './types';
import useThemeContext from '../../context/ThemeProvider/useThemeContext';

const MockComponent: React.FunctionComponent<Props> = ({ rtl }) => {
	const [isMounted, setIsMounted] = useState(true);
	const { setIsRTL } = useThemeContext();

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
