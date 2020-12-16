import {useTheme} from 'src/deps';
import {HookReturns} from 'src/hooks/useBreakpoints/types';

const useBreakpoints: HookReturns = (breakpoint, direction, theme?) => {

    // if no theme was passed in, use the useTheme material-ui hook
    const setTheme = theme ?? useTheme();
    // get the custom breakpoints i.e "sm" or "lg"
    const value = setTheme!.breakpoints.values[breakpoint];
    // decide on breakpoints.down or breakpoints.up based on direction
    const media = setTheme!.breakpoints[direction];

    // returns theme.breakpoints.down(value) or theme.breakpoints.up(value)
    return media(value);
};

export default useBreakpoints;
