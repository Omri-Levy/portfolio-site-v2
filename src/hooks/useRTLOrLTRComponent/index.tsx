import { HookReturns } from './types';
import useThemeContext from '../../context/ThemeProvider/useThemeContext';

const UseRTLOrLTRComponent: HookReturns = (RTLComponent, LTRComponent) => {
	const { isRTL } = useThemeContext();

	return isRTL ? RTLComponent : LTRComponent;
};

export default UseRTLOrLTRComponent;
