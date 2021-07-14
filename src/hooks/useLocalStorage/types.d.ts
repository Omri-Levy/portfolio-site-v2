import { SetState } from '../../utils/types';

type HookReturns = <T>(key: string, defaultValue: T) => [T, SetState<T>];
type SetCachedValue = <T>(toCache: T) => void;
type GetCachedValue = () => any;

export { HookReturns, SetCachedValue, GetCachedValue };
