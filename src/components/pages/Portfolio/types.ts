import {Data} from 'src/utils/types';

type Node = { content: { value: any; }[]; };
type HookReturns = () => Data;

export {
    Node,
    HookReturns
};
