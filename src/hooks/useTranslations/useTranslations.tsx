import { ThemeContext } from '~/context/ThemeProvider';
import { Translation } from './types';
import { useContext } from 'react';

const useTranslations: Translation = (he, en) => {
	const { isRTL } = useContext(ThemeContext);

	return isRTL ? he : en;
};

export default useTranslations;
