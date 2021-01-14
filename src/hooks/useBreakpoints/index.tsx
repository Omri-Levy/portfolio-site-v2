import { useTheme } from '@material-ui/core/styles';
import { HookReturns } from './types';

const useBreakpoints: HookReturns = (breakpoint, direction, theme?) => {
	// if no theme was passed in, use the useTheme material-ui hook
	const setTheme = theme ?? useTheme();
	// get the custom breakpoints i.e `sm` or `lg`
	const value = setTheme?.breakpoints.values[breakpoint];
	// decide on breakpoints.down or breakpoints.up based on direction
	const media = setTheme?.breakpoints[direction];

	// returns theme.breakpoints.down(value) or theme.breakpoints.up(value)
	// as a media query string
	return media(value);
};

export default useBreakpoints;