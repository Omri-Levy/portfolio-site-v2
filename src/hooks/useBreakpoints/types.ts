import {Theme} from '@material-ui/core';
import {Breakpoint, Direction} from 'src/utils/types';

type HookReturns = (
    breakpoint: Breakpoint,
    direction: Direction,
    theme?: Theme
) => string;

export {HookReturns};
