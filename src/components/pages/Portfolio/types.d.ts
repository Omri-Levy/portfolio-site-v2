import { DataResponse } from '~/utils/types';

type Node = { content: { value: never }[] };
type HookReturns = () => DataResponse;

export { Node, HookReturns };
