import { Translation } from './types';
import useThemeContext from '../../context/ThemeProvider/useThemeContext';

const useTranslations: Translation = (he, en) => {
	const { isRTL } = useThemeContext();

	return isRTL ? he : en;
};

export default useTranslations;
