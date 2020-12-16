import {DataResponse} from 'src/utils/types';

type Node = { content: { value: any; }[]; };
type HookReturns = () => DataResponse;

export {
    Node,
    HookReturns
};
