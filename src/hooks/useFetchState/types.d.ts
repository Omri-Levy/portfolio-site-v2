import { SetState } from '~/utils/types';

type FetchState =
	| `success`
	| `error`
	| `loading`
	| `cooldown`
	| `robot`
	| undefined;

interface Props {
	successMessage?: string;
	errorMessage?: string;
	cooldownMessage?: string;
	robotMessage?: string;
}

interface HookReturns {
	fetchState: FetchState;
	setFetchState: SetState<FetchState>;
	shouldDisplayAlert: boolean;
	alertMessage: string | null;
	isLoading: boolean;
	severity: string | `success` | `error` | `warning` | undefined;
}

type Hook = (props: Props) => HookReturns;

export { FetchState, Props, HookReturns, Hook };
