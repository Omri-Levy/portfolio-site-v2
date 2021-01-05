import React, { useContext, useEffect, useState } from 'react';
import { Props } from './types';
import { ThemeContext } from '~/context/ThemeContext';
import useTranslations from './useTranslations';

const MockComponent: React.FunctionComponent<Props> = ({ rtl }) => {
	const [isMounted, setIsMounted] = useState(true);
	const { setIsRTL } = useContext(ThemeContext);

	useEffect(() => {
		if (rtl && isMounted) {
			setIsRTL(true);
		}

		return () => setIsMounted(false);
	}, []);

	return (
		<div>
			<h1>{useTranslations(`עברית`, `english`)}</h1>
		</div>
	);
};

export default MockComponent;
