import { Theme } from '@material-ui/core';
import { Breakpoint, Direction } from './types';

const getCustomBreakpoints = (
  breakpoint: Breakpoint,
  theme: Theme,
  direction: Direction,
): string => theme.breakpoints[direction](theme.breakpoints.values[breakpoint]);

export default getCustomBreakpoints;
